import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { elements } from "./catalog.js";

const COLORS = {
  H: 0xe8f2fa,
  C: 0x5f7894,
  N: 0x6386ff,
  O: 0xf16b66,
  Na: 0x9d7ce3,
  Cl: 0x72c691,
  Si: 0xbab6e8,
};
const RADII = {
  H: 0.31,
  C: 0.47,
  N: 0.45,
  O: 0.44,
  Na: 0.32,
  Cl: 0.49,
  Si: 0.48,
};
const UP = new THREE.Vector3(0, 1, 0);
const ELEMENT_COLORS = new Map(
  elements.map((e) => [
    e.symbol,
    new THREE.Color().setHSL((e.atomic_number * 0.61803398875) % 1, 0.48, 0.61),
  ]),
);

export function createScienceViewer(
  canvas,
  { onSelect = () => {}, onTick = () => {} } = {},
) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.28;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(
    document.documentElement.classList.contains("desktop-mode")
      ? 0x25272b
      : 0x122738,
  );
  const camera = new THREE.PerspectiveCamera(39, 1, 0.05, 300);
  const orbit = new OrbitControls(camera, canvas);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.08;
  orbit.minDistance = 2;
  orbit.maxDistance = 70;
  scene.add(new THREE.HemisphereLight(0xe3faff, 0x35475e, 2.1));
  const key = new THREE.DirectionalLight(0xffffff, 3);
  key.position.set(5, 7, 9);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x58aaca, 2.4);
  fill.position.set(-7, 1, -5);
  scene.add(fill);
  const root = new THREE.Group();
  scene.add(root);
  let mode = "graph",
    graph = null,
    spacefill = false,
    selected = [],
    pickables = [],
    cellObjects = new Map();
  let dimensions = 4,
    last = performance.now(),
    raf,
    disposed = false;
  const center = new THREE.Vector3(),
    raycaster = new THREE.Raycaster(),
    pointer = new THREE.Vector2();
  function disposeRoot() {
    const geometry = new Set(),
      materials = new Set(),
      textures = new Set();
    root.traverse((o) => {
      if (o.geometry) geometry.add(o.geometry);
      if (o.material) {
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        ms.forEach((m) => {
          materials.add(m);
          if (m.map) textures.add(m.map);
        });
      }
    });
    root.clear();
    geometry.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
    textures.forEach((t) => t.dispose());
    pickables = [];
    cellObjects.clear();
  }
  function sphere(radius, color, options = {}) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, 28, 20),
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.3,
        metalness: 0.12,
        ...options,
      }),
    );
  }
  function label(text) {
    const c = document.createElement("canvas");
    c.width = 160;
    c.height = 80;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#f3f8ff";
    ctx.font = "600 42px Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 80, 40);
    const map = new THREE.CanvasTexture(c);
    map.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map, depthTest: false, transparent: true }),
    );
    sprite.scale.set(0.8, 0.4, 1);
    sprite.renderOrder = 5;
    return sprite;
  }
  function cylinder(a, b, color, radius = 0.07) {
    const delta = b.clone().sub(a);
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, delta.length(), 10),
      new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.1 }),
    );
    mesh.position.copy(a).add(b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(UP, delta.normalize());
    root.add(mesh);
    return mesh;
  }
  function resetCamera() {
    camera.near = Math.max(0.001, dimensions / 10000);
    camera.far = Math.max(300, dimensions * 30);
    orbit.minDistance = Math.max(0.1, dimensions / 100);
    orbit.maxDistance = Math.max(70, dimensions * 12);
    camera.updateProjectionMatrix();
    camera.position.set(dimensions * 0.9, dimensions * 0.6, dimensions * 1.8);
    orbit.target.set(0, 0, 0);
    camera.lookAt(orbit.target);
    orbit.update();
  }
  function setGraph(
    data,
    { reset = false, dense = false, structure = false } = {},
  ) {
    graph = { data, dense, structure };
    mode = "graph";
    disposeRoot();
    const box = new THREE.Box3();
    data.atoms.forEach((a) =>
      box.expandByPoint(new THREE.Vector3(...a.position)),
    );
    if (data.atoms.length) {
      box.getCenter(center);
      dimensions = Math.max(
        3.5,
        box.getSize(new THREE.Vector3()).length() * 0.78,
      );
    } else {
      center.set(0, 0, 0);
      dimensions = 4;
    }
    const positions = new Map();
    data.atoms.forEach((atom) => {
      const p = new THREE.Vector3(...atom.position).sub(center);
      positions.set(atom.id, p);
      const radius =
        (RADII[atom.element] || 0.45) *
        (dense ? 0.55 : 1) *
        (spacefill ? 1.55 : 1);
      const mesh = sphere(
        radius,
        COLORS[atom.element] || ELEMENT_COLORS.get(atom.element) || 0xaabacd,
      );
      mesh.position.copy(p);
      mesh.userData.atomId = atom.id;
      mesh.userData.radius = radius;
      root.add(mesh);
      pickables.push(mesh);
      if (!dense) {
        const t = label(atom.element);
        t.position.copy(p);
        t.position.y += radius + 0.3;
        root.add(t);
      }
      if (selected.includes(atom.id)) {
        const halo = sphere(radius * 1.17, 0xffd285, {
          transparent: true,
          opacity: 0.35,
          depthWrite: false,
        });
        halo.position.copy(p);
        root.add(halo);
      }
    });
    if (!spacefill)
      data.bonds.forEach((bond) => {
        const a = positions.get(bond.a),
          b = positions.get(bond.b);
        if (!a || !b) return;
        const direction = b.clone().sub(a).normalize();
        let normal = direction.clone().cross(new THREE.Vector3(0, 0, 1));
        if (normal.lengthSq() < 0.01) normal = direction.clone().cross(UP);
        normal.normalize();
        const order = dense ? 1 : bond.order;
        for (let i = 0; i < order; i++) {
          const offset = normal
            .clone()
            .multiplyScalar((i - (order - 1) / 2) * 0.17);
          const x = a.clone().add(offset),
            y = b.clone().add(offset);
          cylinder(x, y, dense ? 0x607c92 : 0x9eb8c9, dense ? 0.035 : 0.065);
        }
      });
    camera.far = Math.max(300, dimensions * 30);
    orbit.maxDistance = Math.max(70, dimensions * 12);
    camera.updateProjectionMatrix();
    if (reset) resetCamera();
  }
  function select(ids) {
    selected = [...ids];
    if (graph && mode === "graph")
      setGraph(graph.data, { dense: graph.dense, structure: graph.structure });
  }
  function setRepresentation(value) {
    spacefill = value;
    if (graph && mode === "graph")
      setGraph(graph.data, { dense: graph.dense, structure: graph.structure });
  }
  function makeCell(id, index, count) {
    const group = new THREE.Group();
    group.position.x = (index - (count - 1) / 2) * 3.7;
    const membrane = sphere(1.65, 0x43c4b9, {
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      metalness: 0.02,
      roughness: 0.15,
      side: THREE.DoubleSide,
    });
    group.add(membrane);
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(1.65, 22, 14),
      new THREE.MeshBasicMaterial({
        color: 0x70d8d0,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
      }),
    );
    group.add(wire);
    const nucleus = sphere(0.57, 0x9384c9, {
      roughness: 0.55,
      metalness: 0.05,
    });
    nucleus.position.set(-0.23, 0.1, 0.25);
    group.add(nucleus);
    const nucleolus = sphere(0.18, 0xb7a3f0);
    nucleolus.position.set(-0.1, 0.15, 0.72);
    group.add(nucleolus);
    for (let n = 0; n < 7; n++) {
      const angle = (n * Math.PI * 2) / 7;
      const m = sphere(0.13, 0xe4b280, { roughness: 0.5 });
      m.scale.set(1.8, 0.75, 1);
      m.position.set(
        Math.cos(angle) * 1.05,
        Math.sin(angle) * 0.9,
        Math.sin(n * 2) * 0.45,
      );
      m.rotation.z = angle;
      group.add(m);
    }
    const t = label(count === 1 ? "Hücre" : `Hücre ${index + 1}`);
    t.position.set(0, 2.1, 0);
    t.scale.set(1.6, 0.8, 1);
    group.add(t);
    root.add(group);
    cellObjects.set(id, group);
    return group;
  }
  function setCells(frame, initialVolume = 1, { reset = false } = {}) {
    if (
      mode !== "cells" ||
      frame.cells.some((c) => !cellObjects.has(c.id)) ||
      cellObjects.size !== frame.cells.length
    ) {
      disposeRoot();
      mode = "cells";
      graph = null;
      frame.cells.forEach((c, i) => makeCell(c.id, i, frame.cells.length));
      dimensions = frame.cells.length > 1 ? 6 : 4.3;
    }
    frame.cells.forEach((c) => {
      const group = cellObjects.get(c.id);
      group.scale.setScalar(Math.cbrt(c.volume_pl / initialVolume));
    });
    if (reset) resetCamera();
  }
  let down;
  canvas.addEventListener("pointerdown", (event) => {
    down = [event.clientX, event.clientY];
  });
  canvas.addEventListener("pointerup", (event) => {
    if (
      mode !== "graph" ||
      !down ||
      Math.hypot(event.clientX - down[0], event.clientY - down[1]) > 5
    )
      return;
    const rect = canvas.getBoundingClientRect();
    pointer.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      (-(event.clientY - rect.top) / rect.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(pickables, false)[0];
    if (hit) onSelect(hit.object.userData.atomId);
  });
  const observer = new ResizeObserver(() => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  });
  observer.observe(canvas);
  function loop(now) {
    if (disposed) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!document.hidden) {
      onTick(dt);
      orbit.update();
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(loop);
  }
  resetCamera();
  raf = requestAnimationFrame(loop);
  return {
    setGraph,
    setCells,
    select,
    setRepresentation,
    resetCamera,
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      orbit.dispose();
      disposeRoot();
      renderer.dispose();
    },
  };
}
