import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';

const MATERIALS = {
  stone: { color: 0x8595a5, roughness: 0.88, metalness: 0.02 },
  wood: { color: 0xbc8a53, roughness: 0.72, metalness: 0.0 },
  rubber: { color: 0xd66e54, roughness: 0.91, metalness: 0.0 },
  steel: { color: 0xb8c8d6, roughness: 0.27, metalness: 0.64 },
};
const DEG = THREE.MathUtils.DEG2RAD;
const RAD = THREE.MathUtils.RAD2DEG;
const COIL_SEGMENTS = 96;

function vectorValues(value, fallback = [0, 0, 0]) {
  return Array.isArray(value) && value.length >= 3 && value.slice(0, 3).every(Number.isFinite)
    ? value.slice(0, 3) : [...fallback];
}

function disposeTree(root) {
  const geometries = new Set();
  const materials = new Set();
  root.traverse((object) => {
    if (object.geometry) geometries.add(object.geometry);
    const list = Array.isArray(object.material) ? object.material : [object.material];
    list.forEach((material) => { if (material) materials.add(material); });
    object.dispose?.();
  });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => material.dispose());
  root.removeFromParent();
}

/**
 * Renders plain scene/frame data. No physics or controller state lives here.
 * Coordinates are metres, with +Y up. Scene rotations are XYZ Euler degrees;
 * frame rotations are quaternions [x, y, z, w]. Imperative select() is silent.
 */
