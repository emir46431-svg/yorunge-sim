var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jc=0,al=1,jc=2;var ir=1,Qc=2,ms=3,fi=0,Xt=1,fn=2,Ri=0,gs=1,ol=2,ll=3,cl=4,eh=5;var Ci=100,th=101,nh=102,ih=103,sh=104,rh=200,ah=201,oh=202,lh=203,hl=204,ul=205,ch=206,hh=207,uh=208,dh=209,fh=210,ph=211,mh=212,gh=213,_h=214,Yr=0,qr=1,Kr=2,Qi=3,Zr=4,$r=5,Jr=6,jr=7,dl=0,yh=1,xh=2,Dn=0,fl=1,pl=2,ml=3,sr=4,gl=5,_l=6,yl=7;var xl=300,Pi=301,_s=302,Ma=303,wa=304,Qr=1e3,Cn=1001,ea=1002,Ct=1003,vh=1004;var rr=1005;var Vt=1006,Ea=1007;var Zn=1008;var $t=1009,vl=1010,bl=1011,ys=1012,Ta=1013,Mn=1014,wn=1015,En=1016,Aa=1017,Ra=1018,Ii=1020,Sl=35902,Ml=35899,wl=1021,El=1022,Tn=1023,Xn=1026,$n=1027,Tl=1028,Ca=1029,pi=1030,Pa=1031;var Ia=1033,ar=33776,or=33777,lr=33778,cr=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,ka=37496,Ba=37488,za=37489,hr=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,Ya=37812,qa=37813,Ka=37814,Za=37815,$a=37816,Ja=37817,ja=37818,Qa=37819,eo=37820,to=37821,no=36492,io=36494,so=36495,ro=36283,ao=36284,ur=36285,oo=36286;var Ds=2300,ta=2301,Wr=2302,jo=2303,Qo=2400,el=2401,tl=2402;var bh=3200;var lo=0,Sh=1,Jn="",Ot="srgb",Ns="srgb-linear",Us="linear",nt="srgb";var Xr=7680;var Mh=519,wh=512,Eh=513,Th=514,Al=515,Ah=516,Rh=517,Rl=518,Cl=519,Pl=35044;var Il="300 es",dn=2e3,es=2001;function $u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){let i=Fs("canvas");return i.style.display="block",i}var Sc={},ts=null;function Os(...i){let e="THREE."+i.shift();ts?ts("log",e,...i):console.log(e,...i)}function Ph(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Ph(i);let e="THREE."+i.shift();if(ts)ts("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=Ph(i);let e="THREE."+i.shift();if(ts)ts("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ps(...i){let e=i.join(" ");e in Sc||(Sc[e]=!0,Ne(...i))}function Ih(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lh={[Yr]:Yr,[Kr]:Jr,[Zr]:Zr,[Qi]:$r,[qr]:qr,[Jr]:Kr,[jr]:jr,[$r]:Qi},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=1234567,Is=Math.PI/180,ns=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ll(i,e){return(i%e+e)%e}function ju(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function ed(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function td(i,e=1){return e-Math.abs(Ll(i,e*2)-e)}function nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rd(i,e){return i+Math.random()*(e-i)}function ad(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(Mc=i);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ld(i){return i*Is}function cd(i){return i*ns}function hd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),m=r((n-e)/2),y=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*y,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*y,o*c);break;case"ZYZ":i.set(l*y,l*m,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function co(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nl(i,e){if(e.constructor===Float32Array)return i;let t=co(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ul(i,e){if(e.constructor===Float32Array)return i;let t=co(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Fl={DEG2RAD:Is,RAD2DEG:ns,generateUUID:mi,clamp:We,euclideanModulo:Ll,mapLinear:ju,inverseLerp:Qu,lerp:Ls,damp:ed,pingpong:td,smoothstep:nd,smootherstep:id,randInt:sd,randFloat:rd,randFloatSpread:ad,seededRandom:od,degToRad:ld,radToDeg:cd,isPowerOfTwo:hd,ceilPowerOfTwo:ud,floorPowerOfTwo:Dl,setQuaternionFromProperEuler:dd,normalize:Ul,denormalize:Nl},Ie=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],y=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==m||h!==y){let p=l*u+c*m+h*y+d*S;p<0&&(u=-u,m=-m,y=-y,S=-S,p=-p);let f=1-o;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);f=Math.sin(f*M)/R,o=Math.sin(o*M)/R,l=l*f+u*o,c=c*f+m*o,h=h*f+y*o,d=d*f+S*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+y*o,d=d*f+S*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],y=r[a+3];return e[t]=o*y+h*d+l*m-c*u,e[t+1]=l*y+h*u+c*d-o*m,e[t+2]=c*y+h*m+o*u-l*d,e[t+3]=h*y-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),m=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*y,this._y=c*m*d-u*h*y,this._z=c*h*y+u*m*d,this._w=c*h*d-u*m*y;break;case"YXZ":this._x=u*h*d+c*m*y,this._y=c*m*d-u*h*y,this._z=c*h*y-u*m*d,this._w=c*h*d+u*m*y;break;case"ZXY":this._x=u*h*d-c*m*y,this._y=c*m*d+u*h*y,this._z=c*h*y+u*m*d,this._w=c*h*d-u*m*y;break;case"ZYX":this._x=u*h*d-c*m*y,this._y=c*m*d+u*h*y,this._z=c*h*y-u*m*d,this._w=c*h*d+u*m*y;break;case"YZX":this._x=u*h*d+c*m*y,this._y=c*m*d+u*h*y,this._z=c*h*y-u*m*d,this._w=c*h*d-u*m*y;break;case"XZY":this._x=u*h*d-c*m*y,this._y=c*m*d-u*h*y,this._z=c*h*y+u*m*d,this._w=c*h*d+u*m*y;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new F,wc=new nn,Fe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],y=n[8],S=s[0],p=s[3],f=s[6],M=s[1],R=s[4],w=s[7],A=s[2],T=s[5],g=s[8];return r[0]=a*S+o*M+l*A,r[3]=a*p+o*R+l*T,r[6]=a*f+o*w+l*g,r[1]=c*S+h*M+d*A,r[4]=c*p+h*R+d*T,r[7]=c*f+h*w+d*g,r[2]=u*S+m*M+y*A,r[5]=u*p+m*R+y*T,r[8]=u*f+m*w+y*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,y=t*d+n*u+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return e[0]=d*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new Fe,Ec=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){let i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:e,whitePoint:n,transfer:Us,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var Ke=fd();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Fs("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pd=0,is=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Do(s[a].image)):r.push(Do(s[a]))}else r=Do(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var md=0,No=new F,Wt=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Vt,a=Zn,o=Tn,l=$t,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=mi(),this.name="",this.source=new is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=xl;Wt.DEFAULT_ANISOTROPY=1;var ht=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],y=l[9],S=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,w=(m+1)/2,A=(f+1)/2,T=(h+u)/4,g=(d+S)/4,b=(y+p)/4;return R>w&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=g/n):w>A?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-y)*(p-y)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-y)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ia=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Wt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new is(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends ia{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ks=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,d,u,m,y,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,m,y,S,p)}set(e,t,n,s,r,a,o,l,c,h,d,u,m,y,S,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=y,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,y=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+y*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=y+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,y=c*h,S=c*d;t[0]=u+S*o,t[4]=y*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-y,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,y=c*h,S=c*d;t[0]=u-S*o,t[4]=-a*d,t[8]=y+m*o,t[1]=m+y*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*d,y=o*h,S=o*d;t[0]=l*h,t[4]=y*c-m,t[8]=u*c+S,t[1]=l*d,t[5]=S*c+u,t[9]=m*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,y=o*l,S=o*c;t[0]=l*h,t[4]=S-u*d,t[8]=y*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+y,t[10]=u-S*d}else if(e.order==="XZY"){let u=a*l,m=a*c,y=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+S,t[5]=a*h,t[9]=m*d-y,t[2]=y*d-m,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,n){let s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ni.crossVectors(n,Qt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ni.crossVectors(n,Qt)),ni.normalize(),br.crossVectors(Qt,ni),s[0]=ni.x,s[4]=br.x,s[8]=Qt.x,s[1]=ni.y,s[5]=br.y,s[9]=Qt.y,s[2]=ni.z,s[6]=br.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],y=n[2],S=n[6],p=n[10],f=n[14],M=n[3],R=n[7],w=n[11],A=n[15],T=s[0],g=s[4],b=s[8],U=s[12],L=s[1],N=s[5],O=s[9],q=s[13],P=s[2],X=s[6],$=s[10],V=s[14],ne=s[3],K=s[7],G=s[11],j=s[15];return r[0]=a*T+o*L+l*P+c*ne,r[4]=a*g+o*N+l*X+c*K,r[8]=a*b+o*O+l*$+c*G,r[12]=a*U+o*q+l*V+c*j,r[1]=h*T+d*L+u*P+m*ne,r[5]=h*g+d*N+u*X+m*K,r[9]=h*b+d*O+u*$+m*G,r[13]=h*U+d*q+u*V+m*j,r[2]=y*T+S*L+p*P+f*ne,r[6]=y*g+S*N+p*X+f*K,r[10]=y*b+S*O+p*$+f*G,r[14]=y*U+S*q+p*V+f*j,r[3]=M*T+R*L+w*P+A*ne,r[7]=M*g+R*N+w*X+A*K,r[11]=M*b+R*O+w*$+A*G,r[15]=M*U+R*q+w*V+A*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],y=e[3],S=e[7],p=e[11],f=e[15],M=l*m-c*u,R=o*m-c*d,w=o*u-l*d,A=a*m-c*h,T=a*u-l*h,g=a*d-o*h;return t*(S*M-p*R+f*w)-n*(y*M-p*A+f*T)+s*(y*R-S*A+f*g)-r*(y*w-S*T+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],y=e[12],S=e[13],p=e[14],f=e[15],M=t*o-n*a,R=t*l-s*a,w=t*c-r*a,A=n*l-s*o,T=n*c-r*o,g=s*c-r*l,b=h*S-d*y,U=h*p-u*y,L=h*f-m*y,N=d*p-u*S,O=d*f-m*S,q=u*f-m*p,P=M*q-R*O+w*N+A*L-T*U+g*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*q-l*O+c*N)*X,e[1]=(s*O-n*q-r*N)*X,e[2]=(S*g-p*T+f*A)*X,e[3]=(u*T-d*g-m*A)*X,e[4]=(l*L-a*q-c*U)*X,e[5]=(t*q-s*L+r*U)*X,e[6]=(p*w-y*g-f*R)*X,e[7]=(h*g-u*w+m*R)*X,e[8]=(a*O-o*L+c*b)*X,e[9]=(n*L-t*O-r*b)*X,e[10]=(y*T-S*w+f*M)*X,e[11]=(d*w-h*T-m*M)*X,e[12]=(o*U-a*N-l*b)*X,e[13]=(t*N-n*U+s*b)*X,e[14]=(S*R-y*A-p*M)*X,e[15]=(h*A-d*R+u*M)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,y=r*d,S=a*h,p=a*d,f=o*d,M=l*c,R=l*h,w=l*d,A=n.x,T=n.y,g=n.z;return s[0]=(1-(S+f))*A,s[1]=(m+w)*A,s[2]=(y-R)*A,s[3]=0,s[4]=(m-w)*T,s[5]=(1-(u+f))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(y+R)*g,s[9]=(p-M)*g,s[10]=(1-(u+S))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length(),o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,h=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=dn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),y,S;if(l)y=r/(a-r),S=a*r/(a-r);else if(o===dn)y=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===es)y=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),y,S;if(l)y=1/(a-r),S=a/(a-r);else if(o===dn)y=-2/(a-r),S=-(a+r)/(a-r);else if(o===es)y=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fi=new F,_n=new at,gd=new F(0,0,0),_d=new F(1,1,1),ni=new F,br=new F,Qt=new F,Ac=new at,Rc=new nn,Yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yd=0,Cc=new F,Oi=new nn,kn=new at,Sr=new F,Ms=new F,xd=new F,vd=new nn,Pc=new F(1,0,0),Ic=new F(0,1,0),Lc=new F(0,0,1),Dc={type:"added"},bd={type:"removed"},ki={type:"childadded",child:null},Uo={type:"childremoved",child:null},Lt=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Yn,n=new nn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ms,Sr,this.up):kn.lookAt(Sr,Ms,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(kn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),ki.child=e,this.dispatchEvent(ki),ki.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new F(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,n),f=this._getHandJoint(c,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,y=.005;c.inputState.pinching&&u>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Ll(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(We(Ft.r*255,0,255))*65536+Math.round(We(Ft.g*255,0,255))*256+Math.round(We(Ft.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ot){Ke.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Mr);let n=Ls(ii.h,Mr.h,t),s=Ls(ii.s,Mr.s,t),r=Ls(ii.l,Mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new ze;ze.NAMES=Dh;var Bs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new F,Bn=new F,Oo=new F,zn=new F,Bi=new F,zi=new F,Nc=new F,ko=new F,Bo=new F,zo=new F,Go=new ht,Ho=new ht,Vo=new ht,Vn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Bn.subVectors(n,t),Oo.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Bn),l=yn.dot(Oo),c=Bn.dot(Bn),h=Bn.dot(Oo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,y=(a*h-o*l)*u;return r.set(1-m-y,y,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),Go.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Vo,r.z),a}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Bn.subVectors(e,t),yn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),yn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),zi.subVectors(r,n),ko.subVectors(e,n);let l=Bi.dot(ko),c=zi.dot(ko);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,s);let h=Bi.dot(Bo),d=zi.dot(Bo);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);zo.subVectors(e,r);let m=Bi.dot(zo),y=zi.dot(zo);if(y>=0&&m<=y)return t.copy(r);let S=m*c-l*y;if(S<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(zi,o);let p=h*y-m*d;if(p<=0&&d-h>=0&&m-y>=0)return Nc.subVectors(r,s),o=(d-h)/(d-h+(m-y)),t.copy(s).addScaledVector(Nc,o);let f=1/(p+S+u);return a=S*f,o=u*f,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),Er.subVectors(this.max,ws),Gi.subVectors(e.a,ws),Hi.subVectors(e.b,ws),Vi.subVectors(e.c,ws),si.subVectors(Hi,Gi),ri.subVectors(Vi,Hi),Mi.subVectors(Gi,Vi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Mi.z,Mi.y,si.z,0,-si.x,ri.z,0,-ri.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-Mi.y,Mi.x,0];return!Wo(t,Gi,Hi,Vi,Er)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,Gi,Hi,Vi,Er))?!1:(Tr.crossVectors(si,ri),t=[Tr.x,Tr.y,Tr.z],Wo(t,Gi,Hi,Vi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new F,new F,new F,new F,new F,new F,new F,new F],xn=new F,wr=new In,Gi=new F,Hi=new F,Vi=new F,si=new F,ri=new F,Mi=new F,ws=new F,Er=new F,Tr=new F,wi=new F;function Wo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gt=new F,Ar=new Ie,Md=0,vn=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=e!==void 0?co(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Nl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ul(e,this.array)}};var zs=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}},wd=new In,Es=new F,Xo=new F,as=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);let t=Es.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Xo)),this.expandByPoint(Es.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ed=0,un=new at,Yo=new Lt,Wi=new F,en=new In,Ts=new In,At=new F,Sn=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?Gs:zs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(en.min,Ts.min),en.expandByPoint(At),At.addVectors(en.max,Ts.max),en.expandByPoint(At)):(en.expandByPoint(Ts.min),en.expandByPoint(Ts.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),At.add(Wi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;let h=new F,d=new F,u=new F,m=new Ie,y=new Ie,S=new Ie,p=new F,f=new F;function M(U,L,N){c[U]=c[L]=c[N]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,L),u.fromBufferAttribute(n,N),m.fromBufferAttribute(r,U),y.fromBufferAttribute(r,L),S.fromBufferAttribute(r,N),d.sub(h),u.sub(h),y.sub(m),S.sub(m);let O=1/(y.x*S.y-S.x*y.y);isFinite(O)&&(p.copy(d).multiplyScalar(S.y).addScaledVector(u,-y.y).multiplyScalar(O),f.copy(u).multiplyScalar(y.x).addScaledVector(d,-S.x).multiplyScalar(O),o[U].add(p),o[L].add(p),o[N].add(p),l[U].add(f),l[L].add(f),l[N].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let U=0,L=R.length;U<L;++U){let N=R[U],O=N.start,q=N.count;for(let P=O,X=O+q;P<X;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let w=new F,A=new F,T=new F,g=new F;function b(U){T.fromBufferAttribute(s,U),g.copy(T);let L=o[U];w.copy(L),w.sub(T.multiplyScalar(T.dot(L))).normalize(),A.crossVectors(g,L);let O=A.dot(l[U])<0?-1:1;a.setXYZW(U,w.x,w.y,w.z,O)}for(let U=0,L=n.count;U<L;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){let y=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,y=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let f=0;f<h;f++)u[y++]=c[m++]}return new vn(u,h,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ra=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Uc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Gt=new F,Hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?co(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Nl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ul(e,this.data.array)}},qo=new F,Td=new F,Ad=new Fe,tn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qo.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ad.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rd=0,qn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=gs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},os=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xi,As=new F,Yi=new F,qi=new F,Ki=new Ie,Rs=new Ie,Nh=new at,Rr=new F,Cs=new F,Cr=new F,Fc=new Ie,Ko=new Ie,Oc=new Ie,Vs=class extends Lt{constructor(e=new os){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Sn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ra(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Hs(n,3,0,!1)),Xi.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new Ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Nh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Pr(Rr.set(-.5,-.5,0),qi,a,Yi,s,r),Pr(Cs.set(.5,-.5,0),qi,a,Yi,s,r),Pr(Cr.set(.5,.5,0),qi,a,Yi,s,r),Fc.set(0,0),Ko.set(1,0),Oc.set(1,1);let o=e.ray.intersectTriangle(Rr,Cs,Cr,!1,As);if(o===null&&(Pr(Cs.set(-.5,.5,0),qi,a,Yi,s,r),Ko.set(0,1),o=e.ray.intersectTriangle(Rr,Cr,Cs,!1,As),o===null))return;let l=e.ray.origin.distanceTo(As);l<e.near||l>e.far||t.push({distance:l,point:As.clone(),uv:Vn.getInterpolation(As,Rr,Cs,Cr,Fc,Ko,Oc,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Pr(i,e,t,n,s,r){Ki.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Rs.x=r*Ki.x-s*Ki.y,Rs.y=s*Ki.x+r*Ki.y):Rs.copy(Ki),i.copy(e),i.x+=Rs.x,i.y+=Rs.y,i.applyMatrix4(Nh)}var Hn=new F,Zo=new F,Ir=new F,Lr=new F,Ai=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zo.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),l=-Lr.dot(Ir),c=Lr.lengthSq(),h=Math.abs(1-a*a),d,u,m,y;if(h>0)if(d=a*l-o,u=a*o-l,y=r*h,d>=0)if(u>=-y)if(u<=y){let S=1/h;d*=S,u*=S,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-y?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=y?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zo).addScaledVector(Ir,u),m}intersectSphere(e,t){if(e.radius<0)return null;Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,m=e.z-a.z,y=t.x-a.x,S=t.y-a.y,p=t.z-a.z,f=n.x-a.x,M=n.y-a.y,R=n.z-a.z,w=Math.abs(l),A=Math.abs(c),T=Math.abs(h),g,b,U,L,N,O,q,P,X,$,V,ne;if(w>=A&&w>=T?(U=l,O=d,X=y,ne=f,l>=0?(g=c,b=h,L=u,N=m,q=S,P=p,$=M,V=R):(g=h,b=c,L=m,N=u,q=p,P=S,$=R,V=M)):A>=T?(U=c,O=u,X=S,ne=M,c>=0?(g=h,b=l,L=m,N=d,q=p,P=y,$=R,V=f):(g=l,b=h,L=d,N=m,q=y,P=p,$=f,V=R)):(U=h,O=m,X=p,ne=R,h>=0?(g=l,b=c,L=d,N=u,q=y,P=S,$=f,V=M):(g=c,b=l,L=u,N=d,q=S,P=y,$=M,V=f)),U===0)return null;let K=g/U,G=b/U,j=1/U,oe=L-K*O,de=N-G*O,Y=q-K*X,ae=P-G*X,ge=$-K*ne,we=V-G*ne,ce=ge*ae-we*Y,Re=oe*we-de*ge,Xe=Y*de-ae*oe;if(s){if(ce<0||Re<0||Xe<0)return null}else if((ce<0||Re<0||Xe<0)&&(ce>0||Re>0||Xe>0))return null;let Ce=ce+Re+Xe;if(Ce===0)return null;let $e=j*(ce*O+Re*X+Xe*ne);return(Ce>0?$e<0:$e>0)?null:this.at($e/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ls=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kc=new at,Ei=new Ai,Dr=new as,Bc=new F,Nr=new F,Ur=new F,Fr=new F,$o=new F,Or=new F,zc=new F,kr=new F,Zt=class extends Lt{constructor(e=new Sn,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&($o.fromBufferAttribute(d,e),a?Or.addScaledVector($o,h):Or.addScaledVector($o.sub(t),h))}t.add(Or)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Dr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Dr,Bc)===null||Ei.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(kc.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,S=u.length;y<S;y++){let p=u[y],f=a[p.materialIndex],M=Math.max(p.start,m.start),R=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,A=R;w<A;w+=3){let T=o.getX(w),g=o.getX(w+1),b=o.getX(w+2);s=Br(this,f,e,n,c,h,d,T,g,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=y,f=S;p<f;p+=3){let M=o.getX(p),R=o.getX(p+1),w=o.getX(p+2);s=Br(this,a,e,n,c,h,d,M,R,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,S=u.length;y<S;y++){let p=u[y],f=a[p.materialIndex],M=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,A=R;w<A;w+=3){let T=w,g=w+1,b=w+2;s=Br(this,f,e,n,c,h,d,T,g,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=y,f=S;p<f;p+=3){let M=p,R=p+1,w=p+2;s=Br(this,a,e,n,c,h,d,M,R,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Cd(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===fi,o),l===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function Br(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Nr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Fr);let h=Cd(i,e,t,n,Nr,Ur,Fr,zc);if(h){let d=new F;Vn.getBarycoord(zc,Nr,Ur,Fr,d),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,d,new Ie)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,d,new Ie)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Vn.getNormal(Nr,Ur,Fr,u.normal),h.face=u,h.barycoord=d}return h}var aa=class extends Wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ct,h=Ct,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new as,Pd=new Ie(.5,.5),zr=new F,oi=class{constructor(e=new tn,t=new tn,n=new tn,s=new tn,r=new tn,a=new tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],y=r[8],S=r[9],p=r[10],f=r[11],M=r[12],R=r[13],w=r[14],A=r[15];if(s[0].setComponents(c-a,m-h,f-y,A-M).normalize(),s[1].setComponents(c+a,m+h,f+y,A+M).normalize(),s[2].setComponents(c+o,m+d,f+S,A+R).normalize(),s[3].setComponents(c-o,m-d,f-S,A-R).normalize(),n)s[4].setComponents(l,u,p,w).normalize(),s[5].setComponents(c-l,m-u,f-p,A-w).normalize();else if(s[4].setComponents(c-l,m-u,f-p,A-w).normalize(),t===dn)s[5].setComponents(c+l,m+u,f+p,A+w).normalize();else if(t===es)s[5].setComponents(l,u,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Pd.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gc=new at,oa=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Gc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new oi),n[s].setFromProjectionMatrix(Gc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new oi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ws=class extends Wt{constructor(e=[],t=Pi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xs=class extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends Wt{constructor(e,t,n=Mn,s,r,a,o=Ct,l=Ct,c,h=Xn,d=1){if(h!==Xn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ys=class extends Kn{constructor(e,t=Mn,n=Pi,s,r,a=Ct,o=Ct,l,c=Xn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cs=class i extends Sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function y(S,p,f,M,R,w,A,T,g,b,U){let L=w/g,N=A/b,O=w/2,q=A/2,P=T/2,X=g+1,$=b+1,V=0,ne=0,K=new F;for(let G=0;G<$;G++){let j=G*N-q;for(let oe=0;oe<X;oe++){let de=oe*L-O;K[S]=de*M,K[p]=j*R,K[f]=P,c.push(K.x,K.y,K.z),K[S]=0,K[p]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),d.push(oe/g),d.push(1-G/b),V+=1}}for(let G=0;G<b;G++)for(let j=0;j<g;j++){let oe=u+j+X*G,de=u+j+X*(G+1),Y=u+(j+1)+X*(G+1),ae=u+(j+1)+X*G;l.push(oe,de,ae),l.push(de,Y,ae),ne+=6}o.addGroup(m,ne,U),m+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ks=class i extends Sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],y=0,S=[],p=n/2,f=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(m,2));function M(){let w=new F,A=new F,T=0,g=(t-e)/n;for(let b=0;b<=r;b++){let U=[],L=b/r,N=L*(t-e)+e;for(let O=0;O<=s;O++){let q=O/s,P=q*l+o,X=Math.sin(P),$=Math.cos(P);A.x=N*X,A.y=-L*n+p,A.z=N*$,d.push(A.x,A.y,A.z),w.set(X,g,$).normalize(),u.push(w.x,w.y,w.z),m.push(q,1-L),U.push(y++)}S.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let L=S[U][b],N=S[U+1][b],O=S[U+1][b+1],q=S[U][b+1];(e>0||U!==0)&&(h.push(L,N,q),T+=3),(t>0||U!==r-1)&&(h.push(N,O,q),T+=3)}c.addGroup(f,T,0),f+=T}function R(w){let A=y,T=new Ie,g=new F,b=0,U=w===!0?e:t,L=w===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*L,0),u.push(0,L,0),m.push(.5,.5),y++;let N=y;for(let O=0;O<=s;O++){let P=O/s*l+o,X=Math.cos(P),$=Math.sin(P);g.x=U*$,g.y=p*L,g.z=U*X,d.push(g.x,g.y,g.z),u.push(0,L,0),T.x=X*.5+.5,T.y=$*.5*L+.5,m.push(T.x,T.y),y++}for(let O=0;O<s;O++){let q=A+O,P=N+O;w===!0?h.push(P,P+1,q):h.push(P+1,P,q),b+=3}c.addGroup(f,b,w===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Zs=class i extends Sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,m=[],y=[],S=[],p=[];for(let f=0;f<h;f++){let M=f*u-a;for(let R=0;R<c;R++){let w=R*d-r;y.push(w,-M,0),S.push(0,0,1),p.push(R/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let R=M+c*f,w=M+c*(f+1),A=M+1+c*(f+1),T=M+1+c*f;m.push(R,w,T),m.push(w,A,T)}this.setIndex(m),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var hs=class i extends Sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,m=[],y=[],S=[],p=[];for(let f=0;f<=n;f++){let M=[],R=f/n,w=a+R*o,A=e*Math.cos(w),T=Math.sqrt(e*e-A*A),g=0;f===0&&a===0?g=.5/t:f===n&&l===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){let U=b/t,L=s+U*r;d.x=-T*Math.cos(L),d.y=A,d.z=T*Math.sin(L),y.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),p.push(U+g,1-R),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let R=h[f][M+1],w=h[f][M],A=h[f+1][M],T=h[f+1][M+1];(f!==0||a>0)&&m.push(R,w,T),(f!==n-1||l<Math.PI)&&m.push(w,A,T)}this.setIndex(m),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Hc(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Li(i[t]);for(let s in n)e[s]=n[s]}return e}function Hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ol(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Uh={clone:Li,merge:kt},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},la=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},us=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ca=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qo,endingEnd:Qo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:r=e,o=2*t-n;break;case tl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:a=e,l=2*n-t;break;case tl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,y=(n-t)/(s-t),S=y*y,p=S*y,f=-u*p+2*u*S-u*y,M=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*y+1,R=(-1-m)*p+(1.5+m)*S+.5*y,w=m*p-m*S;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+M*a[c+A]+R*a[l+A]+w*a[d+A];return r}},da=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},fa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let y=(n-t)/(s-t),S=1-y;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*y;return r}let u=o*2,m=e-1;for(let y=0;y!==o;++y){let S=a[c+y],p=a[l+y],f=m*u+y*2,M=d[f],R=d[f+1],w=e*u+y*2,A=h[w],T=h[w+1],g=Ud(n,t,M,A,s);r[y]=Fh(g,S,R,T,p)}return r}};function Fh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Nd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ud(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Fh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Nd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Gr(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case Wr:t=this.InterpolantFactoryMethodSmooth;break;case jo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Wr;case this.InterpolantFactoryMethodBezier:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Gr(this.settings)&&(Vc(this.settings.inTangents,e),Vc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Gr(this.settings)&&(Wc(this.settings.inTangents,e),Wc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ju(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let y=0;y!==n;++y){let S=t[d+y];if(S!==t[u+y]||S!==t[m+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Gr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Wc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=ta;var ci=class extends rn{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ds;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="number";var _a=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},$s=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends rn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ds;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};ya.prototype.ValueTypeName="vector";var xa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],y=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Oh=new xa,va=class{constructor(e){this.manager=e!==void 0?e:Oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},js=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jo=new at,Xc=new F,Yc=new F,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oi,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===es||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hr=new F,Vr=new nn,Rn=new F,Qs=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hr,Vr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hr,Vr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new F,qc=new Ie,Kc=new Ie,Ht=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Kc),t.subVectors(Kc,qc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var er=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nl=class extends ba{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new nl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $i=-90,Ji=1,fs=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht($i,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Ht($i,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Ht($i,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Ht($i,Ji,e,t);o.layers=this.layers,this.add(o);let l=new Ht($i,Ji,e,t);l.layers=this.layers,this.add(l);let c=new Ht($i,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Sa=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var kl="\\[\\]\\.:\\/",Fd=new RegExp("["+kl+"]","g"),Bl="[^"+kl+"]",Od="[^"+kl.replace("\\.","")+"]",kd=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Bd=/(WCOD+)?/.source.replace("WCOD",Od),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Hd=new RegExp("^"+kd+Bd+zd+Gd+"$"),Vd=["material","materials","bones","map"],il=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fd,"")}static parseTrackName(e){let t=Hd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=il;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x0=new Float32Array(1);var Zc=new at,tr=class{constructor(e,t,n=0,s=1/0){this.ray=new Ai(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(e,t=!0,n=[]){return sl(e,this,n,t),n.sort($c),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sl(e[s],this,n,t);return n.sort($c),n}};function $c(i,e){return i.distance-e.distance}function sl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)sl(r[a],e,t,!0)}}var ps=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var nr=class extends bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zl(i,e,t,n){let s=Wd(n);switch(t){case wl:return i*e;case Tl:return i*e/s.components*s.byteLength;case Ca:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case Pa:return i*e*2/s.components*s.byteLength;case El:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Ia:return i*e*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(e,8)/4;case La:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Fa:case Oa:case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case hr:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case no:case io:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ro:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ur:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wd(i){switch(i){case $t:case vl:return{byteLength:1,components:1};case ys:case bl:case En:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case Mn:case Ta:case wn:return{byteLength:4,components:1};case Sl:case Ml:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ru(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,y)=>m.start-y.start);let u=0;for(let m=1;m<d.length;m++){let y=d[u],S=d[m];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++u,d[u]=S)}d.length=u+1;for(let m=0,y=d.length;m<y;m++){let S=d[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`uniform sampler2D dfgLUT;
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
}`,Yf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
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
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform float backgroundBlurriness;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,vm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:qd,alphahash_pars_fragment:Kd,alphamap_fragment:Zd,alphamap_pars_fragment:$d,alphatest_fragment:Jd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,defaultnormal_vertex:yf,displacementmap_pars_vertex:xf,displacementmap_vertex:vf,emissivemap_fragment:bf,emissivemap_pars_fragment:Sf,colorspace_fragment:Mf,colorspace_pars_fragment:wf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Pf,fog_pars_vertex:If,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:kf,lights_toon_fragment:zf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:Yf,lights_fragment_maps:qf,lights_fragment_end:Kf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:vp,opaque_fragment:bp,packing:Sp,premultiplied_alpha_fragment:Mp,project_vertex:wp,dithering_fragment:Ep,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:kp,tonemapping_fragment:Bp,tonemapping_pars_fragment:zp,transmission_fragment:Gp,transmission_pars_fragment:Hp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:Yp,background_vert:qp,background_frag:Kp,backgroundCube_vert:Zp,backgroundCube_frag:$p,cube_vert:Jp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distance_vert:tm,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:ym,meshtoon_vert:xm,meshtoon_frag:vm,points_vert:bm,points_frag:Sm,shadow_vert:Mm,shadow_frag:wm,sprite_vert:Em,sprite_frag:Tm},be={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Un={basic:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:kt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:kt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:kt([be.points,be.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:kt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:kt([be.common,be.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:kt([be.sprite,be.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:kt([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:kt([be.lights,be.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Un.physical={uniforms:kt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var ho={r:0,b:0,g:0},Am=new at,au=new Fe;au.set(-1,0,0,0,1,0,0,0,1);function Rm(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let w=M.backgroundBlurriness>0;R=e.get(R,w)}return R}function y(M){let R=!1,w=m(M);w===null?p(a,o):w&&w.isColor&&(p(w,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,R){let w=m(R);w&&w.isCubeTexture?(c===void 0&&(c=new Zt(new cs(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Li(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(R.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(au),c.material.toneMapped=Ke.getTransfer(w.colorSpace)!==nt,(h!==w||d!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Zt(new Zs(2,2),new Ln({name:"BackgroundMaterial",uniforms:Li(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,R){M.getRGB(ho,Ol(i)),t.buffers.color.setClear(ho.r,ho.g,ho.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:y,addToRenderList:S,dispose:f}}function Cm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,q,P,X){let $=!1,V=d(N,P,q,O);r!==V&&(r=V,c(r.object)),$=m(N,P,q,X),$&&y(N,P,q,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,w(N,O,q,P),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,q,P){let X=P.wireframe===!0,$=n[O.id];$===void 0&&($={},n[O.id]=$);let V=N.isInstancedMesh===!0?N.id:0,ne=$[V];ne===void 0&&(ne={},$[V]=ne);let K=ne[q.id];K===void 0&&(K={},ne[q.id]=K);let G=K[X];return G===void 0&&(G=u(l()),K[X]=G),G}function u(N){let O=[],q=[],P=[];for(let X=0;X<t;X++)O[X]=0,q[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:P,object:N,attributes:{},index:null}}function m(N,O,q,P){let X=r.attributes,$=O.attributes,V=0,ne=q.getAttributes();for(let K in ne)if(ne[K].location>=0){let j=X[K],oe=$[K];if(oe===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function y(N,O,q,P){let X={},$=O.attributes,V=0,ne=q.getAttributes();for(let K in ne)if(ne[K].location>=0){let j=$[K];j===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),X[K]=oe,V++}r.attributes=X,r.attributesNum=V,r.index=P}function S(){let N=r.newAttributes;for(let O=0,q=N.length;O<q;O++)N[O]=0}function p(N){f(N,0)}function f(N,O){let q=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;q[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),X[N]!==O&&(i.vertexAttribDivisor(N,O),X[N]=O)}function M(){let N=r.newAttributes,O=r.enabledAttributes;for(let q=0,P=O.length;q<P;q++)O[q]!==N[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function R(N,O,q,P,X,$,V){V===!0?i.vertexAttribIPointer(N,O,q,X,$):i.vertexAttribPointer(N,O,q,P,X,$)}function w(N,O,q,P){S();let X=P.attributes,$=q.getAttributes(),V=O.defaultAttributeValues;for(let ne in $){let K=$[ne];if(K.location>=0){let G=X[ne];if(G===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){let j=G.normalized,oe=G.itemSize,de=e.get(G);if(de===void 0)continue;let Y=de.buffer,ae=de.type,ge=de.bytesPerElement,we=ae===i.INT||ae===i.UNSIGNED_INT||G.gpuType===Ta;if(G.isInterleavedBufferAttribute){let ce=G.data,Re=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,Xe=G.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Ce=0;Ce<K.locationSize;Ce++)f(K.location+Ce,ce.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<K.locationSize;Ce++)p(K.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Ce=0;Ce<K.locationSize;Ce++)R(K.location+Ce,oe/K.locationSize,ae,j,Re*ge,(Xe+oe/K.locationSize*Ce)*ge,we)}else{if(G.isInstancedBufferAttribute){for(let ce=0;ce<K.locationSize;ce++)f(K.location+ce,G.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ce=0;ce<K.locationSize;ce++)p(K.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ce=0;ce<K.locationSize;ce++)R(K.location+ce,oe/K.locationSize,ae,j,oe*ge,oe/K.locationSize*ce*ge,we)}}else if(V!==void 0){let j=V[ne];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(K.location,j);break;case 3:i.vertexAttrib3fv(K.location,j);break;case 4:i.vertexAttrib4fv(K.location,j);break;default:i.vertexAttrib1fv(K.location,j)}}}}M()}function A(){U();for(let N in n){let O=n[N];for(let q in O){let P=O[q];for(let X in P){let $=P[X];for(let V in $)h($[V].object),delete $[V];delete P[X]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let q in O){let P=O[q];for(let X in P){let $=P[X];for(let V in $)h($[V].object),delete $[V];delete P[X]}}delete n[N.id]}function g(N){for(let O in n){let q=n[O];for(let P in q){let X=q[P];if(X[N.id]===void 0)continue;let $=X[N.id];for(let V in $)h($[V].object),delete $[V];delete X[N.id]}}}function b(N){for(let O in n){let q=n[O],P=N.isInstancedMesh===!0?N.id:0,X=q[P];if(X!==void 0){for(let $ in X){let V=X[$];for(let ne in V)h(V[ne].object),delete V[ne];delete X[$]}delete q[P],Object.keys(q).length===0&&delete n[O]}}}function U(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function Pm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Tn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==$t&&g!==wn&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:w,maxSamples:A,samples:T}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new tn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let y=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||y===null||y.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,R=M*4,w=f.clippingState||null;l.value=w,w=h(y,u,R,m);for(let A=0;A!==R;++A)w[A]=t[A];f.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,y){let S=d!==null?d.length:0,p=null;if(S!==0){if(p=l.value,y!==!0||p===null){let f=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let R=0,w=m;R!==S;++R,w+=4)a.copy(d[R]).applyMatrix4(M,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var pr=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ri});r.uniforms.tEquirect.value=t;let a=new Zt(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Vt),new fs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},kh=256,Dm=3,Nm=20,ou=256,lu=16,Um=3,Fm=new F,Om=new ze,fo=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fs(1,10,null),this._boxMesh=new Zt(new cs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Fm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,y=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(Om));let p=new fs(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=y,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kh,Dl(e))}_fromTexture(e,t){e.mapping===Pi||e.mapping===_s?this._setSize(e.image.length===0?kh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Bh(e,!1,!1),n=Math.log2(e)-Dm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Pi||e.mapping===_s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=km(),this._integrationMaterial=Bm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Um)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ou*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=zm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Bh(i,e,t){return new pr(i,{minFilter:Zn,generateMipmaps:e,type:En,colorSpace:Ns,depthBuffer:t})}function mr(i,e,t){return new Ln({name:i,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Xt,blending:Ri,depthTest:!1,depthWrite:!1})}function km(){return mr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ou}u

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
	`)}function Bm(){return mr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lu}},`

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
	`)}function zm(){return mr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nm}
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
	`)}function zh(){return mr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gh(){return mr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ma||m===wa)if(e.has(u)){let y=e.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let S=new pr(y.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,y=m===Ma||m===wa,S=m===Pi||m===_s;if(y||S){let p=t.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new fo(i)),p=y?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return y&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new fo(i)),p=y?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Ma?u.mapping=Pi:m===wa&&(u.mapping=_s),u}function l(u){let m=0,y=6;for(let S=0;S<y;S++)u[S]!==void 0&&m++;return m===y}function c(u){let m=u.target;m.removeEventListener("dispose",c);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Hm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(y=>delete s[y]);function o(y){l(y.target)}function l(y){y.index!==null&&e.remove(y.index);for(let p in y.attributes)e.remove(y.attributes[p]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let S=r.get(y);S&&(e.remove(S),r.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(y,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(y){let S=y.attributes;for(let p in S)e.update(S[p],i.ARRAY_BUFFER)}function d(y){let S=y.index,p=y.attributes.position,f=0;if(p===void 0)return;let M=S!==null?S.array.length:p.array.length/3-1,R=p.count>=65535?Gs:zs,w=new R(Math.ceil(M/3)*6,1),A=w.array;if(S!==null){let g=S.array;f=S.version;for(let b=0,U=0;b<M;b+=3){let L=g[b+0],N=g[b+1],O=g[b+2];A[U++]=L,A[U++]=N,A[U++]=N,A[U++]=O,A[U++]=O,A[U++]=L}}else{f=p.version;for(let g=0,b=0;g<M;g+=3){let U=g+0,L=g+1,N=g+2;A[b++]=U,A[b++]=L,A[b++]=L,A[b++]=N,A[b++]=N,A[b++]=U}}w.version=f;let T=r.get(y);T&&e.remove(T),r.set(y,w)}function u(y){let S=r.get(y);if(S){let p=y.index;p!==null&&S.version<p.version&&d(y)}else d(y);return r.get(y)}function m(){for(let y in s){let S=s[y].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function Wm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),t.update(u,n,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;m===!0&&(R=1),y===!0&&(R=2),S===!0&&(R=3);let w=o.attributes.position.count*R,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*A*4*d),g=new ks(T,w,A,d);g.type=wn,g.needsUpdate=!0;let b=R*4;for(let L=0;L<d;L++){let N=p[L],O=f[L],q=M[L],P=w*A*4*L;for(let X=0;X<N.count;X++){let $=X*b;m===!0&&(s.fromBufferAttribute(N,X),T[P+$+0]=s.x,T[P+$+1]=s.y,T[P+$+2]=s.z,T[P+$+3]=0),y===!0&&(s.fromBufferAttribute(O,X),T[P+$+4]=s.x,T[P+$+5]=s.y,T[P+$+6]=s.z,T[P+$+7]=0),S===!0&&(s.fromBufferAttribute(q,X),T[P+$+8]=s.x,T[P+$+9]=s.y,T[P+$+10]=s.z,T[P+$+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Ie(w,A)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function qm(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Km={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[sr]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function Zm(i,e,t,n,s,r){let a=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Sn;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let d=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Zt(h,d),m=new er(-1,1,1,-1,0,1),y=null,S=null,p=!1,f,M=null,R=[],w=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let g=0;g<R.length;g++){let b=R[g];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){R=A,w=R.length>0&&R[0].isRenderPass===!0;let T=a.width,g=a.height;R.length>0&&o===null&&(o=new sn(T,g,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new sn(T,g,{type:En,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&R.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Kn(T,g),r===!0&&(c.format=$n,c.type=Ii)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<R.length;U++){let L=R[U];L.setSize&&L.setSize(T,g),b&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===Dn&&R.length===0)return!1;if(M=T,T!==null){let g=T.width,b=T.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return w===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Dn,!0},this.hasRenderPass=function(){return w},this.end=function(A,T){A.toneMapping=f,p=!0;let g=a,b=o;for(let U=0;U<R.length;U++){let L=R[U];L.enabled!==!1&&(L.render(A,b,g,T),L.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(y!==A.outputColorSpace||S!==A.toneMapping){y=A.outputColorSpace,S=A.toneMapping,d.defines={},Ke.getTransfer(y)===nt&&(d.defines.SRGB_TRANSFER="");let U=Km[S];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(M),A.render(u,m),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var cu=new Wt,hu=new Kn(1,1),uu=new Ys(1),du=new ks,fu=new sa,pu=new Ws,Hh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),Yh=new Float32Array(4);function vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mo(i,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),St(t,n)}}function tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),St(t,n)}}function ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),St(t,n)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function go(i){return i.version===0&&(i.compareFunction=Cl,i.needsUpdate=!0),i}function ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=go(hu):r=cu,t.setTexture2D(e||r,s)}function dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fu,s)}function fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=go(uu):r=pu,t.setTextureCube(e||r,s)}function pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||du,s)}function mg(i){switch(i){case 5126:return $m;case 35664:return Jm;case 35665:return jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,e){i.uniform1fv(this.addr,e)}function _g(i,e){let t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function yg(i,e){let t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function xg(i,e){let t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){let t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bg(i,e){let t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sg(i,e){let t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mg(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Eg(i,e){i.uniform3iv(this.addr,e)}function Tg(i,e){i.uniform4iv(this.addr,e)}function Ag(i,e){i.uniform1uiv(this.addr,e)}function Rg(i,e){i.uniform2uiv(this.addr,e)}function Cg(i,e){i.uniform3uiv(this.addr,e)}function Pg(i,e){i.uniform4uiv(this.addr,e)}function Ig(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=go(hu):a=cu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Lg(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fu,r[a])}function Dg(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=go(uu):a=pu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Ng(i,e,t){let n=this.cache,s=e.length,r=mo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||du,r[a])}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return yg;case 35666:return xg;case 35674:return vg;case 35675:return bg;case 35676:return Sg;case 5124:case 35670:return Mg;case 35667:case 35671:return wg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}var Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}},Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function Fg(i,e,t){let n=i.name,s=n.length;for(Gl.lastIndex=0;;){let r=Gl.exec(n),a=Gl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qh(t,c===void 0?new Vl(o,i,e):new Wl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Xl(o),qh(t,d)),t=d}}}var xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Fg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Kh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Og=37297,kg=0;function Bg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zh=new Fe;function zg(i){Ke._getMatrix(Zh,Ke.workingColorSpace,i);let e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Us:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $h(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bg(i.getShaderSource(e),o)}else return r}function Gg(i,e){let t=zg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Hg={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[sr]:"ACESFilmic",[_l]:"AgX",[yl]:"Neutral",[gl]:"Custom"};function Vg(i,e){let t=Hg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uo=new F;function Wg(){Ke.getLuminanceCoefficients(uo);let i=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Yg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fr(i){return i!==""}function Jh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(Kg,Zg)}function Zg(i,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yl(t)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace($g,Jg)}function Jg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jg={[ir]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function Qg(i){return jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[_s]:"ENVMAP_MODE_REFRACTION"};function t_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[dl]:"ENVMAP_BLENDING_MULTIPLY",[yh]:"ENVMAP_BLENDING_MIX",[xh]:"ENVMAP_BLENDING_ADD"};function i_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n_[i.combine]||"ENVMAP_BLENDING_NONE"}function s_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Qg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=t_(t),d=i_(t),u=Xg(t),m=Yg(r),y=s.createProgram(),S,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fr).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(S=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?He.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Gg("linearToOutputTexel",t.outputColorSpace),Wg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Yl(a),a=Jh(a,t),a=jh(a,t),o=Yl(o),o=Jh(o,t),o=jh(o,t),a=Qh(a),o=Qh(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=f+S+a,R=f+p+o,w=Kh(s,s.VERTEX_SHADER,M),A=Kh(s,s.FRAGMENT_SHADER,R);s.attachShader(y,w),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(A)||"",P=N.trim(),X=O.trim(),$=q.trim(),V=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,w,A);else{let K=$h(s,w,"vertex"),G=$h(s,A,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+K+`
