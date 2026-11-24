var si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oc=0,Jo=1,Bc=2;var $s=1,kc=2,os=3,ai=0,Gt=1,rn=2,yi=0,ls=1,jo=2,Qo=3,el=4,zc=5;var xi=100,Gc=101,Hc=102,Vc=103,Wc=104,Xc=200,qc=201,Yc=202,Kc=203,tl=204,nl=205,Zc=206,$c=207,Jc=208,jc=209,Qc=210,eh=211,th=212,nh=213,ih=214,zr=0,Gr=1,Hr=2,Xi=3,Vr=4,Wr=5,Xr=6,qr=7,il=0,sh=1,rh=2,Rn=0,sl=1,rl=2,al=3,Js=4,ol=5,ll=6,cl=7;var hl=300,vi=301,cs=302,_a=303,ya=304,Yr=1e3,wn=1001,Kr=1002,Tt=1003,ah=1004;var js=1005;var kt=1006,xa=1007;var Wn=1008;var Wt=1009,ul=1010,dl=1011,hs=1012,va=1013,_n=1014,yn=1015,xn=1016,ba=1017,Sa=1018,bi=1020,fl=35902,pl=35899,ml=1021,gl=1022,vn=1023,zn=1026,Xn=1027,_l=1028,Ma=1029,oi=1030,wa=1031;var Ta=1033,Qs=33776,er=33777,tr=33778,nr=33779,Ea=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,Ia=37492,La=37496,Da=37488,Na=37489,ir=37490,Ua=37491,Fa=37808,Oa=37809,Ba=37810,ka=37811,za=37812,Ga=37813,Ha=37814,Va=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Ka=37820,Za=37821,$a=36492,Ja=36494,ja=36495,Qa=36283,eo=36284,sr=36285,to=36286;var Es=2300,Zr=2301,Br=2302,Vo=2303,Wo=2400,Xo=2401,qo=2402;var oh=3200;var no=0,lh=1,qn="",Nt="srgb",As="srgb-linear",Rs="linear",je="srgb";var kr=7680;var ch=519,hh=512,uh=513,dh=514,yl=515,fh=516,ph=517,xl=518,vl=519,bl=35044;var Sl="300 es",sn=2e3,qi=2001;function Au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){let i=Cs("canvas");return i.style.display="block",i}var lc={},Yi=null;function Ps(...i){let e="THREE."+i.shift();Yi?Yi("log",e,...i):console.log(e,...i)}function gh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=gh(i);let e="THREE."+i.shift();if(Yi)Yi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=gh(i);let e="THREE."+i.shift();if(Yi)Yi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ms(...i){let e=i.join(" ");e in lc||(lc[e]=!0,Ne(...i))}function _h(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yh={[zr]:zr,[Hr]:Xr,[Vr]:Vr,[Xi]:Wr,[Gr]:Gr,[Xr]:Hr,[qr]:qr,[Wr]:Xi},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,ws=Math.PI/180,Ki=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ml(i,e){return(i%e+e)%e}function Cu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ts(i,e,t){return(1-t)*i+t*e}function Iu(i,e,t,n){return Ts(i,e,1-Math.exp(-t*n))}function Lu(i,e=1){return e-Math.abs(Ml(i,e*2)-e)}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fu(i,e){return i+Math.random()*(e-i)}function Ou(i){return i*(.5-Math.random())}function Bu(i){i!==void 0&&(cc=i);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ku(i){return i*ws}function zu(i){return i*Ki}function Gu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),m=r((n-e)/2),y=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*y,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*y,o*c);break;case"ZYZ":i.set(l*y,l*m,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function io(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tl(i,e){if(e.constructor===Float32Array)return i;let t=io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function El(i,e){if(e.constructor===Float32Array)return i;let t=io(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Al={DEG2RAD:ws,RAD2DEG:Ki,generateUUID:li,clamp:We,euclideanModulo:Ml,mapLinear:Cu,inverseLerp:Pu,lerp:Ts,damp:Iu,pingpong:Lu,smoothstep:Du,smootherstep:Nu,randInt:Uu,randFloat:Fu,randFloatSpread:Ou,seededRandom:Bu,degToRad:ku,radToDeg:zu,isPowerOfTwo:Gu,ceilPowerOfTwo:Hu,floorPowerOfTwo:wl,setQuaternionFromProperEuler:Vu,normalize:El,denormalize:Tl},Ie=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],y=r[a+2],b=r[a+3];if(f!==b||l!==u||c!==m||h!==y){let p=l*u+c*m+h*y+f*b;p<0&&(u=-u,m=-m,y=-y,b=-b,p=-p);let d=1-o;if(p<.9995){let S=Math.acos(p),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,l=l*d+u*o,c=c*d+m*o,h=h*d+y*o,f=f*d+b*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+y*o,f=f*d+b*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],y=r[a+3];return e[t]=o*y+h*f+l*m-c*u,e[t+1]=l*y+h*u+c*f-o*m,e[t+2]=c*y+h*m+o*u-l*f,e[t+3]=h*y-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*m*y,this._y=c*m*f-u*h*y,this._z=c*h*y+u*m*f,this._w=c*h*f-u*m*y;break;case"YXZ":this._x=u*h*f+c*m*y,this._y=c*m*f-u*h*y,this._z=c*h*y-u*m*f,this._w=c*h*f+u*m*y;break;case"ZXY":this._x=u*h*f-c*m*y,this._y=c*m*f+u*h*y,this._z=c*h*y+u*m*f,this._w=c*h*f-u*m*y;break;case"ZYX":this._x=u*h*f-c*m*y,this._y=c*m*f+u*h*y,this._z=c*h*y-u*m*f,this._w=c*h*f+u*m*y;break;case"YZX":this._x=u*h*f+c*m*y,this._y=c*m*f+u*h*y,this._z=c*h*y-u*m*f,this._w=c*h*f-u*m*y;break;case"XZY":this._x=u*h*f-c*m*y,this._y=c*m*f-u*h*y,this._z=c*h*y+u*m*f,this._w=c*h*f+u*m*y;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new F,hc=new Zt,Fe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],y=n[8],b=s[0],p=s[3],d=s[6],S=s[1],A=s[4],M=s[7],E=s[2],T=s[5],g=s[8];return r[0]=a*b+o*S+l*E,r[3]=a*p+o*A+l*T,r[6]=a*d+o*M+l*g,r[1]=c*b+h*S+f*E,r[4]=c*p+h*A+f*T,r[7]=c*d+h*M+f*g,r[2]=u*b+m*S+y*E,r[5]=u*p+m*A+y*T,r[8]=u*d+m*M+y*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,m=c*r-a*l,y=t*f+n*u+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return e[0]=f*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=u*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mo=new Fe,uc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wu(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Rs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var Ye=Wu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,$r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Cs("canvas")),Ai.width=e.width,Ai.height=e.height;let s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xu=0,Zi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var qu=0,To=new F,zt=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,s=wn,r=kt,a=Wn,o=vn,l=Wt,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=li(),this.name="",this.source=new Zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=hl;zt.DEFAULT_ANISOTROPY=1;var lt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],y=l[9],b=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(m+1)/2,E=(d+1)/2,T=(h+u)/4,g=(f+b)/4,v=(y+p)/4;return A>M&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=g/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=g/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-y)*(p-y)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-y)/S,this.y=(f-b)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jr=class extends mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new zt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Jr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Is=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var st=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,f,u,m,y,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,m,y,b,p)}set(e,t,n,s,r,a,o,l,c,h,f,u,m,y,b,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=y,d[11]=b,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*f,y=o*h,b=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+y*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=y+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*f,y=c*h,b=c*f;t[0]=u+b*o,t[4]=y*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-y,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*f,y=c*h,b=c*f;t[0]=u-b*o,t[4]=-a*f,t[8]=y+m*o,t[1]=m+y*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*f,y=o*h,b=o*f;t[0]=l*h,t[4]=y*c-m,t[8]=u*c+b,t[1]=l*f,t[5]=b*c+u,t[9]=m*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,y=o*l,b=o*c;t[0]=l*h,t[4]=b-u*f,t[8]=y*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+y,t[10]=u-b*f}else if(e.order==="XZY"){let u=a*l,m=a*c,y=o*l,b=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+b,t[5]=a*h,t[9]=m*f-y,t[2]=y*f-m,t[6]=o*h,t[10]=b*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,Ku)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Zn.crossVectors(n,qt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Zn.crossVectors(n,qt)),Zn.normalize(),mr.crossVectors(qt,Zn),s[0]=Zn.x,s[4]=mr.x,s[8]=qt.x,s[1]=Zn.y,s[5]=mr.y,s[9]=qt.y,s[2]=Zn.z,s[6]=mr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],y=n[2],b=n[6],p=n[10],d=n[14],S=n[3],A=n[7],M=n[11],E=n[15],T=s[0],g=s[4],v=s[8],U=s[12],L=s[1],N=s[5],O=s[9],q=s[13],C=s[2],W=s[6],Z=s[10],V=s[14],ie=s[3],Y=s[7],G=s[11],J=s[15];return r[0]=a*T+o*L+l*C+c*ie,r[4]=a*g+o*N+l*W+c*Y,r[8]=a*v+o*O+l*Z+c*G,r[12]=a*U+o*q+l*V+c*J,r[1]=h*T+f*L+u*C+m*ie,r[5]=h*g+f*N+u*W+m*Y,r[9]=h*v+f*O+u*Z+m*G,r[13]=h*U+f*q+u*V+m*J,r[2]=y*T+b*L+p*C+d*ie,r[6]=y*g+b*N+p*W+d*Y,r[10]=y*v+b*O+p*Z+d*G,r[14]=y*U+b*q+p*V+d*J,r[3]=S*T+A*L+M*C+E*ie,r[7]=S*g+A*N+M*W+E*Y,r[11]=S*v+A*O+M*Z+E*G,r[15]=S*U+A*q+M*V+E*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],y=e[3],b=e[7],p=e[11],d=e[15],S=l*m-c*u,A=o*m-c*f,M=o*u-l*f,E=a*m-c*h,T=a*u-l*h,g=a*f-o*h;return t*(b*S-p*A+d*M)-n*(y*S-p*E+d*T)+s*(y*A-b*E+d*g)-r*(y*M-b*T+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],y=e[12],b=e[13],p=e[14],d=e[15],S=t*o-n*a,A=t*l-s*a,M=t*c-r*a,E=n*l-s*o,T=n*c-r*o,g=s*c-r*l,v=h*b-f*y,U=h*p-u*y,L=h*d-m*y,N=f*p-u*b,O=f*d-m*b,q=u*d-m*p,C=S*q-A*O+M*N+E*L-T*U+g*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/C;return e[0]=(o*q-l*O+c*N)*W,e[1]=(s*O-n*q-r*N)*W,e[2]=(b*g-p*T+d*E)*W,e[3]=(u*T-f*g-m*E)*W,e[4]=(l*L-a*q-c*U)*W,e[5]=(t*q-s*L+r*U)*W,e[6]=(p*M-y*g-d*A)*W,e[7]=(h*g-u*M+m*A)*W,e[8]=(a*O-o*L+c*v)*W,e[9]=(n*L-t*O-r*v)*W,e[10]=(y*T-b*M+d*S)*W,e[11]=(f*M-h*T-m*S)*W,e[12]=(o*U-a*N-l*v)*W,e[13]=(t*N-n*U+s*v)*W,e[14]=(b*A-y*E-p*S)*W,e[15]=(h*E-f*A+u*S)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,m=r*h,y=r*f,b=a*h,p=a*f,d=o*f,S=l*c,A=l*h,M=l*f,E=n.x,T=n.y,g=n.z;return s[0]=(1-(b+d))*E,s[1]=(m+M)*E,s[2]=(y-A)*E,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(u+d))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(y+A)*g,s[9]=(p-S)*g,s[10]=(1-(u+b))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);let c=1/a,h=1/o,f=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),y,b;if(l)y=r/(a-r),b=a*r/(a-r);else if(o===sn)y=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===qi)y=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),y,b;if(l)y=1/(a-r),b=a/(a-r);else if(o===sn)y=-2/(a-r),b=-(a+r)/(a-r);else if(o===qi)y=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new F,un=new st,Yu=new F(0,0,0),Ku=new F(1,1,1),Zn=new F,mr=new F,qt=new F,fc=new st,pc=new Zt,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var $i=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zu=0,mc=new F,Ci=new Zt,Dn=new st,gr=new F,gs=new F,$u=new F,Ju=new Zt,gc=new F(1,0,0),_c=new F(0,1,0),yc=new F(0,0,1),xc={type:"added"},ju={type:"removed"},Pi={type:"childadded",child:null},Eo={type:"childremoved",child:null},Rt=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Gn,n=new Zt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Fe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $i,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(gs,gr,this.up):Dn.lookAt(gr,gs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ju),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rt.DEFAULT_UP=new F(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qu={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,n),d=this._getHandJoint(c,b);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&u>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Ml(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ao(a,r,e+1/3),this.g=Ao(a,r,e),this.b=Ao(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ye.workingToColorSpace(Dt.copy(this),e),Math.round(We(Dt.r*255,0,255))*65536+Math.round(We(Dt.g*255,0,255))*256+Math.round(We(Dt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Nt){Ye.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(_r);let n=Ts($n.h,_r.h,t),s=Ts($n.s,_r.s,t),r=Ts($n.l,_r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ge;Ge.NAMES=xh;var Ls=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},dn=new F,Nn=new F,Ro=new F,Un=new F,Ii=new F,Li=new F,vc=new F,Co=new F,Po=new F,Io=new F,Lo=new lt,Do=new lt,No=new lt,Bn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Nn.subVectors(n,t),Ro.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Nn),l=dn.dot(Ro),c=Nn.dot(Nn),h=Nn.dot(Ro),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,y=(a*h-o*l)*u;return r.set(1-m-y,y,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Lo.setScalar(0),Do.setScalar(0),No.setScalar(0),Lo.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),No.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Lo,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Nn.subVectors(e,t),dn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Li.subVectors(r,n),Co.subVectors(e,n);let l=Ii.dot(Co),c=Li.dot(Co);if(l<=0&&c<=0)return t.copy(n);Po.subVectors(e,s);let h=Ii.dot(Po),f=Li.dot(Po);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ii,a);Io.subVectors(e,r);let m=Ii.dot(Io),y=Li.dot(Io);if(y>=0&&m<=y)return t.copy(r);let b=m*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Li,o);let p=h*y-m*f;if(p<=0&&f-h>=0&&m-y>=0)return vc.subVectors(r,s),o=(f-h)/(f-h+(m-y)),t.copy(s).addScaledVector(vc,o);let d=1/(p+b+u);return a=b*d,o=u*d,t.copy(n).addScaledVector(Ii,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},En=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),xr.subVectors(this.max,_s),Di.subVectors(e.a,_s),Ni.subVectors(e.b,_s),Ui.subVectors(e.c,_s),Jn.subVectors(Ni,Di),jn.subVectors(Ui,Ni),fi.subVectors(Di,Ui);let t=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-fi.z,fi.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,fi.z,0,-fi.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-fi.y,fi.x,0];return!Uo(t,Di,Ni,Ui,xr)||(t=[1,0,0,0,1,0,0,0,1],!Uo(t,Di,Ni,Ui,xr))?!1:(vr.crossVectors(Jn,jn),t=[vr.x,vr.y,vr.z],Uo(t,Di,Ni,Ui,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new F,new F,new F,new F,new F,new F,new F,new F],fn=new F,yr=new En,Di=new F,Ni=new F,Ui=new F,Jn=new F,jn=new F,fi=new F,_s=new F,xr=new F,vr=new F,pi=new F;function Uo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pt=new F,br=new Ie,ed=0,pn=class extends mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=e!==void 0?io(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):El(e,this.array)}};var Ds=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ns=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},td=new En,ys=new F,Fo=new F,ji=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Fo)),this.expandByPoint(ys.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nd=0,nn=new st,Oo=new Rt,Fi=new F,Yt=new En,xs=new En,Mt=new F,gn=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Ns:Ds)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Yt.min,xs.min),Yt.expandByPoint(Mt),Mt.addVectors(Yt.max,xs.max),Yt.expandByPoint(Mt)):(Yt.expandByPoint(xs.min),Yt.expandByPoint(xs.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Mt.add(Fi)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;let h=new F,f=new F,u=new F,m=new Ie,y=new Ie,b=new Ie,p=new F,d=new F;function S(U,L,N){c[U]=c[L]=c[N]=1,h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,L),u.fromBufferAttribute(n,N),m.fromBufferAttribute(r,U),y.fromBufferAttribute(r,L),b.fromBufferAttribute(r,N),f.sub(h),u.sub(h),y.sub(m),b.sub(m);let O=1/(y.x*b.y-b.x*y.y);isFinite(O)&&(p.copy(f).multiplyScalar(b.y).addScaledVector(u,-y.y).multiplyScalar(O),d.copy(u).multiplyScalar(y.x).addScaledVector(f,-b.x).multiplyScalar(O),o[U].add(p),o[L].add(p),o[N].add(p),l[U].add(d),l[L].add(d),l[N].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,L=A.length;U<L;++U){let N=A[U],O=N.start,q=N.count;for(let C=O,W=O+q;C<W;C+=3)S(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let M=new F,E=new F,T=new F,g=new F;function v(U){T.fromBufferAttribute(s,U),g.copy(T);let L=o[U];M.copy(L),M.sub(T.multiplyScalar(T.dot(L))).normalize(),E.crossVectors(g,L);let O=E.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,O)}for(let U=0,L=n.count;U<L;++U)c[U]&&v(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){let y=e.getX(u+0),b=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,y=0;for(let b=0,p=l.length;b<p;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let d=0;d<h;d++)u[y++]=c[m++]}return new pn(u,h,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=bc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=bc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function bc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=li()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ot=new F,Us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?io(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):El(e,this.data.array)}},Bo=new F,id=new F,sd=new Fe,Kt=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bo.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sd.getNormalMatrix(e),s=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rd=0,Hn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ls,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qi=class extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Oi,vs=new F,Bi=new F,ki=new F,zi=new Ie,bs=new Ie,vh=new st,Sr=new F,Ss=new F,Mr=new F,Sc=new Ie,ko=new Ie,Mc=new Ie,Fs=class extends Rt{constructor(e=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new gn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qr(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Us(n,3,0,!1)),Oi.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new Ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;wr(Sr.set(-.5,-.5,0),ki,a,Bi,s,r),wr(Ss.set(.5,-.5,0),ki,a,Bi,s,r),wr(Mr.set(.5,.5,0),ki,a,Bi,s,r),Sc.set(0,0),ko.set(1,0),Mc.set(1,1);let o=e.ray.intersectTriangle(Sr,Ss,Mr,!1,vs);if(o===null&&(wr(Ss.set(-.5,.5,0),ki,a,Bi,s,r),ko.set(0,1),o=e.ray.intersectTriangle(Sr,Mr,Ss,!1,vs),o===null))return;let l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:Bn.getInterpolation(vs,Sr,Ss,Mr,Sc,ko,Mc,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function wr(i,e,t,n,s,r){zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(bs.x=r*zi.x-s*zi.y,bs.y=s*zi.x+r*zi.y):bs.copy(zi),i.copy(e),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(vh)}var On=new F,zo=new F,Tr=new F,Er=new F,_i=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zo.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=Er.dot(this.direction),l=-Er.dot(Tr),c=Er.lengthSq(),h=Math.abs(1-a*a),f,u,m,y;if(h>0)if(f=a*l-o,u=a*o-l,y=r*h,f>=0)if(u>=-y)if(u<=y){let b=1/h;f*=b,u*=b,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-y?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=y?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zo).addScaledVector(Tr,u),m}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,m=e.z-a.z,y=t.x-a.x,b=t.y-a.y,p=t.z-a.z,d=n.x-a.x,S=n.y-a.y,A=n.z-a.z,M=Math.abs(l),E=Math.abs(c),T=Math.abs(h),g,v,U,L,N,O,q,C,W,Z,V,ie;if(M>=E&&M>=T?(U=l,O=f,W=y,ie=d,l>=0?(g=c,v=h,L=u,N=m,q=b,C=p,Z=S,V=A):(g=h,v=c,L=m,N=u,q=p,C=b,Z=A,V=S)):E>=T?(U=c,O=u,W=b,ie=S,c>=0?(g=h,v=l,L=m,N=f,q=p,C=y,Z=A,V=d):(g=l,v=h,L=f,N=m,q=y,C=p,Z=d,V=A)):(U=h,O=m,W=p,ie=A,h>=0?(g=l,v=c,L=f,N=u,q=y,C=b,Z=d,V=S):(g=c,v=l,L=u,N=f,q=b,C=y,Z=S,V=d)),U===0)return null;let Y=g/U,G=v/U,J=1/U,ae=L-Y*O,ce=N-G*O,X=q-Y*W,te=C-G*W,ye=Z-Y*ie,we=V-G*ie,le=ye*te-we*X,Ae=ae*we-ce*ye,tt=X*ce-te*ae;if(s){if(le<0||Ae<0||tt<0)return null}else if((le<0||Ae<0||tt<0)&&(le>0||Ae>0||tt>0))return null;let Ce=le+Ae+tt;if(Ce===0)return null;let Ze=J*(le*O+Ae*W+tt*ie);return(Ce>0?Ze<0:Ze>0)?null:this.at(Ze/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},es=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wc=new st,mi=new _i,Ar=new ji,Tc=new F,Rr=new F,Cr=new F,Pr=new F,Go=new F,Ir=new F,Ec=new F,Lr=new F,Vt=class extends Rt{constructor(e=new gn,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Go.fromBufferAttribute(f,e),a?Ir.addScaledVector(Go,h):Ir.addScaledVector(Go.sub(t),h))}t.add(Ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Ar.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Ar,Tc)===null||mi.origin.distanceToSquared(Tc)>(e.far-e.near)**2))&&(wc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(wc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=u.length;y<b;y++){let p=u[y],d=a[p.materialIndex],S=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,E=A;M<E;M+=3){let T=o.getX(M),g=o.getX(M+1),v=o.getX(M+2);s=Dr(this,d,e,n,c,h,f,T,g,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let p=y,d=b;p<d;p+=3){let S=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);s=Dr(this,a,e,n,c,h,f,S,A,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=u.length;y<b;y++){let p=u[y],d=a[p.materialIndex],S=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,E=A;M<E;M+=3){let T=M,g=M+1,v=M+2;s=Dr(this,d,e,n,c,h,f,T,g,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let p=y,d=b;p<d;p+=3){let S=p,A=p+1,M=p+2;s=Dr(this,a,e,n,c,h,f,S,A,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ad(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ai,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:i}}function Dr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Pr);let h=ad(i,e,t,n,Rr,Cr,Pr,Ec);if(h){let f=new F;Bn.getBarycoord(Ec,Rr,Cr,Pr,f),s&&(h.uv=Bn.getInterpolatedAttribute(s,o,l,c,f,new Ie)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,o,l,c,f,new Ie)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Bn.getNormal(Rr,Cr,Pr,u.normal),h.face=u,h.barycoord=f}return h}var ea=class extends zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=new ji,od=new Ie(.5,.5),Nr=new F,ei=class{constructor(e=new Kt,t=new Kt,n=new Kt,s=new Kt,r=new Kt,a=new Kt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],m=r[7],y=r[8],b=r[9],p=r[10],d=r[11],S=r[12],A=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,m-h,d-y,E-S).normalize(),s[1].setComponents(c+a,m+h,d+y,E+S).normalize(),s[2].setComponents(c+o,m+f,d+b,E+A).normalize(),s[3].setComponents(c-o,m-f,d-b,E-A).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,m-u,d-p,E-M).normalize();else if(s[4].setComponents(c-l,m-u,d-p,E-M).normalize(),t===sn)s[5].setComponents(c+l,m+u,d+p,E+M).normalize();else if(t===qi)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);let t=od.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ac=new st,ta=class i{constructor(){this.coordinateSystem=sn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ac.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ei),n[s].setFromProjectionMatrix(Ac,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ei),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Os=class extends zt{constructor(e=[],t=vi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bs=class extends zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vn=class extends zt{constructor(e,t,n=_n,s,r,a,o=Tt,l=Tt,c,h=zn,f=1){if(h!==zn&&h!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ks=class extends Vn{constructor(e,t=_n,n=vi,s,r,a=Tt,o=Tt,l,c=zn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zs=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ts=class i extends gn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2));function y(b,p,d,S,A,M,E,T,g,v,U){let L=M/g,N=E/v,O=M/2,q=E/2,C=T/2,W=g+1,Z=v+1,V=0,ie=0,Y=new F;for(let G=0;G<Z;G++){let J=G*N-q;for(let ae=0;ae<W;ae++){let ce=ae*L-O;Y[b]=ce*S,Y[p]=J*A,Y[d]=C,c.push(Y.x,Y.y,Y.z),Y[b]=0,Y[p]=0,Y[d]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(ae/g),f.push(1-G/v),V+=1}}for(let G=0;G<v;G++)for(let J=0;J<g;J++){let ae=u+J+W*G,ce=u+J+W*(G+1),X=u+(J+1)+W*(G+1),te=u+(J+1)+W*G;l.push(ae,ce,te),l.push(ce,X,te),ie+=6}o.addGroup(m,ie,U),m+=ie,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gs=class i extends gn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],m=[],y=0,b=[],p=n/2,d=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(m,2));function S(){let M=new F,E=new F,T=0,g=(t-e)/n;for(let v=0;v<=r;v++){let U=[],L=v/r,N=L*(t-e)+e;for(let O=0;O<=s;O++){let q=O/s,C=q*l+o,W=Math.sin(C),Z=Math.cos(C);E.x=N*W,E.y=-L*n+p,E.z=N*Z,f.push(E.x,E.y,E.z),M.set(W,g,Z).normalize(),u.push(M.x,M.y,M.z),m.push(q,1-L),U.push(y++)}b.push(U)}for(let v=0;v<s;v++)for(let U=0;U<r;U++){let L=b[U][v],N=b[U+1][v],O=b[U+1][v+1],q=b[U][v+1];(e>0||U!==0)&&(h.push(L,N,q),T+=3),(t>0||U!==r-1)&&(h.push(N,O,q),T+=3)}c.addGroup(d,T,0),d+=T}function A(M){let E=y,T=new Ie,g=new F,v=0,U=M===!0?e:t,L=M===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*L,0),u.push(0,L,0),m.push(.5,.5),y++;let N=y;for(let O=0;O<=s;O++){let C=O/s*l+o,W=Math.cos(C),Z=Math.sin(C);g.x=U*Z,g.y=p*L,g.z=U*W,f.push(g.x,g.y,g.z),u.push(0,L,0),T.x=W*.5+.5,T.y=Z*.5*L+.5,m.push(T.x,T.y),y++}for(let O=0;O<s;O++){let q=E+O,C=N+O;M===!0?h.push(C,C+1,q):h.push(C+1,C,q),v+=3}c.addGroup(d,v,M===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hs=class i extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,m=[],y=[],b=[],p=[];for(let d=0;d<h;d++){let S=d*u-a;for(let A=0;A<c;A++){let M=A*f-r;y.push(M,-S,0),b.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let A=S+c*d,M=S+c*(d+1),E=S+1+c*(d+1),T=S+1+c*d;m.push(A,M,T),m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new wt(y,3)),this.setAttribute("normal",new wt(b,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ns=class i extends gn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,u=new F,m=[],y=[],b=[],p=[];for(let d=0;d<=n;d++){let S=[],A=d/n,M=a+A*o,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E),g=0;d===0&&a===0?g=.5/t:d===n&&l===Math.PI&&(g=-.5/t);for(let v=0;v<=t;v++){let U=v/t,L=s+U*r;f.x=-T*Math.cos(L),f.y=E,f.z=T*Math.sin(L),y.push(f.x,f.y,f.z),u.copy(f).normalize(),b.push(u.x,u.y,u.z),p.push(U+g,1-A),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){let A=h[d][S+1],M=h[d][S],E=h[d+1][S],T=h[d+1][S+1];(d!==0||a>0)&&m.push(A,M,T),(d!==n-1||l<Math.PI)&&m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new wt(y,3)),this.setAttribute("normal",new wt(b,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Si(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Rc(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Rc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=Si(i[t]);for(let s in n)e[s]=n[s]}return e}function Rc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ld(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var bh={clone:Si,merge:Ut},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},na=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},is=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ia=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sa=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ur(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ra=class extends ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wo,endingEnd:Wo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xo:r=e,o=2*t-n;break;case qo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xo:a=e,l=2*n-t;break;case qo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,y=(n-t)/(s-t),b=y*y,p=b*y,d=-u*p+2*u*b-u*y,S=(1+u)*p+(-1.5-2*u)*b+(-.5+u)*y+1,A=(-1-m)*p+(1.5+m)*b+.5*y,M=m*p-m*b;for(let E=0;E!==o;++E)r[E]=d*a[h+E]+S*a[c+E]+A*a[l+E]+M*a[f+E];return r}},aa=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},oa=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},la=class extends ti{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let y=(n-t)/(s-t),b=1-y;for(let p=0;p!==o;++p)r[p]=a[c+p]*b+a[l+p]*y;return r}let u=o*2,m=e-1;for(let y=0;y!==o;++y){let b=a[c+y],p=a[l+y],d=m*u+y*2,S=f[d],A=f[d+1],M=e*u+y*2,E=h[M],T=h[M+1],g=dd(n,t,S,E,s);r[y]=Sh(g,b,A,T,p)}return r}};function Sh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ud(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function dd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ud(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gi(t,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gi(e.times,Array),values:Gi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ur(e.settings)&&(n.settings={inTangents:Gi(e.settings.inTangents,Array),outTangents:Gi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new la(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case Br:t=this.InterpolantFactoryMethodSmooth;break;case Vo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Br;case this.InterpolantFactoryMethodBezier:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ur(this.settings)&&(Cc(this.settings.inTangents,e),Cc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ur(this.settings)&&(Pc(this.settings.inTangents,e),Pc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ru(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let y=0;y!==n;++y){let b=t[f+y];if(b!==t[u+y]||b!==t[m+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ur(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Pc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Zr;var ni=class extends Jt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Es;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="color";var ha=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};ha.prototype.ValueTypeName="number";var ua=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vs=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Jt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Es;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Jt{constructor(e,t,n,s){super(e,t,n,s)}};da.prototype.ValueTypeName="vector";var fa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],y=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mh=new fa,pa=class{constructor(e){this.manager=e!==void 0?e:Mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xs=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ho=new st,Ic=new F,Lc=new F,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ei,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ho,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fr=new F,Or=new Zt,Mn=new F,qs=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fr,Or,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fr,Or,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new F,Dc=new Ie,Nc=new Ie,Bt=class extends qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Nc),t.subVectors(Nc,Dc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ys=class extends qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yo=class extends ma{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Yo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hi=-90,Vi=1,rs=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Hi,Vi,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Hi,Vi,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Hi,Vi,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},ga=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Cl="\\[\\]\\.:\\/",fd=new RegExp("["+Cl+"]","g"),Pl="[^"+Cl+"]",pd="[^"+Cl.replace("\\.","")+"]",md=/((?:WC+[\/:])*)/.source.replace("WC",Pl),gd=/(WCOD+)?/.source.replace("WCOD",pd),_d=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),yd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),xd=new RegExp("^"+md+gd+_d+yd+"$"),vd=["material","materials","bones","map"],Ko=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fd,"")}static parseTrackName(e){let t=xd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Ko;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var Uc=new st,Ks=class{constructor(e,t,n=0,s=1/0){this.ray=new _i(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $i,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(e,t=!0,n=[]){return Zo(e,this,n,t),n.sort(Fc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Zo(e[s],this,n,t);return n.sort(Fc),n}};function Fc(i,e){return i.distance-e.distance}function Zo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Zo(r[a],e,t,!0)}}var as=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $o=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Zs=class extends mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Il(i,e,t,n){let s=bd(n);switch(t){case ml:return i*e;case _l:return i*e/s.components*s.byteLength;case Ma:return i*e/s.components*s.byteLength;case oi:return i*e*2/s.components*s.byteLength;case wa:return i*e*2/s.components*s.byteLength;case gl:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Ta:return i*e*4/s.components*s.byteLength;case Qs:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case Ea:case Ra:return Math.max(i,8)*Math.max(e,8)/2;case Pa:case Ia:case Da:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case ir:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $a:case Ja:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sr:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bd(i){switch(i){case Wt:case ul:return{byteLength:1,components:1};case hs:case dl:case xn:return{byteLength:2,components:1};case ba:case Sa:return{byteLength:2,components:4};case _n:case va:case yn:return{byteLength:4,components:1};case fl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Md(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,y)=>m.start-y.start);let u=0;for(let m=1;m<f.length;m++){let y=f[u],b=f[m];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++u,f[u]=b)}f.length=u+1;for(let m=0,y=f.length;m<y;m++){let b=f[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:wd,alphahash_pars_fragment:Td,alphamap_fragment:Ed,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Id,batching_pars_vertex:Ld,batching_vertex:Dd,begin_vertex:Nd,beginnormal_vertex:Ud,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Hd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Zd,displacementmap_vertex:$d,emissivemap_fragment:Jd,emissivemap_pars_fragment:jd,colorspace_fragment:Qd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:yf,lights_phong_fragment:xf,lights_phong_pars_fragment:vf,lights_physical_fragment:bf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Mf,lights_fragment_maps:wf,lights_fragment_end:Tf,lightprobes_pars_fragment:Ef,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:If,map_pars_fragment:Lf,map_particle_fragment:Df,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:kf,morphtarget_pars_vertex:zf,morphtarget_vertex:Gf,normal_fragment_begin:Hf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Jf,opaque_fragment:jf,packing:Qf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:yp,transmission_pars_fragment:xp,uv_pars_fragment:vp,uv_pars_vertex:bp,uv_vertex:Sp,worldpos_vertex:Mp,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ep,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Ip,distance_vert:Lp,distance_frag:Dp,equirect_vert:Np,equirect_frag:Up,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:zp,meshlambert_frag:Gp,meshmatcap_vert:Hp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:Kp,meshphysical_frag:Zp,meshtoon_vert:$p,meshtoon_frag:Jp,points_vert:jp,points_frag:Qp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},ve={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Pn={basic:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ut([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ut([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ut([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ut([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ut([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ut([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ut([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ut([ve.lights,ve.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Pn.physical={uniforms:Ut([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var so={r:0,b:0,g:0},sm=new st,qh=new Fe;qh.set(-1,0,0,0,1,0,0,0,1);function rm(i,e,t,n,s,r){let a=new Ge(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let M=S.backgroundBlurriness>0;A=e.get(A,M)}return A}function y(S){let A=!1,M=m(S);M===null?p(a,o):M&&M.isColor&&(p(M,1),A=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(S,A){let M=m(A);M&&M.isCubeTexture?(c===void 0&&(c=new Vt(new ts(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Si(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qh),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==je,(h!==M||f!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Vt(new Hs(2,2),new An({name:"BackgroundMaterial",uniforms:Si(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==je,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(so,Rl(i)),t.buffers.color.setClear(so.r,so.g,so.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:y,addToRenderList:b,dispose:d}}function am(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,q,C,W){let Z=!1,V=f(N,C,q,O);r!==V&&(r=V,c(r.object)),Z=m(N,C,q,W),Z&&y(N,C,q,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(N,O,q,C),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,O,q,C){let W=C.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let V=N.isInstancedMesh===!0?N.id:0,ie=Z[V];ie===void 0&&(ie={},Z[V]=ie);let Y=ie[q.id];Y===void 0&&(Y={},ie[q.id]=Y);let G=Y[W];return G===void 0&&(G=u(l()),Y[W]=G),G}function u(N){let O=[],q=[],C=[];for(let W=0;W<t;W++)O[W]=0,q[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:C,object:N,attributes:{},index:null}}function m(N,O,q,C){let W=r.attributes,Z=O.attributes,V=0,ie=q.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let J=W[Y],ae=Z[Y];if(ae===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function y(N,O,q,C){let W={},Z=O.attributes,V=0,ie=q.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let J=Z[Y];J===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),W[Y]=ae,V++}r.attributes=W,r.attributesNum=V,r.index=C}function b(){let N=r.newAttributes;for(let O=0,q=N.length;O<q;O++)N[O]=0}function p(N){d(N,0)}function d(N,O){let q=r.newAttributes,C=r.enabledAttributes,W=r.attributeDivisors;q[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),W[N]!==O&&(i.vertexAttribDivisor(N,O),W[N]=O)}function S(){let N=r.newAttributes,O=r.enabledAttributes;for(let q=0,C=O.length;q<C;q++)O[q]!==N[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function A(N,O,q,C,W,Z,V){V===!0?i.vertexAttribIPointer(N,O,q,W,Z):i.vertexAttribPointer(N,O,q,C,W,Z)}function M(N,O,q,C){b();let W=C.attributes,Z=q.getAttributes(),V=O.defaultAttributeValues;for(let ie in Z){let Y=Z[ie];if(Y.location>=0){let G=W[ie];if(G===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){let J=G.normalized,ae=G.itemSize,ce=e.get(G);if(ce===void 0)continue;let X=ce.buffer,te=ce.type,ye=ce.bytesPerElement,we=te===i.INT||te===i.UNSIGNED_INT||G.gpuType===va;if(G.isInterleavedBufferAttribute){let le=G.data,Ae=le.isInterleavedBuffer===!0?le.stride:le.itemSize,tt=G.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let Ce=0;Ce<Y.locationSize;Ce++)d(Y.location+Ce,le.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)p(Y.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Ce=0;Ce<Y.locationSize;Ce++)A(Y.location+Ce,ae/Y.locationSize,te,J,Ae*ye,(tt+ae/Y.locationSize*Ce)*ye,we)}else{if(G.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,G.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<Y.locationSize;le++)p(Y.location+le);i.bindBuffer(i.ARRAY_BUFFER,X);for(let le=0;le<Y.locationSize;le++)A(Y.location+le,ae/Y.locationSize,te,J,ae*ye,ae/Y.locationSize*le*ye,we)}}else if(V!==void 0){let J=V[ie];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(Y.location,J);break;case 3:i.vertexAttrib3fv(Y.location,J);break;case 4:i.vertexAttrib4fv(Y.location,J);break;default:i.vertexAttrib1fv(Y.location,J)}}}}S()}function E(){U();for(let N in n){let O=n[N];for(let q in O){let C=O[q];for(let W in C){let Z=C[W];for(let V in Z)h(Z[V].object),delete Z[V];delete C[W]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let q in O){let C=O[q];for(let W in C){let Z=C[W];for(let V in Z)h(Z[V].object),delete Z[V];delete C[W]}}delete n[N.id]}function g(N){for(let O in n){let q=n[O];for(let C in q){let W=q[C];if(W[N.id]===void 0)continue;let Z=W[N.id];for(let V in Z)h(Z[V].object),delete Z[V];delete W[N.id]}}}function v(N){for(let O in n){let q=n[O],C=N.isInstancedMesh===!0?N.id:0,W=q[C];if(W!==void 0){for(let Z in W){let V=W[Z];for(let ie in V)h(V[ie].object),delete V[ie];delete W[Z]}delete q[C],Object.keys(q).length===0&&delete n[O]}}}function U(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:p,disableUnusedAttributes:S}}function om(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==vn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let v=g===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Wt&&g!==yn&&!v&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:E,samples:T}}function cm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Kt,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let y=f.clippingPlanes,b=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||y===null||y.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,A=S*4,M=d.clippingState||null;l.value=M,M=h(y,u,A,m);for(let E=0;E!==A;++E)M[E]=t[E];d.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,y){let b=f!==null?f.length:0,p=null;if(b!==0){if(p=l.value,y!==!0||p===null){let d=m+b*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,M=m;A!==b;++A,M+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}var or=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ts(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:yi});r.uniforms.tEquirect.value=t;let a=new Vt(s,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=kt),new rs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wh=256,hm=3,um=20,Yh=256,Kh=16,dm=3,fm=new F,pm=new Ge,ao=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rs(1,10,null),this._boxMesh=new Vt(new ts(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=fm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,y=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(pm));let p=new rs(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=y,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wh,wl(e))}_fromTexture(e,t){e.mapping===vi||e.mapping===cs?this._setSize(e.image.length===0?wh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Th(e,!1,!1),n=Math.log2(e)-hm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Th(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vi||e.mapping===cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Eh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mm(),this._integrationMaterial=gm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Kh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-dm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Yh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_m());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Th(i,e,t){return new or(i,{minFilter:Wn,generateMipmaps:e,type:xn,colorSpace:As,depthBuffer:t})}function lr(i,e,t){return new An({name:i,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Gt,blending:yi,depthTest:!1,depthWrite:!1})}function mm(){return lr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gm(){return lr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _m(){return lr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${um}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Eh(){return lr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ah(){return lr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ym(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===_a||m===ya)if(e.has(u)){let y=e.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let b=new or(y.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,y=m===_a||m===ya,b=m===vi||m===cs;if(y||b){let p=t.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ao(i)),p=y?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return y&&S&&S.height>0||b&&S&&l(S)?(n===null&&(n=new ao(i)),p=y?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===_a?u.mapping=vi:m===ya&&(u.mapping=cs),u}function l(u){let m=0,y=6;for(let b=0;b<y;b++)u[b]!==void 0&&m++;return m===y}function c(u){let m=u.target;m.removeEventListener("dispose",c);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function xm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(y=>delete s[y]);function o(y){l(y.target)}function l(y){y.index!==null&&e.remove(y.index);for(let p in y.attributes)e.remove(y.attributes[p]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let b=r.get(y);b&&(e.remove(b),r.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(y,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(y){let b=y.attributes;for(let p in b)e.update(b[p],i.ARRAY_BUFFER)}function f(y){let b=y.index,p=y.attributes.position,d=0;if(p===void 0)return;let S=b!==null?b.array.length:p.array.length/3-1,A=p.count>=65535?Ns:Ds,M=new A(Math.ceil(S/3)*6,1),E=M.array;if(b!==null){let g=b.array;d=b.version;for(let v=0,U=0;v<S;v+=3){let L=g[v+0],N=g[v+1],O=g[v+2];E[U++]=L,E[U++]=N,E[U++]=N,E[U++]=O,E[U++]=O,E[U++]=L}}else{d=p.version;for(let g=0,v=0;g<S;g+=3){let U=g+0,L=g+1,N=g+2;E[v++]=U,E[v++]=L,E[v++]=L,E[v++]=N,E[v++]=N,E[v++]=U}}M.version=d;let T=r.get(y);T&&e.remove(T),r.set(y,M)}function u(y){let b=r.get(y);if(b){let p=y.index;p!==null&&b.version<p.version&&f(y)}else f(y);return r.get(y)}function m(){for(let y in s){let b=s[y].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function bm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),t.update(u,n,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let b=0;for(let p=0;p<m;p++)b+=u[p];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;m===!0&&(A=1),y===!0&&(A=2),b===!0&&(A=3);let M=o.attributes.position.count*A,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*E*4*f),g=new Is(T,M,E,f);g.type=yn,g.needsUpdate=!0;let v=A*4;for(let L=0;L<f;L++){let N=p[L],O=d[L],q=S[L],C=M*E*4*L;for(let W=0;W<N.count;W++){let Z=W*v;m===!0&&(s.fromBufferAttribute(N,W),T[C+Z+0]=s.x,T[C+Z+1]=s.y,T[C+Z+2]=s.z,T[C+Z+3]=0),y===!0&&(s.fromBufferAttribute(O,W),T[C+Z+4]=s.x,T[C+Z+5]=s.y,T[C+Z+6]=s.z,T[C+Z+7]=0),b===!0&&(s.fromBufferAttribute(q,W),T[C+Z+8]=s.x,T[C+Z+9]=s.y,T[C+Z+10]=s.z,T[C+Z+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Ie(M,E)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function wm(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Tm={[sl]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[al]:"CINEON_TONE_MAPPING",[Js]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[ol]:"CUSTOM_TONE_MAPPING"};function Em(i,e,t,n,s,r){let a=new $t(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new gn;h.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wt([0,2,0,0,2,0],2));let f=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Vt(h,f),m=new Ys(-1,1,1,-1,0,1),y=null,b=null,p=!1,d,S=null,A=[],M=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let g=0;g<A.length;g++){let v=A[g];v.setSize&&v.setSize(E,T)}},this.setEffects=function(E){A=E,M=A.length>0&&A[0].isRenderPass===!0;let T=a.width,g=a.height;A.length>0&&o===null&&(o=new $t(T,g,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new $t(T,g,{type:xn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&A.some(U=>U.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new Vn(T,g),r===!0&&(c.format=Xn,c.type=bi)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let U=0;U<A.length;U++){let L=A[U];L.setSize&&L.setSize(T,g),v&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(E,T){if(p||E.toneMapping===Rn&&A.length===0)return!1;if(S=T,T!==null){let g=T.width,v=T.height;(a.width!==g||a.height!==v)&&this.setSize(g,v)}return M===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=Rn,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=d,p=!0;let g=a,v=o;for(let U=0;U<A.length;U++){let L=A[U];L.enabled!==!1&&(L.render(E,v,g,T),L.needsSwap!==!1&&(g=v,v=v===o?l:o))}if(y!==E.outputColorSpace||b!==E.toneMapping){y=E.outputColorSpace,b=E.toneMapping,f.defines={},Ye.getTransfer(y)===je&&(f.defines.SRGB_TRANSFER="");let U=Tm[b];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(S),E.render(u,m),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Zh=new zt,$h=new Vn(1,1),Jh=new ks(1),jh=new Is,Qh=new jr,eu=new Os,Rh=[],Ch=[],Ph=new Float32Array(16),Ih=new Float32Array(9),Lh=new Float32Array(4);function ds(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rh[s];if(r===void 0&&(r=new Float32Array(s),Rh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Am(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),yt(t,n)}}function Lm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),yt(t,n)}}function Dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;Ph.set(n),i.uniformMatrix4fv(this.addr,!1,Ph),yt(t,n)}}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function co(i){return i.version===0&&(i.compareFunction=vl,i.needsUpdate=!0),i}function Hm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=co($h):r=Zh,t.setTexture2D(e||r,s)}function Vm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qh,s)}function Wm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=co(Jh):r=eu,t.setTextureCube(e||r,s)}function Xm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jh,s)}function qm(i){switch(i){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Im;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return km;case 36295:return zm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){let t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){let t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function $m(i,e){let t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function Jm(i,e){let t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jm(i,e){let t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qm(i,e){let t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eg(i,e){i.uniform1iv(this.addr,e)}function tg(i,e){i.uniform2iv(this.addr,e)}function ng(i,e){i.uniform3iv(this.addr,e)}function ig(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function rg(i,e){i.uniform2uiv(this.addr,e)}function ag(i,e){i.uniform3uiv(this.addr,e)}function og(i,e){i.uniform4uiv(this.addr,e)}function lg(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=co($h):a=Zh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function cg(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qh,r[a])}function hg(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=co(Jh):a=eu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ug(i,e,t){let n=this.cache,s=e.length,r=lo(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jh,r[a])}function dg(i){switch(i){case 5126:return Ym;case 35664:return Km;case 35665:return Zm;case 35666:return $m;case 35674:return Jm;case 35675:return jm;case 35676:return Qm;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}var Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}},Fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Dh(i,e){i.seq.push(e),i.map[e.id]=e}function fg(i,e,t){let n=i.name,s=n.length;for(Ll.lastIndex=0;;){let r=Ll.exec(n),a=Ll.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dh(t,c===void 0?new Nl(o,i,e):new Ul(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Fl(o),Dh(t,f)),t=f}}}var us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);fg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Nh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var pg=37297,mg=0;function gg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Uh=new Fe;function _g(i){Ye._getMatrix(Uh,Ye.workingColorSpace,i);let e=`mat3( ${Uh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Rs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gg(i.getShaderSource(e),o)}else return r}function yg(i,e){let t=_g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var xg={[sl]:"Linear",[rl]:"Reinhard",[al]:"Cineon",[Js]:"ACESFilmic",[ll]:"AgX",[cl]:"Neutral",[ol]:"Custom"};function vg(i,e){let t=xg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ro=new F;function bg(){Ye.getLuminanceCoefficients(ro);let i=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Mg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ar(i){return i!==""}function Oh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(Tg,Eg)}function Eg(i,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ol(t)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(Ag,Rg)}function Rg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Cg={[$s]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function Pg(i){return Cg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ig={[cs]:"ENVMAP_MODE_REFRACTION"};function Lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ig[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dg={[il]:"ENVMAP_BLENDING_MULTIPLY",[sh]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function Ng(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ug(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Pg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Lg(t),f=Ng(t),u=Sg(t),m=Mg(r),y=s.createProgram(),b,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ar).join(`
`),b.length>0&&(b+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(b=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?He.tonemapping_pars_fragment:"",t.toneMapping!==Rn?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Ol(a),a=Oh(a,t),a=Bh(a,t),o=Ol(o),o=Oh(o,t),o=Bh(o,t),a=kh(a),o=kh(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=d+b+a,A=d+p+o,M=Nh(s,s.VERTEX_SHADER,S),E=Nh(s,s.FRAGMENT_SHADER,A);s.attachShader(y,M),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(M)||"",q=s.getShaderInfoLog(E)||"",C=N.trim(),W=O.trim(),Z=q.trim(),V=!0,ie=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,E);else{let Y=Fh(s,M,"vertex"),G=Fh(s,E,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+C+`
`+Y+`
`+G)}else C!==""?Ne("WebGLProgram: Program Info Log:",C):(W===""||Z==="")&&(ie=!1);ie&&(L.diagnostics={runnable:V,programLog:C,vertexShader:{log:W,prefix:b},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(M),s.deleteShader(E),g=new us(s,y),v=wg(s,y)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(y,pg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=E,this}var Fg=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=Fg++,this.code=e,this.usedTimes=0}};function Og(i){return i===oi||i===ir||i===sr}function Bg(i,e,t,n,s,r){let a=new $i,o=new Bl,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,v,U,L,N,O){let q=L.fog,C=N.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||W,Z),ie=u[g.type],Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let G=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J=G!==void 0?G.length:0,ae=0;C.morphAttributes.position!==void 0&&(ae=1),C.morphAttributes.normal!==void 0&&(ae=2),C.morphAttributes.color!==void 0&&(ae=3);let ce,X,te,ye;if(ie){let xe=Pn[ie];ce=xe.vertexShader,X=xe.fragmentShader}else{ce=g.vertexShader,X=g.fragmentShader;let xe=o.getVertexShaderStage(g),et=o.getFragmentShaderStage(g);o.update(g,xe,et),te=xe.id,ye=et.id}let we=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Ae=N.isInstancedMesh===!0,tt=N.isBatchedMesh===!0,Ce=!!g.map,Ze=!!g.matcap,Qe=!!V,Ve=Qe&&V.isPMREMTexture===!0,Et=!!g.aoMap,mt=!!g.lightMap,Ht=!!g.bumpMap&&g.wireframe===!1,ct=!!g.normalMap,Sn=!!g.displacementMap,vt=!!g.emissiveMap,jt=!!g.metalnessMap,Qt=!!g.roughnessMap,en=g.anisotropy>0,D=g.clearcoat>0,tn=g.diffuseRoughness>0,at=g.dispersion>0,ot=g.retroreflectivity>0,_e=g.iridescence>0,gt=g.sheen>0,De=g.transmission>0,Oe=en&&!!g.anisotropyMap,w=D&&!!g.clearcoatMap,_=D&&!!g.clearcoatNormalMap,k=D&&!!g.clearcoatRoughnessMap,se=tn&&!!g.diffuseRoughnessMap,ee=_e&&!!g.iridescenceMap,he=_e&&!!g.iridescenceThicknessMap,me=gt&&!!g.sheenColorMap,$=gt&&!!g.sheenRoughnessMap,j=!!g.specularMap,de=!!g.specularColorMap,R=!!g.specularIntensityMap,Q=De&&!!g.transmissionMap,K=De&&!!g.thicknessMap,fe=!!g.gradientMap,oe=!!g.alphaMap,ue=g.alphaTest>0,Pe=!!g.alphaHash,ze=!!g.extensions,re=Rn;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(re=i.toneMapping);let Le=Ve?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ke={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:ce,fragmentShader:X,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:tt,batchingColor:tt&&N._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:Ze,envMap:Qe,envMapMode:Qe&&V.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Le.length-1:null,envMapSize:Ve?Le[0].width:null,aoMap:Et,lightMap:mt,bumpMap:Ht,normalMap:ct,displacementMap:Sn,emissiveMap:vt,normalMapObjectSpace:ct&&g.normalMapType===lh,normalMapTangentSpace:ct&&g.normalMapType===no,packedNormalMap:ct&&g.normalMapType===no&&Og(g.normalMap.format),metalnessMap:jt,roughnessMap:Qt,anisotropy:en,anisotropyMap:Oe,clearcoat:D,clearcoatMap:w,clearcoatNormalMap:_,clearcoatRoughnessMap:k,diffuseRoughness:tn,diffuseRoughnessMap:se,dispersion:at,retroreflection:ot,iridescence:_e,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:gt,sheenColorMap:me,sheenRoughnessMap:$,specularMap:j,specularColorMap:de,specularIntensityMap:R,transmission:De,transmissionMap:Q,thicknessMap:K,gradientMap:fe,opaque:g.transparent===!1&&g.blending===ls&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:ue,alphaHash:Pe,combine:g.combine,mapUv:Ce&&m(g.map.channel),aoMapUv:Et&&m(g.aoMap.channel),lightMapUv:mt&&m(g.lightMap.channel),bumpMapUv:Ht&&m(g.bumpMap.channel),normalMapUv:ct&&m(g.normalMap.channel),displacementMapUv:Sn&&m(g.displacementMap.channel),emissiveMapUv:vt&&m(g.emissiveMap.channel),metalnessMapUv:jt&&m(g.metalnessMap.channel),roughnessMapUv:Qt&&m(g.roughnessMap.channel),anisotropyMapUv:Oe&&m(g.anisotropyMap.channel),clearcoatMapUv:w&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:$&&m(g.sheenRoughnessMap.channel),specularMapUv:j&&m(g.specularMap.channel),specularColorMapUv:de&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:Q&&m(g.transmissionMap.channel),thicknessMapUv:K&&m(g.thicknessMap.channel),alphaMapUv:oe&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ct||en),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ce||oe),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:O.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===je,decodeVideoTextureEmissive:vt&&g.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(g.emissiveMap.colorSpace)===je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===rn,flipSided:g.side===Gt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&g.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function b(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)v.push(U),v.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(p(v,g),d(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function p(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function d(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let v=u[g.type],U;if(v){let L=Pn[v];U=bh.clone(L.uniforms)}else U=g.uniforms;return U}function A(g,v){let U=h.get(v);return U!==void 0?++U.usedTimes:(U=new Ug(i,v,g,s),c.push(U),h.set(v,U)),U}function M(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:S,acquireProgram:A,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:T}}function kg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,y,b,p,d){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:y,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:p,group:d},i[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=y,S.materialVariant=a(u),S.groupOrder=b,S.renderOrder=u.renderOrder,S.z=p,S.group=d),e++,S}function l(u,m,y,b,p,d,S){S.reversedDepth===!0&&(p=-p);let A=o(u,m,y,b,p,d);y.transmission>0?n.push(A):y.transparent===!0?s.push(A):t.push(A)}function c(u,m,y,b,p,d){let S=o(u,m,y,b,p,d);y.transmission>0?n.unshift(S):y.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,m){t.length>1&&t.sort(u||zg),n.length>1&&n.sort(m||Gh),s.length>1&&s.sort(m||Gh)}function f(){for(let u=e,m=i.length;u<m;u++){let y=i[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Gg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hh,i.set(n,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ge};break;case"SpotLight":t={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wg=0;function Xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qg(i){let e=new Hg,t=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new st,a=new st;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,y=0,b=0,p=0,d=0,S=0,A=0,M=0,E=0,T=0,g=0,v=0,U=0,L=0;c.sort(Xg);for(let O=0,q=c.length;O<q;O++){let C=c[O],W=C.color,Z=C.intensity,V=C.distance,ie=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===oi?ie=C.shadow.map.texture:ie=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=W.r*Z,f+=W.g*Z,u+=W.b*Z;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],Z);L++}else if(C.isSunLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,J=t.get(C);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[y]=J,n.sunShadowMap[y]=ie;let ae=G.getViewportCount();for(let ce=0;ce<ae;ce++)n.sunShadowMatrix[b+ce]=G.getMatrix(ce),n.sunShadowCascade[b+ce]=G._cascadeData[ce];b+=ae,y++}n.sun[m]=Y,m++}else if(C.isDirectionalLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let G=C.shadow,J=t.get(C);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=Y,p++}else if(C.isSpotLight){let Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=V,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[S]=Y;let G=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,G.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[S]=G.matrix,C.castShadow){let J=t.get(C);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,n.spotShadow[S]=J,n.spotShadowMap[S]=ie,g++}S++}else if(C.isRectAreaLight){let Y=e.get(C);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=Y,A++}else if(C.isPointLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let G=C.shadow,J=t.get(C);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=ie,n.pointShadowMatrix[d]=C.shadow.matrix,T++}n.point[d]=Y,d++}else if(C.isHemisphereLight){let Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(Z),Y.groundColor.copy(C.groundColor).multiplyScalar(Z),n.hemi[M]=Y,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==S||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==y||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==v||N.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=S,n.rectArea.length=A,n.point.length=d,n.hemi.length=M,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-U,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=S,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=y,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=v,N.numLightProbes=L,n.version=Wg++)}function l(c,h){let f=0,u=0,m=0,y=0,b=0,p=0,d=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let M=c[S];if(M.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),f++}else if(M.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(M.isSpotLight){let E=n.spot[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),y++}else if(M.isRectAreaLight){let E=n.rectArea[b];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let E=n.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function Vh(i){let e=new qg(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vh(i),e.set(s,[o])):r>=a.length?(o=new Vh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$g=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Jg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Wh=new st,rr=new F,Dl=new F;function jg(i,e,t){let n=new ei,s=new Ie,r=new Ie,a=new lt,o=new ia,l=new sa,c={},h=t.maxTextureSize,f={[ai]:Gt,[Gt]:ai,[rn]:rn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Kg,fragmentShader:Zg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let y=new gn;y.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Vt(y,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let d=this.type;this.render=function(T,g,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===kc&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);let U=i.getRenderTarget(),L=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=d!==this.type;q&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(W=>W.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,W=T.length;C<W;C++){let Z=T[C],V=Z.shadow;if(V===void 0){Ne("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ie=V.getFrameExtents();s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===os){if(Z.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $t(s.x,s.y,{format:oi,type:xn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new Vn(s.x,s.y,yn),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=zn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt}else Z.isPointLight?(V.map=new or(s.x),V.map.depthTexture=new ks(s.x,_n)):(V.map=new $t(s.x,s.y),V.map.depthTexture=new Vn(s.x,s.y,_n)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=zn,this.type===$s?(V.map.depthTexture.compareFunction=Y?xl:yl,V.map.depthTexture.minFilter=kt,V.map.depthTexture.magFilter=kt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let G=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,v);let J=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:v.layers;for(let ae=0;ae<G;ae++){let ce=V.getCamera(ae);if(Z.isPointLight){let X=V.camera,te=V.matrix,ye=Z.distance||X.far;ye!==X.far&&(X.far=ye,X.updateProjectionMatrix()),rr.setFromMatrixPosition(Z.matrixWorld),X.position.copy(rr),Dl.copy(X.position),Dl.add($g[ae]),X.up.copy(Jg[ae]),X.lookAt(Dl),X.updateMatrixWorld(),te.makeTranslation(-rr.x,-rr.y,-rr.z),Wh.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Wh,X.coordinateSystem,X.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(V.map),i.clear());let X=V.getViewport(ae);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),O.viewport(a)}n=V.getFrustum(ae),M(g,v,ce,Z,J,this.type)}V.isPointLightShadow!==!0&&this.type===os&&S(V,v),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(U,L,N)};function S(T,g){let v=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new $t(s.x,s.y,{format:oi,type:xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,v,u,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,v,m,b,null)}function A(T,g,v,U){let L=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)L=N;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=L.uuid,q=g.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let W=C[q];W===void 0&&(W=L.clone(),C[q]=W,g.addEventListener("dispose",E)),L=W}if(L.visible=g.visible,L.wireframe=g.wireframe,U===os?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:f[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let O=i.properties.get(L);O.light=v}return L}function M(T,g,v,U,L,N){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===os)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let C=e.update(T),W=T.material;if(Array.isArray(W)){let Z=C.groups;for(let V=0,ie=Z.length;V<ie;V++){let Y=Z[V],G=W[Y.materialIndex];if(G&&G.visible){let J=A(T,G,U,N);T.onBeforeShadow(i,T,g,v,C,J,Y),i.renderBufferDirect(v,null,C,J,T,Y),T.onAfterShadow(i,T,g,v,C,J,Y)}}}else if(W.visible){let Z=A(T,W,U,N);T.onBeforeShadow(i,T,g,v,C,Z,null),i.renderBufferDirect(v,null,C,Z,T,null),T.onAfterShadow(i,T,g,v,C,Z,null)}}let q=T.children;for(let C=0,W=q.length;C<W;C++)M(q[C],g,v,U,L,N)}function E(T){T.target.removeEventListener("dispose",E);for(let v in c){let U=c[v],L=T.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function Qg(i,e){function t(){let R=!1,Q=new lt,K=null,fe=new lt(0,0,0,0);return{setMask:function(oe){K!==oe&&!R&&(i.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){R=oe},setClear:function(oe,ue,Pe,ze,re){re===!0&&(oe*=ze,ue*=ze,Pe*=ze),Q.set(oe,ue,Pe,ze),fe.equals(Q)===!1&&(i.clearColor(oe,ue,Pe,ze),fe.copy(Q))},reset:function(){R=!1,K=null,fe.set(-1,0,0,0)}}}function n(){let R=!1,Q=!1,K=null,fe=null,oe=null;return{setReversed:function(ue){if(Q!==ue){let Pe=e.get("EXT_clip_control");ue?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Q=ue;let ze=oe;oe=null,this.setClear(ze)}},getReversed:function(){return Q},setTest:function(ue){ue?le(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ue){K!==ue&&!R&&(i.depthMask(ue),K=ue)},setFunc:function(ue){if(Q&&(ue=yh[ue]),fe!==ue){switch(ue){case zr:i.depthFunc(i.NEVER);break;case Gr:i.depthFunc(i.ALWAYS);break;case Hr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Wr:i.depthFunc(i.GEQUAL);break;case Xr:i.depthFunc(i.GREATER);break;case qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ue}},setLocked:function(ue){R=ue},setClear:function(ue){oe!==ue&&(oe=ue,Q&&(ue=1-ue),i.clearDepth(ue))},reset:function(){R=!1,K=null,fe=null,oe=null,Q=!1}}}function s(){let R=!1,Q=null,K=null,fe=null,oe=null,ue=null,Pe=null,ze=null,re=null;return{setTest:function(Le){R||(Le?le(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Le){Q!==Le&&!R&&(i.stencilMask(Le),Q=Le)},setFunc:function(Le,ke,xe){(K!==Le||fe!==ke||oe!==xe)&&(i.stencilFunc(Le,ke,xe),K=Le,fe=ke,oe=xe)},setOp:function(Le,ke,xe){(ue!==Le||Pe!==ke||ze!==xe)&&(i.stencilOp(Le,ke,xe),ue=Le,Pe=ke,ze=xe)},setLocked:function(Le){R=Le},setClear:function(Le){re!==Le&&(i.clearStencil(Le),re=Le)},reset:function(){R=!1,Q=null,K=null,fe=null,oe=null,ue=null,Pe=null,ze=null,re=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},m=new WeakMap,y=[],b=null,p=!1,d=null,S=null,A=null,M=null,E=null,T=null,g=null,v=new Ge(0,0,0),U=0,L=!1,N=null,O=null,q=null,C=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=ie>=2);let G=null,J={},ae=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),X=new lt().fromArray(ae),te=new lt().fromArray(ce);function ye(R,Q,K,fe){let oe=new Uint8Array(4),ue=i.createTexture();i.bindTexture(R,ue),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<K;Pe++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Q+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ue}let we={};we[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Xi),Ht(!1),ct(Jo),le(i.CULL_FACE),Et(yi);function le(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ae(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function tt(R,Q){return u[R]!==Q?(i.bindFramebuffer(R,Q),u[R]=Q,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ce(R,Q){let K=y,fe=!1;if(R){K=m.get(Q),K===void 0&&(K=[],m.set(Q,K));let oe=R.textures;if(K.length!==oe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Pe=oe.length;ue<Pe;ue++)K[ue]=i.COLOR_ATTACHMENT0+ue;K.length=oe.length,fe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,fe=!0);fe&&i.drawBuffers(K)}function Ze(R){return b!==R?(i.useProgram(R),b=R,!0):!1}let Qe={[xi]:i.FUNC_ADD,[Gc]:i.FUNC_SUBTRACT,[Hc]:i.FUNC_REVERSE_SUBTRACT};Qe[Vc]=i.MIN,Qe[Wc]=i.MAX;let Ve={[Xc]:i.ZERO,[qc]:i.ONE,[Yc]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Jc]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[nl]:i.ONE_MINUS_SRC_ALPHA,[jc]:i.ONE_MINUS_DST_COLOR,[$c]:i.ONE_MINUS_DST_ALPHA,[eh]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[nh]:i.CONSTANT_ALPHA,[ih]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(R,Q,K,fe,oe,ue,Pe,ze,re,Le){if(R===yi){p===!0&&(Ae(i.BLEND),p=!1);return}if(p===!1&&(le(i.BLEND),p=!0),R!==zc){if(R!==d||Le!==L){if((S!==xi||E!==xi)&&(i.blendEquation(i.FUNC_ADD),S=xi,E=xi),Le)switch(R){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",R);break}else switch(R){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qo:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",R);break}A=null,M=null,T=null,g=null,v.set(0,0,0),U=0,d=R,L=Le}return}oe=oe||Q,ue=ue||K,Pe=Pe||fe,(Q!==S||oe!==E)&&(i.blendEquationSeparate(Qe[Q],Qe[oe]),S=Q,E=oe),(K!==A||fe!==M||ue!==T||Pe!==g)&&(i.blendFuncSeparate(Ve[K],Ve[fe],Ve[ue],Ve[Pe]),A=K,M=fe,T=ue,g=Pe),(ze.equals(v)===!1||re!==U)&&(i.blendColor(ze.r,ze.g,ze.b,re),v.copy(ze),U=re),d=R,L=!1}function mt(R,Q){R.side===rn?Ae(i.CULL_FACE):le(i.CULL_FACE);let K=R.side===Gt;Q&&(K=!K),Ht(K),R.blending===ls&&R.transparent===!1?Et(yi):Et(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let fe=R.stencilWrite;o.setTest(fe),fe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),vt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function ct(R){R!==Oc?(le(i.CULL_FACE),R!==O&&(R===Jo?i.cullFace(i.BACK):R===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),O=R}function Sn(R){R!==q&&(V&&i.lineWidth(R),q=R)}function vt(R,Q,K){R?(le(i.POLYGON_OFFSET_FILL),(C!==Q||W!==K)&&(C=Q,W=K,a.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Ae(i.POLYGON_OFFSET_FILL)}function jt(R){R?le(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function Qt(R){R===void 0&&(R=i.TEXTURE0+Z-1),G!==R&&(i.activeTexture(R),G=R)}function en(R,Q,K){K===void 0&&(G===null?K=i.TEXTURE0+Z-1:K=G);let fe=J[K];fe===void 0&&(fe={type:void 0,texture:void 0},J[K]=fe),(fe.type!==R||fe.texture!==Q)&&(G!==K&&(i.activeTexture(K),G=K),i.bindTexture(R,Q||we[R]),fe.type=R,fe.texture=Q)}function D(){let R=J[G];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function tn(){try{i.compressedTexImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function ot(){try{i.texSubImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function _e(){try{i.texSubImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function Oe(){try{i.texStorage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){Ue("WebGLState:",R)}}function k(){try{i.texImage3D(...arguments)}catch(R){Ue("WebGLState:",R)}}function se(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function ee(R,Q){f[R]!==Q&&(i.pixelStorei(R,Q),f[R]=Q)}function he(R){X.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function me(R){te.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),te.copy(R))}function $(R,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let fe=K.get(R);fe===void 0&&(fe=i.getUniformBlockIndex(Q,R.name),i.uniformBlockBinding(Q,fe,fe),K.set(R,fe))}function j(R,Q,K){let oe=c.get(Q).get(R);l[oe]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,K),l[oe]=K)}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,J={},u={},l={},m=new WeakMap,y=[],b=null,p=!1,d=null,S=null,A=null,M=null,E=null,T=null,g=null,v=new Ge(0,0,0),U=0,L=!1,N=null,O=null,q=null,C=null,W=null,X.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Ae,bindFramebuffer:tt,drawBuffers:Ce,useProgram:Ze,setBlending:Et,setMaterial:mt,setFlipSided:Ht,setCullFace:ct,setLineWidth:Sn,setPolygonOffset:vt,setScissorTest:jt,activeTexture:Qt,bindTexture:en,unbindTexture:D,compressedTexImage2D:tn,compressedTexImage3D:at,texImage2D:_,texImage3D:k,pixelStorei:ee,getParameter:se,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:Oe,texStorage3D:w,texSubImage2D:ot,texSubImage3D:_e,compressedTexSubImage2D:gt,compressedTexSubImage3D:De,scissor:he,viewport:me,reset:de}}function e_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,f=new Set,u,m=new WeakMap,y=new Set,b=new FinalizationRegistry(w=>y.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(w,_){return p?new OffscreenCanvas(w,_):Cs("canvas")}function S(w,_,k){let se=1,ee=Oe(w);if((ee.width>k||ee.height>k)&&(se=k/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let he=Math.floor(se*ee.width),me=Math.floor(se*ee.height);u===void 0&&(u=d(he,me));let $=_?d(he,me):u;return $.width=he,$.height=me,$.getContext("2d").drawImage(w,0,0,he,me),Ne("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+he+"x"+me+")."),$}else return"data"in w&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function A(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,_,k,se,ee,he=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me;se&&(me=e.get("EXT_texture_norm16"),me||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&me&&($=me.R16_EXT),k===i.SHORT&&me&&($=me.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),_===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),k===i.SHORT&&me&&($=me.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),k===i.SHORT&&me&&($=me.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){let j=he?Rs:Ye.getTransfer(ee);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=j===je?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),k===i.SHORT&&me&&($=me.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(w,_){let k;return w?_===null||_===_n||_===bi?k=i.DEPTH24_STENCIL8:_===yn?k=i.DEPTH32F_STENCIL8:_===hs&&(k=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_n||_===bi?k=i.DEPTH_COMPONENT24:_===yn?k=i.DEPTH_COMPONENT32F:_===hs&&(k=i.DEPTH_COMPONENT16),k}function v(w,_){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function U(w){let _=new WeakRef(w);n.get(w).__ref=_,y.add(_),b.register(w,_,_)}function L(w){let _=n.get(w).__ref;_!==void 0&&(y.delete(_),b.unregister(_))}function N(w){q(w.target)}function O(w){C(w.target)}function q(w){w.removeEventListener("dispose",N),L(w),Z(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function C(w){w.removeEventListener("dispose",O),L(w),ie(w)}function W(){for(let w of y){let _=w.deref();_!==void 0&&(_.isRenderTarget===!0?C(_):q(_))}y.clear(),f.clear()}function Z(w){let _=n.get(w);if(_.__webglInit===void 0)return;let k=w.source,se=m.get(k);if(se){let ee=se[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&V(w),Object.keys(se).length===0&&m.delete(k)}n.remove(w)}function V(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let k=w.source,se=m.get(k);delete se[_.__cacheKey],a.memory.textures--}function ie(w){let _=n.get(w);_.__depthDisposeCallback&&_.__depthDisposeCallback();let k=w.depthTexture;if(k&&k.renderTarget===w&&q(k),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let he=0;he<_.__webglFramebuffer[ee].length;he++)i.deleteFramebuffer(_.__webglFramebuffer[ee][he]);else i.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[ee]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let se=w.textures;for(let ee=0,he=se.length;ee<he;ee++){let me=n.get(se[ee]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(se[ee])}n.remove(w)}let Y=0;function G(){Y=0}function J(){return Y}function ae(w){Y=w}function ce(){let w=Y;return w>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,w}function X(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.mipmapsAutoUpdate),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function te(w,_){let k=n.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){let se=w.image;if(se===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(k,w,_);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function ye(w,_){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){mt(k,w,_);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function we(w,_){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){mt(k,w,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function le(w,_){let k=n.get(w);if(w.version>0&&k.__version!==w.version){Ht(k,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let Ae={[Yr]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},tt={[Tt]:i.NEAREST,[ah]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},Ce={[hh]:i.NEVER,[vl]:i.ALWAYS,[uh]:i.LESS,[yl]:i.LEQUAL,[dh]:i.EQUAL,[xl]:i.GEQUAL,[fh]:i.GREATER,[ph]:i.NOTEQUAL};function Ze(w,_){if(_.type===yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===xa||_.magFilter===js||_.magFilter===Wn||_.minFilter===kt||_.minFilter===xa||_.minFilter===js||_.minFilter===Wn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ae[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ae[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ae[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,tt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,tt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==js&&_.minFilter!==Wn||_.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(w,_){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",N),U(_));let se=_.source,ee=m.get(se);ee===void 0&&(ee={},m.set(se,ee));let he=X(_);if(he!==w.__cacheKey){ee[he]===void 0&&(ee[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[he].usedTimes++;let me=ee[w.__cacheKey];me!==void 0&&(ee[w.__cacheKey].usedTimes--,me.usedTimes===0&&V(_)),w.__cacheKey=he,w.__webglTexture=ee[he].texture}return k}function Ve(w,_,k){return Math.floor(Math.floor(w/k)/_)}function Et(w,_,k,se){let he=w.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,se,_.data);else{he.sort((R,Q)=>R.start-Q.start);let me=0;for(let R=1;R<he.length;R++){let Q=he[me],K=he[R],fe=Q.start+Q.count,oe=Ve(K.start,_.width,4),ue=Ve(Q.start,_.width,4);K.start<=fe+1&&oe===ue&&Ve(K.start+K.count-1,_.width,4)===oe?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++me,he[me]=K)}he.length=me+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,Q=he.length;R<Q;R++){let K=he[R],fe=Math.floor(K.start/4),oe=Math.ceil(K.count/4),ue=fe%_.width,Pe=Math.floor(fe/_.width),ze=oe,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(i.TEXTURE_2D,0,ue,Pe,ze,re,k,se,_.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function mt(w,_,k){let se=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(se=i.TEXTURE_3D);let ee=Qe(w,_),he=_.source;t.bindTexture(se,w.__webglTexture,i.TEXTURE0+k);let me=n.get(he);if(he.version!==me.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let re=Ye.getPrimaries(Ye.workingColorSpace),Le=_.colorSpace===qn?null:Ye.getPrimaries(_.colorSpace),ke=_.colorSpace===qn||re===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=S(_.image,!1,s.maxTextureSize);j=De(_,j);let de=r.convert(_.format,_.colorSpace),R=r.convert(_.type),Q=T(_.internalFormat,de,R,_.normalized,_.colorSpace,_.isVideoTexture);Ze(se,_);let K,fe=_.mipmaps,oe=_.isVideoTexture!==!0,ue=me.__version===void 0||ee===!0,Pe=he.dataReady,ze=v(_,j);if(_.isDepthTexture)Q=g(_.format===Xn,_.type),ue&&(oe?t.texStorage2D(i.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,de,R,null));else if(_.isDataTexture)if(fe.length>0){oe&&ue&&t.texStorage2D(i.TEXTURE_2D,ze,Q,fe[0].width,fe[0].height);for(let re=0,Le=fe.length;re<Le;re++)K=fe[re],oe?Pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,de,R,K.data):t.texImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,de,R,K.data);_.generateMipmaps=!1}else oe?(ue&&t.texStorage2D(i.TEXTURE_2D,ze,Q,j.width,j.height),Pe&&Et(_,j,de,R)):t.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,de,R,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){oe&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Q,fe[0].width,fe[0].height,j.depth);for(let re=0,Le=fe.length;re<Le;re++)if(K=fe[re],_.format!==vn)if(de!==null)if(oe){if(Pe)if(_.layerUpdates.size>0){let ke=Il(K.width,K.height,_.format,_.type);for(let xe of _.layerUpdates){let et=K.data.subarray(xe*ke/K.data.BYTES_PER_ELEMENT,(xe+1)*ke/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,xe,K.width,K.height,1,de,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,de,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,j.depth,0,K.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,de,R,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,j.depth,0,de,R,K.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{oe&&ue&&t.texStorage2D(i.TEXTURE_2D,ze,Q,fe[0].width,fe[0].height);for(let re=0,Le=fe.length;re<Le;re++)K=fe[re],_.format!==vn?de!==null?oe?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,de,K.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,K.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,K.width,K.height,de,R,K.data):t.texImage2D(i.TEXTURE_2D,re,Q,K.width,K.height,0,de,R,K.data)}else if(_.isDataArrayTexture)if(oe){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Q,j.width,j.height,j.depth),Pe)if(_.layerUpdates.size>0){let re=Il(j.width,j.height,_.format,_.type);for(let Le of _.layerUpdates){let ke=j.data.subarray(Le*re/j.data.BYTES_PER_ELEMENT,(Le+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,j.width,j.height,1,de,R,ke)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,R,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,de,R,j.data);else if(_.isData3DTexture)oe?(ue&&t.texStorage3D(i.TEXTURE_3D,ze,Q,j.width,j.height,j.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,R,j.data)):t.texImage3D(i.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,de,R,j.data);else if(_.isFramebufferTexture){if(ue)if(oe)t.texStorage2D(i.TEXTURE_2D,ze,Q,j.width,j.height);else{let re=j.width,Le=j.height;for(let ke=0;ke<ze;ke++)t.texImage2D(i.TEXTURE_2D,ke,Q,re,Le,0,de,R,null),re>>=1,Le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),f.add(_),re.onpaint=Le=>{let ke=Le.changedElements;for(let xe of f)ke.includes(xe.image)&&(xe.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let ke=i.RGBA,xe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,xe,et,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&ue){let re=Oe(fe[0]);t.texStorage2D(i.TEXTURE_2D,ze,Q,re.width,re.height)}for(let re=0,Le=fe.length;re<Le;re++)K=fe[re],oe?Pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,de,R,K):t.texImage2D(i.TEXTURE_2D,re,Q,de,R,K);_.generateMipmaps=!1}else if(oe){if(ue){let re=Oe(j);t.texStorage2D(i.TEXTURE_2D,ze,Q,re.width,re.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,R,j)}else t.texImage2D(i.TEXTURE_2D,0,Q,de,R,j);A(_)&&_.mipmapsAutoUpdate===!0&&M(se),me.__version=he.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ht(w,_,k){if(_.image.length!==6)return;let se=Qe(w,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let he=n.get(ee);if(ee.version!==he.__version||se===!0){t.activeTexture(i.TEXTURE0+k);let me=Ye.getPrimaries(Ye.workingColorSpace),$=_.colorSpace===qn?null:Ye.getPrimaries(_.colorSpace),j=_.colorSpace===qn||me===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let xe=0;xe<6;xe++)!de&&!R?Q[xe]=S(_.image[xe],!0,s.maxCubemapSize):Q[xe]=R?_.image[xe].image:_.image[xe],Q[xe]=De(_,Q[xe]);let K=Q[0],fe=r.convert(_.format,_.colorSpace),oe=r.convert(_.type),ue=T(_.internalFormat,fe,oe,_.normalized,_.colorSpace),Pe=_.isVideoTexture!==!0,ze=he.__version===void 0||se===!0,re=ee.dataReady,Le=v(_,K);Ze(i.TEXTURE_CUBE_MAP,_);let ke;if(_.isDepthTexture){if(ue=g(_.format===Xn,_.type),ze)if(Pe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,K.width,K.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ue,K.width,K.height,0,fe,oe,null)}else if(de){Pe&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ue,K.width,K.height);for(let xe=0;xe<6;xe++){ke=Q[xe].mipmaps;for(let et=0;et<ke.length;et++){let bt=ke[et];_.format!==vn?fe!==null?Pe?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,bt.width,bt.height,fe,bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,ue,bt.width,bt.height,0,bt.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,bt.width,bt.height,fe,oe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,ue,bt.width,bt.height,0,fe,oe,bt.data)}}}else{if(ke=_.mipmaps,Pe&&ze){ke.length>0&&Le++;let xe=Oe(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ue,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(R){Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Q[xe].width,Q[xe].height,fe,oe,Q[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ue,Q[xe].width,Q[xe].height,0,fe,oe,Q[xe].data);for(let et=0;et<ke.length;et++){let Yn=ke[et].image[xe].image;Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Yn.width,Yn.height,fe,oe,Yn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,ue,Yn.width,Yn.height,0,fe,oe,Yn.data)}}else{Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,fe,oe,Q[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ue,fe,oe,Q[xe]);for(let et=0;et<ke.length;et++){let bt=ke[et];Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,fe,oe,bt.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,ue,fe,oe,bt.image[xe])}}}A(_)&&_.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),he.__version=ee.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ct(w,_,k,se,ee,he){let me=r.convert(k.format,k.colorSpace),$=r.convert(k.type),j=T(k.internalFormat,me,$,k.normalized,k.colorSpace),de=n.get(_),R=n.get(k);if(R.__renderTarget=_,!de.__hasExternalTextures){let Q=Math.max(1,_.width>>he),K=Math.max(1,_.height>>he);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,he,j,Q,K,_.depth,0,me,$,null):t.texImage2D(ee,he,j,Q,K,0,me,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,R.__webglTexture,0,ot(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,R.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Sn(w,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let se=_.depthTexture,ee=se&&se.isDepthTexture?se.type:null,he=g(_.stencilBuffer,ee),me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(_),he,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(_),he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,w)}else{let se=_.textures;for(let ee=0;ee<se.length;ee++){let he=se[ee],me=r.convert(he.format,he.colorSpace),$=r.convert(he.type),j=T(he.internalFormat,me,$,he.normalized,he.colorSpace);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(_),j,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(w,_,k){let se=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(_.depthTexture);ee.__renderTarget=_;let he=se?_.depthTexture.image[0]:_.depthTexture.image;(!ee.__webglTexture||he.width!==_.width||he.height!==_.height)&&(he.width=_.width,he.height=_.height,_.depthTexture.needsUpdate=!0),se?le(_.depthTexture,0):te(_.depthTexture,0);let me=ee.__webglTexture,$=ot(_),j=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,de=_.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===zn)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,j,me,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,de,j,me,0);else if(_.depthTexture.format===Xn)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,j,me,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,de,j,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(w){let _=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let se=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),se){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=se}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let se=0;se<6;se++)vt(_.__webglFramebuffer[se],w,se);else w.texture.mipmaps.length>0?vt(_.__webglFramebuffer[0],w,0):vt(_.__webglFramebuffer,w,0);else if(k){_.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[se]),_.__webglDepthbuffer[se]===void 0)_.__webglDepthbuffer[se]=i.createRenderbuffer(),Sn(_.__webglDepthbuffer[se],w,!1);else{let ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,he)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Sn(_.__webglDepthbuffer,w,!1);else{let ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(w,_,k){let se=n.get(w);_!==void 0&&ct(se.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&jt(w)}function en(w){let _=w.texture,k=n.get(w),se=n.get(_);w.addEventListener("dispose",O),U(w);let ee=w.textures,he=w.isWebGLCubeRenderTarget===!0,me=ee.length>1;if(me||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=_.version,a.memory.textures++),he){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let j=0;j<_.mipmaps.length;j++)k.__webglFramebuffer[$][j]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(me)for(let $=0,j=ee.length;$<j;$++){let de=n.get(ee[$]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&_e(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let j=ee[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let de=r.convert(j.format,j.colorSpace),R=r.convert(j.type),Q=T(j.internalFormat,de,R,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),K=ot(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Sn(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)ct(k.__webglFramebuffer[$][j],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else ct(k.__webglFramebuffer[$],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);A(_)?M(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(me){for(let $=0,j=ee.length;$<j;$++){let de=ee[$],R=n.get(de),Q=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,R.__webglTexture),Ze(Q,de),ct(k.__webglFramebuffer,w,de,i.COLOR_ATTACHMENT0+$,Q,0),A(de)&&M(Q)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,se.__webglTexture),Ze($,_),_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)ct(k.__webglFramebuffer[j],w,_,i.COLOR_ATTACHMENT0,$,j);else ct(k.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,$,0);A(_)?M($):_.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&jt(w)}function D(w){let _=w.textures;for(let k=0,se=_.length;k<se;k++){let ee=_[k];if(A(ee)&&ee.mipmapsAutoUpdate===!0){let he=E(w),me=n.get(ee).__webglTexture;t.bindTexture(he,me),M(he),t.unbindTexture()}}}let tn=[];function at(w){if(w.samples>0){if(_e(w)===!1){let _=w.textures,k=w.width,se=w.height,ee=i.COLOR_BUFFER_BIT,he=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(w),$=_.length>1;if($)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<_.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[de]);let R=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,k,se,0,0,k,se,ee,i.NEAREST),l===!0&&(tn.length=0,tn.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&tn.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,me.__webglColorRenderbuffer[de]);let R=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ot(w){return Math.min(s.maxSamples,w.samples)}function _e(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function De(w,_){let k=w.colorSpace,se=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==As&&k!==qn&&(Ye.getTransfer(k)===je?(se!==vn||ee!==Wt)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",k)),_}function Oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=G,this.getTextureUnits=J,this.setTextureUnits=ae,this.setTexture2D=te,this.setTexture2DArray=ye,this.setTexture3D=we,this.setTextureCube=le,this.rebindTextures=Qt,this.setupRenderTarget=en,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=_e,this.dispose=W}function t_(i,e){function t(n,s=qn){let r,a=Ye.getTransfer(s);if(n===Wt)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ul)return i.BYTE;if(n===dl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===gl)return i.RGB;if(n===vn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===oi)return i.RG;if(n===wa)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Qs||n===er||n===tr||n===nr)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Aa||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Ia||n===La||n===Da||n===Na||n===ir||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===Ia)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ir)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Ja||n===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===eo||n===sr||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,y=null,b=typeof XRWebGLBinding<"u",p=new zl,d={},S=t.getContextAttributes(),A=null,M=null,E=[],T=[],g=new Ie,v=null,U=null,L=new Bt;L.viewport=new lt;let N=new Bt;N.viewport=new lt;let O=[L,N],q=new ga,C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=E[X];return te===void 0&&(te=new Ji,E[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=E[X];return te===void 0&&(te=new Ji,E[X]=te),te.getGripSpace()},this.getHand=function(X){let te=E[X];return te===void 0&&(te=new Ji,E[X]=te),te.getHandSpace()};function Z(X){let te=T.indexOf(X.inputSource);if(te===-1)return;let ye=E[te];ye!==void 0&&(ye.update(X.inputSource,X.frame,c||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ie);for(let X=0;X<E.length;X++){let te=T[X];te!==null&&(T[X]=null,E[X].disconnect(te))}C=null,W=null,p.reset();for(let X in d)delete d[X];if(e.setRenderTarget(A),m=null,u=null,f=null,s=null,M=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(g.width,g.height,!1),U!==null){let X=U.camera;X.fov=U.fov,X.zoom=U.zoom,X.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,we=null,le=null;S.depth&&(le=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Xn:zn,we=S.stencil?bi:_n);let Ae={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new $t(u.textureWidth,u.textureHeight,{format:vn,type:Wt,depthTexture:new Vn(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new $t(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ie(X){for(let te=0;te<X.removed.length;te++){let ye=X.removed[te],we=T.indexOf(ye);we>=0&&(T[we]=null,E[we].disconnect(ye))}for(let te=0;te<X.added.length;te++){let ye=X.added[te],we=T.indexOf(ye);if(we===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=T.length){T.push(ye),we=Ae;break}else if(T[Ae]===null){T[Ae]=ye,we=Ae;break}if(we===-1)break}let le=E[we];le&&le.connect(ye)}}function Y(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let te=X.near,ye=X.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),q.near=N.near=L.near=te,q.far=N.far=L.far=ye,(C!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),C=q.near,W=q.far),q.layers.mask=X.layers.mask|6,L.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;let we=X.parent,le=q.cameras;Y(q,we);for(let Ae=0;Ae<le.length;Ae++)Y(le[Ae],we);q.projectionMatrix.copy(L.projectionMatrix),q.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&X.isPerspectiveCamera&&(U={camera:X,fov:X.fov,zoom:X.zoom}),G(X,q,we)};function G(X,te,ye){ye===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ki*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(X){return d[X]};let J=null;function ae(X,te){if(h=te.getViewerPose(c||a),y=te,h!==null){let ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let we=!1;ye.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Ce=0;Ce<ye.length;Ce++){let Ze=ye[Ce],Qe=null;if(m!==null)Qe=m.getViewport(Ze);else{let Et=f.getViewSubImage(u,Ze);Qe=Et.viewport,Ce===0&&(e.setRenderTargetTextures(M,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(M))}let Ve=O[Ce];Ve===void 0&&(Ve=new Bt,Ve.layers.enable(Ce),Ve.viewport=new lt,O[Ce]=Ve),Ve.matrix.fromArray(Ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ce===0&&(q.matrix.copy(Ve.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(Ve)}let le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Ce=f.getDepthInformation(ye[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,s.renderState)}if(le&&le.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let Ce=0;Ce<ye.length;Ce++){let Ze=ye[Ce].camera;if(Ze){let Qe=d[Ze];Qe||(Qe=new zs,d[Ze]=Qe);let Ve=f.getCameraImage(Ze);Qe.sourceTexture=Ve}}}}for(let ye=0;ye<E.length;ye++){let we=T[ye],le=E[ye];we!==null&&le!==void 0&&le.update(we,te,c||a)}J&&J(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),y=null}let ce=new Xh;ce.setAnimationLoop(ae),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}},s_=new st,tu=new Fe;tu.set(-1,0,0,0,1,0,0,0,1);function r_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Rl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,A,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),y(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),b(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,S,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S=e.get(d),A=S.envMap,M=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tu),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,S){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,d){d.matcap&&(p.matcap.value=d.matcap)}function b(p,d){let S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a_(i,e,t,n){let s={},r={};function a(S,A){let M=A.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,A){let M=s[S.id];M===void 0&&(y(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",p));let E=A.program;n.updateUBOMapping(S,E);let T=e.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){let A=i.createBuffer(),M=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){let A=s[S.id],M=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,g=M.length;T<g;T++){let v=M[T];if(Array.isArray(v))for(let U=0,L=v.length;U<L;U++)h(v[U],T,U,E);else h(v,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,A,M,E){if(u(S,A,M,E)===!0){let T=S.__offset,g=S.value;if(Array.isArray(g)){let v=0;for(let U=0;U<g.length;U++){let L=g[U],N=b(L,!0);f(L,S.__data,v),v+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function f(S,A,M){typeof S=="number"||typeof S=="boolean"?A[M]=S:S.isMatrix3?(A[M]=S.elements[0],A[M+1]=S.elements[1],A[M+2]=S.elements[2],A[M+3]=0,A[M+4]=S.elements[3],A[M+5]=S.elements[4],A[M+6]=S.elements[5],A[M+7]=0,A[M+8]=S.elements[6],A[M+9]=S.elements[7],A[M+10]=S.elements[8],A[M+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-M),M):S.toArray(A,M)}function u(S,A,M,E){let T=S.value,g=A+"_"+M;if(Array.isArray(T)){E[g]===void 0&&(E[g]=[]);let v=E[g],U=!1;for(let L=0;L<T.length;L++)m(T[L],v,L)===!0&&(U=!0);return U}return m(T,E,g)}function m(S,A,M){if(A[M]===void 0)return typeof S=="number"||typeof S=="boolean"?A[M]=S:ArrayBuffer.isView(S)?A[M]=S.slice():A[M]=S.clone(),!0;{let E=A[M];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return A[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function y(S){let A=S.uniforms,M=0,E=16;for(let g=0,v=A.length;g<v;g++){let U=Array.isArray(A[g])?A[g]:[A[g]];for(let L=0,N=U.length;L<N;L++){let O=U[L],q=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(A[g])||Array.isArray(O.value),W=M;for(let V=0,ie=q.length;V<ie;V++){let Y=q[V],G=b(Y,C),J=M%E,ae=J%G.boundary,ce=J+ae;M+=ae,ce!==0&&E-ce<G.storage&&(M+=E-ce),V===0&&(W=M),M+=G.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((M-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let T=M%E;return T>0&&(M+=E-T),S.__size=M,S.__cache={},this}function b(S,A){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(S){let A=S.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:d}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function l_(){return Cn===null&&(Cn=new ea(o_,16,16,oi,xn),Cn.name="DFG_LUT",Cn.minFilter=kt,Cn.magFilter=kt,Cn.wrapS=wn,Cn.wrapT=wn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var oo=class{constructor(e={}){let{canvas:t=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Wt}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let b=m,p=new Set([Ta,wa,Ma]),d=new Set([Wt,_n,hs,bi,ba,Sa]),S=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,T=null,g=[],v=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,N=!1,O=null,q=null,C=null,W=null;this._outputColorSpace=Nt;let Z=0,V=0,ie=null,Y=-1,G=null,J=new lt,ae=new lt,ce=null,X=new Ge(0),te=0,ye=t.width,we=t.height,le=1,Ae=null,tt=null,Ce=new lt(0,0,ye,we),Ze=new lt(0,0,ye,we),Qe=!1,Ve=new ei,Et=new ta,mt=!1,Ht=!1,ct=new st,Sn=new F,vt=new lt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function en(){return ie===null?le:1}let D=n;function tn(x,I){return t.getContext(x,I)}let at,ot,_e,gt,De,Oe,w,_,k,se,ee,he,me,$,j,de,R,Q,K,fe,oe,ue,Pe;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){let I="webgl2";if(D=tn(I,x),D===null)throw tn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(x){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ue("WebGLRenderer: "+x.message),x}function ze(){at=new xm(D),at.init(),oe=new t_(D,at),ot=new lm(D,at,e,oe),_e=new Qg(D,at),ot.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),q=D.createFramebuffer(),C=D.createFramebuffer(),W=D.createFramebuffer(),gt=new Sm(D),De=new kg,Oe=new e_(D,at,_e,De,ot,oe,gt),w=new ym(L),_=new Md(D),ue=new am(D,_),k=new vm(D,_,gt,ue),se=new wm(D,k,_,ue,gt),Q=new Mm(D,ot,Oe),j=new cm(De),ee=new Bg(L,w,at,ot,ue,j),he=new r_(L,De),me=new Gg,$=new Yg(at),R=new rm(L,w,_e,se,y,l),de=new jg(L,se,ot),Pe=new a_(D,gt,ot,_e),K=new om(D,at,gt),fe=new bm(D,at,gt),gt.programs=ee.programs,L.capabilities=ot,L.extensions=at,L.properties=De,L.renderLists=me,L.shadowMap=de,L.state=_e,L.info=gt}b!==Wt&&(U=new Em(b,t.width,t.height,o,s,r));let re=new Gl(L,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=at.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=at.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(x){x!==void 0&&(le=x,this.setSize(ye,we,!1))},this.getSize=function(x){return x.set(ye,we)},this.setSize=function(x,I,H=!0){if(re.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=x,we=I,t.width=Math.floor(x*le),t.height=Math.floor(I*le),H===!0&&(t.style.width=x+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(ye*le,we*le).floor()},this.setDrawingBufferSize=function(x,I,H){ye=x,we=I,le=H,t.width=Math.floor(x*H),t.height=Math.floor(I*H),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(b===Wt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(J)},this.getViewport=function(x){return x.copy(Ce)},this.setViewport=function(x,I,H,B){x.isVector4?Ce.set(x.x,x.y,x.z,x.w):Ce.set(x,I,H,B),_e.viewport(J.copy(Ce).multiplyScalar(en()).round())},this.getScissor=function(x){return x.copy(Ze)},this.setScissor=function(x,I,H,B){x.isVector4?Ze.set(x.x,x.y,x.z,x.w):Ze.set(x,I,H,B),_e.scissor(ae.copy(Ze).multiplyScalar(en()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(x){_e.setScissorTest(Qe=x)},this.setOpaqueSort=function(x){Ae=x},this.setTransparentSort=function(x){tt=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,H=!0){let B=0;if(x){let z=!1;if(ie!==null){let ge=ie.texture.format;z=p.has(ge)}if(z){let ge=ie.texture.type,Me=d.has(ge),pe=R.getClearColor(),be=R.getClearAlpha(),Re=pe.r,Be=pe.g,Xe=pe.b;Me?(S[0]=Re,S[1]=Be,S[2]=Xe,S[3]=be,D.clearBufferuiv(D.COLOR,0,S)):(A[0]=Re,A[1]=Be,A[2]=Xe,A[3]=be,D.clearBufferiv(D.COLOR,0,A))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),R.dispose(),me.dispose(),$.dispose(),Oe.dispose(),De.dispose(),w.dispose(),se.dispose(),k.dispose(),ue.dispose(),Pe.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",jl),re.removeEventListener("sessionend",Ql),hi.stop()};function Le(x){x.preventDefault(),Ps("WebGLRenderer: Context Lost."),N=!0}function ke(){Ps("WebGLRenderer: Context Restored."),N=!1;let x=gt.autoReset,I=de.enabled,H=de.autoUpdate,B=de.needsUpdate,z=de.type;ze(),gt.autoReset=x,de.enabled=I,de.autoUpdate=H,de.needsUpdate=B,de.type=z}function xe(x){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function et(x){let I=x.target;I.removeEventListener("dispose",et),bt(I)}function bt(x){Yn(x),De.remove(x)}function Yn(x){let I=De.get(x).programs;I!==void 0&&(I.forEach(function(H){ee.releaseProgram(H)}),x.isShaderMaterial&&ee.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,H,B,z,ge){I===null&&(I=jt);let Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=wu(x,I,H,B,z);_e.setMaterial(B,Me);let be=H.index,Re=1;if(B.wireframe===!0){if(be=k.getWireframeAttribute(H),be===void 0)return;Re=2}let Be=H.drawRange,Xe=H.attributes.position,Te=Be.start*Re,qe=(Be.start+Be.count)*Re;ge!==null&&(Te=Math.max(Te,ge.start*Re),qe=Math.min(qe,(ge.start+ge.count)*Re)),be!==null?(Te=Math.max(Te,0),qe=Math.min(qe,be.count)):Xe!=null&&(Te=Math.max(Te,0),qe=Math.min(qe,Xe.count));let ft=qe-Te;if(ft<0||ft===1/0)return;ue.setup(z,B,pe,H,be);let it,nt=K;if(be!==null&&(it=_.get(be),nt=fe,nt.setIndex(it)),z.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*en()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(z.isLine){let Pt=B.linewidth;Pt===void 0&&(Pt=1),_e.setLineWidth(Pt*en()),z.isLineSegments?nt.setMode(D.LINES):z.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else z.isPoints?nt.setMode(D.POINTS):z.isSprite&&nt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(at.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Pt=z._multiDrawStarts,Ee=z._multiDrawCounts,Ft=z._multiDrawCount,$e=be?_.get(be).bytesPerElement:1,ui=De.get(B).currentProgram.getUniforms();for(let It=0;It<Ft;It++)ui.setValue(D,"_gl_DrawID",It),nt.render(Pt[It]/$e,Ee[It])}else if(z.isInstancedMesh)nt.renderInstances(Te,ft,z.count);else if(H.isInstancedBufferGeometry){let Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,Pt);nt.renderInstances(Te,ft,Ee)}else nt.render(Te,ft)};function Jl(x,I,H,B){O!==null&&x.isNodeMaterial&&O.setObject(B,x),mt===!0&&j.setState(x,H,!1),x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1?(x.side=Gt,x.needsUpdate=!0,ms(x,I,B),x.side=ai,x.needsUpdate=!0,ms(x,I,B),x.side=rn):ms(x,I,B)}this.compile=function(x,I,H=null){H===null&&(H=x),O!==null&&O.renderStart(x,I,H),T=$.get(H),T.init(I),v.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Ht=this.localClippingEnabled,mt=j.init(this.clippingPlanes,Ht),mt===!0&&j.setGlobalState(this.clippingPlanes,I),O!==null&&de.render(T.state.shadowsArray,H,I);let B=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ge=z.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let pe=ge[Me];Jl(pe,H,I,z),B.add(pe)}else Jl(ge,H,I,z),B.add(ge)}),T=v.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(x,I,H=null){let B=this.compile(x,I,H);return new Promise(z=>{function ge(){if(B.forEach(function(Me){let be=De.get(Me).currentProgram;(be===void 0||be.isReady())&&B.delete(Me)}),B.size===0){z(x);return}setTimeout(ge,10)}at.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let vo=null;function Su(x){vo&&vo(x)}function jl(){hi.stop()}function Ql(){hi.start()}let hi=new Xh;hi.setAnimationLoop(Su),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(x){vo=x,re.setAnimationLoop(x),x===null?hi.stop():hi.start()},re.addEventListener("sessionstart",jl),re.addEventListener("sessionend",Ql),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(x,I);let H=re.enabled===!0&&re.isPresenting===!0,B=U!==null&&(ie===null||H)&&U.begin(L,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,I,ie),T=$.get(x,v.length),T.init(I),T.state.textureUnits=Oe.getTextureUnits(),v.push(T),ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Et.setFromArrayCamera(I):Ve.setFromProjectionMatrix(ct,sn,I.reversedDepth),Ht=this.localClippingEnabled,mt=j.init(this.clippingPlanes,Ht),E=me.get(x,g.length),E.init(),g.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Me=L.xr.getDepthSensingMesh();Me!==null&&bo(Me,I,-1/0,L.sortObjects)}bo(x,I,0,L.sortObjects),E.finish(),O!==null&&O.updateLights(T.state.lightsArray),L.sortObjects===!0&&E.sort(Ae,tt),Qt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Qt&&R.addToRenderList(E,x),this.info.autoReset===!0&&this.info.reset(),mt===!0&&j.beginShadows();let z=T.state.shadowsArray;if(de.render(z,x,I),mt===!0&&j.endShadows(),(B&&U.hasRenderPass())===!1){let Me=E.opaque,pe=E.transmissive;if(T.setupLights(),I.isArrayCamera){let be=I.cameras;if(pe.length>0)for(let Re=0,Be=be.length;Re<Be;Re++){let Xe=be[Re];tc(Me,pe,x,Xe)}Qt&&R.render(x);for(let Re=0,Be=be.length;Re<Be;Re++){let Xe=be[Re];ec(E,x,Xe,Xe.viewport)}}else pe.length>0&&tc(Me,pe,x,I),Qt&&R.render(x),ec(E,x,I)}ie!==null&&V===0&&(Oe.updateMultisampleRenderTarget(ie),Oe.updateRenderTargetMipmap(ie)),B&&U.end(L),x.isScene===!0&&x.onAfterRender(L,x,I),ue.resetDefaultState(),Y=-1,G=null,v.pop(),v.length>0?(T=v[v.length-1],Oe.setTextureUnits(T.state.textureUnits),mt===!0&&j.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,O!==null&&O.renderEnd()};function bo(x,I,H,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){let Me=I.isArrayCamera?Et:Ve;if(!x.frustumCulled||x.intersectsFrustum(Me)){B&&vt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ct);let pe=se.update(x),be=x.material;be.visible&&E.push(x,pe,be,H,vt.z,null,I)}}else if(x.isMesh||x.isLine||x.isPoints){let Me=I.isArrayCamera?Et:Ve;if(!x.frustumCulled||x.intersectsFrustum(Me)){let pe=se.update(x),be=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),vt.copy(x.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),vt.copy(pe.boundingSphere.center)),vt.applyMatrix4(x.matrixWorld).applyMatrix4(ct)),Array.isArray(be)){let Re=pe.groups;for(let Be=0,Xe=Re.length;Be<Xe;Be++){let Te=Re[Be],qe=be[Te.materialIndex];qe&&qe.visible&&E.push(x,pe,qe,H,vt.z,Te,I)}}else be.visible&&E.push(x,pe,be,H,vt.z,null,I)}}}let ge=x.children;for(let Me=0,pe=ge.length;Me<pe;Me++)bo(ge[Me],I,H,B)}function ec(x,I,H,B){let{opaque:z,transmissive:ge,transparent:Me}=x;T.setupLightsView(H),mt===!0&&j.setGlobalState(L.clippingPlanes,H),B&&_e.viewport(J.copy(B)),z.length>0&&fr(z,I,H),ge.length>0&&fr(ge,I,H),Me.length>0&&fr(Me,I,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function tc(x,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Te=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new $t(1,1,{generateMipmaps:!0,type:Te?xn:Wt,minFilter:Wn,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let ge=T.state.transmissionRenderTarget[B.id],Me=B.viewport||J;ge.setSize(Me.z*L.transmissionResolutionScale,Me.w*L.transmissionResolutionScale);let pe=L.getRenderTarget(),be=L.getActiveCubeFace(),Re=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(X),te=L.getClearAlpha(),te<1&&L.setClearColor(16777215,.5),L.clear(),Qt&&R.render(H);let Be=L.toneMapping;L.toneMapping=Rn;let Xe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),mt===!0&&j.setGlobalState(L.clippingPlanes,B),fr(x,H,B),Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge),at.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let qe=0,ft=I.length;qe<ft;qe++){let it=I[qe],{object:nt,geometry:Pt,material:Ee,group:Ft}=it;if(Ee.side===rn&&nt.layers.test(B.layers)){let $e=Ee.side;Ee.side=Gt,Ee.needsUpdate=!0,nc(nt,H,B,Pt,Ee,Ft),Ee.side=$e,Ee.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge))}L.setRenderTarget(pe,be,Re),L.setClearColor(X,te),Xe!==void 0&&(B.viewport=Xe),L.toneMapping=Be}function fr(x,I,H){let B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ge=x.length;z<ge;z++){let Me=x[z],{object:pe,geometry:be,group:Re}=Me,Be=Me.material;Be.allowOverride===!0&&B!==null&&(Be=B),pe.layers.test(H.layers)&&nc(pe,I,H,be,Be,Re)}}function nc(x,I,H,B,z,ge){O!==null&&z.isNodeMaterial&&O.setObject(x,z),x.onBeforeRender(L,I,H,B,z,ge),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(L,I,H,B,x,ge),z.transparent===!0&&z.side===rn&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,L.renderBufferDirect(H,I,B,z,x,ge),z.side=ai,z.needsUpdate=!0,L.renderBufferDirect(H,I,B,z,x,ge),z.side=rn):L.renderBufferDirect(H,I,B,z,x,ge),x.onAfterRender(L,I,H,B,z,ge)}function ic(x){let I=0;for(let H of x)H.texture!==null&&I++;return I}function ms(x,I,H){I.isScene!==!0&&(I=jt);let B=De.get(x),z=T.state.lights,ge=T.state.shadowsArray,Me=z.state.version,pe=ee.getParameters(x,z.state,ge,I,H,T.state.lightProbeGridArray),be=ee.getProgramCacheKey(pe),Re=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Be=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=w.get(x.envMap||B.environment,Be),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",et),Re=new Map,B.programs=Re,B.programVariants=new Map);let Xe=Re.get(be);if(Xe!==void 0){if(B.currentProgram===Xe&&B.lightsStateVersion===Me)return rc(x,pe),Xe}else pe.uniforms=ee.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,H,pe),x.onBeforeCompile(pe,L),Xe=ee.acquireProgram(pe,be),Re.set(be,Xe),B.uniforms=pe.uniforms;let Te=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=j.uniform),rc(x,pe),B.needsLights=Eu(x),B.lightsStateVersion=Me,B.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.sunLights.value=z.state.sun,Te.sunLightShadows.value=z.state.sunShadow,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.sunShadowMatrix.value=z.state.sunShadowMatrix,Te.sunShadowCascade.value=z.state.sunShadowCascade,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=ic(T.state.lightProbeGridArray),B.currentProgram=Xe,B.uniformsList=null,Xe}function Mu(x,I,H,B,z){let ge=De.get(x),Me=ge.currentProgram.id+","+B+","+z,pe=ge.programVariants.get(Me);return pe===void 0?(pe=ms(x,I,H),ge.programVariants.set(Me,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=B,ge.toneMapping=z),pe}function sc(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=us.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function rc(x,I){let H=De.get(x);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function wu(x,I,H,B,z){I.isScene!==!0&&(I=jt),Oe.resetTextureUnits();let ge=I.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,pe=ie===null?L.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ye.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Re=w.get(B.envMap||Me,be),Be=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xe=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,ft=!!H.morphAttributes.color,it=Rn;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(it=L.toneMapping);let nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=nt!==void 0?nt.length:0,Ee=De.get(B),Ft=T.state.lights;if(mt===!0&&(Ht===!0||x!==G)){let ht=x===G&&B.id===Y;j.setState(B,x,ht)}let $e=!1,ui=!1;B.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ft.state.version||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Re||B.fog===!0&&Ee.fog!==ge||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==j.numPlanes||Ee.numIntersection!==j.numIntersection)||Ee.vertexAlphas!==Be||Ee.vertexTangents!==Xe||Ee.morphTargets!==Te||Ee.morphNormals!==qe||Ee.morphColors!==ft||Ee.morphTargetsCount!==Pt||Ee.numLightProbeGrids!==ic(T.state.lightProbeGridArray)?$e=!0:(Ee.outputColorSpace!==pe||Ee.toneMapping!==it)&&(ui=!0):($e=!0,Ee.__version=B.version);let It=Ee.currentProgram;($e===!0||ui===!0)&&(It=ui===!0?Mu(B,I,z,pe,it):ms(B,I,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,It,Ee));let pr=!1,Kn=!1,di=!1,Ke=It.getUniforms(),At=Ee.uniforms;if(_e.useProgram(It.program)&&(pr=!0,Kn=!0,di=!0),B.id!==Y&&(Y=B.id,Kn=!0),pr||G!==x){_e.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ke.setValue(D,"projectionMatrix",x.projectionMatrix),Ke.setValue(D,"viewMatrix",x.matrixWorldInverse);let St=Ke.map.cameraPosition;St!==void 0&&St.setValue(D,Sn.setFromMatrixPosition(x.matrixWorld)),ot.logarithmicDepthBuffer&&Ke.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ke.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),G!==x&&(G=x,Kn=!0,di=!0)}if(Ee.needsLights&&(Ft.state.sunShadowMap.length>0&&Ke.setValue(D,"sunShadowMap",Ft.state.sunShadowMap,Oe),Ft.state.directionalShadowMap.length>0&&Ke.setValue(D,"directionalShadowMap",Ft.state.directionalShadowMap,Oe),Ft.state.spotShadowMap.length>0&&Ke.setValue(D,"spotShadowMap",Ft.state.spotShadowMap,Oe),Ft.state.pointShadowMap.length>0&&Ke.setValue(D,"pointShadowMap",Ft.state.pointShadowMap,Oe)),z.isSkinnedMesh){Ke.setOptional(D,z,"bindMatrix"),Ke.setOptional(D,z,"bindMatrixInverse");let ht=z.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),Ke.setValue(D,"boneTexture",ht.boneTexture,Oe))}z.isBatchedMesh&&(Ke.setOptional(D,z,"batchingTexture"),Ke.setValue(D,"batchingTexture",z._matricesTexture,Oe),Ke.setOptional(D,z,"batchingIdTexture"),Ke.setValue(D,"batchingIdTexture",z._indirectTexture,Oe),Ke.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ke.setValue(D,"batchingColorTexture",z._colorsTexture,Oe));let hn=H.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Q.update(z,H,It),(Kn||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Ke.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(At.envMapIntensity.value=I.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=l_()),Kn){if(Ke.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ee.needsLights&&Tu(At,di),ge&&B.fog===!0&&he.refreshFogUniforms(At,ge),he.refreshMaterialUniforms(At,B,le,we,T.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let ht=M,St=0;for(let Ln of T.state.lightProbeGridArray)Ln.texture!==null&&(ht.textures[St]=Ln.texture,ht.min[St]=Ln.boundingBox.min,ht.max[St]=Ln.boundingBox.max,ht.resolution[St]=Ln.resolution,St++);for(let Ln in ht)ht[Ln].length=St;At.probesSH.value=ht.textures,At.probesMin.value=ht.min,At.probesMax.value=ht.max,At.probesResolution.value=ht.resolution}us.upload(D,sc(Ee),At,Oe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(us.upload(D,sc(Ee),At,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ke.setValue(D,"center",z.center),Ke.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ke.setValue(D,"normalMatrix",z.normalMatrix),Ke.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ht=B.uniformsGroups;for(let St=0,Ln=ht.length;St<Ln;St++){let oc=ht[St];Pe.update(oc,It),Pe.bind(oc,It)}}return It}function Tu(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.sunLights.needsUpdate=I,x.sunLightShadows.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Eu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,I,H){let B=De.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),De.get(x.texture).__webglTexture=I,De.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){let H=De.get(x);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,H=0){ie=x,Z=I,V=H;let B=null,z=!1,ge=!1;if(x){let pe=De.get(x);if(pe.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),J.copy(x.viewport),ae.copy(x.scissor),ce=x.scissorTest,_e.viewport(J),_e.scissor(ae),_e.setScissorTest(ce),Y=-1;return}else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(pe.__hasExternalTextures)Oe.rebindTextures(x,De.get(x.texture).__webglTexture,De.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Be=x.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&De.has(Be)&&(x.width!==Be.image.width||x.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}let be=x.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Re=De.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?B=Re[I][H]:B=Re[I],z=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?B=De.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[H]:B=Re,J.copy(x.viewport),ae.copy(x.scissor),ce=x.scissorTest}else J.copy(Ce).multiplyScalar(le).floor(),ae.copy(Ze).multiplyScalar(le).floor(),ce=Qe;if(H!==0&&(B=q),_e.bindFramebuffer(D.FRAMEBUFFER,B)&&_e.drawBuffers(x,B),_e.viewport(J),_e.scissor(ae),_e.setScissorTest(ce),z){let pe=De.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,H)}else if(ge){let pe=I;for(let be=0;be<x.textures.length;be++){let Re=De.get(x.textures[be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+be,Re.__webglTexture,H,pe)}}else if(x!==null&&H!==0){let pe=De.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,H)}Y=-1};function ac(x){let I=De.get(x);return(I.__readFormat!==x.format||I.__readType!==x.type)&&(I.__readFormat=x.format,I.__readType=x.type,I.__formatReadable=ot.textureFormatReadable(x.format),I.__typeReadable=ot.textureTypeReadable(x.type)),I}this.readRenderTargetPixels=function(x,I,H,B,z,ge,Me,pe=0){if(!(x&&x.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me],Array.isArray(be)&&(be=be[0])),be){_e.bindFramebuffer(D.FRAMEBUFFER,be);try{let Re=x.textures[pe],Be=Re.format,Xe=Re.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe);let Te=ac(Re);if(Te.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&H>=0&&H<=x.height-z&&D.readPixels(I,H,B,z,oe.convert(Be),oe.convert(Xe),ge)}finally{let Re=ie!==null?De.get(ie).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,I,H,B,z,ge,Me,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me],Array.isArray(be)&&(be=be[0])),be)if(I>=0&&I<=x.width-B&&H>=0&&H<=x.height-z){_e.bindFramebuffer(D.FRAMEBUFFER,be);let Re=x.textures[pe],Be=Re.format,Xe=Re.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe);let Te=ac(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(I,H,B,z,oe.convert(Be),oe.convert(Xe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let ft=ie!==null?De.get(ie).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,ft);let it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _h(D,it,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(qe),D.deleteSync(it),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,H=0){let B=Math.pow(2,-H),z=Math.floor(x.image.width*B),ge=Math.floor(x.image.height*B),Me=I!==null?I.x:0,pe=I!==null?I.y:0;Oe.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,Me,pe,z,ge),_e.unbindTexture()},this.copyTextureToTexture=function(x,I,H=null,B=null,z=0,ge=0){let Me,pe,be,Re,Be,Xe,Te,qe,ft,it=x.isCompressedTexture?x.mipmaps[ge]:x.image;if(H!==null)Me=H.max.x-H.min.x,pe=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,Be=H.min.y,Xe=H.isBox3?H.min.z:0;else{let Ke=Math.pow(2,-z);Me=Math.floor(it.width*Ke),pe=Math.floor(it.height*Ke),x.isDataArrayTexture?be=it.depth:x.isData3DTexture?be=Math.floor(it.depth*Ke):be=1,Re=0,Be=0,Xe=0}B!==null?(Te=B.x,qe=B.y,ft=B.z):(Te=0,qe=0,ft=0);let nt=oe.convert(I.format),Pt=oe.convert(I.type),Ee;I.isData3DTexture?(Oe.setTexture3D(I,0),Ee=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Oe.setTexture2DArray(I,0),Ee=D.TEXTURE_2D_ARRAY):(Oe.setTexture2D(I,0),Ee=D.TEXTURE_2D),_e.activeTexture(D.TEXTURE0),_e.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),_e.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_e.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let Ft=_e.getParameter(D.UNPACK_ROW_LENGTH),$e=_e.getParameter(D.UNPACK_IMAGE_HEIGHT),ui=_e.getParameter(D.UNPACK_SKIP_PIXELS),It=_e.getParameter(D.UNPACK_SKIP_ROWS),pr=_e.getParameter(D.UNPACK_SKIP_IMAGES);_e.pixelStorei(D.UNPACK_ROW_LENGTH,it.width),_e.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it.height),_e.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),_e.pixelStorei(D.UNPACK_SKIP_ROWS,Be),_e.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let Kn=x.isDataArrayTexture||x.isData3DTexture,di=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){let Ke=De.get(x),At=De.get(I),hn=De.get(Ke.__renderTarget),ht=De.get(At.__renderTarget);_e.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let St=0;St<be;St++)Kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.get(x).__webglTexture,z,Xe+St),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.get(I).__webglTexture,ge,ft+St)),D.blitFramebuffer(Re,Be,Re+Me,Be+pe,Te,qe,Te+Me,qe+pe,D.DEPTH_BUFFER_BIT,D.NEAREST);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||De.has(x)){let Ke=De.get(x),At=De.get(I);_e.bindFramebuffer(D.READ_FRAMEBUFFER,C),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let hn=0;hn<be;hn++)Kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,z,Xe+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,z),di?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,ge,ft+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,ge),z!==0?D.blitFramebuffer(Re,Be,Re+Me,Be+pe,Te,qe,Te+Me,qe+pe,D.COLOR_BUFFER_BIT,D.NEAREST):di?D.copyTexSubImage3D(Ee,ge,Te,qe,ft+hn,Re,Be,Me,pe):D.copyTexSubImage2D(Ee,ge,Te,qe,Re,Be,Me,pe);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else di?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Ee,ge,Te,qe,ft,Me,pe,be,nt,Pt,it.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,ge,Te,qe,ft,Me,pe,be,nt,it.data):D.texSubImage3D(Ee,ge,Te,qe,ft,Me,pe,be,nt,Pt,it):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Te,qe,Me,pe,nt,Pt,it.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Te,qe,it.width,it.height,nt,it.data):D.texSubImage2D(D.TEXTURE_2D,ge,Te,qe,Me,pe,nt,Pt,it);_e.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),_e.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),_e.pixelStorei(D.UNPACK_SKIP_PIXELS,ui),_e.pixelStorei(D.UNPACK_SKIP_ROWS,It),_e.pixelStorei(D.UNPACK_SKIP_IMAGES,pr),ge===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),_e.unbindTexture()},this.initRenderTarget=function(x){De.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),_e.unbindTexture()},this.resetState=function(){Z=0,V=0,ie=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var nu={type:"change"},Vl={type:"start"},su={type:"end"},ho=new _i,iu=new Kt,h_=Math.cos(70*Al.DEG2RAD),xt=new F,Xt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hl=1e-6,uo=class extends Zs{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Zt,this._lastTargetPosition=new F,this._quat=new Zt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new as,this._sphericalDelta=new as,this._scale=1,this._panOffset=new F,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new F,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d_.bind(this),this._onPointerDown=u_.bind(this),this._onPointerUp=f_.bind(this),this._onContextMenu=v_.bind(this),this._onMouseWheel=g_.bind(this),this._onKeyDown=__.bind(this),this._onTouchStart=y_.bind(this),this._onTouchMove=x_.bind(this),this._onMouseDown=p_.bind(this),this._onMouseMove=m_.bind(this),this._interceptControlDown=b_.bind(this),this._interceptControlUp=S_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Je.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=Je.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=xt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ho.origin.copy(this.object.position),ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ho.direction))<h_?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ho.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hl||this._lastTargetPosition.distanceToSquared(this.target)>Hl?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;xt.copy(s).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function u_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function d_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function f_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(su),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Je.DOLLY;break;case si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Je.ROTATE}break;case si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Vl)}function m_(i){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function g_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(i.preventDefault(),this.dispatchEvent(Vl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(su))}function __(i){this.enabled!==!1&&this._handleKeyDown(i)}function y_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1){this.state=Je.NONE;break}this._handleTouchStartRotate(i),this.state=Je.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1){this.state=Je.NONE;break}this._handleTouchStartPan(i),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Je.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Vl)}function x_(i){switch(this._trackPointer(i),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Je.NONE}}function v_(i){this.enabled!==!1&&i.preventDefault()}function b_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var M_={H:15266554,C:6256788,N:6522623,O:15821670,Na:10321123,Cl:7521937,Si:12236520},w_={H:.31,C:.47,N:.45,O:.44,Na:.32,Cl:.49,Si:.48},ru=new F(0,1,0);function au(i,{onSelect:e=()=>{},onTick:t=()=>{}}={}){let n=new oo({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),n.outputColorSpace=Nt,n.toneMapping=Js,n.toneMappingExposure=1.28;let s=new Ls;s.background=new Ge(1189688);let r=new Bt(39,1,.05,300),a=new uo(r,i);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=2,a.maxDistance=70,s.add(new Xs(14940927,3491678,2.1));let o=new ss(16777215,3);o.position.set(5,7,9),s.add(o);let l=new ss(5810890,2.4);l.position.set(-7,1,-5),s.add(l);let c=new Tn;s.add(c);let h="graph",f=null,u=!1,m=[],y=[],b=new Map,p=4,d=performance.now(),S,A=!1,M=new F,E=new Ks,T=new Ie;function g(){let G=new Set,J=new Set,ae=new Set;c.traverse(ce=>{ce.geometry&&G.add(ce.geometry),ce.material&&(Array.isArray(ce.material)?ce.material:[ce.material]).forEach(te=>{J.add(te),te.map&&ae.add(te.map)})}),c.clear(),G.forEach(ce=>ce.dispose()),J.forEach(ce=>ce.dispose()),ae.forEach(ce=>ce.dispose()),y=[],b.clear()}function v(G,J,ae={}){return new Vt(new ns(G,28,20),new is({color:J,roughness:.3,metalness:.12,...ae}))}function U(G){let J=document.createElement("canvas");J.width=160,J.height=80;let ae=J.getContext("2d");ae.fillStyle="#f3f8ff",ae.font="600 42px Segoe UI, sans-serif",ae.textAlign="center",ae.textBaseline="middle",ae.fillText(G,80,40);let ce=new Bs(J);ce.colorSpace=Nt;let X=new Fs(new Qi({map:ce,depthTest:!1,transparent:!0}));return X.scale.set(.8,.4,1),X.renderOrder=5,X}function L(G,J,ae,ce=.07){let X=J.clone().sub(G),te=new Vt(new Gs(ce,ce,X.length(),10),new is({color:ae,roughness:.5,metalness:.1}));return te.position.copy(G).add(J).multiplyScalar(.5),te.quaternion.setFromUnitVectors(ru,X.normalize()),c.add(te),te}function N(){r.position.set(p*.9,p*.6,p*1.8),a.target.set(0,0,0),r.lookAt(a.target),a.update()}function O(G,{reset:J=!1,dense:ae=!1}={}){f={data:G,dense:ae},h="graph",g();let ce=new En;G.atoms.forEach(te=>ce.expandByPoint(new F(...te.position))),G.atoms.length?(ce.getCenter(M),p=Math.max(3.5,ce.getSize(new F).length()*.78)):(M.set(0,0,0),p=4);let X=new Map;G.atoms.forEach(te=>{let ye=new F(...te.position).sub(M);X.set(te.id,ye);let we=(w_[te.element]||.45)*(ae?.55:1)*(u?1.55:1),le=v(we,M_[te.element]||11188941);if(le.position.copy(ye),le.userData.atomId=te.id,le.userData.radius=we,c.add(le),y.push(le),!ae){let Ae=U(te.element);Ae.position.copy(ye),Ae.position.y+=we+.3,c.add(Ae)}if(m.includes(te.id)){let Ae=v(we*1.17,16765573,{transparent:!0,opacity:.35,depthWrite:!1});Ae.position.copy(ye),c.add(Ae)}}),u||G.bonds.forEach(te=>{let ye=X.get(te.a),we=X.get(te.b);if(!ye||!we)return;let le=we.clone().sub(ye).normalize(),Ae=le.clone().cross(new F(0,0,1));Ae.lengthSq()<.01&&(Ae=le.clone().cross(ru)),Ae.normalize();let tt=ae?1:te.order;for(let Ce=0;Ce<tt;Ce++){let Ze=Ae.clone().multiplyScalar((Ce-(tt-1)/2)*.17),Qe=ye.clone().add(Ze),Ve=we.clone().add(Ze);L(Qe,Ve,ae?6323346:10401993,ae?.035:.065)}}),J&&N()}function q(G){m=[...G],f&&h==="graph"&&O(f.data,{dense:f.dense})}function C(G){u=G,f&&h==="graph"&&O(f.data,{dense:f.dense})}function W(G,J,ae){let ce=new Tn;ce.position.x=(J-(ae-1)/2)*3.7;let X=v(1.65,4441273,{transparent:!0,opacity:.2,depthWrite:!1,metalness:.02,roughness:.15,side:rn});ce.add(X);let te=new Vt(new ns(1.65,22,14),new es({color:7395536,wireframe:!0,transparent:!0,opacity:.12,depthWrite:!1}));ce.add(te);let ye=v(.57,9667785,{roughness:.55,metalness:.05});ye.position.set(-.23,.1,.25),ce.add(ye);let we=v(.18,12035056);we.position.set(-.1,.15,.72),ce.add(we);for(let Ae=0;Ae<7;Ae++){let tt=Ae*Math.PI*2/7,Ce=v(.13,14987904,{roughness:.5});Ce.scale.set(1.8,.75,1),Ce.position.set(Math.cos(tt)*1.05,Math.sin(tt)*.9,Math.sin(Ae*2)*.45),Ce.rotation.z=tt,ce.add(Ce)}let le=U(ae===1?"H\xFCcre":`H\xFCcre ${J+1}`);return le.position.set(0,2.1,0),le.scale.set(1.6,.8,1),ce.add(le),c.add(ce),b.set(G,ce),ce}function Z(G,J=1,{reset:ae=!1}={}){(h!=="cells"||G.cells.some(ce=>!b.has(ce.id))||b.size!==G.cells.length)&&(g(),h="cells",f=null,G.cells.forEach((ce,X)=>W(ce.id,X,G.cells.length)),p=G.cells.length>1?6:4.3),G.cells.forEach(ce=>{b.get(ce.id).scale.setScalar(Math.cbrt(ce.volume_pl/J))}),ae&&N()}let V;i.addEventListener("pointerdown",G=>{V=[G.clientX,G.clientY]}),i.addEventListener("pointerup",G=>{if(h!=="graph"||!V||Math.hypot(G.clientX-V[0],G.clientY-V[1])>5)return;let J=i.getBoundingClientRect();T.set((G.clientX-J.left)/J.width*2-1,-(G.clientY-J.top)/J.height*2+1),E.setFromCamera(T,r);let ae=E.intersectObjects(y,!1)[0];ae&&e(ae.object.userData.atomId)});let ie=new ResizeObserver(()=>{let G=i.getBoundingClientRect();G.width<1||G.height<1||(n.setSize(G.width,G.height,!1),r.aspect=G.width/G.height,r.updateProjectionMatrix())});ie.observe(i);function Y(G){if(A)return;let J=Math.min(.05,(G-d)/1e3);d=G,document.hidden||(t(J),a.update(),n.render(s,r)),S=requestAnimationFrame(Y)}return N(),S=requestAnimationFrame(Y),{setGraph:O,setCells:Z,select:q,setRepresentation:C,resetCamera:N,dispose(){A=!0,cancelAnimationFrame(S),ie.disconnect(),a.dispose(),g(),n.dispose()}}}var fo={source:{provider:"PubChem / National Center for Biotechnology Information (NCBI)",title:"PubChem Periodic Table \u2014 PUG REST",url:"https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON",retrieved_at:"2026-11-24",raw_sha256:"6abc1932a117fccc4c61bf9cdbcf96a0355beac82cddba82bd436e6ce4aee72a",atomic_weight_field:"AtomicWeight",notes:["Atom a\u011F\u0131rl\u0131\u011F\u0131 kaynakta bildirilen metin olarak, yuvarlanmadan korunur. Bu alan izotopun k\xFCtle numaras\u0131 veya n\xF6tron say\u0131s\u0131 de\u011Fildir; her kay\u0131t i\xE7in standart atom a\u011F\u0131rl\u0131\u011F\u0131 ya da deneysel \xF6l\xE7\xFCm g\xFCvencesi anlam\u0131na gelmez.","Kaynakta varsa k\xF6\u015Feli parantezler ve elektron dizilimindeki predicted/calculated a\xE7\u0131klamalar\u0131 korunur. Bu indirme s\xFCr\xFCm\xFCnde a\u011F\u0131r elementlerin atom a\u011F\u0131rl\u0131klar\u0131 da ondal\u0131kl\u0131 metinlerdir.","Faz, kayna\u011F\u0131n StandardState alan\u0131n\u0131n \xE7evirisidir; Expected to be ifadesi \xF6ng\xF6r\xFClen olarak g\xF6sterilir. Di\u011Fer faz kay\u0131tlar\u0131 da ayr\u0131ca do\u011Frulanm\u0131\u015F \xF6l\xE7\xFCm olarak etiketlenmez.","Kategori, PubChem GroupBlock alan\u0131ndan gelir. Kimyasal s\u0131n\u0131fland\u0131rma ve \xF6zellikle a\u011F\u0131r elementlerin \xF6zellikleri kayna\u011Fa g\xF6re de\u011Fi\u015Febilir.","T\xFCrk\xE7e adlar uygulaman\u0131n a\xE7\u0131k \xE7eviri e\u015Flemesidir. Ayr\u0131lm\u0131\u015F lantanit ve aktinit sat\u0131rlar\u0131nda group=null kullan\u0131l\u0131r; table_col kimyasal grup atamas\u0131 de\u011Fildir."]},elements:[{atomic_number:1,symbol:"H",name:"Hidrojen",name_en:"Hydrogen",atomic_weight:"1.0080",electron_configuration:"1s1",phase:"Gaz",phase_en:"Gas",category:"nonmetal",group_block:"Nonmetal",group:1,period:1,table_col:1,table_row:1},{atomic_number:2,symbol:"He",name:"Helyum",name_en:"Helium",atomic_weight:"4.00260",electron_configuration:"1s2",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:1,table_col:18,table_row:1},{atomic_number:3,symbol:"Li",name:"Lityum",name_en:"Lithium",atomic_weight:"7.0",electron_configuration:"[He]2s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:2,table_col:1,table_row:2},{atomic_number:4,symbol:"Be",name:"Berilyum",name_en:"Beryllium",atomic_weight:"9.012183",electron_configuration:"[He]2s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:2,table_col:2,table_row:2},{atomic_number:5,symbol:"B",name:"Bor",name_en:"Boron",atomic_weight:"10.81",electron_configuration:"[He]2s2 2p1",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:13,period:2,table_col:13,table_row:2},{atomic_number:6,symbol:"C",name:"Karbon",name_en:"Carbon",atomic_weight:"12.011",electron_configuration:"[He]2s2 2p2",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:14,period:2,table_col:14,table_row:2},{atomic_number:7,symbol:"N",name:"Azot",name_en:"Nitrogen",atomic_weight:"14.007",electron_configuration:"[He] 2s2 2p3",phase:"Gaz",phase_en:"Gas",category:"nonmetal",group_block:"Nonmetal",group:15,period:2,table_col:15,table_row:2},{atomic_number:8,symbol:"O",name:"Oksijen",name_en:"Oxygen",atomic_weight:"15.999",electron_configuration:"[He]2s2 2p4",phase:"Gaz",phase_en:"Gas",category:"nonmetal",group_block:"Nonmetal",group:16,period:2,table_col:16,table_row:2},{atomic_number:9,symbol:"F",name:"Flor",name_en:"Fluorine",atomic_weight:"18.99840316",electron_configuration:"[He]2s2 2p5",phase:"Gaz",phase_en:"Gas",category:"halogen",group_block:"Halogen",group:17,period:2,table_col:17,table_row:2},{atomic_number:10,symbol:"Ne",name:"Neon",name_en:"Neon",atomic_weight:"20.180",electron_configuration:"[He]2s2 2p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:2,table_col:18,table_row:2},{atomic_number:11,symbol:"Na",name:"Sodyum",name_en:"Sodium",atomic_weight:"22.9897693",electron_configuration:"[Ne]3s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:3,table_col:1,table_row:3},{atomic_number:12,symbol:"Mg",name:"Magnezyum",name_en:"Magnesium",atomic_weight:"24.305",electron_configuration:"[Ne]3s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:3,table_col:2,table_row:3},{atomic_number:13,symbol:"Al",name:"Al\xFCminyum",name_en:"Aluminum",atomic_weight:"26.981538",electron_configuration:"[Ne]3s2 3p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:3,table_col:13,table_row:3},{atomic_number:14,symbol:"Si",name:"Silisyum",name_en:"Silicon",atomic_weight:"28.085",electron_configuration:"[Ne]3s2 3p2",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:14,period:3,table_col:14,table_row:3},{atomic_number:15,symbol:"P",name:"Fosfor",name_en:"Phosphorus",atomic_weight:"30.97376200",electron_configuration:"[Ne]3s2 3p3",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:15,period:3,table_col:15,table_row:3},{atomic_number:16,symbol:"S",name:"K\xFCk\xFCrt",name_en:"Sulfur",atomic_weight:"32.07",electron_configuration:"[Ne]3s2 3p4",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:16,period:3,table_col:16,table_row:3},{atomic_number:17,symbol:"Cl",name:"Klor",name_en:"Chlorine",atomic_weight:"35.45",electron_configuration:"[Ne]3s2 3p5",phase:"Gaz",phase_en:"Gas",category:"halogen",group_block:"Halogen",group:17,period:3,table_col:17,table_row:3},{atomic_number:18,symbol:"Ar",name:"Argon",name_en:"Argon",atomic_weight:"39.9",electron_configuration:"[Ne]3s2 3p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:3,table_col:18,table_row:3},{atomic_number:19,symbol:"K",name:"Potasyum",name_en:"Potassium",atomic_weight:"39.0983",electron_configuration:"[Ar]4s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:4,table_col:1,table_row:4},{atomic_number:20,symbol:"Ca",name:"Kalsiyum",name_en:"Calcium",atomic_weight:"40.08",electron_configuration:"[Ar]4s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:4,table_col:2,table_row:4},{atomic_number:21,symbol:"Sc",name:"Skandiyum",name_en:"Scandium",atomic_weight:"44.95591",electron_configuration:"[Ar]4s2 3d1",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:3,period:4,table_col:3,table_row:4},{atomic_number:22,symbol:"Ti",name:"Titanyum",name_en:"Titanium",atomic_weight:"47.867",electron_configuration:"[Ar]4s2 3d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:4,table_col:4,table_row:4},{atomic_number:23,symbol:"V",name:"Vanadyum",name_en:"Vanadium",atomic_weight:"50.9415",electron_configuration:"[Ar]4s2 3d3",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:4,table_col:5,table_row:4},{atomic_number:24,symbol:"Cr",name:"Krom",name_en:"Chromium",atomic_weight:"51.996",electron_configuration:"[Ar]3d5 4s1",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:4,table_col:6,table_row:4},{atomic_number:25,symbol:"Mn",name:"Manganez",name_en:"Manganese",atomic_weight:"54.93804",electron_configuration:"[Ar]4s2 3d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:4,table_col:7,table_row:4},{atomic_number:26,symbol:"Fe",name:"Demir",name_en:"Iron",atomic_weight:"55.84",electron_configuration:"[Ar]4s2 3d6",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:4,table_col:8,table_row:4},{atomic_number:27,symbol:"Co",name:"Kobalt",name_en:"Cobalt",atomic_weight:"58.93319",electron_configuration:"[Ar]4s2 3d7",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:4,table_col:9,table_row:4},{atomic_number:28,symbol:"Ni",name:"Nikel",name_en:"Nickel",atomic_weight:"58.693",electron_configuration:"[Ar]4s2 3d8",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:4,table_col:10,table_row:4},{atomic_number:29,symbol:"Cu",name:"Bak\u0131r",name_en:"Copper",atomic_weight:"63.55",electron_configuration:"[Ar]4s1 3d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:4,table_col:11,table_row:4},{atomic_number:30,symbol:"Zn",name:"\xC7inko",name_en:"Zinc",atomic_weight:"65.4",electron_configuration:"[Ar]4s2 3d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:12,period:4,table_col:12,table_row:4},{atomic_number:31,symbol:"Ga",name:"Galyum",name_en:"Gallium",atomic_weight:"69.723",electron_configuration:"[Ar]4s2 3d10 4p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:4,table_col:13,table_row:4},{atomic_number:32,symbol:"Ge",name:"Germanyum",name_en:"Germanium",atomic_weight:"72.63",electron_configuration:"[Ar]4s2 3d10 4p2",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:14,period:4,table_col:14,table_row:4},{atomic_number:33,symbol:"As",name:"Arsenik",name_en:"Arsenic",atomic_weight:"74.92159",electron_configuration:"[Ar]4s2 3d10 4p3",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:15,period:4,table_col:15,table_row:4},{atomic_number:34,symbol:"Se",name:"Selenyum",name_en:"Selenium",atomic_weight:"78.97",electron_configuration:"[Ar]4s2 3d10 4p4",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:16,period:4,table_col:16,table_row:4},{atomic_number:35,symbol:"Br",name:"Brom",name_en:"Bromine",atomic_weight:"79.90",electron_configuration:"[Ar]4s2 3d10 4p5",phase:"S\u0131v\u0131",phase_en:"Liquid",category:"halogen",group_block:"Halogen",group:17,period:4,table_col:17,table_row:4},{atomic_number:36,symbol:"Kr",name:"Kripton",name_en:"Krypton",atomic_weight:"83.80",electron_configuration:"[Ar]4s2 3d10 4p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:4,table_col:18,table_row:4},{atomic_number:37,symbol:"Rb",name:"Rubidyum",name_en:"Rubidium",atomic_weight:"85.468",electron_configuration:"[Kr]5s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:5,table_col:1,table_row:5},{atomic_number:38,symbol:"Sr",name:"Stronsiyum",name_en:"Strontium",atomic_weight:"87.62",electron_configuration:"[Kr]5s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:5,table_col:2,table_row:5},{atomic_number:39,symbol:"Y",name:"\u0130triyum",name_en:"Yttrium",atomic_weight:"88.90584",electron_configuration:"[Kr]5s2 4d1",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:3,period:5,table_col:3,table_row:5},{atomic_number:40,symbol:"Zr",name:"Zirkonyum",name_en:"Zirconium",atomic_weight:"91.22",electron_configuration:"[Kr]5s2 4d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:5,table_col:4,table_row:5},{atomic_number:41,symbol:"Nb",name:"Niyobyum",name_en:"Niobium",atomic_weight:"92.90637",electron_configuration:"[Kr]5s1 4d4",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:5,table_col:5,table_row:5},{atomic_number:42,symbol:"Mo",name:"Molibden",name_en:"Molybdenum",atomic_weight:"95.95",electron_configuration:"[Kr]5s1 4d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:5,table_col:6,table_row:5},{atomic_number:43,symbol:"Tc",name:"Teknesyum",name_en:"Technetium",atomic_weight:"96.90636",electron_configuration:"[Kr]5s2 4d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:5,table_col:7,table_row:5},{atomic_number:44,symbol:"Ru",name:"Rutenyum",name_en:"Ruthenium",atomic_weight:"101.1",electron_configuration:"[Kr]5s1 4d7",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:5,table_col:8,table_row:5},{atomic_number:45,symbol:"Rh",name:"Rodyum",name_en:"Rhodium",atomic_weight:"102.9055",electron_configuration:"[Kr]5s1 4d8",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:5,table_col:9,table_row:5},{atomic_number:46,symbol:"Pd",name:"Paladyum",name_en:"Palladium",atomic_weight:"106.42",electron_configuration:"[Kr]4d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:5,table_col:10,table_row:5},{atomic_number:47,symbol:"Ag",name:"G\xFCm\xFC\u015F",name_en:"Silver",atomic_weight:"107.868",electron_configuration:"[Kr]5s1 4d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:5,table_col:11,table_row:5},{atomic_number:48,symbol:"Cd",name:"Kadmiyum",name_en:"Cadmium",atomic_weight:"112.41",electron_configuration:"[Kr]5s2 4d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:12,period:5,table_col:12,table_row:5},{atomic_number:49,symbol:"In",name:"\u0130ndiyum",name_en:"Indium",atomic_weight:"114.818",electron_configuration:"[Kr]5s2 4d10 5p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:5,table_col:13,table_row:5},{atomic_number:50,symbol:"Sn",name:"Kalay",name_en:"Tin",atomic_weight:"118.71",electron_configuration:"[Kr]5s2 4d10 5p2",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:14,period:5,table_col:14,table_row:5},{atomic_number:51,symbol:"Sb",name:"Antimon",name_en:"Antimony",atomic_weight:"121.760",electron_configuration:"[Kr]5s2 4d10 5p3",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:15,period:5,table_col:15,table_row:5},{atomic_number:52,symbol:"Te",name:"Tell\xFCr",name_en:"Tellurium",atomic_weight:"127.6",electron_configuration:"[Kr]5s2 4d10 5p4",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:16,period:5,table_col:16,table_row:5},{atomic_number:53,symbol:"I",name:"\u0130yot",name_en:"Iodine",atomic_weight:"126.9045",electron_configuration:"[Kr]5s2 4d10 5p5",phase:"Kat\u0131",phase_en:"Solid",category:"halogen",group_block:"Halogen",group:17,period:5,table_col:17,table_row:5},{atomic_number:54,symbol:"Xe",name:"Ksenon",name_en:"Xenon",atomic_weight:"131.29",electron_configuration:"[Kr]5s2 4d10 5p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:5,table_col:18,table_row:5},{atomic_number:55,symbol:"Cs",name:"Sezyum",name_en:"Cesium",atomic_weight:"132.9054520",electron_configuration:"[Xe]6s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:6,table_col:1,table_row:6},{atomic_number:56,symbol:"Ba",name:"Baryum",name_en:"Barium",atomic_weight:"137.33",electron_configuration:"[Xe]6s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:6,table_col:2,table_row:6},{atomic_number:57,symbol:"La",name:"Lantan",name_en:"Lanthanum",atomic_weight:"138.9055",electron_configuration:"[Xe]6s2 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:3,table_row:9},{atomic_number:58,symbol:"Ce",name:"Seryum",name_en:"Cerium",atomic_weight:"140.116",electron_configuration:"[Xe]6s2 4f1 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:4,table_row:9},{atomic_number:59,symbol:"Pr",name:"Praseodim",name_en:"Praseodymium",atomic_weight:"140.90766",electron_configuration:"[Xe]6s2 4f3",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:5,table_row:9},{atomic_number:60,symbol:"Nd",name:"Neodim",name_en:"Neodymium",atomic_weight:"144.24",electron_configuration:"[Xe]6s2 4f4",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:6,table_row:9},{atomic_number:61,symbol:"Pm",name:"Prometyum",name_en:"Promethium",atomic_weight:"144.91276",electron_configuration:"[Xe]6s2 4f5",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:7,table_row:9},{atomic_number:62,symbol:"Sm",name:"Samaryum",name_en:"Samarium",atomic_weight:"150.4",electron_configuration:"[Xe]6s2 4f6",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:8,table_row:9},{atomic_number:63,symbol:"Eu",name:"Evropiyum",name_en:"Europium",atomic_weight:"151.964",electron_configuration:"[Xe]6s2 4f7",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:9,table_row:9},{atomic_number:64,symbol:"Gd",name:"Gadolinyum",name_en:"Gadolinium",atomic_weight:"157.25",electron_configuration:"[Xe]6s2 4f7 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:10,table_row:9},{atomic_number:65,symbol:"Tb",name:"Terbiyum",name_en:"Terbium",atomic_weight:"158.92535",electron_configuration:"[Xe]6s2 4f9",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:11,table_row:9},{atomic_number:66,symbol:"Dy",name:"Disprosyum",name_en:"Dysprosium",atomic_weight:"162.500",electron_configuration:"[Xe]6s2 4f10",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:12,table_row:9},{atomic_number:67,symbol:"Ho",name:"Holmiyum",name_en:"Holmium",atomic_weight:"164.93033",electron_configuration:"[Xe]6s2 4f11",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:13,table_row:9},{atomic_number:68,symbol:"Er",name:"Erbiyum",name_en:"Erbium",atomic_weight:"167.26",electron_configuration:"[Xe]6s2 4f12",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:14,table_row:9},{atomic_number:69,symbol:"Tm",name:"Tulyum",name_en:"Thulium",atomic_weight:"168.93422",electron_configuration:"[Xe]6s2 4f13",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:15,table_row:9},{atomic_number:70,symbol:"Yb",name:"\u0130terbiyum",name_en:"Ytterbium",atomic_weight:"173.05",electron_configuration:"[Xe]6s2 4f14",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:16,table_row:9},{atomic_number:71,symbol:"Lu",name:"L\xFCtesyum",name_en:"Lutetium",atomic_weight:"174.9667",electron_configuration:"[Xe]6s2 4f14 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:17,table_row:9},{atomic_number:72,symbol:"Hf",name:"Hafniyum",name_en:"Hafnium",atomic_weight:"178.49",electron_configuration:"[Xe]6s2 4f14 5d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:6,table_col:4,table_row:6},{atomic_number:73,symbol:"Ta",name:"Tantal",name_en:"Tantalum",atomic_weight:"180.9479",electron_configuration:"[Xe]6s2 4f14 5d3",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:6,table_col:5,table_row:6},{atomic_number:74,symbol:"W",name:"Tungsten",name_en:"Tungsten",atomic_weight:"183.84",electron_configuration:"[Xe]6s2 4f14 5d4",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:6,table_col:6,table_row:6},{atomic_number:75,symbol:"Re",name:"Renyum",name_en:"Rhenium",atomic_weight:"186.207",electron_configuration:"[Xe]6s2 4f14 5d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:6,table_col:7,table_row:6},{atomic_number:76,symbol:"Os",name:"Osmiyum",name_en:"Osmium",atomic_weight:"190.2",electron_configuration:"[Xe]6s2 4f14 5d6",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:6,table_col:8,table_row:6},{atomic_number:77,symbol:"Ir",name:"\u0130ridyum",name_en:"Iridium",atomic_weight:"192.22",electron_configuration:"[Xe]6s2 4f14 5d7",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:6,table_col:9,table_row:6},{atomic_number:78,symbol:"Pt",name:"Platin",name_en:"Platinum",atomic_weight:"195.08",electron_configuration:"[Xe]6s1 4f14 5d9",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:6,table_col:10,table_row:6},{atomic_number:79,symbol:"Au",name:"Alt\u0131n",name_en:"Gold",atomic_weight:"196.96657",electron_configuration:"[Xe]6s1 4f14 5d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:6,table_col:11,table_row:6},{atomic_number:80,symbol:"Hg",name:"C\u0131va",name_en:"Mercury",atomic_weight:"200.59",electron_configuration:"[Xe]6s2 4f14 5d10",phase:"S\u0131v\u0131",phase_en:"Liquid",category:"transition-metal",group_block:"Transition metal",group:12,period:6,table_col:12,table_row:6},{atomic_number:81,symbol:"Tl",name:"Talyum",name_en:"Thallium",atomic_weight:"204.383",electron_configuration:"[Xe]6s2 4f14 5d10 6p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:6,table_col:13,table_row:6},{atomic_number:82,symbol:"Pb",name:"Kur\u015Fun",name_en:"Lead",atomic_weight:"207",electron_configuration:"[Xe]6s2 4f14 5d10 6p2",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:14,period:6,table_col:14,table_row:6},{atomic_number:83,symbol:"Bi",name:"Bizmut",name_en:"Bismuth",atomic_weight:"208.98040",electron_configuration:"[Xe]6s2 4f14 5d10 6p3",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:15,period:6,table_col:15,table_row:6},{atomic_number:84,symbol:"Po",name:"Polonyum",name_en:"Polonium",atomic_weight:"208.98243",electron_configuration:"[Xe]6s2 4f14 5d10 6p4",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:16,period:6,table_col:16,table_row:6},{atomic_number:85,symbol:"At",name:"Astatin",name_en:"Astatine",atomic_weight:"209.98715",electron_configuration:"[Xe]6s2 4f14 5d10 6p5",phase:"Kat\u0131",phase_en:"Solid",category:"halogen",group_block:"Halogen",group:17,period:6,table_col:17,table_row:6},{atomic_number:86,symbol:"Rn",name:"Radon",name_en:"Radon",atomic_weight:"222.01758",electron_configuration:"[Xe]6s2 4f14 5d10 6p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:6,table_col:18,table_row:6},{atomic_number:87,symbol:"Fr",name:"Fransiyum",name_en:"Francium",atomic_weight:"223.01973",electron_configuration:"[Rn]7s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:7,table_col:1,table_row:7},{atomic_number:88,symbol:"Ra",name:"Radyum",name_en:"Radium",atomic_weight:"226.02541",electron_configuration:"[Rn]7s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:7,table_col:2,table_row:7},{atomic_number:89,symbol:"Ac",name:"Aktinyum",name_en:"Actinium",atomic_weight:"227.02775",electron_configuration:"[Rn]7s2 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:3,table_row:10},{atomic_number:90,symbol:"Th",name:"Toryum",name_en:"Thorium",atomic_weight:"232.038",electron_configuration:"[Rn]7s2 6d2",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:4,table_row:10},{atomic_number:91,symbol:"Pa",name:"Protaktinyum",name_en:"Protactinium",atomic_weight:"231.03588",electron_configuration:"[Rn]7s2 5f2 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:5,table_row:10},{atomic_number:92,symbol:"U",name:"Uranyum",name_en:"Uranium",atomic_weight:"238.0289",electron_configuration:"[Rn]7s2 5f3 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:6,table_row:10},{atomic_number:93,symbol:"Np",name:"Nept\xFCnyum",name_en:"Neptunium",atomic_weight:"237.048172",electron_configuration:"[Rn]7s2 5f4 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:7,table_row:10},{atomic_number:94,symbol:"Pu",name:"Pl\xFCtonyum",name_en:"Plutonium",atomic_weight:"244.06420",electron_configuration:"[Rn]7s2 5f6",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:8,table_row:10},{atomic_number:95,symbol:"Am",name:"Amerikyum",name_en:"Americium",atomic_weight:"243.061380",electron_configuration:"[Rn]7s2 5f7",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:9,table_row:10},{atomic_number:96,symbol:"Cm",name:"K\xFCriyum",name_en:"Curium",atomic_weight:"247.07035",electron_configuration:"[Rn]7s2 5f7 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:10,table_row:10},{atomic_number:97,symbol:"Bk",name:"Berkelyum",name_en:"Berkelium",atomic_weight:"247.07031",electron_configuration:"[Rn]7s2 5f9",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:11,table_row:10},{atomic_number:98,symbol:"Cf",name:"Kaliforniyum",name_en:"Californium",atomic_weight:"251.07959",electron_configuration:"[Rn]7s2 5f10",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:12,table_row:10},{atomic_number:99,symbol:"Es",name:"Ayn\u015Ftaynyum",name_en:"Einsteinium",atomic_weight:"252.0830",electron_configuration:"[Rn]7s2 5f11",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:13,table_row:10},{atomic_number:100,symbol:"Fm",name:"Fermiyum",name_en:"Fermium",atomic_weight:"257.09511",electron_configuration:"[Rn] 5f12 7s2",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:14,table_row:10},{atomic_number:101,symbol:"Md",name:"Mendelevyum",name_en:"Mendelevium",atomic_weight:"258.09843",electron_configuration:"[Rn]7s2 5f13",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:15,table_row:10},{atomic_number:102,symbol:"No",name:"Nobelyum",name_en:"Nobelium",atomic_weight:"259.10100",electron_configuration:"[Rn]7s2 5f14",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:16,table_row:10},{atomic_number:103,symbol:"Lr",name:"Lavrensiyum",name_en:"Lawrencium",atomic_weight:"266.120",electron_configuration:"[Rn]7s2 5f14 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:17,table_row:10},{atomic_number:104,symbol:"Rf",name:"Rutherfordiyum",name_en:"Rutherfordium",atomic_weight:"267.122",electron_configuration:"[Rn]7s2 5f14 6d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:7,table_col:4,table_row:7},{atomic_number:105,symbol:"Db",name:"Dubniyum",name_en:"Dubnium",atomic_weight:"268.126",electron_configuration:"[Rn]7s2 5f14 6d3",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:7,table_col:5,table_row:7},{atomic_number:106,symbol:"Sg",name:"Seaborgiyum",name_en:"Seaborgium",atomic_weight:"269.128",electron_configuration:"[Rn]7s2 5f14 6d4",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:7,table_col:6,table_row:7},{atomic_number:107,symbol:"Bh",name:"Bohriyum",name_en:"Bohrium",atomic_weight:"270.133",electron_configuration:"[Rn]7s2 5f14 6d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:7,table_col:7,table_row:7},{atomic_number:108,symbol:"Hs",name:"Hassiyum",name_en:"Hassium",atomic_weight:"269.1336",electron_configuration:"[Rn]7s2 5f14 6d6",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:7,table_col:8,table_row:7},{atomic_number:109,symbol:"Mt",name:"Meitneryum",name_en:"Meitnerium",atomic_weight:"277.154",electron_configuration:"[Rn]7s2 5f14 6d7 (calculated)",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:7,table_col:9,table_row:7},{atomic_number:110,symbol:"Ds",name:"Darmstadtiyum",name_en:"Darmstadtium",atomic_weight:"282.166",electron_configuration:"[Rn]7s2 5f14 6d8 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:7,table_col:10,table_row:7},{atomic_number:111,symbol:"Rg",name:"R\xF6ntgenyum",name_en:"Roentgenium",atomic_weight:"282.169",electron_configuration:"[Rn]7s2 5f14 6d9 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:7,table_col:11,table_row:7},{atomic_number:112,symbol:"Cn",name:"Kopernikyum",name_en:"Copernicium",atomic_weight:"286.179",electron_configuration:"[Rn]7s2 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"transition-metal",group_block:"Transition metal",group:12,period:7,table_col:12,table_row:7},{atomic_number:113,symbol:"Nh",name:"Nihonyum",name_en:"Nihonium",atomic_weight:"286.182",electron_configuration:"[Rn]5f14 6d10 7s2 7p1 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:7,table_col:13,table_row:7},{atomic_number:114,symbol:"Fl",name:"Flerovyum",name_en:"Flerovium",atomic_weight:"290.192",electron_configuration:"[Rn]7s2 7p2 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:14,period:7,table_col:14,table_row:7},{atomic_number:115,symbol:"Mc",name:"Moskovyum",name_en:"Moscovium",atomic_weight:"290.196",electron_configuration:"[Rn]7s2 7p3 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:15,period:7,table_col:15,table_row:7},{atomic_number:116,symbol:"Lv",name:"Livermoryum",name_en:"Livermorium",atomic_weight:"293.205",electron_configuration:"[Rn]7s2 7p4 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:16,period:7,table_col:16,table_row:7},{atomic_number:117,symbol:"Ts",name:"Tennesin",name_en:"Tennessine",atomic_weight:"294.211",electron_configuration:"[Rn]7s2 7p5 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"halogen",group_block:"Halogen",group:17,period:7,table_col:17,table_row:7},{atomic_number:118,symbol:"Og",name:"Oganesson",name_en:"Oganesson",atomic_weight:"295.216",electron_configuration:"[Rn]7s2 7p6 5f14 6d10 (predicted)",phase:"Gaz (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:7,table_col:18,table_row:7}]};var po=Object.freeze({nonmetal:"Ametal","noble-gas":"Soy gaz","alkali-metal":"Alkali metal","alkaline-earth-metal":"Toprak alkali metal",metalloid:"Yar\u0131 metal",halogen:"Halojen","post-transition-metal":"Ge\xE7i\u015F sonras\u0131 metal","transition-metal":"Ge\xE7i\u015F metali",lanthanide:"Lantanit",actinide:"Aktinit"}),Mi=Object.freeze(fo.elements.map(i=>Object.freeze(i))),bv=Object.freeze({...fo.source,notes:Object.freeze([...fo.source.notes])});var E_="2026-11-24",Wl=Object.freeze({graphene:"https://graphene-flagship.eu/materials/graphene/",graphite:"https://pubs.rsc.org/en/content/articlehtml/2024/sc/d3sc06107h",diamond:"https://www1.columbia.edu/sec/itc/ee/test2/hyperlinks/diamond%20xtal/diamond.htm",salt:"https://www.gan.msm.cam.ac.uk/resources/crystalmodels/cscl-and-nacl"}),cr="Sonlu ve birimsiz e\u011Fitim modeli. Kenarlarda eksik kom\u015Fular bulunur; enerji, kuvvet, mekanik dayan\u0131m, iletkenlik veya tepkime hesaplanmaz.",wi=Object.freeze([{id:"graphene",name:"Grafen",formula:"C",description:"Bir atom kal\u0131nl\u0131\u011F\u0131nda, alt\u0131gen halkalardan olu\u015Fan karbon tabakas\u0131. \u0130\xE7teki her karbonun \xFC\xE7 yak\u0131n kom\u015Fusu vard\u0131r.",structure:"D\xFCzlemsel bal pete\u011Fi \xF6rg\xFCs\xFC",limitations:`${cr} \xC7izgiler yak\u0131n kom\u015Fulu\u011Fu g\xF6sterir; tek/\xE7ift ba\u011F s\u0131ras\u0131 veya yerelle\u015Fmi\u015F \u03C0 ba\u011Flar\u0131 atamaz.`},{id:"graphite",name:"Grafit \xB7 AB katmanlar\u0131",formula:"C",description:"Ard\u0131\u015F\u0131k grafen tabakalar\u0131 AB (Bernal) d\xFCzeninde kayd\u0131r\u0131l\u0131r. A konumundaki birinci ve \xFC\xE7\xFCnc\xFC tabakalar hizal\u0131d\u0131r.",structure:"ABAB katmanl\u0131 bal pete\u011Fi \xF6rg\xFCs\xFC",limitations:`${cr} Katman say\u0131s\u0131 ve aral\u0131\u011F\u0131 g\xF6rsel kontrollerdir; soyulma, kararl\u0131l\u0131k veya katmanlar aras\u0131 kuvvet tahmini de\u011Fildir. Tek tabaka se\xE7ilirse grafen geometrisi g\xF6sterilir.`},{id:"diamond",name:"Elmas",formula:"C",description:"K\xFCbik elmas yap\u0131s\u0131nda i\xE7teki her karbon d\xF6rt kom\u015Fuya tetrahedral geometriyle ba\u011Flan\u0131r.",structure:"Y\xFCzey merkezli k\xFCbik \xF6rg\xFC + (0,0,0), (\xBC,\xBC,\xBC) baz\u0131",limitations:cr},{id:"sodium-chloride",name:"Sodyum klor\xFCr",formula:"NaCl",description:"Kaya tuzu yap\u0131s\u0131nda Na\u207A ve Cl\u207B iyonlar\u0131 d\xF6n\xFC\u015F\xFCml\xFCd\xFCr. \u0130\xE7teki her iyon kar\u015F\u0131t y\xFCkl\xFC alt\u0131 en yak\u0131n kom\u015Fuyla \xE7evrilidir.",structure:"Kaya tuzu \xB7 i\xE7 i\xE7e iki y\xFCzey merkezli k\xFCbik alt \xF6rg\xFC",limitations:`${cr} \xC7izgiler iyonik yak\u0131n kom\u015Fulu\u011Fu g\xF6sterir; ayr\u0131 NaCl molek\xFClleri veya tekli kovalent ba\u011Flar de\u011Fildir.`},{id:"silicon",name:"Silisyum",formula:"Si",description:"Elmas tipi k\xFCbik silisyum \xF6rg\xFCs\xFC. \u0130\xE7 atomlar\u0131n d\xF6rt kom\u015Fusu tetrahedral olarak d\xFCzenlenir.",structure:"Elmas tipi k\xFCbik \xF6rg\xFC \xB7 Si",limitations:`${cr} Bant yap\u0131s\u0131, katk\u0131lama veya yar\u0131 iletken ayg\u0131t davran\u0131\u015F\u0131 hesaplanmaz.`}].map(i=>Object.freeze(i)));function ou(i,e,t,n,s=!1){let r=Number.isFinite(Number(i))&&i!==null&&i!==""?Number(i):e;return Math.max(t,Math.min(n,s?Math.round(r):r))}function A_(i){if(i.length===0)return;let e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(let s of i)s.position.forEach((r,a)=>{e[a]=Math.min(e[a],r),t[a]=Math.max(t[a],r)});let n=e.map((s,r)=>(s+t[r])/2);for(let s of i)s.position=s.position.map((r,a)=>r-n[a])}function R_(i,e){return i.position.reduce((t,n,s)=>t+(n-e.position[s])**2,0)}function Xl(i,e,t=()=>!0){let n=[],s=e*e;for(let r=0;r<i.length;r++)for(let a=r+1;a<i.length;a++)t(i[r],i[a])&&Math.abs(R_(i[r],i[a])-s)<1e-7&&n.push({a:i[r].id,b:i[a].id,order:1});return n}function C_(){let i=new Map,e=2;for(let t=-e;t<=e;t++)for(let n=-e;n<=e;n++){if(Math.max(Math.abs(t),Math.abs(n),Math.abs(t+n))>e)continue;let s=1.5*t,r=Math.sqrt(3)*(n+t/2);for(let a=0;a<6;a++){let o=a*Math.PI/3,l=[s+Math.cos(o),0,r+Math.sin(o)],c=l.map(h=>Math.round(h*1e8)).join(",");i.has(c)||i.set(c,l)}}return[...i.values()]}function P_(i,e,t){let n=C_(),s=[];for(let a=0;a<e;a++){let o=a%2===1?1:0;n.forEach(l=>s.push({id:`${i}-a${s.length}`,element:"C",layer:a,position:[l[0]+o,(a-(e-1)/2)*t,l[2]]}))}let r=Xl(s,1,(a,o)=>a.layer===o.layer);return{atoms:s,bonds:r,details:{layers:e,spacing:e>1?t:null,stacking:e>1?Array.from({length:e},(a,o)=>o%2?"B":"A").join(""):"A",interior_coordination:3,bonding:"Tabaka i\xE7i yak\u0131n kom\u015Fuluk; \u03C0 elektronlar\u0131 ve katmanlar aras\u0131 etkile\u015Fim hesaplanmaz."}}}function I_(i,e){let t=[],n=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]],s=[0,.25],r=4/Math.sqrt(3),a=3;for(let o=0;o<a;o++)for(let l=0;l<a;l++)for(let c=0;c<a;c++)for(let h of n)for(let f of s)t.push({id:`${i}-a${t.length}`,element:e,position:[o,l,c].map((u,m)=>(u+h[m]+f)*r)});return{atoms:t,bonds:Xl(t,1),details:{conventional_cells_per_axis:a,interior_coordination:4,bonding:"Tetrahedral en yak\u0131n kom\u015Fu ba\u011Flant\u0131lar\u0131; mekanik veya kuantum hesab\u0131 de\u011Fildir."}}}function L_(i){let e=[];for(let n=0;n<6;n++)for(let s=0;s<6;s++)for(let r=0;r<6;r++){let a=(n+s+r)%2===0;e.push({id:`${i}-a${e.length}`,element:a?"Na":"Cl",charge:a?1:-1,position:[n,s,r]})}return{atoms:e,bonds:Xl(e,1,(n,s)=>n.element!==s.element),details:{ionic:!0,net_charge:0,sites_per_axis:6,interior_coordination:6,bonding:"\u0130yonik kom\u015Fuluk \xE7izgileri; tekli kovalent ba\u011F veya ayr\u0131 molek\xFCl anlam\u0131na gelmez."}}}function lu(i,e={}){let t=wi.find(l=>l.id===i);if(!t)throw new RangeError(`Bilinmeyen malzeme: ${i}`);let n=e??{},s=i==="graphite"?ou(n.layers,3,1,5,!0):1,r=ou(n.spacing,1,.4,4),a;i==="graphene"||i==="graphite"?a=P_(i,s,r):i==="sodium-chloride"?a=L_(i):a=I_(i,i==="silicon"?"Si":"C"),A_(a.atoms);let o=i==="sodium-chloride"?Wl.salt:i==="silicon"?Wl.diamond:Wl[i];return{atoms:a.atoms,bonds:a.bonds,metadata:{id:i,name:t.name,formula:t.formula,structure:t.structure,units:"Birimsiz g\xF6rsel koordinatlar",coordinate_units:"unitless",nearest_neighbor_distance:1,edge_semantics:"nearest-neighbor-connectivity",simulation:!1,finite_patch:!0,limitations:t.limitations,source_url:o,source_checked_at:E_,...a.details}}}var Se=i=>document.getElementById(i),bn=i=>structuredClone(i),an=(i,e=2)=>Number(i).toLocaleString("tr-TR",{maximumFractionDigits:e}),du=i=>String(i).replace(/\d/g,e=>"\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089"[Number(e)]),go={H:"Hidrojen",C:"Karbon",N:"Azot",O:"Oksijen"},yo={molecules:["Atomlardan yap\u0131ya.","Bir ba\u011F kur. Bir ba\u011F\u0131 ay\u0131r. Maddenin nas\u0131l d\xFCzenlendi\u011Fini ke\u015Ffet.","Kovalent ba\u011F modeli"],elements:["Maddenin alfabesi.","118 elementi, elektron dizilimlerini ve periyodik tablodaki yerlerini incele.","Element katalo\u011Fu"],materials:["Ayn\u0131 atom, farkl\u0131 madde.","Grafenden elmasa, atomlar\u0131n d\xFCzeni malzemenin yap\u0131s\u0131n\u0131 de\u011Fi\u015Ftirir.","Kristal yap\u0131 g\xF6sterimi"],cells:["H\xFCcrenin s\u0131n\u0131r\u0131nda.","Zar\u0131n iki taraf\u0131n\u0131 de\u011Fi\u015Ftir; suyun ve \xE7\xF6z\xFCnen maddenin ge\xE7i\u015Fini izle.","\u0130ki b\xF6lmeli h\xFCcre modeli"]},P={mode:"molecules",busy:!1,epoch:0,mol:null,analysis:null,selected:[],undo:[],redo:[],molPresets:[],cellPresets:[],cell:null,cellResult:null,cellTime:0,playing:!1,cellSpeed:10,material:"graphene",layers:3,spacing:1,materialGraph:null,element:6,spacefill:!1},In;function ne(i,e={},t=[]){let n=document.createElement(i);for(let[s,r]of Object.entries(e))s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="class"?n.className=r:s==="text"?n.textContent=r:s in n?n[s]=r:n.setAttribute(s,r);for(let s of Array.isArray(t)?t:[t])s!=null&&n.append(s instanceof Node?s:document.createTextNode(String(s)));return n}var dt=(i,e,t="")=>ne("button",{text:i,class:t,onClick:ps(e)}),ut=(i,e)=>ne("section",{},[ne("h2",{text:i}),...e]),Ct=i=>ne("p",{class:"hint",text:i});var ps=i=>async e=>{try{await i(e)}catch(t){cn(t.message,!0)}};function cn(i,e=!1){Se("notice").textContent=i,Se("notice").classList.toggle("error",e)}function xo(i,e=[],t=""){Se("model-details").replaceChildren(...i.map(n=>ne("p",{text:n})),...e.map(([n,s])=>ne("p",{},[ne("a",{href:s,target:"_blank",rel:"noopener noreferrer",text:n})])),...t?[ne("code",{text:t})]:[])}function Zl(i){Se("metrics").replaceChildren(...i.map(([e,t,n=""])=>ne("div",{class:"metric"},[ne("span",{text:e}),ne("strong",{},[t,ne("small",{text:n})])])))}function fu(i,e){let t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t);ne("a",{href:n,download:i}).click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function dr(i,e){let t=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw new Error(n.error||"\u0130stek tamamlanamad\u0131.");return n}function fs(i){P.busy=i,Se("workspace").setAttribute("aria-busy",String(i)),Se("import").disabled=i;for(let e of["library","inspector","stage-controls"])Se(e).inert=i}function on(){try{localStorage.setItem("yorunge-science-v1",JSON.stringify(pu()))}catch{}}function pu(){return{format:"yorunge-science",version:1,mode:P.mode,...P.mode==="molecules"?{scene:P.mol}:P.mode==="cells"?{experiment:P.cell}:P.mode==="materials"?{material:P.material,layers:P.layers,spacing:P.spacing}:{atomic_number:P.element}}}function ur({reset:i=!0}={}){P.playing=!1;let[e,t,n]=yo[P.mode];Se("page-title").textContent=e,Se("page-description").textContent=t,Se("model-tag").textContent=n,document.querySelectorAll("[data-mode]").forEach(s=>{s.dataset.mode===P.mode?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")}),Se("workspace").classList.toggle("periodic-mode",P.mode==="elements"),Se("scene-panel").hidden=P.mode==="elements",Se("periodic-panel").hidden=P.mode!=="elements",Se("below-stage").replaceChildren(),Se("stage-controls").replaceChildren(),Se("scene-legend").replaceChildren(),Se("export-result").disabled=!0,Se("representation").hidden=P.mode==="cells",P.mode==="molecules"?$l(i):P.mode==="elements"?O_():P.mode==="materials"?hr(i):_o(i),on()}async function Yl(i){P.busy||(P.epoch++,P.mode=i,ur(),cn(`${yo[i][2]} haz\u0131r.`))}async function Ei(i,{record:e=!0,message:t="Molek\xFCl d\xFCzeni g\xFCncellendi."}={}){if(P.busy)return!1;let n=P.epoch;fs(!0);try{let s=await dr("/api/chemistry/analyze",i);return n!==P.epoch?!1:(e&&P.mol&&(P.undo.push(bn(P.mol)),P.undo=P.undo.slice(-25),P.redo=[]),P.mol=s.scene,P.analysis=s,P.selected=P.selected.filter(r=>P.mol.atoms.some(a=>a.id===r)),P.mode==="molecules"&&$l(!1),on(),cn(t),!0)}finally{fs(!1)}}async function mo(i){let e=P.molPresets.find(t=>t.id===i);e&&(P.selected=[],await Ei(bn(e.scene),{message:e.description})&&In?.resetCamera())}async function mu(i){let e=bn(P.mol),t=e.atoms.length+1;for(;e.atoms.some(s=>s.id===`${i.toLowerCase()}${t}`);)t++;let n=t*2.39996;e.atoms.push({id:`${i.toLowerCase()}${t}`,element:i,position:[Math.cos(n)*3,Math.sin(n)*2.2,0]}),await Ei(e,{message:`${go[i]} atomu eklendi.`})}function gu(i){P.mode!=="molecules"||P.busy||(P.selected=P.selected.includes(i)?P.selected.filter(e=>e!==i):[...P.selected.slice(-1),i],In?.select(P.selected),yu(),_u())}async function D_(){if(P.selected.length!==2)throw new Error("Ba\u011F kurmak i\xE7in iki farkl\u0131 atom se\xE7.");let[i,e]=P.selected,t=bn(P.mol),n=Number(Se("bond-order").value),s=t.bonds.find(r=>r.a===i&&r.b===e||r.a===e&&r.b===i);s?s.order=n:t.bonds.push({a:i,b:e,order:n}),await Ei(t,{message:"Ba\u011F d\xFCzeni de\u011Fi\u015Fti. Atom say\u0131s\u0131 korundu; par\xE7alar yeniden hesapland\u0131."})}async function N_(i,e){let t=bn(P.mol);t.bonds=t.bonds.filter(n=>!(n.a===i&&n.b===e||n.a===e&&n.b===i)),await Ei(t,{message:"Ba\u011F ayr\u0131ld\u0131. Atomlar korunarak olu\u015Fan par\xE7alar listelendi."})}async function U_(){if(!P.selected.length)return;let i=new Set(P.selected),e=bn(P.mol);e.atoms=e.atoms.filter(t=>!i.has(t.id)),e.bonds=e.bonds.filter(t=>!i.has(t.a)&&!i.has(t.b)),await Ei(e,{message:"Se\xE7ilen atomlar deneyden kald\u0131r\u0131ld\u0131. Geri al ile d\xF6nd\xFCrebilirsin."})}async function cu(i,e){if(P.busy||!P[i].length)return;let t=bn(P[i].at(-1)),n=bn(P.mol);await Ei(t,{record:!1,message:"\xD6nceki d\xFCzen geri y\xFCklendi."})&&(P[i].pop(),P[e].push(n),$l(!1))}function _u(){let i=Se("atom-list");i&&i.replaceChildren(...P.mol.atoms.map(e=>{let t=dt(`${e.element} \xB7 ${e.id}`,()=>gu(e.id),P.selected.includes(e.id)?"selected":"");return t.setAttribute("aria-pressed",String(P.selected.includes(e.id))),t}))}function $l(i){if(!P.mol||!P.analysis)return;Se("scene-title").textContent="Molek\xFCl \xE7al\u0131\u015Fma alan\u0131",Se("scene-caption").textContent="Atom se\xE7: t\u0131kla \xB7 D\xF6nd\xFCr: s\xFCr\xFCkle \xB7 G\xF6r\xFCn\xFCm \xF6l\xE7eksizdir",Se("scene-legend").replaceChildren(...Object.keys(go).map(a=>ne("span",{class:"legend-item"},[ne("i",{class:`dot legend-${a.toLowerCase()}`}),a])));let e=P.molPresets.filter(a=>!["water-before","water-after","water-parts"].includes(a.id));Se("library").replaceChildren(ut("Atom ekle",[ne("div",{class:"atom-tools"},Object.entries(go).map(([a,o])=>{let l=dt("",()=>mu(a),`element-${a.toLowerCase()}`);return l.append(a,ne("small",{text:o})),l})),Ct("Bu ba\u011F modeli H, C, N ve O atomlar\u0131n\u0131 kullan\u0131r. Di\u011Fer 114 element Elementler alan\u0131ndad\u0131r.")]),ut("Haz\u0131r molek\xFCller",[ne("div",{class:"preset-list"},e.map(a=>{let o=dt("",()=>mo(a.id),"preset-button");return o.append(ne("strong",{text:a.label})),o}))]),ut("Birlikte deneyelim",[dt("Suyu atomlardan kur",()=>mo("water-parts"),"full"),dt("Tepkime \xF6rne\u011Fi: su",()=>mo("water-before"),"full"),Ct("\xD6rnekte ayn\u0131 4 H ve 2 O atomunun \xF6nceki ve sonraki ba\u011F d\xFCzenini kar\u015F\u0131la\u015Ft\u0131r.")]),ut("Sahnedeki atomlar",[ne("div",{id:"atom-list",class:"atom-list"}),Ct("\u0130ki atom se\xE7erek aralar\u0131na ba\u011F kurabilirsin.")])),In?.setGraph(P.mol,{reset:i}),In?.select(P.selected),_u(),yu();let t=dt("Geri al",()=>cu("undo","redo"));t.disabled=!P.undo.length;let n=dt("Yinele",()=>cu("redo","undo"));n.disabled=!P.redo.length,Se("stage-controls").replaceChildren(t,n,ne("span",{class:"spacer"}),dt("Bo\u015F sahne",()=>Ei({schema_version:1,atoms:[],bonds:[]},{message:"Bo\u015F sahne haz\u0131r. Soldan atom ekleyebilirsin."})));let s=P.analysis.totals.element_counts;P.mol.atoms.length===6&&(s.H||0)===4&&(s.O||0)===2&&Se("stage-controls").append(dt("\xDCr\xFCn d\xFCzenini g\xF6ster",()=>mo("water-after"),"primary")),Zl([["Atom",P.analysis.totals.atoms],["Ba\u011F",P.analysis.totals.bonds],["Ba\u011Fl\u0131 par\xE7a",P.analysis.components.length]]),Se("below-stage").replaceChildren(ne("div",{class:"explanation"},[ne("strong",{text:"Ba\u011F d\xFCzeni, maddeyi tan\u0131mlar. "}),"Bir ba\u011F\u0131 ay\u0131r\u0131nca atomlar yok olmaz; ba\u011Fl\u0131 par\xE7alar de\u011Fi\u015Fir. \u201CBa\u011F say\u0131s\u0131 tamam\u201D etiketi bu modelin valans kural\u0131n\u0131 anlat\u0131r; ger\xE7ek kararl\u0131l\u0131k veya kendili\u011Finden tepkime garantisi de\u011Fildir."])),xo(["H: 1, C: 4, N: 3, O: 2 tipik n\xF6tr kovalent valanslar\u0131yla \xE7al\u0131\u015Fan bir ba\u011Flant\u0131 graf\u0131d\u0131r. Tek, \xE7ift ve \xFC\xE7l\xFC ba\u011F desteklenir. Molek\xFCl ad\u0131 yaln\u0131z desteklenen tam ba\u011Flant\u0131 yap\u0131s\u0131 e\u015Fle\u015Fince g\xF6sterilir.","Atom konumlar\u0131 g\xF6rsel d\xFCzen i\xE7indir; ger\xE7ek ba\u011F uzunlu\u011Fu, ba\u011F a\xE7\u0131s\u0131 veya enerji minimizasyonu hesaplanmaz. \u0130yonlar, radikaller, rezonans ve kuantum kimyas\u0131 modellenmez.","Su tepkimesi \xF6rne\u011Fi \xF6nceden tan\u0131ml\u0131 iki ba\u011F d\xFCzenini kar\u015F\u0131la\u015Ft\u0131r\u0131r. Aktivasyon enerjisi, s\xFCre, s\u0131cakl\u0131k, verim veya ger\xE7ek ko\u015Fullardaki \xFCr\xFCnler tahmin edilmez."],[["Kovalent ba\u011Flar \u2014 OpenStax","https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding"]],"POST /api/chemistry/analyze"),Se("export-result").disabled=!1}function yu(){let i=P.selected.map(a=>P.mol.atoms.find(o=>o.id===a)).filter(Boolean),e=i.length?i.map(a=>{let o=P.analysis.atoms.find(l=>l.id===a.id);return`${a.element} (${a.id}) \xB7 ${o.used_valence}/${o.max_valence} ba\u011F derecesi`}).join(" / "):"Sahneden veya atom listesinden iki atom se\xE7.",t=ne("select",{id:"bond-order","aria-label":"Ba\u011F derecesi"},[ne("option",{value:1,text:"Tek ba\u011F"}),ne("option",{value:2,text:"\xC7ift ba\u011F"}),ne("option",{value:3,text:"\xDC\xE7l\xFC ba\u011F"})]),n=dt("Ba\u011F kur / g\xFCncelle",D_,"primary full");n.disabled=i.length!==2;let s=dt("Se\xE7ilen atomlar\u0131 kald\u0131r",U_,"danger full");s.disabled=!i.length;let r=P.analysis.components.map(a=>ne("div",{class:"component"},[ne("div",{class:"formula",text:du(a.formula)}),ne("div",{class:"component-name",text:a.name||(a.atom_ids.length===1?"Tek atom":"Adland\u0131r\u0131lmam\u0131\u015F yap\u0131")}),ne("span",{class:`pill ${a.complete_valence?"":"incomplete"}`,text:a.complete_valence?"Ba\u011F say\u0131s\u0131 tamam":"A\xE7\u0131k ba\u011F kapasitesi"})]));Se("inspector").replaceChildren(ut("Ba\u011F d\xFCzenle",[ne("div",{class:"selection-summary",text:e}),ne("label",{class:"field"},["Ba\u011F derecesi",t]),n,Ct("Var olan ba\u011F\u0131 de\u011Fi\u015Ftirmek i\xE7in ayn\u0131 iki atomu se\xE7."),s]),ut("Olu\u015Fan par\xE7alar",r.length?r:[Ct("Hen\xFCz atom yok. Soldan bir atom ekle.")]),ut("Ba\u011Flar",[ne("div",{class:"scroll-list"},P.mol.bonds.map(a=>ne("div",{class:"bond-row"},[`${a.a} ${["","\u2014","=","\u2261"][a.order]} ${a.b}`,dt("Ay\u0131r",()=>N_(a.a,a.b))])))]))}var F_=i=>`c-${i.category||"unknown"}`;function O_(){let i=ne("input",{type:"search",placeholder:"Ad, simge veya atom numaras\u0131 ara\u2026","aria-label":"Element ara",id:"element-search"}),e=ne("select",{"aria-label":"Element ailesi",id:"element-family"},[ne("option",{value:"",text:"T\xFCm aileler"}),...Object.entries(po).map(([r,a])=>ne("option",{value:r,text:a}))]),t=ne("div",{class:"periodic-grid","aria-label":"118 elementin periyodik tablosu"});Mi.forEach(r=>{let a=dt("",()=>{P.element=r.atomic_number,hu(),t.querySelectorAll("button").forEach(o=>{let l=Number(o.dataset.number)===P.element;o.classList.toggle("selected",l),o.setAttribute("aria-pressed",String(l))}),on()},`element-tile ${F_(r)} ${r.atomic_number===P.element?"selected":""}`);a.dataset.number=r.atomic_number,a.setAttribute("aria-label",`${r.atomic_number}, ${r.name}, ${r.symbol}`),a.setAttribute("aria-pressed",String(r.atomic_number===P.element)),a.style.gridColumn=String(r.table_col),a.style.gridRow=String(r.table_row),a.append(ne("span",{class:"number",text:r.atomic_number}),ne("strong",{text:r.symbol}),ne("span",{class:"el-name",text:r.name})),t.append(a)});for(let[r,a]of[["57\u201371",6],["89\u2013103",7]]){let o=ne("span",{class:"table-placeholder",text:r});o.style.gridColumn="3",o.style.gridRow=String(a),t.append(o)}let n=ne("p",{class:"hint",id:"element-match",text:"118 element g\xF6steriliyor. Tabloyu yatay kayd\u0131rabilirsin."}),s=()=>{let r=i.value.trim().toLocaleLowerCase("tr-TR"),a=0;t.querySelectorAll("button").forEach(o=>{let l=Mi.find(h=>h.atomic_number===Number(o.dataset.number)),c=(!e.value||l.category===e.value)&&(!r||[l.name,l.name_en,l.symbol,String(l.atomic_number)].some(h=>h.toLocaleLowerCase("tr-TR").includes(r)));o.classList.toggle("filtered",!c),c&&a++}),n.textContent=`${a} e\u015Fle\u015Fme. Soluk elementler filtre d\u0131\u015F\u0131nda; yine de se\xE7ilebilir.`};i.addEventListener("input",s),e.addEventListener("change",s),Se("periodic-panel").replaceChildren(ne("div",{class:"periodic-tools"},[i,e]),t,ne("div",{class:"family-key"},Object.entries(po).map(([r,a])=>ne("span",{},[ne("i",{class:`swatch c-${r}`}),a]))),n),hu(),xo(["118 elementin atom numaras\u0131, simgesi, PubChem taraf\u0131ndan bildirilen atom a\u011F\u0131rl\u0131\u011F\u0131 ve elektron dizilimi yerel veri anl\u0131k g\xF6r\xFCnt\xFCs\xFCnden g\xF6sterilir. Tahmin edilen \xF6zellikler kaynakta belirtilen \u015Fekilde i\u015Faretlenir.","Atom a\u011F\u0131rl\u0131\u011F\u0131 n\xF6tron say\u0131s\u0131 de\u011Fildir. N\xF6tron say\u0131s\u0131 izotopa ba\u011Fl\u0131 oldu\u011Fundan burada atom a\u011F\u0131rl\u0131\u011F\u0131 yuvarlanarak t\xFCretilmez. Kabuk \xE7izimi bir kuantum orbital \xE7\xF6z\xFCm\xFC veya \xF6l\xE7ekli y\xF6r\xFCnge de\u011Fildir.","B\xFCt\xFCn elementler katalogda bulunur. Molek\xFCl d\xFCzenleyicisindeki ba\u011F hesab\u0131 bu s\xFCr\xFCmde yaln\u0131z H, C, N ve O i\xE7in vard\u0131r; di\u011Fer elementlerde otomatik tepkime hesab\u0131 yap\u0131lmaz."],[["Element verileri \u2014 PubChem","https://pubchem.ncbi.nlm.nih.gov/periodic-table/"],["Kaynak veri JSON","https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON"]])}function xu(i,e=new Set){if(e.has(i.symbol))return[];e.add(i.symbol);let t=i.electron_configuration||"",n=Array(7).fill(0),s=t.match(/\[([A-Za-z]+)\]/);if(s){let r=Mi.find(a=>a.symbol===s[1]);r&&xu(r,e).forEach((o,l)=>n[l]=o)}for(let r of t.matchAll(/([1-7])[spdf]\s*(\d+)/g))n[Number(r[1])-1]+=Number(r[2]);return n}function ln(i,e={}){let t=document.createElementNS("http://www.w3.org/2000/svg",i);for(let[n,s]of Object.entries(e))t.setAttribute(n,String(s));return t}function B_(i){let e=ln("svg",{viewBox:"0 0 240 240",class:"shell-svg",role:"img","aria-label":`${i.name} i\xE7in \u015Fematik elektron kabuklar\u0131`}),t=xu(i),n=t.reduce((a,o,l)=>o?l+1:a,0);if(t.reduce((a,o)=>a+o,0)!==i.atomic_number||!n){let a=ln("text",{x:120,y:120,"text-anchor":"middle",fill:"#5d7081","font-size":11});return a.textContent="Kabuk \u015Femas\u0131 mevcut de\u011Fil",e.append(a),e}let s=ln("circle",{cx:120,cy:120,r:17,fill:"#d8eceb"});e.append(s);let r=ln("text",{x:120,y:124,"text-anchor":"middle",fill:"#225966","font-size":11});return r.textContent=i.symbol,e.append(r),t.forEach((a,o)=>{if(!a)return;let l=29+o/Math.max(1,n-1)*78;e.append(ln("circle",{cx:120,cy:120,r:l,fill:"none",stroke:"#c6d9e2","stroke-width":1}));for(let c=0;c<a;c++){let h=c*2*Math.PI/a+o*.3;e.append(ln("circle",{cx:120+Math.cos(h)*l,cy:120+Math.sin(h)*l,r:2.7,fill:o===n-1?"#0b8589":"#668ba2"}))}}),e}function hu(){let i=Mi.find(s=>s.atomic_number===P.element)||Mi[5],e=[["Proton",i.atomic_number],["Elektron (n\xF6tr)",i.atomic_number],["Atom a\u011F\u0131rl\u0131\u011F\u0131",i.atomic_weight],["Standart h\xE2l",i.phase],["Aile",po[i.category]||i.category],["Periyot",i.period]],t=ne("dl",{class:"properties"});e.forEach(([s,r])=>t.append(ne("div",{},[ne("dt",{text:s}),ne("dd",{text:r})])));let n=[];go[i.symbol]&&n.push(dt("Molek\xFCle atom ekle",async()=>{await Yl("molecules"),await mu(i.symbol)},"primary full")),i.symbol==="C"&&n.push(dt("Karbon yap\u0131lar\u0131n\u0131 incele",()=>(P.material="graphene",Yl("materials")),"full")),Se("inspector").replaceChildren(ut("Se\xE7ili element",[ne("div",{class:"element-hero"},[ne("div",{class:"element-number",text:i.atomic_number}),ne("div",{class:"large-symbol",text:i.symbol}),ne("h2",{text:i.name}),ne("p",{text:i.name_en})]),B_(i),Ct("Kabuk \u015Femas\u0131 \xB7 \xF6l\xE7eksiz")]),ut("Element bilgisi",[t,ne("h3",{text:"Elektron dizilimi"}),ne("p",{class:"material-info",text:i.electron_configuration||"Kaynakta verilmemi\u015F"}),...n]),ut("Veri kayna\u011F\u0131",[Ct("PubChem / ABD Ulusal T\u0131p K\xFCt\xFCphanesi. Atom a\u011F\u0131rl\u0131\u011F\u0131 kaynakta bildirildi\u011Fi gibi g\xF6sterilir; baz\u0131 a\u011F\u0131r elementlerin \xF6zellikleri \xF6ng\xF6r\xFCd\xFCr."),ne("a",{href:`https://pubchem.ncbi.nlm.nih.gov/element/${i.atomic_number}`,target:"_blank",rel:"noopener noreferrer",text:"Elementin kaynak sayfas\u0131"})]))}function uu(i,e,t,n,s,r,a){let o=ne("output",{text:an(t)}),l=ne("input",{type:"range",id:e,min:n,max:s,step:r,value:t,"aria-label":i});return l.addEventListener("input",ps(()=>(o.textContent=an(Number(l.value)),a(Number(l.value))))),ne("label",{class:"field"},[i,ne("span",{class:"unit"},[o]),l])}function ql(i=!1){let e=wi.find(t=>t.id===P.material);P.materialGraph=lu(e.id,{layers:P.layers,spacing:P.spacing}),In?.setGraph(P.materialGraph,{reset:i,dense:!0}),In?.select([]),Zl([["G\xF6r\xFCnen atom",P.materialGraph.atoms.length],["G\xF6r\xFCnen ba\u011Flant\u0131",P.materialGraph.bonds.length],["Yap\u0131",e.formula]])}function hr(i){let e=wi.find(t=>t.id===P.material)||wi[0];P.material=e.id,Se("scene-title").textContent=e.name,Se("scene-caption").textContent="D\xF6nd\xFCr: s\xFCr\xFCkle \xB7 Atom konumlar\u0131 \u015Fematiktir",Se("library").replaceChildren(ut("Yap\u0131 k\xFCt\xFCphanesi",[ne("div",{class:"preset-list"},wi.map(t=>{let n=dt("",()=>{P.material=t.id,hr(!0),on(),cn(`${t.name} yap\u0131s\u0131 a\xE7\u0131ld\u0131.`)},`preset-button ${t.id===P.material?"active":""}`);return n.append(ne("strong",{text:t.name}),ne("small",{text:t.formula})),n}))]),ut("G\xF6r\xFCn\xFCm\xFC de\u011Fi\u015Ftir",e.id==="graphite"?[uu("Katman say\u0131s\u0131","layers",P.layers,1,5,1,t=>{P.layers=t,ql(),on()}),uu("Katman aral\u0131\u011F\u0131","spacing",P.spacing,.5,3,.1,t=>{P.spacing=t,ql(),on()}),Ct("Katman aral\u0131\u011F\u0131 bir g\xF6rsel kontrol\xFCd\xFCr; ay\u0131rma kuvveti veya enerji hesab\u0131 de\u011Fildir.")]:[Ct("Atomlar\u0131 farkl\u0131 a\xE7\u0131lardan incelemek i\xE7in sahneyi s\xFCr\xFCkle. K\xFCre\u2013\xE7ubuk d\xFC\u011Fmesiyle atomlar\u0131n kaplad\u0131\u011F\u0131 alan\u0131 kar\u015F\u0131la\u015Ft\u0131r.")]),ut("Karbonu kar\u015F\u0131la\u015Ft\u0131r",[dt("Grafen",()=>{P.material="graphene",hr(!0),on()},"full"),dt("Grafit",()=>{P.material="graphite",hr(!0),on()},"full"),dt("Elmas",()=>{P.material="diamond",hr(!0),on()},"full")])),ql(i),Se("stage-controls").replaceChildren(ne("span",{class:"hint",text:"Sonlu kristal kesiti \xB7 kenar atomlar\u0131n\u0131n kom\u015Fular\u0131 eksik olabilir"})),Se("inspector").replaceChildren(ut(e.name,[ne("div",{class:"component"},[ne("div",{class:"formula",text:du(e.formula)}),ne("p",{class:"material-info",text:e.description})])]),ut("Atomlar\u0131n d\xFCzeni",[ne("p",{class:"material-info",text:e.structure})]),ut("Bu g\xF6r\xFCn\xFCm neyi hesaplar?",[ne("p",{class:"material-info",text:Array.isArray(e.limitations)?e.limitations.join(" "):e.limitations}),Ct("Is\u0131 iletimi, elektrik iletkenli\u011Fi, k\u0131r\u0131lma ve \xFCretim ko\u015Fullar\u0131 bu modelden hesaplanmaz.")])),Se("below-stage").replaceChildren(ne("div",{class:"explanation"},[ne("strong",{text:"D\xFCzen de\u011Fi\u015Fince yap\u0131 de\u011Fi\u015Fir. "}),"Grafen tek karbon katman\u0131n\u0131, grafit \xFCst \xFCste katmanlar\u0131, elmas \xFC\xE7 boyutlu bir a\u011F\u0131 g\xF6sterir. Bunlar ayr\u0131 haz\u0131r yap\u0131lard\u0131r; aralar\u0131nda kendili\u011Finden d\xF6n\xFC\u015F\xFCm hesaplanmaz."])),xo(["Bu alan grafen, grafit, elmas, kaya tuzu ve silisyum i\xE7in sonlu, \u015Fematik kafes kesitleri \xFCretir. Atom ve ba\u011Flant\u0131 say\u0131lar\u0131 ekranda g\xF6r\xFCnen kesite aittir; sonsuz malzemenin miktar\u0131 de\u011Fildir.","Ba\u011F \xE7ubuklar\u0131 kom\u015Fulu\u011Fu g\xF6sterir. Grafenin delokalize elektronlar\u0131 ve kaya tuzunun iyonik etkile\u015Fimleri ayn\u0131 kovalent ba\u011F modeliyle hesaplanmaz. Katman kayd\u0131r\u0131c\u0131s\u0131 yaln\u0131z g\xF6r\xFCnt\xFC d\xFCzenidir."],[["Grafen yap\u0131s\u0131 \u2014 Graphene Flagship","https://graphene-flagship.eu/materials/graphene/"]]),Se("export-result").disabled=!1}function Kl(){P.cellResult=null,P.playing=!1,P.cellTime=0}function ci(i,e,t,n,s,r=""){let a=ne("input",{id:`cell-${e}`,type:"number",value:P.cell[e],min:t,max:n,step:"any",required:!0});return a.addEventListener("change",ps(()=>{a.reportValidity()&&(P.cell[e]=Number(a.value),Kl(),Ti(),vu(),Se("cell-timeline").disabled=!0,Se("cell-timeline").max=P.cell.duration_s,Se("export-result").disabled=!0,Se("cell-division_at_s")&&(Se("cell-division_at_s").max=P.cell.duration_s-.1),on(),cn("H\xFCcre ayar\u0131 de\u011Fi\u015Fti. Yeni sonu\xE7 i\xE7in deneyi \xE7al\u0131\u015Ft\u0131r."))})),ne("label",{class:"field"},[i,ne("span",{class:"unit",text:r}),a])}function k_(){let i=P.cell;return{t_s:0,cells:[{id:"cell-1",volume_pl:i.cell_volume_pl,solute_fmol:i.cell_volume_pl*i.inside_concentration_mm,concentration_mm:i.inside_concentration_mm}],external_volume_pl:i.external_volume_pl,external_solute_fmol:i.external_volume_pl*i.outside_concentration_mm,external_concentration_mm:i.outside_concentration_mm}}function z_(){if(!P.cellResult)return k_();let i=P.cellResult.frames,e=0,t=i.length-1;for(;e<t;){let n=Math.ceil((e+t)/2);i[n].t_s<=P.cellTime+1e-8?e=n:t=n-1}return i[e]}function _o(i){if(!P.cell)return;Se("scene-title").textContent="H\xFCcre ve d\u0131\u015F ortam",Se("scene-caption").textContent="Hacim \xF6l\xE7e\u011Fi g\xF6reli \xB7 organeller \u015Fematik \xB7 oynatma 10\xD7";let e=ne("input",{type:"checkbox",checked:P.cell.division_at_s!==null,id:"division-enabled"});e.addEventListener("change",()=>{P.cell.division_at_s=e.checked?P.cell.duration_s/2:null,Kl(),_o(!1),on()});let t=[ne("label",{class:"field check"},[e,"\u015Eematik ikiye b\xF6l\xFCnme"])];P.cell.division_at_s!==null&&t.push(ci("B\xF6l\xFCnme zaman\u0131","division_at_s",.1,P.cell.duration_s-.1,.1,"s")),t.push(Ct("B\xF6l\xFCnmede hacim ve \xE7\xF6z\xFCnen miktar\u0131 e\u015Fit payla\u015F\u0131l\u0131r. DNA kopyalanmas\u0131 ve h\xFCcre d\xF6ng\xFCs\xFC hesaplanmaz.")),Se("library").replaceChildren(ut("Haz\u0131r deneyler",[ne("div",{class:"preset-list"},P.cellPresets.map(r=>{let a=dt("",()=>{P.cell=bn(r.experiment),Kl(),_o(!0),on(),cn(r.description)},"preset-button");return a.append(ne("strong",{text:r.label})),a}))]),ut("Zar\u0131n iki taraf\u0131",[ci("\u0130\xE7 yo\u011Funluk","inside_concentration_mm",0,1e3,1,"mM"),ci("D\u0131\u015F yo\u011Funluk","outside_concentration_mm",0,1e3,1,"mM"),ci("H\xFCcre hacmi","cell_volume_pl",.1,10,.1,"pL"),ci("D\u0131\u015F ortam hacmi","external_volume_pl",1,100,1,"pL")]),ut("Zar ge\xE7irgenli\u011Fi",[ci("Su katsay\u0131s\u0131","water_permeability_pl_s_mm",0,.001,1e-5,"pL/(s\xB7mM)"),ci("\xC7\xF6z\xFCnen katsay\u0131s\u0131","solute_permeability_pl_s",0,.05,.001,"pL/s"),ci("Deney s\xFCresi","duration_s",1,300,1,"s")]),ut("B\xF6l\xFCnme",t));let n=dt(P.playing?"Duraklat":P.cellResult?"Oynat":"Deneyi \xE7al\u0131\u015Ft\u0131r",G_,"primary");n.id="cell-run";let s=ne("input",{id:"cell-timeline",type:"range",min:0,max:P.cellResult?.summary.elapsed_s||P.cell.duration_s,step:.01,value:P.cellTime,disabled:!P.cellResult,"aria-label":"H\xFCcre deney zaman\u0131"});s.addEventListener("input",()=>{P.playing=!1,P.cellTime=Number(s.value),Ti()}),Se("stage-controls").replaceChildren(n,dt("Ba\u015Fa d\xF6n",()=>{P.cellTime=0,P.playing=!1,Ti()}),s,ne("output",{id:"cell-time",text:`${an(P.cellTime,1)} s`})),Se("below-stage").replaceChildren(ne("div",{class:"chart-box"},[ne("h2",{},["Toplam h\xFCcre hacmi",ne("small",{text:"pL / saniye"})]),ne("div",{id:"cell-chart"}),ne("p",{class:"science-note",text:"B\xF6l\xFCnme hacmi \xE7o\u011Faltmaz; ayn\u0131 hacim iki h\xFCcreye payla\u015F\u0131l\u0131r. Grafik iki h\xFCcrenin toplam\u0131n\u0131 izler."})])),Ti(i),vu(),xo(["\u0130\xE7 ve d\u0131\u015F ortam sonlu, iyi kar\u0131\u015Fm\u0131\u015F iki b\xF6lme olarak modellenir. \xC7\xF6z\xFCnen miktar\u0131 fmol, hacim pL, yo\u011Funluk mM kullan\u0131r; 1 fmol/pL = 1 mM. Su yo\u011Fun \xE7\xF6z\xFCnen tarafa, ge\xE7irgen \xE7\xF6z\xFCnen ise kendi yo\u011Funluk fark\u0131n\u0131n azald\u0131\u011F\u0131 y\xF6ne ta\u015F\u0131n\u0131r.","Toplam su hacmi ve \xE7\xF6z\xFCnen miktar\u0131 korunur. Katsay\u0131lar kullan\u0131c\u0131 taraf\u0131ndan se\xE7ilen e\u011Fitim parametreleridir; belirli bir ger\xE7ek h\xFCcreye kalibre edilmemi\u015Ftir.","H\xFCcre zar\u0131, \xE7ekirdek ve organellerin g\xF6r\xFCn\xFCm\xFC \u015Fematiktir. B\xF6l\xFCnme yaln\u0131z miktarlar\u0131 iki \xF6zde\u015F h\xFCcreye payla\u015F\u0131r. Metabolizma, DNA, canl\u0131l\u0131k, zar bas\u0131nc\u0131 ve ger\xE7ek mitoz modellenmez.","Say\u0131sal modelin hacim s\u0131n\u0131r\u0131na gelinirse hesap durur ve olay kayd\u0131 g\xF6sterilir. Bu s\u0131n\u0131rlar h\xFCcrenin \xF6l\xFCm veya patlama e\u015Fikleri de\u011Fildir."],[["Pasif ta\u015F\u0131ma ve ozmoz \u2014 OpenStax","https://openstax.org/books/concepts-biology/pages/3-5-passive-transport"]],"POST /api/cells/simulate"),Se("export-result").disabled=!P.cellResult}async function G_(){if(!P.busy){for(let i of Se("library").querySelectorAll("input[type=number]"))if(!i.reportValidity())return;if(P.cellResult){P.playing=!P.playing,P.cellTime>=P.cellResult.summary.elapsed_s&&(P.cellTime=0),Ti();return}fs(!0),cn("H\xFCcre deneyi hesaplan\u0131yor\u2026");try{P.cellResult=await dr("/api/cells/simulate",P.cell),P.cellTime=0,_o(!1),P.playing=!0,Ti();let i=P.cellResult.summary.status==="model_limit";cn(i?"Deney model s\u0131n\u0131r\u0131na ula\u015Ft\u0131. Sonu\xE7lar ve olay kayd\u0131 haz\u0131r.":"Deney hesapland\u0131. Zaman \xE7izgisinden her an\u0131 inceleyebilirsin.",i)}finally{fs(!1)}}}function Ti(i=!1){if(P.mode!=="cells"||!P.cell)return;let e=z_();In?.setCells(e,P.cell.cell_volume_pl,{reset:i});let t=e.cells.reduce((o,l)=>o+l.volume_pl,0);Zl([["H\xFCcre",e.cells.length],["Toplam hacim",an(t,3),"pL"],["\u0130\xE7 yo\u011Funluk",an(e.cells[0].concentration_mm,1),"mM"]]),Se("cell-time")&&(Se("cell-time").textContent=`${an(e.t_s,1)} s`),Se("cell-timeline")&&(Se("cell-timeline").value=P.cellTime),Se("cell-run")&&(Se("cell-run").textContent=P.playing?"Duraklat":P.cellResult?"Oynat":"Deneyi \xE7al\u0131\u015Ft\u0131r");let n=e.cells[0].concentration_mm-e.external_concentration_mm,s=Math.abs(n)<.01?"Yo\u011Funluklar dengede":n>0?"Su i\xE7in e\u011Filim: h\xFCcrenin i\xE7ine":"Su i\xE7in e\u011Filim: d\u0131\u015F ortama",r=P.cellResult;Se("inspector").replaceChildren(ut("\u015Eu anda",[ne("div",{class:"status-badge",text:s}),ne("dl",{class:"properties"},[["D\u0131\u015F yo\u011Funluk",`${an(e.external_concentration_mm,1)} mM`],["D\u0131\u015F hacim",`${an(e.external_volume_pl,3)} pL`],...e.cells.map((o,l)=>[`H\xFCcre ${l+1}`,`${an(o.volume_pl,3)} pL`])].map(([o,l])=>ne("div",{},[ne("dt",{text:o}),ne("dd",{text:l})]))),Ct(P.cell.water_permeability_pl_s_mm===0?"Su katsay\u0131s\u0131 s\u0131f\u0131r: bu deneyde su ge\xE7i\u015Fi kapal\u0131.":"Su ge\xE7i\u015Fi yo\u011Funluk fark\u0131 ve se\xE7ilen katsay\u0131yla hesaplan\u0131r.")]),ut("Korunum kontrol\xFC",r?[ne("p",{class:"material-info",text:`En b\xFCy\xFCk hacim hatas\u0131: ${Number(r.summary.max_volume_conservation_error_pl).toExponential(1)} pL`}),ne("p",{class:"material-info",text:`En b\xFCy\xFCk \xE7\xF6z\xFCnen hatas\u0131: ${Number(r.summary.max_solute_conservation_error_fmol).toExponential(1)} fmol`}),Ct("Bu de\u011Ferler hesap boyunca toplam miktarlar\u0131n ne kadar korundu\u011Funu g\xF6sterir.")]:[Ct("Hacim ve \xE7\xF6z\xFCnenin korunumu deney \xE7al\u0131\u015F\u0131nca burada g\xF6sterilir.")]),ut("Olay kayd\u0131",r?[ne("ul",{class:"events"},r.events.map(o=>ne("li",{class:"event",text:`${an(o.t_s,1)} s \u2014 ${o.message}`}))),...r.events.length?[]:[Ct("B\xF6l\xFCnme veya model s\u0131n\u0131r\u0131 olay\u0131 yok.")]]:[Ct("Hen\xFCz deney \xE7al\u0131\u015Ft\u0131r\u0131lmad\u0131.")]));let a=Se("chart-marker");a&&r&&a.setAttribute("x1",String(35+Math.min(P.cellTime/r.summary.elapsed_s,1)*525)),a&&a.setAttribute("x2",a.getAttribute("x1"))}function vu(){let i=Se("cell-chart");if(!i)return;if(!P.cellResult){i.replaceChildren(Ct("Deneyi \xE7al\u0131\u015Ft\u0131r\u0131nca hacmin zamanla de\u011Fi\u015Fimi burada \xE7izilir."));return}let e=P.cellResult.frames,t=e.map(h=>h.cells.reduce((f,u)=>f+u.volume_pl,0)),n=Math.min(...t),s=Math.max(...t),r=Math.max((s-n)*.15,s*.03,.01);n-=r,s+=r;let a=P.cellResult.summary.elapsed_s||1,o=ln("svg",{viewBox:"0 0 580 155",class:"chart",role:"img","aria-label":"Zamana kar\u015F\u0131 toplam h\xFCcre hacmi grafi\u011Fi"});for(let h=0;h<3;h++){let f=12+h*57;o.append(ln("line",{x1:35,x2:560,y1:f,y2:f,stroke:"#e4edf1"}));let u=ln("text",{x:0,y:f+4,fill:"#6a8190","font-size":9});u.textContent=an(s-h*(s-n)/2,2),o.append(u)}let l=e.map((h,f)=>`${35+h.t_s/a*525},${12+(s-t[f])/(s-n)*114}`).join(" ");o.append(ln("polyline",{points:l,fill:"none",stroke:"#07898d","stroke-width":2.5}));let c=35+Math.min(P.cellTime/a,1)*525;o.append(ln("line",{id:"chart-marker",x1:c,x2:c,y1:10,y2:128,stroke:"#566f88","stroke-dasharray":"3 3"}));for(let[h,f]of[[35,"0 s"],[525,`${an(a,1)} s`]]){let u=ln("text",{x:h,y:148,fill:"#6a8190","font-size":10});u.textContent=f,o.append(u)}i.replaceChildren(o)}async function bu(i){if(i.format!=="yorunge-science"||i.version!==1||!yo[i.mode])throw new Error("Bu dosya Y\xF6r\xFCnge v0.3 deney bi\xE7iminde de\u011Fil.");if(i.mode==="molecules"){let e=await dr("/api/chemistry/analyze",i.scene);P.mol=e.scene,P.analysis=e,P.undo=[],P.redo=[],P.selected=[]}else if(i.mode==="cells"){let e=await dr("/api/cells/simulate",i.experiment);P.cell=e.experiment,P.cellResult=e,P.cellTime=0}else if(i.mode==="elements"){if(!Mi.some(e=>e.atomic_number===i.atomic_number))throw new Error("Ge\xE7ersiz atom numaras\u0131.");P.element=i.atomic_number}else{if(!wi.some(e=>e.id===i.material)||!Number.isInteger(i.layers)||i.layers<1||i.layers>5||!Number.isFinite(i.spacing)||i.spacing<.5||i.spacing>3)throw new Error("Ge\xE7ersiz malzeme ayar\u0131.");P.material=i.material,P.layers=i.layers,P.spacing=i.spacing}P.mode=i.mode,P.epoch++,ur()}document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",ps(()=>Yl(i.dataset.mode))));Se("reset-camera").addEventListener("click",()=>In?.resetCamera());Se("representation").addEventListener("click",()=>{P.spacefill=!P.spacefill,Se("representation").textContent=P.spacefill?"Hacim g\xF6r\xFCn\xFCm\xFC":"K\xFCre\u2013\xE7ubuk",Se("representation").setAttribute("aria-pressed",String(P.spacefill)),In?.setRepresentation(P.spacefill)});Se("save").addEventListener("click",ps(()=>{if(P.busy)throw new Error("Hesap bitince kaydedebilirsin.");fu(`yorunge-${P.mode}.json`,pu()),cn("Deney dosyas\u0131 indirildi.")}));Se("import").addEventListener("click",()=>Se("file").click());Se("file").addEventListener("change",ps(async()=>{let i=Se("file").files[0];if(i){if(Se("file").value="",i.size>262144)throw new Error("Deney dosyas\u0131 256 KiB s\u0131n\u0131r\u0131n\u0131 a\u015F\u0131yor.");if(!P.busy){fs(!0);try{await bu(JSON.parse(await i.text())),cn("Deney dosyas\u0131 do\u011Fruland\u0131 ve a\xE7\u0131ld\u0131.")}finally{fs(!1)}}}}));Se("export-result").addEventListener("click",()=>fu(`yorunge-${P.mode}-sonuc.json`,P.mode==="molecules"?P.analysis:P.mode==="cells"?P.cellResult:P.materialGraph));async function H_(){try{In=au(Se("science-viewport"),{onSelect:gu})}catch{Se("viewport-error").hidden=!1,Se("viewport-error").textContent="3B g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131. WebGL 2 destekli bir taray\u0131c\u0131 kullan. Element tablosu ve say\u0131sal sonu\xE7lar kullan\u0131labilir."}let i=performance.now(),e=0;function t(n){let s=Math.min(.05,(n-i)/1e3);i=n,!document.hidden&&P.playing&&P.mode==="cells"&&P.cellResult&&(P.cellTime=Math.min(P.cellTime+s*P.cellSpeed,P.cellResult.summary.elapsed_s),P.cellTime>=P.cellResult.summary.elapsed_s&&(P.playing=!1),e+=s,(e>=.1||!P.playing)&&(Ti(),e=0)),requestAnimationFrame(t)}requestAnimationFrame(t);try{let[n,s]=await Promise.all([fetch("/api/chemistry/presets").then(o=>o.json()),fetch("/api/cells/presets").then(o=>o.json())]);P.molPresets=n.presets,P.cellPresets=s.presets,P.cell=bn(s.presets[0].experiment),P.mol=bn(n.presets.find(o=>o.id==="water").scene),P.analysis=await dr("/api/chemistry/analyze",P.mol);let r;try{r=JSON.parse(localStorage.getItem("yorunge-science-v1")||"null")}catch{}if(r)try{await bu(r)}catch{ur()}else ur();let a=new URLSearchParams(location.search).get("alan");yo[a]&&(P.mode=a,ur()),cn("Laboratuvar haz\u0131r. Bir deney se\xE7 veya g\xF6r\xFCn\xFCm\xFC incele.")}catch(n){cn(`Laboratuvar y\xFCklenemedi: ${n.message}`,!0)}}H_();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