export function createViewport(canvas, { onSelect = () => {}, onTransform = () => {}, onTick = () => {} } = {}) {
  if (!canvas || typeof canvas.getContext !== 'function') {
    throw new Error('3B görünüm için geçerli bir çizim alanı bulunamadı.');
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch {
    throw new Error('3B görünüm açılamadı. WebGL 2 destekli bir tarayıcı ve donanım hızlandırması gerekiyor.');
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const desktopMode = document.documentElement.classList.contains('desktop-mode');
  const backgroundColor = desktopMode ? 0x25272b : 0xf2f7fc;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(backgroundColor);
  scene.fog = new THREE.Fog(backgroundColor, 55, 180);
  const camera = new THREE.PerspectiveCamera(43, 1, 0.03, 250);
  camera.position.set(13, 10, 16);
  const orbit = new OrbitControls(camera, canvas);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.075;
  orbit.minDistance = 0.4;
  orbit.maxDistance = 150;
  orbit.maxPolarAngle = Math.PI * 0.495;
  orbit.screenSpacePanning = true;
  orbit.target.set(0, 2, 0);
  orbit.update();

  const transform = new TransformControls(camera, canvas);
  transform.setMode('translate');
  transform.setSpace('world');
  transform.setSize(0.9);
  const transformHelper = transform.getHelper();
  scene.add(transformHelper);

  const sky = new THREE.HemisphereLight(0xffffff, 0xa9bdce, 2.2);
  const key = new THREE.DirectionalLight(0xfff8ed, 3.1);
  key.position.set(-9, 18, 12);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.normalBias = 0.025;
  key.shadow.bias = -0.0001;
  key.shadow.radius = 3;
  key.shadow.camera.left = -18;
  key.shadow.camera.right = 18;
  key.shadow.camera.top = 18;
  key.shadow.camera.bottom = -18;
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 75;
  const fill = new THREE.DirectionalLight(0xd5e9ff, 1.2);
  fill.position.set(8, 7, -10);
  scene.add(sky, key, key.target, fill);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 160),
    new THREE.MeshStandardMaterial({ color: desktopMode ? 0x34373c : 0xe5eef6, roughness: 0.97, metalness: 0 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.008;
  floor.receiveShadow = true;
  scene.add(floor);
  const grid = new THREE.GridHelper(60, 60, desktopMode ? 0x777d86 : 0x9cb7cb, desktopMode ? 0x535860 : 0xc6d8e5);
  grid.position.y = 0.002;
  grid.material.transparent = true;
  grid.material.opacity = 0.72;
  grid.material.depthWrite = false;
  grid.material.toneMapped = false;
  scene.add(grid);

  const bodyRoot = new THREE.Group();
  const springRoot = new THREE.Group();
  scene.add(bodyRoot, springRoot);
  const selectionBox = new THREE.BoxHelper(undefined, 0x1973c6);
  selectionBox.visible = false;
  selectionBox.material.transparent = true;
  selectionBox.material.opacity = 0.8;
  selectionBox.material.depthTest = false;
  selectionBox.material.toneMapped = false;
  selectionBox.renderOrder = 3;
  scene.add(selectionBox);

  const bodies = new Map();
  const springs = [];
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  const pointerIds = new Set();
  const direction = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const binormal = new THREE.Vector3();
  const referenceAxis = new THREE.Vector3();
  const center = new THREE.Vector3();
  const extent = new THREE.Vector3();
  const bounds = new THREE.Box3();
  const euler = new THREE.Euler(0, 0, 0, 'XYZ');
  let selectedId = null;
  let editable = true;
  let disposed = false;
  let initializedScene = false;
  let sceneRevision = 0;
  let trackedPointer = null;
  let transformGesture = null;
  let cancelingTransform = false;

  function makeBody(body) {
    const size = vectorValues(body.size, [1, 1, 1]).map((value) => Math.max(0.001, value));
    let geometry;
    if (body.shape === 'sphere') geometry = new THREE.SphereGeometry(size[0] / 2, 32, 24);
    else if (body.shape === 'cylinder') geometry = new THREE.CylinderGeometry(size[0] / 2, size[0] / 2, size[1], 32);
    else geometry = new THREE.BoxGeometry(...size);

    const options = MATERIALS[body.material] || MATERIALS.stone;
    const material = new THREE.MeshStandardMaterial({ ...options });
    if (body.fixed) {
      material.color.lerp(new THREE.Color(0x2d4d69), 0.7);
      material.roughness = Math.max(material.roughness, 0.48);
    }
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = String(body.label || body.id);
    mesh.userData.bodyId = body.id;
    mesh.userData.fixed = Boolean(body.fixed);
    mesh.position.fromArray(vectorValues(body.position));
    mesh.rotation.set(...vectorValues(body.rotation_deg).map((value) => value * DEG), 'XYZ');
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    // A thin equator makes a sphere's orientation visible without a texture.
    if (body.shape === 'sphere') {
      const radius = size[0] * 0.502;
      const points = Array.from({ length: 64 }, (_, i) => {
        const angle = i / 64 * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      });
      const seam = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color: body.fixed ? 0xacc7db : 0x526e88, transparent: true, opacity: 0.55 }));
      mesh.add(seam);
    }
    bodyRoot.add(mesh);
    bodies.set(body.id, { mesh, fixed: Boolean(body.fixed) });
  }

  function makeSpring(spring) {
    const positions = new Float32Array((COIL_SEGMENTS + 1) * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x5689ac, transparent: true, opacity: 0.95 }));
    line.name = String(spring.id || 'Yay');
    line.frustumCulled = false;
    springRoot.add(line);
    springs.push({ line, a: spring.a, b: spring.b,
      previousA: new THREE.Vector3(Infinity, Infinity, Infinity),
      previousB: new THREE.Vector3(Infinity, Infinity, Infinity) });
  }

  function updateSprings() {
    for (const spring of springs) {
      const a = bodies.get(spring.a)?.mesh.position;
      const b = bodies.get(spring.b)?.mesh.position;
      spring.line.visible = Boolean(a && b);
      if (!a || !b || (a.equals(spring.previousA) && b.equals(spring.previousB))) continue;
      spring.previousA.copy(a);
      spring.previousB.copy(b);
      direction.subVectors(b, a);
      const length = direction.length();
      direction.normalize();
      referenceAxis.set(Math.abs(direction.y) > 0.9 ? 1 : 0, Math.abs(direction.y) > 0.9 ? 0 : 1, 0);
      normal.crossVectors(direction, referenceAxis).normalize();
      binormal.crossVectors(direction, normal).normalize();
      const radius = Math.min(0.16, length * 0.07);
      const attribute = spring.line.geometry.getAttribute('position');
      for (let i = 0; i <= COIL_SEGMENTS; i++) {
        const t = i / COIL_SEGMENTS;
        const taper = Math.min(1, t * 10, (1 - t) * 10);
        const angle = t * Math.PI * 2 * 8;
        const u = Math.cos(angle) * radius * taper;
        const v = Math.sin(angle) * radius * taper;
        attribute.setXYZ(i, a.x + direction.x * length * t + normal.x * u + binormal.x * v,
          a.y + direction.y * length * t + normal.y * u + binormal.y * v,
          a.z + direction.z * length * t + normal.z * u + binormal.z * v);
      }
      attribute.needsUpdate = true;
    }
  }

  function updateSelection() {
    const selected = bodies.get(selectedId)?.mesh;
    selectionBox.visible = Boolean(selected);
    if (selected) selectionBox.setFromObject(selected);
  }

  function select(id) {
    if (disposed) return;
    selectedId = bodies.has(id) ? id : null;
    const selected = bodies.get(selectedId)?.mesh;
    transform.detach();
    if (editable && selected) transform.attach(selected);
    updateSelection();
  }

  function cancelGesture() {
    if (!transform.dragging) return;
    cancelingTransform = true;
    transform.reset();
    transform.pointerUp({ button: 0 });
    transformGesture = null;
    cancelingTransform = false;
    orbit.enabled = true;
    updateSprings();
    updateSelection();
  }

  function setScene(data) {
    if (disposed) return;
    sceneRevision++;
    cancelGesture();
    transform.detach();
    [...bodyRoot.children, ...springRoot.children].forEach(disposeTree);
    bodies.clear();
    springs.length = 0;
    for (const body of data?.bodies || []) {
      if (body && body.id !== null && body.id !== undefined && !bodies.has(body.id)) makeBody(body);
    }
    for (const spring of data?.springs || []) if (spring) makeSpring(spring);
    renderer.renderLists.dispose();
    bodyRoot.updateMatrixWorld(true);
    updateSprings();
    select(selectedId);
    if (!initializedScene) {
      initializedScene = true;
      resetCamera();
    }
  }

  function setFrame(frame) {
    if (disposed) return;
    for (const body of frame?.bodies || []) {
      const record = bodies.get(body.id);
      if (!record || (transform.dragging && transform.object === record.mesh)) continue;
      if (Array.isArray(body.position) && body.position.length >= 3 && body.position.slice(0, 3).every(Number.isFinite)) {
        record.mesh.position.fromArray(body.position);
      }
      if (Array.isArray(body.rotation) && body.rotation.length === 4 && body.rotation.every(Number.isFinite)) {
        const magnitude = Math.hypot(...body.rotation);
        if (magnitude > 1e-12) record.mesh.quaternion.fromArray(body.rotation).normalize();
      }
      record.mesh.userData.sleeping = Boolean(body.sleeping);
    }
    updateSprings();
    updateSelection();
  }

  function setEditable(value) {
    if (disposed) return;
    if (!value) cancelGesture();
    editable = Boolean(value);
    transform.enabled = editable;
    select(selectedId);
  }

  function setMode(mode) {
    if (disposed || !['translate', 'rotate'].includes(mode)) return;
    cancelGesture();
    transform.setMode(mode);
  }

  function resetCamera() {
    if (disposed) return;
    bodyRoot.updateMatrixWorld(true);
    bounds.setFromObject(bodyRoot);
    if (bounds.isEmpty()) bounds.set(new THREE.Vector3(-4, 0, -4), new THREE.Vector3(4, 4, 4));
    bounds.getCenter(center);
    bounds.getSize(extent);
    center.y = Math.max(0.7, center.y);
    const radius = Math.max(4.5, extent.length() * 0.5 + 0.8);
    const verticalFov = camera.fov * DEG;
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
    const distance = radius / Math.sin(Math.min(verticalFov, horizontalFov) / 2) * 1.15;
    const damping = orbit.enableDamping;
    orbit.enableDamping = false;
    orbit.update();
    orbit.target.copy(center);
    camera.position.copy(center).addScaledVector(direction.set(1, 0.76, 1.2).normalize(), distance);
    camera.near = Math.max(0.02, distance / 3000);
    camera.far = Math.max(250, distance + radius * 5);
    camera.updateProjectionMatrix();
    orbit.maxDistance = Math.max(80, distance * 5);
    orbit.update();
    orbit.enableDamping = damping;

    const shadowExtent = Math.max(14, Math.min(80, radius * 1.35));
    key.target.position.copy(center);
    key.position.copy(center).add(new THREE.Vector3(-shadowExtent * 0.65, shadowExtent * 1.4, shadowExtent * 0.9));
    Object.assign(key.shadow.camera, { left: -shadowExtent, right: shadowExtent,
      top: shadowExtent, bottom: -shadowExtent, far: shadowExtent * 4 });
    key.shadow.camera.updateProjectionMatrix();
    scene.fog.near = Math.max(55, distance * 1.6);
    scene.fog.far = Math.max(180, distance * 4);
  }

  function onPointerDown(event) {
    pointerIds.add(event.pointerId);
    if (pointerIds.size > 1) {
      if (trackedPointer) trackedPointer.blocked = true;
      return;
    }
    if (event.button !== 0 || event.isPrimary === false) return;
    trackedPointer = { id: event.pointerId, x: event.clientX, y: event.clientY,
      blocked: Boolean(transform.dragging), moved: false };
  }

  function onPointerMove(event) {
    if (trackedPointer?.id !== event.pointerId) return;
    if (Math.hypot(event.clientX - trackedPointer.x, event.clientY - trackedPointer.y) > 5) trackedPointer.moved = true;
  }

  function onPointerUp(event) {
    pointerIds.delete(event.pointerId);
    if (trackedPointer?.id !== event.pointerId) return;
    const gesture = trackedPointer;
    trackedPointer = null;
    if (gesture.blocked || gesture.moved || event.button !== 0 ||
        Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 5) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointerNdc.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld();
    raycaster.setFromCamera(pointerNdc, camera);
    const hit = raycaster.intersectObjects([...bodies.values()].map(({ mesh }) => mesh), false)[0];
    const id = hit?.object.userData.bodyId ?? null;
    select(id);
    onSelect(id);
  }

  function onPointerCancel(event) {
    pointerIds.delete(event.pointerId);
    if (trackedPointer?.id === event.pointerId) trackedPointer = null;
    cancelGesture();
  }

  function onOrbitChange() {
    if (trackedPointer && !transform.dragging) trackedPointer.blocked = true;
  }

  function onDraggingChanged(event) {
    orbit.enabled = !event.value;
    if (event.value && trackedPointer) trackedPointer.blocked = true;
  }

  function onTransformStart() {
    if (!transform.object) return;
    transformGesture = { object: transform.object, position: transform.object.position.clone(),
      quaternion: transform.object.quaternion.clone() };
    if (trackedPointer) trackedPointer.blocked = true;
  }

  function onTransformPreview() {
    updateSprings();
    updateSelection();
  }

  function onTransformEnd() {
    const gesture = transformGesture;
    transformGesture = null;
    if (!gesture || cancelingTransform || !editable) return;
    const mesh = gesture.object;
    if (mesh.position.distanceToSquared(gesture.position) < 1e-14 &&
        1 - Math.abs(mesh.quaternion.dot(gesture.quaternion)) < 1e-12) return;
    euler.setFromQuaternion(mesh.quaternion, 'XYZ');
    const payload = { id: mesh.userData.bodyId, position: mesh.position.toArray(),
      rotation_deg: [euler.x * RAD, euler.y * RAD, euler.z * RAD] };
    const revision = sceneRevision;
    // Let TransformControls finish pointerUp before the controller rebuilds a scene.
    queueMicrotask(() => {
      if (!disposed && editable && revision === sceneRevision) onTransform(payload);
    });
  }

  canvas.addEventListener('pointerdown', onPointerDown, true);
  canvas.addEventListener('pointermove', onPointerMove, true);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerCancel);
  orbit.addEventListener('change', onOrbitChange);
  transform.addEventListener('dragging-changed', onDraggingChanged);
  transform.addEventListener('mouseDown', onTransformStart);
  transform.addEventListener('objectChange', onTransformPreview);
  transform.addEventListener('mouseUp', onTransformEnd);

  function resize() {
    if (disposed) return;
    const parent = canvas.parentElement || canvas;
    const width = Math.max(1, parent.clientWidth || canvas.clientWidth || 640);
    const height = Math.max(1, parent.clientHeight || canvas.clientHeight || 400);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas.parentElement || canvas);
  window.addEventListener('resize', resize);
  resize();

  const timer = new THREE.Timer();
  timer.connect(document);
  renderer.setAnimationLoop(() => {
    if (disposed) return;
    timer.update();
    const dt = Math.min(0.1, Math.max(0, timer.getDelta()));
    onTick(dt);
    orbit.update();
    updateSprings();
    updateSelection();
    renderer.render(scene, camera);
  });
  window.__yorungeRenderer = renderer;

  function dispose() {
    if (disposed) return;
    disposed = true;
    renderer.setAnimationLoop(null);
    timer.dispose();
    resizeObserver.disconnect();
    window.removeEventListener('resize', resize);
    canvas.removeEventListener('pointerdown', onPointerDown, true);
    canvas.removeEventListener('pointermove', onPointerMove, true);
    canvas.removeEventListener('pointerup', onPointerUp);
    canvas.removeEventListener('pointercancel', onPointerCancel);
    orbit.removeEventListener('change', onOrbitChange);
    transform.removeEventListener('dragging-changed', onDraggingChanged);
    transform.removeEventListener('mouseDown', onTransformStart);
    transform.removeEventListener('objectChange', onTransformPreview);
    transform.removeEventListener('mouseUp', onTransformEnd);
    orbit.dispose();
    transformHelper.removeFromParent();
    transform.dispose();
    [...scene.children].forEach(disposeTree);
    bodies.clear();
    springs.length = 0;
    renderer.renderLists.dispose();
    renderer.dispose();
    if (window.__yorungeRenderer === renderer) delete window.__yorungeRenderer;
  }

  return { setScene, setFrame, select, setEditable, setMode, resetCamera, dispose };
}