`+G)}else P!==""?Ne("WebGLProgram: Program Info Log:",P):(X===""||$==="")&&(ne=!1);ne&&(L.diagnostics={runnable:V,programLog:P,vertexShader:{log:X,prefix:S},fragmentShader:{log:$,prefix:p}})}s.deleteShader(w),s.deleteShader(A),g=new xs(s,y),b=qg(s,y)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(y,Og)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}var r_=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}};function a_(i){return i===pi||i===hr||i===ur}function o_(i,e,t,n,s,r){let a=new ss,o=new ql,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,U,L,N,O){let q=L.fog,P=N.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||X,$),ne=u[g.type],K=n.precision;g.precision!==null&&(K=n.getMaxPrecision(g.precision),K!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",K,"instead."));let G=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=G!==void 0?G.length:0,oe=0;P.morphAttributes.position!==void 0&&(oe=1),P.morphAttributes.normal!==void 0&&(oe=2),P.morphAttributes.color!==void 0&&(oe=3);let de,Y,ae,ge;if(ne){let ve=Un[ne];de=ve.vertexShader,Y=ve.fragmentShader}else{de=g.vertexShader,Y=g.fragmentShader;let ve=o.getVertexShaderStage(g),it=o.getFragmentShaderStage(g);o.update(g,ve,it),ae=ve.id,ge=it.id}let we=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Re=N.isInstancedMesh===!0,Xe=N.isBatchedMesh===!0,Ce=!!g.map,$e=!!g.matcap,tt=!!V,Ve=tt&&V.isPMREMTexture===!0,yt=!!g.aoMap,xt=!!g.lightMap,Kt=!!g.bumpMap&&g.wireframe===!1,ft=!!g.normalMap,An=!!g.displacementMap,wt=!!g.emissiveMap,on=!!g.metalnessMap,ln=!!g.roughnessMap,cn=g.anisotropy>0,D=g.clearcoat>0,hn=g.diffuseRoughness>0,lt=g.dispersion>0,ct=g.retroreflectivity>0,xe=g.iridescence>0,vt=g.sheen>0,De=g.transmission>0,Oe=cn&&!!g.anisotropyMap,E=D&&!!g.clearcoatMap,_=D&&!!g.clearcoatNormalMap,B=D&&!!g.clearcoatRoughnessMap,ie=hn&&!!g.diffuseRoughnessMap,te=xe&&!!g.iridescenceMap,he=xe&&!!g.iridescenceThicknessMap,_e=vt&&!!g.sheenColorMap,J=vt&&!!g.sheenRoughnessMap,Q=!!g.specularMap,fe=!!g.specularColorMap,C=!!g.specularIntensityMap,ee=De&&!!g.transmissionMap,Z=De&&!!g.thicknessMap,pe=!!g.gradientMap,le=!!g.alphaMap,ue=g.alphaTest>0,Pe=!!g.alphaHash,Ge=!!g.extensions,se=Dn;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(se=i.toneMapping);let Le=Ve?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Be={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:de,fragmentShader:Y,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:K,batching:Xe,batchingColor:Xe&&N._colorsTexture!==null,instancing:Re,instancingColor:Re&&N.instanceColor!==null,instancingMorph:Re&&N.morphTexture!==null,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:$e,envMap:tt,envMapMode:tt&&V.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Le.length-1:null,envMapSize:Ve?Le[0].width:null,aoMap:yt,lightMap:xt,bumpMap:Kt,normalMap:ft,displacementMap:An,emissiveMap:wt,normalMapObjectSpace:ft&&g.normalMapType===Sh,normalMapTangentSpace:ft&&g.normalMapType===lo,packedNormalMap:ft&&g.normalMapType===lo&&a_(g.normalMap.format),metalnessMap:on,roughnessMap:ln,anisotropy:cn,anisotropyMap:Oe,clearcoat:D,clearcoatMap:E,clearcoatNormalMap:_,clearcoatRoughnessMap:B,diffuseRoughness:hn,diffuseRoughnessMap:ie,dispersion:lt,retroreflection:ct,iridescence:xe,iridescenceMap:te,iridescenceThicknessMap:he,sheen:vt,sheenColorMap:_e,sheenRoughnessMap:J,specularMap:Q,specularColorMap:fe,specularIntensityMap:C,transmission:De,transmissionMap:ee,thicknessMap:Z,gradientMap:pe,opaque:g.transparent===!1&&g.blending===gs&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Pe,combine:g.combine,mapUv:Ce&&m(g.map.channel),aoMapUv:yt&&m(g.aoMap.channel),lightMapUv:xt&&m(g.lightMap.channel),bumpMapUv:Kt&&m(g.bumpMap.channel),normalMapUv:ft&&m(g.normalMap.channel),displacementMapUv:An&&m(g.displacementMap.channel),emissiveMapUv:wt&&m(g.emissiveMap.channel),metalnessMapUv:on&&m(g.metalnessMap.channel),roughnessMapUv:ln&&m(g.roughnessMap.channel),anisotropyMapUv:Oe&&m(g.anisotropyMap.channel),clearcoatMapUv:E&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(g.sheenRoughnessMap.channel),specularMapUv:Q&&m(g.specularMap.channel),specularColorMapUv:fe&&m(g.specularColorMap.channel),specularIntensityMapUv:C&&m(g.specularIntensityMap.channel),transmissionMapUv:ee&&m(g.transmissionMap.channel),thicknessMapUv:Z&&m(g.thicknessMap.channel),alphaMapUv:le&&m(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ft||cn),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ce||le),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Ke.getTransfer(g.map.colorSpace)===nt,decodeVideoTextureEmissive:wt&&g.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(g.emissiveMap.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===fn,flipSided:g.side===Xt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&g.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function S(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)b.push(U),b.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(p(b,g),f(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function f(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let b=u[g.type],U;if(b){let L=Un[b];U=Uh.clone(L.uniforms)}else U=g.uniforms;return U}function R(g,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new s_(i,b,g,s),c.push(U),h.set(b,U)),U}function w(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:T}}function l_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function c_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,y,S,p,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:y,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=y,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=p,M.group=f),e++,M}function l(u,m,y,S,p,f,M){M.reversedDepth===!0&&(p=-p);let R=o(u,m,y,S,p,f);y.transmission>0?n.push(R):y.transparent===!0?s.push(R):t.push(R)}function c(u,m,y,S,p,f){let M=o(u,m,y,S,p,f);y.transmission>0?n.unshift(M):y.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,m){t.length>1&&t.sort(u||c_),n.length>1&&n.sort(m||tu),s.length>1&&s.sort(m||tu)}function d(){for(let u=e,m=i.length;u<m;u++){let y=i[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function h_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new nu,i.set(n,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function u_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ze};break;case"SpotLight":t={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function d_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var f_=0;function p_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m_(i){let e=new u_,t=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new at,a=new at;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,y=0,S=0,p=0,f=0,M=0,R=0,w=0,A=0,T=0,g=0,b=0,U=0,L=0;c.sort(p_);for(let O=0,q=c.length;O<q;O++){let P=c[O],X=P.color,$=P.intensity,V=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===pi?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=X.r*$,d+=X.g*$,u+=X.b*$;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],$);L++}else if(P.isSunLight){let K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[y]=j,n.sunShadowMap[y]=ne;let oe=G.getViewportCount();for(let de=0;de<oe;de++)n.sunShadowMatrix[S+de]=G.getMatrix(de),n.sunShadowCascade[S+de]=G._cascadeData[de];S+=oe,y++}n.sun[m]=K,m++}else if(P.isDirectionalLight){let K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=K,p++}else if(P.isSpotLight){let K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(X).multiplyScalar($),K.distance=V,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[M]=K;let G=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,G.updateMatrices(P),P.castShadow&&U++),n.spotLightMatrix[M]=G.matrix,P.castShadow){let j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=ne,g++}M++}else if(P.isRectAreaLight){let K=e.get(P);K.color.copy(X).multiplyScalar($),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[R]=K,R++}else if(P.isPointLight){let K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){let G=P.shadow,j=t.get(P);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=ne,n.pointShadowMatrix[f]=P.shadow.matrix,T++}n.point[f]=K,f++}else if(P.isHemisphereLight){let K=e.get(P);K.skyColor.copy(P.color).multiplyScalar($),K.groundColor.copy(P.groundColor).multiplyScalar($),n.hemi[w]=K,w++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==f||N.spotLength!==M||N.rectAreaLength!==R||N.hemiLength!==w||N.numSunShadows!==y||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==b||N.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=M,n.rectArea.length=R,n.point.length=f,n.hemi.length=w,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,N.sunLength=m,N.directionalLength=p,N.pointLength=f,N.spotLength=M,N.rectAreaLength=R,N.hemiLength=w,N.numSunShadows=y,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=b,N.numLightProbes=L,n.version=f_++)}function l(c,h){let d=0,u=0,m=0,y=0,S=0,p=0,f=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let w=c[M];if(w.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(f),d++}else if(w.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),u++}else if(w.isSpotLight){let A=n.spot[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),y++}else if(w.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(w.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function iu(i){let e=new m_(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function g_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new iu(i),e.set(s,[o])):r>=a.length?(o=new iu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,x_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],v_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],su=new at,dr=new F,Hl=new F;function b_(i,e,t){let n=new oi,s=new Ie,r=new Ie,a=new ht,o=new ca,l=new ha,c={},h=t.maxTextureSize,d={[fi]:Xt,[Xt]:fi,[fn]:fn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:__,fragmentShader:y_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let y=new Sn;y.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Zt(y,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let f=this.type;this.render=function(T,g,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Qc&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let U=i.getRenderTarget(),L=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ri),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=f!==this.type;q&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=T.length;P<X;P++){let $=T[P],V=$.shadow;if(V===void 0){Ne("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();s.multiply(ne),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ms){if($.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new sn(s.x,s.y,{format:pi,type:En,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Kn(s.x,s.y,wn),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Xn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct}else $.isPointLight?(V.map=new pr(s.x),V.map.depthTexture=new Ys(s.x,Mn)):(V.map=new sn(s.x,s.y),V.map.depthTexture=new Kn(s.x,s.y,Mn)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Xn,this.type===ir?(V.map.depthTexture.compareFunction=K?Rl:Al,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let G=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,b);let j=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let oe=0;oe<G;oe++){let de=V.getCamera(oe);if($.isPointLight){let Y=V.camera,ae=V.matrix,ge=$.distance||Y.far;ge!==Y.far&&(Y.far=ge,Y.updateProjectionMatrix()),dr.setFromMatrixPosition($.matrixWorld),Y.position.copy(dr),Hl.copy(Y.position),Hl.add(x_[oe]),Y.up.copy(v_[oe]),Y.lookAt(Hl),Y.updateMatrixWorld(),ae.makeTranslation(-dr.x,-dr.y,-dr.z),su.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(su,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(V.map),i.clear());let Y=V.getViewport(oe);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),O.viewport(a)}n=V.getFrustum(oe),w(g,b,de,$,j,this.type)}V.isPointLightShadow!==!0&&this.type===ms&&M(V,b),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(U,L,N)};function M(T,g){let b=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new sn(s.x,s.y,{format:pi,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,b,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,b,m,S,null)}function R(T,g,b,U){let L=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)L=N;else if(L=b.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=L.uuid,q=g.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let X=P[q];X===void 0&&(X=L.clone(),P[q]=X,g.addEventListener("dispose",A)),L=X}if(L.visible=g.visible,L.wireframe=g.wireframe,U===ms?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:d[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let O=i.properties.get(L);O.light=b}return L}function w(T,g,b,U,L,N){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===ms)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=e.update(T),X=T.material;if(Array.isArray(X)){let $=P.groups;for(let V=0,ne=$.length;V<ne;V++){let K=$[V],G=X[K.materialIndex];if(G&&G.visible){let j=R(T,G,U,N);T.onBeforeShadow(i,T,g,b,P,j,K),i.renderBufferDirect(b,null,P,j,T,K),T.onAfterShadow(i,T,g,b,P,j,K)}}}else if(X.visible){let $=R(T,X,U,N);T.onBeforeShadow(i,T,g,b,P,$,null),i.renderBufferDirect(b,null,P,$,T,null),T.onAfterShadow(i,T,g,b,P,$,null)}}let q=T.children;for(let P=0,X=q.length;P<X;P++)w(q[P],g,b,U,L,N)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let U=c[b],L=T.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function S_(i,e){function t(){let C=!1,ee=new ht,Z=null,pe=new ht(0,0,0,0);return{setMask:function(le){Z!==le&&!C&&(i.colorMask(le,le,le,le),Z=le)},setLocked:function(le){C=le},setClear:function(le,ue,Pe,Ge,se){se===!0&&(le*=Ge,ue*=Ge,Pe*=Ge),ee.set(le,ue,Pe,Ge),pe.equals(ee)===!1&&(i.clearColor(le,ue,Pe,Ge),pe.copy(ee))},reset:function(){C=!1,Z=null,pe.set(-1,0,0,0)}}}function n(){let C=!1,ee=!1,Z=null,pe=null,le=null;return{setReversed:function(ue){if(ee!==ue){let Pe=e.get("EXT_clip_control");ue?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ee=ue;let Ge=le;le=null,this.setClear(Ge)}},getReversed:function(){return ee},setTest:function(ue){ue?ce(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!C&&(i.depthMask(ue),Z=ue)},setFunc:function(ue){if(ee&&(ue=Lh[ue]),pe!==ue){switch(ue){case Yr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case $r:i.depthFunc(i.GEQUAL);break;case Jr:i.depthFunc(i.GREATER);break;case jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ue}},setLocked:function(ue){C=ue},setClear:function(ue){le!==ue&&(le=ue,ee&&(ue=1-ue),i.clearDepth(ue))},reset:function(){C=!1,Z=null,pe=null,le=null,ee=!1}}}function s(){let C=!1,ee=null,Z=null,pe=null,le=null,ue=null,Pe=null,Ge=null,se=null;return{setTest:function(Le){C||(Le?ce(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!C&&(i.stencilMask(Le),ee=Le)},setFunc:function(Le,Be,ve){(Z!==Le||pe!==Be||le!==ve)&&(i.stencilFunc(Le,Be,ve),Z=Le,pe=Be,le=ve)},setOp:function(Le,Be,ve){(ue!==Le||Pe!==Be||Ge!==ve)&&(i.stencilOp(Le,Be,ve),ue=Le,Pe=Be,Ge=ve)},setLocked:function(Le){C=Le},setClear:function(Le){se!==Le&&(i.clearStencil(Le),se=Le)},reset:function(){C=!1,ee=null,Z=null,pe=null,le=null,ue=null,Pe=null,Ge=null,se=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},m=new WeakMap,y=[],S=null,p=!1,f=null,M=null,R=null,w=null,A=null,T=null,g=null,b=new ze(0,0,0),U=0,L=!1,N=null,O=null,q=null,P=null,X=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=ne>=1):K.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=ne>=2);let G=null,j={},oe=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Y=new ht().fromArray(oe),ae=new ht().fromArray(de);function ge(C,ee,Z,pe){let le=new Uint8Array(4),ue=i.createTexture();i.bindTexture(C,ue),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Z;Pe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ee+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ue}let we={};we[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Qi),Kt(!1),ft(al),ce(i.CULL_FACE),yt(Ri);function ce(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Re(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Xe(C,ee){return u[C]!==ee?(i.bindFramebuffer(C,ee),u[C]=ee,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ce(C,ee){let Z=y,pe=!1;if(C){Z=m.get(ee),Z===void 0&&(Z=[],m.set(ee,Z));let le=C.textures;if(Z.length!==le.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Pe=le.length;ue<Pe;ue++)Z[ue]=i.COLOR_ATTACHMENT0+ue;Z.length=le.length,pe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Z)}function $e(C){return S!==C?(i.useProgram(C),S=C,!0):!1}let tt={[Ci]:i.FUNC_ADD,[th]:i.FUNC_SUBTRACT,[nh]:i.FUNC_REVERSE_SUBTRACT};tt[ih]=i.MIN,tt[sh]=i.MAX;let Ve={[rh]:i.ZERO,[ah]:i.ONE,[oh]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[fh]:i.SRC_ALPHA_SATURATE,[uh]:i.DST_COLOR,[ch]:i.DST_ALPHA,[lh]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[dh]:i.ONE_MINUS_DST_COLOR,[hh]:i.ONE_MINUS_DST_ALPHA,[ph]:i.CONSTANT_COLOR,[mh]:i.ONE_MINUS_CONSTANT_COLOR,[gh]:i.CONSTANT_ALPHA,[_h]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(C,ee,Z,pe,le,ue,Pe,Ge,se,Le){if(C===Ri){p===!0&&(Re(i.BLEND),p=!1);return}if(p===!1&&(ce(i.BLEND),p=!0),C!==eh){if(C!==f||Le!==L){if((M!==Ci||A!==Ci)&&(i.blendEquation(i.FUNC_ADD),M=Ci,A=Ci),Le)switch(C){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",C);break}else switch(C){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",C);break}R=null,w=null,T=null,g=null,b.set(0,0,0),U=0,f=C,L=Le}return}le=le||ee,ue=ue||Z,Pe=Pe||pe,(ee!==M||le!==A)&&(i.blendEquationSeparate(tt[ee],tt[le]),M=ee,A=le),(Z!==R||pe!==w||ue!==T||Pe!==g)&&(i.blendFuncSeparate(Ve[Z],Ve[pe],Ve[ue],Ve[Pe]),R=Z,w=pe,T=ue,g=Pe),(Ge.equals(b)===!1||se!==U)&&(i.blendColor(Ge.r,Ge.g,Ge.b,se),b.copy(Ge),U=se),f=C,L=!1}function xt(C,ee){C.side===fn?Re(i.CULL_FACE):ce(i.CULL_FACE);let Z=C.side===Xt;ee&&(Z=!Z),Kt(Z),C.blending===gs&&C.transparent===!1?yt(Ri):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let pe=C.stencilWrite;o.setTest(pe),pe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),wt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function ft(C){C!==Jc?(ce(i.CULL_FACE),C!==O&&(C===al?i.cullFace(i.BACK):C===jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),O=C}function An(C){C!==q&&(V&&i.lineWidth(C),q=C)}function wt(C,ee,Z){C?(ce(i.POLYGON_OFFSET_FILL),(P!==ee||X!==Z)&&(P=ee,X=Z,a.getReversed()&&(ee=-ee,Z=-Z),i.polygonOffset(ee,Z))):Re(i.POLYGON_OFFSET_FILL)}function on(C){C?ce(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function ln(C){C===void 0&&(C=i.TEXTURE0+$-1),G!==C&&(i.activeTexture(C),G=C)}function cn(C,ee,Z){Z===void 0&&(G===null?Z=i.TEXTURE0+$-1:Z=G);let pe=j[Z];pe===void 0&&(pe={type:void 0,texture:void 0},j[Z]=pe),(pe.type!==C||pe.texture!==ee)&&(G!==Z&&(i.activeTexture(Z),G=Z),i.bindTexture(C,ee||we[C]),pe.type=C,pe.texture=ee)}function D(){let C=j[G];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function hn(){try{i.compressedTexImage2D(...arguments)}catch(C){Ue("WebGLState:",C)}}function lt(){try{i.compressedTexImage3D(...arguments)}catch(C){Ue("WebGLState:",C)}}function ct(){try{i.texSubImage2D(...arguments)}catch(C){Ue("WebGLState:",C)}}function xe(){try{i.texSubImage3D(...arguments)}catch(C){Ue("WebGLState:",C)}}function vt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ue("WebGLState:",C)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ue("WebGLState:",C)}}function Oe(){try{i.texStorage2D(...arguments)}catch(C){Ue("WebGLState:",C)}}function E(){try{i.texStorage3D(...arguments)}catch(C){Ue("WebGLState:",C)}}function _(){try{i.texImage2D(...arguments)}catch(C){Ue("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Ue("WebGLState:",C)}}function ie(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function te(C,ee){d[C]!==ee&&(i.pixelStorei(C,ee),d[C]=ee)}function he(C){Y.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function _e(C){ae.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ae.copy(C))}function J(C,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let pe=Z.get(C);pe===void 0&&(pe=i.getUniformBlockIndex(ee,C.name),i.uniformBlockBinding(ee,pe,pe),Z.set(C,pe))}function Q(C,ee,Z){let le=c.get(ee).get(C);l[le]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,Z),l[le]=Z)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,j={},u={},l={},m=new WeakMap,y=[],S=null,p=!1,f=null,M=null,R=null,w=null,A=null,T=null,g=null,b=new ze(0,0,0),U=0,L=!1,N=null,O=null,q=null,P=null,X=null,Y.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Re,bindFramebuffer:Xe,drawBuffers:Ce,useProgram:$e,setBlending:yt,setMaterial:xt,setFlipSided:Kt,setCullFace:ft,setLineWidth:An,setPolygonOffset:wt,setScissorTest:on,activeTexture:ln,bindTexture:cn,unbindTexture:D,compressedTexImage2D:hn,compressedTexImage3D:lt,texImage2D:_,texImage3D:B,pixelStorei:te,getParameter:ie,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Oe,texStorage3D:E,texSubImage2D:ct,texSubImage3D:xe,compressedTexSubImage2D:vt,compressedTexSubImage3D:De,scissor:he,viewport:_e,reset:fe}}function M_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,d=new Set,u,m=new WeakMap,y=new Set,S=new FinalizationRegistry(E=>y.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,_){return p?new OffscreenCanvas(E,_):Fs("canvas")}function M(E,_,B){let ie=1,te=Oe(E);if((te.width>B||te.height>B)&&(ie=B/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let he=Math.floor(ie*te.width),_e=Math.floor(ie*te.height);u===void 0&&(u=f(he,_e));let J=_?f(he,_e):u;return J.width=he,J.height=_e,J.getContext("2d").drawImage(E,0,0,he,_e),Ne("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+he+"x"+_e+")."),J}else return"data"in E&&Ne("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function R(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,B,ie,te,he=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let _e;ie&&(_e=e.get("EXT_texture_norm16"),_e||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&_e&&(J=_e.R16_EXT),B===i.SHORT&&_e&&(J=_e.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),_===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&_e&&(J=_e.RG16_EXT),B===i.SHORT&&_e&&(J=_e.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&_e&&(J=_e.RGB16_EXT),B===i.SHORT&&_e&&(J=_e.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let Q=he?Us:Ke.getTransfer(te);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Q===nt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&_e&&(J=_e.RGBA16_EXT),B===i.SHORT&&_e&&(J=_e.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(E,_){let B;return E?_===null||_===Mn||_===Ii?B=i.DEPTH24_STENCIL8:_===wn?B=i.DEPTH32F_STENCIL8:_===ys&&(B=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mn||_===Ii?B=i.DEPTH_COMPONENT24:_===wn?B=i.DEPTH_COMPONENT32F:_===ys&&(B=i.DEPTH_COMPONENT16),B}function b(E,_){return R(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==Vt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function U(E){let _=new WeakRef(E);n.get(E).__ref=_,y.add(_),S.register(E,_,_)}function L(E){let _=n.get(E).__ref;_!==void 0&&(y.delete(_),S.unregister(_))}function N(E){q(E.target)}function O(E){P(E.target)}function q(E){E.removeEventListener("dispose",N),L(E),$(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function P(E){E.removeEventListener("dispose",O),L(E),ne(E)}function X(){for(let E of y){let _=E.deref();_!==void 0&&(_.isRenderTarget===!0?P(_):q(_))}y.clear(),d.clear()}function $(E){let _=n.get(E);if(_.__webglInit===void 0)return;let B=E.source,ie=m.get(B);if(ie){let te=ie[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&V(E),Object.keys(ie).length===0&&m.delete(B)}n.remove(E)}function V(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let B=E.source,ie=m.get(B);delete ie[_.__cacheKey],a.memory.textures--}function ne(E){let _=n.get(E);_.__depthDisposeCallback&&_.__depthDisposeCallback();let B=E.depthTexture;if(B&&B.renderTarget===E&&q(B),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(_.__webglFramebuffer[te]))for(let he=0;he<_.__webglFramebuffer[te].length;he++)i.deleteFramebuffer(_.__webglFramebuffer[te][he]);else i.deleteFramebuffer(_.__webglFramebuffer[te]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[te])}else{if(Array.isArray(_.__webglFramebuffer))for(let te=0;te<_.__webglFramebuffer.length;te++)i.deleteFramebuffer(_.__webglFramebuffer[te]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let te=0;te<_.__webglColorRenderbuffer.length;te++)_.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[te]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ie=E.textures;for(let te=0,he=ie.length;te<he;te++){let _e=n.get(ie[te]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(ie[te])}n.remove(E)}let K=0;function G(){K=0}function j(){return K}function oe(E){K=E}function de(){let E=K;return E>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,E}function Y(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.mipmapsAutoUpdate),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ae(E,_){let B=n.get(E);if(E.isVideoTexture&&vt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let ie=E.image;if(ie===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,E,_);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function ge(E,_){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){xt(B,E,_);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function we(E,_){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){xt(B,E,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function ce(E,_){let B=n.get(E);if(E.version>0&&B.__version!==E.version){Kt(B,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let Re={[Qr]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},Xe={[Ct]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Ce={[wh]:i.NEVER,[Cl]:i.ALWAYS,[Eh]:i.LESS,[Al]:i.LEQUAL,[Th]:i.EQUAL,[Rl]:i.GEQUAL,[Ah]:i.GREATER,[Rh]:i.NOTEQUAL};function $e(E,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Vt||_.magFilter===Ea||_.magFilter===rr||_.magFilter===Zn||_.minFilter===Vt||_.minFilter===Ea||_.minFilter===rr||_.minFilter===Zn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Re[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Re[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Re[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Xe[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Xe[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ct||_.minFilter!==rr&&_.minFilter!==Zn||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",N),U(_));let ie=_.source,te=m.get(ie);te===void 0&&(te={},m.set(ie,te));let he=Y(_);if(he!==E.__cacheKey){te[he]===void 0&&(te[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[he].usedTimes++;let _e=te[E.__cacheKey];_e!==void 0&&(te[E.__cacheKey].usedTimes--,_e.usedTimes===0&&V(_)),E.__cacheKey=he,E.__webglTexture=te[he].texture}return B}function Ve(E,_,B){return Math.floor(Math.floor(E/B)/_)}function yt(E,_,B,ie){let he=E.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,ie,_.data);else{he.sort((C,ee)=>C.start-ee.start);let _e=0;for(let C=1;C<he.length;C++){let ee=he[_e],Z=he[C],pe=ee.start+ee.count,le=Ve(Z.start,_.width,4),ue=Ve(ee.start,_.width,4);Z.start<=pe+1&&le===ue&&Ve(Z.start+Z.count-1,_.width,4)===le?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++_e,he[_e]=Z)}he.length=_e+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let C=0,ee=he.length;C<ee;C++){let Z=he[C],pe=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),ue=pe%_.width,Pe=Math.floor(pe/_.width),Ge=le,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(i.TEXTURE_2D,0,ue,Pe,Ge,se,B,ie,_.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function xt(E,_,B){let ie=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=i.TEXTURE_3D);let te=tt(E,_),he=_.source;t.bindTexture(ie,E.__webglTexture,i.TEXTURE0+B);let _e=n.get(he);if(he.version!==_e.__version||te===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let se=Ke.getPrimaries(Ke.workingColorSpace),Le=_.colorSpace===Jn?null:Ke.getPrimaries(_.colorSpace),Be=_.colorSpace===Jn||se===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=M(_.image,!1,s.maxTextureSize);Q=De(_,Q);let fe=r.convert(_.format,_.colorSpace),C=r.convert(_.type),ee=T(_.internalFormat,fe,C,_.normalized,_.colorSpace,_.isVideoTexture);$e(ie,_);let Z,pe=_.mipmaps,le=_.isVideoTexture!==!0,ue=_e.__version===void 0||te===!0,Pe=he.dataReady,Ge=b(_,Q);if(_.isDepthTexture)ee=g(_.format===$n,_.type),ue&&(le?t.texStorage2D(i.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,C,null));else if(_.isDataTexture)if(pe.length>0){le&&ue&&t.texStorage2D(i.TEXTURE_2D,Ge,ee,pe[0].width,pe[0].height);for(let se=0,Le=pe.length;se<Le;se++)Z=pe[se],le?Pe&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Z.width,Z.height,fe,C,Z.data):t.texImage2D(i.TEXTURE_2D,se,ee,Z.width,Z.height,0,fe,C,Z.data);_.generateMipmaps=!1}else le?(ue&&t.texStorage2D(i.TEXTURE_2D,Ge,ee,Q.width,Q.height),Pe&&yt(_,Q,fe,C)):t.texImage2D(i.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,C,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){le&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,ee,pe[0].width,pe[0].height,Q.depth);for(let se=0,Le=pe.length;se<Le;se++)if(Z=pe[se],_.format!==Tn)if(fe!==null)if(le){if(Pe)if(_.layerUpdates.size>0){let Be=zl(Z.width,Z.height,_.format,_.type);for(let ve of _.layerUpdates){let it=Z.data.subarray(ve*Be/Z.data.BYTES_PER_ELEMENT,(ve+1)*Be/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ve,Z.width,Z.height,1,fe,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,Q.depth,fe,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ee,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,Q.depth,fe,C,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ee,Z.width,Z.height,Q.depth,0,fe,C,Z.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(i.TEXTURE_2D,Ge,ee,pe[0].width,pe[0].height);for(let se=0,Le=pe.length;se<Le;se++)Z=pe[se],_.format!==Tn?fe!==null?le?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Z.width,Z.height,fe,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ee,Z.width,Z.height,0,Z.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Pe&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Z.width,Z.height,fe,C,Z.data):t.texImage2D(i.TEXTURE_2D,se,ee,Z.width,Z.height,0,fe,C,Z.data)}else if(_.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,ee,Q.width,Q.height,Q.depth),Pe)if(_.layerUpdates.size>0){let se=zl(Q.width,Q.height,_.format,_.type);for(let Le of _.layerUpdates){let Be=Q.data.subarray(Le*se/Q.data.BYTES_PER_ELEMENT,(Le+1)*se/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,Q.width,Q.height,1,fe,C,Be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,C,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,fe,C,Q.data);else if(_.isData3DTexture)le?(ue&&t.texStorage3D(i.TEXTURE_3D,Ge,ee,Q.width,Q.height,Q.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,C,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,fe,C,Q.data);else if(_.isFramebufferTexture){if(ue)if(le)t.texStorage2D(i.TEXTURE_2D,Ge,ee,Q.width,Q.height);else{let se=Q.width,Le=Q.height;for(let Be=0;Be<Ge;Be++)t.texImage2D(i.TEXTURE_2D,Be,ee,se,Le,0,fe,C,null),se>>=1,Le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Q.parentNode!==se){se.appendChild(Q),d.add(_),se.onpaint=Le=>{let Be=Le.changedElements;for(let ve of d)Be.includes(ve.image)&&(ve.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Be=i.RGBA,ve=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,ve,it,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(le&&ue){let se=Oe(pe[0]);t.texStorage2D(i.TEXTURE_2D,Ge,ee,se.width,se.height)}for(let se=0,Le=pe.length;se<Le;se++)Z=pe[se],le?Pe&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe,C,Z):t.texImage2D(i.TEXTURE_2D,se,ee,fe,C,Z);_.generateMipmaps=!1}else if(le){if(ue){let se=Oe(Q);t.texStorage2D(i.TEXTURE_2D,Ge,ee,se.width,se.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,C,Q)}else t.texImage2D(i.TEXTURE_2D,0,ee,fe,C,Q);R(_)&&_.mipmapsAutoUpdate===!0&&w(ie),_e.__version=he.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Kt(E,_,B){if(_.image.length!==6)return;let ie=tt(E,_),te=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let he=n.get(te);if(te.version!==he.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);let _e=Ke.getPrimaries(Ke.workingColorSpace),J=_.colorSpace===Jn?null:Ke.getPrimaries(_.colorSpace),Q=_.colorSpace===Jn||_e===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,C=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let ve=0;ve<6;ve++)!fe&&!C?ee[ve]=M(_.image[ve],!0,s.maxCubemapSize):ee[ve]=C?_.image[ve].image:_.image[ve],ee[ve]=De(_,ee[ve]);let Z=ee[0],pe=r.convert(_.format,_.colorSpace),le=r.convert(_.type),ue=T(_.internalFormat,pe,le,_.normalized,_.colorSpace),Pe=_.isVideoTexture!==!0,Ge=he.__version===void 0||ie===!0,se=te.dataReady,Le=b(_,Z);$e(i.TEXTURE_CUBE_MAP,_);let Be;if(_.isDepthTexture){if(ue=g(_.format===$n,_.type),Ge)if(Pe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,Z.width,Z.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,Z.width,Z.height,0,pe,le,null)}else if(fe){Pe&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ue,Z.width,Z.height);for(let ve=0;ve<6;ve++){Be=ee[ve].mipmaps;for(let it=0;it<Be.length;it++){let Et=Be[it];_.format!==Tn?pe!==null?Pe?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,Et.width,Et.height,pe,Et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,ue,Et.width,Et.height,0,Et.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,Et.width,Et.height,pe,le,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,ue,Et.width,Et.height,0,pe,le,Et.data)}}}else{if(Be=_.mipmaps,Pe&&Ge){Be.length>0&&Le++;let ve=Oe(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ue,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(C){Pe?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ee[ve].width,ee[ve].height,pe,le,ee[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,ee[ve].width,ee[ve].height,0,pe,le,ee[ve].data);for(let it=0;it<Be.length;it++){let ei=Be[it].image[ve].image;Pe?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,ei.width,ei.height,pe,le,ei.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,ue,ei.width,ei.height,0,pe,le,ei.data)}}else{Pe?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,pe,le,ee[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,pe,le,ee[ve]);for(let it=0;it<Be.length;it++){let Et=Be[it];Pe?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,pe,le,Et.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,ue,pe,le,Et.image[ve])}}}R(_)&&_.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),he.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ft(E,_,B,ie,te,he){let _e=r.convert(B.format,B.colorSpace),J=r.convert(B.type),Q=T(B.internalFormat,_e,J,B.normalized,B.colorSpace),fe=n.get(_),C=n.get(B);if(C.__renderTarget=_,!fe.__hasExternalTextures){let ee=Math.max(1,_.width>>he),Z=Math.max(1,_.height>>he);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,he,Q,ee,Z,_.depth,0,_e,J,null):t.texImage2D(te,he,Q,ee,Z,0,_e,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,C.__webglTexture,0,ct(_)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,C.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function An(E,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let ie=_.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,he=g(_.stencilBuffer,te),_e=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(_),he,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(_),he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,E)}else{let ie=_.textures;for(let te=0;te<ie.length;te++){let he=ie[te],_e=r.convert(he.format,he.colorSpace),J=r.convert(he.type),Q=T(he.internalFormat,_e,J,he.normalized,he.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(_),Q,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(E,_,B){let ie=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(_.depthTexture);te.__renderTarget=_;let he=ie?_.depthTexture.image[0]:_.depthTexture.image;(!te.__webglTexture||he.width!==_.width||he.height!==_.height)&&(he.width=_.width,he.height=_.height,_.depthTexture.needsUpdate=!0),ie?ce(_.depthTexture,0):ae(_.depthTexture,0);let _e=te.__webglTexture,J=ct(_),Q=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,fe=_.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xn)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,Q,_e,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,fe,Q,_e,0);else if(_.depthTexture.format===$n)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,Q,_e,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,fe,Q,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(E){let _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let ie=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ie){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=ie}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)wt(_.__webglFramebuffer[ie],E,ie);else E.texture.mipmaps.length>0?wt(_.__webglFramebuffer[0],E,0):wt(_.__webglFramebuffer,E,0);else if(B){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]===void 0)_.__webglDepthbuffer[ie]=i.createRenderbuffer(),An(_.__webglDepthbuffer[ie],E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,he)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),An(_.__webglDepthbuffer,E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ln(E,_,B){let ie=n.get(E);_!==void 0&&ft(ie.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&on(E)}function cn(E){let _=E.texture,B=n.get(E),ie=n.get(_);E.addEventListener("dispose",O),U(E);let te=E.textures,he=E.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=_.version,a.memory.textures++),he){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_e)for(let J=0,Q=te.length;J<Q;J++){let fe=n.get(te[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&xe(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<te.length;J++){let Q=te[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let fe=r.convert(Q.format,Q.colorSpace),C=r.convert(Q.type),ee=T(Q.internalFormat,fe,C,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),Z=ct(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),An(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),$e(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)ft(B.__webglFramebuffer[J][Q],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else ft(B.__webglFramebuffer[J],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);R(_)?w(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let J=0,Q=te.length;J<Q;J++){let fe=te[J],C=n.get(fe),ee=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,C.__webglTexture),$e(ee,fe),ft(B.__webglFramebuffer,E,fe,i.COLOR_ATTACHMENT0+J,ee,0),R(fe)&&w(ee)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,ie.__webglTexture),$e(J,_),_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)ft(B.__webglFramebuffer[Q],E,_,i.COLOR_ATTACHMENT0,J,Q);else ft(B.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,J,0);R(_)?w(J):_.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&on(E)}function D(E){let _=E.textures;for(let B=0,ie=_.length;B<ie;B++){let te=_[B];if(R(te)&&te.mipmapsAutoUpdate===!0){let he=A(E),_e=n.get(te).__webglTexture;t.bindTexture(he,_e),w(he),t.unbindTexture()}}}let hn=[];function lt(E){if(E.samples>0){if(xe(E)===!1){let _=E.textures,B=E.width,ie=E.height,te=i.COLOR_BUFFER_BIT,he=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(E),J=_.length>1;if(J)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let C=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,te,i.NEAREST),l===!0&&(hn.length=0,hn.push(i.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&hn.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,hn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let C=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ct(E){return Math.min(s.maxSamples,E.samples)}function xe(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function vt(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function De(E,_){let B=E.colorSpace,ie=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ns&&B!==Jn&&(Ke.getTransfer(B)===nt?(ie!==Tn||te!==$t)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),_}function Oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=de,this.resetTextureUnits=G,this.getTextureUnits=j,this.setTextureUnits=oe,this.setTexture2D=ae,this.setTexture2DArray=ge,this.setTexture3D=we,this.setTextureCube=ce,this.rebindTextures=ln,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=xe,this.dispose=X}function w_(i,e){function t(n,s=Jn){let r,a=Ke.getTransfer(s);if(n===$t)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return i.BYTE;if(n===bl)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===El)return i.RGB;if(n===Tn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===ka||n===Ba||n===za||n===hr||n===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ba)return r.COMPRESSED_R11_EAC;if(n===za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===Ka||n===Za||n===$a||n===Ja||n===ja||n===Qa||n===eo||n===to)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===to)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===so)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ro||n===ao||n===ur||n===oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:E_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,y=null,S=typeof XRWebGLBinding<"u",p=new Zl,f={},M=t.getContextAttributes(),R=null,w=null,A=[],T=[],g=new Ie,b=null,U=null,L=new Ht;L.viewport=new ht;let N=new Ht;N.viewport=new ht;let O=[L,N],q=new Sa,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=A[Y];return ae===void 0&&(ae=new rs,A[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=A[Y];return ae===void 0&&(ae=new rs,A[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=A[Y];return ae===void 0&&(ae=new rs,A[Y]=ae),ae.getHandSpace()};function $(Y){let ae=T.indexOf(Y.inputSource);if(ae===-1)return;let ge=A[ae];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<A.length;Y++){let ae=T[Y];ae!==null&&(T[Y]=null,A[Y].disconnect(ae))}P=null,X=null,p.reset();for(let Y in f)delete f[Y];if(e.setRenderTarget(R),m=null,u=null,d=null,s=null,w=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),U!==null){let Y=U.camera;Y.fov=U.fov,Y.zoom=U.zoom,Y.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,we=null,ce=null;M.depth&&(ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=M.stencil?$n:Xn,we=M.stencil?Ii:Mn);let Re={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new sn(u.textureWidth,u.textureHeight,{format:Tn,type:$t,depthTexture:new Kn(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ge={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new sn(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(Y){for(let ae=0;ae<Y.removed.length;ae++){let ge=Y.removed[ae],we=T.indexOf(ge);we>=0&&(T[we]=null,A[we].disconnect(ge))}for(let ae=0;ae<Y.added.length;ae++){let ge=Y.added[ae],we=T.indexOf(ge);if(we===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(ge),we=Re;break}else if(T[Re]===null){T[Re]=ge,we=Re;break}if(we===-1)break}let ce=A[we];ce&&ce.connect(ge)}}function K(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ae=Y.near,ge=Y.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),q.near=N.near=L.near=ae,q.far=N.far=L.far=ge,(P!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,X=q.far),q.layers.mask=Y.layers.mask|6,L.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;let we=Y.parent,ce=q.cameras;K(q,we);for(let Re=0;Re<ce.length;Re++)K(ce[Re],we);q.projectionMatrix.copy(L.projectionMatrix),q.projectionMatrixInverse.copy(L.projectionMatrixInverse),U===null&&Y.isPerspectiveCamera&&(U={camera:Y,fov:Y.fov,zoom:Y.zoom}),G(Y,q,we)};function G(Y,ae,ge){ge===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return f[Y]};let j=null;function oe(Y,ae){if(h=ae.getViewerPose(c||a),y=ae,h!==null){let ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let we=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Ce=0;Ce<ge.length;Ce++){let $e=ge[Ce],tt=null;if(m!==null)tt=m.getViewport($e);else{let yt=d.getViewSubImage(u,$e);tt=yt.viewport,Ce===0&&(e.setRenderTargetTextures(w,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(w))}let Ve=O[Ce];Ve===void 0&&(Ve=new Ht,Ve.layers.enable(Ce),Ve.viewport=new ht,O[Ce]=Ve),Ve.matrix.fromArray($e.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray($e.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Ce===0&&(q.matrix.copy(Ve.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(Ve)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Ce=d.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,s.renderState)}if(ce&&ce.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Ce=0;Ce<ge.length;Ce++){let $e=ge[Ce].camera;if($e){let tt=f[$e];tt||(tt=new qs,f[$e]=tt);let Ve=d.getCameraImage($e);tt.sourceTexture=Ve}}}}for(let ge=0;ge<A.length;ge++){let we=T[ge],ce=A[ge];we!==null&&ce!==void 0&&ce.update(we,ae,c||a)}j&&j(Y,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),y=null}let de=new ru;de.setAnimationLoop(oe),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}},A_=new at,mu=new Fe;mu.set(-1,0,0,0,1,0,0,0,1);function R_(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ol(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,R,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),y(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),S(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,M,R):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Xt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Xt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=e.get(f),R=M.envMap,w=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(w)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(mu),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,M,R){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=R*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){let M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,e,t,n){let s={},r={};function a(M,R){let w=R.program;n.uniformBlockBinding(M,w,s[M.id])}function o(M,R){let w=s[M.id];w===void 0&&(y(M),w=l(M),s[M.id]=w,M.addEventListener("dispose",p));let A=R.program;n.updateUBOMapping(M,A);let T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let R=i.createBuffer(),w=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(M){let R=s[M.id],w=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let T=0,g=w.length;T<g;T++){let b=w[T];if(Array.isArray(b))for(let U=0,L=b.length;U<L;U++)h(b[U],T,U,A);else h(b,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,R,w,A){if(u(M,R,w,A)===!0){let T=M.__offset,g=M.value;if(Array.isArray(g)){let b=0;for(let U=0;U<g.length;U++){let L=g[U],N=S(L,!0);d(L,M.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function d(M,R,w){typeof M=="number"||typeof M=="boolean"?R[w]=M:M.isMatrix3?(R[w]=M.elements[0],R[w+1]=M.elements[1],R[w+2]=M.elements[2],R[w+3]=0,R[w+4]=M.elements[3],R[w+5]=M.elements[4],R[w+6]=M.elements[5],R[w+7]=0,R[w+8]=M.elements[6],R[w+9]=M.elements[7],R[w+10]=M.elements[8],R[w+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-w),w):M.toArray(R,w)}function u(M,R,w,A){let T=M.value,g=R+"_"+w;if(Array.isArray(T)){A[g]===void 0&&(A[g]=[]);let b=A[g],U=!1;for(let L=0;L<T.length;L++)m(T[L],b,L)===!0&&(U=!0);return U}return m(T,A,g)}function m(M,R,w){if(R[w]===void 0)return typeof M=="number"||typeof M=="boolean"?R[w]=M:ArrayBuffer.isView(M)?R[w]=M.slice():R[w]=M.clone(),!0;{let A=R[w];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function y(M){let R=M.uniforms,w=0,A=16;for(let g=0,b=R.length;g<b;g++){let U=Array.isArray(R[g])?R[g]:[R[g]];for(let L=0,N=U.length;L<N;L++){let O=U[L],q=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(R[g])||Array.isArray(O.value),X=w;for(let V=0,ne=q.length;V<ne;V++){let K=q[V],G=S(K,P),j=w%A,oe=j%G.boundary,de=j+oe;w+=oe,de!==0&&A-de<G.storage&&(w+=A-de),V===0&&(X=w),w+=G.storage}let $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((w-X)/Float32Array.BYTES_PER_ELEMENT),O.__offset=X}}let T=w%A;return T>0&&(w+=A-T),M.__size=w,M.__cache={},this}function S(M,R){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function p(M){let R=M.target;R.removeEventListener("dispose",p),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:f}}var P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function I_(){return Nn===null&&(Nn=new aa(P_,16,16,pi,En),Nn.name="DFG_LUT",Nn.minFilter=Vt,Nn.magFilter=Vt,Nn.wrapS=Cn,Nn.wrapT=Cn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var po=class{constructor(e={}){let{canvas:t=Ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=$t}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let S=m,p=new Set([Ia,Pa,Ca]),f=new Set([$t,Mn,ys,Ii,Aa,Ra]),M=new Uint32Array(4),R=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},A=null,T=null,g=[],b=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,N=!1,O=null,q=null,P=null,X=null;this._outputColorSpace=Ot;let $=0,V=0,ne=null,K=-1,G=null,j=new ht,oe=new ht,de=null,Y=new ze(0),ae=0,ge=t.width,we=t.height,ce=1,Re=null,Xe=null,Ce=new ht(0,0,ge,we),$e=new ht(0,0,ge,we),tt=!1,Ve=new oi,yt=new oa,xt=!1,Kt=!1,ft=new at,An=new F,wt=new ht,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ln=!1;function cn(){return ne===null?ce:1}let D=n;function hn(x,I){return t.getContext(x,I)}let lt,ct,xe,vt,De,Oe,E,_,B,ie,te,he,_e,J,Q,fe,C,ee,Z,pe,le,ue,Pe;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let I="webgl2";if(D=hn(I,x),D===null)throw hn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(x){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ue("WebGLRenderer: "+x.message),x}function Ge(){lt=new Hm(D),lt.init(),le=new w_(D,lt),ct=new Im(D,lt,e,le),xe=new S_(D,lt),ct.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),q=D.createFramebuffer(),P=D.createFramebuffer(),X=D.createFramebuffer(),vt=new Xm(D),De=new l_,Oe=new M_(D,lt,xe,De,ct,le,vt),E=new Gm(L),_=new Yd(D),ue=new Cm(D,_),B=new Vm(D,_,vt,ue),ie=new qm(D,B,_,ue,vt),ee=new Ym(D,ct,Oe),Q=new Lm(De),te=new o_(L,E,lt,ct,ue,Q),he=new R_(L,De),_e=new h_,J=new g_(lt),C=new Rm(L,E,xe,ie,y,l),fe=new b_(L,ie,ct),Pe=new C_(D,vt,ct,xe),Z=new Pm(D,lt,vt),pe=new Wm(D,lt,vt),vt.programs=te.programs,L.capabilities=ct,L.extensions=lt,L.properties=De,L.renderLists=_e,L.shadowMap=fe,L.state=xe,L.info=vt}S!==$t&&(U=new Zm(S,t.width,t.height,o,s,r));let se=new $l(L,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=lt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=lt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(x){x!==void 0&&(ce=x,this.setSize(ge,we,!1))},this.getSize=function(x){return x.set(ge,we)},this.setSize=function(x,I,H=!0){if(se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=x,we=I,t.width=Math.floor(x*ce),t.height=Math.floor(I*ce),H===!0&&(t.style.width=x+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(ge*ce,we*ce).floor()},this.setDrawingBufferSize=function(x,I,H){ge=x,we=I,ce=H,t.width=Math.floor(x*H),t.height=Math.floor(I*H),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(S===$t){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(Ce)},this.setViewport=function(x,I,H,k){x.isVector4?Ce.set(x.x,x.y,x.z,x.w):Ce.set(x,I,H,k),xe.viewport(j.copy(Ce).multiplyScalar(cn()).round())},this.getScissor=function(x){return x.copy($e)},this.setScissor=function(x,I,H,k){x.isVector4?$e.set(x.x,x.y,x.z,x.w):$e.set(x,I,H,k),xe.scissor(oe.copy($e).multiplyScalar(cn()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){xe.setScissorTest(tt=x)},this.setOpaqueSort=function(x){Re=x},this.setTransparentSort=function(x){Xe=x},this.getClearColor=function(x){return x.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,H=!0){let k=0;if(x){let z=!1;if(ne!==null){let ye=ne.texture.format;z=p.has(ye)}if(z){let ye=ne.texture.type,Me=f.has(ye),me=C.getClearColor(),Se=C.getClearAlpha(),Ae=me.r,ke=me.g,Ye=me.b;Me?(M[0]=Ae,M[1]=ke,M[2]=Ye,M[3]=Se,D.clearBufferuiv(D.COLOR,0,M)):(R[0]=Ae,R[1]=ke,R[2]=Ye,R[3]=Se,D.clearBufferiv(D.COLOR,0,R))}else k|=D.COLOR_BUFFER_BIT}I&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),C.dispose(),_e.dispose(),J.dispose(),Oe.dispose(),De.dispose(),E.dispose(),ie.dispose(),B.dispose(),ue.dispose(),Pe.dispose(),te.dispose(),se.dispose(),se.removeEventListener("sessionstart",dc),se.removeEventListener("sessionend",fc),vi.stop()};function Le(x){x.preventDefault(),Os("WebGLRenderer: Context Lost."),N=!0}function Be(){Os("WebGLRenderer: Context Restored."),N=!1;let x=vt.autoReset,I=fe.enabled,H=fe.autoUpdate,k=fe.needsUpdate,z=fe.type;Ge(),vt.autoReset=x,fe.enabled=I,fe.autoUpdate=H,fe.needsUpdate=k,fe.type=z}function ve(x){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function it(x){let I=x.target;I.removeEventListener("dispose",it),Et(I)}function Et(x){ei(x),De.remove(x)}function ei(x){let I=De.get(x).programs;I!==void 0&&(I.forEach(function(H){te.releaseProgram(H)}),x.isShaderMaterial&&te.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,H,k,z,ye){I===null&&(I=on);let Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=qu(x,I,H,k,z);xe.setMaterial(k,Me);let Se=H.index,Ae=1;if(k.wireframe===!0){if(Se=B.getWireframeAttribute(H),Se===void 0)return;Ae=2}let ke=H.drawRange,Ye=H.attributes.position,Ee=ke.start*Ae,qe=(ke.start+ke.count)*Ae;ye!==null&&(Ee=Math.max(Ee,ye.start*Ae),qe=Math.min(qe,(ye.start+ye.count)*Ae)),Se!==null?(Ee=Math.max(Ee,0),qe=Math.min(qe,Se.count)):Ye!=null&&(Ee=Math.max(Ee,0),qe=Math.min(qe,Ye.count));let mt=qe-Ee;if(mt<0||mt===1/0)return;ue.setup(z,k,me,H,Se);let rt,st=Z;if(Se!==null&&(rt=_.get(Se),st=pe,st.setIndex(rt)),z.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*cn()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(z.isLine){let Dt=k.linewidth;Dt===void 0&&(Dt=1),xe.setLineWidth(Dt*cn()),z.isLineSegments?st.setMode(D.LINES):z.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else z.isPoints?st.setMode(D.POINTS):z.isSprite&&st.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Dt=z._multiDrawStarts,Te=z._multiDrawCounts,zt=z._multiDrawCount,je=Se?_.get(Se).bytesPerElement:1,bi=De.get(k).currentProgram.getUniforms();for(let Nt=0;Nt<zt;Nt++)bi.setValue(D,"_gl_DrawID",Nt),st.render(Dt[Nt]/je,Te[Nt])}else if(z.isInstancedMesh)st.renderInstances(Ee,mt,z.count);else if(H.isInstancedBufferGeometry){let Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,Dt);st.renderInstances(Ee,mt,Te)}else st.render(Ee,mt)};function uc(x,I,H,k){O!==null&&x.isNodeMaterial&&O.setObject(k,x),xt===!0&&Q.setState(x,H,!1),x.transparent===!0&&x.side===fn&&x.forceSinglePass===!1?(x.side=Xt,x.needsUpdate=!0,Ss(x,I,k),x.side=fi,x.needsUpdate=!0,Ss(x,I,k),x.side=fn):Ss(x,I,k)}this.compile=function(x,I,H=null){H===null&&(H=x),O!==null&&O.renderStart(x,I,H),T=J.get(H),T.init(I),b.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Kt=this.localClippingEnabled,xt=Q.init(this.clippingPlanes,Kt),xt===!0&&Q.setGlobalState(this.clippingPlanes,I),O!==null&&fe.render(T.state.shadowsArray,H,I);let k=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ye=z.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){let me=ye[Me];uc(me,H,I,z),k.add(me)}else uc(ye,H,I,z),k.add(ye)}),T=b.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(x,I,H=null){let k=this.compile(x,I,H);return new Promise(z=>{function ye(){if(k.forEach(function(Me){let Se=De.get(Me).currentProgram;(Se===void 0||Se.isReady())&&k.delete(Me)}),k.size===0){z(x);return}setTimeout(ye,10)}lt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Co=null;function Xu(x){Co&&Co(x)}function dc(){vi.stop()}function fc(){vi.start()}let vi=new ru;vi.setAnimationLoop(Xu),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(x){Co=x,se.setAnimationLoop(x),x===null?vi.stop():vi.start()},se.addEventListener("sessionstart",dc),se.addEventListener("sessionend",fc),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(x,I);let H=se.enabled===!0&&se.isPresenting===!0,k=U!==null&&(ne===null||H)&&U.begin(L,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,I,ne),T=J.get(x,b.length),T.init(I),T.state.textureUnits=Oe.getTextureUnits(),b.push(T),ft.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?yt.setFromArrayCamera(I):Ve.setFromProjectionMatrix(ft,dn,I.reversedDepth),Kt=this.localClippingEnabled,xt=Q.init(this.clippingPlanes,Kt),A=_e.get(x,g.length),A.init(),g.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Me=L.xr.getDepthSensingMesh();Me!==null&&Po(Me,I,-1/0,L.sortObjects)}Po(x,I,0,L.sortObjects),A.finish(),O!==null&&O.updateLights(T.state.lightsArray),L.sortObjects===!0&&A.sort(Re,Xe),ln=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ln&&C.addToRenderList(A,x),this.info.autoReset===!0&&this.info.reset(),xt===!0&&Q.beginShadows();let z=T.state.shadowsArray;if(fe.render(z,x,I),xt===!0&&Q.endShadows(),(k&&U.hasRenderPass())===!1){let Me=A.opaque,me=A.transmissive;if(T.setupLights(),I.isArrayCamera){let Se=I.cameras;if(me.length>0)for(let Ae=0,ke=Se.length;Ae<ke;Ae++){let Ye=Se[Ae];mc(Me,me,x,Ye)}ln&&C.render(x);for(let Ae=0,ke=Se.length;Ae<ke;Ae++){let Ye=Se[Ae];pc(A,x,Ye,Ye.viewport)}}else me.length>0&&mc(Me,me,x,I),ln&&C.render(x),pc(A,x,I)}ne!==null&&V===0&&(Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne)),k&&U.end(L),x.isScene===!0&&x.onAfterRender(L,x,I),ue.resetDefaultState(),K=-1,G=null,b.pop(),b.length>0?(T=b[b.length-1],Oe.setTextureUnits(T.state.textureUnits),xt===!0&&Q.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,O!==null&&O.renderEnd()};function Po(x,I,H,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){let Me=I.isArrayCamera?yt:Ve;if(!x.frustumCulled||x.intersectsFrustum(Me)){k&&wt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ft);let me=ie.update(x),Se=x.material;Se.visible&&A.push(x,me,Se,H,wt.z,null,I)}}else if(x.isMesh||x.isLine||x.isPoints){let Me=I.isArrayCamera?yt:Ve;if(!x.frustumCulled||x.intersectsFrustum(Me)){let me=ie.update(x),Se=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),wt.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),wt.copy(me.boundingSphere.center)),wt.applyMatrix4(x.matrixWorld).applyMatrix4(ft)),Array.isArray(Se)){let Ae=me.groups;for(let ke=0,Ye=Ae.length;ke<Ye;ke++){let Ee=Ae[ke],qe=Se[Ee.materialIndex];qe&&qe.visible&&A.push(x,me,qe,H,wt.z,Ee,I)}}else Se.visible&&A.push(x,me,Se,H,wt.z,null,I)}}}let ye=x.children;for(let Me=0,me=ye.length;Me<me;Me++)Po(ye[Me],I,H,k)}function pc(x,I,H,k){let{opaque:z,transmissive:ye,transparent:Me}=x;T.setupLightsView(H),xt===!0&&Q.setGlobalState(L.clippingPlanes,H),k&&xe.viewport(j.copy(k)),z.length>0&&xr(z,I,H),ye.length>0&&xr(ye,I,H),Me.length>0&&xr(Me,I,H),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function mc(x,I,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ee=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new sn(1,1,{generateMipmaps:!0,type:Ee?En:$t,minFilter:Zn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let ye=T.state.transmissionRenderTarget[k.id],Me=k.viewport||j;ye.setSize(Me.z*L.transmissionResolutionScale,Me.w*L.transmissionResolutionScale);let me=L.getRenderTarget(),Se=L.getActiveCubeFace(),Ae=L.getActiveMipmapLevel();L.setRenderTarget(ye),L.getClearColor(Y),ae=L.getClearAlpha(),ae<1&&L.setClearColor(16777215,.5),L.clear(),ln&&C.render(H);let ke=L.toneMapping;L.toneMapping=Dn;let Ye=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),xt===!0&&Q.setGlobalState(L.clippingPlanes,k),xr(x,H,k),Oe.updateMultisampleRenderTarget(ye),Oe.updateRenderTargetMipmap(ye),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let qe=0,mt=I.length;qe<mt;qe++){let rt=I[qe],{object:st,geometry:Dt,material:Te,group:zt}=rt;if(Te.side===fn&&st.layers.test(k.layers)){let je=Te.side;Te.side=Xt,Te.needsUpdate=!0,gc(st,H,k,Dt,Te,zt),Te.side=je,Te.needsUpdate=!0,Ee=!0}}Ee===!0&&(Oe.updateMultisampleRenderTarget(ye),Oe.updateRenderTargetMipmap(ye))}L.setRenderTarget(me,Se,Ae),L.setClearColor(Y,ae),Ye!==void 0&&(k.viewport=Ye),L.toneMapping=ke}function xr(x,I,H){let k=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ye=x.length;z<ye;z++){let Me=x[z],{object:me,geometry:Se,group:Ae}=Me,ke=Me.material;ke.allowOverride===!0&&k!==null&&(ke=k),me.layers.test(H.layers)&&gc(me,I,H,Se,ke,Ae)}}function gc(x,I,H,k,z,ye){O!==null&&z.isNodeMaterial&&O.setObject(x,z),x.onBeforeRender(L,I,H,k,z,ye),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(L,I,H,k,x,ye),z.transparent===!0&&z.side===fn&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,L.renderBufferDirect(H,I,k,z,x,ye),z.side=fi,z.needsUpdate=!0,L.renderBufferDirect(H,I,k,z,x,ye),z.side=fn):L.renderBufferDirect(H,I,k,z,x,ye),x.onAfterRender(L,I,H,k,z,ye)}function _c(x){let I=0;for(let H of x)H.texture!==null&&I++;return I}function Ss(x,I,H){I.isScene!==!0&&(I=on);let k=De.get(x),z=T.state.lights,ye=T.state.shadowsArray,Me=z.state.version,me=te.getParameters(x,z.state,ye,I,H,T.state.lightProbeGridArray),Se=te.getProgramCacheKey(me),Ae=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;let ke=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=E.get(x.envMap||k.environment,ke),k.envMapRotation=k.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",it),Ae=new Map,k.programs=Ae,k.programVariants=new Map);let Ye=Ae.get(Se);if(Ye!==void 0){if(k.currentProgram===Ye&&k.lightsStateVersion===Me)return xc(x,me),Ye}else me.uniforms=te.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,H,me),x.onBeforeCompile(me,L),Ye=te.acquireProgram(me,Se),Ae.set(Se,Ye),k.uniforms=me.uniforms;let Ee=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),xc(x,me),k.needsLights=Zu(x),k.lightsStateVersion=Me,k.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.sunLights.value=z.state.sun,Ee.sunLightShadows.value=z.state.sunShadow,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.sunShadowMatrix.value=z.state.sunShadowMatrix,Ee.sunShadowCascade.value=z.state.sunShadowCascade,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=_c(T.state.lightProbeGridArray),k.currentProgram=Ye,k.uniformsList=null,Ye}function Yu(x,I,H,k,z){let ye=De.get(x),Me=ye.currentProgram.id+","+k+","+z,me=ye.programVariants.get(Me);return me===void 0?(me=Ss(x,I,H),ye.programVariants.set(Me,me)):(ye.currentProgram=me,ye.uniformsList=null,ye.outputColorSpace=k,ye.toneMapping=z),me}function yc(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=xs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function xc(x,I){let H=De.get(x);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function qu(x,I,H,k,z){I.isScene!==!0&&(I=on),Oe.resetTextureUnits();let ye=I.fog,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,me=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ae=E.get(k.envMap||Me,Se),ke=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ye=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color,rt=Dn;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(rt=L.toneMapping);let st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=st!==void 0?st.length:0,Te=De.get(k),zt=T.state.lights;if(xt===!0&&(Kt===!0||x!==G)){let pt=x===G&&k.id===K;Q.setState(k,x,pt)}let je=!1,bi=!1;k.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==zt.state.version||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Ae||k.fog===!0&&Te.fog!==ye||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Q.numPlanes||Te.numIntersection!==Q.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==Ye||Te.morphTargets!==Ee||Te.morphNormals!==qe||Te.morphColors!==mt||Te.morphTargetsCount!==Dt||Te.numLightProbeGrids!==_c(T.state.lightProbeGridArray)?je=!0:(Te.outputColorSpace!==me||Te.toneMapping!==rt)&&(bi=!0):(je=!0,Te.__version=k.version);let Nt=Te.currentProgram;(je===!0||bi===!0)&&(Nt=bi===!0?Yu(k,I,z,me,rt):Ss(k,I,z),O&&k.isNodeMaterial&&O.onUpdateProgram(k,Nt,Te));let vr=!1,ti=!1,Si=!1,Je=Nt.getUniforms(),It=Te.uniforms;if(xe.useProgram(Nt.program)&&(vr=!0,ti=!0,Si=!0),k.id!==K&&(K=k.id,ti=!0),vr||G!==x){xe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Je.setValue(D,"projectionMatrix",x.projectionMatrix),Je.setValue(D,"viewMatrix",x.matrixWorldInverse);let Tt=Je.map.cameraPosition;Tt!==void 0&&Tt.setValue(D,An.setFromMatrixPosition(x.matrixWorld)),ct.logarithmicDepthBuffer&&Je.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Je.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),G!==x&&(G=x,ti=!0,Si=!0)}if(Te.needsLights&&(zt.state.sunShadowMap.length>0&&Je.setValue(D,"sunShadowMap",zt.state.sunShadowMap,Oe),zt.state.directionalShadowMap.length>0&&Je.setValue(D,"directionalShadowMap",zt.state.directionalShadowMap,Oe),zt.state.spotShadowMap.length>0&&Je.setValue(D,"spotShadowMap",zt.state.spotShadowMap,Oe),zt.state.pointShadowMap.length>0&&Je.setValue(D,"pointShadowMap",zt.state.pointShadowMap,Oe)),z.isSkinnedMesh){Je.setOptional(D,z,"bindMatrix"),Je.setOptional(D,z,"bindMatrixInverse");let pt=z.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Je.setValue(D,"boneTexture",pt.boneTexture,Oe))}z.isBatchedMesh&&(Je.setOptional(D,z,"batchingTexture"),Je.setValue(D,"batchingTexture",z._matricesTexture,Oe),Je.setOptional(D,z,"batchingIdTexture"),Je.setValue(D,"batchingIdTexture",z._indirectTexture,Oe),Je.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Je.setValue(D,"batchingColorTexture",z._colorsTexture,Oe));let gn=H.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ee.update(z,H,Nt),(ti||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Je.setValue(D,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(It.envMapIntensity.value=I.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=I_()),ti){if(Je.setValue(D,"toneMappingExposure",L.toneMappingExposure),Te.needsLights&&Ku(It,Si),ye&&k.fog===!0&&he.refreshFogUniforms(It,ye),he.refreshMaterialUniforms(It,k,ce,we,T.state.transmissionRenderTarget[x.id]),Te.needsLights&&Te.numLightProbeGrids>0){let pt=w,Tt=0;for(let On of T.state.lightProbeGridArray)On.texture!==null&&(pt.textures[Tt]=On.texture,pt.min[Tt]=On.boundingBox.min,pt.max[Tt]=On.boundingBox.max,pt.resolution[Tt]=On.resolution,Tt++);for(let On in pt)pt[On].length=Tt;It.probesSH.value=pt.textures,It.probesMin.value=pt.min,It.probesMax.value=pt.max,It.probesResolution.value=pt.resolution}xs.upload(D,yc(Te),It,Oe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xs.upload(D,yc(Te),It,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Je.setValue(D,"center",z.center),Je.setValue(D,"modelViewMatrix",z.modelViewMatrix),Je.setValue(D,"normalMatrix",z.normalMatrix),Je.setValue(D,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let pt=k.uniformsGroups;for(let Tt=0,On=pt.length;Tt<On;Tt++){let bc=pt[Tt];Pe.update(bc,Nt),Pe.bind(bc,Nt)}}return Nt}function Ku(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.sunLights.needsUpdate=I,x.sunLightShadows.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Zu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,I,H){let k=De.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),De.get(x.texture).__webglTexture=I,De.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){let H=De.get(x);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,H=0){ne=x,$=I,V=H;let k=null,z=!1,ye=!1;if(x){let me=De.get(x);if(me.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),j.copy(x.viewport),oe.copy(x.scissor),de=x.scissorTest,xe.viewport(j),xe.scissor(oe),xe.setScissorTest(de),K=-1;return}else if(me.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(me.__hasExternalTextures)Oe.rebindTextures(x,De.get(x.texture).__webglTexture,De.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let ke=x.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(x.width!==ke.image.width||x.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}let Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ye=!0);let Ae=De.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?k=Ae[I][H]:k=Ae[I],z=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?k=De.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?k=Ae[H]:k=Ae,j.copy(x.viewport),oe.copy(x.scissor),de=x.scissorTest}else j.copy(Ce).multiplyScalar(ce).floor(),oe.copy($e).multiplyScalar(ce).floor(),de=tt;if(H!==0&&(k=q),xe.bindFramebuffer(D.FRAMEBUFFER,k)&&xe.drawBuffers(x,k),xe.viewport(j),xe.scissor(oe),xe.setScissorTest(de),z){let me=De.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,H)}else if(ye){let me=I;for(let Se=0;Se<x.textures.length;Se++){let Ae=De.get(x.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,H,me)}}else if(x!==null&&H!==0){let me=De.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,H)}K=-1};function vc(x){let I=De.get(x);return(I.__readFormat!==x.format||I.__readType!==x.type)&&(I.__readFormat=x.format,I.__readType=x.type,I.__formatReadable=ct.textureFormatReadable(x.format),I.__typeReadable=ct.textureTypeReadable(x.type)),I}this.readRenderTargetPixels=function(x,I,H,k,z,ye,Me,me=0){if(!(x&&x.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se){xe.bindFramebuffer(D.FRAMEBUFFER,Se);try{let Ae=x.textures[me],ke=Ae.format,Ye=Ae.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me);let Ee=vc(Ae);if(Ee.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&H>=0&&H<=x.height-z&&D.readPixels(I,H,k,z,le.convert(ke),le.convert(Ye),ye)}finally{let Ae=ne!==null?De.get(ne).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,I,H,k,z,ye,Me,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se)if(I>=0&&I<=x.width-k&&H>=0&&H<=x.height-z){xe.bindFramebuffer(D.FRAMEBUFFER,Se);let Ae=x.textures[me],ke=Ae.format,Ye=Ae.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me);let Ee=vc(Ae);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(I,H,k,z,le.convert(ke),le.convert(Ye),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let mt=ne!==null?De.get(ne).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,mt);let rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ih(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(qe),D.deleteSync(rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,H=0){let k=Math.pow(2,-H),z=Math.floor(x.image.width*k),ye=Math.floor(x.image.height*k),Me=I!==null?I.x:0,me=I!==null?I.y:0;Oe.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,Me,me,z,ye),xe.unbindTexture()},this.copyTextureToTexture=function(x,I,H=null,k=null,z=0,ye=0){let Me,me,Se,Ae,ke,Ye,Ee,qe,mt,rt=x.isCompressedTexture?x.mipmaps[ye]:x.image;if(H!==null)Me=H.max.x-H.min.x,me=H.max.y-H.min.y,Se=H.isBox3?H.max.z-H.min.z:1,Ae=H.min.x,ke=H.min.y,Ye=H.isBox3?H.min.z:0;else{let Je=Math.pow(2,-z);Me=Math.floor(rt.width*Je),me=Math.floor(rt.height*Je),x.isDataArrayTexture?Se=rt.depth:x.isData3DTexture?Se=Math.floor(rt.depth*Je):Se=1,Ae=0,ke=0,Ye=0}k!==null?(Ee=k.x,qe=k.y,mt=k.z):(Ee=0,qe=0,mt=0);let st=le.convert(I.format),Dt=le.convert(I.type),Te;I.isData3DTexture?(Oe.setTexture3D(I,0),Te=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Oe.setTexture2DArray(I,0),Te=D.TEXTURE_2D_ARRAY):(Oe.setTexture2D(I,0),Te=D.TEXTURE_2D),xe.activeTexture(D.TEXTURE0),xe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),xe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),xe.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let zt=xe.getParameter(D.UNPACK_ROW_LENGTH),je=xe.getParameter(D.UNPACK_IMAGE_HEIGHT),bi=xe.getParameter(D.UNPACK_SKIP_PIXELS),Nt=xe.getParameter(D.UNPACK_SKIP_ROWS),vr=xe.getParameter(D.UNPACK_SKIP_IMAGES);xe.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),xe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),xe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),xe.pixelStorei(D.UNPACK_SKIP_ROWS,ke),xe.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye);let ti=x.isDataArrayTexture||x.isData3DTexture,Si=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){let Je=De.get(x),It=De.get(I),gn=De.get(Je.__renderTarget),pt=De.get(It.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Tt=0;Tt<Se;Tt++)ti&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.get(x).__webglTexture,z,Ye+Tt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.get(I).__webglTexture,ye,mt+Tt)),D.blitFramebuffer(Ae,ke,Ae+Me,ke+me,Ee,qe,Ee+Me,qe+me,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||De.has(x)){let Je=De.get(x),It=De.get(I);xe.bindFramebuffer(D.READ_FRAMEBUFFER,P),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let gn=0;gn<Se;gn++)ti?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,z,Ye+gn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,z),Si?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,ye,mt+gn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,ye),z!==0?D.blitFramebuffer(Ae,ke,Ae+Me,ke+me,Ee,qe,Ee+Me,qe+me,D.COLOR_BUFFER_BIT,D.NEAREST):Si?D.copyTexSubImage3D(Te,ye,Ee,qe,mt+gn,Ae,ke,Me,me):D.copyTexSubImage2D(Te,ye,Ee,qe,Ae,ke,Me,me);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Si?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Te,ye,Ee,qe,mt,Me,me,Se,st,Dt,rt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,ye,Ee,qe,mt,Me,me,Se,st,rt.data):D.texSubImage3D(Te,ye,Ee,qe,mt,Me,me,Se,st,Dt,rt):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Ee,qe,Me,me,st,Dt,rt.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Ee,qe,rt.width,rt.height,st,rt.data):D.texSubImage2D(D.TEXTURE_2D,ye,Ee,qe,Me,me,st,Dt,rt);xe.pixelStorei(D.UNPACK_ROW_LENGTH,zt),xe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je),xe.pixelStorei(D.UNPACK_SKIP_PIXELS,bi),xe.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),xe.pixelStorei(D.UNPACK_SKIP_IMAGES,vr),ye===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&D.generateMipmap(Te),xe.unbindTexture()},this.initRenderTarget=function(x){De.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),xe.unbindTexture()},this.resetState=function(){$=0,V=0,ne=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var gu={type:"change"},jl={type:"start"},yu={type:"end"},_o=new Ai,_u=new tn,D_=Math.cos(70*Fl.DEG2RAD),Mt=new F,Jt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6,yo=class extends nr{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new nn,this._lastTargetPosition=new F,this._quat=new nn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ps,this._sphericalDelta=new ps,this._scale=1,this._panOffset=new F,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new F,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=F_.bind(this),this._onContextMenu=V_.bind(this),this._onMouseWheel=B_.bind(this),this._onKeyDown=z_.bind(this),this._onTouchStart=G_.bind(this),this._onTouchMove=H_.bind(this),this._onMouseDown=O_.bind(this),this._onMouseMove=k_.bind(this),this._interceptControlDown=W_.bind(this),this._interceptControlUp=X_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Qe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gu),this.update(),this.state=Qe.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Jt:n>Math.PI&&(n-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Mt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<D_?this.object.lookAt(this.target):(_u.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(_u,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function N_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function U_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function F_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yu),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function O_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(jl)}function k_(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function B_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yu))}function z_(i){this.enabled!==!1&&this._handleKeyDown(i)}function G_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1){this.state=Qe.NONE;break}this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1){this.state=Qe.NONE;break}this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(jl)}function H_(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function V_(i){this.enabled!==!1&&i.preventDefault()}function W_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xo={source:{provider:"PubChem / National Center for Biotechnology Information (NCBI)",title:"PubChem Periodic Table \u2014 PUG REST",url:"https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON",retrieved_at:"2026-11-24",raw_sha256:"6abc1932a117fccc4c61bf9cdbcf96a0355beac82cddba82bd436e6ce4aee72a",atomic_weight_field:"AtomicWeight",notes:["Atom a\u011F\u0131rl\u0131\u011F\u0131 kaynakta bildirilen metin olarak, yuvarlanmadan korunur. Bu alan izotopun k\xFCtle numaras\u0131 veya n\xF6tron say\u0131s\u0131 de\u011Fildir; her kay\u0131t i\xE7in standart atom a\u011F\u0131rl\u0131\u011F\u0131 ya da deneysel \xF6l\xE7\xFCm g\xFCvencesi anlam\u0131na gelmez.","Kaynakta varsa k\xF6\u015Feli parantezler ve elektron dizilimindeki predicted/calculated a\xE7\u0131klamalar\u0131 korunur. Bu indirme s\xFCr\xFCm\xFCnde a\u011F\u0131r elementlerin atom a\u011F\u0131rl\u0131klar\u0131 da ondal\u0131kl\u0131 metinlerdir.","Faz, kayna\u011F\u0131n StandardState alan\u0131n\u0131n \xE7evirisidir; Expected to be ifadesi \xF6ng\xF6r\xFClen olarak g\xF6sterilir. Di\u011Fer faz kay\u0131tlar\u0131 da ayr\u0131ca do\u011Frulanm\u0131\u015F \xF6l\xE7\xFCm olarak etiketlenmez.","Kategori, PubChem GroupBlock alan\u0131ndan gelir. Kimyasal s\u0131n\u0131fland\u0131rma ve \xF6zellikle a\u011F\u0131r elementlerin \xF6zellikleri kayna\u011Fa g\xF6re de\u011Fi\u015Febilir.","T\xFCrk\xE7e adlar uygulaman\u0131n a\xE7\u0131k \xE7eviri e\u015Flemesidir. Ayr\u0131lm\u0131\u015F lantanit ve aktinit sat\u0131rlar\u0131nda group=null kullan\u0131l\u0131r; table_col kimyasal grup atamas\u0131 de\u011Fildir."]},elements:[{atomic_number:1,symbol:"H",name:"Hidrojen",name_en:"Hydrogen",atomic_weight:"1.0080",electron_configuration:"1s1",phase:"Gaz",phase_en:"Gas",category:"nonmetal",group_block:"Nonmetal",group:1,period:1,table_col:1,table_row:1},{atomic_number:2,symbol:"He",name:"Helyum",name_en:"Helium",atomic_weight:"4.00260",electron_configuration:"1s2",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:1,table_col:18,table_row:1},{atomic_number:3,symbol:"Li",name:"Lityum",name_en:"Lithium",atomic_weight:"7.0",electron_configuration:"[He]2s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:2,table_col:1,table_row:2},{atomic_number:4,symbol:"Be",name:"Berilyum",name_en:"Beryllium",atomic_weight:"9.012183",electron_configuration:"[He]2s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:2,table_col:2,table_row:2},{atomic_number:5,symbol:"B",name:"Bor",name_en:"Boron",atomic_weight:"10.81",electron_configuration:"[He]2s2 2p1",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:13,period:2,table_col:13,table_row:2},{atomic_number:6,symbol:"C",name:"Karbon",name_en:"Carbon",atomic_weight:"12.011",electron_configuration:"[He]2s2 2p2",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:14,period:2,table_col:14,table_row:2},{atomic_number:7,symbol:"N",name:"Azot",name_en:"Nitrogen",atomic_weight:"14.007",electron_configuration:"[He] 2s2 2p3",phase:"Gaz",phase_en:"Gas",category:"nonmetal",group_block:"Nonmetal",group:15,period:2,table_col:15,table_row:2},{atomic_number:8,symbol:"O",name:"Oksijen",name_en:"Oxygen",atomic_weight:"15.999",electron_configuration:"[He]2s2 2p4",phase:"Gaz",phase_en:"Gas",category:"nonmetal",group_block:"Nonmetal",group:16,period:2,table_col:16,table_row:2},{atomic_number:9,symbol:"F",name:"Flor",name_en:"Fluorine",atomic_weight:"18.99840316",electron_configuration:"[He]2s2 2p5",phase:"Gaz",phase_en:"Gas",category:"halogen",group_block:"Halogen",group:17,period:2,table_col:17,table_row:2},{atomic_number:10,symbol:"Ne",name:"Neon",name_en:"Neon",atomic_weight:"20.180",electron_configuration:"[He]2s2 2p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:2,table_col:18,table_row:2},{atomic_number:11,symbol:"Na",name:"Sodyum",name_en:"Sodium",atomic_weight:"22.9897693",electron_configuration:"[Ne]3s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:3,table_col:1,table_row:3},{atomic_number:12,symbol:"Mg",name:"Magnezyum",name_en:"Magnesium",atomic_weight:"24.305",electron_configuration:"[Ne]3s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:3,table_col:2,table_row:3},{atomic_number:13,symbol:"Al",name:"Al\xFCminyum",name_en:"Aluminum",atomic_weight:"26.981538",electron_configuration:"[Ne]3s2 3p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:3,table_col:13,table_row:3},{atomic_number:14,symbol:"Si",name:"Silisyum",name_en:"Silicon",atomic_weight:"28.085",electron_configuration:"[Ne]3s2 3p2",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:14,period:3,table_col:14,table_row:3},{atomic_number:15,symbol:"P",name:"Fosfor",name_en:"Phosphorus",atomic_weight:"30.97376200",electron_configuration:"[Ne]3s2 3p3",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:15,period:3,table_col:15,table_row:3},{atomic_number:16,symbol:"S",name:"K\xFCk\xFCrt",name_en:"Sulfur",atomic_weight:"32.07",electron_configuration:"[Ne]3s2 3p4",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:16,period:3,table_col:16,table_row:3},{atomic_number:17,symbol:"Cl",name:"Klor",name_en:"Chlorine",atomic_weight:"35.45",electron_configuration:"[Ne]3s2 3p5",phase:"Gaz",phase_en:"Gas",category:"halogen",group_block:"Halogen",group:17,period:3,table_col:17,table_row:3},{atomic_number:18,symbol:"Ar",name:"Argon",name_en:"Argon",atomic_weight:"39.9",electron_configuration:"[Ne]3s2 3p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:3,table_col:18,table_row:3},{atomic_number:19,symbol:"K",name:"Potasyum",name_en:"Potassium",atomic_weight:"39.0983",electron_configuration:"[Ar]4s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:4,table_col:1,table_row:4},{atomic_number:20,symbol:"Ca",name:"Kalsiyum",name_en:"Calcium",atomic_weight:"40.08",electron_configuration:"[Ar]4s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:4,table_col:2,table_row:4},{atomic_number:21,symbol:"Sc",name:"Skandiyum",name_en:"Scandium",atomic_weight:"44.95591",electron_configuration:"[Ar]4s2 3d1",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:3,period:4,table_col:3,table_row:4},{atomic_number:22,symbol:"Ti",name:"Titanyum",name_en:"Titanium",atomic_weight:"47.867",electron_configuration:"[Ar]4s2 3d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:4,table_col:4,table_row:4},{atomic_number:23,symbol:"V",name:"Vanadyum",name_en:"Vanadium",atomic_weight:"50.9415",electron_configuration:"[Ar]4s2 3d3",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:4,table_col:5,table_row:4},{atomic_number:24,symbol:"Cr",name:"Krom",name_en:"Chromium",atomic_weight:"51.996",electron_configuration:"[Ar]3d5 4s1",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:4,table_col:6,table_row:4},{atomic_number:25,symbol:"Mn",name:"Manganez",name_en:"Manganese",atomic_weight:"54.93804",electron_configuration:"[Ar]4s2 3d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:4,table_col:7,table_row:4},{atomic_number:26,symbol:"Fe",name:"Demir",name_en:"Iron",atomic_weight:"55.84",electron_configuration:"[Ar]4s2 3d6",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:4,table_col:8,table_row:4},{atomic_number:27,symbol:"Co",name:"Kobalt",name_en:"Cobalt",atomic_weight:"58.93319",electron_configuration:"[Ar]4s2 3d7",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:4,table_col:9,table_row:4},{atomic_number:28,symbol:"Ni",name:"Nikel",name_en:"Nickel",atomic_weight:"58.693",electron_configuration:"[Ar]4s2 3d8",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:4,table_col:10,table_row:4},{atomic_number:29,symbol:"Cu",name:"Bak\u0131r",name_en:"Copper",atomic_weight:"63.55",electron_configuration:"[Ar]4s1 3d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:4,table_col:11,table_row:4},{atomic_number:30,symbol:"Zn",name:"\xC7inko",name_en:"Zinc",atomic_weight:"65.4",electron_configuration:"[Ar]4s2 3d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:12,period:4,table_col:12,table_row:4},{atomic_number:31,symbol:"Ga",name:"Galyum",name_en:"Gallium",atomic_weight:"69.723",electron_configuration:"[Ar]4s2 3d10 4p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:4,table_col:13,table_row:4},{atomic_number:32,symbol:"Ge",name:"Germanyum",name_en:"Germanium",atomic_weight:"72.63",electron_configuration:"[Ar]4s2 3d10 4p2",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:14,period:4,table_col:14,table_row:4},{atomic_number:33,symbol:"As",name:"Arsenik",name_en:"Arsenic",atomic_weight:"74.92159",electron_configuration:"[Ar]4s2 3d10 4p3",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:15,period:4,table_col:15,table_row:4},{atomic_number:34,symbol:"Se",name:"Selenyum",name_en:"Selenium",atomic_weight:"78.97",electron_configuration:"[Ar]4s2 3d10 4p4",phase:"Kat\u0131",phase_en:"Solid",category:"nonmetal",group_block:"Nonmetal",group:16,period:4,table_col:16,table_row:4},{atomic_number:35,symbol:"Br",name:"Brom",name_en:"Bromine",atomic_weight:"79.90",electron_configuration:"[Ar]4s2 3d10 4p5",phase:"S\u0131v\u0131",phase_en:"Liquid",category:"halogen",group_block:"Halogen",group:17,period:4,table_col:17,table_row:4},{atomic_number:36,symbol:"Kr",name:"Kripton",name_en:"Krypton",atomic_weight:"83.80",electron_configuration:"[Ar]4s2 3d10 4p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:4,table_col:18,table_row:4},{atomic_number:37,symbol:"Rb",name:"Rubidyum",name_en:"Rubidium",atomic_weight:"85.468",electron_configuration:"[Kr]5s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:5,table_col:1,table_row:5},{atomic_number:38,symbol:"Sr",name:"Stronsiyum",name_en:"Strontium",atomic_weight:"87.62",electron_configuration:"[Kr]5s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:5,table_col:2,table_row:5},{atomic_number:39,symbol:"Y",name:"\u0130triyum",name_en:"Yttrium",atomic_weight:"88.90584",electron_configuration:"[Kr]5s2 4d1",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:3,period:5,table_col:3,table_row:5},{atomic_number:40,symbol:"Zr",name:"Zirkonyum",name_en:"Zirconium",atomic_weight:"91.22",electron_configuration:"[Kr]5s2 4d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:5,table_col:4,table_row:5},{atomic_number:41,symbol:"Nb",name:"Niyobyum",name_en:"Niobium",atomic_weight:"92.90637",electron_configuration:"[Kr]5s1 4d4",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:5,table_col:5,table_row:5},{atomic_number:42,symbol:"Mo",name:"Molibden",name_en:"Molybdenum",atomic_weight:"95.95",electron_configuration:"[Kr]5s1 4d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:5,table_col:6,table_row:5},{atomic_number:43,symbol:"Tc",name:"Teknesyum",name_en:"Technetium",atomic_weight:"96.90636",electron_configuration:"[Kr]5s2 4d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:5,table_col:7,table_row:5},{atomic_number:44,symbol:"Ru",name:"Rutenyum",name_en:"Ruthenium",atomic_weight:"101.1",electron_configuration:"[Kr]5s1 4d7",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:5,table_col:8,table_row:5},{atomic_number:45,symbol:"Rh",name:"Rodyum",name_en:"Rhodium",atomic_weight:"102.9055",electron_configuration:"[Kr]5s1 4d8",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:5,table_col:9,table_row:5},{atomic_number:46,symbol:"Pd",name:"Paladyum",name_en:"Palladium",atomic_weight:"106.42",electron_configuration:"[Kr]4d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:5,table_col:10,table_row:5},{atomic_number:47,symbol:"Ag",name:"G\xFCm\xFC\u015F",name_en:"Silver",atomic_weight:"107.868",electron_configuration:"[Kr]5s1 4d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:5,table_col:11,table_row:5},{atomic_number:48,symbol:"Cd",name:"Kadmiyum",name_en:"Cadmium",atomic_weight:"112.41",electron_configuration:"[Kr]5s2 4d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:12,period:5,table_col:12,table_row:5},{atomic_number:49,symbol:"In",name:"\u0130ndiyum",name_en:"Indium",atomic_weight:"114.818",electron_configuration:"[Kr]5s2 4d10 5p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:5,table_col:13,table_row:5},{atomic_number:50,symbol:"Sn",name:"Kalay",name_en:"Tin",atomic_weight:"118.71",electron_configuration:"[Kr]5s2 4d10 5p2",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:14,period:5,table_col:14,table_row:5},{atomic_number:51,symbol:"Sb",name:"Antimon",name_en:"Antimony",atomic_weight:"121.760",electron_configuration:"[Kr]5s2 4d10 5p3",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:15,period:5,table_col:15,table_row:5},{atomic_number:52,symbol:"Te",name:"Tell\xFCr",name_en:"Tellurium",atomic_weight:"127.6",electron_configuration:"[Kr]5s2 4d10 5p4",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:16,period:5,table_col:16,table_row:5},{atomic_number:53,symbol:"I",name:"\u0130yot",name_en:"Iodine",atomic_weight:"126.9045",electron_configuration:"[Kr]5s2 4d10 5p5",phase:"Kat\u0131",phase_en:"Solid",category:"halogen",group_block:"Halogen",group:17,period:5,table_col:17,table_row:5},{atomic_number:54,symbol:"Xe",name:"Ksenon",name_en:"Xenon",atomic_weight:"131.29",electron_configuration:"[Kr]5s2 4d10 5p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:5,table_col:18,table_row:5},{atomic_number:55,symbol:"Cs",name:"Sezyum",name_en:"Cesium",atomic_weight:"132.9054520",electron_configuration:"[Xe]6s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:6,table_col:1,table_row:6},{atomic_number:56,symbol:"Ba",name:"Baryum",name_en:"Barium",atomic_weight:"137.33",electron_configuration:"[Xe]6s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:6,table_col:2,table_row:6},{atomic_number:57,symbol:"La",name:"Lantan",name_en:"Lanthanum",atomic_weight:"138.9055",electron_configuration:"[Xe]6s2 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:3,table_row:9},{atomic_number:58,symbol:"Ce",name:"Seryum",name_en:"Cerium",atomic_weight:"140.116",electron_configuration:"[Xe]6s2 4f1 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:4,table_row:9},{atomic_number:59,symbol:"Pr",name:"Praseodim",name_en:"Praseodymium",atomic_weight:"140.90766",electron_configuration:"[Xe]6s2 4f3",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:5,table_row:9},{atomic_number:60,symbol:"Nd",name:"Neodim",name_en:"Neodymium",atomic_weight:"144.24",electron_configuration:"[Xe]6s2 4f4",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:6,table_row:9},{atomic_number:61,symbol:"Pm",name:"Prometyum",name_en:"Promethium",atomic_weight:"144.91276",electron_configuration:"[Xe]6s2 4f5",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:7,table_row:9},{atomic_number:62,symbol:"Sm",name:"Samaryum",name_en:"Samarium",atomic_weight:"150.4",electron_configuration:"[Xe]6s2 4f6",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:8,table_row:9},{atomic_number:63,symbol:"Eu",name:"Evropiyum",name_en:"Europium",atomic_weight:"151.964",electron_configuration:"[Xe]6s2 4f7",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:9,table_row:9},{atomic_number:64,symbol:"Gd",name:"Gadolinyum",name_en:"Gadolinium",atomic_weight:"157.25",electron_configuration:"[Xe]6s2 4f7 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:10,table_row:9},{atomic_number:65,symbol:"Tb",name:"Terbiyum",name_en:"Terbium",atomic_weight:"158.92535",electron_configuration:"[Xe]6s2 4f9",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:11,table_row:9},{atomic_number:66,symbol:"Dy",name:"Disprosyum",name_en:"Dysprosium",atomic_weight:"162.500",electron_configuration:"[Xe]6s2 4f10",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:12,table_row:9},{atomic_number:67,symbol:"Ho",name:"Holmiyum",name_en:"Holmium",atomic_weight:"164.93033",electron_configuration:"[Xe]6s2 4f11",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:13,table_row:9},{atomic_number:68,symbol:"Er",name:"Erbiyum",name_en:"Erbium",atomic_weight:"167.26",electron_configuration:"[Xe]6s2 4f12",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:14,table_row:9},{atomic_number:69,symbol:"Tm",name:"Tulyum",name_en:"Thulium",atomic_weight:"168.93422",electron_configuration:"[Xe]6s2 4f13",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:15,table_row:9},{atomic_number:70,symbol:"Yb",name:"\u0130terbiyum",name_en:"Ytterbium",atomic_weight:"173.05",electron_configuration:"[Xe]6s2 4f14",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:16,table_row:9},{atomic_number:71,symbol:"Lu",name:"L\xFCtesyum",name_en:"Lutetium",atomic_weight:"174.9667",electron_configuration:"[Xe]6s2 4f14 5d1",phase:"Kat\u0131",phase_en:"Solid",category:"lanthanide",group_block:"Lanthanide",group:null,period:6,table_col:17,table_row:9},{atomic_number:72,symbol:"Hf",name:"Hafniyum",name_en:"Hafnium",atomic_weight:"178.49",electron_configuration:"[Xe]6s2 4f14 5d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:6,table_col:4,table_row:6},{atomic_number:73,symbol:"Ta",name:"Tantal",name_en:"Tantalum",atomic_weight:"180.9479",electron_configuration:"[Xe]6s2 4f14 5d3",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:6,table_col:5,table_row:6},{atomic_number:74,symbol:"W",name:"Tungsten",name_en:"Tungsten",atomic_weight:"183.84",electron_configuration:"[Xe]6s2 4f14 5d4",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:6,table_col:6,table_row:6},{atomic_number:75,symbol:"Re",name:"Renyum",name_en:"Rhenium",atomic_weight:"186.207",electron_configuration:"[Xe]6s2 4f14 5d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:6,table_col:7,table_row:6},{atomic_number:76,symbol:"Os",name:"Osmiyum",name_en:"Osmium",atomic_weight:"190.2",electron_configuration:"[Xe]6s2 4f14 5d6",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:6,table_col:8,table_row:6},{atomic_number:77,symbol:"Ir",name:"\u0130ridyum",name_en:"Iridium",atomic_weight:"192.22",electron_configuration:"[Xe]6s2 4f14 5d7",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:6,table_col:9,table_row:6},{atomic_number:78,symbol:"Pt",name:"Platin",name_en:"Platinum",atomic_weight:"195.08",electron_configuration:"[Xe]6s1 4f14 5d9",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:6,table_col:10,table_row:6},{atomic_number:79,symbol:"Au",name:"Alt\u0131n",name_en:"Gold",atomic_weight:"196.96657",electron_configuration:"[Xe]6s1 4f14 5d10",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:6,table_col:11,table_row:6},{atomic_number:80,symbol:"Hg",name:"C\u0131va",name_en:"Mercury",atomic_weight:"200.59",electron_configuration:"[Xe]6s2 4f14 5d10",phase:"S\u0131v\u0131",phase_en:"Liquid",category:"transition-metal",group_block:"Transition metal",group:12,period:6,table_col:12,table_row:6},{atomic_number:81,symbol:"Tl",name:"Talyum",name_en:"Thallium",atomic_weight:"204.383",electron_configuration:"[Xe]6s2 4f14 5d10 6p1",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:6,table_col:13,table_row:6},{atomic_number:82,symbol:"Pb",name:"Kur\u015Fun",name_en:"Lead",atomic_weight:"207",electron_configuration:"[Xe]6s2 4f14 5d10 6p2",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:14,period:6,table_col:14,table_row:6},{atomic_number:83,symbol:"Bi",name:"Bizmut",name_en:"Bismuth",atomic_weight:"208.98040",electron_configuration:"[Xe]6s2 4f14 5d10 6p3",phase:"Kat\u0131",phase_en:"Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:15,period:6,table_col:15,table_row:6},{atomic_number:84,symbol:"Po",name:"Polonyum",name_en:"Polonium",atomic_weight:"208.98243",electron_configuration:"[Xe]6s2 4f14 5d10 6p4",phase:"Kat\u0131",phase_en:"Solid",category:"metalloid",group_block:"Metalloid",group:16,period:6,table_col:16,table_row:6},{atomic_number:85,symbol:"At",name:"Astatin",name_en:"Astatine",atomic_weight:"209.98715",electron_configuration:"[Xe]6s2 4f14 5d10 6p5",phase:"Kat\u0131",phase_en:"Solid",category:"halogen",group_block:"Halogen",group:17,period:6,table_col:17,table_row:6},{atomic_number:86,symbol:"Rn",name:"Radon",name_en:"Radon",atomic_weight:"222.01758",electron_configuration:"[Xe]6s2 4f14 5d10 6p6",phase:"Gaz",phase_en:"Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:6,table_col:18,table_row:6},{atomic_number:87,symbol:"Fr",name:"Fransiyum",name_en:"Francium",atomic_weight:"223.01973",electron_configuration:"[Rn]7s1",phase:"Kat\u0131",phase_en:"Solid",category:"alkali-metal",group_block:"Alkali metal",group:1,period:7,table_col:1,table_row:7},{atomic_number:88,symbol:"Ra",name:"Radyum",name_en:"Radium",atomic_weight:"226.02541",electron_configuration:"[Rn]7s2",phase:"Kat\u0131",phase_en:"Solid",category:"alkaline-earth-metal",group_block:"Alkaline earth metal",group:2,period:7,table_col:2,table_row:7},{atomic_number:89,symbol:"Ac",name:"Aktinyum",name_en:"Actinium",atomic_weight:"227.02775",electron_configuration:"[Rn]7s2 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:3,table_row:10},{atomic_number:90,symbol:"Th",name:"Toryum",name_en:"Thorium",atomic_weight:"232.038",electron_configuration:"[Rn]7s2 6d2",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:4,table_row:10},{atomic_number:91,symbol:"Pa",name:"Protaktinyum",name_en:"Protactinium",atomic_weight:"231.03588",electron_configuration:"[Rn]7s2 5f2 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:5,table_row:10},{atomic_number:92,symbol:"U",name:"Uranyum",name_en:"Uranium",atomic_weight:"238.0289",electron_configuration:"[Rn]7s2 5f3 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:6,table_row:10},{atomic_number:93,symbol:"Np",name:"Nept\xFCnyum",name_en:"Neptunium",atomic_weight:"237.048172",electron_configuration:"[Rn]7s2 5f4 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:7,table_row:10},{atomic_number:94,symbol:"Pu",name:"Pl\xFCtonyum",name_en:"Plutonium",atomic_weight:"244.06420",electron_configuration:"[Rn]7s2 5f6",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:8,table_row:10},{atomic_number:95,symbol:"Am",name:"Amerikyum",name_en:"Americium",atomic_weight:"243.061380",electron_configuration:"[Rn]7s2 5f7",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:9,table_row:10},{atomic_number:96,symbol:"Cm",name:"K\xFCriyum",name_en:"Curium",atomic_weight:"247.07035",electron_configuration:"[Rn]7s2 5f7 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:10,table_row:10},{atomic_number:97,symbol:"Bk",name:"Berkelyum",name_en:"Berkelium",atomic_weight:"247.07031",electron_configuration:"[Rn]7s2 5f9",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:11,table_row:10},{atomic_number:98,symbol:"Cf",name:"Kaliforniyum",name_en:"Californium",atomic_weight:"251.07959",electron_configuration:"[Rn]7s2 5f10",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:12,table_row:10},{atomic_number:99,symbol:"Es",name:"Ayn\u015Ftaynyum",name_en:"Einsteinium",atomic_weight:"252.0830",electron_configuration:"[Rn]7s2 5f11",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:13,table_row:10},{atomic_number:100,symbol:"Fm",name:"Fermiyum",name_en:"Fermium",atomic_weight:"257.09511",electron_configuration:"[Rn] 5f12 7s2",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:14,table_row:10},{atomic_number:101,symbol:"Md",name:"Mendelevyum",name_en:"Mendelevium",atomic_weight:"258.09843",electron_configuration:"[Rn]7s2 5f13",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:15,table_row:10},{atomic_number:102,symbol:"No",name:"Nobelyum",name_en:"Nobelium",atomic_weight:"259.10100",electron_configuration:"[Rn]7s2 5f14",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:16,table_row:10},{atomic_number:103,symbol:"Lr",name:"Lavrensiyum",name_en:"Lawrencium",atomic_weight:"266.120",electron_configuration:"[Rn]7s2 5f14 6d1",phase:"Kat\u0131",phase_en:"Solid",category:"actinide",group_block:"Actinide",group:null,period:7,table_col:17,table_row:10},{atomic_number:104,symbol:"Rf",name:"Rutherfordiyum",name_en:"Rutherfordium",atomic_weight:"267.122",electron_configuration:"[Rn]7s2 5f14 6d2",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:4,period:7,table_col:4,table_row:7},{atomic_number:105,symbol:"Db",name:"Dubniyum",name_en:"Dubnium",atomic_weight:"268.126",electron_configuration:"[Rn]7s2 5f14 6d3",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:5,period:7,table_col:5,table_row:7},{atomic_number:106,symbol:"Sg",name:"Seaborgiyum",name_en:"Seaborgium",atomic_weight:"269.128",electron_configuration:"[Rn]7s2 5f14 6d4",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:6,period:7,table_col:6,table_row:7},{atomic_number:107,symbol:"Bh",name:"Bohriyum",name_en:"Bohrium",atomic_weight:"270.133",electron_configuration:"[Rn]7s2 5f14 6d5",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:7,period:7,table_col:7,table_row:7},{atomic_number:108,symbol:"Hs",name:"Hassiyum",name_en:"Hassium",atomic_weight:"269.1336",electron_configuration:"[Rn]7s2 5f14 6d6",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:8,period:7,table_col:8,table_row:7},{atomic_number:109,symbol:"Mt",name:"Meitneryum",name_en:"Meitnerium",atomic_weight:"277.154",electron_configuration:"[Rn]7s2 5f14 6d7 (calculated)",phase:"Kat\u0131",phase_en:"Solid",category:"transition-metal",group_block:"Transition metal",group:9,period:7,table_col:9,table_row:7},{atomic_number:110,symbol:"Ds",name:"Darmstadtiyum",name_en:"Darmstadtium",atomic_weight:"282.166",electron_configuration:"[Rn]7s2 5f14 6d8 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"transition-metal",group_block:"Transition metal",group:10,period:7,table_col:10,table_row:7},{atomic_number:111,symbol:"Rg",name:"R\xF6ntgenyum",name_en:"Roentgenium",atomic_weight:"282.169",electron_configuration:"[Rn]7s2 5f14 6d9 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"transition-metal",group_block:"Transition metal",group:11,period:7,table_col:11,table_row:7},{atomic_number:112,symbol:"Cn",name:"Kopernikyum",name_en:"Copernicium",atomic_weight:"286.179",electron_configuration:"[Rn]7s2 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"transition-metal",group_block:"Transition metal",group:12,period:7,table_col:12,table_row:7},{atomic_number:113,symbol:"Nh",name:"Nihonyum",name_en:"Nihonium",atomic_weight:"286.182",electron_configuration:"[Rn]5f14 6d10 7s2 7p1 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:13,period:7,table_col:13,table_row:7},{atomic_number:114,symbol:"Fl",name:"Flerovyum",name_en:"Flerovium",atomic_weight:"290.192",electron_configuration:"[Rn]7s2 7p2 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:14,period:7,table_col:14,table_row:7},{atomic_number:115,symbol:"Mc",name:"Moskovyum",name_en:"Moscovium",atomic_weight:"290.196",electron_configuration:"[Rn]7s2 7p3 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:15,period:7,table_col:15,table_row:7},{atomic_number:116,symbol:"Lv",name:"Livermoryum",name_en:"Livermorium",atomic_weight:"293.205",electron_configuration:"[Rn]7s2 7p4 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"post-transition-metal",group_block:"Post-transition metal",group:16,period:7,table_col:16,table_row:7},{atomic_number:117,symbol:"Ts",name:"Tennesin",name_en:"Tennessine",atomic_weight:"294.211",electron_configuration:"[Rn]7s2 7p5 5f14 6d10 (predicted)",phase:"Kat\u0131 (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Solid",category:"halogen",group_block:"Halogen",group:17,period:7,table_col:17,table_row:7},{atomic_number:118,symbol:"Og",name:"Oganesson",name_en:"Oganesson",atomic_weight:"295.216",electron_configuration:"[Rn]7s2 7p6 5f14 6d10 (predicted)",phase:"Gaz (\xF6ng\xF6r\xFClen)",phase_en:"Expected to be a Gas",category:"noble-gas",group_block:"Noble gas",group:18,period:7,table_col:18,table_row:7}]};var vo=Object.freeze({nonmetal:"Ametal","noble-gas":"Soy gaz","alkali-metal":"Alkali metal","alkaline-earth-metal":"Toprak alkali metal",metalloid:"Yar\u0131 metal",halogen:"Halojen","post-transition-metal":"Ge\xE7i\u015F sonras\u0131 metal","transition-metal":"Ge\xE7i\u015F metali",lanthanide:"Lantanit",actinide:"Aktinit"}),an=Object.freeze(xo.elements.map(i=>Object.freeze(i))),Zv=Object.freeze({...xo.source,notes:Object.freeze([...xo.source.notes])});var q_={H:15266554,C:6256788,N:6522623,O:15821670,Na:10321123,Cl:7521937,Si:12236520},K_={H:.31,C:.47,N:.45,O:.44,Na:.32,Cl:.49,Si:.48},xu=new F(0,1,0),Z_=new Map(an.map(i=>[i.symbol,new ze().setHSL(i.atomic_number*.61803398875%1,.48,.61)]));function vu(i,{onSelect:e=()=>{},onTick:t=()=>{}}={}){let n=new po({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),n.outputColorSpace=Ot,n.toneMapping=sr,n.toneMappingExposure=1.28;let s=new Bs;s.background=new ze(document.documentElement.classList.contains("desktop-mode")?2434859:1189688);let r=new Ht(39,1,.05,300),a=new yo(r,i);a.enableDamping=!0,a.dampingFactor=.08,a.minDistance=2,a.maxDistance=70,s.add(new js(14940927,3491678,2.1));let o=new ds(16777215,3);o.position.set(5,7,9),s.add(o);let l=new ds(5810890,2.4);l.position.set(-7,1,-5),s.add(l);let c=new Pn;s.add(c);let h="graph",d=null,u=!1,m=[],y=[],S=new Map,p=4,f=performance.now(),M,R=!1,w=new F,A=new tr,T=new Ie;function g(){let G=new Set,j=new Set,oe=new Set;c.traverse(de=>{de.geometry&&G.add(de.geometry),de.material&&(Array.isArray(de.material)?de.material:[de.material]).forEach(ae=>{j.add(ae),ae.map&&oe.add(ae.map)})}),c.clear(),G.forEach(de=>de.dispose()),j.forEach(de=>de.dispose()),oe.forEach(de=>de.dispose()),y=[],S.clear()}function b(G,j,oe={}){return new Zt(new hs(G,28,20),new us({color:j,roughness:.3,metalness:.12,...oe}))}function U(G){let j=document.createElement("canvas");j.width=160,j.height=80;let oe=j.getContext("2d");oe.fillStyle="#f3f8ff",oe.font="600 42px Segoe UI, sans-serif",oe.textAlign="center",oe.textBaseline="middle",oe.fillText(G,80,40);let de=new Xs(j);de.colorSpace=Ot;let Y=new Vs(new os({map:de,depthTest:!1,transparent:!0}));return Y.scale.set(.8,.4,1),Y.renderOrder=5,Y}function L(G,j,oe,de=.07){let Y=j.clone().sub(G),ae=new Zt(new Ks(de,de,Y.length(),10),new us({color:oe,roughness:.5,metalness:.1}));return ae.position.copy(G).add(j).multiplyScalar(.5),ae.quaternion.setFromUnitVectors(xu,Y.normalize()),c.add(ae),ae}function N(){r.near=Math.max(.001,p/1e4),r.far=Math.max(300,p*30),a.minDistance=Math.max(.1,p/100),a.maxDistance=Math.max(70,p*12),r.updateProjectionMatrix(),r.position.set(p*.9,p*.6,p*1.8),a.target.set(0,0,0),r.lookAt(a.target),a.update()}function O(G,{reset:j=!1,dense:oe=!1,structure:de=!1}={}){d={data:G,dense:oe,structure:de},h="graph",g();let Y=new In;G.atoms.forEach(ge=>Y.expandByPoint(new F(...ge.position))),G.atoms.length?(Y.getCenter(w),p=Math.max(3.5,Y.getSize(new F).length()*.78)):(w.set(0,0,0),p=4);let ae=new Map;G.atoms.forEach(ge=>{let we=new F(...ge.position).sub(w);ae.set(ge.id,we);let ce=(K_[ge.element]||.45)*(oe?.55:1)*(u?1.55:1),Re=b(ce,q_[ge.element]||Z_.get(ge.element)||11188941);if(Re.position.copy(we),Re.userData.atomId=ge.id,Re.userData.radius=ce,c.add(Re),y.push(Re),!oe){let Xe=U(ge.element);Xe.position.copy(we),Xe.position.y+=ce+.3,c.add(Xe)}if(m.includes(ge.id)){let Xe=b(ce*1.17,16765573,{transparent:!0,opacity:.35,depthWrite:!1});Xe.position.copy(we),c.add(Xe)}}),u||G.bonds.forEach(ge=>{let we=ae.get(ge.a),ce=ae.get(ge.b);if(!we||!ce)return;let Re=ce.clone().sub(we).normalize(),Xe=Re.clone().cross(new F(0,0,1));Xe.lengthSq()<.01&&(Xe=Re.clone().cross(xu)),Xe.normalize();let Ce=oe?1:ge.order;for(let $e=0;$e<Ce;$e++){let tt=Xe.clone().multiplyScalar(($e-(Ce-1)/2)*.17),Ve=we.clone().add(tt),yt=ce.clone().add(tt);L(Ve,yt,oe?6323346:10401993,oe?.035:.065)}}),r.far=Math.max(300,p*30),a.maxDistance=Math.max(70,p*12),r.updateProjectionMatrix(),j&&N()}function q(G){m=[...G],d&&h==="graph"&&O(d.data,{dense:d.dense,structure:d.structure})}function P(G){u=G,d&&h==="graph"&&O(d.data,{dense:d.dense,structure:d.structure})}function X(G,j,oe){let de=new Pn;de.position.x=(j-(oe-1)/2)*3.7;let Y=b(1.65,4441273,{transparent:!0,opacity:.2,depthWrite:!1,metalness:.02,roughness:.15,side:fn});de.add(Y);let ae=new Zt(new hs(1.65,22,14),new ls({color:7395536,wireframe:!0,transparent:!0,opacity:.12,depthWrite:!1}));de.add(ae);let ge=b(.57,9667785,{roughness:.55,metalness:.05});ge.position.set(-.23,.1,.25),de.add(ge);let we=b(.18,12035056);we.position.set(-.1,.15,.72),de.add(we);for(let Re=0;Re<7;Re++){let Xe=Re*Math.PI*2/7,Ce=b(.13,14987904,{roughness:.5});Ce.scale.set(1.8,.75,1),Ce.position.set(Math.cos(Xe)*1.05,Math.sin(Xe)*.9,Math.sin(Re*2)*.45),Ce.rotation.z=Xe,de.add(Ce)}let ce=U(oe===1?"H\xFCcre":`H\xFCcre ${j+1}`);return ce.position.set(0,2.1,0),ce.scale.set(1.6,.8,1),de.add(ce),c.add(de),S.set(G,de),de}function $(G,j=1,{reset:oe=!1}={}){(h!=="cells"||G.cells.some(de=>!S.has(de.id))||S.size!==G.cells.length)&&(g(),h="cells",d=null,G.cells.forEach((de,Y)=>X(de.id,Y,G.cells.length)),p=G.cells.length>1?6:4.3),G.cells.forEach(de=>{S.get(de.id).scale.setScalar(Math.cbrt(de.volume_pl/j))}),oe&&N()}let V;i.addEventListener("pointerdown",G=>{V=[G.clientX,G.clientY]}),i.addEventListener("pointerup",G=>{if(h!=="graph"||!V||Math.hypot(G.clientX-V[0],G.clientY-V[1])>5)return;let j=i.getBoundingClientRect();T.set((G.clientX-j.left)/j.width*2-1,-(G.clientY-j.top)/j.height*2+1),A.setFromCamera(T,r);let oe=A.intersectObjects(y,!1)[0];oe&&e(oe.object.userData.atomId)});let ne=new ResizeObserver(()=>{let G=i.getBoundingClientRect();G.width<1||G.height<1||(n.setSize(G.width,G.height,!1),r.aspect=G.width/G.height,r.updateProjectionMatrix())});ne.observe(i);function K(G){if(R)return;let j=Math.min(.05,(G-f)/1e3);f=G,document.hidden||(t(j),a.update(),n.render(s,r)),M=requestAnimationFrame(K)}return N(),M=requestAnimationFrame(K),{setGraph:O,setCells:$,select:q,setRepresentation:P,resetCamera:N,dispose(){R=!0,cancelAnimationFrame(M),ne.disconnect(),a.dispose(),g(),n.dispose()}}}var $_="2026-11-24",Ql=Object.freeze({graphene:"https://graphene-flagship.eu/materials/graphene/",graphite:"https://pubs.rsc.org/en/content/articlehtml/2024/sc/d3sc06107h",diamond:"https://www1.columbia.edu/sec/itc/ee/test2/hyperlinks/diamond%20xtal/diamond.htm",salt:"https://www.gan.msm.cam.ac.uk/resources/crystalmodels/cscl-and-nacl"}),gr="Sonlu ve birimsiz e\u011Fitim modeli. Kenarlarda eksik kom\u015Fular bulunur; enerji, kuvvet, mekanik dayan\u0131m, iletkenlik veya tepkime hesaplanmaz.",gi=Object.freeze([{id:"graphene",name:"Grafen",formula:"C",description:"Bir atom kal\u0131nl\u0131\u011F\u0131nda, alt\u0131gen halkalardan olu\u015Fan karbon tabakas\u0131. \u0130\xE7teki her karbonun \xFC\xE7 yak\u0131n kom\u015Fusu vard\u0131r.",structure:"D\xFCzlemsel bal pete\u011Fi \xF6rg\xFCs\xFC",limitations:`${gr} \xC7izgiler yak\u0131n kom\u015Fulu\u011Fu g\xF6sterir; tek/\xE7ift ba\u011F s\u0131ras\u0131 veya yerelle\u015Fmi\u015F \u03C0 ba\u011Flar\u0131 atamaz.`},{id:"graphite",name:"Grafit \xB7 AB katmanlar\u0131",formula:"C",description:"Ard\u0131\u015F\u0131k grafen tabakalar\u0131 AB (Bernal) d\xFCzeninde kayd\u0131r\u0131l\u0131r. A konumundaki birinci ve \xFC\xE7\xFCnc\xFC tabakalar hizal\u0131d\u0131r.",structure:"ABAB katmanl\u0131 bal pete\u011Fi \xF6rg\xFCs\xFC",limitations:`${gr} Katman say\u0131s\u0131 ve aral\u0131\u011F\u0131 g\xF6rsel kontrollerdir; soyulma, kararl\u0131l\u0131k veya katmanlar aras\u0131 kuvvet tahmini de\u011Fildir. Tek tabaka se\xE7ilirse grafen geometrisi g\xF6sterilir.`},{id:"diamond",name:"Elmas",formula:"C",description:"K\xFCbik elmas yap\u0131s\u0131nda i\xE7teki her karbon d\xF6rt kom\u015Fuya tetrahedral geometriyle ba\u011Flan\u0131r.",structure:"Y\xFCzey merkezli k\xFCbik \xF6rg\xFC + (0,0,0), (\xBC,\xBC,\xBC) baz\u0131",limitations:gr},{id:"sodium-chloride",name:"Sodyum klor\xFCr",formula:"NaCl",description:"Kaya tuzu yap\u0131s\u0131nda Na\u207A ve Cl\u207B iyonlar\u0131 d\xF6n\xFC\u015F\xFCml\xFCd\xFCr. \u0130\xE7teki her iyon kar\u015F\u0131t y\xFCkl\xFC alt\u0131 en yak\u0131n kom\u015Fuyla \xE7evrilidir.",structure:"Kaya tuzu \xB7 i\xE7 i\xE7e iki y\xFCzey merkezli k\xFCbik alt \xF6rg\xFC",limitations:`${gr} \xC7izgiler iyonik yak\u0131n kom\u015Fulu\u011Fu g\xF6sterir; ayr\u0131 NaCl molek\xFClleri veya tekli kovalent ba\u011Flar de\u011Fildir.`},{id:"silicon",name:"Silisyum",formula:"Si",description:"Elmas tipi k\xFCbik silisyum \xF6rg\xFCs\xFC. \u0130\xE7 atomlar\u0131n d\xF6rt kom\u015Fusu tetrahedral olarak d\xFCzenlenir.",structure:"Elmas tipi k\xFCbik \xF6rg\xFC \xB7 Si",limitations:`${gr} Bant yap\u0131s\u0131, katk\u0131lama veya yar\u0131 iletken ayg\u0131t davran\u0131\u015F\u0131 hesaplanmaz.`}].map(i=>Object.freeze(i)));function bu(i,e,t,n,s=!1){let r=Number.isFinite(Number(i))&&i!==null&&i!==""?Number(i):e;return Math.max(t,Math.min(n,s?Math.round(r):r))}function J_(i){if(i.length===0)return;let e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(let s of i)s.position.forEach((r,a)=>{e[a]=Math.min(e[a],r),t[a]=Math.max(t[a],r)});let n=e.map((s,r)=>(s+t[r])/2);for(let s of i)s.position=s.position.map((r,a)=>r-n[a])}function j_(i,e){return i.position.reduce((t,n,s)=>t+(n-e.position[s])**2,0)}function ec(i,e,t=()=>!0){let n=[],s=e*e;for(let r=0;r<i.length;r++)for(let a=r+1;a<i.length;a++)t(i[r],i[a])&&Math.abs(j_(i[r],i[a])-s)<1e-7&&n.push({a:i[r].id,b:i[a].id,order:1});return n}function Q_(){let i=new Map,e=2;for(let t=-e;t<=e;t++)for(let n=-e;n<=e;n++){if(Math.max(Math.abs(t),Math.abs(n),Math.abs(t+n))>e)continue;let s=1.5*t,r=Math.sqrt(3)*(n+t/2);for(let a=0;a<6;a++){let o=a*Math.PI/3,l=[s+Math.cos(o),0,r+Math.sin(o)],c=l.map(h=>Math.round(h*1e8)).join(",");i.has(c)||i.set(c,l)}}return[...i.values()]}function e0(i,e,t){let n=Q_(),s=[];for(let a=0;a<e;a++){let o=a%2===1?1:0;n.forEach(l=>s.push({id:`${i}-a${s.length}`,element:"C",layer:a,position:[l[0]+o,(a-(e-1)/2)*t,l[2]]}))}let r=ec(s,1,(a,o)=>a.layer===o.layer);return{atoms:s,bonds:r,details:{layers:e,spacing:e>1?t:null,stacking:e>1?Array.from({length:e},(a,o)=>o%2?"B":"A").join(""):"A",interior_coordination:3,bonding:"Tabaka i\xE7i yak\u0131n kom\u015Fuluk; \u03C0 elektronlar\u0131 ve katmanlar aras\u0131 etkile\u015Fim hesaplanmaz."}}}function t0(i,e){let t=[],n=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]],s=[0,.25],r=4/Math.sqrt(3),a=3;for(let o=0;o<a;o++)for(let l=0;l<a;l++)for(let c=0;c<a;c++)for(let h of n)for(let d of s)t.push({id:`${i}-a${t.length}`,element:e,position:[o,l,c].map((u,m)=>(u+h[m]+d)*r)});return{atoms:t,bonds:ec(t,1),details:{conventional_cells_per_axis:a,interior_coordination:4,bonding:"Tetrahedral en yak\u0131n kom\u015Fu ba\u011Flant\u0131lar\u0131; mekanik veya kuantum hesab\u0131 de\u011Fildir."}}}function n0(i){let e=[];for(let n=0;n<6;n++)for(let s=0;s<6;s++)for(let r=0;r<6;r++){let a=(n+s+r)%2===0;e.push({id:`${i}-a${e.length}`,element:a?"Na":"Cl",charge:a?1:-1,position:[n,s,r]})}return{atoms:e,bonds:ec(e,1,(n,s)=>n.element!==s.element),details:{ionic:!0,net_charge:0,sites_per_axis:6,interior_coordination:6,bonding:"\u0130yonik kom\u015Fuluk \xE7izgileri; tekli kovalent ba\u011F veya ayr\u0131 molek\xFCl anlam\u0131na gelmez."}}}function Su(i,e={}){let t=gi.find(l=>l.id===i);if(!t)throw new RangeError(`Bilinmeyen malzeme: ${i}`);let n=e??{},s=i==="graphite"?bu(n.layers,3,1,5,!0):1,r=bu(n.spacing,1,.4,4),a;i==="graphene"||i==="graphite"?a=e0(i,s,r):i==="sodium-chloride"?a=n0(i):a=t0(i,i==="silicon"?"Si":"C"),J_(a.atoms);let o=i==="sodium-chloride"?Ql.salt:i==="silicon"?Ql.diamond:Ql[i];return{atoms:a.atoms,bonds:a.bonds,metadata:{id:i,name:t.name,formula:t.formula,structure:t.structure,units:"Birimsiz g\xF6rsel koordinatlar",coordinate_units:"unitless",nearest_neighbor_distance:1,edge_semantics:"nearest-neighbor-connectivity",simulation:!1,finite_patch:!0,limitations:t.limitations,source_url:o,source_checked_at:$_,...a.details}}}var ut=Object.freeze({atoms:1e3,coordinate:1e4,fileBytes:262144,history:20,pageSize:40}),tc=new Set(an.map(i=>i.symbol)),i0=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,s0=/^[A-Za-z0-9_-]{1,48}$/,bo=i=>typeof i=="number"&&Number.isFinite(i),_t=i=>{throw new Error(i)};function _i(i="\xD6zel yap\u0131"){return{format:"yorunge-structure",version:1,units:"angstrom",name:i,atoms:[]}}function jn(i){(!i||typeof i!="object"||Array.isArray(i)||i.format!=="yorunge-structure"||i.version!==1||i.units!=="angstrom")&&_t("Yap\u0131 belgesi yorunge-structure v1 ve angstrom biriminde olmal\u0131."),(typeof i.name!="string"||i.name.length>120||/[\r\n\x00-\x1f]/.test(i.name))&&_t("Yap\u0131 ad\u0131 en fazla 120 karakterlik tek sat\u0131r olmal\u0131."),(!Array.isArray(i.atoms)||i.atoms.length>ut.atoms)&&_t(`Bir yap\u0131da en fazla ${ut.atoms} atom bulunabilir.`);let e=new Set,t=i.atoms.map((s,r)=>((!s||typeof s!="object"||!s0.test(s.id)||typeof s.id!="string"||e.has(s.id))&&_t(`${r+1}. atomun kimli\u011Fi ge\xE7ersiz veya yinelenmi\u015F.`),e.add(s.id),tc.has(s.element)||_t(`${r+1}. atomun element simgesi ge\xE7ersiz.`),(!Array.isArray(s.position)||s.position.length!==3||s.position.some(a=>!bo(a)||Math.abs(a)>ut.coordinate))&&_t(`${r+1}. atom i\xE7in x, y, z sonlu say\u0131 ve \xB1${ut.coordinate} \xC5 aral\u0131\u011F\u0131nda olmal\u0131.`),{id:s.id,element:s.element,position:s.position.map(a=>Object.is(a,-0)?0:a)})),n={..._i(i.name),atoms:t};if(i.source!==void 0){let s=i.source;(!s||s.kind!=="scaled-preset"||typeof s.name!="string"||s.name.length>120||/[\r\n\x00-\x1f]/.test(s.name)||!bo(s.angstrom_per_unit)||s.angstrom_per_unit<.001||s.angstrom_per_unit>1e3)&&_t("Haz\u0131r yap\u0131 \xF6l\xE7ek kayd\u0131 ge\xE7ersiz."),n.source={kind:s.kind,name:s.name,angstrom_per_unit:s.angstrom_per_unit}}return n}function nc(i){let e=new Set(i.map(n=>n.id)),t=1;for(;e.has(`a${t}`);)t++;return`a${t}`}function Mu(i,e="XYZ yap\u0131s\u0131"){(typeof i!="string"||new TextEncoder().encode(i).length>ut.fileBytes)&&_t("XYZ dosyas\u0131 256 KiB s\u0131n\u0131r\u0131n\u0131 a\u015F\u0131yor.");let t=i.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);/^\d+$/.test(t[0]?.trim()||"")||_t("XYZ ilk sat\u0131r\u0131 atom say\u0131s\u0131 olmal\u0131.");let n=Number(t[0].trim());(!Number.isSafeInteger(n)||n>ut.atoms)&&_t(`XYZ en fazla ${ut.atoms} atom i\xE7erebilir.`),t.length<2&&_t("XYZ ikinci sat\u0131r\u0131nda yorum sat\u0131r\u0131 bulunmal\u0131; bo\u015F olabilir.");let s=t[1];(s.length>240||/[\x00-\x08\x0b-\x1f]/.test(s))&&_t("XYZ yorum sat\u0131r\u0131 ge\xE7ersiz veya 240 karakterden uzun."),(t.length<n+2||t.slice(n+2).some(o=>o.trim()!==""))&&_t("XYZ atom say\u0131s\u0131 sat\u0131rlarla e\u015Fle\u015Fmiyor; yaln\u0131z tek kare desteklenir.");let r=[];for(let o=0;o<n;o++){let l=t[o+2].trim().split(/\s+/);(l.length!==4||!tc.has(l[0])||l.slice(1).some(c=>!i0.test(c)))&&_t(`XYZ ${o+3}. sat\u0131r\u0131: Element x y z bi\xE7iminde d\xF6rt alan gerekli; ondal\u0131k ay\u0131r\u0131c\u0131 nokta olmal\u0131.`),r.push({id:`a${o+1}`,element:l[0],position:l.slice(1).map(Number)})}let a=(s.trim()||e).replace(/[\x00-\x1f]/g," ").slice(0,120);return jn({..._i(a),atoms:r})}function wu(i){let e=jn(i);return[String(e.atoms.length),e.name,...e.atoms.map(t=>`${t.element} ${t.position.map(String).join(" ")}`),""].join(`
`)}function Eu({kind:i,element:e,a:t,repeats:n}){let s={sc:[[0,0,0]],bcc:[[0,0,0],[.5,.5,.5]],fcc:[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]]};(!Object.hasOwn(s,i)||!tc.has(e))&&_t("\xD6rg\xFC t\xFCr\xFC veya element ge\xE7ersiz."),(!bo(t)||t<.1||t>1e3)&&_t("\xD6rg\xFC sabiti a, 0,1\u20131000 \xC5 aral\u0131\u011F\u0131nda olmal\u0131."),(!Array.isArray(n)||n.length!==3||n.some(o=>!Number.isInteger(o)||o<1||o>30))&&_t("Her y\xF6ndeki tekrar say\u0131s\u0131 1\u201330 aras\u0131nda tam say\u0131 olmal\u0131.");let r=n.reduce((o,l)=>o*l,s[i].length);r>ut.atoms&&_t(`Bu \xF6rg\xFC ${r} atom \xFCretir; s\u0131n\u0131r ${ut.atoms}. Tekrarlar\u0131 azalt.`);let a=[];for(let o=0;o<n[0];o++)for(let l=0;l<n[1];l++)for(let c=0;c<n[2];c++)for(let h of s[i])a.push({id:`a${a.length+1}`,element:e,position:h.map((d,u)=>([o,l,c][u]+d)*t)});return jn({..._i(`${e} \xB7 ${i.toUpperCase()} \xB7 ${n.join("\xD7")}`),atoms:a})}function Tu(i,e,t){return(!bo(e)||e<.001||e>1e3)&&_t("\xD6l\xE7ek 0,001\u20131000 \xC5/birim aral\u0131\u011F\u0131nda olmal\u0131."),(!i||!Array.isArray(i.atoms))&&_t("Kopyalanacak haz\u0131r yap\u0131 bulunamad\u0131."),jn({..._i(`${t} \xB7 d\xFCzenlenebilir`.slice(0,120)),atoms:i.atoms.map((n,s)=>({id:`a${s+1}`,element:n.element,position:n.position.map(r=>r*e)})),source:{kind:"scaled-preset",name:t,angstrom_per_unit:e}})}function ic(i,e=[]){let t=jn(i),n={},s=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0],a=new Set,o=0;for(let c of t.atoms){n[c.element]=(n[c.element]||0)+1,c.position.forEach((d,u)=>{s[u]=Math.min(s[u],d),r[u]=Math.max(r[u],d)});let h=c.position.join(",");a.has(h)&&o++,a.add(h)}let l=[...new Set(e)].map(c=>t.atoms.find(h=>h.id===c)).filter(Boolean);return{count:t.atoms.length,composition:n,minimum:t.atoms.length?s:null,maximum:t.atoms.length?r:null,extent:t.atoms.length?r.map((c,h)=>c-s[h]):[0,0,0],pairDistance:l.length===2?Math.hypot(...l[0].position.map((c,h)=>c-l[1].position[h])):null,coincident:o}}var re=i=>document.getElementById(i),Yt=i=>structuredClone(i),Pt=(i,e=2)=>Number(i).toLocaleString("tr-TR",{maximumFractionDigits:e}),Lu=i=>String(i).replace(/\d/g,e=>"\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089"[Number(e)]),Mo={H:"Hidrojen",C:"Karbon",N:"Azot",O:"Oksijen"},Au=new URLSearchParams(location.search).get("alan"),Du=document.documentElement.classList.contains("desktop-mode"),Ao={molecules:["Atomlardan yap\u0131ya.","Bir ba\u011F kur. Bir ba\u011F\u0131 ay\u0131r. Maddenin nas\u0131l d\xFCzenlendi\u011Fini ke\u015Ffet.","Kovalent ba\u011F modeli"],elements:["Maddenin alfabesi.","118 elementi, elektron dizilimlerini ve periyodik tablodaki yerlerini incele.","Element katalo\u011Fu"],materials:["Atomik yap\u0131 \xE7al\u0131\u015Fma alan\u0131","118 elementle atom koordinatlar\u0131n\u0131 d\xFCzenle, \xF6rg\xFC kur ve yap\u0131 dosyalar\u0131yla \xE7al\u0131\u015F.","Atom koordinatlar\u0131 ve kristal yap\u0131lar"],cells:["H\xFCcrenin s\u0131n\u0131r\u0131nda.","Zar\u0131n iki taraf\u0131n\u0131 de\u011Fi\u015Ftir; suyun ve \xE7\xF6z\xFCnen maddenin ge\xE7i\u015Fini izle.","\u0130ki b\xF6lmeli h\xFCcre modeli"]},v={mode:Du?"materials":"molecules",busy:!1,epoch:0,mol:null,analysis:null,selected:[],undo:[],redo:[],molPresets:[],cellPresets:[],cell:null,cellResult:null,cellTime:0,playing:!1,cellSpeed:10,material:"graphene",layers:3,spacing:1,materialGraph:null,structure:_i(),structureActive:!1,structureSelected:[],structureUndo:[],structureRedo:[],structurePage:0,structureQuery:"",structureElement:"C",structurePosition:[0,0,0],latticeDraft:{kind:"sc",element:"C",a:3,repeats:[3,3,3]},element:6,spacefill:!1},jt;function W(i,e={},t=[]){let n=document.createElement(i);for(let[s,r]of Object.entries(e))s.startsWith("on")?n.addEventListener(s.slice(2).toLowerCase(),r):s==="class"?n.className=r:s==="text"?n.textContent=r:s in n?n[s]=r:n.setAttribute(s,r);for(let s of Array.isArray(t)?t:[t])s!=null&&n.append(s instanceof Node?s:document.createTextNode(String(s)));return n}var Ze=(i,e,t="")=>W("button",{text:i,class:t,onClick:mn(e)}),et=(i,e)=>W("section",{},[W("h2",{text:i}),...e]),dt=i=>W("p",{class:"hint",text:i}),r0=i=>W("div",{class:"row"},i),mn=i=>async e=>{try{await i(e)}catch(t){qt(t.message,!0)}};function qt(i,e=!1){re("notice").textContent=i,re("notice").classList.toggle("error",e)}function yr(i,e=[],t=""){re("model-details").replaceChildren(...i.map(n=>W("p",{text:n})),...e.map(([n,s])=>W("p",{},[W("a",{href:s,target:"_blank",rel:"noopener noreferrer",text:n})])),...t?[W("code",{text:t})]:[])}function Ro(i){re("metrics").replaceChildren(...i.map(([e,t,n=""])=>W("div",{class:"metric"},[W("span",{text:e}),W("strong",{},[t,W("small",{text:n})])])))}function Nu(i,e){let t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t);W("a",{href:n,download:i}).click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function _r(i,e){let t=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw new Error(n.error||"\u0130stek tamamlanamad\u0131.");return n}function xi(i){v.busy=i,re("workspace").setAttribute("aria-busy",String(i)),re("import").disabled=i;for(let e of["library","inspector","stage-controls"])re(e).inert=i}function Bt(){try{localStorage.setItem("yorunge-science-v1",JSON.stringify(Uu()))}catch{}}function Uu(){return{format:"yorunge-science",version:2,mode:v.mode,structure_workspace:{document:v.structure,active:v.structureActive},...v.mode==="molecules"?{scene:v.mol}:v.mode==="cells"?{experiment:v.cell}:v.mode==="materials"?{material:v.material,layers:v.layers,spacing:v.spacing}:{atomic_number:v.element}}}function bs({reset:i=!0}={}){v.playing=!1;let[e,t,n]=Ao[v.mode];re("page-title").textContent=e,re("page-description").textContent=t,re("model-tag").textContent=n,document.querySelectorAll("[data-mode]").forEach(r=>{r.dataset.mode===v.mode?r.setAttribute("aria-current","page"):r.removeAttribute("aria-current")}),re("workspace").classList.toggle("periodic-mode",v.mode==="elements"),re("workspace").classList.toggle("structure-workspace",v.mode==="materials"),re("scene-panel").hidden=v.mode==="elements",re("periodic-panel").hidden=v.mode!=="elements",re("below-stage").replaceChildren(),re("stage-controls").replaceChildren(),re("scene-legend").replaceChildren(),re("export-result").disabled=!0,re("representation").hidden=v.mode==="cells",v.mode==="molecules"?hc(i):v.mode==="elements"?h0():v.mode==="materials"?Qn(i):To(i);let s=new URL(location.href);Du&&(s.pathname="/studio",s.searchParams.delete("studio")),s.searchParams.set("alan",v.mode),history.replaceState(null,"",s),Bt()}async function rc(i){v.busy||(v.epoch++,v.mode=i,bs(),qt(`${Ao[i][2]} haz\u0131r.`))}async function Ni(i,{record:e=!0,message:t="Molek\xFCl d\xFCzeni g\xFCncellendi."}={}){if(v.busy)return!1;let n=v.epoch;xi(!0);try{let s=await _r("/api/chemistry/analyze",i);return n!==v.epoch?!1:(e&&v.mol&&(v.undo.push(Yt(v.mol)),v.undo=v.undo.slice(-25),v.redo=[]),v.mol=s.scene,v.analysis=s,v.selected=v.selected.filter(r=>v.mol.atoms.some(a=>a.id===r)),v.mode==="molecules"&&hc(!1),Bt(),qt(t),!0)}finally{xi(!1)}}async function So(i){let e=v.molPresets.find(t=>t.id===i);e&&(v.selected=[],await Ni(Yt(e.scene),{message:e.description})&&jt?.resetCamera())}async function Fu(i){let e=Yt(v.mol),t=e.atoms.length+1;for(;e.atoms.some(s=>s.id===`${i.toLowerCase()}${t}`);)t++;let n=t*2.39996;e.atoms.push({id:`${i.toLowerCase()}${t}`,element:i,position:[Math.cos(n)*3,Math.sin(n)*2.2,0]}),await Ni(e,{message:`${Mo[i]} atomu eklendi.`})}function Ou(i){if(v.mode==="materials"&&v.structureActive){Hu(i);return}v.mode!=="molecules"||v.busy||(v.selected=v.selected.includes(i)?v.selected.filter(e=>e!==i):[...v.selected.slice(-1),i],jt?.select(v.selected),Bu(),ku())}async function a0(){if(v.selected.length!==2)throw new Error("Ba\u011F kurmak i\xE7in iki farkl\u0131 atom se\xE7.");let[i,e]=v.selected,t=Yt(v.mol),n=Number(re("bond-order").value),s=t.bonds.find(r=>r.a===i&&r.b===e||r.a===e&&r.b===i);s?s.order=n:t.bonds.push({a:i,b:e,order:n}),await Ni(t,{message:"Ba\u011F d\xFCzeni de\u011Fi\u015Fti. Atom say\u0131s\u0131 korundu; par\xE7alar yeniden hesapland\u0131."})}async function o0(i,e){let t=Yt(v.mol);t.bonds=t.bonds.filter(n=>!(n.a===i&&n.b===e||n.a===e&&n.b===i)),await Ni(t,{message:"Ba\u011F ayr\u0131ld\u0131. Atomlar korunarak olu\u015Fan par\xE7alar listelendi."})}async function l0(){if(!v.selected.length)return;let i=new Set(v.selected),e=Yt(v.mol);e.atoms=e.atoms.filter(t=>!i.has(t.id)),e.bonds=e.bonds.filter(t=>!i.has(t.a)&&!i.has(t.b)),await Ni(e,{message:"Se\xE7ilen atomlar deneyden kald\u0131r\u0131ld\u0131. Geri al ile d\xF6nd\xFCrebilirsin."})}async function Ru(i,e){if(v.busy||!v[i].length)return;let t=Yt(v[i].at(-1)),n=Yt(v.mol);await Ni(t,{record:!1,message:"\xD6nceki d\xFCzen geri y\xFCklendi."})&&(v[i].pop(),v[e].push(n),hc(!1))}function ku(){let i=re("atom-list");i&&i.replaceChildren(...v.mol.atoms.map(e=>{let t=Ze(`${e.element} \xB7 ${e.id}`,()=>Ou(e.id),v.selected.includes(e.id)?"selected":"");return t.setAttribute("aria-pressed",String(v.selected.includes(e.id))),t}))}function hc(i){if(!v.mol||!v.analysis)return;re("scene-title").textContent="Molek\xFCl \xE7al\u0131\u015Fma alan\u0131",re("scene-caption").textContent="Atom se\xE7: t\u0131kla \xB7 D\xF6nd\xFCr: s\xFCr\xFCkle \xB7 G\xF6r\xFCn\xFCm \xF6l\xE7eksizdir",re("scene-legend").replaceChildren(...Object.keys(Mo).map(a=>W("span",{class:"legend-item"},[W("i",{class:`dot legend-${a.toLowerCase()}`}),a])));let e=v.molPresets.filter(a=>!["water-before","water-after","water-parts"].includes(a.id));re("library").replaceChildren(et("Atom ekle",[W("div",{class:"atom-tools"},Object.entries(Mo).map(([a,o])=>{let l=Ze("",()=>Fu(a),`element-${a.toLowerCase()}`);return l.append(a,W("small",{text:o})),l})),dt("Bu ba\u011F modeli H, C, N ve O atomlar\u0131n\u0131 kullan\u0131r. Di\u011Fer 114 element Elementler alan\u0131ndad\u0131r.")]),et("Haz\u0131r molek\xFCller",[W("div",{class:"preset-list"},e.map(a=>{let o=Ze("",()=>So(a.id),"preset-button");return o.append(W("strong",{text:a.label})),o}))]),et("Birlikte deneyelim",[Ze("Suyu atomlardan kur",()=>So("water-parts"),"full"),Ze("Tepkime \xF6rne\u011Fi: su",()=>So("water-before"),"full"),dt("\xD6rnekte ayn\u0131 4 H ve 2 O atomunun \xF6nceki ve sonraki ba\u011F d\xFCzenini kar\u015F\u0131la\u015Ft\u0131r.")]),et("Sahnedeki atomlar",[W("div",{id:"atom-list",class:"atom-list"}),dt("\u0130ki atom se\xE7erek aralar\u0131na ba\u011F kurabilirsin.")])),jt?.setGraph(v.mol,{reset:i}),jt?.select(v.selected),ku(),Bu();let t=Ze("Geri al",()=>Ru("undo","redo"));t.disabled=!v.undo.length;let n=Ze("Yinele",()=>Ru("redo","undo"));n.disabled=!v.redo.length,re("stage-controls").replaceChildren(t,n,W("span",{class:"spacer"}),Ze("Bo\u015F sahne",()=>Ni({schema_version:1,atoms:[],bonds:[]},{message:"Bo\u015F sahne haz\u0131r. Soldan atom ekleyebilirsin."})));let s=v.analysis.totals.element_counts;v.mol.atoms.length===6&&(s.H||0)===4&&(s.O||0)===2&&re("stage-controls").append(Ze("\xDCr\xFCn d\xFCzenini g\xF6ster",()=>So("water-after"),"primary")),Ro([["Atom",v.analysis.totals.atoms],["Ba\u011F",v.analysis.totals.bonds],["Ba\u011Fl\u0131 par\xE7a",v.analysis.components.length]]),re("below-stage").replaceChildren(W("div",{class:"explanation"},[W("strong",{text:"Ba\u011F d\xFCzeni, maddeyi tan\u0131mlar. "}),"Bir ba\u011F\u0131 ay\u0131r\u0131nca atomlar yok olmaz; ba\u011Fl\u0131 par\xE7alar de\u011Fi\u015Fir. \u201CBa\u011F say\u0131s\u0131 tamam\u201D etiketi bu modelin valans kural\u0131n\u0131 anlat\u0131r; ger\xE7ek kararl\u0131l\u0131k veya kendili\u011Finden tepkime garantisi de\u011Fildir."])),yr(["H: 1, C: 4, N: 3, O: 2 tipik n\xF6tr kovalent valanslar\u0131yla \xE7al\u0131\u015Fan bir ba\u011Flant\u0131 graf\u0131d\u0131r. Tek, \xE7ift ve \xFC\xE7l\xFC ba\u011F desteklenir. Molek\xFCl ad\u0131 yaln\u0131z desteklenen tam ba\u011Flant\u0131 yap\u0131s\u0131 e\u015Fle\u015Fince g\xF6sterilir.","Atom konumlar\u0131 g\xF6rsel d\xFCzen i\xE7indir; ger\xE7ek ba\u011F uzunlu\u011Fu, ba\u011F a\xE7\u0131s\u0131 veya enerji minimizasyonu hesaplanmaz. \u0130yonlar, radikaller, rezonans ve kuantum kimyas\u0131 modellenmez.","Su tepkimesi \xF6rne\u011Fi \xF6nceden tan\u0131ml\u0131 iki ba\u011F d\xFCzenini kar\u015F\u0131la\u015Ft\u0131r\u0131r. Aktivasyon enerjisi, s\xFCre, s\u0131cakl\u0131k, verim veya ger\xE7ek ko\u015Fullardaki \xFCr\xFCnler tahmin edilmez."],[["Kovalent ba\u011Flar \u2014 OpenStax","https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding"]],"POST /api/chemistry/analyze"),re("export-result").disabled=!1}function Bu(){let i=v.selected.map(a=>v.mol.atoms.find(o=>o.id===a)).filter(Boolean),e=i.length?i.map(a=>{let o=v.analysis.atoms.find(l=>l.id===a.id);return`${a.element} (${a.id}) \xB7 ${o.used_valence}/${o.max_valence} ba\u011F derecesi`}).join(" / "):"Sahneden veya atom listesinden iki atom se\xE7.",t=W("select",{id:"bond-order","aria-label":"Ba\u011F derecesi"},[W("option",{value:1,text:"Tek ba\u011F"}),W("option",{value:2,text:"\xC7ift ba\u011F"}),W("option",{value:3,text:"\xDC\xE7l\xFC ba\u011F"})]),n=Ze("Ba\u011F kur / g\xFCncelle",a0,"primary full");n.disabled=i.length!==2;let s=Ze("Se\xE7ilen atomlar\u0131 kald\u0131r",l0,"danger full");s.disabled=!i.length;let r=v.analysis.components.map(a=>W("div",{class:"component"},[W("div",{class:"formula",text:Lu(a.formula)}),W("div",{class:"component-name",text:a.name||(a.atom_ids.length===1?"Tek atom":"Adland\u0131r\u0131lmam\u0131\u015F yap\u0131")}),W("span",{class:`pill ${a.complete_valence?"":"incomplete"}`,text:a.complete_valence?"Ba\u011F say\u0131s\u0131 tamam":"A\xE7\u0131k ba\u011F kapasitesi"})]));re("inspector").replaceChildren(et("Ba\u011F d\xFCzenle",[W("div",{class:"selection-summary",text:e}),W("label",{class:"field"},["Ba\u011F derecesi",t]),n,dt("Var olan ba\u011F\u0131 de\u011Fi\u015Ftirmek i\xE7in ayn\u0131 iki atomu se\xE7."),s]),et("Olu\u015Fan par\xE7alar",r.length?r:[dt("Hen\xFCz atom yok. Soldan bir atom ekle.")]),et("Ba\u011Flar",[W("div",{class:"scroll-list"},v.mol.bonds.map(a=>W("div",{class:"bond-row"},[`${a.a} ${["","\u2014","=","\u2261"][a.order]} ${a.b}`,Ze("Ay\u0131r",()=>o0(a.a,a.b))])))]))}var c0=i=>`c-${i.category||"unknown"}`;function h0(){let i=W("input",{type:"search",placeholder:"Ad, simge veya atom numaras\u0131 ara\u2026","aria-label":"Element ara",id:"element-search"}),e=W("select",{"aria-label":"Element ailesi",id:"element-family"},[W("option",{value:"",text:"T\xFCm aileler"}),...Object.entries(vo).map(([r,a])=>W("option",{value:r,text:a}))]),t=W("div",{class:"periodic-grid","aria-label":"118 elementin periyodik tablosu"});an.forEach(r=>{let a=Ze("",()=>{v.element=r.atomic_number,Cu(),t.querySelectorAll("button").forEach(o=>{let l=Number(o.dataset.number)===v.element;o.classList.toggle("selected",l),o.setAttribute("aria-pressed",String(l))}),Bt()},`element-tile ${c0(r)} ${r.atomic_number===v.element?"selected":""}`);a.dataset.number=r.atomic_number,a.setAttribute("aria-label",`${r.atomic_number}, ${r.name}, ${r.symbol}`),a.setAttribute("aria-pressed",String(r.atomic_number===v.element)),a.style.gridColumn=String(r.table_col),a.style.gridRow=String(r.table_row),a.append(W("span",{class:"number",text:r.atomic_number}),W("strong",{text:r.symbol}),W("span",{class:"el-name",text:r.name})),t.append(a)});for(let[r,a]of[["57\u201371",6],["89\u2013103",7]]){let o=W("span",{class:"table-placeholder",text:r});o.style.gridColumn="3",o.style.gridRow=String(a),t.append(o)}let n=W("p",{class:"hint",id:"element-match",text:"118 element g\xF6steriliyor. Tabloyu yatay kayd\u0131rabilirsin."}),s=()=>{let r=i.value.trim().toLocaleLowerCase("tr-TR"),a=0;t.querySelectorAll("button").forEach(o=>{let l=an.find(h=>h.atomic_number===Number(o.dataset.number)),c=(!e.value||l.category===e.value)&&(!r||[l.name,l.name_en,l.symbol,String(l.atomic_number)].some(h=>h.toLocaleLowerCase("tr-TR").includes(r)));o.classList.toggle("filtered",!c),c&&a++}),n.textContent=`${a} e\u015Fle\u015Fme. Soluk elementler filtre d\u0131\u015F\u0131nda; yine de se\xE7ilebilir.`};i.addEventListener("input",s),e.addEventListener("change",s),re("periodic-panel").replaceChildren(W("div",{class:"periodic-tools"},[i,e]),t,W("div",{class:"family-key"},Object.entries(vo).map(([r,a])=>W("span",{},[W("i",{class:`swatch c-${r}`}),a]))),n),Cu(),yr(["118 elementin atom numaras\u0131, simgesi, PubChem taraf\u0131ndan bildirilen atom a\u011F\u0131rl\u0131\u011F\u0131 ve elektron dizilimi yerel veri anl\u0131k g\xF6r\xFCnt\xFCs\xFCnden g\xF6sterilir. Tahmin edilen \xF6zellikler kaynakta belirtilen \u015Fekilde i\u015Faretlenir.","Atom a\u011F\u0131rl\u0131\u011F\u0131 n\xF6tron say\u0131s\u0131 de\u011Fildir. N\xF6tron say\u0131s\u0131 izotopa ba\u011Fl\u0131 oldu\u011Fundan burada atom a\u011F\u0131rl\u0131\u011F\u0131 yuvarlanarak t\xFCretilmez. Kabuk \xE7izimi bir kuantum orbital \xE7\xF6z\xFCm\xFC veya \xF6l\xE7ekli y\xF6r\xFCnge de\u011Fildir.","B\xFCt\xFCn elementler katalogda bulunur. Molek\xFCl d\xFCzenleyicisindeki ba\u011F hesab\u0131 bu s\xFCr\xFCmde yaln\u0131z H, C, N ve O i\xE7in vard\u0131r; di\u011Fer elementlerde otomatik tepkime hesab\u0131 yap\u0131lmaz."],[["Element verileri \u2014 PubChem","https://pubchem.ncbi.nlm.nih.gov/periodic-table/"],["Kaynak veri JSON","https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON"]])}function zu(i,e=new Set){if(e.has(i.symbol))return[];e.add(i.symbol);let t=i.electron_configuration||"",n=Array(7).fill(0),s=t.match(/\[([A-Za-z]+)\]/);if(s){let r=an.find(a=>a.symbol===s[1]);r&&zu(r,e).forEach((o,l)=>n[l]=o)}for(let r of t.matchAll(/([1-7])[spdf]\s*(\d+)/g))n[Number(r[1])-1]+=Number(r[2]);return n}function pn(i,e={}){let t=document.createElementNS("http://www.w3.org/2000/svg",i);for(let[n,s]of Object.entries(e))t.setAttribute(n,String(s));return t}function u0(i){let e=pn("svg",{viewBox:"0 0 240 240",class:"shell-svg",role:"img","aria-label":`${i.name} i\xE7in \u015Fematik elektron kabuklar\u0131`}),t=zu(i),n=t.reduce((a,o,l)=>o?l+1:a,0);if(t.reduce((a,o)=>a+o,0)!==i.atomic_number||!n){let a=pn("text",{x:120,y:120,"text-anchor":"middle",fill:"#5d7081","font-size":11});return a.textContent="Kabuk \u015Femas\u0131 mevcut de\u011Fil",e.append(a),e}let s=pn("circle",{cx:120,cy:120,r:17,fill:"#d8eceb"});e.append(s);let r=pn("text",{x:120,y:124,"text-anchor":"middle",fill:"#225966","font-size":11});return r.textContent=i.symbol,e.append(r),t.forEach((a,o)=>{if(!a)return;let l=29+o/Math.max(1,n-1)*78;e.append(pn("circle",{cx:120,cy:120,r:l,fill:"none",stroke:"#c6d9e2","stroke-width":1}));for(let c=0;c<a;c++){let h=c*2*Math.PI/a+o*.3;e.append(pn("circle",{cx:120+Math.cos(h)*l,cy:120+Math.sin(h)*l,r:2.7,fill:o===n-1?"#0b8589":"#668ba2"}))}}),e}function Cu(){let i=an.find(s=>s.atomic_number===v.element)||an[5],e=[["Proton",i.atomic_number],["Elektron (n\xF6tr)",i.atomic_number],["Atom a\u011F\u0131rl\u0131\u011F\u0131",i.atomic_weight],["Standart h\xE2l",i.phase],["Aile",vo[i.category]||i.category],["Periyot",i.period]],t=W("dl",{class:"properties"});e.forEach(([s,r])=>t.append(W("div",{},[W("dt",{text:s}),W("dd",{text:r})])));let n=[];Mo[i.symbol]&&n.push(Ze("Molek\xFCle atom ekle",async()=>{await rc("molecules"),await Fu(i.symbol)},"primary full")),i.symbol==="C"&&n.push(Ze("Karbon yap\u0131lar\u0131n\u0131 incele",()=>(v.material="graphene",rc("materials")),"full")),re("inspector").replaceChildren(et("Se\xE7ili element",[W("div",{class:"element-hero"},[W("div",{class:"element-number",text:i.atomic_number}),W("div",{class:"large-symbol",text:i.symbol}),W("h2",{text:i.name}),W("p",{text:i.name_en})]),u0(i),dt("Kabuk \u015Femas\u0131 \xB7 \xF6l\xE7eksiz")]),et("Element bilgisi",[t,W("h3",{text:"Elektron dizilimi"}),W("p",{class:"material-info",text:i.electron_configuration||"Kaynakta verilmemi\u015F"}),...n]),et("Veri kayna\u011F\u0131",[dt("PubChem / ABD Ulusal T\u0131p K\xFCt\xFCphanesi. Atom a\u011F\u0131rl\u0131\u011F\u0131 kaynakta bildirildi\u011Fi gibi g\xF6sterilir; baz\u0131 a\u011F\u0131r elementlerin \xF6zellikleri \xF6ng\xF6r\xFCd\xFCr."),W("a",{href:`https://pubchem.ncbi.nlm.nih.gov/element/${i.atomic_number}`,target:"_blank",rel:"noopener noreferrer",text:"Elementin kaynak sayfas\u0131"})]))}function Pu(i,e,t,n,s,r,a){let o=W("output",{text:Pt(t)}),l=W("input",{type:"range",id:e,min:n,max:s,step:r,value:t,"aria-label":i});return l.addEventListener("input",mn(()=>(o.textContent=Pt(Number(l.value)),a(Number(l.value))))),W("label",{class:"field"},[i,W("span",{class:"unit"},[o]),l])}function sc(i=!1){let e=gi.find(t=>t.id===v.material);v.materialGraph=Su(e.id,{layers:v.layers,spacing:v.spacing}),jt?.setGraph(v.materialGraph,{reset:i,dense:!0}),jt?.select([]),Ro([["G\xF6r\xFCnen atom",v.materialGraph.atoms.length],["G\xF6r\xFCnen ba\u011Flant\u0131",v.materialGraph.bonds.length],["Yap\u0131",e.formula]])}function ac(i,e,t){let n=W("select",{id:i,"aria-label":"Element",onChange:s=>t?.(s.target.value)},an.map(s=>W("option",{value:s.symbol,text:`${s.atomic_number} \xB7 ${s.symbol} \u2014 ${s.name}`})));return n.value=e,n}function wo(i,e,t,n,s,r,a="any"){let o=W("input",{id:e,type:"number",min:n,max:s,step:a,required:!0,value:t});return r&&o.addEventListener("input",()=>r(o.value===""?NaN:Number(o.value))),W("label",{class:"field"},[i,o])}function Gu(i,e,t){return W("div",{class:"structure-coordinates"},["X","Y","Z"].map((n,s)=>wo(`${n} (\xC5)`,`${i}-${n.toLowerCase()}`,e[s],-ut.coordinate,ut.coordinate,r=>t(s,r))))}function Fn(i,{reset:e=!1,selected:t=v.structureSelected,message:n="Atomik yap\u0131 g\xFCncellendi."}={}){let s=jn(i);JSON.stringify(s)!==JSON.stringify(v.structure)&&(v.structureUndo.push({document:Yt(v.structure),selected:[...v.structureSelected]}),v.structureUndo=v.structureUndo.slice(-ut.history),v.structureRedo=[]),v.structure=s,v.structureActive=!0,v.structureSelected=t.filter(r=>s.atoms.some(a=>a.id===r)).slice(-2),Qn(e),Bt(),qt(n)}function Iu(i,e){if(!v[i].length)return;v[e].push({document:Yt(v.structure),selected:[...v.structureSelected]});let t=v[i].pop();v.structure=t.document,v.structureSelected=t.selected,v.structureActive=!0,Qn(!0),Bt(),qt("Yap\u0131 d\xFCzenlemesi geri y\xFCklendi.")}function Hu(i){v.busy||!v.structure.atoms.some(e=>e.id===i)||(v.structureSelected=v.structureSelected.includes(i)?v.structureSelected.filter(e=>e!==i):[...v.structureSelected.slice(-1),i],jt?.select(v.structureSelected),lc(),oc())}function d0(){let i=wu(v.structure),e=URL.createObjectURL(new Blob([i],{type:"chemical/x-xyz;charset=utf-8"}));W("a",{href:e,download:"yorunge-yapi.xyz"}).click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),qt("XYZ dosyas\u0131 \xC5 koordinatlar\u0131yla indirildi.")}function Qn(i){if(re("workspace").classList.add("structure-workspace"),v.structureActive){f0(i);return}re("representation").hidden=!1,p0(i),re("library").prepend(et("Yap\u0131 d\xFCzenleme",[Ze(v.structure.atoms.length?`\xD6zel yap\u0131ya d\xF6n (${v.structure.atoms.length} atom)`:"\xD6zel yap\u0131 d\xFCzenle",()=>{v.structureActive=!0,Qn(!0),Bt()},"full primary"),Ze("Bo\u015F yap\u0131 olu\u015Ftur",()=>Fn(_i(),{reset:!0,selected:[],message:"Bo\u015F yap\u0131 a\xE7\u0131ld\u0131. Element se\xE7ip atom ekleyebilirsin."}),"full"),dt("118 element \xB7 Serbest \xC5 koordinatlar\u0131 \xB7 XYZ dosyalar\u0131")]));let e=wo("\xD6l\xE7ek (\xC5 / g\xF6sterim birimi)","structure-preset-scale","",.001,1e3),t=W("form",{class:"structure-preset-copy"},[e,W("button",{type:"submit",class:"full",text:"\xD6l\xE7ekle ve d\xFCzenle"}),dt("Bu haz\u0131r yap\u0131 birimsizdir. Girdi\u011Fin \xF6l\xE7ek b\xFCt\xFCn koordinatlara uygulan\u0131r; ba\u011Flant\u0131 \xE7izgileri aktar\u0131lmaz.")]);t.addEventListener("submit",mn(n=>{if(n.preventDefault(),!t.reportValidity())return;let s=gi.find(r=>r.id===v.material).name;Fn(Tu(v.materialGraph,Number(re("structure-preset-scale").value),s),{reset:!0,selected:[],message:"Haz\u0131r yap\u0131 belirtti\u011Fin \xC5/birim \xF6l\xE7e\u011Fiyle kopyaland\u0131."})})),re("library").append(et("Haz\u0131r yap\u0131y\u0131 kopyala",[t]))}function f0(i){re("scene-title").textContent=v.structure.name||"\xD6zel yap\u0131",re("scene-caption").textContent="Koordinatlar: \xC5 \xB7 K\xFCreler atom i\u015Faret\xE7isidir \xB7 D\xF6nd\xFCr: s\xFCr\xFCkle",re("scene-legend").replaceChildren(),re("representation").hidden=!0,v.materialGraph={atoms:v.structure.atoms,bonds:[]},jt?.setGraph(v.materialGraph,{reset:i,dense:!0,structure:!0}),jt?.select(v.structureSelected);let e=W("input",{id:"structure-name",maxLength:120,value:v.structure.name,"aria-label":"Yap\u0131 ad\u0131",onChange:mn(h=>{Fn({...v.structure,name:h.target.value})})}),t=W("form",{id:"structure-add-form"},[W("label",{class:"field"},["Element \xB7 118",ac("structure-add-element",v.structureElement,h=>{v.structureElement=h})]),Gu("structure-add",v.structurePosition,(h,d)=>{v.structurePosition[h]=d}),W("button",{type:"submit",class:"full primary",text:"Atom ekle",disabled:v.structure.atoms.length>=ut.atoms})]);t.addEventListener("submit",mn(h=>{if(h.preventDefault(),!t.reportValidity())return;let d=nc(v.structure.atoms);Fn({...v.structure,atoms:[...v.structure.atoms,{id:d,element:v.structureElement,position:[...v.structurePosition]}]},{selected:[d],message:`${v.structureElement} atomu eklendi. Konumlar \xC5 biriminde.`})}));let n=v.latticeDraft,s=W("select",{id:"structure-lattice-kind",onChange:h=>{n.kind=h.target.value}},[W("option",{value:"sc",text:"SC \xB7 Basit k\xFCbik"}),W("option",{value:"bcc",text:"BCC \xB7 Hacim merkezli k\xFCbik"}),W("option",{value:"fcc",text:"FCC \xB7 Y\xFCzey merkezli k\xFCbik"})]);s.value=n.kind;let r=W("form",{id:"structure-lattice-form"},[W("label",{class:"field"},["\xD6rg\xFC t\xFCr\xFC",s]),W("label",{class:"field"},["Element",ac("structure-lattice-element",n.element,h=>{n.element=h})]),wo("\xD6rg\xFC sabiti a (\xC5)","structure-lattice-a",n.a,.1,1e3,h=>{n.a=h}),W("div",{class:"structure-coordinates"},["X","Y","Z"].map((h,d)=>wo(`${h} tekrar`,`structure-repeat-${d}`,n.repeats[d],1,30,u=>{n.repeats[d]=u},1))),W("button",{type:"submit",class:"full",text:"Yap\u0131y\u0131 \xF6rg\xFCyle de\u011Fi\u015Ftir"}),dt("Sonlu kesit; periyodik s\u0131n\u0131r yok. H\xFCcre ba\u015F\u0131na SC: 1, BCC: 2, FCC: 4 atom. \xD6nceki yap\u0131y\u0131 Geri al ile getirebilirsin.")]);r.addEventListener("submit",mn(h=>{h.preventDefault(),r.reportValidity()&&Fn(Eu(n),{reset:!0,selected:[],message:"K\xFCbik \xF6rg\xFC \xFCretildi. Atom koordinatlar\u0131 d\xFCzenlenebilir."})}));let a=W("input",{id:"structure-xyz-file",type:"file",accept:".xyz,text/plain,chemical/x-xyz",hidden:!0});a.addEventListener("change",mn(async()=>{let h=a.files[0];if(a.value="",!(!h||v.busy)){if(h.size>ut.fileBytes)throw new Error("XYZ dosyas\u0131 256 KiB s\u0131n\u0131r\u0131n\u0131 a\u015F\u0131yor.");xi(!0);try{let d=Mu(await h.text(),h.name.replace(/\.xyz$/i,""));Fn(d,{reset:!0,selected:[],message:"XYZ yap\u0131s\u0131 \xC5 birimiyle a\xE7\u0131ld\u0131. \xD6nceki yap\u0131 Geri al ile geri getirilebilir."})}finally{xi(!1)}}})),re("library").replaceChildren(et("\xD6zel yap\u0131",[W("label",{class:"field"},["Yap\u0131 ad\u0131",e]),Ze("Haz\u0131r yap\u0131lar\u0131 a\xE7",()=>{v.structureActive=!1,Qn(!0),Bt()},"full"),Ze("Bo\u015F yap\u0131 olu\u015Ftur",()=>Fn(_i(),{reset:!0,selected:[],message:"Bo\u015F yap\u0131 a\xE7\u0131ld\u0131. \xD6nceki d\xFCzen Geri al ile geri getirilebilir."}),"full")]),et("Atom ekle",[t,dt(`S\u0131n\u0131r: ${ut.atoms} atom; her eksende \xB1${ut.coordinate} \xC5.`)]),et("K\xFCbik \xF6rg\xFC \xFCret",[W("details",{class:"structure-lattice"},[W("summary",{text:"SC / BCC / FCC ayarlar\u0131"}),r])]),et("Yap\u0131 dosyalar\u0131",[r0([Ze("XYZ a\xE7",()=>a.click()),Ze("XYZ indir",d0)]),a,dt("XYZ: tek kare, Element x y z, \xC5. Atom kimlikleri XYZ'de saklanmaz. \xDCstteki Kaydet, yap\u0131 kimliklerini ve birimini JSON olarak korur.")]));let o=Ze("Geri al",()=>Iu("structureUndo","structureRedo")),l=Ze("Yinele",()=>Iu("structureRedo","structureUndo"));o.disabled=!v.structureUndo.length,l.disabled=!v.structureRedo.length;let c=Ze("Se\xE7imi temizle",()=>{v.structureSelected=[],jt?.select([]),lc(),oc()});re("stage-controls").replaceChildren(o,l,c,W("span",{class:"spacer"}),W("span",{class:"hint",text:"\u0130ki atom se\xE7: merkezler aras\u0131 mesafe"})),lc(),oc(),yr(["Bu d\xFCzenleyici sonlu atom koordinatlar\u0131yla \xE7al\u0131\u015F\u0131r. 1 \xC5 = 10\u207B\xB9\u2070 m. Koordinatlar dosyaya oldu\u011Fu gibi yaz\u0131l\u0131r; ekrandaki merkezleme veya \xF6l\xE7ekleme belge koordinatlar\u0131n\u0131 de\u011Fi\u015Ftirmez.","118 elementin simgesi se\xE7ilebilir. K\xFCreler se\xE7im i\u015Faret\xE7isidir; fiziksel atom yar\u0131\xE7ap\u0131, ba\u011F, enerji, kuvvet, kararl\u0131l\u0131k, gev\u015Feme veya malzeme \xF6zelli\u011Fi hesaplanmaz. SC, BCC ve FCC \xFCreticileri se\xE7ilen geometrik baz\u0131 tekrarlar; se\xE7ilen elementin bu \xF6rg\xFCde kararl\u0131 oldu\u011Funu s\xF6ylemez.","K\xFCbik \xF6rg\xFCler [0,n\u2093a) \xD7 [0,n\u1D67a) \xD7 [0,n\u{1D4CF}a) aral\u0131\u011F\u0131nda \xFCretilen sonlu kesitlerdir; periyodik s\u0131n\u0131r, h\xFCcre vekt\xF6r\xFC veya g\xF6r\xFCnt\xFC atomu eklenmez. G\xF6r\xFCnen min\u2013maks \xF6l\xE7\xFCler atom merkezlerinin s\u0131n\u0131rlar\u0131d\u0131r.",`Kaynak s\u0131n\u0131rlar\u0131: ${ut.atoms} atom, \xB1${ut.coordinate} \xC5, 256 KiB i\xE7e aktar\u0131m ve son ${ut.history} d\xFCzenleme i\xE7in geri alma. XYZ yaln\u0131z tek kare ve d\xF6rt s\xFCtun kabul eder; geni\u015Fletilmi\u015F XYZ alanlar\u0131 kabul edilmez.`,...v.structure.source?[`\u0130lk kopyalama kayd\u0131: ${v.structure.source.name}; ${v.structure.source.angstrom_per_unit} \xC5 / birimsiz g\xF6sterim birimi. Sonraki atom d\xFCzenlemeleri bu ba\u015Flang\u0131\xE7 kayd\u0131n\u0131 de\u011Fi\u015Ftirmez.`]:[]]),re("export-result").disabled=!1}function oc(){let i=ic(v.structure,v.structureSelected);Ro([["Atom",i.count],["Element t\xFCr\xFC",Object.keys(i.composition).length],["Se\xE7ili \xE7ift mesafesi",i.pairDistance===null?"\u2014":Pt(i.pairDistance,5),i.pairDistance===null?"":"\xC5"]]);let e=Object.entries(i.composition).map(([t,n])=>`${t}: ${n}`).join(" \xB7 ")||"Atom eklenmedi";re("below-stage").replaceChildren(W("div",{class:"explanation structure-summary"},[W("strong",{text:"Bile\u015Fim: "}),e,W("div",{text:`Merkezlerin kaplad\u0131\u011F\u0131 aral\u0131k (X \xD7 Y \xD7 Z): ${i.extent.map(t=>Pt(t,4)).join(" \xD7 ")} \xC5`}),...i.minimum?[W("div",{text:`Min: ${i.minimum.map(t=>Pt(t,4)).join(", ")} \xC5 \xB7 Maks: ${i.maximum.map(t=>Pt(t,4)).join(", ")} \xC5`})]:[],...i.coincident?[W("div",{class:"structure-warning",text:`${i.coincident} atom ba\u015Fka bir atomla tam ayn\u0131 konumda. Liste \xFCzerinden ayr\u0131 ayr\u0131 se\xE7ebilirsin.`})]:[]]))}function lc(){let i=v.structureSelected.map(n=>v.structure.atoms.find(s=>s.id===n)).filter(Boolean),e=[dt("Bir atomu d\xFCzenlemek veya iki atomun mesafesini \xF6l\xE7mek i\xE7in sahneden ya da listeden se\xE7. Se\xE7ili atoma yeniden t\u0131klamak se\xE7imini kald\u0131r\u0131r.")];if(i.length===1){let n=i[0],s=n.element,r=[...n.position],a=W("form",{id:"structure-edit-form"},[W("p",{class:"structure-atom-id",text:`Atom: ${n.id}`}),W("label",{class:"field"},["Element",ac("structure-edit-element",s,o=>{s=o})]),Gu("structure-edit",r,(o,l)=>{r[o]=l}),W("button",{type:"submit",class:"primary full",text:"De\u011Fi\u015Fikli\u011Fi uygula"})]);a.addEventListener("submit",mn(o=>{o.preventDefault(),a.reportValidity()&&Fn({...v.structure,atoms:v.structure.atoms.map(l=>l.id===n.id?{...l,element:s,position:r}:l)},{message:`${n.id} elementi ve \xC5 koordinatlar\u0131 g\xFCncellendi.`})})),e.push(a)}else e.push(W("p",{class:"selection-summary",text:i.length===2?`${i[0].id} (${i[0].element}) + ${i[1].id} (${i[1].element}) \xB7 ${Pt(ic(v.structure,v.structureSelected).pairDistance,6)} \xC5`:"Se\xE7ili atom yok."}));if(i.length){let n=Ze("\xC7o\u011Falt \xB7 X +1 \xC5",()=>{let s=Yt(v.structure.atoms),r=[];for(let a of i){let o=nc(s);s.push({...Yt(a),id:o,position:[a.position[0]+1,a.position[1],a.position[2]]}),r.push(o)}Fn({...v.structure,atoms:s},{selected:r,message:"Se\xE7ili atomlar X y\xF6n\xFCnde +1 \xC5 kayd\u0131r\u0131larak \xE7o\u011Falt\u0131ld\u0131."})});n.disabled=v.structure.atoms.length+i.length>ut.atoms,e.push(W("div",{class:"structure-selection-actions"},[n,Ze("Se\xE7ileni sil",()=>{Fn({...v.structure,atoms:v.structure.atoms.filter(s=>!v.structureSelected.includes(s.id))},{selected:[],message:"Se\xE7ili atomlar silindi."})},"danger")]))}let t=W("input",{id:"structure-atom-search",type:"search",value:v.structureQuery,placeholder:"Element, ad veya atom kimli\u011Fi","aria-label":"Atom listesini filtrele"});t.addEventListener("input",()=>{v.structureQuery=t.value,v.structurePage=0,Eo()}),re("inspector").replaceChildren(et("Atom \xF6zellikleri",e),et("Atom listesi",[t,W("div",{id:"structure-atom-list",class:"structure-atom-list"}),W("div",{id:"structure-pagination",class:"structure-pagination"})])),Eo()}function Eo(){let i=v.structureQuery.toLocaleLowerCase("tr-TR").trim(),e=v.structure.atoms.filter(a=>{let o=an.find(l=>l.symbol===a.element);return`${a.id} ${a.element} ${o?.name} ${o?.name_en}`.toLocaleLowerCase("tr-TR").includes(i)}),t=Math.max(1,Math.ceil(e.length/ut.pageSize));v.structurePage=Math.min(v.structurePage,t-1);let n=v.structurePage*ut.pageSize;re("structure-atom-list").replaceChildren(...e.slice(n,n+ut.pageSize).map(a=>{let o=Ze("",()=>Hu(a.id),`structure-atom ${v.structureSelected.includes(a.id)?"selected":""}`);return o.setAttribute("aria-pressed",String(v.structureSelected.includes(a.id))),o.append(W("strong",{text:`${a.element} \xB7 ${a.id}`}),W("small",{text:`${a.position.map(l=>Pt(l,4)).join(" / ")} \xC5`})),o}),...e.length?[]:[dt("E\u015Fle\u015Fen atom yok.")]);let s=Ze("\xD6nceki",()=>{v.structurePage--,Eo()}),r=Ze("Sonraki",()=>{v.structurePage++,Eo()});s.disabled=v.structurePage===0,r.disabled=v.structurePage+1>=t,re("structure-pagination").replaceChildren(s,W("span",{text:`${v.structurePage+1}/${t} \xB7 ${e.length} atom`}),r)}function p0(i){let e=gi.find(t=>t.id===v.material)||gi[0];v.material=e.id,re("scene-title").textContent=e.name,re("scene-caption").textContent="D\xF6nd\xFCr: s\xFCr\xFCkle \xB7 Atom konumlar\u0131 \u015Fematiktir",re("library").replaceChildren(et("Yap\u0131 k\xFCt\xFCphanesi",[W("div",{class:"preset-list"},gi.map(t=>{let n=Ze("",()=>{v.material=t.id,Qn(!0),Bt(),qt(`${t.name} yap\u0131s\u0131 a\xE7\u0131ld\u0131.`)},`preset-button ${t.id===v.material?"active":""}`);return n.append(W("strong",{text:t.name}),W("small",{text:t.formula})),n}))]),et("G\xF6r\xFCn\xFCm\xFC de\u011Fi\u015Ftir",e.id==="graphite"?[Pu("Katman say\u0131s\u0131","layers",v.layers,1,5,1,t=>{v.layers=t,sc(),Bt()}),Pu("Katman aral\u0131\u011F\u0131","spacing",v.spacing,.5,3,.1,t=>{v.spacing=t,sc(),Bt()}),dt("Katman aral\u0131\u011F\u0131 bir g\xF6rsel kontrol\xFCd\xFCr; ay\u0131rma kuvveti veya enerji hesab\u0131 de\u011Fildir.")]:[dt("Atomlar\u0131 farkl\u0131 a\xE7\u0131lardan incelemek i\xE7in sahneyi s\xFCr\xFCkle. K\xFCre\u2013\xE7ubuk d\xFC\u011Fmesiyle atomlar\u0131n kaplad\u0131\u011F\u0131 alan\u0131 kar\u015F\u0131la\u015Ft\u0131r.")]),et("Karbonu kar\u015F\u0131la\u015Ft\u0131r",[Ze("Grafen",()=>{v.material="graphene",Qn(!0),Bt()},"full"),Ze("Grafit",()=>{v.material="graphite",Qn(!0),Bt()},"full"),Ze("Elmas",()=>{v.material="diamond",Qn(!0),Bt()},"full")])),sc(i),re("stage-controls").replaceChildren(W("span",{class:"hint",text:"Sonlu kristal kesiti \xB7 kenar atomlar\u0131n\u0131n kom\u015Fular\u0131 eksik olabilir"})),re("inspector").replaceChildren(et(e.name,[W("div",{class:"component"},[W("div",{class:"formula",text:Lu(e.formula)}),W("p",{class:"material-info",text:e.description})])]),et("Atomlar\u0131n d\xFCzeni",[W("p",{class:"material-info",text:e.structure})]),et("Bu g\xF6r\xFCn\xFCm neyi hesaplar?",[W("p",{class:"material-info",text:Array.isArray(e.limitations)?e.limitations.join(" "):e.limitations}),dt("Is\u0131 iletimi, elektrik iletkenli\u011Fi, k\u0131r\u0131lma ve \xFCretim ko\u015Fullar\u0131 bu modelden hesaplanmaz.")])),re("below-stage").replaceChildren(W("div",{class:"explanation"},[W("strong",{text:"D\xFCzen de\u011Fi\u015Fince yap\u0131 de\u011Fi\u015Fir. "}),"Grafen tek karbon katman\u0131n\u0131, grafit \xFCst \xFCste katmanlar\u0131, elmas \xFC\xE7 boyutlu bir a\u011F\u0131 g\xF6sterir. Bunlar ayr\u0131 haz\u0131r yap\u0131lard\u0131r; aralar\u0131nda kendili\u011Finden d\xF6n\xFC\u015F\xFCm hesaplanmaz."])),yr(["Bu alan grafen, grafit, elmas, kaya tuzu ve silisyum i\xE7in sonlu, \u015Fematik kafes kesitleri \xFCretir. Atom ve ba\u011Flant\u0131 say\u0131lar\u0131 ekranda g\xF6r\xFCnen kesite aittir; sonsuz malzemenin miktar\u0131 de\u011Fildir.","Ba\u011F \xE7ubuklar\u0131 kom\u015Fulu\u011Fu g\xF6sterir. Grafenin delokalize elektronlar\u0131 ve kaya tuzunun iyonik etkile\u015Fimleri ayn\u0131 kovalent ba\u011F modeliyle hesaplanmaz. Katman kayd\u0131r\u0131c\u0131s\u0131 yaln\u0131z g\xF6r\xFCnt\xFC d\xFCzenidir."],[["Grafen yap\u0131s\u0131 \u2014 Graphene Flagship","https://graphene-flagship.eu/materials/graphene/"]]),re("export-result").disabled=!1}function cc(){v.cellResult=null,v.playing=!1,v.cellTime=0}function yi(i,e,t,n,s,r=""){let a=W("input",{id:`cell-${e}`,type:"number",value:v.cell[e],min:t,max:n,step:"any",required:!0});return a.addEventListener("change",mn(()=>{a.reportValidity()&&(v.cell[e]=Number(a.value),cc(),Di(),Vu(),re("cell-timeline").disabled=!0,re("cell-timeline").max=v.cell.duration_s,re("export-result").disabled=!0,re("cell-division_at_s")&&(re("cell-division_at_s").max=v.cell.duration_s-.1),Bt(),qt("H\xFCcre ayar\u0131 de\u011Fi\u015Fti. Yeni sonu\xE7 i\xE7in deneyi \xE7al\u0131\u015Ft\u0131r."))})),W("label",{class:"field"},[i,W("span",{class:"unit",text:r}),a])}function m0(){let i=v.cell;return{t_s:0,cells:[{id:"cell-1",volume_pl:i.cell_volume_pl,solute_fmol:i.cell_volume_pl*i.inside_concentration_mm,concentration_mm:i.inside_concentration_mm}],external_volume_pl:i.external_volume_pl,external_solute_fmol:i.external_volume_pl*i.outside_concentration_mm,external_concentration_mm:i.outside_concentration_mm}}function g0(){if(!v.cellResult)return m0();let i=v.cellResult.frames,e=0,t=i.length-1;for(;e<t;){let n=Math.ceil((e+t)/2);i[n].t_s<=v.cellTime+1e-8?e=n:t=n-1}return i[e]}function To(i){if(!v.cell)return;re("scene-title").textContent="H\xFCcre ve d\u0131\u015F ortam",re("scene-caption").textContent="Hacim \xF6l\xE7e\u011Fi g\xF6reli \xB7 organeller \u015Fematik \xB7 oynatma 10\xD7";let e=W("input",{type:"checkbox",checked:v.cell.division_at_s!==null,id:"division-enabled"});e.addEventListener("change",()=>{v.cell.division_at_s=e.checked?v.cell.duration_s/2:null,cc(),To(!1),Bt()});let t=[W("label",{class:"field check"},[e,"\u015Eematik ikiye b\xF6l\xFCnme"])];v.cell.division_at_s!==null&&t.push(yi("B\xF6l\xFCnme zaman\u0131","division_at_s",.1,v.cell.duration_s-.1,.1,"s")),t.push(dt("B\xF6l\xFCnmede hacim ve \xE7\xF6z\xFCnen miktar\u0131 e\u015Fit payla\u015F\u0131l\u0131r. DNA kopyalanmas\u0131 ve h\xFCcre d\xF6ng\xFCs\xFC hesaplanmaz.")),re("library").replaceChildren(et("Haz\u0131r deneyler",[W("div",{class:"preset-list"},v.cellPresets.map(r=>{let a=Ze("",()=>{v.cell=Yt(r.experiment),cc(),To(!0),Bt(),qt(r.description)},"preset-button");return a.append(W("strong",{text:r.label})),a}))]),et("Zar\u0131n iki taraf\u0131",[yi("\u0130\xE7 yo\u011Funluk","inside_concentration_mm",0,1e3,1,"mM"),yi("D\u0131\u015F yo\u011Funluk","outside_concentration_mm",0,1e3,1,"mM"),yi("H\xFCcre hacmi","cell_volume_pl",.1,10,.1,"pL"),yi("D\u0131\u015F ortam hacmi","external_volume_pl",1,100,1,"pL")]),et("Zar ge\xE7irgenli\u011Fi",[yi("Su katsay\u0131s\u0131","water_permeability_pl_s_mm",0,.001,1e-5,"pL/(s\xB7mM)"),yi("\xC7\xF6z\xFCnen katsay\u0131s\u0131","solute_permeability_pl_s",0,.05,.001,"pL/s"),yi("Deney s\xFCresi","duration_s",1,300,1,"s")]),et("B\xF6l\xFCnme",t));let n=Ze(v.playing?"Duraklat":v.cellResult?"Oynat":"Deneyi \xE7al\u0131\u015Ft\u0131r",_0,"primary");n.id="cell-run";let s=W("input",{id:"cell-timeline",type:"range",min:0,max:v.cellResult?.summary.elapsed_s||v.cell.duration_s,step:.01,value:v.cellTime,disabled:!v.cellResult,"aria-label":"H\xFCcre deney zaman\u0131"});s.addEventListener("input",()=>{v.playing=!1,v.cellTime=Number(s.value),Di()}),re("stage-controls").replaceChildren(n,Ze("Ba\u015Fa d\xF6n",()=>{v.cellTime=0,v.playing=!1,Di()}),s,W("output",{id:"cell-time",text:`${Pt(v.cellTime,1)} s`})),re("below-stage").replaceChildren(W("div",{class:"chart-box"},[W("h2",{},["Toplam h\xFCcre hacmi",W("small",{text:"pL / saniye"})]),W("div",{id:"cell-chart"}),W("p",{class:"science-note",text:"B\xF6l\xFCnme hacmi \xE7o\u011Faltmaz; ayn\u0131 hacim iki h\xFCcreye payla\u015F\u0131l\u0131r. Grafik iki h\xFCcrenin toplam\u0131n\u0131 izler."})])),Di(i),Vu(),yr(["\u0130\xE7 ve d\u0131\u015F ortam sonlu, iyi kar\u0131\u015Fm\u0131\u015F iki b\xF6lme olarak modellenir. \xC7\xF6z\xFCnen miktar\u0131 fmol, hacim pL, yo\u011Funluk mM kullan\u0131r; 1 fmol/pL = 1 mM. Su yo\u011Fun \xE7\xF6z\xFCnen tarafa, ge\xE7irgen \xE7\xF6z\xFCnen ise kendi yo\u011Funluk fark\u0131n\u0131n azald\u0131\u011F\u0131 y\xF6ne ta\u015F\u0131n\u0131r.","Toplam su hacmi ve \xE7\xF6z\xFCnen miktar\u0131 korunur. Katsay\u0131lar kullan\u0131c\u0131 taraf\u0131ndan se\xE7ilen e\u011Fitim parametreleridir; belirli bir ger\xE7ek h\xFCcreye kalibre edilmemi\u015Ftir.","H\xFCcre zar\u0131, \xE7ekirdek ve organellerin g\xF6r\xFCn\xFCm\xFC \u015Fematiktir. B\xF6l\xFCnme yaln\u0131z miktarlar\u0131 iki \xF6zde\u015F h\xFCcreye payla\u015F\u0131r. Metabolizma, DNA, canl\u0131l\u0131k, zar bas\u0131nc\u0131 ve ger\xE7ek mitoz modellenmez.","Say\u0131sal modelin hacim s\u0131n\u0131r\u0131na gelinirse hesap durur ve olay kayd\u0131 g\xF6sterilir. Bu s\u0131n\u0131rlar h\xFCcrenin \xF6l\xFCm veya patlama e\u015Fikleri de\u011Fildir."],[["Pasif ta\u015F\u0131ma ve ozmoz \u2014 OpenStax","https://openstax.org/books/concepts-biology/pages/3-5-passive-transport"]],"POST /api/cells/simulate"),re("export-result").disabled=!v.cellResult}async function _0(){if(!v.busy){for(let i of re("library").querySelectorAll("input[type=number]"))if(!i.reportValidity())return;if(v.cellResult){v.playing=!v.playing,v.cellTime>=v.cellResult.summary.elapsed_s&&(v.cellTime=0),Di();return}xi(!0),qt("H\xFCcre deneyi hesaplan\u0131yor\u2026");try{v.cellResult=await _r("/api/cells/simulate",v.cell),v.cellTime=0,To(!1),v.playing=!0,Di();let i=v.cellResult.summary.status==="model_limit";qt(i?"Deney model s\u0131n\u0131r\u0131na ula\u015Ft\u0131. Sonu\xE7lar ve olay kayd\u0131 haz\u0131r.":"Deney hesapland\u0131. Zaman \xE7izgisinden her an\u0131 inceleyebilirsin.",i)}finally{xi(!1)}}}function Di(i=!1){if(v.mode!=="cells"||!v.cell)return;let e=g0();jt?.setCells(e,v.cell.cell_volume_pl,{reset:i});let t=e.cells.reduce((o,l)=>o+l.volume_pl,0);Ro([["H\xFCcre",e.cells.length],["Toplam hacim",Pt(t,3),"pL"],["\u0130\xE7 yo\u011Funluk",Pt(e.cells[0].concentration_mm,1),"mM"]]),re("cell-time")&&(re("cell-time").textContent=`${Pt(e.t_s,1)} s`),re("cell-timeline")&&(re("cell-timeline").value=v.cellTime),re("cell-run")&&(re("cell-run").textContent=v.playing?"Duraklat":v.cellResult?"Oynat":"Deneyi \xE7al\u0131\u015Ft\u0131r");let n=e.cells[0].concentration_mm-e.external_concentration_mm,s=Math.abs(n)<.01?"Yo\u011Funluklar dengede":n>0?"Su i\xE7in e\u011Filim: h\xFCcrenin i\xE7ine":"Su i\xE7in e\u011Filim: d\u0131\u015F ortama",r=v.cellResult;re("inspector").replaceChildren(et("\u015Eu anda",[W("div",{class:"status-badge",text:s}),W("dl",{class:"properties"},[["D\u0131\u015F yo\u011Funluk",`${Pt(e.external_concentration_mm,1)} mM`],["D\u0131\u015F hacim",`${Pt(e.external_volume_pl,3)} pL`],...e.cells.map((o,l)=>[`H\xFCcre ${l+1}`,`${Pt(o.volume_pl,3)} pL`])].map(([o,l])=>W("div",{},[W("dt",{text:o}),W("dd",{text:l})]))),dt(v.cell.water_permeability_pl_s_mm===0?"Su katsay\u0131s\u0131 s\u0131f\u0131r: bu deneyde su ge\xE7i\u015Fi kapal\u0131.":"Su ge\xE7i\u015Fi yo\u011Funluk fark\u0131 ve se\xE7ilen katsay\u0131yla hesaplan\u0131r.")]),et("Korunum kontrol\xFC",r?[W("p",{class:"material-info",text:`En b\xFCy\xFCk hacim hatas\u0131: ${Number(r.summary.max_volume_conservation_error_pl).toExponential(1)} pL`}),W("p",{class:"material-info",text:`En b\xFCy\xFCk \xE7\xF6z\xFCnen hatas\u0131: ${Number(r.summary.max_solute_conservation_error_fmol).toExponential(1)} fmol`}),dt("Bu de\u011Ferler hesap boyunca toplam miktarlar\u0131n ne kadar korundu\u011Funu g\xF6sterir.")]:[dt("Hacim ve \xE7\xF6z\xFCnenin korunumu deney \xE7al\u0131\u015F\u0131nca burada g\xF6sterilir.")]),et("Olay kayd\u0131",r?[W("ul",{class:"events"},r.events.map(o=>W("li",{class:"event",text:`${Pt(o.t_s,1)} s \u2014 ${o.message}`}))),...r.events.length?[]:[dt("B\xF6l\xFCnme veya model s\u0131n\u0131r\u0131 olay\u0131 yok.")]]:[dt("Hen\xFCz deney \xE7al\u0131\u015Ft\u0131r\u0131lmad\u0131.")]));let a=re("chart-marker");a&&r&&a.setAttribute("x1",String(35+Math.min(v.cellTime/r.summary.elapsed_s,1)*525)),a&&a.setAttribute("x2",a.getAttribute("x1"))}function Vu(){let i=re("cell-chart");if(!i)return;if(!v.cellResult){i.replaceChildren(dt("Deneyi \xE7al\u0131\u015Ft\u0131r\u0131nca hacmin zamanla de\u011Fi\u015Fimi burada \xE7izilir."));return}let e=v.cellResult.frames,t=e.map(h=>h.cells.reduce((d,u)=>d+u.volume_pl,0)),n=Math.min(...t),s=Math.max(...t),r=Math.max((s-n)*.15,s*.03,.01);n-=r,s+=r;let a=v.cellResult.summary.elapsed_s||1,o=pn("svg",{viewBox:"0 0 580 155",class:"chart",role:"img","aria-label":"Zamana kar\u015F\u0131 toplam h\xFCcre hacmi grafi\u011Fi"});for(let h=0;h<3;h++){let d=12+h*57;o.append(pn("line",{x1:35,x2:560,y1:d,y2:d,stroke:"#e4edf1"}));let u=pn("text",{x:0,y:d+4,fill:"#6a8190","font-size":9});u.textContent=Pt(s-h*(s-n)/2,2),o.append(u)}let l=e.map((h,d)=>`${35+h.t_s/a*525},${12+(s-t[d])/(s-n)*114}`).join(" ");o.append(pn("polyline",{points:l,fill:"none",stroke:"#07898d","stroke-width":2.5}));let c=35+Math.min(v.cellTime/a,1)*525;o.append(pn("line",{id:"chart-marker",x1:c,x2:c,y1:10,y2:128,stroke:"#566f88","stroke-dasharray":"3 3"}));for(let[h,d]of[[35,"0 s"],[525,`${Pt(a,1)} s`]]){let u=pn("text",{x:h,y:148,fill:"#6a8190","font-size":10});u.textContent=d,o.append(u)}i.replaceChildren(o)}async function Wu(i){if(i?.format==="yorunge-structure"){let t=jn(i);v.structure=t,v.structureActive=!0,v.structureSelected=[],v.structureUndo=[],v.structureRedo=[],v.structurePage=0,v.structureQuery="",v.mode="materials",v.epoch++,bs();return}if(!i||typeof i!="object"||i.format!=="yorunge-science"||![1,2].includes(i.version)||!Ao[i.mode])throw new Error("Bu dosya desteklenen bir Y\xF6r\xFCnge deney belgesi de\u011Fil (v1 veya v2 gerekli).");let e;if(i.version===2){if(!i.structure_workspace||typeof i.structure_workspace.active!="boolean")throw new Error("Yap\u0131 \xE7al\u0131\u015Fma alan\u0131 kayd\u0131 ge\xE7ersiz.");e={document:jn(i.structure_workspace.document),active:i.structure_workspace.active}}if(i.mode==="molecules"){let t=await _r("/api/chemistry/analyze",i.scene);v.mol=t.scene,v.analysis=t,v.undo=[],v.redo=[],v.selected=[]}else if(i.mode==="cells"){let t=await _r("/api/cells/simulate",i.experiment);v.cell=t.experiment,v.cellResult=t,v.cellTime=0}else if(i.mode==="elements"){if(!an.some(t=>t.atomic_number===i.atomic_number))throw new Error("Ge\xE7ersiz atom numaras\u0131.");v.element=i.atomic_number}else{if(!gi.some(t=>t.id===i.material)||!Number.isInteger(i.layers)||i.layers<1||i.layers>5||!Number.isFinite(i.spacing)||i.spacing<.5||i.spacing>3)throw new Error("Ge\xE7ersiz malzeme ayar\u0131.");v.material=i.material,v.layers=i.layers,v.spacing=i.spacing,e||(v.structureActive=!1)}e&&(v.structure=e.document,v.structureActive=e.active,v.structureSelected=[],v.structureUndo=[],v.structureRedo=[],v.structurePage=0,v.structureQuery=""),v.mode=i.mode,v.epoch++,bs()}document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",mn(()=>rc(i.dataset.mode))));re("reset-camera").addEventListener("click",()=>jt?.resetCamera());re("representation").addEventListener("click",()=>{v.spacefill=!v.spacefill,re("representation").textContent=v.spacefill?"Hacim g\xF6r\xFCn\xFCm\xFC":"K\xFCre\u2013\xE7ubuk",re("representation").setAttribute("aria-pressed",String(v.spacefill)),jt?.setRepresentation(v.spacefill)});re("save").addEventListener("click",mn(()=>{if(v.busy)throw new Error("Hesap bitince kaydedebilirsin.");Nu(`yorunge-${v.mode}.json`,Uu()),qt("Deney dosyas\u0131 indirildi.")}));re("import").addEventListener("click",()=>re("file").click());re("file").addEventListener("change",mn(async()=>{let i=re("file").files[0];if(i){if(re("file").value="",i.size>262144)throw new Error("Deney dosyas\u0131 256 KiB s\u0131n\u0131r\u0131n\u0131 a\u015F\u0131yor.");if(!v.busy){xi(!0);try{await Wu(JSON.parse(await i.text())),qt("Deney dosyas\u0131 do\u011Fruland\u0131 ve a\xE7\u0131ld\u0131.")}finally{xi(!1)}}}}));re("export-result").addEventListener("click",()=>Nu(`yorunge-${v.mode}-sonuc.json`,v.mode==="molecules"?v.analysis:v.mode==="cells"?v.cellResult:v.structureActive?v.structure:v.materialGraph));async function y0(){try{jt=vu(re("science-viewport"),{onSelect:Ou})}catch{re("viewport-error").hidden=!1,re("viewport-error").textContent="3B g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131. WebGL 2 destekli bir taray\u0131c\u0131 kullan. Element tablosu ve say\u0131sal sonu\xE7lar kullan\u0131labilir."}let i=performance.now(),e=0;function t(n){let s=Math.min(.05,(n-i)/1e3);i=n,!document.hidden&&v.playing&&v.mode==="cells"&&v.cellResult&&(v.cellTime=Math.min(v.cellTime+s*v.cellSpeed,v.cellResult.summary.elapsed_s),v.cellTime>=v.cellResult.summary.elapsed_s&&(v.playing=!1),e+=s,(e>=.1||!v.playing)&&(Di(),e=0)),requestAnimationFrame(t)}requestAnimationFrame(t);try{let[n,s]=await Promise.all([fetch("/api/chemistry/presets").then(a=>a.json()),fetch("/api/cells/presets").then(a=>a.json())]);v.molPresets=n.presets,v.cellPresets=s.presets,v.cell=Yt(s.presets[0].experiment),v.mol=Yt(n.presets.find(a=>a.id==="water").scene),v.analysis=await _r("/api/chemistry/analyze",v.mol);let r;try{r=JSON.parse(localStorage.getItem("yorunge-science-v1")||"null")}catch{}if(r)try{await Wu(r)}catch{bs()}else bs();Ao[Au]&&(v.mode=Au,bs()),qt("Laboratuvar haz\u0131r. Bir deney se\xE7 veya g\xF6r\xFCn\xFCm\xFC incele.")}catch(n){qt(`Laboratuvar y\xFCklenemedi: ${n.message}`,!0)}}y0();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
