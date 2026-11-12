var TourRuntime=(function(Fs){"use strict";var ot=typeof document<"u"?document.currentScript:null;const Us="185",fh=0,yc=1,hh=2,ba=1,ph=2,Br=3,ui=0,Xt=1,gn=2,Xn=0,ir=1,Mc=2,Sc=3,Ec=4,mh=5,Pi=100,gh=101,vh=102,bh=103,_h=104,xh=200,yh=201,Mh=202,Sh=203,ks=204,Os=205,Eh=206,Ah=207,Th=208,wh=209,Ch=210,Rh=211,Ph=212,Lh=213,Ih=214,Bs=0,zs=1,Hs=2,rr=3,Vs=4,Gs=5,Ws=6,Xs=7,Ac=0,Dh=1,Nh=2,Cn=0,Tc=1,wc=2,Cc=3,Rc=4,Pc=5,Lc=6,Ic=7,Dc=300,Li=301,ar=302,$s=303,qs=304,_a=306,Ys=1e3,$n=1001,Ks=1002,It=1003,Fh=1004,xa=1005,xt=1006,Zs=1007,Ii=1008,cn=1009,Nc=1010,Fc=1011,zr=1012,Js=1013,Rn=1014,Pn=1015,qn=1016,Qs=1017,js=1018,Hr=1020,Uc=35902,kc=35899,Oc=1021,Bc=1022,vn=1023,Yn=1026,Di=1027,zc=1028,eo=1029,Ni=1030,to=1031,no=1033,ya=33776,Ma=33777,Sa=33778,Ea=33779,io=35840,ro=35841,ao=35842,so=35843,oo=36196,lo=37492,co=37496,uo=37488,fo=37489,Aa=37490,ho=37491,po=37808,mo=37809,go=37810,vo=37811,bo=37812,_o=37813,xo=37814,yo=37815,Mo=37816,So=37817,Eo=37818,Ao=37819,To=37820,wo=37821,Co=36492,Ro=36494,Po=36495,Lo=36283,Io=36284,Ta=36285,Do=36286,Uh=3200,Hc=0,kh=1,fi="",Rt="srgb",wa="srgb-linear",Ca="linear",ut="srgb",sr=7680,Vc=519,Oh=512,Bh=513,zh=514,No=515,Hh=516,Vh=517,Fo=518,Gh=519,Gc=35044,Wc="300 es",Ln=2e3,Ra=2001;function Wh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){const n=Vr("canvas");return n.style.display="block",n}const Xc={};function $c(...n){const e="THREE."+n.shift();console.log(e,...n)}function qc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=qc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=qc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function or(...n){const e=n.join(" ");e in Xc||(Xc[e]=!0,We(...n))}function $h(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const qh={[Bs]:zs,[Hs]:Ws,[Vs]:Xs,[rr]:Gs,[zs]:Bs,[Ws]:Hs,[Xs]:Vs,[Gs]:rr};class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const Gr=Math.PI/180,Wr=180/Math.PI;function lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Uo(n,e){return(n%e+e)%e}function Yh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Kh(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function Zh(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function Jh(n,e=1){return e-Math.abs(Uo(n,e*2)-e)}function Qh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ep(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tp(n,e){return n+Math.random()*(e-n)}function np(n){return n*(.5-Math.random())}function ip(n){n!==void 0&&(Yc=n);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(n){return n*Gr}function ap(n){return n*Wr}function sp(n){return(n&n-1)===0&&n!==0}function op(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cp(n,e,t,i,r){const a=Math.cos,s=Math.sin,l=a(t/2),o=s(t/2),c=a((e+i)/2),u=s((e+i)/2),f=a((e-i)/2),d=s((e-i)/2),m=a((i-e)/2),h=s((i-e)/2);switch(r){case"XYX":n.set(l*u,o*f,o*d,l*c);break;case"YZY":n.set(o*d,l*u,o*f,l*c);break;case"ZXZ":n.set(o*f,o*d,l*u,l*c);break;case"XZX":n.set(l*u,o*h,o*m,l*c);break;case"YXY":n.set(o*m,l*u,o*h,l*c);break;case"ZYZ":n.set(o*h,o*m,l*u,l*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bn={DEG2RAD:Gr,RAD2DEG:Wr,generateUUID:lr,clamp:et,euclideanModulo:Uo,mapLinear:Yh,inverseLerp:Kh,lerp:Xr,damp:Zh,pingpong:Jh,smoothstep:Qh,smootherstep:jh,randInt:ep,randFloat:tp,randFloatSpread:np,seededRandom:ip,degToRad:rp,radToDeg:ap,isPowerOfTwo:sp,ceilPowerOfTwo:op,floorPowerOfTwo:lp,setQuaternionFromProperEuler:cp,normalize:Vt,denormalize:cr},mc=class mc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;let je=mc;class dr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,l){let o=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=a[s+0],m=a[s+1],h=a[s+2],v=a[s+3];if(f!==v||o!==d||c!==m||u!==h){let p=o*d+c*m+u*h+f*v;p<0&&(d=-d,m=-m,h=-h,v=-v,p=-p);let g=1-l;if(p<.9995){const S=Math.acos(p),y=Math.sin(S);g=Math.sin(g*S)/y,l=Math.sin(l*S)/y,o=o*g+d*l,c=c*g+m*l,u=u*g+h*l,f=f*g+v*l}else{o=o*g+d*l,c=c*g+m*l,u=u*g+h*l,f=f*g+v*l;const S=1/Math.sqrt(o*o+c*c+u*u+f*f);o*=S,c*=S,u*=S,f*=S}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const l=i[r],o=i[r+1],c=i[r+2],u=i[r+3],f=a[s],d=a[s+1],m=a[s+2],h=a[s+3];return e[t]=l*h+u*f+o*m-c*d,e[t+1]=o*h+u*d+c*f-l*m,e[t+2]=c*h+u*m+l*d-o*f,e[t+3]=u*h-l*f-o*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,l=Math.cos,o=Math.sin,c=l(i/2),u=l(r/2),f=l(a/2),d=o(i/2),m=o(r/2),h=o(a/2);switch(s){case"XYZ":this._x=d*u*f+c*m*h,this._y=c*m*f-d*u*h,this._z=c*u*h+d*m*f,this._w=c*u*f-d*m*h;break;case"YXZ":this._x=d*u*f+c*m*h,this._y=c*m*f-d*u*h,this._z=c*u*h-d*m*f,this._w=c*u*f+d*m*h;break;case"ZXY":this._x=d*u*f-c*m*h,this._y=c*m*f+d*u*h,this._z=c*u*h+d*m*f,this._w=c*u*f-d*m*h;break;case"ZYX":this._x=d*u*f-c*m*h,this._y=c*m*f+d*u*h,this._z=c*u*h-d*m*f,this._w=c*u*f+d*m*h;break;case"YZX":this._x=d*u*f+c*m*h,this._y=c*m*f+d*u*h,this._z=c*u*h-d*m*f,this._w=c*u*f-d*m*h;break;case"XZY":this._x=d*u*f-c*m*h,this._y=c*m*f-d*u*h,this._z=c*u*h+d*m*f,this._w=c*u*f+d*m*h;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],l=t[5],o=t[9],c=t[2],u=t[6],f=t[10],d=i+l+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-o)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>l&&i>f){const m=2*Math.sqrt(1+i-l-f);this._w=(u-o)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(l>f){const m=2*Math.sqrt(1+l-i-f);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(o+u)/m}else{const m=2*Math.sqrt(1+f-i-l);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(o+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,l=t._x,o=t._y,c=t._z,u=t._w;return this._x=i*u+s*l+r*c-a*o,this._y=r*u+s*o+a*l-i*c,this._z=a*u+s*c+i*o-r*l,this._w=s*u-i*l-r*o-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,a=-a,s=-s,l=-l);let o=1-t;if(l<.9995){const c=Math.acos(l),u=Math.sin(c);o=Math.sin(o*c)/u,t=Math.sin(t*c)/u,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gc=class gc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,l=e.z,o=e.w,c=2*(s*r-l*i),u=2*(l*t-a*r),f=2*(a*i-s*t);return this.x=t+o*c+s*f-l*u,this.y=i+o*u+l*c-a*f,this.z=r+o*f+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,l=t.y,o=t.z;return this.x=r*o-a*l,this.y=a*s-i*o,this.z=i*l-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;let J=gc;const ko=new J,Kc=new dr,vc=class vc{constructor(e,t,i,r,a,s,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,l,o,c)}set(e,t,i,r,a,s,l,o,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=l,u[3]=t,u[4]=a,u[5]=o,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],l=i[3],o=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],h=i[8],v=r[0],p=r[3],g=r[6],S=r[1],y=r[4],b=r[7],A=r[2],E=r[5],w=r[8];return a[0]=s*v+l*S+o*A,a[3]=s*p+l*y+o*E,a[6]=s*g+l*b+o*w,a[1]=c*v+u*S+f*A,a[4]=c*p+u*y+f*E,a[7]=c*g+u*b+f*w,a[2]=d*v+m*S+h*A,a[5]=d*p+m*y+h*E,a[8]=d*g+m*b+h*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],l=e[5],o=e[6],c=e[7],u=e[8];return t*s*u-t*l*c-i*a*u+i*l*o+r*a*c-r*s*o}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],l=e[5],o=e[6],c=e[7],u=e[8],f=u*s-l*c,d=l*o-u*a,m=c*a-s*o,h=t*f+i*d+r*m;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/h;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(l*i-r*s)*v,e[3]=d*v,e[4]=(u*t-r*o)*v,e[5]=(r*a-l*t)*v,e[6]=m*v,e[7]=(i*o-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,l){const o=Math.cos(a),c=Math.sin(a);return this.set(i*o,i*c,-i*(o*s+c*l)+s+e,-r*c,r*o,-r*(-c*s+o*l)+l+t,0,0,1),this}scale(e,t){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;let $e=vc;const Oo=new $e,Zc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){const n={enabled:!0,workingColorSpace:wa,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ut&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?Ca:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wa]:{primaries:e,whitePoint:i,transfer:Ca,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const it=dp();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=Vr("canvas")),fr.width=e.width,fr.height=e.height;const r=fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Kn(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fp=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,l=r.length;s<l;s++)r[s].isDataTexture?a.push(zo(r[s].image)):a.push(zo(r[s]))}else a=zo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let hp=0;const Ho=new J;class yt extends Fi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,i=$n,r=$n,a=xt,s=Ii,l=vn,o=cn,c=yt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=lr(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null,yt.DEFAULT_MAPPING=Dc,yt.DEFAULT_ANISOTROPY=1;const bc=class bc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const o=e.elements,c=o[0],u=o[4],f=o[8],d=o[1],m=o[5],h=o[9],v=o[2],p=o[6],g=o[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(h-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(h+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,A=(g+1)/2,E=(u+d)/4,w=(f+v)/4,_=(h+p)/4;return y>b&&y>A?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=E/i,a=w/i):b>A?b<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),i=E/r,a=_/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=w/a,r=_/a),this.set(i,r,a,t),this}let S=Math.sqrt((p-h)*(p-h)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-h)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;let _t=bc;class pp extends Fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},a=new yt(r),s=i.count;for(let l=0;l<s;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends pp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qc extends yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rs=class Rs{constructor(e,t,i,r,a,s,l,o,c,u,f,d,m,h,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,l,o,c,u,f,d,m,h,v,p)}set(e,t,i,r,a,s,l,o,c,u,f,d,m,h,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=a,g[5]=s,g[9]=l,g[13]=o,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=h,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),a=1/hr.setFromMatrixColumn(e,1).length(),s=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),l=Math.sin(i),o=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*u,m=s*f,h=l*u,v=l*f;t[0]=o*u,t[4]=-o*f,t[8]=c,t[1]=m+h*c,t[5]=d-v*c,t[9]=-l*o,t[2]=v-d*c,t[6]=h+m*c,t[10]=s*o}else if(e.order==="YXZ"){const d=o*u,m=o*f,h=c*u,v=c*f;t[0]=d+v*l,t[4]=h*l-m,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-l,t[2]=m*l-h,t[6]=v+d*l,t[10]=s*o}else if(e.order==="ZXY"){const d=o*u,m=o*f,h=c*u,v=c*f;t[0]=d-v*l,t[4]=-s*f,t[8]=h+m*l,t[1]=m+h*l,t[5]=s*u,t[9]=v-d*l,t[2]=-s*c,t[6]=l,t[10]=s*o}else if(e.order==="ZYX"){const d=s*u,m=s*f,h=l*u,v=l*f;t[0]=o*u,t[4]=h*c-m,t[8]=d*c+v,t[1]=o*f,t[5]=v*c+d,t[9]=m*c-h,t[2]=-c,t[6]=l*o,t[10]=s*o}else if(e.order==="YZX"){const d=s*o,m=s*c,h=l*o,v=l*c;t[0]=o*u,t[4]=v-d*f,t[8]=h*f+m,t[1]=f,t[5]=s*u,t[9]=-l*u,t[2]=-c*u,t[6]=m*f+h,t[10]=d-v*f}else if(e.order==="XZY"){const d=s*o,m=s*c,h=l*o,v=l*c;t[0]=o*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=s*u,t[9]=m*f-h,t[2]=h*f-m,t[6]=l*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,vp)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(i,nn),hi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(i,nn)),hi.normalize(),Pa.crossVectors(nn,hi),r[0]=hi.x,r[4]=Pa.x,r[8]=nn.x,r[1]=hi.y,r[5]=Pa.y,r[9]=nn.y,r[2]=hi.z,r[6]=Pa.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],l=i[4],o=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],h=i[2],v=i[6],p=i[10],g=i[14],S=i[3],y=i[7],b=i[11],A=i[15],E=r[0],w=r[4],_=r[8],C=r[12],T=r[1],L=r[5],R=r[9],U=r[13],I=r[2],x=r[6],D=r[10],N=r[14],B=r[3],F=r[7],z=r[11],K=r[15];return a[0]=s*E+l*T+o*I+c*B,a[4]=s*w+l*L+o*x+c*F,a[8]=s*_+l*R+o*D+c*z,a[12]=s*C+l*U+o*N+c*K,a[1]=u*E+f*T+d*I+m*B,a[5]=u*w+f*L+d*x+m*F,a[9]=u*_+f*R+d*D+m*z,a[13]=u*C+f*U+d*N+m*K,a[2]=h*E+v*T+p*I+g*B,a[6]=h*w+v*L+p*x+g*F,a[10]=h*_+v*R+p*D+g*z,a[14]=h*C+v*U+p*N+g*K,a[3]=S*E+y*T+b*I+A*B,a[7]=S*w+y*L+b*x+A*F,a[11]=S*_+y*R+b*D+A*z,a[15]=S*C+y*U+b*N+A*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],l=e[5],o=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],h=e[3],v=e[7],p=e[11],g=e[15],S=o*m-c*d,y=l*m-c*f,b=l*d-o*f,A=s*m-c*u,E=s*d-o*u,w=s*f-l*u;return t*(v*S-p*y+g*b)-i*(h*S-p*A+g*E)+r*(h*y-v*A+g*w)-a*(h*b-v*E+p*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],o=e[2],c=e[6],u=e[10];return t*(s*u-l*c)-i*(a*u-l*o)+r*(a*c-s*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],l=e[5],o=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],h=e[12],v=e[13],p=e[14],g=e[15],S=t*l-i*s,y=t*o-r*s,b=t*c-a*s,A=i*o-r*l,E=i*c-a*l,w=r*c-a*o,_=u*v-f*h,C=u*p-d*h,T=u*g-m*h,L=f*p-d*v,R=f*g-m*v,U=d*g-m*p,I=S*U-y*R+b*L+A*T-E*C+w*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/I;return e[0]=(l*U-o*R+c*L)*x,e[1]=(r*R-i*U-a*L)*x,e[2]=(v*w-p*E+g*A)*x,e[3]=(d*E-f*w-m*A)*x,e[4]=(o*T-s*U-c*C)*x,e[5]=(t*U-r*T+a*C)*x,e[6]=(p*b-h*w-g*y)*x,e[7]=(u*w-d*b+m*y)*x,e[8]=(s*R-l*T+c*_)*x,e[9]=(i*T-t*R-a*_)*x,e[10]=(h*E-v*b+g*S)*x,e[11]=(f*b-u*E-m*S)*x,e[12]=(l*C-s*L-o*_)*x,e[13]=(t*L-i*C+r*_)*x,e[14]=(v*y-h*A-p*S)*x,e[15]=(u*A-f*y+d*S)*x,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,l=e.y,o=e.z,c=a*s,u=a*l;return this.set(c*s+i,c*l-r*o,c*o+r*l,0,c*l+r*o,u*l+i,u*o-r*s,0,c*o-r*l,u*o+r*s,a*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,l=t._z,o=t._w,c=a+a,u=s+s,f=l+l,d=a*c,m=a*u,h=a*f,v=s*u,p=s*f,g=l*f,S=o*c,y=o*u,b=o*f,A=i.x,E=i.y,w=i.z;return r[0]=(1-(v+g))*A,r[1]=(m+b)*A,r[2]=(h-y)*A,r[3]=0,r[4]=(m-b)*E,r[5]=(1-(d+g))*E,r[6]=(p+S)*E,r[7]=0,r[8]=(h+y)*w,r[9]=(p-S)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let s=hr.set(r[0],r[1],r[2]).length();const l=hr.set(r[4],r[5],r[6]).length(),o=hr.set(r[8],r[9],r[10]).length();a<0&&(s=-s),_n.copy(this);const c=1/s,u=1/l,f=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=l,i.z=o,this}makePerspective(e,t,i,r,a,s,l=Ln,o=!1){const c=this.elements,u=2*a/(t-e),f=2*a/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let h,v;if(o)h=a/(s-a),v=s*a/(s-a);else if(l===Ln)h=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(l===Ra)h=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,l=Ln,o=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let h,v;if(o)h=1/(s-a),v=s/(s-a);else if(l===Ln)h=-2/(s-a),v=-(s+a)/(s-a);else if(l===Ra)h=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=h,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Rs.prototype.isMatrix4=!0;let bt=Rs;const hr=new J,_n=new bt,gp=new J(0,0,0),vp=new J(1,1,1),hi=new J,Pa=new J,nn=new J,jc=new bt,ed=new dr;class Ui{constructor(e=0,t=0,i=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],l=r[8],o=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bp=0;const td=new J,pr=new dr,Zn=new bt,La=new J,$r=new J,_p=new J,xp=new dr,nd=new J(1,0,0),id=new J(0,1,0),rd=new J(0,0,1),ad={type:"added"},yp={type:"removed"},mr={type:"childadded",child:null},Go={type:"childremoved",child:null};class $t extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new J,t=new Ui,i=new dr,r=new J(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new $e}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?La.copy(e):La.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($r,La,this.up):Zn.lookAt(La,$r,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Zn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ad),mr.child=e,this.dispatchEvent(mr),mr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ad),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let s=0,l=a.length;s<l;s++)a[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const f=o[c];a(e.shapes,f)}else a(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(a(e.materials,this.material[o]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];r.animations.push(a(e.animations,o))}}if(t){const l=s(e.geometries),o=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),m=s(e.animations),h=s(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),h.length>0&&(i.nodes=h)}return i.object=r,i;function s(l){const o=[];for(const c in l){const u=l[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new J(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,h=.005;c.inputState.pinching&&d>m+h?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-h&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return l!==null&&(l.visible=r!==null),o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*6*(.6666666666666666-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Uo(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Xo(s,a,e+.3333333333333333),this.g=Xo(s,a,e),this.b=Xo(s,a,e-.3333333333333333)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function i(a){a!==void 0&&parseFloat(a)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],l=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return it.workingToColorSpace(Ut.copy(this),e),Math.round(et(Ut.r*255,0,255))*65536+Math.round(et(Ut.g*255,0,255))*256+Math.round(et(Ut.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,a=Ut.b,s=Math.max(i,r,a),l=Math.min(i,r,a);let o,c;const u=(l+s)/2;if(l===s)o=0,c=0;else{const f=s-l;switch(c=u<=.5?f/(s+l):f/(2-s-l),s){case i:o=(r-a)/f+(r<a?6:0);break;case r:o=(a-i)/f+2;break;case a:o=(i-r)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Rt){it.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ia);const i=Xr(pi.h,Ia.h,t),r=Xr(pi.s,Ia.s,t),a=Xr(pi.l,Ia.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new st;st.NAMES=sd;class Sp extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new J,Jn=new J,$o=new J,Qn=new J,gr=new J,vr=new J,od=new J,qo=new J,Yo=new J,Ko=new J,Zo=new _t,Jo=new _t,Qo=new _t;class yn{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xn.subVectors(e,t),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){xn.subVectors(r,t),Jn.subVectors(i,t),$o.subVectors(e,t);const s=xn.dot(xn),l=xn.dot(Jn),o=xn.dot($o),c=Jn.dot(Jn),u=Jn.dot($o),f=s*c-l*l;if(f===0)return a.set(0,0,0),null;const d=1/f,m=(c*o-l*u)*d,h=(s*u-l*o)*d;return a.set(1-m-h,h,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,r,a,s,l,o){return this.getBarycoord(e,t,i,r,Qn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,Qn.x),o.addScaledVector(s,Qn.y),o.addScaledVector(l,Qn.z),o)}static getInterpolatedAttribute(e,t,i,r,a,s){return Zo.setScalar(0),Jo.setScalar(0),Qo.setScalar(0),Zo.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,i),Qo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Zo,a.x),s.addScaledVector(Jo,a.y),s.addScaledVector(Qo,a.z),s}static isFrontFacing(e,t,i,r){return xn.subVectors(i,t),Jn.subVectors(e,t),xn.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),xn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,l;gr.subVectors(r,i),vr.subVectors(a,i),qo.subVectors(e,i);const o=gr.dot(qo),c=vr.dot(qo);if(o<=0&&c<=0)return t.copy(i);Yo.subVectors(e,r);const u=gr.dot(Yo),f=vr.dot(Yo);if(u>=0&&f<=u)return t.copy(r);const d=o*f-u*c;if(d<=0&&o>=0&&u<=0)return s=o/(o-u),t.copy(i).addScaledVector(gr,s);Ko.subVectors(e,a);const m=gr.dot(Ko),h=vr.dot(Ko);if(h>=0&&m<=h)return t.copy(a);const v=m*c-o*h;if(v<=0&&c>=0&&h<=0)return l=c/(c-h),t.copy(i).addScaledVector(vr,l);const p=u*h-m*f;if(p<=0&&f-u>=0&&m-h>=0)return od.subVectors(a,r),l=(f-u)/(f-u+(m-h)),t.copy(r).addScaledVector(od,l);const g=1/(p+v+d);return s=v*g,l=d*g,t.copy(i).addScaledVector(gr,s).addScaledVector(vr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yr{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=a.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,Mn):Mn.fromBufferAttribute(a,s),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Na.subVectors(this.max,Kr),br.subVectors(e.a,Kr),_r.subVectors(e.b,Kr),xr.subVectors(e.c,Kr),mi.subVectors(_r,br),gi.subVectors(xr,_r),ki.subVectors(br,xr);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-ki.z,ki.y,mi.z,0,-mi.x,gi.z,0,-gi.x,ki.z,0,-ki.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-ki.y,ki.x,0];return!jo(t,br,_r,xr,Na)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,br,_r,xr,Na))?!1:(Fa.crossVectors(mi,gi),t=[Fa.x,Fa.y,Fa.z],jo(t,br,_r,xr,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new J,new J,new J,new J,new J,new J,new J,new J],Mn=new J,Da=new Yr,br=new J,_r=new J,xr=new J,mi=new J,gi=new J,ki=new J,Kr=new J,Na=new J,Fa=new J,Oi=new J;function jo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Oi.fromArray(n,a);const l=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),o=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}const Mt=new J,Ua=new je;let Ep=0;class Dn extends Fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ld extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cd extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ap=new Yr,Zr=new J,el=new J;class tl{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ap.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(el)),this.expandByPoint(Zr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tp=0;const dn=new bt,nl=new $t,yr=new J,rn=new Yr,Jr=new Yr,Pt=new J;class un extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?cd:ld)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new $e().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];Jr.setFromBufferAttribute(l),this.morphTargetsRelative?(Pt.addVectors(rn.min,Jr.min),rn.expandByPoint(Pt),Pt.addVectors(rn.max,Jr.max),rn.expandByPoint(Pt)):(rn.expandByPoint(Jr.min),rn.expandByPoint(Jr.max))}rn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Pt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let a=0,s=t.length;a<s;a++){const l=t[a],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)Pt.fromBufferAttribute(l,c),o&&(yr.fromBufferAttribute(e,c),Pt.add(yr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Dn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const l=[],o=[];for(let _=0;_<i.count;_++)l[_]=new J,o[_]=new J;const c=new J,u=new J,f=new J,d=new je,m=new je,h=new je,v=new J,p=new J;function g(_,C,T){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,T),d.fromBufferAttribute(a,_),m.fromBufferAttribute(a,C),h.fromBufferAttribute(a,T),u.sub(c),f.sub(c),m.sub(d),h.sub(d);const L=1/(m.x*h.y-h.x*m.y);isFinite(L)&&(v.copy(u).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-h.x).multiplyScalar(L),l[_].add(v),l[C].add(v),l[T].add(v),o[_].add(p),o[C].add(p),o[T].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,C=S.length;_<C;++_){const T=S[_],L=T.start,R=T.count;for(let U=L,I=L+R;U<I;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new J,b=new J,A=new J,E=new J;function w(_){A.fromBufferAttribute(r,_),E.copy(A);const C=l[_];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),b.crossVectors(E,C);const L=b.dot(o[_])<0?-1:1;s.setXYZW(_,y.x,y.y,y.z,L)}for(let _=0,C=S.length;_<C;++_){const T=S[_],L=T.start,R=T.count;for(let U=L,I=L+R;U<I;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new J,a=new J,s=new J,l=new J,o=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,m=e.count;d<m;d+=3){const h=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,h),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),l.fromBufferAttribute(i,h),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),l.add(u),o.add(u),c.add(u),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(l,o){const c=l.array,u=l.itemSize,f=l.normalized,d=new c.constructor(o.length*u);let m=0,h=0;for(let v=0,p=o.length;v<p;v++){l.isInterleavedBufferAttribute?m=o[v]*l.data.stride+l.offset:m=o[v]*u;for(let g=0;g<u;g++)d[h++]=c[m++]}return new Dn(d,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,r=this.attributes;for(const l in r){const o=r[l],c=e(o,i);t.setAttribute(l,c)}const a=this.morphAttributes;for(const l in a){const o=[],c=a[l];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);o.push(m)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,o=s.length;l<o;l++){const c=s[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const r={};let a=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[o]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wp=0;class ka extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=ir,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=Os,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ks&&(i.blendSrc=this.blendSrc),this.blendDst!==Os&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const l in a){const o=a[l];delete o.metadata,s.push(o)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ei=new J,il=new J,Oa=new J,vi=new J,rl=new J,Ba=new J,al=new J;class dd{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){il.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(il);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Oa),l=vi.dot(this.direction),o=-vi.dot(Oa),c=vi.lengthSq(),u=Math.abs(1-s*s);let f,d,m,h;if(u>0)if(f=s*o-l,d=s*l-o,h=a*u,f>=0)if(d>=-h)if(d<=h){const v=1/u;f*=v,d*=v,m=f*(f+s*d+2*l)+d*(s*f+d+2*o)+c}else d=a,f=Math.max(0,-(s*d+l)),m=-f*f+d*(d+2*o)+c;else d=-a,f=Math.max(0,-(s*d+l)),m=-f*f+d*(d+2*o)+c;else d<=-h?(f=Math.max(0,-(-s*a+l)),d=f>0?-a:Math.min(Math.max(-a,-o),a),m=-f*f+d*(d+2*o)+c):d<=h?(f=0,d=Math.min(Math.max(-a,-o),a),m=d*(d+2*o)+c):(f=Math.max(0,-(s*a+l)),d=f>0?a:Math.min(Math.max(-a,-o),a),m=-f*f+d*(d+2*o)+c);else d=s>0?-a:a,f=Math.max(0,-(s*d+l)),m=-f*f+d*(d+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(il).addScaledVector(Oa,d),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),l=i-s,o=i+s;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,l,o;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(l=(e.min.z-d.z)*f,o=(e.max.z-d.z)*f):(l=(e.max.z-d.z)*f,o=(e.min.z-d.z)*f),i>o||l>r)||((l>i||i!==i)&&(i=l),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,a){rl.subVectors(t,e),Ba.subVectors(i,e),al.crossVectors(rl,Ba);let s=this.direction.dot(al),l;if(s>0){if(r)return null;l=1}else if(s<0)l=-1,s=-s;else return null;vi.subVectors(this.origin,e);const o=l*this.direction.dot(Ba.crossVectors(vi,Ba));if(o<0)return null;const c=l*this.direction.dot(rl.cross(vi));if(c<0||o+c>s)return null;const u=-l*vi.dot(al);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mr extends ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ud=new bt,Bi=new dd,za=new tl,fd=new J,Ha=new J,Va=new J,Ga=new J,sl=new J,Wa=new J,hd=new J,Xa=new J;class qt extends $t{constructor(e=new un,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Wa.set(0,0,0);for(let o=0,c=a.length;o<c;o++){const u=l[o],f=a[o];u!==0&&(sl.fromBufferAttribute(f,e),s?Wa.addScaledVector(sl,u):Wa.addScaledVector(sl.sub(t),u))}t.add(Wa)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(a),Bi.copy(e.ray).recast(e.near),!(za.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(za,fd)===null||Bi.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(ud.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(ud),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,l=a.index,o=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(s))for(let h=0,v=d.length;h<v;h++){const p=d[h],g=s[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,A=y;b<A;b+=3){const E=l.getX(b),w=l.getX(b+1),_=l.getX(b+2);r=$a(this,g,e,i,c,u,f,E,w,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const h=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=h,g=v;p<g;p+=3){const S=l.getX(p),y=l.getX(p+1),b=l.getX(p+2);r=$a(this,s,e,i,c,u,f,S,y,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let h=0,v=d.length;h<v;h++){const p=d[h],g=s[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,A=y;b<A;b+=3){const E=b,w=b+1,_=b+2;r=$a(this,g,e,i,c,u,f,E,w,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const h=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=h,g=v;p<g;p+=3){const S=p,y=p+1,b=p+2;r=$a(this,s,e,i,c,u,f,S,y,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Cp(n,e,t,i,r,a,s,l){let o;if(e.side===Xt?o=i.intersectTriangle(s,a,r,!0,l):o=i.intersectTriangle(r,a,s,e.side===ui,l),o===null)return null;Xa.copy(l),Xa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function $a(n,e,t,i,r,a,s,l,o,c){n.getVertexPosition(l,Ha),n.getVertexPosition(o,Va),n.getVertexPosition(c,Ga);const u=Cp(n,e,t,i,Ha,Va,Ga,hd);if(u){const f=new J;yn.getBarycoord(hd,Ha,Va,Ga,f),r&&(u.uv=yn.getInterpolatedAttribute(r,l,o,c,f,new je)),a&&(u.uv1=yn.getInterpolatedAttribute(a,l,o,c,f,new je)),s&&(u.normal=yn.getInterpolatedAttribute(s,l,o,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:l,b:o,c,normal:new J,materialIndex:0};yn.getNormal(Ha,Va,Ga,d.normal),u.face=d,u.barycoord=f}return u}class Rp extends yt{constructor(e=null,t=1,i=1,r,a,s,l,o,c=It,u=It,f,d){super(null,s,l,o,c,u,r,a,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new J,Pp=new J,Lp=new $e;class zi{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ol.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ol),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new tl,Ip=new je(.5,.5),qa=new J;class pd{constructor(e=new zi,t=new zi,i=new zi,r=new zi,a=new zi,s=new zi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const r=this.planes,a=e.elements,s=a[0],l=a[1],o=a[2],c=a[3],u=a[4],f=a[5],d=a[6],m=a[7],h=a[8],v=a[9],p=a[10],g=a[11],S=a[12],y=a[13],b=a[14],A=a[15];if(r[0].setComponents(c-s,m-u,g-h,A-S).normalize(),r[1].setComponents(c+s,m+u,g+h,A+S).normalize(),r[2].setComponents(c+l,m+f,g+v,A+y).normalize(),r[3].setComponents(c-l,m-f,g-v,A-y).normalize(),i)r[4].setComponents(o,d,p,b).normalize(),r[5].setComponents(c-o,m-d,g-p,A-b).normalize();else if(r[4].setComponents(c-o,m-d,g-p,A-b).normalize(),t===Ln)r[5].setComponents(c+o,m+d,g+p,A+b).normalize();else if(t===Ra)r[5].setComponents(o,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=Ip.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class md extends yt{constructor(e,t,i,r,a=xt,s=xt,l,o,c){super(e,t,i,r,a,s,l,o,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class gd extends yt{constructor(e=[],t=Li,i,r,a,s,l,o,c,u){super(e,t,i,r,a,s,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dp extends yt{constructor(e,t,i,r,a,s,l,o,c){super(e,t,i,r,a,s,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sr extends yt{constructor(e,t,i=Rn,r,a,s,l=It,o=It,c,u=Yn,f=1){if(u!==Yn&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,a,s,l,o,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Np extends Sr{constructor(e,t=Rn,i=Li,r,a,s=It,l=It,o,c=Yn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,a,s,l,o,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vd extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qr extends un{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const l=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const o=[],c=[],u=[],f=[];let d=0,m=0;h("z","y","x",-1,-1,i,t,e,s,a,0),h("z","y","x",1,-1,i,t,-e,s,a,1),h("x","z","y",1,1,e,i,t,r,s,2),h("x","z","y",1,-1,e,i,-t,r,s,3),h("x","y","z",1,-1,e,t,i,r,a,4),h("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(o),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function h(v,p,g,S,y,b,A,E,w,_,C){const T=b/w,L=A/_,R=b/2,U=A/2,I=E/2,x=w+1,D=_+1;let N=0,B=0;const F=new J;for(let z=0;z<D;z++){const K=z*L-U;for(let ie=0;ie<x;ie++){const $=ie*T-R;F[v]=$*S,F[p]=K*y,F[g]=I,c.push(F.x,F.y,F.z),F[v]=0,F[p]=0,F[g]=E>0?1:-1,u.push(F.x,F.y,F.z),f.push(ie/w),f.push(1-z/_),N+=1}}for(let z=0;z<_;z++)for(let K=0;K<w;K++){const ie=d+K+x*z,$=d+K+x*(z+1),Z=d+(K+1)+x*(z+1),ae=d+(K+1)+x*z;o.push(ie,$,ae),o.push($,Z,ae),B+=6}l.addGroup(m,B,C),m+=B,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ll extends un{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],l=[],o=[],c=new J,u=new je;s.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const m=i+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),s.push(c.x,c.y,c.z),l.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,o.push(u.x,u.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ya extends un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,l=Math.floor(i),o=Math.floor(r),c=l+1,u=o+1,f=e/l,d=t/o,m=[],h=[],v=[],p=[];for(let g=0;g<u;g++){const S=g*d-s;for(let y=0;y<c;y++){const b=y*f-a;h.push(b,-S,0),v.push(0,0,1),p.push(y/l),p.push(1-g/o)}}for(let g=0;g<o;g++)for(let S=0;S<l;S++){const y=S+c*g,b=S+c*(g+1),A=S+1+c*(g+1),E=S+1+c*g;m.push(y,b,E),m.push(b,A,E)}this.setIndex(m),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}class jr extends un{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(s+l,Math.PI);let c=0;const u=[],f=new J,d=new J,m=[],h=[],v=[],p=[];for(let g=0;g<=i;g++){const S=[],y=g/i,b=s+y*l,A=e*Math.cos(b),E=Math.sqrt(e*e-A*A);let w=0;g===0&&s===0?w=.5/t:g===i&&o===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const C=_/t,T=r+C*a;f.x=-E*Math.cos(T),f.y=A,f.z=E*Math.sin(T),h.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(C+w,1-y),S.push(c++)}u.push(S)}for(let g=0;g<i;g++)for(let S=0;S<t;S++){const y=u[g][S+1],b=u[g][S],A=u[g+1][S],E=u[g+1][S+1];(g!==0||s>0)&&m.push(y,b,E),(g!==i-1||o<Math.PI)&&m.push(b,A,E)}this.setIndex(m),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(bd(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(bd(r[0])){const a=[];for(let s=0,l=r.length;s<l;s++)a[s]=r[s].clone();e[t][i]=a}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function bd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Up={clone:Er,merge:Gt};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(r.value);break;case"v2":this.uniforms[i].value=new je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new J().fromArray(r.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bp extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zp extends ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hp extends ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(xd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!xd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function xd(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vp{constructor(e,t,i){const r=this;let a=!1,s=0,l=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,l),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,l),s===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],h=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return h}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gp=new Vp;class dl{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ar=new WeakMap;class Wp extends dl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=cl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let f=Ar.get(s);f===void 0&&(f=[],Ar.set(s,f)),f.push({onLoad:t,onError:r})}return s}const l=Vr("img");function o(){u(),t&&t(this);const f=Ar.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onLoad&&m.onLoad(this)}Ar.delete(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),cl.remove(`image:${e}`);const d=Ar.get(this)||[];for(let m=0;m<d.length;m++){const h=d[m];h.onError&&h.onError(f)}Ar.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){l.removeEventListener("load",o,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),cl.add(`image:${e}`,l),a.manager.itemStart(e),l.src=e,l}}class Xp extends dl{constructor(e){super(e)}load(e,t,i,r){const a=new yt,s=new Wp(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}const Ka=new J,Za=new dr,Nn=new J;class yd extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Za,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ka,Za,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new J,Md=new je,Sd=new je;class fn extends yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Sd),t.subVectors(Sd,Md)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/o,t-=s.offsetY*i/c,r*=s.width/o,i*=s.height/c}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ed extends yd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,l=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=-90,wr=1;class $p extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Tr,wr,e,t);r.layers=this.layers,this.add(r);const a=new fn(Tr,wr,e,t);a.layers=this.layers,this.add(a);const s=new fn(Tr,wr,e,t);s.layers=this.layers,this.add(s);const l=new fn(Tr,wr,e,t);l.layers=this.layers,this.add(l);const o=new fn(Tr,wr,e,t);o.layers=this.layers,this.add(o);const c=new fn(Tr,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,l,o]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,l,o,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class qp extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ad=new bt;class Td{constructor(e,t,i=0,r=1/0){this.ray=new dd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,i=[]){return ul(e,this,i,t),i.sort(wd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ul(e[r],this,i,t);return i.sort(wd),i}}function wd(n,e){return n.distance-e.distance}function ul(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,l=a.length;s<l;s++)ul(a[s],e,t,!0)}}const _c=class _c{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=r,this}};_c.prototype.isMatrix2=!0;let Cd=_c;function Rd(n,e,t,i){const r=Yp(i);switch(t){case Oc:return n*e;case zc:return n*e/r.components*r.byteLength;case eo:return n*e/r.components*r.byteLength;case Ni:return n*e*2/r.components*r.byteLength;case to:return n*e*2/r.components*r.byteLength;case Bc:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case no:return n*e*4/r.components*r.byteLength;case ya:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:case so:return Math.max(n,16)*Math.max(e,8)/4;case io:case ao:return Math.max(n,8)*Math.max(e,8)/2;case oo:case lo:case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case Aa:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case Ro:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lo:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ta:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yp(n){switch(n){case cn:case Nc:return{byteLength:1,components:1};case zr:case Fc:case qn:return{byteLength:2,components:1};case Qs:case js:return{byteLength:2,components:4};case Rn:case Js:case Pn:return{byteLength:4,components:1};case Uc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Us}})),typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Us);function Pd(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Kp(n){const e=new WeakMap;function t(l,o){const c=l.array,u=l.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(o,d),n.bufferData(o,c,u),l.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,o,c){const u=o.array,f=o.updateRanges;if(n.bindBuffer(c,l),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,h)=>m.start-h.start);let d=0;for(let m=1;m<f.length;m++){const h=f[d],v=f[m];v.start<=h.start+h.count+1?h.count=Math.max(h.count,v.start+v.count-h.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,h=f.length;m<h;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function s(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:r,remove:a,update:s}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Km=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ze={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:jp,alphatest_fragment:em,alphatest_pars_fragment:tm,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:sm,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:dm,clipping_planes_fragment:um,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:vm,color_vertex:bm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:Em,emissivemap_pars_fragment:Am,colorspace_fragment:Tm,colorspace_pars_fragment:wm,envmap_fragment:Cm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Vm,envmap_vertex:Im,fog_vertex:Dm,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Um,gradientmap_pars_fragment:km,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:Hm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:$m,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Km,lights_fragment_maps:Zm,lights_fragment_end:Jm,lightprobes_pars_fragment:Qm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:rg,map_particle_fragment:ag,map_particle_pars_fragment:sg,metalnessmap_fragment:og,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:dg,morphnormal_vertex:ug,morphtarget_pars_vertex:fg,morphtarget_vertex:hg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:vg,normal_vertex:bg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:Eg,packing:Ag,premultiplied_alpha_fragment:Tg,project_vertex:wg,dithering_fragment:Cg,dithering_pars_fragment:Rg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Dg,shadowmap_vertex:Ng,shadowmask_pars_fragment:Fg,skinbase_vertex:Ug,skinning_pars_vertex:kg,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:Hg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Gg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:$g,uv_pars_vertex:qg,uv_vertex:Yg,worldpos_vertex:Kg,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Pe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Fn={basic:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([Pe.points,Pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([Pe.common,Pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([Pe.sprite,Pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Gt([Pe.common,Pe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Gt([Pe.lights,Pe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Fn.physical={uniforms:Gt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ja={r:0,b:0,g:0},Zg=new bt,Ld=new $e;Ld.set(-1,0,0,0,1,0,0,0,1);function Jg(n,e,t,i,r,a){const s=new st(0);let l=r===!0?0:1,o,c,u=null,f=0,d=null;function m(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const b=S.backgroundBlurriness>0;y=e.get(y,b)}return y}function h(S){let y=!1;const b=m(S);b===null?p(s,l):b&&b.isColor&&(p(b,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,y){const b=m(y);b&&(b.isCubeTexture||b.mapping===_a)?(c===void 0&&(c=new qt(new Qr(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Er(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ld),c.material.toneMapped=it.getTransfer(b.colorSpace)!==ut,(u!==b||f!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(o===void 0&&(o=new qt(new Ya(2,2),new Sn({name:"BackgroundMaterial",uniforms:Er(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=b,o.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,o.material.toneMapped=it.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),o.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==n.toneMapping)&&(o.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null))}function p(S,y){S.getRGB(Ja,_d(n)),t.buffers.color.setClear(Ja.r,Ja.g,Ja.b,y,a)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,y=1){s.set(S),l=y,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(s,l)},render:h,addToRenderList:v,dispose:g}}function Qg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,s=!1;function l(L,R,U,I,x){let D=!1;const N=f(L,I,U,R);a!==N&&(a=N,c(a.object)),D=m(L,I,U,x),D&&h(L,I,U,x),x!==null&&e.update(x,n.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,b(L,R,U,I),x!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(x).buffer))}function o(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,R,U,I){const x=I.wireframe===!0;let D=i[R.id];D===void 0&&(D={},i[R.id]=D);const N=L.isInstancedMesh===!0?L.id:0;let B=D[N];B===void 0&&(B={},D[N]=B);let F=B[U.id];F===void 0&&(F={},B[U.id]=F);let z=F[x];return z===void 0&&(z=d(o()),F[x]=z),z}function d(L){const R=[],U=[],I=[];for(let x=0;x<t;x++)R[x]=0,U[x]=0,I[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,R,U,I){const x=a.attributes,D=R.attributes;let N=0;const B=U.getAttributes();for(const F in B)if(B[F].location>=0){const K=x[F];let ie=D[F];if(ie===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;N++}return a.attributesNum!==N||a.index!==I}function h(L,R,U,I){const x={},D=R.attributes;let N=0;const B=U.getAttributes();for(const F in B)if(B[F].location>=0){let K=D[F];K===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),x[F]=ie,N++}a.attributes=x,a.attributesNum=N,a.index=I}function v(){const L=a.newAttributes;for(let R=0,U=L.length;R<U;R++)L[R]=0}function p(L){g(L,0)}function g(L,R){const U=a.newAttributes,I=a.enabledAttributes,x=a.attributeDivisors;U[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),x[L]!==R&&(n.vertexAttribDivisor(L,R),x[L]=R)}function S(){const L=a.newAttributes,R=a.enabledAttributes;for(let U=0,I=R.length;U<I;U++)R[U]!==L[U]&&(n.disableVertexAttribArray(U),R[U]=0)}function y(L,R,U,I,x,D,N){N===!0?n.vertexAttribIPointer(L,R,U,x,D):n.vertexAttribPointer(L,R,U,I,x,D)}function b(L,R,U,I){v();const x=I.attributes,D=U.getAttributes(),N=R.defaultAttributeValues;for(const B in D){const F=D[B];if(F.location>=0){let z=x[B];if(z===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const K=z.normalized,ie=z.itemSize,$=e.get(z);if($===void 0)continue;const Z=$.buffer,ae=$.type,W=$.bytesPerElement,ne=ae===n.INT||ae===n.UNSIGNED_INT||z.gpuType===Js;if(z.isInterleavedBufferAttribute){const q=z.data,ge=q.stride,fe=z.offset;if(q.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)g(F.location+pe,q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<F.locationSize;pe++)p(F.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let pe=0;pe<F.locationSize;pe++)y(F.location+pe,ie/F.locationSize,ae,K,ge*W,(fe+ie/F.locationSize*pe)*W,ne)}else{if(z.isInstancedBufferAttribute){for(let q=0;q<F.locationSize;q++)g(F.location+q,z.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let q=0;q<F.locationSize;q++)p(F.location+q);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let q=0;q<F.locationSize;q++)y(F.location+q,ie/F.locationSize,ae,K,ie*W,ie/F.locationSize*q*W,ne)}}else if(N!==void 0){const K=N[B];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(F.location,K);break;case 3:n.vertexAttrib3fv(F.location,K);break;case 4:n.vertexAttrib4fv(F.location,K);break;default:n.vertexAttrib1fv(F.location,K)}}}}S()}function A(){C();for(const L in i){const R=i[L];for(const U in R){const I=R[U];for(const x in I){const D=I[x];for(const N in D)u(D[N].object),delete D[N];delete I[x]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const R=i[L.id];for(const U in R){const I=R[U];for(const x in I){const D=I[x];for(const N in D)u(D[N].object),delete D[N];delete I[x]}}delete i[L.id]}function w(L){for(const R in i){const U=i[R];for(const I in U){const x=U[I];if(x[L.id]===void 0)continue;const D=x[L.id];for(const N in D)u(D[N].object),delete D[N];delete x[L.id]}}}function _(L){for(const R in i){const U=i[R],I=L.isInstancedMesh===!0?L.id:0,x=U[I];if(x!==void 0){for(const D in x){const N=x[D];for(const B in N)u(N[B].object),delete N[B];delete x[D]}delete U[I],Object.keys(U).length===0&&delete i[R]}}}function C(){T(),s=!0,a!==r&&(a=r,c(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:C,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function jg(n,e,t){let i;function r(o){i=o}function a(o,c){n.drawArrays(i,o,c),t.update(c,i,1)}function s(o,c,u){u!==0&&(n.drawArraysInstanced(i,o,c,u),t.update(c,i,u))}function l(o,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];t.update(d,i,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=l}function e0(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==vn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const _=w===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==cn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pn&&!_)}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=o(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,maxSamples:A,samples:E}}function t0(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new zi,l=new $e,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const h=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!r||h===null||h.length===0||a&&!p)a?u(null):c();else{const S=a?0:i,y=S*4;let b=g.clippingState||null;o.value=b,b=u(h,d,y,m);for(let A=0;A!==y;++A)b[A]=t[A];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,h){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=o.value,h!==!0||p===null){const g=m+v*4,S=d.matrixWorldInverse;l.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,b=m;y!==v;++y,b+=4)s.copy(f[y]).applyMatrix4(S,l),s.normal.toArray(p,b),p[b+3]=s.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const _i=4,Id=[.125,.215,.35,.446,.526,.582],Vi=20,n0=256,ea=new Ed,Dd=new st;let fl=null,hl=0,pl=0,ml=!1;const i0=new J;class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:l=i0}=a;fl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,l),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,hl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:qn,format:vn,colorSpace:wa,depthBuffer:!1},r=Fd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r0(a)),this._blurMaterial=s0(a,e,t),this._ggxMaterial=a0(a,e,t)}return r}_compileMaterial(e){const t=new qt(new un,e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,i,r,a){const o=new fn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Dd),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Qr,new Mr({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let g=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,g=!0):(p.color.copy(Dd),g=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(o.up.set(0,c[y],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+u[y],a.y,a.z)):b===1?(o.up.set(0,0,c[y]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+u[y],a.z)):(o.up.set(0,c[y],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+u[y]));const A=this._cubeSize;Cr(r,b*A,y>2?A:0,A,A),f.setRenderTarget(r),g&&f.render(v,o),f.render(e,o)}f.toneMapping=m,f.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Li||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const l=a.uniforms;l.envMap.value=e;const o=this._cubeSize;Cr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,ea)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,l=this._lodMeshes[i];l.material=s;const o=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,m=f*d,{_lodMax:h}=this,v=this._sizeLods[i],p=3*v*(i>h-_i?i-h+_i:0),g=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=m,o.mipInt.value=h-t,Cr(a,p,g,3*v,2*v),r.setRenderTarget(a),r.render(l,ea),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=h-i,Cr(e,p,g,3*v,2*v),r.setRenderTarget(e),r.render(l,ea)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,l){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,h=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),v=a/h,p=isFinite(a)?1+Math.floor(u*v):Vi;p>Vi&&We(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const g=[];let S=0;for(let w=0;w<Vi;++w){const _=w/v,C=Math.exp(-_*_/2);g.push(C),w===0?S+=C:w<p&&(S+=2*C)}for(let w=0;w<g.length;w++)g[w]=g[w]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=s==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:y}=this;d.dTheta.value=h,d.mipInt.value=y-i;const b=this._sizeLods[r],A=3*b*(r>y-_i?r-y+_i:0),E=4*(this._cubeSize-b);Cr(t,A,E,3*b,2*b),o.setRenderTarget(t),o.render(f,ea)}}function r0(n){const e=[],t=[],i=[];let r=n;const a=n-_i+1+Id.length;for(let s=0;s<a;s++){const l=Math.pow(2,r);e.push(l);let o=1/l;s>n-_i?o=Id[s-n+_i-1]:s===0&&(o=0),t.push(o);const c=1/(l-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,h=6,v=3,p=2,g=1,S=new Float32Array(v*h*m),y=new Float32Array(p*h*m),b=new Float32Array(g*h*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,_=E>2?0:-1,C=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];S.set(C,v*h*E),y.set(d,p*h*E);const T=[E,E,E,E,E,E];b.set(T,g*h*E)}const A=new un;A.setAttribute("position",new Dn(S,v)),A.setAttribute("uv",new Dn(y,p)),A.setAttribute("faceIndex",new Dn(b,g)),i.push(new qt(A,null)),r>_i&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Fd(n,e,t){const i=new In(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function a0(n,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function s0(n,e,t){const i=new Float32Array(Vi),r=new J(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ud(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function kd(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Od extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qr(5,5,5),a=new Sn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Xn});a.uniforms.tEquirect.value=t;const s=new qt(r,a),l=t.minFilter;return t.minFilter===Ii&&(t.minFilter=xt),new $p(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}function o0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?s(d):a(d)}function a(d){if(d&&d.isTexture){const m=d.mapping;if(m===$s||m===qs)if(e.has(d)){const h=e.get(d).texture;return l(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const v=new Od(h.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),l(v.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const m=d.mapping,h=m===$s||m===qs,v=m===Li||m===ar;if(h||v){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Nd(n)),p=h?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const S=d.image;return h&&S&&S.height>0||v&&S&&o(S)?(i===null&&(i=new Nd(n)),p=h?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function l(d,m){return m===$s?d.mapping=Li:m===qs&&(d.mapping=ar),d}function o(d){let m=0;const h=6;for(let v=0;v<h;v++)d[v]!==void 0&&m++;return m===h}function c(d){const m=d.target;m.removeEventListener("dispose",c);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function l0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&or("WebGLRenderer: "+i+" extension not supported."),r}}}function c0(n,e,t,i){const r={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const h in d.attributes)e.remove(d.attributes[h]);d.removeEventListener("dispose",s),delete r[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function o(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,h=f.attributes.position;let v=0;if(h===void 0)return;if(m!==null){const S=m.array;v=m.version;for(let y=0,b=S.length;y<b;y+=3){const A=S[y+0],E=S[y+1],w=S[y+2];d.push(A,E,E,w,w,A)}}else{const S=h.array;v=h.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const A=y+0,E=y+1,w=y+2;d.push(A,E,E,w,w,A)}}const p=new(h.count>=65535?cd:ld)(d,1);p.version=v;const g=a.get(f);g&&e.remove(g),a.set(f,p)}function u(f){const d=a.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:l,update:o,getWireframeAttribute:u}}function d0(n,e,t){let i;function r(f){i=f}let a,s;function l(f){a=f.type,s=f.bytesPerElement}function o(f,d){n.drawElements(i,d,a,f*s),t.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,a,f*s,m),t.update(d,i,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,f,0,m);let v=0;for(let p=0;p<m;p++)v+=d[p];t.update(v,i,1)}this.setMode=r,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function u0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,l){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=l*(a/3);break;case n.LINES:t.lines+=l*(a/2);break;case n.LINE_STRIP:t.lines+=l*(a-1);break;case n.LINE_LOOP:t.lines+=l*a;break;case n.POINTS:t.points+=l*a;break;default:rt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function f0(n,e,t){const i=new WeakMap,r=new _t;function a(s,l,o){const c=s.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(l);if(d===void 0||d.count!==f){let C=function(){w.dispose(),i.delete(l),l.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const m=l.morphAttributes.position!==void 0,h=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let y=0;m===!0&&(y=1),h===!0&&(y=2),v===!0&&(y=3);let b=l.attributes.position.count*y,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*A*4*f),w=new Qc(E,b,A,f);w.type=Pn,w.needsUpdate=!0;const _=y*4;for(let T=0;T<f;T++){const L=p[T],R=g[T],U=S[T],I=b*A*4*T;for(let x=0;x<L.count;x++){const D=x*_;m===!0&&(r.fromBufferAttribute(L,x),E[I+D+0]=r.x,E[I+D+1]=r.y,E[I+D+2]=r.z,E[I+D+3]=0),h===!0&&(r.fromBufferAttribute(R,x),E[I+D+4]=r.x,E[I+D+5]=r.y,E[I+D+6]=r.z,E[I+D+7]=0),v===!0&&(r.fromBufferAttribute(U,x),E[I+D+8]=r.x,E[I+D+9]=r.y,E[I+D+10]=r.z,E[I+D+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:w,size:new je(b,A)},i.set(l,d),l.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const h=l.morphTargetsRelative?1:1-m;o.getUniforms().setValue(n,"morphTargetBaseInfluence",h),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function h0(n,e,t,i,r){let a=new WeakMap;function s(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==u&&(m.update(),a.set(m,u))}return d}function l(){a=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:l}}const p0={[Tc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Cc]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[Lc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Pc]:"CUSTOM_TONE_MAPPING"};function m0(n,e,t,i,r,a){const s=new In(e,t,{type:n,depthBuffer:r,stencilBuffer:a,samples:i?4:0,depthTexture:r?new Sr(e,t):void 0}),l=new In(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new un;o.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Dt([0,2,0,0,2,0],2));const c=new Bp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(o,c),f=new Ed(-1,1,1,-1,0,1);let d=null,m=null,h=!1,v,p=null,g=[],S=!1;this.setSize=function(y,b){s.setSize(y,b),l.setSize(y,b);for(let A=0;A<g.length;A++){const E=g[A];E.setSize&&E.setSize(y,b)}},this.setEffects=function(y){g=y,S=g.length>0&&g[0].isRenderPass===!0;const b=s.width,A=s.height;for(let E=0;E<g.length;E++){const w=g[E];w.setSize&&w.setSize(b,A)}},this.begin=function(y,b){if(h||y.toneMapping===Cn&&g.length===0)return!1;if(p=b,b!==null){const A=b.width,E=b.height;(s.width!==A||s.height!==E)&&this.setSize(A,E)}return S===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=Cn,!0},this.hasRenderPass=function(){return S},this.end=function(y,b){y.toneMapping=v,h=!0;let A=s,E=l;for(let w=0;w<g.length;w++){const _=g[w];if(_.enabled!==!1&&(_.render(y,E,A,b),_.needsSwap!==!1)){const C=A;A=E,E=C}}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,c.defines={},it.getTransfer(d)===ut&&(c.defines.SRGB_TRANSFER="");const w=p0[m];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(u,f),p=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),l.dispose(),o.dispose(),c.dispose()}}const Bd=new yt,gl=new Sr(1,1),zd=new Qc,Hd=new mp,Vd=new gd,Gd=[],Wd=[],Xd=new Float32Array(16),$d=new Float32Array(9),qd=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Gd[r];if(a===void 0&&(a=new Float32Array(r),Gd[r]=a),e!==0){i.toArray(a,0);for(let s=1,l=0;s!==e;++s)l+=t,n[s].toArray(a,l)}return a}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ja(n,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function x0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),wt(t,i)}}function y0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;$d.set(i),n.uniformMatrix3fv(this.addr,!1,$d),wt(t,i)}}function M0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;Xd.set(i),n.uniformMatrix4fv(this.addr,!1,Xd),wt(t,i)}}function S0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function T0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function w0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function L0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(gl.compareFunction=t.isReversedDepthBuffer()?Fo:No,a=gl):a=Bd,t.setTexture2D(e||a,r)}function I0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hd,r)}function D0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vd,r)}function N0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zd,r)}function F0(n){switch(n){case 5126:return g0;case 35664:return v0;case 35665:return b0;case 35666:return _0;case 35674:return x0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return A0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return C0;case 36295:return R0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}function U0(n,e){n.uniform1fv(this.addr,e)}function k0(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function O0(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function B0(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function z0(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H0(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V0(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G0(n,e){n.uniform1iv(this.addr,e)}function W0(n,e){n.uniform2iv(this.addr,e)}function X0(n,e){n.uniform3iv(this.addr,e)}function $0(n,e){n.uniform4iv(this.addr,e)}function q0(n,e){n.uniform1uiv(this.addr,e)}function Y0(n,e){n.uniform2uiv(this.addr,e)}function K0(n,e){n.uniform3uiv(this.addr,e)}function Z0(n,e){n.uniform4uiv(this.addr,e)}function J0(n,e,t){const i=this.cache,r=e.length,a=ja(t,r);Tt(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=gl:s=Bd;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||s,a[l])}function Q0(n,e,t){const i=this.cache,r=e.length,a=ja(t,r);Tt(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Hd,a[s])}function j0(n,e,t){const i=this.cache,r=e.length,a=ja(t,r);Tt(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Vd,a[s])}function ev(n,e,t){const i=this.cache,r=e.length,a=ja(t,r);Tt(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||zd,a[s])}function tv(n){switch(n){case 5126:return U0;case 35664:return k0;case 35665:return O0;case 35666:return B0;case 35674:return z0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return $0;case 5125:return q0;case 36294:return Y0;case 36295:return K0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return ev}}class nv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}}class iv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tv(t.type)}}class rv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const l=r[a];l.setValue(e,t[l.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Yd(n,e){n.seq.push(e),n.map[e.id]=e}function av(n,e,t){const i=n.name,r=i.length;for(vl.lastIndex=0;;){const a=vl.exec(i),s=vl.lastIndex;let l=a[1];const o=a[2]==="]",c=a[3];if(o&&(l=l|0),c===void 0||c==="["&&s+2===r){Yd(t,c===void 0?new nv(l,n,e):new iv(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new rv(l),Yd(t,f)),t=f}}}class es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(t,s),o=e.getUniformLocation(t,l.name);av(l,o,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const l=t[a],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Kd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sv=37297;let ov=0;function lv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const l=s+1;i.push(`${l===e?">":" "} ${l}: ${t[s]}`)}return i.join(`
`)}const Zd=new $e;function cv(n){it._getMatrix(Zd,it.workingColorSpace,n);const e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Ca:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+lv(n.getShaderSource(e),l)}else return a}function dv(n,e){const t=cv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uv={[Tc]:"Linear",[wc]:"Reinhard",[Cc]:"Cineon",[Rc]:"ACESFilmic",[Lc]:"AgX",[Ic]:"Neutral",[Pc]:"Custom"};function fv(n,e){const t=uv[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ts=new J;function hv(){it.getLuminanceCoefficients(ts);const n=ts.x.toFixed(4),e=ts.y.toFixed(4),t=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function mv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let l=1;a.type===n.FLOAT_MAT2&&(l=2),a.type===n.FLOAT_MAT3&&(l=3),a.type===n.FLOAT_MAT4&&(l=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:l}}return t}function ta(n){return n!==""}function Qd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(n){return n.replace(vv,_v)}const bv=new Map;function _v(n,e){let t=Ze[e];if(t===void 0){const i=bv.get(e);if(i!==void 0)t=Ze[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bl(t)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(xv,yv)}function yv(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function tu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Mv={[ba]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function Sv(n){return Mv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ev={[Li]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE_UV"};function Av(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ev[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tv={[ar]:"ENVMAP_MODE_REFRACTION"};function wv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Tv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cv={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[Dh]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function Rv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Cv[n.combine]||"ENVMAP_BLENDING_NONE"}function Pv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lv(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,l=t.fragmentShader;const o=Sv(t),c=Av(t),u=wv(t),f=Rv(t),d=Pv(t),m=pv(t),h=mv(a),v=r.createProgram();let p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(ta).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(ta).join(`
`),g.length>0&&(g+=`
`)):(p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),g=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,dv("linearToOutputTexel",t.outputColorSpace),hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),s=bl(s),s=Qd(s,t),s=jd(s,t),l=bl(l),l=Qd(l,t),l=jd(l,t),s=eu(s),l=eu(l),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=S+p+s,b=S+g+l,A=Kd(r,r.VERTEX_SHADER,y),E=Kd(r,r.FRAGMENT_SHADER,b);r.attachShader(v,A),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(L){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(A)||"",I=r.getShaderInfoLog(E)||"",x=R.trim(),D=U.trim(),N=I.trim();let B=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,E);else{const z=Jd(r,A,"vertex"),K=Jd(r,E,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+x+`
`+z+`
`+K)}else x!==""?We("WebGLProgram: Program Info Log:",x):(D===""||N==="")&&(F=!1);F&&(L.diagnostics={runnable:B,programLog:x,vertexShader:{log:D,prefix:p},fragmentShader:{log:N,prefix:g}})}r.deleteShader(A),r.deleteShader(E),_=new es(r,v),C=gv(r,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,sv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ov++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let Iv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nv(e),t.set(e,i)),i}}class Nv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Fv(n){return n===Ni||n===Aa||n===Ta}function Uv(n,e,t,i,r,a){const s=new Vo,l=new Dv,o=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return o.add(_),_===0?"uv":`uv${_}`}function v(_,C,T,L,R,U){const I=L.fog,x=R.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||D,N),F=B&&B.mapping===_a?B.image.height:null,z=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const K=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ie=K!==void 0?K.length:0;let $=0;x.morphAttributes.position!==void 0&&($=1),x.morphAttributes.normal!==void 0&&($=2),x.morphAttributes.color!==void 0&&($=3);let Z,ae,W,ne;if(z){const Fe=Fn[z];Z=Fe.vertexShader,ae=Fe.fragmentShader}else{Z=_.vertexShader,ae=_.fragmentShader;const Fe=l.getVertexShaderStage(_),gt=l.getFragmentShaderStage(_);l.update(_,Fe,gt),W=Fe.id,ne=gt.id}const q=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),fe=R.isInstancedMesh===!0,pe=R.isBatchedMesh===!0,_e=!!_.map,ce=!!_.matcap,ve=!!B,Le=!!_.aoMap,Re=!!_.lightMap,Oe=!!_.bumpMap&&_.wireframe===!1,Ye=!!_.normalMap,ze=!!_.displacementMap,at=!!_.emissiveMap,Ge=!!_.metalnessMap,He=!!_.roughnessMap,V=_.anisotropy>0,ft=_.clearcoat>0,Je=_.dispersion>0,k=_.iridescence>0,M=_.sheen>0,Y=_.transmission>0,ee=V&&!!_.anisotropyMap,se=ft&&!!_.clearcoatMap,be=ft&&!!_.clearcoatNormalMap,Se=ft&&!!_.clearcoatRoughnessMap,re=k&&!!_.iridescenceMap,oe=k&&!!_.iridescenceThicknessMap,ye=M&&!!_.sheenColorMap,Ue=M&&!!_.sheenRoughnessMap,Ae=!!_.specularMap,Me=!!_.specularColorMap,Be=!!_.specularIntensityMap,Ve=Y&&!!_.transmissionMap,qe=Y&&!!_.thicknessMap,G=!!_.gradientMap,Ee=!!_.alphaMap,le=_.alphaTest>0,Te=!!_.alphaHash,Ie=!!_.extensions;let he=Cn;_.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(he=n.toneMapping);const ke={shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:ae,defines:_.defines,customVertexShaderID:W,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:pe,batchingColor:pe&&R._colorsTexture!==null,instancing:fe,instancingColor:fe&&R.instanceColor!==null,instancingMorph:fe&&R.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_e,matcap:ce,envMap:ve,envMapMode:ve&&B.mapping,envMapCubeUVHeight:F,aoMap:Le,lightMap:Re,bumpMap:Oe,normalMap:Ye,displacementMap:ze,emissiveMap:at,normalMapObjectSpace:Ye&&_.normalMapType===kh,normalMapTangentSpace:Ye&&_.normalMapType===Hc,packedNormalMap:Ye&&_.normalMapType===Hc&&Fv(_.normalMap.format),metalnessMap:Ge,roughnessMap:He,anisotropy:V,anisotropyMap:ee,clearcoat:ft,clearcoatMap:se,clearcoatNormalMap:be,clearcoatRoughnessMap:Se,dispersion:Je,iridescence:k,iridescenceMap:re,iridescenceThicknessMap:oe,sheen:M,sheenColorMap:ye,sheenRoughnessMap:Ue,specularMap:Ae,specularColorMap:Me,specularIntensityMap:Be,transmission:Y,transmissionMap:Ve,thicknessMap:qe,gradientMap:G,opaque:_.transparent===!1&&_.blending===ir&&_.alphaToCoverage===!1,alphaMap:Ee,alphaTest:le,alphaHash:Te,combine:_.combine,mapUv:_e&&h(_.map.channel),aoMapUv:Le&&h(_.aoMap.channel),lightMapUv:Re&&h(_.lightMap.channel),bumpMapUv:Oe&&h(_.bumpMap.channel),normalMapUv:Ye&&h(_.normalMap.channel),displacementMapUv:ze&&h(_.displacementMap.channel),emissiveMapUv:at&&h(_.emissiveMap.channel),metalnessMapUv:Ge&&h(_.metalnessMap.channel),roughnessMapUv:He&&h(_.roughnessMap.channel),anisotropyMapUv:ee&&h(_.anisotropyMap.channel),clearcoatMapUv:se&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:be&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&h(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&h(_.sheenRoughnessMap.channel),specularMapUv:Ae&&h(_.specularMap.channel),specularColorMapUv:Me&&h(_.specularColorMap.channel),specularIntensityMapUv:Be&&h(_.specularIntensityMap.channel),transmissionMapUv:Ve&&h(_.transmissionMap.channel),thicknessMapUv:qe&&h(_.thicknessMap.channel),alphaMapUv:Ee&&h(_.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(Ye||V),vertexNormals:!!x.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!x.attributes.uv&&(_e||Ee),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||x.attributes.normal===void 0&&Ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:x.attributes.position!==void 0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:_e&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:at&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ke.vertexUv1s=o.has(1),ke.vertexUv2s=o.has(2),ke.vertexUv3s=o.has(3),o.clear(),ke}function p(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)C.push(T),C.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(g(C,_),S(C,_),C.push(n.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function g(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function S(_,C){s.disableAll(),C.instancing&&s.enable(0),C.instancingColor&&s.enable(1),C.instancingMorph&&s.enable(2),C.matcap&&s.enable(3),C.envMap&&s.enable(4),C.normalMapObjectSpace&&s.enable(5),C.normalMapTangentSpace&&s.enable(6),C.clearcoat&&s.enable(7),C.iridescence&&s.enable(8),C.alphaTest&&s.enable(9),C.vertexColors&&s.enable(10),C.vertexAlphas&&s.enable(11),C.vertexUv1s&&s.enable(12),C.vertexUv2s&&s.enable(13),C.vertexUv3s&&s.enable(14),C.vertexTangents&&s.enable(15),C.anisotropy&&s.enable(16),C.alphaHash&&s.enable(17),C.batching&&s.enable(18),C.dispersion&&s.enable(19),C.batchingColor&&s.enable(20),C.gradientMap&&s.enable(21),C.packedNormalMap&&s.enable(22),C.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),C.fog&&s.enable(0),C.useFog&&s.enable(1),C.flatShading&&s.enable(2),C.logarithmicDepthBuffer&&s.enable(3),C.reversedDepthBuffer&&s.enable(4),C.skinning&&s.enable(5),C.morphTargets&&s.enable(6),C.morphNormals&&s.enable(7),C.morphColors&&s.enable(8),C.premultipliedAlpha&&s.enable(9),C.shadowMapEnabled&&s.enable(10),C.doubleSided&&s.enable(11),C.flipSided&&s.enable(12),C.useDepthPacking&&s.enable(13),C.dithering&&s.enable(14),C.transmission&&s.enable(15),C.sheen&&s.enable(16),C.opaque&&s.enable(17),C.pointsUvs&&s.enable(18),C.decodeVideoTexture&&s.enable(19),C.decodeVideoTextureEmissive&&s.enable(20),C.alphaToCoverage&&s.enable(21),C.numLightProbeGrids>0&&s.enable(22),C.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function y(_){const C=m[_.type];let T;if(C){const L=Fn[C];T=Up.clone(L.uniforms)}else T=_.uniforms;return T}function b(_,C){let T=u.get(C);return T!==void 0?++T.usedTimes:(T=new Lv(n,C,_,r),c.push(T),u.set(C,T)),T}function A(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){l.remove(_)}function w(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:w}}function kv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let l=n.get(s);return l===void 0&&(l={},n.set(s,l)),l}function i(s){n.delete(s)}function r(s,l,o){n.get(s)[l]=o}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function Ov(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function l(d,m,h,v,p,g){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:m,material:h,materialVariant:s(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},n[e]=S):(S.id=d.id,S.object=d,S.geometry=m,S.material=h,S.materialVariant=s(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=p,S.group=g),e++,S}function o(d,m,h,v,p,g){const S=l(d,m,h,v,p,g);h.transmission>0?i.push(S):h.transparent===!0?r.push(S):t.push(S)}function c(d,m,h,v,p,g){const S=l(d,m,h,v,p,g);h.transmission>0?i.unshift(S):h.transparent===!0?r.unshift(S):t.unshift(S)}function u(d,m,h){t.length>1&&t.sort(d||Ov),i.length>1&&i.sort(m||nu),r.length>1&&r.sort(m||nu),h&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,m=n.length;d<m;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:f,sort:u}}function Bv(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new iu,n.set(i,[s])):r>=a.length?(s=new iu,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function zv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new st};break;case"SpotLight":t={position:new J,direction:new J,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function Hv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Vv=0;function Gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wv(n){const e=new zv,t=Hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,a=new bt,s=new bt;function l(c){let u=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,h=0,v=0,p=0,g=0,S=0,y=0,b=0,A=0,E=0,w=0;c.sort(Gv);for(let C=0,T=c.length;C<T;C++){const L=c[C],R=L.color,U=L.intensity,I=L.distance;let x=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ni?x=L.shadow.map.texture:x=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=R.r*U,f+=R.g*U,d+=R.b*U;else if(L.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(L.sh.coefficients[D],U);w++}else if(L.isDirectionalLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const N=L.shadow,B=t.get(L);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=x,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=D,m++}else if(L.isSpotLight){const D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(R).multiplyScalar(U),D.distance=I,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,i.spot[v]=D;const N=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,N.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=N.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=x,b++}v++}else if(L.isRectAreaLight){const D=e.get(L);D.color.copy(R).multiplyScalar(U),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=D,p++}else if(L.isPointLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){const N=L.shadow,B=t.get(L);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,i.pointShadow[h]=B,i.pointShadowMap[h]=x,i.pointShadowMatrix[h]=L.shadow.matrix,y++}i.point[h]=D,h++}else if(L.isHemisphereLight){const D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(U),D.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[g]=D,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==m||_.pointLength!==h||_.spotLength!==v||_.rectAreaLength!==p||_.hemiLength!==g||_.numDirectionalShadows!==S||_.numPointShadows!==y||_.numSpotShadows!==b||_.numSpotMaps!==A||_.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=h,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,_.directionalLength=m,_.pointLength=h,_.spotLength=v,_.rectAreaLength=p,_.hemiLength=g,_.numDirectionalShadows=S,_.numPointShadows=y,_.numSpotShadows=b,_.numSpotMaps=A,_.numLightProbes=w,i.version=Vv++)}function o(c,u){let f=0,d=0,m=0,h=0,v=0;const p=u.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const y=c[g];if(y.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(y.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=i.rectArea[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),s.identity(),a.copy(y.matrixWorld),a.premultiply(p),s.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),h++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:l,setupView:o,state:i}}function ru(n){const e=new Wv(n),t=[],i=[],r=[];function a(d){f.camera=d,t.length=0,i.length=0,r.length=0}function s(d){t.push(d)}function l(d){i.push(d)}function o(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:l,pushLightProbeGrid:o}}function Xv(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new ru(n),e.set(r,[l])):a>=s.length?(l=new ru(n),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const $v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`,Yv=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Kv=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],au=new bt,na=new J,_l=new J;function Zv(n,e,t){let i=new pd;const r=new je,a=new je,s=new _t,l=new zp,o=new Hp,c={},u=t.maxTextureSize,f={[ui]:Xt,[Xt]:ui,[gn]:gn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:$v,fragmentShader:qv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const h=new un;h.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qt(h,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let g=this.type;this.render=function(E,w,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ph&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);const C=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Xn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const U=g!==this.type;U&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(x=>x.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,x=E.length;I<x;I++){const D=E[I],N=D.shadow;if(N===void 0){We("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const B=N.getFrameExtents();r.multiply(B),a.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/B.x),r.x=a.x*B.x,N.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/B.y),r.y=a.y*B.y,N.mapSize.y=a.y));const F=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=F,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Br){if(D.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new In(r.x,r.y,{format:Ni,type:qn,minFilter:xt,magFilter:xt,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new Sr(r.x,r.y,Pn),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=Yn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=It,N.map.depthTexture.magFilter=It}else D.isPointLight?(N.map=new Od(r.x),N.map.depthTexture=new Np(r.x,Rn)):(N.map=new In(r.x,r.y),N.map.depthTexture=new Sr(r.x,r.y,Rn)),N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=Yn,this.type===ba?(N.map.depthTexture.compareFunction=F?Fo:No,N.map.depthTexture.minFilter=xt,N.map.depthTexture.magFilter=xt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=It,N.map.depthTexture.magFilter=It);N.camera.updateProjectionMatrix()}const z=N.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<z;K++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,K),n.clear();else{K===0&&(n.setRenderTarget(N.map),n.clear());const ie=N.getViewport(K);s.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),R.viewport(s)}if(D.isPointLight){const ie=N.camera,$=N.matrix,Z=D.distance||ie.far;Z!==ie.far&&(ie.far=Z,ie.updateProjectionMatrix()),na.setFromMatrixPosition(D.matrixWorld),ie.position.copy(na),_l.copy(ie.position),_l.add(Yv[K]),ie.up.copy(Kv[K]),ie.lookAt(_l),ie.updateMatrixWorld(),$.makeTranslation(-na.x,-na.y,-na.z),au.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),N._frustum.setFromProjectionMatrix(au,ie.coordinateSystem,ie.reversedDepth)}else N.updateMatrices(D);i=N.getFrustum(),b(w,_,N.camera,D,this.type)}N.isPointLightShadow!==!0&&this.type===Br&&S(N,_),N.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(C,T,L)};function S(E,w){const _=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(r.x,r.y,{format:Ni,type:qn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,_,d,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,_,m,v,null)}function y(E,w,_,C){let T=null;const L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)T=L;else if(T=_.isPointLight===!0?o:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const R=T.uuid,U=w.uuid;let I=c[R];I===void 0&&(I={},c[R]=I);let x=I[U];x===void 0&&(x=T.clone(),I[U]=x,w.addEventListener("dispose",A)),T=x}if(T.visible=w.visible,T.wireframe=w.wireframe,C===Br?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const R=n.properties.get(T);R.light=_}return T}function b(E,w,_,C,T){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Br)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const U=e.update(E),I=E.material;if(Array.isArray(I)){const x=U.groups;for(let D=0,N=x.length;D<N;D++){const B=x[D],F=I[B.materialIndex];if(F&&F.visible){const z=y(E,F,C,T);E.onBeforeShadow(n,E,w,_,U,z,B),n.renderBufferDirect(_,null,U,z,E,B),E.onAfterShadow(n,E,w,_,U,z,B)}}}else if(I.visible){const x=y(E,I,C,T);E.onBeforeShadow(n,E,w,_,U,x,null),n.renderBufferDirect(_,null,U,x,E,null),E.onAfterShadow(n,E,w,_,U,x,null)}}const R=E.children;for(let U=0,I=R.length;U<I;U++)b(R[U],w,_,C,T)}function A(E){E.target.removeEventListener("dispose",A);for(const _ in c){const C=c[_],T=E.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function Jv(n,e){function t(){let G=!1;const Ee=new _t;let le=null;const Te=new _t(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!G&&(n.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,he,ke,Fe,gt){gt===!0&&(Ie*=Fe,he*=Fe,ke*=Fe),Ee.set(Ie,he,ke,Fe),Te.equals(Ee)===!1&&(n.clearColor(Ie,he,ke,Fe),Te.copy(Ee))},reset:function(){G=!1,le=null,Te.set(-1,0,0,0)}}}function i(){let G=!1,Ee=!1,le=null,Te=null,Ie=null;return{setReversed:function(he){if(Ee!==he){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ee=he;const Fe=Ie;Ie=null,this.setClear(Fe)}},getReversed:function(){return Ee},setTest:function(he){he?q(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(he){le!==he&&!G&&(n.depthMask(he),le=he)},setFunc:function(he){if(Ee&&(he=qh[he]),Te!==he){switch(he){case Bs:n.depthFunc(n.NEVER);break;case zs:n.depthFunc(n.ALWAYS);break;case Hs:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case Vs:n.depthFunc(n.EQUAL);break;case Gs:n.depthFunc(n.GEQUAL);break;case Ws:n.depthFunc(n.GREATER);break;case Xs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=he}},setLocked:function(he){G=he},setClear:function(he){Ie!==he&&(Ie=he,Ee&&(he=1-he),n.clearDepth(he))},reset:function(){G=!1,le=null,Te=null,Ie=null,Ee=!1}}}function r(){let G=!1,Ee=null,le=null,Te=null,Ie=null,he=null,ke=null,Fe=null,gt=null;return{setTest:function(ht){G||(ht?q(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ht){Ee!==ht&&!G&&(n.stencilMask(ht),Ee=ht)},setFunc:function(ht,Wt,en){(le!==ht||Te!==Wt||Ie!==en)&&(n.stencilFunc(ht,Wt,en),le=ht,Te=Wt,Ie=en)},setOp:function(ht,Wt,en){(he!==ht||ke!==Wt||Fe!==en)&&(n.stencilOp(ht,Wt,en),he=ht,ke=Wt,Fe=en)},setLocked:function(ht){G=ht},setClear:function(ht){gt!==ht&&(n.clearStencil(ht),gt=ht)},reset:function(){G=!1,Ee=null,le=null,Te=null,Ie=null,he=null,ke=null,Fe=null,gt=null}}}const a=new t,s=new i,l=new r,o=new WeakMap,c=new WeakMap;let u={},f={},d={},m=new WeakMap,h=[],v=null,p=!1,g=null,S=null,y=null,b=null,A=null,E=null,w=null,_=new st(0,0,0),C=0,T=!1,L=null,R=null,U=null,I=null,x=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=B>=2);let z=null,K={};const ie=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Z=new _t().fromArray(ie),ae=new _t().fromArray($);function W(G,Ee,le,Te){const Ie=new Uint8Array(4),he=n.createTexture();n.bindTexture(G,he),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<le;ke++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Ee+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return he}const ne={};ne[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),l.setClear(0),q(n.DEPTH_TEST),s.setFunc(rr),Oe(!1),Ye(yc),q(n.CULL_FACE),Le(Xn);function q(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function ge(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function fe(G,Ee){return d[G]!==Ee?(n.bindFramebuffer(G,Ee),d[G]=Ee,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function pe(G,Ee){let le=h,Te=!1;if(G){le=m.get(Ee),le===void 0&&(le=[],m.set(Ee,le));const Ie=G.textures;if(le.length!==Ie.length||le[0]!==n.COLOR_ATTACHMENT0){for(let he=0,ke=Ie.length;he<ke;he++)le[he]=n.COLOR_ATTACHMENT0+he;le.length=Ie.length,Te=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Te=!0);Te&&n.drawBuffers(le)}function _e(G){return v!==G?(n.useProgram(G),v=G,!0):!1}const ce={[Pi]:n.FUNC_ADD,[gh]:n.FUNC_SUBTRACT,[vh]:n.FUNC_REVERSE_SUBTRACT};ce[bh]=n.MIN,ce[_h]=n.MAX;const ve={[xh]:n.ZERO,[yh]:n.ONE,[Mh]:n.SRC_COLOR,[ks]:n.SRC_ALPHA,[Ch]:n.SRC_ALPHA_SATURATE,[Th]:n.DST_COLOR,[Eh]:n.DST_ALPHA,[Sh]:n.ONE_MINUS_SRC_COLOR,[Os]:n.ONE_MINUS_SRC_ALPHA,[wh]:n.ONE_MINUS_DST_COLOR,[Ah]:n.ONE_MINUS_DST_ALPHA,[Rh]:n.CONSTANT_COLOR,[Ph]:n.ONE_MINUS_CONSTANT_COLOR,[Lh]:n.CONSTANT_ALPHA,[Ih]:n.ONE_MINUS_CONSTANT_ALPHA};function Le(G,Ee,le,Te,Ie,he,ke,Fe,gt,ht){if(G===Xn){p===!0&&(ge(n.BLEND),p=!1);return}if(p===!1&&(q(n.BLEND),p=!0),G!==mh){if(G!==g||ht!==T){if((S!==Pi||A!==Pi)&&(n.blendEquation(n.FUNC_ADD),S=Pi,A=Pi),ht)switch(G){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",G);break}else switch(G){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",G);break}y=null,b=null,E=null,w=null,_.set(0,0,0),C=0,g=G,T=ht}return}Ie=Ie||Ee,he=he||le,ke=ke||Te,(Ee!==S||Ie!==A)&&(n.blendEquationSeparate(ce[Ee],ce[Ie]),S=Ee,A=Ie),(le!==y||Te!==b||he!==E||ke!==w)&&(n.blendFuncSeparate(ve[le],ve[Te],ve[he],ve[ke]),y=le,b=Te,E=he,w=ke),(Fe.equals(_)===!1||gt!==C)&&(n.blendColor(Fe.r,Fe.g,Fe.b,gt),_.copy(Fe),C=gt),g=G,T=!1}function Re(G,Ee){G.side===gn?ge(n.CULL_FACE):q(n.CULL_FACE);let le=G.side===Xt;Ee&&(le=!le),Oe(le),G.blending===ir&&G.transparent===!1?Le(Xn):Le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),a.setMask(G.colorWrite);const Te=G.stencilWrite;l.setTest(Te),Te&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),at(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(G){L!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),L=G)}function Ye(G){G!==fh?(q(n.CULL_FACE),G!==R&&(G===yc?n.cullFace(n.BACK):G===hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),R=G}function ze(G){G!==U&&(N&&n.lineWidth(G),U=G)}function at(G,Ee,le){G?(q(n.POLYGON_OFFSET_FILL),(I!==Ee||x!==le)&&(I=Ee,x=le,s.getReversed()&&(Ee=-Ee),n.polygonOffset(Ee,le))):ge(n.POLYGON_OFFSET_FILL)}function Ge(G){G?q(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function He(G){G===void 0&&(G=n.TEXTURE0+D-1),z!==G&&(n.activeTexture(G),z=G)}function V(G,Ee,le){le===void 0&&(z===null?le=n.TEXTURE0+D-1:le=z);let Te=K[le];Te===void 0&&(Te={type:void 0,texture:void 0},K[le]=Te),(Te.type!==G||Te.texture!==Ee)&&(z!==le&&(n.activeTexture(le),z=le),n.bindTexture(G,Ee||ne[G]),Te.type=G,Te.texture=Ee)}function ft(){const G=K[z];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function M(){try{n.texSubImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function Y(){try{n.texSubImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function be(){try{n.texStorage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function Se(){try{n.texStorage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function re(){try{n.texImage2D(...arguments)}catch(G){rt("WebGLState:",G)}}function oe(){try{n.texImage3D(...arguments)}catch(G){rt("WebGLState:",G)}}function ye(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function Ue(G,Ee){f[G]!==Ee&&(n.pixelStorei(G,Ee),f[G]=Ee)}function Ae(G){Z.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function Me(G){ae.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ae.copy(G))}function Be(G,Ee){let le=c.get(Ee);le===void 0&&(le=new WeakMap,c.set(Ee,le));let Te=le.get(G);Te===void 0&&(Te=n.getUniformBlockIndex(Ee,G.name),le.set(G,Te))}function Ve(G,Ee){const Te=c.get(Ee).get(G);o.get(Ee)!==Te&&(n.uniformBlockBinding(Ee,Te,G.__bindingPointIndex),o.set(Ee,Te))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},z=null,K={},d={},m=new WeakMap,h=[],v=null,p=!1,g=null,S=null,y=null,b=null,A=null,E=null,w=null,_=new st(0,0,0),C=0,T=!1,L=null,R=null,U=null,I=null,x=null,Z.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),l.reset()}return{buffers:{color:a,depth:s,stencil:l},enable:q,disable:ge,bindFramebuffer:fe,drawBuffers:pe,useProgram:_e,setBlending:Le,setMaterial:Re,setFlipSided:Oe,setCullFace:Ye,setLineWidth:ze,setPolygonOffset:at,setScissorTest:Ge,activeTexture:He,bindTexture:V,unbindTexture:ft,compressedTexImage2D:Je,compressedTexImage3D:k,texImage2D:re,texImage3D:oe,pixelStorei:Ue,getParameter:ye,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:be,texStorage3D:Se,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:ee,compressedTexSubImage3D:se,scissor:Ae,viewport:Me,reset:qe}}function Qv(n,e,t,i,r,a,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,f=new Set;let d;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(k,M){return h?new OffscreenCanvas(k,M):Vr("canvas")}function p(k,M,Y){let ee=1;const se=Je(k);if((se.width>Y||se.height>Y)&&(ee=Y/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const be=Math.floor(ee*se.width),Se=Math.floor(ee*se.height);d===void 0&&(d=v(be,Se));const re=M?v(be,Se):d;return re.width=be,re.height=Se,re.getContext("2d").drawImage(k,0,0,be,Se),We("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+be+"x"+Se+")."),re}else return"data"in k&&We("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),k;return k}function g(k){return k.generateMipmaps}function S(k){n.generateMipmap(k)}function y(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(k,M,Y,ee,se,be=!1){if(k!==null){if(n[k]!==void 0)return n[k];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Se;ee&&(Se=e.get("EXT_texture_norm16"),Se||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=M;if(M===n.RED&&(Y===n.FLOAT&&(re=n.R32F),Y===n.HALF_FLOAT&&(re=n.R16F),Y===n.UNSIGNED_BYTE&&(re=n.R8),Y===n.UNSIGNED_SHORT&&Se&&(re=Se.R16_EXT),Y===n.SHORT&&Se&&(re=Se.R16_SNORM_EXT)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(re=n.R8UI),Y===n.UNSIGNED_SHORT&&(re=n.R16UI),Y===n.UNSIGNED_INT&&(re=n.R32UI),Y===n.BYTE&&(re=n.R8I),Y===n.SHORT&&(re=n.R16I),Y===n.INT&&(re=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(re=n.RG32F),Y===n.HALF_FLOAT&&(re=n.RG16F),Y===n.UNSIGNED_BYTE&&(re=n.RG8),Y===n.UNSIGNED_SHORT&&Se&&(re=Se.RG16_EXT),Y===n.SHORT&&Se&&(re=Se.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(re=n.RG8UI),Y===n.UNSIGNED_SHORT&&(re=n.RG16UI),Y===n.UNSIGNED_INT&&(re=n.RG32UI),Y===n.BYTE&&(re=n.RG8I),Y===n.SHORT&&(re=n.RG16I),Y===n.INT&&(re=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(re=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(re=n.RGB16UI),Y===n.UNSIGNED_INT&&(re=n.RGB32UI),Y===n.BYTE&&(re=n.RGB8I),Y===n.SHORT&&(re=n.RGB16I),Y===n.INT&&(re=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),Y===n.UNSIGNED_INT&&(re=n.RGBA32UI),Y===n.BYTE&&(re=n.RGBA8I),Y===n.SHORT&&(re=n.RGBA16I),Y===n.INT&&(re=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_SHORT&&Se&&(re=Se.RGB16_EXT),Y===n.SHORT&&Se&&(re=Se.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(re=n.R11F_G11F_B10F)),M===n.RGBA){const oe=be?Ca:it.getTransfer(se);Y===n.FLOAT&&(re=n.RGBA32F),Y===n.HALF_FLOAT&&(re=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(re=oe===ut?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Se&&(re=Se.RGBA16_EXT),Y===n.SHORT&&Se&&(re=Se.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(k,M){let Y;return k?M===null||M===Rn||M===Hr?Y=n.DEPTH24_STENCIL8:M===Pn?Y=n.DEPTH32F_STENCIL8:M===zr&&(Y=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rn||M===Hr?Y=n.DEPTH_COMPONENT24:M===Pn?Y=n.DEPTH_COMPONENT32F:M===zr&&(Y=n.DEPTH_COMPONENT16),Y}function E(k,M){return g(k)===!0||k.isFramebufferTexture&&k.minFilter!==It&&k.minFilter!==xt?Math.log2(Math.max(M.width,M.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?M.mipmaps.length:1}function w(k){const M=k.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function _(k){const M=k.target;M.removeEventListener("dispose",_),L(M)}function C(k){const M=i.get(k);if(M.__webglInit===void 0)return;const Y=k.source,ee=m.get(Y);if(ee){const se=ee[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(k),Object.keys(ee).length===0&&m.delete(Y)}i.remove(k)}function T(k){const M=i.get(k);n.deleteTexture(M.__webglTexture);const Y=k.source,ee=m.get(Y);delete ee[M.__cacheKey],s.memory.textures--}function L(k){const M=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let se=0;se<M.__webglFramebuffer[ee].length;se++)n.deleteFramebuffer(M.__webglFramebuffer[ee][se]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=k.textures;for(let ee=0,se=Y.length;ee<se;ee++){const be=i.get(Y[ee]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(Y[ee])}i.remove(k)}let R=0;function U(){R=0}function I(){return R}function x(k){R=k}function D(){const k=R;return k>=r.maxTextures&&We("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),R+=1,k}function N(k){const M=[];return M.push(k.wrapS),M.push(k.wrapT),M.push(k.wrapR||0),M.push(k.magFilter),M.push(k.minFilter),M.push(k.anisotropy),M.push(k.internalFormat),M.push(k.format),M.push(k.type),M.push(k.generateMipmaps),M.push(k.premultiplyAlpha),M.push(k.flipY),M.push(k.unpackAlignment),M.push(k.colorSpace),M.join()}function B(k,M){const Y=i.get(k);if(k.isVideoTexture&&V(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Y.__version!==k.version){const ee=k.image;if(ee===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(Y,k,M);return}}else k.isExternalTexture&&(Y.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function F(k,M){const Y=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){ge(Y,k,M);return}else k.isExternalTexture&&(Y.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function z(k,M){const Y=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){ge(Y,k,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function K(k,M){const Y=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&Y.__version!==k.version){fe(Y,k,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}const ie={[Ys]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Ks]:n.MIRRORED_REPEAT},$={[It]:n.NEAREST,[Fh]:n.NEAREST_MIPMAP_NEAREST,[xa]:n.NEAREST_MIPMAP_LINEAR,[xt]:n.LINEAR,[Zs]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Z={[Oh]:n.NEVER,[Gh]:n.ALWAYS,[Bh]:n.LESS,[No]:n.LEQUAL,[zh]:n.EQUAL,[Fo]:n.GEQUAL,[Hh]:n.GREATER,[Vh]:n.NOTEQUAL};function ae(k,M){if(M.type===Pn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xt||M.magFilter===Zs||M.magFilter===xa||M.magFilter===Ii||M.minFilter===xt||M.minFilter===Zs||M.minFilter===xa||M.minFilter===Ii)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,ie[M.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,ie[M.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,ie[M.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,$[M.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===It||M.minFilter!==xa&&M.minFilter!==Ii||M.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function W(k,M){let Y=!1;k.__webglInit===void 0&&(k.__webglInit=!0,M.addEventListener("dispose",w));const ee=M.source;let se=m.get(ee);se===void 0&&(se={},m.set(ee,se));const be=N(M);if(be!==k.__cacheKey){se[be]===void 0&&(se[be]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),se[be].usedTimes++;const Se=se[k.__cacheKey];Se!==void 0&&(se[k.__cacheKey].usedTimes--,Se.usedTimes===0&&T(M)),k.__cacheKey=be,k.__webglTexture=se[be].texture}return Y}function ne(k,M,Y){return Math.floor(Math.floor(k/Y)/M)}function q(k,M,Y,ee){const be=k.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,ee,M.data);else{be.sort((Ue,Ae)=>Ue.start-Ae.start);let Se=0;for(let Ue=1;Ue<be.length;Ue++){const Ae=be[Se],Me=be[Ue],Be=Ae.start+Ae.count,Ve=ne(Me.start,M.width,4),qe=ne(Ae.start,M.width,4);Me.start<=Be+1&&Ve===qe&&ne(Me.start+Me.count-1,M.width,4)===Ve?Ae.count=Math.max(Ae.count,Me.start+Me.count-Ae.start):(++Se,be[Se]=Me)}be.length=Se+1;const re=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ue=0,Ae=be.length;Ue<Ae;Ue++){const Me=be[Ue],Be=Math.floor(Me.start/4),Ve=Math.ceil(Me.count/4),qe=Be%M.width,G=Math.floor(Be/M.width),Ee=Ve,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,qe,G,Ee,le,Y,ee,M.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,re),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function ge(k,M,Y){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);const se=W(k,M),be=M.source;t.bindTexture(ee,k.__webglTexture,n.TEXTURE0+Y);const Se=i.get(be);if(be.version!==Se.__version||se===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const le=it.getPrimaries(it.workingColorSpace),Te=M.colorSpace===fi?null:it.getPrimaries(M.colorSpace),Ie=M.colorSpace===fi||le===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let oe=p(M.image,!1,r.maxTextureSize);oe=ft(M,oe);const ye=a.convert(M.format,M.colorSpace),Ue=a.convert(M.type);let Ae=b(M.internalFormat,ye,Ue,M.normalized,M.colorSpace,M.isVideoTexture);ae(ee,M);let Me;const Be=M.mipmaps,Ve=M.isVideoTexture!==!0,qe=Se.__version===void 0||se===!0,G=be.dataReady,Ee=E(M,oe);if(M.isDepthTexture)Ae=A(M.format===Di,M.type),qe&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ye,Ue,null));else if(M.isDataTexture)if(Be.length>0){Ve&&qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Ae,Be[0].width,Be[0].height);for(let le=0,Te=Be.length;le<Te;le++)Me=Be[le],Ve?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me.width,Me.height,ye,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,le,Ae,Me.width,Me.height,0,ye,Ue,Me.data);M.generateMipmaps=!1}else Ve?(qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Ae,oe.width,oe.height),G&&q(M,oe,ye,Ue)):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ye,Ue,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,Be[0].width,Be[0].height,oe.depth);for(let le=0,Te=Be.length;le<Te;le++)if(Me=Be[le],M.format!==vn)if(ye!==null)if(Ve){if(G)if(M.layerUpdates.size>0){const Ie=Rd(Me.width,Me.height,M.format,M.type);for(const he of M.layerUpdates){const ke=Me.data.subarray(he*Ie/Me.data.BYTES_PER_ELEMENT,(he+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,he,Me.width,Me.height,1,ye,ke)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,oe.depth,ye,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ae,Me.width,Me.height,oe.depth,0,Me.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,oe.depth,ye,Ue,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ae,Me.width,Me.height,oe.depth,0,ye,Ue,Me.data)}else{Ve&&qe&&t.texStorage2D(n.TEXTURE_2D,Ee,Ae,Be[0].width,Be[0].height);for(let le=0,Te=Be.length;le<Te;le++)Me=Be[le],M.format!==vn?ye!==null?Ve?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ae,Me.width,Me.height,0,Me.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me.width,Me.height,ye,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,le,Ae,Me.width,Me.height,0,ye,Ue,Me.data)}else if(M.isDataArrayTexture)if(Ve){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,oe.width,oe.height,oe.depth),G)if(M.layerUpdates.size>0){const le=Rd(oe.width,oe.height,M.format,M.type);for(const Te of M.layerUpdates){const Ie=oe.data.subarray(Te*le/oe.data.BYTES_PER_ELEMENT,(Te+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Te,oe.width,oe.height,1,ye,Ue,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ue,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,ye,Ue,oe.data);else if(M.isData3DTexture)Ve?(qe&&t.texStorage3D(n.TEXTURE_3D,Ee,Ae,oe.width,oe.height,oe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ue,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,ye,Ue,oe.data);else if(M.isFramebufferTexture){if(qe)if(Ve)t.texStorage2D(n.TEXTURE_2D,Ee,Ae,oe.width,oe.height);else{let le=oe.width,Te=oe.height;for(let Ie=0;Ie<Ee;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Ae,le,Te,0,ye,Ue,null),le>>=1,Te>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),oe.parentNode!==le){le.appendChild(oe),f.add(M),le.onpaint=Te=>{const Ie=Te.changedElements;for(const he of f)Ie.includes(he.image)&&(he.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const Ie=n.RGBA,he=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ie,he,ke,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ve&&qe){const le=Je(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ae,le.width,le.height)}for(let le=0,Te=Be.length;le<Te;le++)Me=Be[le],Ve?G&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ye,Ue,Me):t.texImage2D(n.TEXTURE_2D,le,Ae,ye,Ue,Me);M.generateMipmaps=!1}else if(Ve){if(qe){const le=Je(oe);t.texStorage2D(n.TEXTURE_2D,Ee,Ae,le.width,le.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ue,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ye,Ue,oe);g(M)&&S(ee),Se.__version=be.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version}function fe(k,M,Y){if(M.image.length!==6)return;const ee=W(k,M),se=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+Y);const be=i.get(se);if(se.version!==be.__version||ee===!0){t.activeTexture(n.TEXTURE0+Y);const Se=it.getPrimaries(it.workingColorSpace),re=M.colorSpace===fi?null:it.getPrimaries(M.colorSpace),oe=M.colorSpace===fi||Se===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!ye&&!Ue?Ae[he]=p(M.image[he],!0,r.maxCubemapSize):Ae[he]=Ue?M.image[he].image:M.image[he],Ae[he]=ft(M,Ae[he]);const Me=Ae[0],Be=a.convert(M.format,M.colorSpace),Ve=a.convert(M.type),qe=b(M.internalFormat,Be,Ve,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,Ee=be.__version===void 0||ee===!0,le=se.dataReady;let Te=E(M,Me);ae(n.TEXTURE_CUBE_MAP,M);let Ie;if(ye){G&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,qe,Me.width,Me.height);for(let he=0;he<6;he++){Ie=Ae[he].mipmaps;for(let ke=0;ke<Ie.length;ke++){const Fe=Ie[ke];M.format!==vn?Be!==null?G?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Fe.width,Fe.height,Be,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,qe,Fe.width,Fe.height,0,Fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Fe.width,Fe.height,Be,Ve,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,qe,Fe.width,Fe.height,0,Be,Ve,Fe.data)}}}else{if(Ie=M.mipmaps,G&&Ee){Ie.length>0&&Te++;const he=Je(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,qe,he.width,he.height)}for(let he=0;he<6;he++)if(Ue){G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,Be,Ve,Ae[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,qe,Ae[he].width,Ae[he].height,0,Be,Ve,Ae[he].data);for(let ke=0;ke<Ie.length;ke++){const gt=Ie[ke].image[he].image;G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,gt.width,gt.height,Be,Ve,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,qe,gt.width,gt.height,0,Be,Ve,gt.data)}}else{G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Be,Ve,Ae[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,qe,Be,Ve,Ae[he]);for(let ke=0;ke<Ie.length;ke++){const Fe=Ie[ke];G?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,Be,Ve,Fe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,qe,Be,Ve,Fe.image[he])}}}g(M)&&S(n.TEXTURE_CUBE_MAP),be.__version=se.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version}function pe(k,M,Y,ee,se,be){const Se=a.convert(Y.format,Y.colorSpace),re=a.convert(Y.type),oe=b(Y.internalFormat,Se,re,Y.normalized,Y.colorSpace),ye=i.get(M),Ue=i.get(Y);if(Ue.__renderTarget=M,!ye.__hasExternalTextures){const Ae=Math.max(1,M.width>>be),Me=Math.max(1,M.height>>be);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,be,oe,Ae,Me,M.depth,0,Se,re,null):t.texImage2D(se,be,oe,Ae,Me,0,Se,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),He(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,se,Ue.__webglTexture,0,Ge(M)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,se,Ue.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(k,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,k),M.depthBuffer){const ee=M.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,be=A(M.stencilBuffer,se),Se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;He(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(M),be,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(M),be,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,be,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,k)}else{const ee=M.textures;for(let se=0;se<ee.length;se++){const be=ee[se],Se=a.convert(be.format,be.colorSpace),re=a.convert(be.type),oe=b(be.internalFormat,Se,re,be.normalized,be.colorSpace);He(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(M),oe,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(M),oe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(k,M,Y){const ee=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=i.get(M.depthTexture);if(se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(se.__webglInit===void 0&&(se.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ae(n.TEXTURE_CUBE_MAP,M.depthTexture);const ye=a.convert(M.depthTexture.format),Ue=a.convert(M.depthTexture.type);let Ae;M.depthTexture.format===Yn?Ae=n.DEPTH_COMPONENT24:M.depthTexture.format===Di&&(Ae=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ae,M.width,M.height,0,ye,Ue,null)}}else B(M.depthTexture,0);const be=se.__webglTexture,Se=Ge(M),re=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,oe=M.depthTexture.format===Di?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yn)He(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,be,0);else if(M.depthTexture.format===Di)He(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(k){const M=i.get(k),Y=k.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==k.depthTexture){const ee=k.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=ee}if(k.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let ee=0;ee<6;ee++)ce(M.__webglFramebuffer[ee],k,ee);else{const ee=k.texture.mipmaps;ee&&ee.length>0?ce(M.__webglFramebuffer[0],k,0):ce(M.__webglFramebuffer,k,0)}else if(Y){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=n.createRenderbuffer(),_e(M.__webglDepthbuffer[ee],k,!1);else{const se=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,be)}}else{const ee=k.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),_e(M.__webglDepthbuffer,k,!1);else{const se=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(k,M,Y){const ee=i.get(k);M!==void 0&&pe(ee.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ve(k)}function Re(k){const M=k.texture,Y=i.get(k),ee=i.get(M);k.addEventListener("dispose",_);const se=k.textures,be=k.isWebGLCubeRenderTarget===!0,Se=se.length>1;if(Se||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,s.memory.textures++),be){Y.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[re]=[];for(let oe=0;oe<M.mipmaps.length;oe++)Y.__webglFramebuffer[re][oe]=n.createFramebuffer()}else Y.__webglFramebuffer[re]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)Y.__webglFramebuffer[re]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Se)for(let re=0,oe=se.length;re<oe;re++){const ye=i.get(se[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),s.memory.textures++)}if(k.samples>0&&He(k)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let re=0;re<se.length;re++){const oe=se[re];Y.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[re]);const ye=a.convert(oe.format,oe.colorSpace),Ue=a.convert(oe.type),Ae=b(oe.internalFormat,ye,Ue,oe.normalized,oe.colorSpace,k.isXRRenderTarget===!0),Me=Ge(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Ae,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,Y.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(Y.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ae(n.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)pe(Y.__webglFramebuffer[re][oe],k,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else pe(Y.__webglFramebuffer[re],k,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(M)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,oe=se.length;re<oe;re++){const ye=se[re],Ue=i.get(ye);let Ae=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ae=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Ue.__webglTexture),ae(Ae,ye),pe(Y.__webglFramebuffer,k,ye,n.COLOR_ATTACHMENT0+re,Ae,0),g(ye)&&S(Ae)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(re=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,ee.__webglTexture),ae(re,M),M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)pe(Y.__webglFramebuffer[oe],k,M,n.COLOR_ATTACHMENT0,re,oe);else pe(Y.__webglFramebuffer,k,M,n.COLOR_ATTACHMENT0,re,0);g(M)&&S(re),t.unbindTexture()}k.depthBuffer&&ve(k)}function Oe(k){const M=k.textures;for(let Y=0,ee=M.length;Y<ee;Y++){const se=M[Y];if(g(se)){const be=y(k),Se=i.get(se).__webglTexture;t.bindTexture(be,Se),S(be),t.unbindTexture()}}}const Ye=[],ze=[];function at(k){if(k.samples>0){if(He(k)===!1){const M=k.textures,Y=k.width,ee=k.height;let se=n.COLOR_BUFFER_BIT;const be=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(k),re=M.length>1;if(re)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const oe=k.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const Ue=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,se,n.NEAREST),o===!0&&(Ye.length=0,ze.length=0,Ye.push(n.COLOR_ATTACHMENT0+ye),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ye.push(be),ze.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const Ue=i.get(M[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&o){const M=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ge(k){return Math.min(r.maxSamples,k.samples)}function He(k){const M=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function V(k){const M=s.render.frame;u.get(k)!==M&&(u.set(k,M),k.update())}function ft(k,M){const Y=k.colorSpace,ee=k.format,se=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Y!==wa&&Y!==fi&&(it.getTransfer(Y)===ut?(ee!==vn||se!==cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",Y)),M}function Je(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=x,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Le,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jv(n,e){function t(i,r=fi){let a;const s=it.getTransfer(r);if(i===cn)return n.UNSIGNED_BYTE;if(i===Qs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===js)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===Js)return n.INT;if(i===Rn)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===Oc)return n.ALPHA;if(i===Bc)return n.RGB;if(i===vn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===eo)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===to)return n.RG_INTEGER;if(i===no)return n.RGBA_INTEGER;if(i===ya||i===Ma||i===Sa||i===Ea)if(s===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===io||i===ro||i===ao||i===so)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ao)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===so)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===lo||i===co||i===uo||i===fo||i===Aa||i===ho)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===oo||i===lo)return s===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===co)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===uo)return a.COMPRESSED_R11_EAC;if(i===fo)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Aa)return a.COMPRESSED_RG11_EAC;if(i===ho)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===po||i===mo||i===go||i===vo||i===bo||i===_o||i===xo||i===yo||i===Mo||i===So||i===Eo||i===Ao||i===To||i===wo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===po)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===So)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ao)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Ro||i===Po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Co)return s===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===Io||i===Ta||i===Do)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Lo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Io)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
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

}`;class nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sn({vertexShader:eb,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ib extends Fi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,l="local-floor",o=1,c=null,u=null,f=null,d=null,m=null,h=null;const v=typeof XRWebGLBinding<"u",p=new nb,g={},S=t.getContextAttributes();let y=null,b=null;const A=[],E=[],w=new je;let _=null;const C=new fn;C.viewport=new _t;const T=new fn;T.viewport=new _t;const L=[C,T],R=new qp;let U=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=A[W];return ne===void 0&&(ne=new Wo,A[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=A[W];return ne===void 0&&(ne=new Wo,A[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=A[W];return ne===void 0&&(ne=new Wo,A[W]=ne),ne.getHandSpace()};function x(W){const ne=E.indexOf(W.inputSource);if(ne===-1)return;const q=A[ne];q!==void 0&&(q.update(W.inputSource,W.frame,c||s),q.dispatchEvent({type:W.type,data:W.inputSource}))}function D(){r.removeEventListener("select",x),r.removeEventListener("selectstart",x),r.removeEventListener("selectend",x),r.removeEventListener("squeeze",x),r.removeEventListener("squeezestart",x),r.removeEventListener("squeezeend",x),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let W=0;W<A.length;W++){const ne=E[W];ne!==null&&(E[W]=null,A[W].disconnect(ne))}U=null,I=null,p.reset();for(const W in g)delete g[W];e.setRenderTarget(y),m=null,d=null,f=null,r=null,b=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){l=W,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",x),r.addEventListener("selectstart",x),r.addEventListener("selectend",x),r.addEventListener("squeeze",x),r.addEventListener("squeezestart",x),r.addEventListener("squeezeend",x),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ge=null,fe=null;S.depth&&(fe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=S.stencil?Di:Yn,ge=S.stencil?Hr:Rn);const pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};f=this.getBinding(),d=f.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new In(d.textureWidth,d.textureHeight,{format:vn,type:cn,depthTexture:new Sr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const q={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new In(m.framebufferWidth,m.framebufferHeight,{format:vn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await r.requestReferenceSpace(l),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(W){for(let ne=0;ne<W.removed.length;ne++){const q=W.removed[ne],ge=E.indexOf(q);ge>=0&&(E[ge]=null,A[ge].disconnect(q))}for(let ne=0;ne<W.added.length;ne++){const q=W.added[ne];let ge=E.indexOf(q);if(ge===-1){for(let pe=0;pe<A.length;pe++)if(pe>=E.length){E.push(q),ge=pe;break}else if(E[pe]===null){E[pe]=q,ge=pe;break}if(ge===-1)break}const fe=A[ge];fe&&fe.connect(q)}}const B=new J,F=new J;function z(W,ne,q){B.setFromMatrixPosition(ne.matrixWorld),F.setFromMatrixPosition(q.matrixWorld);const ge=B.distanceTo(F),fe=ne.projectionMatrix.elements,pe=q.projectionMatrix.elements,_e=fe[14]/(fe[10]-1),ce=fe[14]/(fe[10]+1),ve=(fe[9]+1)/fe[5],Le=(fe[9]-1)/fe[5],Re=(fe[8]-1)/fe[0],Oe=(pe[8]+1)/pe[0],Ye=_e*Re,ze=_e*Oe,at=ge/(-Re+Oe),Ge=at*-Re;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ge),W.translateZ(at),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),fe[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const He=_e+at,V=ce+at,ft=Ye-Ge,Je=ze+(ge-Ge),k=ve*ce/V*He,M=Le*ce/V*He;W.projectionMatrix.makePerspective(ft,Je,k,M,He,V),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function K(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,q=W.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(q=p.depthFar)),R.near=T.near=C.near=ne,R.far=T.far=C.far=q,(U!==R.near||I!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,I=R.far),R.layers.mask=W.layers.mask|6,C.layers.mask=R.layers.mask&-5,T.layers.mask=R.layers.mask&-3;const ge=W.parent,fe=R.cameras;K(R,ge);for(let pe=0;pe<fe.length;pe++)K(fe[pe],ge);fe.length===2?z(R,C,T):R.projectionMatrix.copy(C.projectionMatrix),ie(W,R,ge)};function ie(W,ne,q){q===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(q.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return o},this.setFoveation=function(W){o=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(R)},this.getCameraTexture=function(W){return g[W]};let $=null;function Z(W,ne){if(u=ne.getViewerPose(c||s),h=ne,u!==null){const q=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ge=!1;q.length!==R.cameras.length&&(R.cameras.length=0,ge=!0);for(let ce=0;ce<q.length;ce++){const ve=q[ce];let Le=null;if(m!==null)Le=m.getViewport(ve);else{const Oe=f.getViewSubImage(d,ve);Le=Oe.viewport,ce===0&&(e.setRenderTargetTextures(b,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(b))}let Re=L[ce];Re===void 0&&(Re=new fn,Re.layers.enable(ce),Re.viewport=new _t,L[ce]=Re),Re.matrix.fromArray(ve.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ve.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),ce===0&&(R.matrix.copy(Re.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ge===!0&&R.cameras.push(Re)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const ce=f.getDepthInformation(q[0]);ce&&ce.isValid&&ce.texture&&p.init(ce,r.renderState)}if(fe&&fe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let ce=0;ce<q.length;ce++){const ve=q[ce].camera;if(ve){let Le=g[ve];Le||(Le=new vd,g[ve]=Le);const Re=f.getCameraImage(ve);Le.sourceTexture=Re}}}}for(let q=0;q<A.length;q++){const ge=E[q],fe=A[q];ge!==null&&fe!==void 0&&fe.update(ge,ne,c||s)}$&&$(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),h=null}const ae=new Pd;ae.setAnimationLoop(Z),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}const rb=new bt,su=new $e;su.set(-1,0,0,0,1,0,0,0,1);function ab(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,_d(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,S,y,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(p,g):g.isMeshLambertMaterial?(a(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(p,g),f(p,g)):g.isMeshPhongMaterial?(a(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(p,g),d(p,g),g.isMeshPhysicalMaterial&&m(p,g,b)):g.isMeshMatcapMaterial?(a(p,g),h(p,g)):g.isMeshDepthMaterial?a(p,g):g.isMeshDistanceMaterial?(a(p,g),v(p,g)):g.isMeshNormalMaterial?a(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&l(p,g)):g.isPointsMaterial?o(p,g,S,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Xt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Xt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=e.get(g),y=S.envMap,b=S.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(su),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function l(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,S,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function m(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function h(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sb(n,e,t,i){let r={},a={},s=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(b,A){const E=A.program;i.uniformBlockBinding(b,E)}function c(b,A){let E=r[b.id];E===void 0&&(p(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",S));const w=A.program;i.updateUBOMapping(b,w);const _=e.render.frame;a[b.id]!==_&&(d(b),a[b.id]=_)}function u(b){const A=f();b.__bindingPointIndex=A;const E=n.createBuffer(),w=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function f(){for(let b=0;b<l;b++)if(s.indexOf(b)===-1)return s.push(b),b;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const A=r[b.id],E=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let _=0,C=E.length;_<C;_++){const T=E[_];if(Array.isArray(T))for(let L=0,R=T.length;L<R;L++)m(T[L],_,L,w);else m(T,_,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,A,E,w){if(v(b,A,E,w)===!0){const _=b.__offset,C=b.value;if(Array.isArray(C)){let T=0;for(let L=0;L<C.length;L++){const R=C[L],U=g(R);h(R,b.__data,T),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(T+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(C,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function h(b,A,E){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,E)}function v(b,A,E,w){const _=b.value,C=A+"_"+E;if(w[C]===void 0)return typeof _=="number"||typeof _=="boolean"?w[C]=_:ArrayBuffer.isView(_)?w[C]=_.slice():w[C]=_.clone(),!0;{const T=w[C];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return w[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function p(b){const A=b.uniforms;let E=0;const w=16;for(let C=0,T=A.length;C<T;C++){const L=Array.isArray(A[C])?A[C]:[A[C]];for(let R=0,U=L.length;R<U;R++){const I=L[R],x=Array.isArray(I.value)?I.value:[I.value];for(let D=0,N=x.length;D<N;D++){const B=x[D],F=g(B),z=E%w,K=z%F.boundary,ie=z+K;E+=K,ie!==0&&w-ie<F.storage&&(E+=w-ie),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=F.storage}}}const _=E%w;return _>0&&(E+=w-_),b.__size=E,b.__cache={},this}function g(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):We("WebGLRenderer: Unsupported uniform value type.",b),A}function S(b){const A=b.target;A.removeEventListener("dispose",S);const E=s.indexOf(A.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function y(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:o,update:c,dispose:y}}const ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function lb(){return Un===null&&(Un=new Rp(ob,16,16,Ni,qn),Un.name="DFG_LUT",Un.minFilter=xt,Un.magFilter=xt,Un.wrapS=$n,Un.wrapT=$n,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class cb{constructor(e={}){const{canvas:t=Xh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=cn}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const v=m,p=new Set([no,to,eo]),g=new Set([cn,Rn,zr,Hr,Qs,js]),S=new Uint32Array(4),y=new Int32Array(4),b=new J;let A=null,E=null;const w=[],_=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1,R=null,U=null,I=null,x=null;this._outputColorSpace=Rt;let D=0,N=0,B=null,F=-1,z=null;const K=new _t,ie=new _t;let $=null;const Z=new st(0);let ae=0,W=t.width,ne=t.height,q=1,ge=null,fe=null;const pe=new _t(0,0,W,ne),_e=new _t(0,0,W,ne);let ce=!1;const ve=new pd;let Le=!1,Re=!1;const Oe=new bt,Ye=new J,ze=new _t,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function He(){return B===null?q:1}let V=i;function ft(P,X){return t.getContext(P,X)}try{const P={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Us}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),V===null){const X="webgl2";if(V=ft(X,P),V===null)throw ft(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(P){throw rt("WebGLRenderer: "+P.message),P}let Je,k,M,Y,ee,se,be,Se,re,oe,ye,Ue,Ae,Me,Be,Ve,qe,G,Ee,le,Te,Ie,he;function ke(){Je=new l0(V),Je.init(),Te=new jv(V,Je),k=new e0(V,Je,e,Te),M=new Jv(V,Je),k.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),U=V.createFramebuffer(),I=V.createFramebuffer(),x=V.createFramebuffer(),Y=new u0(V),ee=new kv,se=new Qv(V,Je,M,ee,k,Te,Y),be=new o0(T),Se=new Kp(V),Ie=new Qg(V,Se),re=new c0(V,Se,Y,Ie),oe=new h0(V,re,Se,Ie,Y),G=new f0(V,k,se),Be=new t0(ee),ye=new Uv(T,be,Je,k,Ie,Be),Ue=new ab(T,ee),Ae=new Bv,Me=new Xv(Je),qe=new Jg(T,be,M,oe,h,o),Ve=new Zv(T,oe,k),he=new sb(V,Y,k,M),Ee=new jg(V,Je,Y),le=new d0(V,Je,Y),Y.programs=ye.programs,T.capabilities=k,T.extensions=Je,T.properties=ee,T.renderLists=Ae,T.shadowMap=Ve,T.state=M,T.info=Y}ke(),v!==cn&&(C=new m0(v,t.width,t.height,l,r,a));const Fe=new ib(T,V);this.xr=Fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=Je.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Je.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(W,ne,!1))},this.getSize=function(P){return P.set(W,ne)},this.setSize=function(P,X,te=!0){if(Fe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,ne=X,t.width=Math.floor(P*q),t.height=Math.floor(X*q),te===!0&&(t.style.width=P+"px",t.style.height=X+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(W*q,ne*q).floor()},this.setDrawingBufferSize=function(P,X,te){W=P,ne=X,q=te,t.width=Math.floor(P*te),t.height=Math.floor(X*te),this.setViewport(0,0,P,X)},this.setEffects=function(P){if(v===cn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let X=0;X<P.length;X++)if(P[X].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(K)},this.getViewport=function(P){return P.copy(pe)},this.setViewport=function(P,X,te,Q){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,X,te,Q),M.viewport(K.copy(pe).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(_e)},this.setScissor=function(P,X,te,Q){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,X,te,Q),M.scissor(ie.copy(_e).multiplyScalar(q).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(P){M.setScissorTest(ce=P)},this.setOpaqueSort=function(P){ge=P},this.setTransparentSort=function(P){fe=P},this.getClearColor=function(P){return P.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,te=!0){let Q=0;if(P){let j=!1;if(B!==null){const De=B.texture.format;j=p.has(De)}if(j){const De=B.texture.type,O=g.has(De),H=qe.getClearColor(),ue=qe.getClearAlpha(),me=H.r,xe=H.g,Ne=H.b;O?(S[0]=me,S[1]=xe,S[2]=Ne,S[3]=ue,V.clearBufferuiv(V.COLOR,0,S)):(y[0]=me,y[1]=xe,y[2]=Ne,y[3]=ue,V.clearBufferiv(V.COLOR,0,y))}else Q|=V.COLOR_BUFFER_BIT}X&&(Q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),R=P},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),qe.dispose(),Ae.dispose(),Me.dispose(),ee.dispose(),be.dispose(),oe.dispose(),Ie.dispose(),he.dispose(),ye.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ls),Fe.removeEventListener("sessionend",tr),li.stop()};function gt(P){P.preventDefault(),$c("WebGLRenderer: Context Lost."),L=!0}function ht(){$c("WebGLRenderer: Context Restored."),L=!1;const P=Y.autoReset,X=Ve.enabled,te=Ve.autoUpdate,Q=Ve.needsUpdate,j=Ve.type;ke(),Y.autoReset=P,Ve.enabled=X,Ve.autoUpdate=te,Ve.needsUpdate=Q,Ve.type=j}function Wt(P){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function en(P){const X=P.target;X.removeEventListener("dispose",en),Gn(X)}function Gn(P){xc(P),ee.remove(P)}function xc(P){const X=ee.get(P).programs;X!==void 0&&(X.forEach(function(te){ye.releaseProgram(te)}),P.isShaderMaterial&&ye.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,te,Q,j,De){X===null&&(X=at);const O=j.isMesh&&j.matrixWorld.determinantAffine()<0,H=Ci(P,X,te,Q,j);M.setMaterial(Q,O);let ue=te.index,me=1;if(Q.wireframe===!0){if(ue=re.getWireframeAttribute(te),ue===void 0)return;me=2}const xe=te.drawRange,Ne=te.attributes.position;let we=xe.start*me,Qe=(xe.start+xe.count)*me;De!==null&&(we=Math.max(we,De.start*me),Qe=Math.min(Qe,(De.start+De.count)*me)),ue!==null?(we=Math.max(we,0),Qe=Math.min(Qe,ue.count)):Ne!=null&&(we=Math.max(we,0),Qe=Math.min(Qe,Ne.count));const Ke=Qe-we;if(Ke<0||Ke===1/0)return;Ie.setup(j,Q,H,te,ue);let tt,lt=Ee;if(ue!==null&&(tt=Se.get(ue),lt=le,lt.setIndex(tt)),j.isMesh)Q.wireframe===!0?(M.setLineWidth(Q.wireframeLinewidth*He()),lt.setMode(V.LINES)):lt.setMode(V.TRIANGLES);else if(j.isLine){let At=Q.linewidth;At===void 0&&(At=1),M.setLineWidth(At*He()),j.isLineSegments?lt.setMode(V.LINES):j.isLineLoop?lt.setMode(V.LINE_LOOP):lt.setMode(V.LINE_STRIP)}else j.isPoints?lt.setMode(V.POINTS):j.isSprite&&lt.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const At=j._multiDrawStarts,Ce=j._multiDrawCounts,Lt=j._multiDrawCount,nt=ue?Se.get(ue).bytesPerElement:1,zt=ee.get(Q).currentProgram.getUniforms();for(let tn=0;tn<Lt;tn++)zt.setValue(V,"_gl_DrawID",tn),lt.render(At[tn]/nt,Ce[tn])}else if(j.isInstancedMesh)lt.renderInstances(we,Ke,j.count);else if(te.isInstancedBufferGeometry){const At=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ce=Math.min(te.instanceCount,At);lt.renderInstances(we,Ke,Ce)}else lt.render(we,Ke)};function Ps(P,X,te){P.transparent===!0&&P.side===gn&&P.forceSinglePass===!1?(P.side=Xt,P.needsUpdate=!0,Wn(P,X,te),P.side=ui,P.needsUpdate=!0,Wn(P,X,te),P.side=gn):Wn(P,X,te)}this.compile=function(P,X,te=null){te===null&&(te=P),E=Me.get(te),E.init(X),_.push(E),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),P!==te&&P.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights();const Q=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const De=j.material;if(De)if(Array.isArray(De))for(let O=0;O<De.length;O++){const H=De[O];Ps(H,te,j),Q.add(H)}else Ps(De,te,j),Q.add(De)}),E=_.pop(),Q},this.compileAsync=function(P,X,te=null){const Q=this.compile(P,X,te);return new Promise(j=>{function De(){if(Q.forEach(function(O){ee.get(O).currentProgram.isReady()&&Q.delete(O)}),Q.size===0){j(P);return}setTimeout(De,10)}Je.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ti=null;function oi(P){Ti&&Ti(P)}function Ls(){li.stop()}function tr(){li.start()}const li=new Pd;li.setAnimationLoop(oi),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(P){Ti=P,Fe.setAnimationLoop(P),P===null?li.stop():li.start()},Fe.addEventListener("sessionstart",Ls),Fe.addEventListener("sessionend",tr),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R!==null&&R.renderStart(P,X);const te=Fe.enabled===!0&&Fe.isPresenting===!0,Q=C!==null&&(B===null||te)&&C.begin(T,B);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(X),X=Fe.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,X,B),E=Me.get(P,_.length),E.init(X),E.state.textureUnits=se.getTextureUnits(),_.push(E),Oe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ve.setFromProjectionMatrix(Oe,Ln,X.reversedDepth),Re=this.localClippingEnabled,Le=Be.init(this.clippingPlanes,Re),A=Ae.get(P,w.length),A.init(),w.push(A),Fe.enabled===!0&&Fe.isPresenting===!0){const O=T.xr.getDepthSensingMesh();O!==null&&ma(O,X,-1/0,T.sortObjects)}ma(P,X,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(ge,fe,X.reversedDepth),Ge=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ge&&qe.addToRenderList(A,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&Be.beginShadows();const j=E.state.shadowsArray;if(Ve.render(j,P,X),Le===!0&&Be.endShadows(),(Q&&C.hasRenderPass())===!1){const O=A.opaque,H=A.transmissive;if(E.setupLights(),X.isArrayCamera){const ue=X.cameras;if(H.length>0)for(let me=0,xe=ue.length;me<xe;me++){const Ne=ue[me];kr(O,H,P,Ne)}Ge&&qe.render(P);for(let me=0,xe=ue.length;me<xe;me++){const Ne=ue[me];ci(A,P,Ne,Ne.viewport)}}else H.length>0&&kr(O,H,P,X),Ge&&qe.render(P),ci(A,P,X)}B!==null&&N===0&&(se.updateMultisampleRenderTarget(B),se.updateRenderTargetMipmap(B)),Q&&C.end(T),P.isScene===!0&&P.onAfterRender(T,P,X),Ie.resetDefaultState(),F=-1,z=null,_.pop(),_.length>0?(E=_[_.length-1],se.setTextureUnits(E.state.textureUnits),Le===!0&&Be.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,R!==null&&R.renderEnd()};function ma(P,X,te,Q){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLightProbeGrid)E.pushLightProbeGrid(P);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ve.intersectsSprite(P)){Q&&ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Oe);const O=oe.update(P),H=P.material;H.visible&&A.push(P,O,H,te,ze.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ve.intersectsObject(P))){const O=oe.update(P),H=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ze.copy(P.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),ze.copy(O.boundingSphere.center)),ze.applyMatrix4(P.matrixWorld).applyMatrix4(Oe)),Array.isArray(H)){const ue=O.groups;for(let me=0,xe=ue.length;me<xe;me++){const Ne=ue[me],we=H[Ne.materialIndex];we&&we.visible&&A.push(P,O,we,te,ze.z,Ne)}}else H.visible&&A.push(P,O,H,te,ze.z,null)}}const De=P.children;for(let O=0,H=De.length;O<H;O++)ma(De[O],X,te,Q)}function ci(P,X,te,Q){const{opaque:j,transmissive:De,transparent:O}=P;E.setupLightsView(te),Le===!0&&Be.setGlobalState(T.clippingPlanes,te),Q&&M.viewport(K.copy(Q)),j.length>0&&wi(j,X,te),De.length>0&&wi(De,X,te),O.length>0&&wi(O,X,te),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function kr(P,X,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){const we=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new In(1,1,{generateMipmaps:!0,type:we?qn:cn,minFilter:Ii,samples:Math.max(4,k.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const De=E.state.transmissionRenderTarget[Q.id],O=Q.viewport||K;De.setSize(O.z*T.transmissionResolutionScale,O.w*T.transmissionResolutionScale);const H=T.getRenderTarget(),ue=T.getActiveCubeFace(),me=T.getActiveMipmapLevel();T.setRenderTarget(De),T.getClearColor(Z),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Ge&&qe.render(te);const xe=T.toneMapping;T.toneMapping=Cn;const Ne=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),Le===!0&&Be.setGlobalState(T.clippingPlanes,Q),wi(P,te,Q),se.updateMultisampleRenderTarget(De),se.updateRenderTargetMipmap(De),Je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Qe=0,Ke=X.length;Qe<Ke;Qe++){const tt=X[Qe],{object:lt,geometry:At,material:Ce,group:Lt}=tt;if(Ce.side===gn&&lt.layers.test(Q.layers)){const nt=Ce.side;Ce.side=Xt,Ce.needsUpdate=!0,nr(lt,te,Q,At,Ce,Lt),Ce.side=nt,Ce.needsUpdate=!0,we=!0}}we===!0&&(se.updateMultisampleRenderTarget(De),se.updateRenderTargetMipmap(De))}T.setRenderTarget(H,ue,me),T.setClearColor(Z,ae),Ne!==void 0&&(Q.viewport=Ne),T.toneMapping=xe}function wi(P,X,te){const Q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,De=P.length;j<De;j++){const O=P[j],{object:H,geometry:ue,group:me}=O;let xe=O.material;xe.allowOverride===!0&&Q!==null&&(xe=Q),H.layers.test(te.layers)&&nr(H,X,te,ue,xe,me)}}function nr(P,X,te,Q,j,De){P.onBeforeRender(T,X,te,Q,j,De),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(T,X,te,Q,P,De),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=Xt,j.needsUpdate=!0,T.renderBufferDirect(te,X,Q,j,P,De),j.side=ui,j.needsUpdate=!0,T.renderBufferDirect(te,X,Q,j,P,De),j.side=gn):T.renderBufferDirect(te,X,Q,j,P,De),P.onAfterRender(T,X,te,Q,j,De)}function Wn(P,X,te){X.isScene!==!0&&(X=at);const Q=ee.get(P),j=E.state.lights,De=E.state.shadowsArray,O=j.state.version,H=ye.getParameters(P,j.state,De,X,te,E.state.lightProbeGridArray),ue=ye.getProgramCacheKey(H);let me=Q.programs;Q.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?X.environment:null,Q.fog=X.fog;const xe=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Q.envMap=be.get(P.envMap||Q.environment,xe),Q.envMapRotation=Q.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,me===void 0&&(P.addEventListener("dispose",en),me=new Map,Q.programs=me);let Ne=me.get(ue);if(Ne!==void 0){if(Q.currentProgram===Ne&&Q.lightsStateVersion===O)return va(P,H),Ne}else H.uniforms=ye.getUniforms(P),R!==null&&P.isNodeMaterial&&R.build(P,te,H),P.onBeforeCompile(H,T),Ne=ye.acquireProgram(H,ue),me.set(ue,Ne),Q.uniforms=H.uniforms;const we=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(we.clippingPlanes=Be.uniform),va(P,H),Q.needsLights=Ns(P),Q.lightsStateVersion=O,Q.needsLights&&(we.ambientLightColor.value=j.state.ambient,we.lightProbe.value=j.state.probe,we.directionalLights.value=j.state.directional,we.directionalLightShadows.value=j.state.directionalShadow,we.spotLights.value=j.state.spot,we.spotLightShadows.value=j.state.spotShadow,we.rectAreaLights.value=j.state.rectArea,we.ltc_1.value=j.state.rectAreaLTC1,we.ltc_2.value=j.state.rectAreaLTC2,we.pointLights.value=j.state.point,we.pointLightShadows.value=j.state.pointShadow,we.hemisphereLights.value=j.state.hemi,we.directionalShadowMatrix.value=j.state.directionalShadowMatrix,we.spotLightMatrix.value=j.state.spotLightMatrix,we.spotLightMap.value=j.state.spotLightMap,we.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=E.state.lightProbeGridArray.length>0,Q.currentProgram=Ne,Q.uniformsList=null,Ne}function ga(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=es.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function va(P,X){const te=ee.get(P);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Is(P,X){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(X.matrixWorld);for(let te=0,Q=P.length;te<Q;te++){const j=P[te];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function Ci(P,X,te,Q,j){X.isScene!==!0&&(X=at),se.resetTextureUnits();const De=X.fog,O=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?X.environment:null,H=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:it.workingColorSpace,ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,me=be.get(Q.envMap||O,ue),xe=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ne=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),we=!!te.morphAttributes.position,Qe=!!te.morphAttributes.normal,Ke=!!te.morphAttributes.color;let tt=Cn;Q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tt=T.toneMapping);const lt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,At=lt!==void 0?lt.length:0,Ce=ee.get(Q),Lt=E.state.lights;if(Le===!0&&(Re===!0||P!==z)){const dt=P===z&&Q.id===F;Be.setState(Q,P,dt)}let nt=!1;Q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Lt.state.version||Ce.outputColorSpace!==H||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==me||Q.fog===!0&&Ce.fog!==De||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Be.numPlanes||Ce.numIntersection!==Be.numIntersection)||Ce.vertexAlphas!==xe||Ce.vertexTangents!==Ne||Ce.morphTargets!==we||Ce.morphNormals!==Qe||Ce.morphColors!==Ke||Ce.toneMapping!==tt||Ce.morphTargetsCount!==At||!!Ce.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ce.__version=Q.version);let zt=Ce.currentProgram;nt===!0&&(zt=Wn(Q,X,j),R&&Q.isNodeMaterial&&R.onUpdateProgram(Q,zt,Ce));let tn=!1,ln=!1,di=!1;const ct=zt.getUniforms(),vt=Ce.uniforms;if(M.useProgram(zt.program)&&(tn=!0,ln=!0,di=!0),Q.id!==F&&(F=Q.id,ln=!0),Ce.needsLights){const dt=Is(E.state.lightProbeGridArray,j);Ce.lightProbeGrid!==dt&&(Ce.lightProbeGrid=dt,ln=!0)}if(tn||z!==P){M.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ct.setValue(V,"projectionMatrix",P.projectionMatrix),ct.setValue(V,"viewMatrix",P.matrixWorldInverse);const Ri=ct.map.cameraPosition;Ri!==void 0&&Ri.setValue(V,Ye.setFromMatrixPosition(P.matrixWorld)),k.logarithmicDepthBuffer&&ct.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ct.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),z!==P&&(z=P,ln=!0,di=!0)}if(Ce.needsLights&&(Lt.state.directionalShadowMap.length>0&&ct.setValue(V,"directionalShadowMap",Lt.state.directionalShadowMap,se),Lt.state.spotShadowMap.length>0&&ct.setValue(V,"spotShadowMap",Lt.state.spotShadowMap,se),Lt.state.pointShadowMap.length>0&&ct.setValue(V,"pointShadowMap",Lt.state.pointShadowMap,se)),j.isSkinnedMesh){ct.setOptional(V,j,"bindMatrix"),ct.setOptional(V,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(V,"boneTexture",dt.boneTexture,se))}j.isBatchedMesh&&(ct.setOptional(V,j,"batchingTexture"),ct.setValue(V,"batchingTexture",j._matricesTexture,se),ct.setOptional(V,j,"batchingIdTexture"),ct.setValue(V,"batchingIdTexture",j._indirectTexture,se),ct.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&ct.setValue(V,"batchingColorTexture",j._colorsTexture,se));const Ht=te.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&G.update(j,te,zt),(ln||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,ct.setValue(V,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&X.environment!==null&&(vt.envMapIntensity.value=X.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=lb()),ln){if(ct.setValue(V,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&Ds(vt,di),De&&Q.fog===!0&&Ue.refreshFogUniforms(vt,De),Ue.refreshMaterialUniforms(vt,Q,q,ne,E.state.transmissionRenderTarget[P.id]),Ce.needsLights&&Ce.lightProbeGrid){const dt=Ce.lightProbeGrid;vt.probesSH.value=dt.texture,vt.probesMin.value.copy(dt.boundingBox.min),vt.probesMax.value.copy(dt.boundingBox.max),vt.probesResolution.value.copy(dt.resolution)}es.upload(V,ga(Ce),vt,se)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(es.upload(V,ga(Ce),vt,se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ct.setValue(V,"center",j.center),ct.setValue(V,"modelViewMatrix",j.modelViewMatrix),ct.setValue(V,"normalMatrix",j.normalMatrix),ct.setValue(V,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const dt=Q.uniformsGroups;for(let Ri=0,Or=dt.length;Ri<Or;Ri++){const uh=dt[Ri];he.update(uh,zt),he.bind(uh,zt)}}return zt}function Ds(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Ns(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,X,te){const Q=ee.get(P);Q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ee.get(P.texture).__webglTexture=X,ee.get(P.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){const te=ee.get(P);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,te=0){B=P,D=X,N=te;let Q=null,j=!1,De=!1;if(P){const H=ee.get(P);if(H.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(V.FRAMEBUFFER,H.__webglFramebuffer),K.copy(P.viewport),ie.copy(P.scissor),$=P.scissorTest,M.viewport(K),M.scissor(ie),M.setScissorTest($),F=-1;return}else if(H.__webglFramebuffer===void 0)se.setupRenderTarget(P);else if(H.__hasExternalTextures)se.rebindTextures(P,ee.get(P.texture).__webglTexture,ee.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const xe=P.depthTexture;if(H.__boundDepthTexture!==xe){if(xe!==null&&ee.has(xe)&&(P.width!==xe.image.width||P.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(P)}}const ue=P.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(De=!0);const me=ee.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(me[X])?Q=me[X][te]:Q=me[X],j=!0):P.samples>0&&se.useMultisampledRTT(P)===!1?Q=ee.get(P).__webglMultisampledFramebuffer:Array.isArray(me)?Q=me[te]:Q=me,K.copy(P.viewport),ie.copy(P.scissor),$=P.scissorTest}else K.copy(pe).multiplyScalar(q).floor(),ie.copy(_e).multiplyScalar(q).floor(),$=ce;if(te!==0&&(Q=U),M.bindFramebuffer(V.FRAMEBUFFER,Q)&&M.drawBuffers(P,Q),M.viewport(K),M.scissor(ie),M.setScissorTest($),j){const H=ee.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,H.__webglTexture,te)}else if(De){const H=X;for(let ue=0;ue<P.textures.length;ue++){const me=ee.get(P.textures[ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ue,me.__webglTexture,te,H)}}else if(P!==null&&te!==0){const H=ee.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,H.__webglTexture,te)}F=-1},this.readRenderTargetPixels=function(P,X,te,Q,j,De,O,H=0){if(!(P&&P.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ee.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&O!==void 0&&(ue=ue[O]),ue){M.bindFramebuffer(V.FRAMEBUFFER,ue);try{const me=P.textures[H],xe=me.format,Ne=me.type;if(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+H),!k.textureFormatReadable(xe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Ne)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-Q&&te>=0&&te<=P.height-j&&V.readPixels(X,te,Q,j,Te.convert(xe),Te.convert(Ne),De)}finally{const me=B!==null?ee.get(B).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(P,X,te,Q,j,De,O,H=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ee.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&O!==void 0&&(ue=ue[O]),ue)if(X>=0&&X<=P.width-Q&&te>=0&&te<=P.height-j){M.bindFramebuffer(V.FRAMEBUFFER,ue);const me=P.textures[H],xe=me.format,Ne=me.type;if(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+H),!k.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,we),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),V.readPixels(X,te,Q,j,Te.convert(xe),Te.convert(Ne),0);const Qe=B!==null?ee.get(B).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Qe);const Ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await $h(V,Ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,we),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer(we),V.deleteSync(Ke),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,te=0){const Q=Math.pow(2,-te),j=Math.floor(P.image.width*Q),De=Math.floor(P.image.height*Q),O=X!==null?X.x:0,H=X!==null?X.y:0;se.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,O,H,j,De),M.unbindTexture()},this.copyTextureToTexture=function(P,X,te=null,Q=null,j=0,De=0){let O,H,ue,me,xe,Ne,we,Qe,Ke;const tt=P.isCompressedTexture?P.mipmaps[De]:P.image;if(te!==null)O=te.max.x-te.min.x,H=te.max.y-te.min.y,ue=te.isBox3?te.max.z-te.min.z:1,me=te.min.x,xe=te.min.y,Ne=te.isBox3?te.min.z:0;else{const vt=Math.pow(2,-j);O=Math.floor(tt.width*vt),H=Math.floor(tt.height*vt),P.isDataArrayTexture?ue=tt.depth:P.isData3DTexture?ue=Math.floor(tt.depth*vt):ue=1,me=0,xe=0,Ne=0}Q!==null?(we=Q.x,Qe=Q.y,Ke=Q.z):(we=0,Qe=0,Ke=0);const lt=Te.convert(X.format),At=Te.convert(X.type);let Ce;X.isData3DTexture?(se.setTexture3D(X,0),Ce=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(se.setTexture2DArray(X,0),Ce=V.TEXTURE_2D_ARRAY):(se.setTexture2D(X,0),Ce=V.TEXTURE_2D),M.activeTexture(V.TEXTURE0),M.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Lt=M.getParameter(V.UNPACK_ROW_LENGTH),nt=M.getParameter(V.UNPACK_IMAGE_HEIGHT),zt=M.getParameter(V.UNPACK_SKIP_PIXELS),tn=M.getParameter(V.UNPACK_SKIP_ROWS),ln=M.getParameter(V.UNPACK_SKIP_IMAGES);M.pixelStorei(V.UNPACK_ROW_LENGTH,tt.width),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,tt.height),M.pixelStorei(V.UNPACK_SKIP_PIXELS,me),M.pixelStorei(V.UNPACK_SKIP_ROWS,xe),M.pixelStorei(V.UNPACK_SKIP_IMAGES,Ne);const di=P.isDataArrayTexture||P.isData3DTexture,ct=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const vt=ee.get(P),Ht=ee.get(X),dt=ee.get(vt.__renderTarget),Ri=ee.get(Ht.__renderTarget);M.bindFramebuffer(V.READ_FRAMEBUFFER,dt.__webglFramebuffer),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Or=0;Or<ue;Or++)di&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ee.get(P).__webglTexture,j,Ne+Or),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ee.get(X).__webglTexture,De,Ke+Or)),V.blitFramebuffer(me,xe,O,H,we,Qe,O,H,V.DEPTH_BUFFER_BIT,V.NEAREST);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||ee.has(P)){const vt=ee.get(P),Ht=ee.get(X);M.bindFramebuffer(V.READ_FRAMEBUFFER,I),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,x);for(let dt=0;dt<ue;dt++)di?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vt.__webglTexture,j,Ne+dt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,j),ct?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.__webglTexture,De,Ke+dt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ht.__webglTexture,De),j!==0?V.blitFramebuffer(me,xe,O,H,we,Qe,O,H,V.COLOR_BUFFER_BIT,V.NEAREST):ct?V.copyTexSubImage3D(Ce,De,we,Qe,Ke+dt,me,xe,O,H):V.copyTexSubImage2D(Ce,De,we,Qe,me,xe,O,H);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ct?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(Ce,De,we,Qe,Ke,O,H,ue,lt,At,tt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Ce,De,we,Qe,Ke,O,H,ue,lt,tt.data):V.texSubImage3D(Ce,De,we,Qe,Ke,O,H,ue,lt,At,tt):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,we,Qe,O,H,lt,At,tt.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,we,Qe,tt.width,tt.height,lt,tt.data):V.texSubImage2D(V.TEXTURE_2D,De,we,Qe,O,H,lt,At,tt);M.pixelStorei(V.UNPACK_ROW_LENGTH,Lt),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,nt),M.pixelStorei(V.UNPACK_SKIP_PIXELS,zt),M.pixelStorei(V.UNPACK_SKIP_ROWS,tn),M.pixelStorei(V.UNPACK_SKIP_IMAGES,ln),De===0&&X.generateMipmaps&&V.generateMipmap(Ce),M.unbindTexture()},this.initRenderTarget=function(P){ee.get(P).__webglFramebuffer===void 0&&se.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?se.setTextureCube(P,0):P.isData3DTexture?se.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?se.setTexture2DArray(P,0):se.setTexture2D(P,0),M.unbindTexture()},this.resetState=function(){D=0,N=0,B=null,M.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class db extends $t{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new je(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Pr=new J,ou=new bt,lu=new bt,cu=new J,du=new J;class ub{constructor(e={}){const t=this;let i,r,a,s;const l={objects:new WeakMap},o=e.element!==void 0?e.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(h,v){h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),ou.copy(v.matrixWorldInverse),lu.multiplyMatrices(v.projectionMatrix,ou),u(h,h,v),this.sortObjects&&m(h)},this.setSize=function(h,v){i=h,r=v,a=i/2,s=r/2,o.style.width=h+"px",o.style.height=v+"px"};function c(h){h.isCSS2DObject&&(h.element.style.display="none");for(let v=0,p=h.children.length;v<p;v++)c(h.children[v])}function u(h,v,p){if(h.visible===!1){c(h);return}if(h.isCSS2DObject){Pr.setFromMatrixPosition(h.matrixWorld),Pr.applyMatrix4(lu);const g=Pr.z>=-1&&Pr.z<=1&&h.layers.test(p.layers)===!0,S=h.element;S.style.display=g===!0?"":"none",g===!0&&(h.onBeforeRender(t,v,p),S.style.transform="translate("+-100*h.center.x+"%,"+-100*h.center.y+"%)translate("+(Pr.x*a+a)+"px,"+(-Pr.y*s+s)+"px)",S.parentNode!==o&&o.appendChild(S),h.onAfterRender(t,v,p));const y={distanceToCameraSquared:f(p,h)};l.objects.set(h,y)}for(let g=0,S=h.children.length;g<S;g++)u(h.children[g],v,p)}function f(h,v){return cu.setFromMatrixPosition(h.matrixWorld),du.setFromMatrixPosition(v.matrixWorld),cu.distanceToSquared(du)}function d(h){const v=[];return h.traverseVisible(function(p){p.isCSS2DObject&&v.push(p)}),v}function m(h){const v=d(h).sort(function(g,S){if(g.renderOrder!==S.renderOrder)return S.renderOrder-g.renderOrder;const y=l.objects.get(g).distanceToCameraSquared,b=l.objects.get(S).distanceToCameraSquared;return y-b}),p=v.length;for(let g=0,S=v.length;g<S;g++)v[g].element.style.zIndex=p-g}}}function fb(n){const e=n.clientWidth,t=n.clientHeight,i=new cb({antialias:!0});i.setSize(e,t),i.domElement.style.position="absolute",i.domElement.style.inset="0",n.appendChild(i.domElement);const r=new ub;r.sortObjects=!1,r.setSize(e,t),r.domElement.style.position="absolute",r.domElement.style.inset="0",r.domElement.style.pointerEvents="none",r.domElement.classList.add("tour-rt-marker-layer"),r.domElement.style.zIndex="var(--tour-marker-layer, 1)",n.appendChild(r.domElement);const a=new Sp,s=new fn(75,e/t,1,1100),l=new jr(500,64,32).scale(-1,1,1),o=new Mr({color:1118498}),c=new qt(l,o);a.add(c);function u(){const m=Math.tan(s.fov*Math.PI/360);r.domElement.style.setProperty("--tour-viewport-width",`${n.clientWidth}px`);const h=Math.tan((s.userData.tourMarkerBaseFov||s.fov)*Math.PI/360);r.domElement.style.setProperty("--tour-marker-zoom",String(h/m)),i.render(a,s),r.render(a,s)}function f(m,h){m>0&&h>0&&(s.aspect=m/h,s.updateProjectionMatrix(),i.setSize(m,h),r.setSize(m,h))}function d(){l.dispose(),o.dispose(),i.dispose(),i.forceContextLoss(),n.removeChild(i.domElement),n.removeChild(r.domElement)}return{scene:a,camera:s,renderer:i,labelRenderer:r,sphere:c,render:u,setSize:f,dispose:d}}const uu=30,ns=120,Lr=85;function hb(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function pb({containerEl:n,camera:e,getMinLat:t=()=>-Lr,getMaxLat:i=()=>Lr,getViewBounds:r,onInteraction:a,onArrowKey:s}){let l=0,o=0,c=75;e.userData.tourMarkerBaseFov=c;const u=new Map;let f=null,d=null;function m(){d!=null&&cancelAnimationFrame(d),d=null}function h(){const x=r?.();if(x&&Number.isFinite(x.minLat)&&Number.isFinite(x.maxLat)){const B=Math.max(1,x.maxLat-x.minLat);c=Math.min(c,B)}let D=Math.max(-Lr,Math.min(Lr,t(c))),N=Math.max(-Lr,Math.min(Lr,i(c)));return Number.isFinite(x?.minLat)&&Number.isFinite(x?.maxLat)&&(D=Math.max(D,x.minLat+c/2),N=Math.min(N,x.maxLat-c/2)),D>N&&(N=D),{min:D,max:N}}function v(x){const{min:D,max:N}=h();return Math.max(D,Math.min(N,x))}function p(x){m(),a?.(x)}function g(){e.fov=c,e.updateProjectionMatrix();const x=bn.degToRad(l),D=bn.degToRad(90-o),N=new J(500*Math.sin(D)*Math.sin(x),500*Math.cos(D),500*Math.sin(D)*Math.cos(x));e.lookAt(N)}function S(x){x.button!==0||x.target.closest?.("button, a, input, select, textarea, [data-ui]")||(p("pointer"),u.set(x.pointerId,{x:x.clientX,y:x.clientY}),n.setPointerCapture(x.pointerId))}function y(x){const D=u.get(x.pointerId);if(D){if(u.set(x.pointerId,{x:x.clientX,y:x.clientY}),u.size===1){const N=x.clientX-D.x,B=x.clientY-D.y;l+=N*.1,o=v(o+B*.1),g()}else if(u.size===2){const N=[...u.values()],B=Math.hypot(N[0].x-N[1].x,N[0].y-N[1].y);if(f!=null){const F=f-B;c=Math.max(uu,Math.min(ns,c+F*.1)),o=v(o),g()}f=B}}}function b(x){u.delete(x.pointerId),u.size<2&&(f=null)}function A(x){x.target.closest?.("button, input, select, textarea, [data-ui]")||(x.preventDefault(),p("wheel"),c=Math.max(uu,Math.min(ns,c+x.deltaY*.05)),o=v(o),g())}function E(x){x.target?.closest?.("button, input, select, textarea, [data-ui]")||(x.key==="ArrowLeft"?(p("keyboard"),s?.(-1)):x.key==="ArrowRight"&&(p("keyboard"),s?.(1)))}n.addEventListener("pointerdown",S),n.addEventListener("pointermove",y),n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b),n.addEventListener("wheel",A,{passive:!1}),window.addEventListener("keydown",E),r?.()&&(o=v(o)),g();function w(x={}){m(),Number.isFinite(x.lon)&&(l=x.lon),Number.isFinite(x.fov)&&(c=Math.max(1,Math.min(ns,x.fov))),o=v(Number.isFinite(x.lat)?x.lat:o),Number.isFinite(x.fov)&&(e.userData.tourMarkerBaseFov=c),g()}function _(x,D){d&&cancelAnimationFrame(d),d=null,l=x,o=v(D),g()}function C(x,D,N=600){if(d&&cancelAnimationFrame(d),N<=0){_(x,D);return}const B=l,F=o,z=performance.now();function K(ie){const $=Math.min(1,(ie-z)/N),Z=hb($);l=B+(x-B)*Z,o=v(F+(D-F)*Z),g(),$<1?d=requestAnimationFrame(K):d=null}d=requestAnimationFrame(K)}function T(){o=v(o),g()}function L(){return{lon:l,lat:o}}function R(){return{lon:l,lat:o,fov:c}}function U(x=0,D=0,N=75){c=Number.isFinite(N)?Math.max(1,Math.min(ns,N)):75,u.clear(),f=null,_(x,D),e.userData.tourMarkerBaseFov=c}function I(){d&&cancelAnimationFrame(d),n.removeEventListener("pointerdown",S),n.removeEventListener("pointermove",y),n.removeEventListener("pointerup",b),n.removeEventListener("pointercancel",b),n.removeEventListener("wheel",A),window.removeEventListener("keydown",E)}return{setViewState:w,cancelAnimation:m,animateCameraTo:C,setLonLat:_,resetView:U,reclamp:T,getCurrentLonLat:L,getViewState:R,dispose:I}}async function mb(n,{onProgress:e,signal:t,fetcher:i=fetch}={}){const r=await i(n,{signal:t});if(!r.ok)throw new Error(`No se pudo descargar la imagen (${r.status})`);const a=Number(r.headers.get("content-length")),s=!r.headers.get("content-encoding")&&a>0?a:0;if(e?.({loaded:0,total:s}),!r.body?.getReader){const f=await r.blob();return e?.({loaded:f.size,total:f.size}),f}const l=r.body.getReader(),o=[];let c=0;try{for(;;){const{done:f,value:d}=await l.read();if(f)break;o.push(d),c+=d.byteLength,e?.({loaded:c,total:s})}}finally{l.releaseLock()}const u=new Blob(o,{type:r.headers.get("content-type")||"application/octet-stream"});return e?.({loaded:c,total:c}),u}function xl({frames:n=[],maxCache:e=20,ahead:t=5,behind:i=2,maxTextureSize:r=1/0}={}){const a=new Map,s=new Map;let l=n,o=!1;function c(h){l=h}function u(h,v){const p=l[h];if(!p)return Promise.reject(new Error(`Cuadro ${h} inexistente`));if(a.has(p))return v?.({loaded:1,total:1}),Promise.resolve(a.get(p));if(s.has(p)){const y=s.get(p);return v&&(y.listeners.add(v),y.progress&&v(y.progress)),y.promise}const g={controller:new AbortController,listeners:new Set(v?[v]:[]),progress:null},S=y=>{g.progress=y,g.listeners.forEach(b=>b(y))};return g.promise=mb(p,{signal:g.controller.signal,onProgress:S}).then(y=>new Promise((b,A)=>{const E=URL.createObjectURL(y),w=new Image;w.onload=()=>{URL.revokeObjectURL(E),b(w)},w.onerror=()=>{URL.revokeObjectURL(E),A(new Error("No se pudo decodificar la panorámica"))},w.src=E})).then(y=>{if(o)throw new Error("Cache liberado");if(y.width>r||y.height>r){const A=document.createElement("canvas"),E=Math.min(r/y.width,r/y.height);A.width=Math.max(1,Math.floor(y.width*E)),A.height=Math.max(1,Math.floor(y.height*E)),A.getContext("2d").drawImage(y,0,0,A.width,A.height),y=A}const b=new yt(y);return b.colorSpace=Rt,b.minFilter=xt,Number.isFinite(r)&&(b.generateMipmaps=!1),b.needsUpdate=!0,a.set(p,b),b}).finally(()=>s.delete(p)),s.set(p,g),g.promise}function f(h){if(a.size<=e)return;const v=g=>{const S=l.indexOf(g);return S===-1?1/0:Math.abs(S-h)},p=[...a.keys()].sort((g,S)=>v(S)-v(g));for(;a.size>e&&p.length;){const g=p.shift();a.get(g)?.dispose(),a.delete(g)}}function d(h){const v=Math.max(0,h-i),p=Math.min(l.length-1,h+t);for(let g=v;g<=p;g++)u(g).catch(()=>{});f(h)}function m(){o=!0,s.forEach(h=>h.controller.abort()),a.forEach(h=>h.dispose()),a.clear(),s.clear()}return{loadTexture:u,hasTexture:h=>a.has(l[h]),evictFarTextures:f,preloadGPU:d,setFrames:c,dispose:m}}function ia(n){return!n||n.origen!=="panorama_upload"?[]:[{id:"base",key:"base",label:n.panoramaBaseLabel||"Original",image:n.image},...Array.isArray(n.variants)?n.variants.filter(e=>e?.id&&e.image?.webp&&e.enabled!==!1):[]]}function yl(n,e){return ia(n).find(t=>t.id===e)||ia(n)[0]||null}function gb({scene:n,renderer:e,reducedMotion:t=()=>globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches}){const i=new jr(497,64,32).scale(-1,1,1);let r=null,a=null,s=null,l=null,o=!1;function c(){a!=null&&cancelAnimationFrame(a),clearTimeout(l),l=null,a=null,r&&(n.remove(r),r.material.dispose(),r=null);const f=s;s=null,f?.(!1)}async function u(f,d=600){if(c(),o)return!1;e.initTexture?.(f);const m=t()?0:Math.max(0,Math.min(2e3,Number.isFinite(Number(d))?Number(d):600));return m?(r=new qt(i,new Mr({map:f,transparent:!0,opacity:0,depthWrite:!1})),r.renderOrder=1.5,n.add(r),new Promise(h=>{s=h;const v=performance.now();function p(){a!=null&&cancelAnimationFrame(a),a=null,clearTimeout(l),l=null,s=null,r&&(n.remove(r),r.material.dispose(),r=null),h(!0)}l=setTimeout(p,m+100);function g(S){if(!r)return;const y=Math.min(1,Math.max(0,(S-v)/m));r.material.opacity=y*y*(3-2*y),y<1?a=requestAnimationFrame(g):p()}a=requestAnimationFrame(g)})):!0}return{run:u,cancel:c,dispose(){o=!0,c(),i.dispose()}}}const vb=490;function Ir(n,e,t=vb){const i=bn.degToRad(90-e),r=bn.degToRad(n);return new J(t*Math.sin(i)*Math.sin(r),t*Math.cos(i),t*Math.sin(i)*Math.cos(r))}function bb(n){const e=n.length(),t=Math.acos(bn.clamp(n.y/e,-1,1)),i=Math.atan2(n.x,n.z);return{lat:90-bn.radToDeg(t),lon:bn.radToDeg(i)}}function _b({camera:n,sphere:e}){const t=new Td,i=new je;function r(a,s,l){i.x=(a-l.left)/l.width*2-1,i.y=-((s-l.top)/l.height)*2+1,t.setFromCamera(i,n);const[o]=t.intersectObject(e);return o?bb(o.point):null}return{pointToLonLat:r}}const xb=2,kn=n=>n==null?n:structuredClone(n),xi=(n,e)=>Object.prototype.hasOwnProperty.call(n||{},e),Ml=n=>n==="mobile"?"mobile":"desktop",Sl=n=>`${n.template}|${n.host}|${Ml(n.device)}`;function El(n={},e="detail"){const t=n.presentation;if(t?.kind==="screen"){const{reveal:s,...l}=t;return{...l,kind:"screen",desktopPosition:t.desktopPosition||"right",mobilePosition:t.mobilePosition||"bottom"}}if(t?.kind==="inline")return{...t,kind:"inline",reveal:t.reveal==="always"?"always":"click"};const{desktop:i,mobile:r,...a}=n.position||{};return n.placement==="screen"?{...a,kind:"screen",desktopPosition:i||"right",mobilePosition:r||"bottom"}:{kind:"inline",reveal:n.reveal==="always"||e==="card"?"always":"click",...n.position?{screenPosition:kn(n.position)}:{}}}function is(n,{surface:e="detail",device:t}={}){if(!n)return null;const{placement:i,reveal:r,position:a,...s}=kn(n),l=El(n,e),o=n.template||(e==="card"?"card":"image-text"),c={...n.layoutContext,template:o,host:l.kind,device:Ml(t||n.layoutContext?.device)},u=Sl(c),f=Object.fromEntries(Object.entries(s.layoutBank||{}).filter(([m])=>m!==u).slice(-16)),d=n.elements?.[0]?.props?.detailAutoLayout;return{...s,version:xb,presentation:l,layoutContext:c,layoutBank:f,layoutMode:n.layoutMode==="manual"||n.layoutMode!=="auto"&&d===!1?"manual":"auto"}}function fu(n,e={}){if(!n)return null;const t=is(n,{surface:e.surface}),i=e.device&&Ml(e.device)!==t.layoutContext.device?Ab(t,{},e):t,r=i.presentation;return{...i,fields:{title:!0,image:!0,description:!0,price:!0,...i.fields},placement:r.kind,reveal:r.kind==="screen"?"click":r.reveal,position:r.kind==="screen"?{desktop:r.desktopPosition,mobile:r.mobilePosition}:kn(r.screenPosition||{desktop:"right",mobile:"bottom"})}}function Dr(n,e="detail",t={}){const i=n?.content?.[e];return i&&[1,2].includes(i.version)?fu(i,{...t,surface:e}):null}const yb=["fill","color","secondaryColor","glass","blur","tint","borderColor","borderWidth","shadow","shadowIntensity","radius","radiusMode","font","headingFont"];function Mb(n,e){if(!n?.[0]||!e?.[0])return n;const t={...n[0].props};for(const i of yb)xi(e[0].props,i)&&(t[i]=kn(e[0].props[i]));return[{...n[0],props:t},...n.slice(1)]}const rs=n=>n?.[0]?.template==="group"?n[0]:null,Al=n=>rs(n)?.children?.filter(e=>!e.bind)||[],Tl=n=>rs(n)?n.slice(1):n||[],hu=n=>Object.fromEntries(["frame","mobile","z"].filter(e=>xi(n,e)).map(e=>[e,kn(n[e])]));function Sb(n){let e=kn(n.elements||[]);const t=[...Al(e),...Tl(e)],i=rs(e);return e=i?[{...i,children:(i.children||[]).filter(r=>r.bind)}]:[],{elements:e,placements:Object.fromEntries(t.map(r=>[r.id,hu(r)])),layoutMode:n.layoutMode,...xi(n,"geometry")?{geometry:n.geometry}:{},...xi(n,"offset")?{offset:kn(n.offset)}:{}}}function Eb(n,e,t){if(xi(e,"presentation"))return El({presentation:e.presentation},t);const i=n.presentation;if(!xi(e,"placement")&&!xi(e,"reveal")&&!xi(e,"position"))return i;const r=e.placement||i.kind,a=e.position||(i.kind==="screen"?{desktop:i.desktopPosition,mobile:i.mobilePosition}:i.screenPosition);return r==="screen"?El({placement:"screen",position:a},t):{kind:"inline",reveal:e.reveal||(i.kind==="inline"?i.reveal:"click"),...a?{screenPosition:kn(a)}:{}}}function Ab(n,e={},{surface:t="detail",device:i,replacement:r=!1}={}){const a=is(n,{surface:t}),s=Eb(a,r&&e.template!==a.template?Object.fromEntries(Object.entries(e).filter(([A])=>!["placement","reveal","position","presentation"].includes(A))):e,t),l=r&&e.template!==a.template,o=is({...a,...e,presentation:s,...l?{enabled:a.enabled,fields:a.fields,inheritAppearance:a.inheritAppearance,layoutMode:e.layoutMode||(e.elements?.[0]?.props?.detailAutoLayout===!1?"manual":"auto")}:{}},{surface:t,device:i}),c=Sl(a.layoutContext),u=Sl(o.layoutContext);if(c===u)return o;const f={...a.layoutBank,[c]:Sb(a)},d=f[u];delete f[u];let m=kn(d?.elements||(r&&e.elements?e.elements:a.elements));const h=new Map([...Al(d?.elements),...Tl(d?.elements)].map(A=>[A.id,hu(A)])),v=A=>({...kn(A),...d?.placements?.[A.id]||h.get(A.id)||{}}),p=Al(a.elements).map(v),g=Tl(a.elements).map(v),S=rs(m);m=S?[{...S,children:[...(S.children||[]).filter(A=>A.bind),...p]},...g]:[...g,...p];const{placements:y,...b}=d||{};return is({...o,...b,elements:Mb(m,a.elements),layoutContext:o.layoutContext,layoutBank:Object.fromEntries(Object.entries(f).slice(-16))},{surface:t,device:i})}const Tb=n=>["basic-topbar","frame-scrubber"].includes(n.template);function as(n,e,t=[]){if(Tb(n))return!0;const i=n.showIn;if(i==null||i==="all")return!0;if(Array.isArray(i))return i.includes(e);if(!i||typeof i!="object")return!1;const r=t.find(s=>s.id===e)?.groupId,a=(i.groups??[]).includes(r)||(i.scenes??[]).includes(e);return i.exclude===!0?!a:a}function wb(n,e){const t=e?.content?.panelId??n?.panelDefaults?.[e?.type];return n?.panels?.find(i=>i.id===t)??null}function wl(n,e={}){return(n??[]).map(t=>{const i={...t,props:{...t.props??{}}};if(["title","description","price","image"].includes(t.bind)){const r=t.bind==="image"?"asset":"text";i.props[r]=t.bind==="image"?e.image??"":String(e[t.bind]??"")}return t.children&&(i.children=wl(t.children,e)),i})}const ss=n=>typeof n=="string"&&n.startsWith("panel:")?n.slice(6):null;function Cb(n){const e=n.props||{},t=n.frame?.w||280;if(n.template==="text"){const i=e.size||15,r=String(e.text||"").split(`
`).reduce((a,s)=>a+Math.max(1,Math.ceil(s.length*i*.55/t)),0);return Math.max(n.frame?.h||0,Math.ceil(r*i*(e.lineHeight||1.5)))}if(n.frame?.h>0)return n.frame.h;if(n.template==="stats-row")return 64;if(n.template==="feature-list")return(e.heading?28:0)+(e.items||[]).reduce((i,r)=>i+Math.max(22,Math.ceil(String(r.text||"").length*15*.55/Math.max(80,t-28))*22.5)+10,0);if(n.template==="image-gallery"){const i=(e.items||[]).filter(o=>o.asset),r=Math.max(1,Math.min(Number(e.columns)||1,i.length||1));if(!i.length)return 0;const a=Math.ceil(i.length/r),s=e.gap??8,l=(t-s*(r-1))/r;return Math.ceil(a*(l*.75+(e.showCaptions!==!1&&i.some(o=>o.caption)?26:0))+s*(a-1))}return 80}function Rb(n){return[1,2].includes(n?.content?.detail?.version)}function Pb(n){return n?.placement==="screen"&&n.reveal!=="click"?{...n,reveal:"click"}:n}function pu(n,e){if(!n?.elements?.length)return!0;const t=i=>i.hidden?!1:i.template==="group"?(i.children||[]).some(t):i.bind==="title"?!1:i.bind?!0:i.template==="text"?!!String(i.props?.text||"").trim():i.template==="image"?!!i.props?.asset:!0;return!aa(n,e).some(t)}function ra(n,e,t){const i=mu(n,t);return i?.enabled&&e!=="edit"&&pu(i,n)?{...i,enabled:!1}:i}function mu(n,e){return Rb(n)?Pb({...Dr(n,"detail",{device:e}),version:n.content.detail.version}):null}function Gi(n,e=!1){return e&&n?.mobile?.mode==="custom"&&n.mobile.frame?n.mobile.frame:n?.frame??{}}const Cl=new WeakSet;function Rl(n,e,t={},i){if(!n||Cl.has(n))return n;const r={...n,elements:aa(n,e,t,i)};return Cl.add(r),r}function aa(n,e,t={},i){if(i&&n.version===2&&n.layoutContext?.device!==i&&(n=fu(n,{device:i})),Cl.has(n))return n.elements;const r={fill:t.fill||"var(--tour-theme-surface,rgba(20,37,68,.75))",color:t.iconColor||"var(--txt,#fff)",borderColor:t.stroke||"rgba(255,255,255,.2)",borderWidth:t.strokeWidth??1,radius:n.inheritCardRadius?e?.content?.card?.elements?.[0]?.props?.radius??8:n.version===2?8:t.radius??8,glass:t.glass??!0,blur:t.blur??24,tint:t.tint,shadow:t.shadow,shadowIntensity:t.shadowIntensity,secondaryColor:t.secondaryColor,font:t.font,headingFont:t.headingFont},a=(s,l=!0)=>s.map(o=>{const c={...o,props:{...o.props}};if(c.bind&&(c.hidden=!!c.hidden||n.fields?.[c.bind]===!1||!e[c.bind],c.template==="text"&&!c.props.color&&n.inheritAppearance!==!1&&(c.props.color=r.color)),!c.bind&&(c.template==="text"&&!String(c.props.text||"").trim()||c.template==="image-gallery"&&!(c.props.items||[]).some(u=>u.asset)||c.template==="stats-row"&&!(c.props.items||[]).some(u=>String(u.value??"").trim()||String(u.label||"").trim())||c.template==="feature-list"&&!c.props.heading&&!(c.props.items||[]).some(u=>u.text))&&(c.hidden=!0),l&&n.inheritAppearance!==!1&&(c.props={...r,...Object.fromEntries(Object.entries(c.props).filter(([,u])=>u!==""&&u!=null))}),l){c.props.hotspotComposition=!0;const u=c.props.radiusMode;u==="card"||n.inheritCardRadius?c.props.radius=e?.content?.card?.elements?.[0]?.props?.radius??null:u==="theme"&&(c.props.radius=o.props?.radius??null)}if(o.children){if(c.children=a(o.children,!1),l&&n.layoutMode&&(c.props.detailAutoLayout=n.layoutMode==="auto"),l&&n.layoutMode==="manual"){const u=c.children.filter(v=>!v.hidden),f=c.props.padding??0,d=Math.min(0,...u.map(v=>(v.frame?.x??0)-f)),m=Math.min(0,...u.map(v=>(v.frame?.y??0)-f)),h=Math.max(c.frame?.w??0,...u.map(v=>(v.frame?.x??0)+(v.frame?.w??0)+f));c.frame={...c.frame,w:h-d},c.props={...c.props,contentWidth:h-d,hotspotOriginX:d,hotspotOriginY:m}}if(c.props.detailAutoLayout){let u=c.props.padding??16;c.children=c.children.map(f=>{if(f.hidden)return f;const d=Cb(f),m={...f.frame,y:u};return u+=d+(c.props.detailGap??12),{...f,frame:m}})}}return c});return a(wl(n.elements,e))}const os=n=>typeof n=="number"&&Number.isFinite(n)?Number(n.toFixed(6)):Array.isArray(n)?n.map(os):n&&typeof n=="object"?Object.fromEntries(Object.keys(n).sort().map(e=>[e,os(n[e])])):n,Lb=["theme","brand","languages","hotspotPresets","hotspotBorders","detailPanel","panels","panelDefaults"];function Ib(n){return!n||typeof n!="object"?n:Object.fromEntries(Lb.filter(e=>n[e]!==void 0).map(e=>[e,n[e]]))}function gu(n={}){return JSON.stringify(os({design:Ib(n.doc?.design),assets:n.doc?.assets}))}function ls(n,e,t,i={}){const{type:r,title:a,description:s,price:l,image:o,targetSceneId:c,locked:u,content:f}=n;return JSON.stringify(os({type:r,title:a,description:s,price:l,image:o,targetSceneId:c,locked:u,content:f,style:e,mobile:t,appearance:typeof i=="string"?i:gu(i)}))}const On='-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',vu='ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',bu=[{id:"Inter",label:"Inter",kind:"sans",family:`"TourInter", "Inter", ${On}`},{id:"Manrope",label:"Manrope",kind:"sans",family:`"TourManrope", ${On}`},{id:"DM Sans",label:"DM Sans",kind:"sans",family:`"TourDMSans", ${On}`},{id:"Playfair Display",label:"Playfair Display",kind:"serif",family:'"TourPlayfair", Georgia, "Times New Roman", serif'},{id:"JetBrains Mono",label:"JetBrains Mono",kind:"mono",family:`"TourJetBrainsMono", ${vu}`},{id:"Roboto",label:"Roboto",kind:"sans",family:`"TourRoboto", ${On}`},{id:"Open Sans",label:"Open Sans",kind:"sans",family:`"TourOpenSans", ${On}`},{id:"Montserrat",label:"Montserrat",kind:"sans",family:`"TourMontserrat", ${On}`},{id:"Nunito Sans",label:"Nunito Sans",kind:"sans",family:`"TourNunitoSans", ${On}`},{id:"Oswald",label:"Oswald",kind:"sans",family:`"TourOswald", ${On}`},{id:"Raleway",label:"Raleway",kind:"sans",family:`"TourRaleway", ${On}`},{id:"Space Grotesk",label:"Space Grotesk",kind:"sans",family:`"TourSpaceGrotesk", ${On}`},{id:"Lora",label:"Lora",kind:"serif",family:'"TourLora", Georgia, "Times New Roman", serif'},{id:"Merriweather",label:"Merriweather",kind:"serif",family:'"TourMerriweather", Georgia, "Times New Roman", serif'},{id:"Source Serif 4",label:"Source Serif 4",kind:"serif",family:'"TourSourceSerif4", Georgia, "Times New Roman", serif'}],_u="Inter",Nr=new Map(bu.map(n=>[n.id,n]));function Pl(n){return typeof n=="string"&&/^asset:[A-Za-z0-9_-]+$/.test(n)?`TourAssetFont_${n.slice(6)}`:null}function xu(n){return Nr.has(n)||!!Pl(n)}function En(n,e=_u){const t=(Nr.get(e)||Nr.get(_u)).family,i=Pl(n);return i?`"${i}", ${t}`:Nr.get(n)?.family||t}function Db(n){const e=n&&typeof n=="object"?n:{};return{heading:En(e.heading),body:En(e.body),mono:Nr.get(e.mono)?.kind==="mono"?Nr.get(e.mono).family:vu}}const sa=".hs-co-card,.hs-fc-card,.hs-label-chip,.hs-pl-text,.hs-pt-text",yu=".hs-co-kicker,.hs-co-price,.hs-co-title,.hs-co-foot,.hs-fc-img,.hs-fc-title,.hs-fc-desc,.hs-fc-price";function Mu(n,e,t={}){const i=n.closest?.("[data-el-id]"),r=n.closest?.(sa),a=n.closest?.("[data-hotspot-surface]")?.dataset.hotspotSurface||(n.closest?.(".hs-detail-body")||r?.classList.contains("hs-detail-expanded")?"detail":"card"),s=n.closest?.(".hs-fc-img")?"image":n.closest?.(".hs-fc-desc")?"description":n.closest?.(".hs-co-kicker")?"kicker":n.closest?.(".hs-co-price,.hs-fc-price,.hs-pt-text")?"price":n.closest?.(".hs-co-foot")?"cta":"title";let l;if(r&&!i){const o=r.getBoundingClientRect(),c=r.matches(".hs-co-card")?1:parseFloat(e.firstElementChild?.style.scale)||1,u=(e.getBoundingClientRect().width/e.offsetWidth||1)*c,f=parseFloat(r.style.scale)||1,d=getComputedStyle(r);l={finish:r.matches(".hs-co-card,.hs-fc-card")?{borderColor:d.borderColor,borderWidth:parseFloat(d.borderWidth)||0,radius:parseFloat(d.borderRadius)||0}:{},host:sa.split(",").find(m=>r.matches(m)),width:o.width/u,height:o.height/u,pieces:[...r.matches(".hs-label-chip,.hs-pl-text,.hs-pt-text")?[r]:r.querySelectorAll(yu)].filter(m=>m.getBoundingClientRect().height>0&&!m.hidden).map(m=>{let h=m.getBoundingClientRect();const v=getComputedStyle(m);if(m===r){const g=document.createRange();g.selectNodeContents(m),h=g.getBoundingClientRect()}const p=m.matches(".hs-fc-img")?"image":m.matches(".hs-fc-desc")?"description":m.matches(".hs-co-kicker")?"kicker":m.matches(".hs-co-price,.hs-fc-price,.hs-pt-text")?"price":m.matches(".hs-co-foot")?"cta":"title";return{role:p,...["title","price","description","image"].includes(p)&&(m!==r||m.textContent===t[p])?{bind:p}:{},text:m.textContent,x:(h.left-o.left)/u,y:(h.top-o.top)/u,w:h.width/u,h:h.height/u,fit:v.objectFit,radius:parseFloat(v.borderRadius),uppercase:v.textTransform==="uppercase",letterSpacing:(parseFloat(v.letterSpacing)||0)*f,size:parseFloat(v.fontSize)*f,weight:parseFloat(v.fontWeight),color:v.color,font:v.fontFamily,lineHeight:parseFloat(v.lineHeight)/parseFloat(v.fontSize)}})}}return{surface:a,id:i?.dataset.elId,role:s,snapshot:l}}function Nb(n,e,t,i){return[...n.querySelectorAll(`[data-el-id],${yu},${sa}`)].map(r=>({node:r,box:r.getBoundingClientRect()})).filter(({box:r})=>r.width>0&&r.height>0&&e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom).sort((r,a)=>r.box.width*r.box.height-a.box.width*a.box.height)[0]?.node||i}const Su="http://www.w3.org/2000/svg",pt=(n,e,t)=>`M${n-t} ${e}a${t} ${t} 0 1 0 ${2*t} 0a${t} ${t} 0 1 0 ${-2*t} 0`,kt=(n,e,t,i,r=0)=>r?`M${n+r} ${e}h${t-2*r}a${r} ${r} 0 0 1 ${r} ${r}v${i-2*r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(t-2*r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(i-2*r)}a${r} ${r} 0 0 1 ${r} ${-r}z`:`M${n} ${e}h${t}v${i}h${-t}z`,Nt=(n,e)=>`M${n} ${e}h.01`,Wi={"volume-2":{cat:"media",name:"Sonido",d:["M11 5 6 9H3v6h3l5 4V5Z","M15.5 8.5a5 5 0 0 1 0 7","M19 5a10 10 0 0 1 0 14"]},"volume-x":{cat:"media",name:"Silencio",d:["M11 5 6 9H3v6h3l5 4V5Z","m16 9 6 6","m22 9-6 6","M2 2 22 22"]},info:{cat:"information",name:"Información",d:[pt(12,12,10),"M12 16v-4",Nt(12,8)]},"circle-help":{cat:"information",name:"Ayuda",d:[pt(12,12,10),"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",Nt(12,17)]},"circle-alert":{cat:"information",name:"Aviso",d:[pt(12,12,10),"M12 8v4",Nt(12,16)]},check:{cat:"general",name:"Check",d:["M20 6 9 17l-5-5"]},"circle-check":{cat:"information",name:"Confirmado",d:[pt(12,12,10),"m9 12 2 2 4-4"]},x:{cat:"general",name:"Cerrar",d:["M18 6 6 18","m6 6 12 12"]},plus:{cat:"general",name:"Más",d:["M5 12h14","M12 5v14"]},minus:{cat:"general",name:"Menos",d:["M5 12h14"]},"arrow-right":{cat:"arrows",name:"Flecha derecha",d:["M5 12h14","m12 5 7 7-7 7"]},"arrow-left":{cat:"arrows",name:"Flecha izquierda",d:["M19 12H5","m12 19-7-7 7-7"]},"arrow-up":{cat:"arrows",name:"Flecha arriba",d:["m5 12 7-7 7 7","M12 19V5"]},"arrow-down":{cat:"arrows",name:"Flecha abajo",d:["M12 5v14","m19 12-7 7-7-7"]},"arrow-curve-down":{cat:"arrows",name:"Flecha curva abajo",d:["M15.68 1.88C9.78 3.08 2.37 13.16 14.06 22.43","M14.06 16.33V22.43H7.94"]},"arrow-up-right":{cat:"arrows",name:"Flecha diagonal",d:["M7 7h10v10","M7 17 17 7"]},"chevron-right":{cat:"arrows",name:"Chevron derecha",d:["m9 18 6-6-6-6"]},"chevron-left":{cat:"arrows",name:"Chevron izquierda",d:["m15 18-6-6 6-6"]},"chevron-up":{cat:"arrows",name:"Chevron arriba",d:["m18 15-6-6-6 6"]},"chevron-down":{cat:"arrows",name:"Chevron abajo",d:["m6 9 6 6 6-6"]},"chevrons-right":{cat:"arrows",name:"Avanzar",d:["m6 17 5-5-5-5","m13 17 5-5-5-5"]},navigation:{cat:"places",name:"Navegación",d:["M3 11 22 2l-9 19-2-8z"]},"map-pin":{cat:"places",name:"Ubicación",d:["M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",pt(12,10,3)]},map:{cat:"places",name:"Mapa",d:["M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z","M15 5.764v15","M9 3.236v15"]},compass:{cat:"places",name:"Brújula",d:[pt(12,12,10),"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"]},"view-360":{cat:"places",name:"Vista 360",d:["M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2","m15.194 13.707 3.814 1.86-1.86 3.814","M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"]},house:{cat:"home",name:"Casa",d:["M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8","M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"]},building:{cat:"home",name:"Edificio",d:[kt(4,2,16,20,2),"M9 22v-4h6v4",Nt(8,6),Nt(16,6),Nt(12,6),Nt(12,10),Nt(12,14),Nt(16,10),Nt(16,14),Nt(8,10),Nt(8,14)]},"door-open":{cat:"home",name:"Puerta",d:["M13 4h3a2 2 0 0 1 2 2v14","M2 20h3","M13 20h9","M10 12v.01","M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"]},bed:{cat:"home",name:"Cama",d:["M2 4v16","M2 8h18a2 2 0 0 1 2 2v10","M2 17h20","M6 8v9"]},bath:{cat:"home",name:"Baño",d:["M10 4 8 6","M17 19v2","M2 12h20","M7 19v2","M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"]},sofa:{cat:"home",name:"Sala",d:["M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3","M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z","M4 18v2","M20 18v2"]},utensils:{cat:"home",name:"Cocina",d:["M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2","M7 2v20","M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"]},tv:{cat:"home",name:"Televisión",d:[kt(2,7,20,15,2),"m17 2-5 5-5-5"]},car:{cat:"places",name:"Auto",d:["M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",pt(7,17,2),"M9 17h6",pt(17,17,2)]},trees:{cat:"places",name:"Jardín",d:["M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z","M7 16v6","M13 19v3","M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"]},waves:{cat:"home",name:"Alberca",d:["M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1","M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1","M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"]},mountain:{cat:"places",name:"Montaña",d:["m8 3 4 8 5-5 5 15H2L8 3z"]},sun:{cat:"general",name:"Sol",d:[pt(12,12,4),"M12 2v2","M12 20v2","m4.93 4.93 1.41 1.41","m17.66 17.66 1.41 1.41","M2 12h2","M20 12h2","m6.34 17.66-1.41 1.41","m19.07 4.93-1.41 1.41"]},moon:{cat:"general",name:"Luna",d:["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"]},star:{cat:"general",name:"Estrella",d:["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"]},heart:{cat:"general",name:"Corazón",d:["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"]},sparkles:{cat:"general",name:"Destacado",d:["M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z","M20 3v4","M22 5h-4","M4 17v2","M5 18H3"]},camera:{cat:"media",name:"Cámara",d:["M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",pt(12,13,3)]},image:{cat:"media",name:"Imagen",d:[kt(3,3,18,18,2),pt(9,9,2),"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]},video:{cat:"media",name:"Video",d:["m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",kt(2,6,14,12,2)]},play:{cat:"media",name:"Reproducir",d:["M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"]},pause:{cat:"media",name:"Pausar",d:[kt(6,4,4,16,1),kt(14,4,4,16,1)]},eye:{cat:"media",name:"Ver",d:["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",pt(12,12,3)]},search:{cat:"general",name:"Buscar",d:["m21 21-4.34-4.34",pt(11,11,8)]},"zoom-in":{cat:"general",name:"Acercar",d:[pt(11,11,8),"m21 21-4.3-4.3","M11 8v6","M8 11h6"]},maximize:{cat:"general",name:"Pantalla completa",d:["M8 3H5a2 2 0 0 0-2 2v3","M21 8V5a2 2 0 0 0-2-2h-3","M3 16v3a2 2 0 0 0 2 2h3","M16 21h3a2 2 0 0 0 2-2v-3"]},move:{cat:"arrows",name:"Mover",d:["M12 2v20","m15 19-3 3-3-3","m19 9 3 3-3 3","M2 12h20","m5 9-3 3 3 3","m9 5 3-3 3 3"]},layers:{cat:"general",name:"Capas",d:["M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z","M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12","M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"]},"layout-grid":{cat:"general",name:"Cuadrícula",d:[kt(3,3,7,7,1),kt(14,3,7,7,1),kt(14,14,7,7,1),kt(3,14,7,7,1)]},list:{cat:"general",name:"Lista",d:["M3 12h.01","M3 18h.01","M3 6h.01","M8 12h13","M8 18h13","M8 6h13"]},"file-text":{cat:"information",name:"Documento",d:["M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z","M14 2v5a1 1 0 0 0 1 1h5","M10 9H8","M16 13H8","M16 17H8"]},tag:{cat:"commerce",name:"Etiqueta",d:["M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",Nt(7.5,7.5)]},"dollar-sign":{cat:"commerce",name:"Precio",d:["M12 2v20","M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"]},percent:{cat:"commerce",name:"Descuento",d:["M19 5 5 19",pt(6.5,6.5,2.5),pt(17.5,17.5,2.5)]},"credit-card":{cat:"commerce",name:"Tarjeta",d:[kt(2,5,20,14,2),"M2 10h20"]},"shopping-bag":{cat:"commerce",name:"Bolsa",d:["M16 10a4 4 0 0 1-8 0","M3.103 6.034h17.794","M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"]},gift:{cat:"commerce",name:"Regalo",d:[kt(3,8,18,4,1),"M12 8v13","M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7","M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"]},key:{cat:"home",name:"Llave",d:["m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4","m21 2-9.6 9.6",pt(7.5,15.5,5.5)]},lock:{cat:"general",name:"Candado",d:[kt(3,11,18,11,2),"M7 11V7a5 5 0 0 1 10 0v4"]},"shield-check":{cat:"commerce",name:"Garantía",d:["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z","m9 12 2 2 4-4"]},ruler:{cat:"home",name:"Medidas",d:["M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z","m14.5 12.5 2-2","m11.5 9.5 2-2","m8.5 6.5 2-2","m17.5 15.5 2-2"]},phone:{cat:"media",name:"Teléfono",d:["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"]},mail:{cat:"media",name:"Correo",d:["m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",kt(2,4,20,16,2)]},"message-circle":{cat:"media",name:"Mensaje",d:["M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"]},bell:{cat:"information",name:"Aviso sonoro",d:["M10.268 21a2 2 0 0 0 3.464 0","M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"]},calendar:{cat:"information",name:"Calendario",d:["M8 2v4","M16 2v4",kt(3,4,18,18,2),"M3 10h18"]},clock:{cat:"information",name:"Reloj",d:["M12 6v6l4 2",pt(12,12,10)]},user:{cat:"general",name:"Persona",d:["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",pt(12,7,4)]},users:{cat:"general",name:"Personas",d:["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2","M16 3.128a4 4 0 0 1 0 7.744","M22 21v-2a4 4 0 0 0-3-3.87",pt(9,7,4)]},share:{cat:"media",name:"Compartir",d:[pt(18,5,3),pt(6,12,3),pt(18,19,3),"m8.59 13.51 6.83 3.98","m15.41 6.51-6.82 3.98"]},link:{cat:"media",name:"Enlace",d:["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71","M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"]},"external-link":{cat:"media",name:"Abrir enlace",d:["M15 3h6v6","M10 14 21 3","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"]},download:{cat:"media",name:"Descargar",d:["M12 15V3","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","m7 10 5 5 5-5"]},bookmark:{cat:"general",name:"Guardar",d:["m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"]},flag:{cat:"places",name:"Bandera",d:["M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"]},lightbulb:{cat:"information",name:"Idea",d:["M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5","M9 18h6","M10 22h4"]},wifi:{cat:"home",name:"Wi-Fi",d:["M12 20h.01","M2 8.82a15 15 0 0 1 20 0","M5 12.859a10 10 0 0 1 14 0","M8.5 16.429a5 5 0 0 1 7 0"]},droplet:{cat:"home",name:"Agua",d:["M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"]},flame:{cat:"home",name:"Fuego",d:["M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"]},snowflake:{cat:"home",name:"Clima",d:["M2 12h20","M12 2v20","m20 16-4-4 4-4","m4 8 4 4-4 4","m16 4-4 4-4-4","m8 20 4-4 4 4"]},globe:{cat:"places",name:"Mundo",d:[pt(12,12,10),"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20","M2 12h20"]},circle:{cat:"general",name:"Círculo",d:[pt(12,12,10)]},square:{cat:"general",name:"Cuadro",d:[kt(3,3,18,18,2)]},dot:{cat:"general",name:"Punto",d:[pt(12,12,3)]},ellipsis:{cat:"general",name:"Más opciones",d:[Nt(12,12),Nt(19,12),Nt(5,12)]}};Wi.info.bare=["M12 17v-6",Nt(12,7.4)],["circle-help","circle-alert","circle-check"].forEach(n=>{Wi[n].bare=Wi[n].d.slice(1)});const Eu=Object.keys(Wi),Fb={info:"info",price:"dollar-sign",nav:"arrow-right"};function Au(n,e){return e&&Wi[e]?e:Fb[n]||"info"}function cs(n,{size:e,color:t,strokeWidth:i=2,bare:r=!1}={}){const a=Wi[n]||Wi.info,s=document.createElementNS(Su,"svg");return s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("fill","none"),s.setAttribute("stroke",t||"currentColor"),s.setAttribute("stroke-width",String(i)),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),s.setAttribute("aria-hidden","true"),s.setAttribute("focusable","false"),e&&(s.setAttribute("width",String(e)),s.setAttribute("height",String(e))),(r&&a.bare?a.bare:a.d).forEach(l=>{const o=document.createElementNS(Su,"path");o.setAttribute("d",l),s.appendChild(o)}),s}const Ub=720,kb=36,Ob=.9;function An(n,e){const t=Number.isFinite(Number(n))?Number(n):0;return e?Math.max(kb,Math.round(t*Ob*10)/10):t}const Ll=n=>n>0&&n<Ub;function Tn(n,e){const t={...n};return Object.entries(e||{}).forEach(([i,r])=>{r!=null&&(t[i]=r)}),t}const Bb=(n,e,t)=>Math.min(t,Math.max(e,n)),Yt=(n,e)=>Number.isFinite(Number(n))&&n!==""&&n!==null?Number(n):e,Fr=(n,e,t,i)=>Bb(Yt(n,i),e,t),zb={info:"Información",price:"Precio",nav:"Ir a"},Tu=n=>zb[n]||"Información";function Xe(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t!=null&&t!==""&&(i.textContent=t),i}function Ot(n,e={}){const t=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.entries(e).forEach(([i,r])=>t.setAttribute(i,String(r))),t}function an(n,e,t){const i=Xe("div",`hs-t hs-t-${n}`),r=t.hotspot?.title||e.label||"Hotspot";return t.thumb?i.setAttribute("aria-hidden","true"):(i.setAttribute("role","button"),i.tabIndex=0,i.setAttribute("aria-label",r),i.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i.click())})),Hb(i,e,t),i}function Hb(n,e,t){const i=An(e.size,t.mobile),r={"--hs-size":`${i}px`,"--hs-fill":e.fill,"--hs-stroke":e.stroke,"--hs-sw":`${Yt(e.strokeWidth,1)}px`,"--hs-icon":e.iconColor,"--hs-accent":e.accent,"--hs-radius":e.radius!=null?`${Yt(e.radius,0)}px`:void 0};return Object.entries(r).forEach(([a,s])=>s!=null&&s!==""&&n.style.setProperty(a,s)),n.style.opacity=String(Fr(e.opacity,0,1,1)),e.markerWidth>0&&(n.style.width=`${e.markerWidth}px`),e.animate===!1&&n.classList.add("hs-still"),i}function ti(n,e,{size:t,strokeWidth:i=2,bare:r=!1}={}){const a=Xe("span","hs-icon");return n.glyph?(a.classList.add("hs-glyph"),a.textContent=n.glyph,a):(a.appendChild(cs(Au(e.hotspot?.type,n.icon),{size:t,strokeWidth:i,bare:r})),a)}const wu=24,Cu=520;function Vb(n,e){const t=Number(e.labelWidth),i=Number(e.labelHeight);t>0&&(n.style.width=`${Math.min(Cu,Math.max(wu,t))}px`,n.style.maxWidth="none"),i>0&&(n.style.minHeight=`${Math.max(5,i)}px`),e.labelColor&&(n.style.color=e.labelColor),e.labelFill&&(n.style.background=e.labelFill),e.labelFont&&(n.style.fontFamily=En(e.labelFont)),e.labelFontSize!=null&&(n.style.fontSize=`${Fr(e.labelFontSize,6,96,12)}px`),e.labelRadius!=null&&(n.style.borderRadius=`${Fr(e.labelRadius,0,100,24)}px`),e.labelPaddingX!=null&&(n.style.paddingInline=`${Fr(e.labelPaddingX,0,100,14)}px`),e.labelPaddingY!=null&&(n.style.paddingBlock=`${Fr(e.labelPaddingY,0,100,7)}px`),e.labelUppercase!=null&&(n.style.textTransform=e.labelUppercase?"uppercase":"none")}function Bn(n,e){const t=n.showLabel||"hover",i=n.label||e.hotspot?.title;if(t==="never"||!i)return null;const r=Xe("span",`hs-label${t==="always"?" hs-label--always":""}`);n.labelPosition&&(r.dataset.position=n.labelPosition);const a=Xe("span","hs-label-chip",i);return Vb(a,n),r.append(Xe("i","hs-label-line"),a),r}function sn(n){const{build:e,...t}=n,i=r=>Tn(n.defaults,r);return{kind:"hotspot",...t,render(r,a={}){return e(i(r),a)},update(r,a,s={}){const l=e(i(a),s);r.className=l.className,r.style.cssText=l.style.cssText,r.setAttribute("aria-label",l.getAttribute("aria-label")||""),r.replaceChildren(...l.childNodes)}}}const Kt=(n,e,t=1)=>({key:"size",type:"range",label:"Tamaño",min:n,max:e,step:t,toolbar:!0}),hn={key:"opacity",type:"range",label:"Opacidad",min:.3,max:1,step:.05},zn={key:"icon",type:"icon",label:"Icono"},Hn={key:"label",type:"text",label:"Texto"},Vn={key:"showLabel",type:"select",label:"Etiqueta",options:[{value:"hover",label:"Al pasar el mouse"},{value:"always",label:"Siempre visible"},{value:"never",label:"Nunca"}]},ni={key:"labelColor",type:"color",label:"Color del texto de la etiqueta"},ii={key:"labelFill",type:"color",label:"Fondo de la etiqueta"},Ru=[{key:"labelFont",type:"font",label:"Fuente de la etiqueta"},{key:"labelFontSize",type:"range",label:"Tamaño de texto",min:6,max:96,step:1},{key:"labelRadius",type:"range",label:"Radio de la píldora",min:0,max:100,step:1},{key:"labelPaddingX",type:"range",label:"Padding horizontal",min:0,max:100,step:1},{key:"labelPaddingY",type:"range",label:"Padding vertical",min:0,max:100,step:1},{key:"labelUppercase",type:"toggle",label:"Etiqueta en mayúsculas"},{key:"labelPosition",type:"select",label:"Posición de la etiqueta",options:[{value:"right",label:"Derecha"},{value:"left",label:"Izquierda"},{value:"top",label:"Arriba"},{value:"bottom",label:"Abajo"},{value:"center",label:"Sobre el marcador"}]}],Pu={key:"animate",type:"toggle",label:"Animación"},Gb={nav:"→",price:"$",info:"i"};function Lu(n,e,t){const{hotspot:i}=t,r=An(e.size??30,t.mobile);n.className=`hs-marker-btn hs-marker-${i.type}`,n.setAttribute("aria-label",i.title||"Hotspot"),n.replaceChildren(),e.icon?n.appendChild(cs(Au(i.type,e.icon),{size:Math.round(r*.55),strokeWidth:2.2})):n.textContent=e.glyph||Gb[i.type]||"i",Object.assign(n.style,{width:`${r}px`,height:`${r}px`,fontSize:`${Math.round(r*13/30*10)/10}px`,background:e.fill??"var(--tour-accent, #4da3ff)",border:`${e.strokeWidth??1.5}px solid ${e.stroke??"rgba(255, 255, 255, 0.85)"}`,color:e.iconColor??"#fff",opacity:String(Fr(e.opacity,.3,1,1))}),e.radius!=null&&e.radius!==""&&(n.style.borderRadius=`${Yt(e.radius,50)}${e.radius===50?"%":"px"}`),e.animate&&(n.classList.add("hs-pulsing"),n.appendChild(Xe("span","hs-pulse-ring")));const a=Bn({...e,showLabel:e.showLabel??"never"},t);a&&n.appendChild(a)}const Il={size:30,fill:"var(--tour-accent, #4da3ff)",stroke:"rgba(255, 255, 255, 0.85)",strokeWidth:1.5,iconColor:"#ffffff",icon:"",glyph:"",label:"",showLabel:"never",opacity:1,radius:50,animate:!1},Wb={id:"circle-icon",kind:"hotspot",name:"Círculo con icono",category:"Hotspots",defaults:Il,slots:[{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"stroke",type:"color",label:"Borde",toolbar:!0},{key:"iconColor",type:"color",label:"Icono",toolbar:!0},Kt(24,72),{key:"strokeWidth",type:"range",label:"Grosor del borde",min:0,max:6,step:.5},{key:"radius",type:"range",label:"Redondeo (50 = círculo)",min:4,max:50,step:1},zn,Hn,Vn,ni,ii,hn,Pu],render(n,e={}){const t=document.createElement("button");return t.type="button",e.thumb&&(t.tabIndex=-1),Lu(t,Tn(Il,n),e),t},update(n,e,t={}){Lu(n,Tn(Il,e),t)}},Xb=new URL(""+new URL("assets/IconButton_0CC0B736_1E04_9CFD_41A7_A2CEB8BDE58C-Ck632_FW.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,$b=new URL(""+new URL("assets/IconButton_0CC0B736_1E04_9CFD_41A7_A2CEB8BDE58C_pressed-BHXf27d9.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,qb=new URL(""+new URL("assets/IconButton_0A13CDA2_1E05_8F95_41A0_066DB339AE25-CUPcYPuJ.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,Yb=new URL(""+new URL("assets/IconButton_0A13CDA2_1E05_8F95_41A0_066DB339AE25_pressed-FZaXw4-R.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,Kb=new URL(""+new URL("assets/IconButton_0D964227_1E04_B49A_41B3_2A1977ED970C-BqFGzIaN.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,Zb=new URL(""+new URL("assets/IconButton_046611F5_1E0D_777F_41A1_ADB6AD6143E9-dmyzbHHp.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,Jb=new URL(""+new URL("assets/IconButton_046611F5_1E0D_777F_41A1_ADB6AD6143E9_rollover-v4WmuIGh.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,Qb=new URL(""+new URL("assets/IconButton_D2781E43_E099_BE30_41DB_3A0383A5E5C4-XtKHQb7D.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,jb=new URL(""+new URL("assets/Image_9DB595DE_B48B_96FF_41B6_CB3B5F92E324_en-DrtWZrtU.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,e_=new URL(""+new URL("assets/res_B32E2B85_A4CC_D58D_41E0_2B0762CB2731_0-Cduub7s9.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href,ot&&ot.tagName.toUpperCase()==="SCRIPT"&&ot.src||new URL("tour-runtime.iife.js",document.baseURI).href).href,Xi={audio:Xb,muted:$b,guided:qb,paused:Yb,call:Kb,back:Zb,backHover:Jb,map:Qb,welcome:jb,ring:e_},t_=n=>n?.startsWith("builtin:hfarm/")?Xi[n.slice(14)]:null,n_=["none","rise","fade","blur"],i_=180,r_=85;function ds(n,e){return{...n?.defaults||{},...e&&typeof e=="object"?e:{}}}function a_(n,e,{stagger:t=!1,index:i=0,reduced:r=!1}={}){if(r)return null;const a=n?.animation,s=a&&typeof a=="object"?a:t?{kind:"rise"}:e?.defaults?.animation,l=n_.includes(s?.kind)?s.kind:"none";if(l==="none")return null;const o=Number.isFinite(s?.delayMs)?Math.max(0,s.delayMs):0,c=t?i_+r_*i:0;return{kind:l,delayMs:o+c}}function $i(n,e=""){if(typeof n!="string")return e;const t=n.trim();return!t||t.length>200||/[;{}<>\\]|url\s*\(|expression\s*\(|@import|[\u0000-\u001f]/i.test(t)?e:t}function mt(n,e,t=-1/0,i=1/0){const r=typeof n=="number"?n:Number.parseFloat(n);return Number.isFinite(r)?Math.max(t,Math.min(i,r)):e}function s_(n,e=!1){const t=n&&typeof n=="object"?n:{},i=$i(t.from,"rgba(8,14,26,.86)"),r=$i(t.to,"rgba(8,14,26,.3)");return{background:`linear-gradient(${mt(e?t.mobileAngle??180:t.angle??90,90,-360,360)}deg, ${i} 0%, ${r} 100%)`,opacity:mt(t.opacity,1,0,1)}}function o_(n){const e=n&&typeof n=="object"?n:{};if(e.on===!1)return null;const t=mt(e.size,68,8,400),i=`rgba(255,255,255,${mt(e.opacity,.055,0,1)})`,r="radial-gradient(ellipse 80% 70% at 50% 45%, #000 20%, transparent 78%)";return{backgroundImage:`linear-gradient(${i} 1px, transparent 1px), linear-gradient(90deg, ${i} 1px, transparent 1px)`,backgroundSize:`${t}px ${t}px`,maskImage:r,webkitMaskImage:r}}function St(n,e){if(typeof e!="string"||!e)return null;const t=t_(e);if(t)return t;const i=e.startsWith("asset:")?e.slice(6):e,r=n?.assets?.[i]?.url;return typeof r=="string"&&r?r:!/[\u0000-\u0020]/.test(e)&&/^(https?:\/\/|blob:|\/uploads\/|(?:\.\/)?assets\/hotspots\/)/i.test(e)?e:null}const l_=sn({id:"hotspot-image",name:"Imagen propia",category:"Hotspots",defaults:{size:52,opacity:1,anchorX:.5,anchorY:.5,hoverScale:1.15,hoverBehavior:"scale",showLabel:"hover",labelPosition:"top",labelFill:"#D13A2F",labelColor:"#ffffff",labelRadius:24,labelPaddingX:14,labelPaddingY:7,labelFont:"Inter",labelFontSize:12,labelUppercase:!0},slots:[Kt(24,240),{key:"anchorX",type:"range",label:"Ancla horizontal",min:0,max:1,step:.05},{key:"anchorY",type:"range",label:"Ancla vertical",min:0,max:1,step:.05},{key:"hoverScale",type:"range",label:"Escala al pasar el mouse",min:.1,max:3,step:.05},{key:"hoverBehavior",type:"select",label:"Al pasar el mouse",toolbar:!0,options:[{value:"scale",label:"Ampliar imagen"},{value:"replace",label:"Sustituir imagen por el nombre"}]},Vn,ii,ni,...Ru],build(n,e){const t=an("image",n,e),i=St(e.doc,n.markerImage),r=i?Xe("img","hs-image-graphic"):Xe("span","hs-image-graphic hs-image-placeholder","▧");i&&(r.src=i,r.alt="",r.draggable=!1),t.style.setProperty("--hs-image-hover",String(n.hoverScale)),t.appendChild(r);const a=Bn(n.hoverBehavior==="replace"?{...n,labelPosition:"center"}:n,e);return a&&n.hoverBehavior==="replace"&&t.classList.add("hs-image-label-replace"),a&&t.appendChild(a),t}}),c_=sn({id:"navigation-ring",name:"Dona de navegación H-Farm",category:"Hotspots",defaults:{size:40,angularSize:4,referenceFov:110,opacity:1,showLabel:"always",labelPosition:"bottom",labelColor:"#ffffff",labelFill:"transparent",labelRadius:0,labelPaddingX:0,labelPaddingY:0,labelFontSize:17,labelUppercase:!1},slots:[Kt(12,160),Vn,...Ru.map(n=>n.key==="labelPosition"?{...n,toolbar:!0}:n)],build(n,e){const t=an("navigation-ring",n,e);if(!e.thumb&&n.angularSize>0){const s=2*Math.tan(n.angularSize*n.size/40*Math.PI/360)/(2*Math.tan(n.referenceFov*Math.PI/360));t.style.setProperty("--hs-size",`calc(var(--tour-viewport-width, 1440px) * ${s} * var(--tour-marker-zoom, 1))`),t.style.setProperty("--hs-angular-font",`${n.labelFontSize/n.size}`)}const i=Xe("img","hs-navigation-ring-image");i.src=Xi.ring,i.alt="",i.draggable=!1,t.append(i);const r=Bn(n,e);return r&&t.append(r),t}}),Iu="#111f394d",d_="#1729488c",u_=sn({id:"ring-sweep",name:"Anillo con barrido",category:"Hotspots",defaults:{size:74,fill:Iu,stroke:"#ffffff",strokeWidth:3.6,iconColor:"#101a2b",icon:"info",glyph:"",label:"",showLabel:"hover",opacity:1,animate:!0},slots:[{key:"fill",type:"color",label:"Placa",toolbar:!0},{key:"stroke",type:"color",label:"Anillo y disco",toolbar:!0},{key:"iconColor",type:"color",label:"Icono",toolbar:!0},Kt(36,120),{key:"strokeWidth",type:"range",label:"Grosor del anillo",min:1.5,max:6,step:.1},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Anillo girando"}],build(n,e){const t=an("ring-sweep",n,e);t.style.setProperty("--hs-fill-hover",n.fill===Iu?d_:n.fill);const i=Ot("svg",{viewBox:"0 0 64 64",class:"hs-rs-svg","aria-hidden":"true"});i.append(Ot("circle",{class:"hs-rs-arc",cx:32,cy:32,r:26}),Ot("circle",{class:"hs-rs-plate",cx:32,cy:32,r:21}),Ot("circle",{class:"hs-rs-disc",cx:32,cy:32,r:14})),t.appendChild(i);const r=An(n.size,e.mobile),a=ti(n,e,{size:Math.round(r*23/74),strokeWidth:2.4,bare:!0});a.classList.add("hs-rs-glyph"),t.appendChild(a);const s=Bn(n,e);return s&&t.appendChild(s),t}});function f_(){const n=Ot("svg",{viewBox:"0 0 24 24",width:14,height:14,fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:"hs-co-arrow"});return n.append(Ot("path",{d:"M5 12h14"}),Ot("path",{d:"m12 5 7 7-7 7"})),n}const h_=sn({id:"callout",name:"Línea guía y tarjeta",category:"Hotspots",defaults:{size:30,fill:"rgba(20,37,68,.5)",stroke:"#ffffff",strokeWidth:1.2,iconColor:"#ffffff",kicker:"",cta:"",dx:150,dy:-196,opacity:1,animate:!0},slots:[{key:"fill",type:"color",label:"Tarjeta",toolbar:!0},{key:"stroke",type:"color",label:"Línea y ancla",toolbar:!0},{key:"iconColor",type:"color",label:"Texto",toolbar:!0},Kt(16,100),{key:"kicker",type:"text",label:"Etiqueta superior"},{key:"cta",type:"text",label:"Botón"},{key:"dx",type:"range",label:"Distancia horizontal",min:-800,max:800,step:1},{key:"dy",type:"range",label:"Distancia vertical",min:-800,max:800,step:1},hn,Pu],build(n,e){const t=e.hotspot||{},i=an("callout",n,e),r=e.mobile&&e.mode!=="edit",a=r?Math.min(Yt(n.dx,150),56):Yt(n.dx,150),s=r?Math.max(Yt(n.dy,-196),-120):Yt(n.dy,-196);i.classList.toggle("hs-co-mobile",!!e.mobile),i.classList.toggle("hs-co-edit",e.mode==="edit");const l=Xe("span","hs-co-anchor");e.mode==="edit"&&(l.title="Arrastra el punto para mover todo el hotspot"),l.append(Xe("span","hs-co-ring"),Xe("span","hs-co-core"));const o=Xe("span","hs-co-origin"),c=Math.hypot(a,s),u=Ot("svg",{class:"hs-co-line",width:1,height:1,"aria-hidden":"true"});u.appendChild(Ot("line",{x1:0,y1:0,x2:a,y2:s,style:`--len:${c.toFixed(1)}`}));const f=Xe("span","hs-co-card");n.cardWidth&&(f.style.width=`${n.cardWidth}px`),n.cardScale&&(f.style.scale=String(n.cardScale),f.style.transformOrigin="bottom left"),e.mode==="edit"&&(f.title="Arrastra para mover solo la tarjeta"),f.style.left=`${a}px`,f.style.top=`${s}px`;const d=Xe("span","hs-co-head");d.appendChild(Xe("span","hs-co-kicker",n.kicker||Tu(t.type))),t.type==="price"&&t.price&&d.appendChild(Xe("span","hs-co-price",t.price));const m=Xe("span","hs-co-foot");return m.append(Xe("span","",n.cta||(t.type==="nav"?"Entrar":"Ver detalle")),f_()),f.append(d,Xe("span","hs-co-title",t.title||"Hotspot"),m),o.append(u,f),i.append(l,o),i}}),Du="var(--tour-accent, #4da3ff)",p_=sn({id:"pulse-dot",name:"Punto con pulso",category:"Hotspots",defaults:{size:22,fill:Du,stroke:"#ffffff",strokeWidth:2.5,iconColor:"#ffffff",icon:"",glyph:"",label:"",showLabel:"hover",opacity:1,animate:!0},slots:[{key:"fill",type:"color",label:"Punto y ondas",toolbar:!0},{key:"stroke",type:"color",label:"Borde",toolbar:!0},Kt(14,48),{key:"strokeWidth",type:"range",label:"Grosor del borde",min:0,max:6,step:.5},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Ondas"}],build(n,e){const t=an("pulse-dot",n,e);t.append(Xe("span","hs-pd-wave"),Xe("span","hs-pd-wave hs-pd-wave--2"));const i=Xe("span","hs-pd-core");(n.icon||n.glyph)&&i.appendChild(ti(n,e,{size:Math.round(An(n.size,e.mobile)*.5),strokeWidth:2.4})),t.appendChild(i);const r=Bn(n,e);return r&&t.appendChild(r),t}}),m_=sn({id:"square-border",name:"Cuadrado con borde",category:"Hotspots",defaults:{size:38,fill:"rgba(15,23,42,.42)",stroke:"#ffffff",strokeWidth:2,iconColor:"#ffffff",icon:"",glyph:"",radius:9,label:"",showLabel:"hover",opacity:1,animate:!1},slots:[{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"stroke",type:"color",label:"Borde",toolbar:!0},{key:"iconColor",type:"color",label:"Icono",toolbar:!0},Kt(24,80),{key:"strokeWidth",type:"range",label:"Grosor del borde",min:0,max:6,step:.5},{key:"radius",type:"range",label:"Redondeo",min:0,max:24,step:1},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Respirar"}],build(n,e){const t=an("square-border",n,e);t.appendChild(ti(n,e,{size:Math.round(An(n.size,e.mobile)*.5),strokeWidth:2.2}));const i=Bn(n,e);return i&&t.appendChild(i),t}}),g_=sn({id:"corner-brackets",name:"Esquinas",category:"Hotspots",defaults:{size:46,fill:"#ffffff",stroke:"#ffffff",strokeWidth:3,iconColor:"#ffffff",icon:"",glyph:"",label:"",showLabel:"hover",opacity:1,animate:!0},slots:[{key:"stroke",type:"color",label:"Esquinas",toolbar:!0},{key:"fill",type:"color",label:"Punto central",toolbar:!0},Kt(26,90),{key:"strokeWidth",type:"range",label:"Grosor",min:1.5,max:6,step:.5},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Latido"}],build(n,e){const t=an("corner-brackets",n,e),i=Ot("svg",{viewBox:"0 0 48 48",class:"hs-cb-svg","aria-hidden":"true"}),r=Ot("g",{class:"hs-cb-corners"});if(["M4 15V8a4 4 0 0 1 4-4h7","M33 4h7a4 4 0 0 1 4 4v7","M44 33v7a4 4 0 0 1-4 4h-7","M15 44H8a4 4 0 0 1-4-4v-7"].forEach(s=>r.appendChild(Ot("path",{d:s}))),i.appendChild(r),!n.icon&&!n.glyph&&i.appendChild(Ot("circle",{class:"hs-cb-dot",cx:24,cy:24,r:3.4})),t.appendChild(i),n.icon||n.glyph){const s=ti(n,e,{size:Math.round(An(n.size,e.mobile)*.4),strokeWidth:2.2});s.classList.add("hs-center"),t.appendChild(s)}const a=Bn(n,e);return a&&t.appendChild(a),t}}),v_=sn({id:"nav-arrow",name:"Flecha de navegación",category:"Hotspots",defaults:{size:48,fill:"rgba(15,23,42,.55)",stroke:"#ffffff",strokeWidth:2,iconColor:"#ffffff",icon:"arrow-up",glyph:"",rotate:0,label:"",showLabel:"hover",opacity:1,animate:!0},slots:[{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"stroke",type:"color",label:"Borde",toolbar:!0},{key:"iconColor",type:"color",label:"Flecha",toolbar:!0},Kt(32,90),{key:"strokeWidth",type:"range",label:"Grosor del borde",min:0,max:5,step:.5},{key:"rotate",type:"range",label:"Dirección (grados)",min:0,max:359,step:5},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Flecha avanzando"}],build(n,e){const t=an("nav-arrow",n,e);t.style.setProperty("--hs-rot",`${Yt(n.rotate,0)}deg`);const i=Xe("span","hs-na-dir"),r=ti(n,e,{size:Math.round(An(n.size,e.mobile)*.5),strokeWidth:2.6});r.classList.add("hs-na-arrow"),i.appendChild(r),t.appendChild(i);const a=Bn(n,e);return a&&t.appendChild(a),t}}),b_=sn({id:"map-pin",name:"Pin de mapa",category:"Hotspots",defaults:{size:36,fill:Du,stroke:"#ffffff",strokeWidth:2,iconColor:"#ffffff",icon:"",glyph:"",label:"",showLabel:"hover",opacity:1,animate:!1},slots:[{key:"fill",type:"color",label:"Pin",toolbar:!0},{key:"stroke",type:"color",label:"Borde",toolbar:!0},{key:"iconColor",type:"color",label:"Icono",toolbar:!0},Kt(26,72),{key:"strokeWidth",type:"range",label:"Grosor del borde",min:0,max:5,step:.5},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Rebotar"}],build(n,e){const t=an("map-pin",n,e),i=Ot("svg",{viewBox:"0 0 32 44",class:"hs-mp-svg","aria-hidden":"true"});i.append(Ot("ellipse",{class:"hs-mp-shadow",cx:16,cy:41.5,rx:6,ry:2}),Ot("path",{class:"hs-mp-body",d:"M16 2C8.8 2 3 7.7 3 14.8c0 9.4 10.2 20 12.2 22.1a1.1 1.1 0 0 0 1.6 0C18.8 34.8 29 24.2 29 14.8 29 7.7 23.2 2 16 2z"})),t.appendChild(i);const r=ti(n,e,{size:Math.round(An(n.size,e.mobile)*.42),strokeWidth:2.4});r.classList.add("hs-mp-icon"),t.appendChild(r);const a=Bn(n,e);return a&&t.appendChild(a),t}}),__=sn({id:"icon-only",name:"Solo icono",category:"Hotspots",defaults:{size:34,fill:"transparent",stroke:"#ffffff",strokeWidth:2.2,iconColor:"#ffffff",icon:"",glyph:"",label:"",showLabel:"hover",opacity:1,animate:!1},slots:[{key:"iconColor",type:"color",label:"Icono",toolbar:!0},Kt(20,80),{key:"strokeWidth",type:"range",label:"Grosor del trazo",min:1,max:4,step:.2},zn,Hn,Vn,ni,ii,hn,{key:"animate",type:"toggle",label:"Latido"}],build(n,e){const t=an("icon-only",n,e);t.appendChild(ti(n,e,{size:An(n.size,e.mobile),strokeWidth:Yt(n.strokeWidth,2.2)}));const i=Bn(n,e);return i&&t.appendChild(i),t}}),Nu="var(--tour-accent, #4da3ff)",x_=sn({id:"pill-label",name:"Pastilla con texto",category:"Hotspots",defaults:{size:36,fill:"rgba(17,31,57,.82)",stroke:"rgba(255,255,255,.22)",strokeWidth:1,iconColor:"#ffffff",accent:Nu,icon:"",glyph:"",label:"",opacity:1,animate:!1},slots:[{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"accent",type:"color",label:"Burbuja",toolbar:!0},{key:"iconColor",type:"color",label:"Texto",toolbar:!0},Kt(28,56),{key:"stroke",type:"color",label:"Borde"},zn,{...Hn,label:"Texto (vacío = título)"},hn],build(n,e){const t=an("pill-label",n,e),i=Xe("span","hs-pl-bubble");return i.appendChild(ti(n,e,{size:Math.round(An(n.size,e.mobile)*.5),strokeWidth:2.4})),t.append(i,Xe("span","hs-pl-text",n.label||e.hotspot?.title||"Hotspot")),t}}),y_=sn({id:"price-tag",name:"Etiqueta de precio",category:"Hotspots",defaults:{size:34,fill:"#c98a12",iconColor:"#ffffff",icon:"tag",glyph:"",label:"",opacity:1,animate:!1},slots:[{key:"fill",type:"color",label:"Etiqueta",toolbar:!0},{key:"iconColor",type:"color",label:"Texto",toolbar:!0},Kt(28,56),zn,{...Hn,label:"Texto (vacío = precio)"},hn],build(n,e){const t=e.hotspot||{},i=an("price-tag",n,e),r=Xe("span","hs-pt-body");return r.append(ti(n,e,{size:Math.round(An(n.size,e.mobile)*.46),strokeWidth:2.2}),Xe("span","hs-pt-text",n.label||t.price||t.title||"Precio")),i.appendChild(r),i}}),M_=sn({id:"hotspot-card",name:"Tarjeta flotante",category:"Hotspots",defaults:{cardHeight:0,cardBottom:12,size:200,fill:"rgba(17,31,57,.78)",stroke:"rgba(255,255,255,.16)",strokeWidth:1,iconColor:"#ffffff",accent:Nu,radius:10,showImage:!0,showDescription:!0,opacity:1,animate:!1},slots:[{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"iconColor",type:"color",label:"Texto",toolbar:!0},{key:"accent",type:"color",label:"Precio",toolbar:!0},Kt(150,300,5),{key:"radius",type:"range",label:"Redondeo",min:0,max:24,step:1},{key:"showImage",type:"toggle",label:"Mostrar imagen"},{key:"showDescription",type:"toggle",label:"Mostrar descripción"},hn],build(n,e){const t=e.hotspot||{},i=an("hotspot-card",n,e);i.style.setProperty("--hs-size",`${e.mobile?Math.min(Yt(n.size,200),168):Yt(n.size,200)}px`),Yt(n.cardHeight,0)>0&&i.style.setProperty("--hs-fc-h",`${Yt(n.cardHeight,0)}px`),Number.isFinite(Number(n.cardBottom))&&Number(n.cardBottom)!==12&&i.style.setProperty("--hs-fc-bottom",`${Math.max(0,Number(n.cardBottom))}px`);const r=Xe("span","hs-fc-card");if(n.showImage!==!1&&t.image){const s=document.createElement("img");s.src=t.image,s.alt="",s.draggable=!1,s.className="hs-fc-img",r.appendChild(s)}const a=Xe("span","hs-fc-body");return a.appendChild(Xe("span","hs-fc-title",t.title||"Hotspot")),n.showDescription!==!1&&t.description&&a.appendChild(Xe("span","hs-fc-desc",t.description)),t.type==="price"&&t.price&&a.appendChild(Xe("span","hs-fc-price",t.price)),r.appendChild(a),i.append(r,Xe("span","hs-fc-stem"),Xe("span","hs-fc-tail"),Xe("span","hs-fc-dot")),i}}),S_=[Wb,l_,c_,u_,p_,m_,g_,x_,h_,v_,y_,b_,__,M_];function de(n,e={},t=[]){const i=document.createElement(n);return Object.entries(e).forEach(([r,a])=>{a==null||a===!1||(r==="className"?i.className=a:r==="text"?i.textContent=a:r==="style"?Object.assign(i.style,a):r.startsWith("on")&&typeof a=="function"?i.addEventListener(r.slice(2).toLowerCase(),a):i.setAttribute(r,a===!0?"":a))}),[].concat(t).forEach(r=>{r!=null&&r!==!1&&i.append(r)}),i}function Fu(n,{lift:e=!1}={}){queueMicrotask(()=>{const t=n.parentElement;if(!t){n.classList.add("is-ready");return}if(e){const a=t.style.zIndex;t.style.zIndex="2147483000";const s=new MutationObserver(()=>{n.parentElement!==t&&(t.style.zIndex=a,s.disconnect())});s.observe(t,{childList:!0})}const i=()=>n.classList.toggle("is-mobile",Ll(t.clientWidth));if(i(),n.classList.add("is-ready"),typeof ResizeObserver>"u")return;const r=new ResizeObserver(()=>n.isConnected?i():r.disconnect());r.observe(t)})}function E_(n,e){if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches||n.classList.contains("is-closing"))return e?.();n.classList.add("is-closing");let i=!1;const r=()=>{i||(i=!0,e?.())};n.addEventListener("animationend",r,{once:!0}),setTimeout(r,420)}function Uu(n,e,t={},i){const{hotspot:r,onClose:a}=i;n.className=`tour-rt-sheet tour-rt-sheet--${e} tour-rt-sheet--${t.tone==="light"?"light":"dark"}${n.classList.contains("is-ready")?" is-ready":""}${n.classList.contains("is-mobile")?" is-mobile":""}`,n.setAttribute("role","dialog"),n.setAttribute("aria-label",r.title||"Detalle");const s=Xe("button","tour-rt-sheet-close");s.type="button",s.setAttribute("aria-label","Cerrar"),s.appendChild(cs("x",{size:18,strokeWidth:2})),s.addEventListener("click",u=>{u.stopPropagation(),E_(n,a)});const l=Xe("div","tour-rt-sheet-head"),o=Xe("div","tour-rt-sheet-titles");o.append(Xe("span","tour-rt-sheet-kicker",t.kicker||Tu(r.type)),Xe("h2","tour-rt-sheet-title",r.title)),l.append(Xe("span","tour-rt-sheet-grab"),o,s);const c=Xe("div","tour-rt-sheet-body");if(r.image){const u=document.createElement("img");u.src=r.image,u.alt="",u.className="tour-rt-sheet-img",c.appendChild(u)}r.type==="price"&&r.price&&c.appendChild(Xe("p","tour-rt-sheet-price",r.price)),r.description&&c.appendChild(Xe("p","tour-rt-sheet-desc",r.description)),n.replaceChildren(l,c)}function ku(n,e,t){return{id:n,kind:"panel",name:t,category:"Paneles",defaults:{tone:"dark",kicker:""},slots:[{key:"tone",type:"select",label:"Tono",options:[{value:"dark",label:"Oscuro"},{value:"light",label:"Claro"}]},{key:"kicker",type:"text",label:"Etiqueta superior"}],render(i,r){const a=Xe("div","");return a.setAttribute("data-ui",""),Uu(a,e,i,r),Fu(a,{lift:!0}),a},update(i,r,a){Uu(i,e,r,a)}}}const A_=ku("side-sheet","side","Hoja lateral"),T_=ku("bottom-sheet","bottom","Hoja inferior");function Ou(n,e={},t){const{hotspot:i,onClose:r}=t,a=n.classList.contains("is-mobile")?" is-mobile":"";n.className=`tour-rt-card tour-rt-card--${e.tone==="light"?"light":"dark"}${a}`;const s=[de("button",{type:"button",className:"tour-rt-card-close","aria-label":"Cerrar",text:"×",onClick:r}),de("h3",{text:i.title}),i.image?de("img",{src:i.image,alt:""}):null,i.type==="price"&&i.price?de("p",{},de("strong",{className:"tour-rt-card-price",text:i.price})):null,i.description?de("p",{text:i.description}):null];n.replaceChildren(...s.filter(Boolean))}const w_=[{id:"floating-card",kind:"panel",name:"Tarjeta flotante",category:"Paneles",defaults:{tone:"dark"},slots:[{key:"tone",type:"select",label:"Tono",options:[{value:"dark",label:"Oscuro"},{value:"light",label:"Claro"}]}],render(n,e){const t=de("div",{"data-ui":""});return Ou(t,n,e),Fu(t),t},update(n,e,t){Ou(n,e,t)}},A_,T_],qi={surface:"rgba(20,37,68,.5)",tint:"rgba(20,37,68,.5)",blur:24,border:"rgba(255,255,255,.15)",borderWidth:1,shadow:!0,shadowIntensity:.6,text:"#f6f8fb",secondaryText:"rgba(246,248,251,.72)",accent:"#4c8dff",onAccent:"#ffffff",radius:5,headingFont:"Inter",bodyFont:"Inter",glass:!0},us=(n,e)=>{const t={...qi,...e};return{id:n,tokens:t,styles:{card:{color:t.text,secondaryColor:t.secondaryText,font:t.bodyFont,headingFont:t.headingFont,fill:t.surface,glass:t.glass,blur:t.blur,tint:t.tint,borderColor:t.border,borderWidth:t.borderWidth,shadow:t.shadow,shadowIntensity:t.shadowIntensity,radius:t.radius},button:{fill:t.accent,color:t.onAccent,radius:t.radius},title:{color:t.text,weight:n==="bold"?800:600,font:t.headingFont},text:{color:t.secondaryText,font:t.bodyFont},label:{color:t.secondaryText,font:"mono"},icon:{color:t.accent},shape:{fill:t.accent,glass:!1,blur:t.blur,tint:t.tint,borderColor:t.border,borderWidth:0,shadow:!1,shadowIntensity:t.shadowIntensity,radius:t.radius}}}},Bu=[us("glass-dark",{accent:"#ffffff",onAccent:"#101a2b"}),us("minimal-light",{surface:"#ffffff",tint:"rgba(255,255,255,.6)",glass:!1,blur:0,border:"rgba(26,26,24,.12)",shadowIntensity:.12,text:"#1a1a18",secondaryText:"#55534e",accent:"#1a1a18",onAccent:"#ffffff",radius:8,headingFont:"DM Sans",bodyFont:"DM Sans"}),us("bold",{surface:"#171717",tint:"rgba(17,17,17,.8)",glass:!1,blur:0,border:"#ffd400",shadow:!1,text:"#ffffff",secondaryText:"#d4d4d4",accent:"#ffd400",onAccent:"#111111",radius:0,headingFont:"Manrope",bodyFont:"Manrope"}),us("h-farm",{surface:"#ffffff",tint:"#ffffff",glass:!1,blur:0,border:"transparent",borderWidth:0,shadow:!1,text:"#000000",secondaryText:"#000000",accent:"#D13A2F",onAccent:"#ffffff",radius:15})],zu=Bu[0],Dl=n=>n==null||n===""||n==="auto",C_="rgba(0,0,0,0)";function Hu(n){const e=Bu.find(t=>t.id===n?.id)??zu;return{...e,...n,tokens:{...e.tokens,...n?.tokens},styles:Object.fromEntries(Object.keys(e.styles).map(t=>[t,{...e.styles[t],...n?.styles?.[t]}]))}}function R_(n,e={}){return e.role&&["card","button","title","text","label","icon","shape"].includes(e.role)?e.role:["glass-card","group","video360-prompt"].includes(n)?"card":n==="text"?e.variant==="title"?"title":e.variant==="kicker"?"label":"text":["button","shape","icon"].includes(n)?n:null}function Yi(n,e={},t){if(!t)return e;const i=Hu(t),r=R_(n,e),a={...i.styles[r]??{}};n==="button"&&e.variant==="glass"&&Object.assign(a,{fill:i.tokens.surface,color:i.tokens.text}),n==="button"&&e.variant==="ghost"&&Object.assign(a,{fill:C_,color:i.tokens.text}),r==="card"&&Dl(e.fill)&&(e.glass??a.glass)&&(a.fill=Dl(e.tint)?a.tint:e.tint),e.glass===!1&&/^(transparent|rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\))$/.test(e.fill??"")&&(a.borderWidth=0,a.shadow=!1);const s={...e};return Object.entries(a).forEach(([l,o])=>{(Dl(s[l])||["size","weight"].includes(l)&&s[l]===0)&&(s[l]=o)}),s}function P_(n){const e=Hu(n).tokens,t=(i,r)=>$i(i,r);return{"--tour-theme-surface":t(e.surface,qi.surface),"--tour-theme-tint":t(e.tint,qi.tint),"--tour-theme-border":t(e.border,qi.border),"--tour-theme-text":t(e.text,qi.text),"--tour-theme-secondary":t(e.secondaryText,qi.secondaryText),"--tour-theme-accent":t(e.accent,qi.accent),"--tour-theme-radius":`${mt(e.radius,5,0,400)}px`,"--tour-theme-blur":`${mt(e.blur,24,0,80)}px`,"--tour-theme-on-accent":t(e.onAccent,"#101a2b"),"--tour-font-heading":En(e.headingFont),"--tour-font-body":En(e.bodyFont)}}function L_(n,e){const t=P_(e);Object.entries(t).forEach(([i,r])=>{!e&&i.startsWith("--tour-font-")||(!e&&i==="--tour-theme-accent"?n.style.removeProperty(i):n.style.setProperty(i,r))}),e&&(n.style.fontFamily="var(--tour-font-body)",n.style.setProperty("--tour-accent",t["--tour-theme-accent"]))}const Zt={key:"animation",type:"animation",label:"Animar",toolbar:!0},Jt={kind:"none",delayMs:0};function Qt(n,e){Object.entries(e).forEach(([t,i])=>{n.style[t]=typeof i=="string"?$i(i,""):i==null?"":String(i)})}function Bt(n,e,t){const i=$i(t,"");i?n.style.setProperty(e,i):n.style.removeProperty(e)}const Ct=(n,e,t=0,i=4e3)=>`${mt(n,e,t,i)}px`;function fs(n,e=12){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").slice(0,e):[]}function Vu(n){const e=n?.doc?.design?.languages?.default;return typeof e=="string"&&/^[a-z]{2,3}(-[A-Za-z0-9]+)?$/.test(e)?e:"es"}const Ki={fill:"",glass:null,blur:null,tint:"",borderColor:"",borderWidth:null,shadow:null,shadowIntensity:null,radius:null},Zi=[{key:"glass",type:"toggle",label:"Cristal",auto:!0,group:"Acabado"},{key:"blur",type:"range",label:"Desenfoque",min:0,max:60,step:1,auto:!0,group:"Acabado"},{key:"tint",type:"color",label:"Tinte del cristal",group:"Acabado"},{key:"borderColor",type:"border",label:"Borde",group:"Acabado"},{key:"borderWidth",type:"range",label:"Grosor de borde",min:0,max:12,step:1,auto:!0,group:"Acabado"},{key:"shadow",type:"toggle",label:"Sombra",auto:!0,group:"Acabado"},{key:"shadowIntensity",type:"range",label:"Intensidad de sombra",min:0,max:1,step:.05,auto:!0,group:"Acabado"},{key:"radius",type:"range",label:"Redondeo",min:0,max:80,step:1,auto:!0,group:"Acabado"}];function I_(n,{bare:e=!1}={}){const t=n.glass??!e,i=n.glass===!1&&/^(transparent|rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\))$/.test(n.fill??""),r=n.shadow??!(e||i),a=mt(n.borderWidth??n.strokeWidth,e||i?0:1,0,20),s=n.fill||(e&&!t?"rgba(0,0,0,0)":t?n.tint||"var(--tour-theme-tint,rgba(20,37,68,.5))":"var(--tour-theme-surface,rgba(20,37,68,.5))"),l=Ct(n.blur,24,0,80),o=mt(n.shadowIntensity,.6,0,1);return{background:s,backdropFilter:t?`blur(${l}) saturate(1.7)`:"none",webkitBackdropFilter:t?`blur(${l}) saturate(1.7)`:"none",border:a?`${a}px solid ${n.borderColor||n.stroke||"var(--tour-theme-border,rgba(255,255,255,.15))"}`:"none",borderRadius:n.shape==="circle"?"50%":Ct(n.radius,5,0,400),boxShadow:r&&o>0?`0 16px 44px -14px rgba(6,12,24,${o}),0 2px 8px rgba(6,12,24,${o/2})`:"none"}}function ri(n,e,t){Qt(n,I_(e,t)),"color"in e&&(Qt(n,{color:e.color}),Bt(n,"--txt",e.color)),"secondaryColor"in e&&(Bt(n,"--txt-2",e.secondaryColor),Bt(n,"--txt-3",e.secondaryColor));for(const[i,r]of[["font","--tour-font-body"],["headingFont","--tour-font-heading"]])i in e&&Bt(n,r,xu(e[i])?En(e[i]):"")}const Gu=(n,e)=>e&&n.mobile?.groupFrame?n.mobile.groupFrame:n.frame;function hs(n,e){const t=e&&n.mobile,i=t?.groupFrame||t?.frame;return t?.contentWidth>0?{contentWidth:t.contentWidth,contentHeight:t.contentHeight||0,...i?{width:i.w,height:i.h}:{}}:{}}const D_=["enter","goToScene","openUrl","play360","back","toggleAudio","toggleAutopilot","openEmbed"];function ai(n){if(typeof n!="string")return null;const e=n.trim();if(!e||/[\u0000-\u001f]/.test(e))return null;try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"?t.href:null}catch{return null}}function oa(n){return!n||typeof n!="object"||!D_.includes(n.type)?{type:null,target:null}:n.type==="play360"?{type:"play360",target:null,asset:n.asset??null,poster:n.poster??null,startSec:n.startSec,onEnd:n.onEnd}:n.type==="openEmbed"?{type:n.type,url:n.url,title:n.title,width:n.width??"90%",height:n.height??"90%"}:n.type==="goToScene"?{type:n.type,target:n.target??null,...n.camera?{camera:n.camera}:{}}:{type:n.type,target:n.target??null}}function ps(n,e){const{type:t,target:i}=oa(n);return t==="enter"&&typeof e?.enter=="function"?(e.enter(),!0):t==="goToScene"&&i&&typeof e?.goToScene=="function"?(n.camera?e.goToScene(i,{camera:n.camera}):e.goToScene(i),!0):["back","toggleAudio","toggleAutopilot"].includes(t)&&typeof e?.[t]=="function"?(e[t](),!0):t==="openEmbed"&&ai(n.url)&&typeof e?.openEmbed=="function"?(e.openEmbed({...oa(n),url:ai(n.url)}),!0):t==="play360"&&/^asset:[A-Za-z0-9_-]+$/.test(n.asset)&&typeof e?.play360=="function"?(e.play360({asset:n.asset,poster:n.poster??null,startSec:n.startSec,onEnd:n.onEnd}),!0):!1}const N_={home:"house"},ms=Eu;function yi(n,{size:e=16,stroke:t=1.9}={}){const i=N_[n]||n;return cs(Eu.includes(i)?i:"check",{size:e,strokeWidth:t})}const Nl={states:{},activeWhen:"auto",binding:null,hideWhenUnavailable:!1,scaleWithContent:!0},Fl={key:"action",type:"action",label:"Al hacer clic"},Ul=new WeakMap,F_=["fill","color","borderColor","opacity","asset","icon"];function U_(n,e){const t=n.activeWhen??"auto",i=e?.doc?.scenes||[],r=e?.state?.sceneId,a=i.find(l=>l.id===r);if(!r||t==="none")return!1;if(t?.type==="scenes")return Array.isArray(t.ids)&&t.ids.includes(r);if(t?.type==="group")return!!a?.groupId&&Array.isArray(t.ids)&&t.ids.includes(a.groupId);if(t!=="auto"||n.action?.type!=="goToScene")return!1;const s=i.find(l=>l.id===n.action.target);return s?s.groupId?s.groupId===a?.groupId:s.id===r:!1}function Wu(n,e){const t=e?.playbackState;return n==="audioOn"?!!(t?.audio?.enabled??t?.audio?.playing)&&!t.audio.muted:n==="autopilotPlaying"?!!t?.autopilot?.running&&!t.autopilot.paused:n==="historyAvailable"?!!e?.canGoBack?.():!1}function k_(n,e,t={}){const i=(e?.editorState?.elementStatePreview||e?.elementStatePreview)?.[e?.elementId],r=["normal","hover","active","pressed"].includes(i),a=r?i==="active":U_(n,e),s=r?i==="pressed":Wu(n.binding,e)||!e?.editing&&!!t.pressed,l=r?i==="hover":!e?.editing&&!!t.hover,o={...n};for(const[c,u]of[["active",a],["hover",l],["pressed",s]])if(u)for(const f of F_)Object.hasOwn(n.states?.[c]||{},f)&&(o[f]=n.states[c][f]);return{props:o,active:a,pressed:s,hover:l,disabled:n.binding==="historyAvailable"&&!Wu(n.binding,e)&&!e?.editing}}function kl(n,e,t,i){let r=Ul.get(n);if(!r){r={interaction:{},props:e,ctx:t,paint:i},Ul.set(n,r);const a=()=>{const l=k_(r.props,r.ctx,r.interaction);r.disabled=l.disabled,n.style.visibility=l.disabled&&r.props.hideWhenUnavailable?"hidden":"",r.paint(l.props,l);for(const o of["active","pressed","hover"]){const c=`is-${o}`;n.classList?.toggle?n.classList.toggle(c,l[o]):l[o]?n.classList?.add?.(c):n.classList?.remove?.(c)}for(const[o,c]of[["fill","fill"],["color","color"],["borderColor","border-color"],["opacity","opacity"]]){const u=l.props[o],f=$i(u==null?"":String(u),"");f?n.style.setProperty?.(`--tour-state-${c}`,f):n.style.removeProperty?.(`--tour-state-${c}`)}r.props.binding?n.setAttribute("aria-pressed",String(l.pressed)):n.removeAttribute("aria-pressed"),l.active?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current"),l.disabled?n.setAttribute("aria-disabled","true"):n.getAttribute("data-waiting")==null&&n.removeAttribute("aria-disabled"),n.setAttribute("data-element-state",l.pressed?"pressed":l.hover?"hover":l.active?"active":"normal"),r.props.action?.type==="toggleAudio"||r.props.binding==="audioOn"?n.setAttribute("data-audio-control","true"):n.removeAttribute("data-audio-control")};r.refresh=a;const s=(l,o)=>{r.interaction[l]=o,a()};n.addEventListener?.("pointerenter",()=>s("hover",!0)),n.addEventListener?.("pointerleave",()=>{r.interaction={},a()}),n.addEventListener?.("pointerdown",l=>{l.button===0&&s("pressed",!0)}),n.addEventListener?.("pointerup",()=>s("pressed",!1)),n.addEventListener?.("pointercancel",()=>s("pressed",!1)),n.addEventListener?.("blur",()=>s("pressed",!1)),n.addEventListener?.("keydown",l=>{(l.key===" "||l.key==="Enter")&&s("pressed",!0)}),n.addEventListener?.("keyup",()=>s("pressed",!1))}Object.assign(r,{props:e,ctx:t,paint:i}),r.refresh()}function Xu(n,e,t,i=null){const r=oa(e.action),a=r.type==="openUrl"?ai(r.target):null,s=!!r.type&&(r.type!=="openUrl"||!!a),l=s||!!i;if(n.tabIndex=l?0:-1,n.style.pointerEvents=l?"auto":"",n.style.cursor=l?"pointer":"",l)n.setAttribute("data-ui","true"),n.setAttribute("data-tour-action","true"),s?n.setAttribute("data-action",r.type):n.removeAttribute("data-action"),n.setAttribute("role",a?"link":"button"),n.setAttribute("aria-label",e.label||e.alt||"Botón");else for(const o of["data-ui","data-tour-action","data-action","role","aria-label"])n.removeAttribute(o);return n.onclick=l?o=>{const c=o?.target?.closest?.("[data-tour-action]");if(!(c&&c!==n)){if(o?.stopPropagation?.(),t?.editing||Ul.get(n)?.disabled){o?.preventDefault?.();return}a?globalThis.window?.open(a,"_blank","noopener,noreferrer"):s?ps(e.action,t):i?.()}}:null,n.onkeydown=l?o=>{(o.key==="Enter"||o.key===" ")&&!o.repeat&&(o.preventDefault(),n.onclick(o))}:null,n.onpointerdown=l?o=>o.stopPropagation():null,l}const $u=new WeakMap,Ji={id:"button",kind:"element",name:"Botón",category:"Botones",mobile:"stack",defaults:{...Nl,image:null,hoverImage:null,imageFit:"fill",tooltip:"",label:"Entrar al tour",variant:"primary",icon:"arrow-right",fill:"",color:"",radius:null,action:{type:"enter",target:null},animation:Jt},slots:[{key:"label",type:"text",label:"Texto",inline:!0,toolbar:!0},{key:"variant",type:"select",label:"Estilo",toolbar:!0,options:[{value:"primary",label:"Sólido"},{value:"glass",label:"Cristal"},{value:"ghost",label:"Contorno"}]},{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"color",type:"color",label:"Texto",toolbar:!0},{key:"icon",type:"icon",label:"Icono",options:["",...ms]},{key:"radius",type:"range",label:"Redondeo",min:0,max:40,step:1},Fl,Zt],render(n,e){const t=oa(n.action),i=t.type==="openUrl"?ai(t.target):null,r=!!i,a=de(r?"a":"button",{className:"tour-rt-btn"});r?(a.setAttribute("href",i),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer")):a.setAttribute("type","button");const s=de("span",{className:"tour-rt-btn-label","data-slot":"label"}),l=de("span",{className:"tour-rt-btn-icon"});a.append(s,l);const o={ctx:e,action:t,label:s,iconWrap:l,iconName:null};return $u.set(a,o),a.setAttribute("data-tour-action","true"),a.addEventListener("pointermove",c=>{if(!a.dataset.tooltip)return;const u=a.getBoundingClientRect(),f=u.width/(a.offsetWidth||u.width||1),d=a.ownerDocument.defaultView,m=(parseFloat(getComputedStyle(a,"::after").width)||90)+12;a.style.setProperty("--tooltip-x",`${(Math.min(c.clientX,d.innerWidth-m-3)-u.left)/f}px`),a.style.setProperty("--tooltip-y",`${(Math.min(u.bottom+10,d.innerHeight-25)-u.top)/f}px`)}),a.addEventListener("click",c=>{const u=c?.target?.closest?.("[data-tour-action]");if(!(u&&u!==a)){if(c?.stopPropagation?.(),a.disabled||o.ctx?.editing||a.getAttribute("aria-disabled")==="true"){c?.preventDefault?.();return}a.tagName!=="A"&&ps(o.action,o.ctx)}}),Ji.update(a,n,e),a},update(n,e,t){if(e=Yi("button",e,t?.doc?.design?.theme),t?.suppressElementStates)return Ji.paint(n,e,t);let i;return kl(n,e,t,r=>{i=Ji.paint(n,r,t)}),i},paint(n,e,t){const i=$u.get(n);if(!i)return;const r=oa(e.action),a=r.type==="openUrl"?ai(r.target):null;if(!!a!=(n.tagName==="A"))return Ji.render(e,t);a&&n.getAttribute("href")!==a&&n.setAttribute("href",a),i.ctx=t,i.action=r,r.type?n.setAttribute("data-action",r.type):n.removeAttribute("data-action");const s=["primary","glass","ghost"].includes(e.variant)?e.variant:"primary";n.className=`tour-rt-btn tour-rt-btn--${s}`;const l=typeof e.label=="string"?e.label:"";i.label.textContent=l,n.setAttribute("aria-label",l||"Botón"),n.dataset.tooltip=e.tooltip||"",e.icon!==i.iconName&&(i.iconName=e.icon,i.iconWrap.replaceChildren(...e.icon?[yi(e.icon,{size:16})]:[])),i.iconWrap.hidden=!i.iconWrap.firstChild,Qt(n,{background:e.fill,color:e.color,borderColor:e.borderColor,opacity:e.opacity,borderRadius:Ct(e.radius,3,0,60)});const o=St(t?.doc,e.image),c=St(t?.doc,e.hoverImage)||o;n.style.setProperty("--button-image",o?`url("${o}")`:"none"),n.style.setProperty("--button-hover-image",c?`url("${c}")`:"none"),n.style.setProperty("--button-image-size",e.imageFit==="contain"?"auto 100%":"100% 100%"),n.toggleAttribute("data-image-button",!!o);const u=i.action.type==="enter"&&t?.ready===!1;"disabled"in n&&(n.disabled=u||!t?.editing&&e.binding==="historyAvailable"&&!t?.canGoBack?.()),n.toggleAttribute("data-waiting",u),u?n.setAttribute("aria-disabled","true"):n.removeAttribute("aria-disabled")}},la=new WeakMap,O_=(n,e)=>!n.hidden&&!(e?.mobile&&n.mobile?.mode==="hidden")&&as(n,e?.state?.sceneId,e?.doc?.scenes),B_=(n,e)=>Yi("group",n,n.themeOverride||e||(n.useSurfaceTheme?zu:null)),Qi={id:"group",kind:"element",name:"Grupo",category:"Tarjetas",mobile:"scale",interactive:!1,fit:"content",defaults:{...Ki,...Nl,image:null,hoverImage:null,imageFit:"fill",tooltip:"",fill:"",color:"",secondaryColor:"",font:"",headingFont:"",padding:0,gap:18,autoFit:!0,contentWidth:0,contentHeight:0,legacyTemplate:"",themeOverride:null,label:"",variant:"primary",icon:"",action:null,animation:Jt},slots:[{key:"fill",type:"color",label:"Fondo",toolbar:!0},Fl,{key:"autoFit",type:"toggle",label:"Ajustar al contenido"},{key:"padding",type:"range",label:"Margen interior",min:0,max:100,step:1},...Zi,Zt],render(n,e){const t=de("div",{className:"tour-rt-group-inner"}),i=n.legacyTemplate==="button"?Ji.render(n,{...e,suppressElementStates:!0}):de("div",{className:"tour-rt-group"});i.replaceChildren(t);const r={inner:t,items:[],signature:null,props:n,ctx:e,observer:null,disposed:!1};return la.set(i,r),typeof ResizeObserver=="function"&&(r.observer=new ResizeObserver(()=>{r.pending||(r.pending=requestAnimationFrame(()=>{r.pending=null,Qi.measure(i)}))})),Qi.update(i,n,e),r.observer?.observe(i),i},update(n,e,t){const i=e.legacyTemplate==="button"?e:B_(e,t?.doc?.design?.theme);let r;return kl(n,i,t,a=>{r=Qi.paint(n,a,t)}),r},paint(n,e,t){const i=la.get(n);if(!i)return;if(i.ctx=t,i.props=e,e.legacyTemplate==="button"){const o=e.children?.find(u=>u.role==="button-label")?.props?.text??e.label;if(Ji.update(n,{...e,label:o},{...t,suppressElementStates:!0}))return Qi.dispose(n),Qi.render(e,t);n.classList.add("tour-rt-group","tour-rt-btn-composite")}else ri(n,e),Xu(n,e,t);n.style.opacity=Number.isFinite(e.opacity)?String(Math.max(0,Math.min(1,e.opacity))):"";const r=t?.groupDepth??0,a=(Array.isArray(e.children)?e.children:[]).filter(o=>t?.getTemplate?.(o.template)&&!(o.template==="group"&&r>=1)),s=JSON.stringify(a.map(o=>[o.id,o.template,o.z]));s!==i.signature&&(i.items.forEach(o=>{i.observer?.unobserve(o.content),o.template.dispose?.(o.content)}),i.items=[],i.signature=s,i.inner.replaceChildren(),[...a].sort((o,c)=>(o.z??0)-(c.z??0)).forEach(o=>{const c=t.getTemplate(o.template),u=de("div",{className:"tour-rt-group-child"}),f={def:o,template:c,wrapper:u,content:null};i.items.push(f),i.inner.append(u)}));const l=new Map(a.map(o=>[o.id,o]));i.items.forEach(o=>{const c=l.get(o.def.id);if(!c)return;o.def=c;const u=[t?.elementPath,c.id].filter(Boolean).join("/"),f={...t,elementPath:u,groupDepth:r+1,...e.themeOverride?{doc:{...t?.doc,design:{...t?.doc?.design,theme:e.themeOverride}}}:{}},d=Gu(c,t?.mobile)??{},m={...ds(o.template,c.props),...c.template==="group"?{children:c.children,width:d.w,height:d.h,...hs(c,t?.mobile)}:{}};if(e.legacyTemplate==="button"&&c.role==="button-icon"&&Object.hasOwn(e,"icon")&&(m.icon=e.icon),e.legacyTemplate==="button"&&e.color&&["button-icon","button-label"].includes(c.role)&&(m.color=e.color),o.wrapper.dataset.elId=c.id,o.wrapper.dataset.elPath=u,o.wrapper.dataset.parentId=t?.elementId||t?.elementPath?.split("/").at(-1)||"",o.wrapper.dataset.template=c.template,Object.assign(o.wrapper.style,{left:`${mt(d.x,0)}px`,top:`${mt(d.y,0)}px`,width:d.w>0?`${d.w}px`:"max-content",height:d.h>0?`${d.h}px`:"auto",zIndex:String(c.z??0),display:O_(c,t)?"":"none"}),f.elementId=c.id,!o.content)o.content=o.template.render(m,f),o.wrapper.append(o.content),i.observer?.observe(o.content);else{const h=o.template.update(o.content,m,f);h&&h!==o.content&&(i.observer?.unobserve(o.content),o.content.replaceWith(h),o.content=h,i.observer?.observe(h))}}),Qi.measure(n)},measure(n){const e=la.get(n);if(!e||e.disposed)return;const t=e.props,i=Math.max(1,mt(t.contentWidth,0)||mt(t.width,360)||360),a=((t.legacyTemplate==="button"?n.clientWidth:0)||n.parentElement?.clientWidth||mt(t.width,i)||i)/i;let s=t.detailAutoLayout?1:mt(t.contentHeight,0)||mt(t.height,0)||1;if(t.autoFit!==!1){let f=0,d=mt(t.padding,0,0,100);e.items.forEach(({def:m,wrapper:h,content:v})=>{if(h.style.display==="none")return;const p=Gu(m,e.ctx?.mobile)??{},g=Math.max(v?.scrollHeight||0,v?.offsetHeight||0),S=Math.max(mt(p.h,0),g),y=t.detailAutoLayout?d:mt(p.y,0);t.detailAutoLayout&&(h.style.top=`${y}px`,d=y+S+mt(t.detailGap,12)),f=Math.max(f,y+S-mt(t.hotspotOriginY,0,-1e5,1e5))}),s=Math.max(s,f+(t.legacyTemplate==="button"?0:mt(t.padding,0,0,100)))}e.inner.style.width=`${Math.max(1,i+mt(t.hotspotOriginX,0,-1e5,1e5))}px`,e.inner.style.height=`${Math.max(1,s+mt(t.hotspotOriginY,0,-1e5,1e5))}px`,e.inner.style.transform=`scale(${a}) translate(${-mt(t.hotspotOriginX,0,-1e5,1e5)}px,${-mt(t.hotspotOriginY,0,-1e5,1e5)}px)`,n.dataset.groupScale=String(a),n.dataset.contentWidth=String(i);const l=(t.hotspotComposition||t.legacyTemplate==="button")&&typeof getComputedStyle=="function"?getComputedStyle(n):null,o=(parseFloat(l?.borderTopWidth)||0)+(parseFloat(l?.borderBottomWidth)||0),c=t.autoFit===!1&&t.height>0?t.height:s*a+o,u=`${Math.round(c*100)/100}px`;n.style.height!==u&&(n.style.height=u)},dispose(n){const e=la.get(n);e&&(e.disposed=!0,e.observer?.disconnect(),e.pending&&cancelAnimationFrame(e.pending),e.items.forEach(({template:t,content:i})=>t.dispose?.(i)),la.delete(n))}},qu={id:"icon",kind:"element",name:"Icono",category:"Formas",mobile:"keep",interactive:!1,defaults:{icon:"layers",size:24,color:"",stroke:1.9,animation:Jt},slots:[{key:"icon",type:"icon",label:"Icono",options:ms,toolbar:!0},{key:"color",type:"color",label:"Color",toolbar:!0},{key:"size",type:"range",label:"Tamaño",min:8,max:240,step:1,toolbar:!0},{key:"stroke",type:"range",label:"Grosor del icono",min:.5,max:5,step:.1},Zt],render(n,e){const t=de("span",{className:"tour-rt-icon","data-slot":"icon"});return qu.update(t,n,e),t},update(n,e,t){e=Yi("icon",e,t?.doc?.design?.theme);const i=JSON.stringify([e.icon,e.size,e.stroke]);n.dataset.iconKey!==i&&(n.dataset.iconKey=i,n.replaceChildren(yi(e.icon,{size:Math.min(240,Math.max(8,Number(e.size)||24)),stroke:Number(e.stroke)||1.9}))),Qt(n,{color:e.color,width:Ct(e.size,24,8,240),height:Ct(e.size,24,8,240)})}},Yu=new WeakMap,Ku={id:"basic-topbar",kind:"element",name:"Barra superior",category:"Barras",mobile:"keep",defaults:{title:"",subtitle:"",showScenePicker:!0},slots:[{key:"title",type:"text",label:"Título",inline:!0,toolbar:!0},{key:"subtitle",type:"text",label:"Subtítulo",inline:!0,toolbar:!0},{key:"showScenePicker",type:"toggle",label:"Selector de escenas",toolbar:!0}],render(n,e){const t=de("strong",{className:"tour-rt-topbar-title","data-slot":"title"}),i=de("span",{className:"tour-rt-topbar-subtitle","data-slot":"subtitle"}),r=de("select",{className:"tour-rt-topbar-select","aria-label":"Escena"}),a=de("span",{className:"tour-rt-topbar-counter"}),s=de("div",{className:"tour-rt-topbar","data-ui":""},[de("div",{className:"tour-rt-topbar-heading"},[t,i]),de("div",{className:"tour-rt-topbar-controls"},[r,a])]),l={ctx:e,title:t,subtitle:i,select:r,counter:a,signature:null};return Yu.set(s,l),r.addEventListener("change",()=>l.ctx.goToScene(r.value)),Ku.update(s,n,e),s},update(n,e={},t){const i=Yu.get(n);i.ctx=t,i.title.textContent=e.title||t.doc.tour?.title||"",i.subtitle.textContent=e.subtitle||"",i.subtitle.hidden=!e.subtitle;const r=e.showScenePicker!==!1&&t.entries.length>0;i.select.hidden=!r;const a=t.entries.map(c=>`${c.sceneId}|${c.label}`).join(`
`);a!==i.signature&&(i.signature=a,i.select.replaceChildren(...t.entries.map(c=>de("option",{value:c.sceneId,text:c.label}))));const s=t.entries.findIndex(c=>c.key===t.state.batchKey);s>=0&&(i.select.value=t.entries[s].sceneId);const{frameIndex:l,frameCount:o}=t.state;i.counter.textContent=o>1?`${l+1} / ${o}`:`${Math.max(s,0)+1} / ${t.entries.length}`}},Zu=new WeakMap,Ju={id:"frame-scrubber",kind:"element",name:"Barra de cuadros",category:"Barras",mobile:"keep",defaults:{},slots:[],isVisible:n=>n.mode==="design"||n.state.frameCount>1,render(n,e){const t=de("div",{className:"tour-rt-scrub-fill"}),i=de("div",{className:"tour-rt-scrub-knob"}),r=de("div",{className:"tour-rt-scrub-track"},[t,i]),a=de("div",{className:"tour-rt-scrub-label"}),s=de("div",{className:"tour-rt-scrub","data-ui":""},[r,a]),l={ctx:e,track:r,fill:t,knob:i,label:a,dragging:!1};Zu.set(s,l);function o(u){const f=l.track.getBoundingClientRect(),{frameCount:d}=l.ctx.state;if(!f.width||d<2)return;const m=Math.max(0,Math.min(1,(u-f.left)/f.width));l.ctx.seek(Math.round(m*(d-1)))}s.addEventListener("pointerdown",u=>{s.setPointerCapture(u.pointerId),l.dragging=!0,o(u.clientX)}),s.addEventListener("pointermove",u=>{l.dragging&&o(u.clientX)});const c=()=>{l.dragging=!1};return s.addEventListener("pointerup",c),s.addEventListener("pointercancel",c),s.addEventListener("lostpointercapture",c),Ju.update(s,n,e),s},update(n,e,t){const i=Zu.get(n);i.ctx=t;const{frameIndex:r,frameCount:a}=t.state,s=a>1?r/(a-1)*100:0;i.fill.style.width=`${s}%`,i.knob.style.left=`${s}%`,i.label.textContent=t.mode==="design"&&a<2?"Barra de cuadros · visible en videos 360°":`${r+1} / ${a}`}},z_=["title","paragraph","kicker"],Qu={id:"text",kind:"element",name:"Texto",category:"Texto",mobile:"stack",fit:"content",interactive:!1,defaults:{text:"Escribe aquí",variant:"paragraph",color:"",size:0,weight:0,align:"left",font:"",italic:!1,underline:!1,uppercase:!1,letterSpacing:0,lineHeight:0,animation:Jt},slots:[{key:"text",type:"text",label:"Texto",inline:!0,toolbar:!0},{key:"variant",type:"select",label:"Estilo",toolbar:!0,options:[{value:"title",label:"Título"},{value:"paragraph",label:"Párrafo"},{value:"kicker",label:"Etiqueta"}]},{key:"color",type:"color",label:"Color",toolbar:!0},{key:"size",type:"range",toolbar:!0,label:"Tamaño (0 = automático)",min:0,max:120,step:1},{key:"weight",type:"range",toolbar:!0,label:"Grosor (0 = automático)",min:0,max:900,step:100},{key:"align",type:"select",label:"Alineación",options:[{value:"left",label:"Izquierda"},{value:"center",label:"Centro"},{value:"right",label:"Derecha"}]},{key:"font",toolbar:!0,type:"select",label:"Fuente",options:[{value:"",label:"Automática"},{value:"heading",label:"Títulos de la marca"},{value:"body",label:"Texto de la marca"},{value:"mono",label:"Monoespaciada"},...bu.map(n=>({value:n.id,label:n.label}))]},{key:"italic",type:"toggle",label:"Cursiva",toolbar:!0},{key:"underline",type:"toggle",label:"Subrayado",toolbar:!0},{key:"uppercase",type:"toggle",label:"Mayúsculas"},{key:"letterSpacing",type:"range",label:"Interletrado",min:-5,max:30,step:.1},{key:"lineHeight",type:"range",label:"Interlineado (0 = automático)",min:0,max:3,step:.05},Zt],render(n,e){const t=de("div",{className:"tour-rt-text","data-slot":"text"});return Qu.update(t,n,e),t},update(n,e,t){e=Yi("text",e,t?.doc?.design?.theme);const i=z_.includes(e.variant)?e.variant:"paragraph";n.className=`tour-rt-text tour-rt-text--${i}`,i==="title"?(n.setAttribute("role","heading"),n.setAttribute("aria-level","2")):(n.removeAttribute("role"),n.removeAttribute("aria-level")),n.textContent=typeof e.text=="string"?e.text:"";const r={heading:"--tour-font-heading",body:"--tour-font-body",mono:"--tour-font-mono"}[e.font];Qt(n,{color:e.color,fontStyle:e.italic?"italic":"normal",textDecoration:e.underline?"underline":"none",textTransform:e.uppercase||i==="kicker"?"uppercase":"none",letterSpacing:Number(e.letterSpacing)?`${Math.min(30,Math.max(-5,Number(e.letterSpacing)))}px`:"",lineHeight:Number(e.lineHeight)>0?String(Math.min(4,Math.max(.6,Number(e.lineHeight)))):"",fontSize:e.size>0?Ct(e.size,16,6,240):"",fontWeight:e.weight>0?String(Math.min(900,Math.max(100,Math.round(e.weight)))):"",textAlign:["left","center","right"].includes(e.align)?e.align:"left",fontFamily:r?`var(${r})`:xu(e.font)?En(e.font):""})}},Ol={id:"image",kind:"element",name:"Imagen o logo",category:"Imagen",mobile:"stack",interactive:!1,defaults:{...Nl,action:null,asset:null,alt:"",fit:"contain",radius:0,opacity:1,enlarge:!1,animation:Jt},slots:[{key:"asset",type:"image",label:"Imagen",toolbar:!0},{key:"alt",type:"text",label:"Descripción (accesibilidad)"},{key:"enlarge",type:"toggle",label:"Ampliar al pulsar"},Fl,{key:"fit",type:"select",label:"Ajuste",options:[{value:"contain",label:"Completa"},{value:"fill",label:"Estirada"},{value:"cover",label:"Rellenar"}]},{key:"radius",type:"range",label:"Redondeo",min:0,max:200,step:1},{key:"opacity",type:"range",label:"Opacidad",min:0,max:1,step:.05},Zt],render(n,e){const t=de("div",{className:"tour-rt-image"});return Ol.update(t,n,e),t},update(n,e,t){kl(n,e,t,i=>Ol.paint(n,i,t))},paint(n,e,t){const i=St(t?.doc,e.asset),r=e.enlarge===!0&&!!i&&typeof t?.openLightbox=="function";Xu(n,e,t,r?()=>t.openLightbox({items:[{url:i,caption:e.alt||""}],index:0}):null),r&&!e.action?.type&&(n.style.cursor="zoom-in",n.setAttribute("aria-label",`Ampliar ${e.alt||"imagen"}`)),Qt(n,{background:e.fill,color:e.color,borderColor:e.borderColor,opacity:Number.isFinite(e.opacity)?Math.max(0,Math.min(1,e.opacity)):1});let a=n.firstElementChild;if(!i){n.replaceChildren(),n.classList.add("tour-rt-image--empty");return}n.classList.remove("tour-rt-image--empty"),(!a||a.tagName!=="IMG")&&(a=de("img",{draggable:"false"}),n.replaceChildren(a)),a.getAttribute("src")!==i&&a.setAttribute("src",i),a.setAttribute("alt",typeof e.alt=="string"?e.alt:""),Qt(a,{objectFit:["cover","fill"].includes(e.fit)?e.fit:"contain",borderRadius:Ct(e.radius,0,0,400)})}},H_=20,ju=new WeakMap;function V_(n,e){const t=(Array.isArray(n)?n:[]).filter(r=>r&&typeof r.id=="string"&&/^[A-Za-z0-9_-]{1,100}$/.test(r.id)&&(!r.kind||r.kind==="image"));if(!t.length)return null;const i=t.some(r=>`asset:${r.id}`===e?.asset)?e.asset:`asset:${t[0].id}`;return{id:globalThis.crypto?.randomUUID?.()||`gallery-${Math.random().toString(36).slice(2)}`,asset:i,caption:""}}function G_(n){const e=new Set;return(Array.isArray(n)?n:[]).slice(0,H_).filter(t=>t&&typeof t.asset=="string"&&/^asset:[^\s]+$/.test(t.asset)).map((t,i)=>{let r=typeof t.id=="string"&&t.id?t.id.slice(0,100):`gallery-${i}`;for(;e.has(r);)r+="-copy";return e.add(r),{id:r,asset:t.asset,caption:typeof t.caption=="string"?t.caption.slice(0,2e3):""}})}const ef={id:"image-gallery",kind:"element",name:"Galería de imágenes",category:"Imagen",mobile:"stack",interactive:!0,defaults:{items:[],columns:2,gap:8,radius:8,showCaptions:!0,animation:Jt},slots:[{key:"items",type:"list",label:"Imágenes",toolbar:!0,max:20,createItem:V_,of:[{key:"asset",type:"image",label:"Imagen"},{key:"caption",type:"text",label:"Pie de imagen"}]},{key:"columns",type:"range",label:"Columnas",min:1,max:4,step:1},{key:"gap",type:"range",label:"Separación",min:0,max:32,step:1},{key:"radius",type:"range",label:"Redondeo",min:0,max:40,step:1},{key:"showCaptions",type:"toggle",label:"Mostrar pies de imagen"},Zt],render(n,e){const t=de("div",{className:"tour-rt-gallery"});return ef.update(t,n,e),t},update(n,e,t){const i=G_(e.items).map(s=>({...s,url:St(t?.doc,s.asset)})).filter(s=>s.url),r=ju.get(n)||{};r.ctx=t,r.items=i,ju.set(n,r),n.style.setProperty("--gallery-columns",Math.max(1,Math.min(4,i.length||1,Number(e.columns)||2))),n.style.gap=`${Math.max(0,Math.min(32,Number(e.gap)||0))}px`,n.style.setProperty("--gallery-radius",`${Math.max(0,Math.min(40,Number(e.radius)||0))}px`);const a=JSON.stringify([i,e.showCaptions]);r.signature!==a&&(r.signature=a,n.replaceChildren(...i.map((s,l)=>{const o=de("button",{type:"button","data-ui":"true","aria-label":`Ampliar ${s.caption||`imagen ${l+1}`}`,onClick:c=>{c.stopPropagation(),r.ctx?.openLightbox?.({items:r.items,index:l})}},[de("img",{src:s.url,alt:s.caption,draggable:"false",loading:"lazy"})]);return o.addEventListener("pointerdown",c=>c.stopPropagation()),de("figure",{},[o,e.showCaptions!==!1&&s.caption?de("figcaption",{text:s.caption}):null])})),i.length||n.append(de("span",{className:"tour-rt-gallery-empty",text:"Galería sin imágenes"})))}},tf={id:"shape",kind:"element",name:"Forma",category:"Formas",mobile:"keep",interactive:!1,defaults:{shape:"rect",fill:"",...Ki,stroke:"",strokeWidth:1,opacity:1,animation:Jt},slots:[{key:"shape",type:"select",label:"Forma",toolbar:!0,options:[{value:"rect",label:"Rectángulo"},{value:"circle",label:"Círculo"}]},{key:"fill",type:"color",label:"Relleno",toolbar:!0},...Zi,{key:"stroke",type:"border",label:"Borde",toolbar:!0},{key:"opacity",type:"range",label:"Opacidad",min:0,max:1,step:.05},Zt],render(n,e){const t=de("div",{className:"tour-rt-shape","aria-hidden":"true"});return tf.update(t,n,e),t},update(n,e,t){e=Yi("shape",e,t?.doc?.design?.theme),!t?.doc?.design?.theme&&!e.fill&&!e.glass&&(e={...e,fill:"rgba(255,255,255,.12)"}),n.className="tour-rt-shape",ri(n,e.stroke?{...e,borderColor:e.stroke,borderWidth:e.strokeWidth}:e,{bare:!0}),Qt(n,{opacity:Number.isFinite(e.opacity)?Math.max(0,Math.min(1,e.opacity)):1})}},Bl=new WeakMap,nf={id:"glass-card",kind:"element",name:"Tarjeta de cristal",category:"Tarjetas",mobile:"stack",fit:"content",defaults:{kicker:"",color:"",secondaryColor:"",font:"",headingFont:"",title:"Título de la tarjeta",body:"",children:[],padding:22,gap:18,fill:"",borderColor:"",...Ki,animation:Jt},slots:[{key:"kicker",type:"text",label:"Etiqueta",inline:!0},{key:"title",type:"text",label:"Título",inline:!0,toolbar:!0},{key:"body",type:"text",label:"Texto",inline:!0},{key:"fill",type:"color",label:"Fondo",toolbar:!0},...Zi,{key:"padding",type:"range",label:"Margen interior",min:0,max:60,step:1},{key:"children",type:"list",label:"Contenido",of:[{key:"template",type:"select",label:"Pieza"},{key:"props",type:"text",label:"Propiedades"}]},Zt],render(n,e){const t=de("p",{className:"tour-rt-text tour-rt-text--kicker","data-slot":"kicker"}),i=de("h3",{className:"tour-rt-gcard-title","data-slot":"title"}),r=de("p",{className:"tour-rt-gcard-body","data-slot":"body"}),a=de("div",{className:"tour-rt-gcard-children"}),s=de("div",{className:"tour-rt-glass tour-rt-gcard"},[t,i,r,a]);return Bl.set(s,{kicker:t,title:i,body:r,box:a,children:[],signature:null,ctx:e}),nf.update(s,n,e),s},update(n,e,t){e=Yi("glass-card",e,t?.doc?.design?.theme);const i=Bl.get(n);if(!i)return;i.ctx=t;const r=(o,c)=>{o.textContent=typeof c=="string"?c:"",o.hidden=!o.textContent};r(i.kicker,e.kicker),r(i.title,e.title),r(i.body,e.body),Qt(n,{padding:Ct(e.padding,22,0,120)}),ri(n,e),i.box.style.gap=Ct(e.gap,18,0,80);const a=fs(e.children).filter(o=>o.template&&o.template!=="glass-card"),s=JSON.stringify(a),l=t?.getTemplate;if(s!==i.signature&&l){i.signature=s,i.children.forEach(({template:c,el:u})=>c.dispose?.(u)),i.children=[];const o=[];a.forEach(c=>{const u=l(c.template);if(!u||u.kind!=="element")return;const f=u.render(ds(u,c.props),t);i.children.push({template:u,el:f,def:c}),o.push(f)}),i.box.replaceChildren(...o)}i.children.forEach(({template:o,el:c,def:u})=>o.update(c,ds(o,u.props),t)),i.box.hidden=i.children.length===0},dispose(n){Bl.get(n)?.children.forEach(({template:e,el:t})=>e.dispose?.(t))}},rf=new WeakMap,af={id:"feature-list",kind:"element",name:"Lista de características",category:"Tarjetas",mobile:"stack",fit:"content",interactive:!1,defaults:{...Ki,heading:"Lo que vas a ver",items:[{icon:"layers",text:"Todos los pisos, uno por uno"},{icon:"map-pin",text:"Puntos de interés en cada sala"},{icon:"eye",text:"Vista de 360° con zoom"}],iconColor:"",color:"",animation:Jt},slots:[{key:"heading",type:"text",label:"Etiqueta",inline:!0,toolbar:!0},{key:"items",type:"list",label:"Características",of:[{key:"icon",type:"icon",label:"Icono",options:["",...ms]},{key:"text",type:"text",label:"Texto"}]},{key:"iconColor",type:"color",label:"Color de iconos",toolbar:!0},{key:"color",type:"color",label:"Color del texto",toolbar:!0},...Zi,Zt],render(n){const e=de("p",{className:"tour-rt-text tour-rt-text--kicker","data-slot":"heading"}),t=de("ul",{className:"tour-rt-features"}),i=de("div",{className:"tour-rt-featurelist"},[e,t]);return rf.set(i,{heading:e,list:t,signature:null}),af.update(i,n),i},update(n,e){ri(n,e,{bare:!0});const t=rf.get(n);t.heading.textContent=typeof e.heading=="string"?e.heading:"",t.heading.hidden=!t.heading.textContent;const i=fs(e.items,10),r=JSON.stringify(i);r!==t.signature&&(t.signature=r,t.list.replaceChildren(...i.map(a=>{const s=de("span",{className:"tour-rt-features-icon"},a.icon?yi(a.icon,{size:16}):null),l=de("span",{className:"tour-rt-features-text",text:typeof a.text=="string"?a.text:""});return de("li",{},[s,l])}))),Bt(n,"--tour-feat-icon",e.iconColor),Bt(n,"--tour-feat-text",e.color)}},zl=1100,sf=4200,W_=n=>1-Math.pow(1-Math.max(0,Math.min(1,n)),3);function X_(n,e,t=zl,i="up"){const r=i==="down"?0:n;if(!(t>0)||e>=t)return r;const a=W_(e/t);return Math.round(n*(i==="down"?1-a:a))}function $_(n,e){return e>0?(n+1)%e:0}function gs(n,e="en"){try{return new Intl.NumberFormat(e).format(n)}catch{return String(n)}}const q_=n=>typeof n=="number"&&Number.isFinite(n),Hl=new WeakMap,of=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Vl(n){clearInterval(n.timer),clearTimeout(n.safety),clearTimeout(n.swap),n.raf&&cancelAnimationFrame(n.raf),n.timer=n.raf=n.safety=n.swap=null}function Y_(n,e){n.ticks.forEach((t,i)=>{t.classList.toggle("is-done",i<n.index),t.classList.remove("is-active"),i===n.index&&(t.style.setProperty("--tour-rotate",`${e}ms`),t.offsetWidth,t.classList.add("is-active"))})}function lf(n,e,t,{countMs:i,rotateMs:r,animate:a,locale:s}){const l=e[t]||{};n.index=t,n.root.dataset.counterIndex=String(t),n.suffix.textContent=typeof l.suffix=="string"?l.suffix:"",n.label.textContent=typeof l.label=="string"?l.label:"",Y_(n,r),n.raf&&cancelAnimationFrame(n.raf),clearTimeout(n.safety);const o=l.value;if(!q_(o)){n.num.textContent=o==null?"":String(o);return}const c=l.direction==="down"?"down":"up",u=gs(c==="down"?0:o,s);if(!a||of()){n.num.textContent=a===!1?gs(o,s):u;return}const f=performance.now(),d=m=>{const h=m-f;n.num.textContent=gs(X_(o,h,i,c),s),n.raf=h<i?requestAnimationFrame(d):null};n.num.textContent=gs(c==="down"?o:0,s),n.raf=requestAnimationFrame(d),n.safety=setTimeout(()=>{n.raf&&cancelAnimationFrame(n.raf),n.raf=null,n.num.textContent=u},i+80)}function K_(n,e,t,i,r){Vl(e);const a=fs(t.items,8),s=Number.isFinite(Number(t.countMs))?Math.max(0,Number(t.countMs)):zl,l=Math.max(800,Number(t.rotateMs)||sf),o=Vu(e.ctx);if(e.ticks=a.map(()=>de("i",{className:"tour-rt-counter-tick"},de("b"))),e.tickBox.replaceChildren(...e.ticks),e.tickBox.hidden=t.showTicks===!1||a.length<2,e.body.hidden=a.length===0,!a.length)return;const c={countMs:s,rotateMs:l,locale:o},u=Math.max(0,Math.min(a.length-1,r??(i&&e.index||0)));if(e.body.classList.remove("is-out"),n.dataset.paused=String(i),lf(e,a,u,{...c,animate:!i}),i){e.ticks.forEach(f=>f.classList.remove("is-active"));return}a.length<2||(e.timer=setInterval(()=>{if(!n.isConnected)return Vl(e);const f=()=>lf(e,a,$_(e.index,a.length),{...c,animate:!0});if(of())return f();e.body.classList.add("is-out"),e.swap=setTimeout(()=>{f(),e.body.classList.remove("is-out")},180)},l))}const cf={id:"stats-counter",kind:"element",name:"Contador rotativo",category:"Cifras",mobile:"stack",fit:"content",interactive:!1,defaults:{compositeLeaf:!1,...Ki,heading:"En números",items:[{value:1100,suffix:"+",label:"metros cuadrados"},{value:12,suffix:"",label:"salas para recorrer"},{value:5,suffix:"",label:"pisos"}],countMs:zl,rotateMs:sf,showTicks:!0,color:"",animation:Jt},slots:[{key:"heading",type:"text",label:"Etiqueta",inline:!0,toolbar:!0},{key:"items",type:"list",label:"Cifras",max:8,of:[{key:"value",type:"number",label:"Valor"},{key:"suffix",type:"text",label:"Sufijo"},{key:"label",type:"text",label:"Descripción"},{key:"direction",type:"select",label:"Sentido",default:"up",options:[{value:"up",label:"De cero al valor"},{value:"down",label:"Del valor a cero"}]}]},{key:"rotateMs",type:"range",label:"Cambia cada (ms)",min:1500,max:12e3,step:100},{key:"countMs",type:"range",label:"Duración de la cuenta (ms)",min:0,max:3e3,step:50},{key:"showTicks",type:"toggle",label:"Mostrar progreso"},{key:"color",type:"color",label:"Color de la cifra",toolbar:!0},...Zi,Zt],render(n,e){const t=de("p",{className:"tour-rt-text tour-rt-text--kicker","data-slot":"heading"}),i=de("span",{className:"tour-rt-counter-num"}),r=de("span",{className:"tour-rt-counter-suffix"}),a=de("span",{className:"tour-rt-counter-label"}),s=de("div",{className:"tour-rt-counter-body","aria-live":"polite"},[de("div",{className:"tour-rt-counter-value"},[i,r]),a]),l=de("div",{className:"tour-rt-counter-ticks","aria-hidden":"true"}),o=de("div",{className:"tour-rt-counter"},[t,s,l]),c={root:o,ctx:e,kicker:t,num:i,suffix:r,label:a,body:s,tickBox:l,ticks:[],index:0,timer:null,raf:null,safety:null,swap:null,signature:null};return Hl.set(o,c),cf.update(o,n,e),o},update(n,e,t){const i=Hl.get(n);if(!i)return;i.ctx=t,ri(n,e,{bare:!0}),i.kicker.textContent=typeof e.heading=="string"?e.heading:"",i.kicker.hidden=!i.kicker.textContent,Bt(n,"--tour-counter-color",e.color);const r=t?.editorState?.elementPreview,a=(t?.elementPath||t?.elementId||"").split("/").some(u=>t?.editorState?.selection?.includes(u)),s=r?.id===t?.elementId,l=t?.mode==="design"&&(a||s)&&!(s&&r.playing),o=s?r.index:void 0,c=JSON.stringify([e.items,e.countMs,e.rotateMs,e.showTicks,Vu(t),l,o]);c!==i.signature&&(i.signature=c,K_(n,i,e,l,o))},dispose(n){const e=Hl.get(n);e&&Vl(e)}},df=new WeakMap,uf={id:"stats-row",kind:"element",name:"Fila de cifras",category:"Cifras",mobile:"stack",fit:"content",interactive:!1,defaults:{...Ki,items:[{value:"5",label:"Pisos"},{value:"12",label:"Salas"},{value:"2",label:"Idiomas"}],valueColor:"",labelColor:"",animation:Jt},slots:[{key:"items",type:"list",label:"Cifras",toolbar:!0,max:8,of:[{key:"value",type:"text",label:"Valor"},{key:"label",type:"text",label:"Descripción"}]},{key:"valueColor",type:"color",label:"Color de la cifra",toolbar:!0},{key:"labelColor",type:"color",label:"Color de la descripción"},...Zi,Zt],render(n){const e=de("div",{className:"tour-rt-statsrow"});return df.set(e,{signature:null}),uf.update(e,n),e},update(n,e){ri(n,e,{bare:!0});const t=df.get(n),i=fs(e.items,8),r=JSON.stringify(i);r!==t.signature&&(t.signature=r,n.replaceChildren(...i.map(a=>de("div",{className:"tour-rt-statsrow-item"},[de("span",{className:"tour-rt-statsrow-value",text:a.value==null?"":String(a.value)}),de("span",{className:"tour-rt-statsrow-label",text:typeof a.label=="string"?a.label:""})])))),Bt(n,"--tour-stat-value",e.valueColor),Bt(n,"--tour-stat-label",e.labelColor)}},ff=new WeakMap,Z_=/^[a-z]{2,3}(-[A-Za-z0-9]+)?$/;function J_(n){const e=n?.doc?.design?.languages?.list,t=(Array.isArray(e)?e:[]).filter(i=>typeof i=="string"&&Z_.test(i)).slice(0,6);return t.length?t:["es"]}const hf={id:"language-toggle",kind:"element",name:"Selector de idioma",category:"Botones",mobile:"stack",defaults:{active:"",fill:"",color:"",animation:Jt},slots:[{key:"active",type:"text",label:"Idioma activo (código)"},{key:"fill",type:"color",label:"Color del activo",toolbar:!0},{key:"color",type:"color",label:"Color del texto",toolbar:!0},Zt],render(n,e){const t=de("div",{className:"tour-rt-lang tour-rt-glass",role:"group","aria-label":"Idioma"}),i={ctx:e,current:null,signature:null,buttons:[]};return ff.set(t,i),hf.update(t,n,e),t},update(n,e,t){const i=ff.get(n);i.ctx=t;const r=J_(t),a=r.join("|");if(a!==i.signature&&(i.signature=a,i.buttons=r.map(s=>{const l=de("button",{type:"button",className:"tour-rt-lang-btn","aria-label":s.toUpperCase(),text:s.toUpperCase()});return l.addEventListener("click",()=>{i.current=s,pf(i),i.ctx?.onLanguage?.(s)}),l.dataset.lang=s,l}),n.replaceChildren(...i.buttons),i.current=null),t?.language||!i.current||!r.includes(i.current)){const s=t?.language||e.active||t?.doc?.design?.languages?.default;i.current=r.includes(s)?s:r[0]}Bt(n,"--tour-lang-fill",e.fill),Bt(n,"--tour-lang-color",e.color),pf(i)}};function pf(n){n.buttons.forEach(e=>{const t=e.dataset.lang===n.current;e.classList.toggle("is-active",t),e.setAttribute("aria-pressed",t?"true":"false")})}const mf=new WeakMap,gf={id:"loader",kind:"element",name:"Indicador de carga",category:"Cifras",mobile:"dock-bottom",interactive:!1,isVisible:n=>n?.mode==="design"||n?.thumb||n?.intro||!n?.loading?.ready,defaults:{labelLoading:"Inicializando",labelReady:"Listo",color:"",animation:Jt},slots:[{key:"labelLoading",type:"text",label:"Texto mientras carga",inline:!0,toolbar:!0},{key:"labelReady",type:"text",label:"Texto al terminar",inline:!0,toolbar:!0},{key:"color",type:"color",label:"Color de la barra",toolbar:!0},Zt],render(n,e){const t=de("span",{className:"tour-rt-text tour-rt-text--kicker tour-rt-loader-label"}),i=de("span",{className:"tour-rt-loader-fill"}),r=de("div",{className:"tour-rt-loader",role:"status"},[t,de("span",{className:"tour-rt-loader-track","aria-hidden":"true"},i)]);return mf.set(r,{label:t,fill:i}),gf.update(r,n,e),r},update(n,e,t){const i=mf.get(n),r=t?.loading,a=t?.mode==="design"||t?.thumb,s=a||(t?.intro?t.ready:r?.ready)||!1,l=r?.total>0?Math.min(1,r.loaded/r.total):null;n.hidden=!t?.intro&&!a&&s,n.classList.toggle("is-ready",!!s),n.classList.toggle("is-determinate",l!==null&&!s),i.fill.style.width=s?"100%":l!==null?`${l*100}%`:"",n.setAttribute("aria-label",s?e.labelReady:`${e.labelLoading}${l!==null?` ${Math.round(l*100)}%`:""}`),n.setAttribute("aria-busy",String(!s));const o=s?e.labelReady:e.labelLoading;i.label.textContent=(typeof o=="string"?o:"")+(!s&&l!==null?` ${Math.round(l*100)}%`:""),i.label.setAttribute("data-slot",s?"labelReady":"labelLoading"),Bt(n,"--tour-loader-color",e.color)}};function pn(n){return n.origen!=="video_frame"?`scene:${n.id}`:n.batchId||n.videoUploadId||`scene:${n.id}`}function Q_(n,e){return(n.orderIndex??0)-(e.orderIndex??0)}function vf(n){const e=[...n?.scenes||[]].sort(Q_),t=new Map;e.forEach(l=>{const o=pn(l);t.has(o)||t.set(o,{key:o,scenes:[]}),t.get(o).scenes.push(l)});const i=[...t.values()],r=new Map,a=new Map;i.forEach(l=>{l.scenes.forEach((o,c)=>{r.set(o.id,o),a.set(o.id,{batch:l,index:c})})});const s=new Map;return(n?.hotspots||[]).forEach(l=>{s.has(l.sceneId)||s.set(l.sceneId,[]),s.get(l.sceneId).push(l)}),{scenes:e,batches:i,sceneById:r,batchByScene:a,hotspotsByScene:s}}function j_(n,e){return n.style??e?.hotspotPresets?.[n.type]??null}function ex(n,e){return n.label||n.name||`Escena ${e+1}`}function bf(n){return n.batches.map((e,t)=>{const i=e.scenes[0],r=e.scenes.length;let a;return r===1?a=ex(i,n.scenes.indexOf(i)):a=i.name?.trim()||`Recorrido ${t+1} (${r} cuadros)`,{key:e.key,sceneId:i.id,label:a,count:r}})}function _f(n,{initialSceneId:e,initialFrame:t}={}){const i=n.scenes[0];if(!i)return null;const r=e&&n.sceneById.get(e)||i,{batch:a,index:s}=n.batchByScene.get(r.id),l=Number.isInteger(t)?Math.max(0,Math.min(a.scenes.length-1,t)):s;return{batch:a,frameIndex:l}}function Gl(n){const e=n||{};return{enabled:e.enabled===!0,floors:e.floors!==!1,thumbnails:e.thumbnails!==!1,minimap:e.minimap!==!1,visited:e.visited!==!1,tools:Object.fromEntries(["fullscreen","reset","audio","autopilot"].map(t=>[t,e.tools?.[t]!==!1]))}}const vs=n=>[...n||[]].sort((e,t)=>(e.orderIndex??0)-(t.orderIndex??0));function tx(n){const{x:e,y:t,heading:i=0}=n?.plan||{};return typeof e=="number"&&typeof t=="number"&&Number.isFinite(e)&&Number.isFinite(t)&&e>=0&&e<=1&&t>=0&&t<=1?{x:e,y:t,heading:Number.isFinite(i)?i:0}:null}function nx(n,e){const t=new Set;return vs(n?.scenes).filter(i=>e===void 0||(i.groupId||null)===e).filter(i=>{const r=pn(i);return t.has(r)?!1:(t.add(r),!0)})}function xf(n,e=[]){return n?.label||n?.name||`Escena ${Math.max(0,e.indexOf(n))+1}`}function Wl(n,e=[],t=[]){const i=(t||[]).find(r=>r.key===pn(n));return i?.count>1&&i.label?i.label:xf(n,e)}function Xl(n,e){const t=`tour-visited:${n||"unknown"}`;if(e===void 0)try{e=globalThis.localStorage}catch{e=null}let i=new Set;try{const r=JSON.parse(e?.getItem(t)||"[]");Array.isArray(r)&&(i=new Set(r.filter(a=>typeof a=="string").slice(0,1e4)))}catch{}return{has:r=>i.has(r),values:()=>[...i],mark(r){if(!(!r||i.has(r))){i.add(r);try{e?.setItem(t,JSON.stringify([...i].slice(-1e4)))}catch{}}}}}function yf(n,e){const t=Xl(n,null);let i;return{store(r=!1){if(!r)return t;i||(i=Xl(n,e));for(const a of t.values())i.mark(a);return i},mark(r){const a=!!r&&!t.has(r);return t.mark(r),i?.mark(r),a}}}function ix(n,e={},t){const i=new Set(Array.isArray(e.excludedSceneIds)?e.excludedSceneIds:[]),r=new Map;for(const o of n?.scenes||[]){const c=pn(o);r.has(c)||r.set(c,[]),r.get(c).push(o)}const a=[...r.values()].filter(o=>!o.some(c=>i.has(c.id))&&(!e.onlyGrouped||o.some(c=>!!c.groupId))),s=a.length,l=a.filter(o=>o.some(c=>t?.has(c.id))).length;return{count:l,total:s,percent:s?Math.round(l/s*100):0}}function Mf({mode:n,introVisible:e,ready:t,sceneId:i}){return!["edit","design"].includes(n)&&!e&&t===!0&&!!i}const Sf=new WeakMap,rx=n=>({en:["Tour progress","of","visited"],it:["Avanzamento visita","di","visitati"]})[n?.split("-")[0]]||["Progreso de visita","de","visitadas"],Ef={id:"visit-progress",kind:"element",name:"Progreso de visita",category:"Cifras",mobile:"keep",interactive:!1,defaults:{label:"",showLabel:!0,showCount:!0,showPercent:!0,remember:!1,onlyGrouped:!1,excludedSceneIds:[],fill:"",surfaceRadius:15,padding:10,gap:7,color:"",trackColor:"",fillColor:"",font:"body",size:12,thickness:4,radius:8,trackAsset:null,fillAsset:null},slots:[{key:"label",type:"text",label:"Etiqueta (vacía: automática)",inline:!0,toolbar:!0},{key:"showLabel",type:"toggle",label:"Mostrar etiqueta"},{key:"showCount",type:"toggle",label:"Mostrar cantidad visitada"},{key:"showPercent",type:"toggle",label:"Mostrar porcentaje"},{key:"remember",type:"toggle",label:"Recordar visitas en este dispositivo"},{key:"onlyGrouped",type:"toggle",label:"Contar sólo escenas con zona"},{key:"excludedSceneIds",type:"scene-selection",label:"Excluir del progreso"},...[["fill","Fondo"],["color","Color del texto"],["trackColor","Color de la pista"],["fillColor","Color del progreso"]].map(([n,e])=>({key:n,label:e,type:"color",toolbar:!0})),{key:"surfaceRadius",type:"range",label:"Redondeo del fondo",min:0,max:40},{key:"padding",type:"range",label:"Margen interior",min:0,max:30},{key:"gap",type:"range",label:"Separación entre filas",min:0,max:16},{key:"font",type:"select",label:"Fuente",options:[{value:"body",label:"Fuente del recorrido"}],toolbar:!0},{key:"size",type:"range",label:"Tamaño del texto",min:10,max:32},{key:"thickness",type:"range",label:"Grosor de la barra",min:2,max:40},{key:"radius",type:"range",label:"Redondeo",min:0,max:40},{key:"trackAsset",type:"image",label:"Imagen de pista (opcional)"},{key:"fillAsset",type:"image",label:"Imagen de progreso (opcional)"}],render(n,e){const t=de("span",{className:"tour-visit-label"}),i=de("span",{className:"tour-visit-count"}),r=de("div",{className:"tour-visit-heading","aria-hidden":"true"},[t,i]),a=de("img",{alt:"",draggable:"false"}),s=de("img",{alt:"",draggable:"false"}),l=de("span",{className:"tour-visit-fill"},s),o=de("div",{className:"tour-visit-track",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100"},[a,l]),c=de("span",{className:"tour-visit-percent","aria-hidden":"true"}),u=de("div",{className:"tour-visit-progress"},[r,de("div",{className:"tour-visit-row"},[o,c])]);return Sf.set(u,{label:t,count:i,heading:r,track:o,fill:l,percent:c,trackImage:a,fillImage:s}),Ef.update(u,n,e),u},update(n,e,t){const i=Sf.get(n),[r,a,s]=rx(t?.language||t?.doc?.design?.languages?.default),l=ix(t?.doc,e,t?.visitState?.store(e.remember===!0)),{count:o,total:c,percent:u}=l;i.label.textContent=e.label||r,i.count.textContent=`${o} / ${c}`,i.label.hidden=e.showLabel===!1,i.count.hidden=e.showCount===!1,i.heading.hidden=i.label.hidden&&i.count.hidden,i.percent.textContent=`${u}%`,i.percent.hidden=e.showPercent===!1,i.track.setAttribute("aria-label",e.label||r),i.track.setAttribute("aria-valuenow",String(u)),i.track.setAttribute("aria-valuetext",`${o} ${a} ${c} ${s} (${u}%)`),i.fill.style.clipPath=`inset(0 ${100-u}% 0 0)`,Qt(n,{background:e.fill||"var(--tour-theme-surface, rgba(20,37,68,.8))",padding:Ct(e.padding,10,0,30),gap:Ct(e.gap,7,0,16),borderRadius:Ct(e.surfaceRadius,15,0,40),color:e.color||"var(--tour-theme-text, #ffffff)",fontFamily:e.font==="body"?"var(--tour-font-body)":En(e.font),fontSize:Ct(e.size,12,10,32)}),Bt(n,"--visit-track-color",e.trackColor||"rgba(127,127,127,.25)"),Bt(n,"--visit-fill-color",e.fillColor||"var(--tour-theme-accent, var(--tour-accent, #ffffff))"),Bt(n,"--visit-thickness",Ct(e.thickness,4,2,40)),Bt(n,"--visit-radius",Ct(e.radius,8,0,40));for(const[f,d]of[[i.trackImage,e.trackAsset],[i.fillImage,e.fillAsset]]){const m=St(t?.doc,d);f.hidden=!m,m&&f.getAttribute("src")!==m&&f.setAttribute("src",m),m||f.removeAttribute("src")}}},Af=new WeakMap,Tf={id:"video360-prompt",kind:"element",name:"Tarjeta de video 360°",category:"Tarjetas",mobile:"keep",interactive:!1,defaults:{asset:null,poster:null,text:"Watch this space in 360°",watchLabel:"Watch",laterLabel:"Later",backLabel:"Back to panorama",icon:"camera",collapsed:"camera-button",startSec:0,onEnd:"return",...Ki,color:"",font:"",padding:16,gap:12,size:16,buttonFill:"#D13A2F",buttonColor:"#ffffff",buttonRadius:4,animation:Jt},slots:[{key:"asset",type:"video",label:"Video 360°",toolbar:!0},{key:"poster",type:"image",label:"Portada"},{key:"text",type:"text",label:"Texto",inline:!0,toolbar:!0,multiline:!0,maxLength:2e3},{key:"watchLabel",type:"text",label:"Botón de reproducción",inline:!0,maxLength:80},{key:"laterLabel",type:"text",label:"Botón para más tarde",inline:!0,maxLength:80},{key:"backLabel",type:"text",label:"Botón de regreso",maxLength:80},{key:"icon",type:"icon",label:"Icono",options:ms},{key:"startSec",type:"range",label:"Inicio (segundos)",min:0,max:86400,step:.1},{key:"onEnd",type:"select",label:"Al terminar",options:[{value:"return",label:"Volver a la panorámica"},{value:"hold",label:"Conservar último cuadro"}]},{key:"fill",type:"color",label:"Fondo",toolbar:!0},{key:"color",type:"color",label:"Texto",toolbar:!0},{key:"font",type:"select",label:"Fuente",options:[]},{key:"size",type:"range",label:"Tamaño de texto",min:10,max:48,step:1},{key:"buttonFill",type:"color",label:"Fondo de botones"},{key:"buttonColor",type:"color",label:"Texto de botones"},{key:"buttonRadius",type:"range",label:"Redondeo de botones",min:0,max:40,step:1},{key:"padding",type:"range",label:"Margen interior",min:0,max:60,step:1},{key:"gap",type:"range",label:"Separación",min:0,max:40,step:1},...Zi,Zt],render(n,e){const t=de("img",{className:"tour-video-prompt-poster",alt:"",draggable:"false"}),i=de("p",{className:"tour-video-prompt-text","data-slot":"text"}),r=de("button",{type:"button","data-slot":"laterLabel","data-ui":"video360-later"}),a=de("button",{type:"button","data-ui":"video360-watch"}),s=de("span",{className:"tour-video-prompt-icon","aria-hidden":"true"}),l=de("span",{"data-slot":"watchLabel"});a.append(s,l);const o=de("div",{className:"tour-video-prompt-actions"},[r,a]),c=de("div",{className:"tour-video-prompt-card"},[t,i,o]),u=de("button",{className:"tour-video-prompt-compact",type:"button","data-ui":"video360-reopen"}),f=de("div",{className:"tour-video-prompt","data-collapsed":"false"},[c,u]),d={card:c,poster:t,text:i,later:r,watch:a,icon:s,label:l,compact:u,ctx:e,props:n,collapsed:!1};Af.set(f,d);function m(h){d.collapsed=h,f.dataset.collapsed=String(h),c.inert=h,c.setAttribute("aria-hidden",String(h)),u.tabIndex=h?0:-1,u.setAttribute("aria-hidden",String(!h))}r.onclick=h=>{h.stopPropagation(),!d.ctx?.editing&&(m(!0),u.focus())},u.onclick=h=>{h.stopPropagation(),!d.ctx?.editing&&(m(!1),a.focus())},a.onclick=h=>{h.stopPropagation(),!d.ctx?.editing&&!a.disabled&&d.ctx?.play360?.({asset:d.props.asset,poster:d.props.poster,startSec:d.props.startSec,onEnd:d.props.onEnd,backLabel:d.props.backLabel})};for(const h of[r,a,u])h.addEventListener("pointerdown",v=>v.stopPropagation());return d.setCollapsed=m,m(!1),Tf.update(f,n,e),f},update(n,e,t){const i=Af.get(n);if(!i)return;e=Yi("video360-prompt",e,t?.doc?.design?.theme),i.ctx=t,i.props=e,t?.editing&&i.collapsed&&i.setCollapsed(!1),i.text.textContent=e.text||"",i.label.textContent=e.watchLabel||"Watch",i.later.textContent=e.laterLabel||"Later",i.compact.setAttribute("aria-label",e.watchLabel||"Watch");const r=t?.doc?.assets?.[String(e.asset||"").replace(/^asset:/,"")];i.watch.disabled=!t?.editing&&(!r||r.kind!=="video");const a=St(t?.doc,e.poster);i.poster.hidden=!a,a?i.poster.src=a:i.poster.removeAttribute("src"),i.iconName!==e.icon&&(i.iconName=e.icon,i.icon.replaceChildren(yi(e.icon||"camera",{size:18})),i.compact.replaceChildren(yi(e.icon||"camera",{size:22}))),ri(i.card,e),Qt(i.card,{padding:Ct(e.padding,16,0,60),gap:Ct(e.gap,12,0,40),fontSize:Ct(e.size,16,10,48)});for(const s of[i.later,i.watch,i.compact])Qt(s,{background:e.buttonFill,color:e.buttonColor,borderRadius:Ct(e.buttonRadius,4,0,40)})}};function ax(n,e={}){return(n?.groups||[]).map(t=>({...t,sceneId:(n.scenes||[]).find(i=>i.id===e[t.id]&&i.groupId===t.id)?.id||(n.scenes||[]).find(i=>i.groupId===t.id)?.id||null}))}const wf=new WeakMap,bs={id:"zone-menu",kind:"element",name:"Menú de zonas",category:"Barras",mobile:"keep",defaults:{label:"EXPLORE CAMPUS",emptyLabel:"Coming soon",fill:"#ffffff",color:"#000000",activeFill:"#D13A2F",activeColor:"#ffffff",hoverColor:"#D13A2F",font:"body",size:13,radius:15,gap:10,buttonHeight:30,targets:{},hideWithoutZone:!0},isVisible(n,e=bs.defaults){return!e.hideWithoutZone||!!n?.editing||!!n?.doc?.scenes?.find(t=>t.id===n?.state?.sceneId)?.groupId},slots:[{key:"label",type:"text",label:"Texto del menú móvil"},{key:"emptyLabel",type:"text",label:"Aviso de zona sin escenas"},...[["fill","Fondo"],["color","Texto"],["activeFill","Fondo activo"],["activeColor","Texto activo"],["hoverColor","Texto hover"]].map(([n,e])=>({key:n,label:e,type:"color"})),{key:"font",type:"font",label:"Fuente"},{key:"size",type:"range",label:"Tamaño de texto",min:10,max:24},{key:"buttonHeight",type:"range",label:"Alto de píldora",min:24,max:60},{key:"gap",type:"range",label:"Separación",min:0,max:24},{key:"radius",type:"range",label:"Redondeo",min:0,max:40},{key:"hideWithoutZone",type:"toggle",label:"Ocultar en escenas sin zona"}],render(n,e){const t=de("summary"),i=de("nav",{"aria-label":n.label}),r=de("details",{className:"tour-zone-menu","data-ui":""},[t,i]);return wf.set(r,{summary:t,list:i,ctx:e,props:n,signature:null}),r.addEventListener("keydown",a=>{a.key==="Escape"&&(r.open=!1,t.focus())}),bs.update(r,n,e),r},update(n,e,t){const i=wf.get(n);Object.assign(i,{props:e,ctx:t});const r=t.doc?.scenes?.find(l=>l.id===t.state?.sceneId),a=ax(t.doc,e.targets);n.dataset.mobile=String(!!t.mobile),i.lastMobile!==!!t.mobile&&(n.open=!t.mobile,i.lastMobile=!!t.mobile),n.style.visibility=bs.isVisible(t,e)?"":"hidden",Qt(n,{fontFamily:e.font==="body"?"var(--tour-font-body)":En(e.font),fontSize:`${e.size}px`});for(const[l,o]of Object.entries({fill:e.fill,text:e.color,active:e.activeFill,"active-text":e.activeColor,hover:e.hoverColor,radius:`${e.radius}px`,gap:`${e.gap}px`,height:`${e.buttonHeight}px`}))n.style.setProperty(`--zone-${l}`,o);i.summary.textContent=`${r?.groupId&&a.find(l=>l.id===r.groupId)?.name||e.label}  ⌄`;const s=JSON.stringify(a.map(l=>[l.id,l.name,l.sceneId,e.emptyLabel]));s!==i.signature&&(i.signature=s,i.list.replaceChildren(...a.map(l=>{const o=de("button",{type:"button",text:l.name,"data-zone":l.id,title:l.sceneId?l.name:`${l.name} · ${e.emptyLabel}`});return o.disabled=!l.sceneId,o.addEventListener("click",c=>{c.stopPropagation(),!i.ctx.editing&&l.sceneId&&(i.ctx.goToScene?.(l.sceneId),i.ctx.mobile&&(n.open=!1))}),o})));for(const l of i.list.children){const o=l.dataset.zone===r?.groupId;l.classList.toggle("is-active",o),o?l.setAttribute("aria-current","location"):l.removeAttribute("aria-current")}}},Cf=new WeakMap,Rf={id:"tour-controls",kind:"element",name:"Audio, recorrido y llamada",category:"Barras",mobile:"keep",defaults:{skin:"",scaleWithContent:!0,guidedLabel:"GUIDED TOUR",callLabel:"SCHEDULE A CALL",audioLabel:"Audio",callAction:{type:"openEmbed",url:"",title:"Schedule a call",width:"90%",height:"90%"},fill:"#ffffff",color:"#000000",hoverColor:"#D13A2F",font:"body",radius:19},slots:[...[["guidedLabel","Texto del recorrido"],["callLabel","Texto de la llamada"],["audioLabel","Etiqueta de audio"]].map(([n,e])=>({key:n,label:e,type:"text"})),{key:"callAction",type:"action",label:"AcciÃ³n de llamada"},{key:"font",type:"font",label:"Fuente"},...[["fill","Fondo"],["color","Texto"],["hoverColor","Texto hover"]].map(([n,e])=>({key:n,label:e,type:"color"})),{key:"radius",type:"range",label:"Redondeo",min:0,max:40}],render(n,e){const t=de("button",{type:"button","data-action":"toggleAudio","data-audio-control":"true"}),i=de("button",{type:"button","data-action":"toggleAutopilot"}),r=de("button",{type:"button","data-action":"openEmbed"}),a=de("div",{className:"tour-segmented-controls","data-ui":""},[t,i,r]),s={ctx:e,props:n,audio:t,guided:i,call:r};Cf.set(a,s);for(const[l,o]of[[t,{type:"toggleAudio"}],[i,{type:"toggleAutopilot"}],[r,null]])l.addEventListener("click",c=>{c.stopPropagation(),s.ctx.editing||ps(o||s.props.callAction,s.ctx)});return Rf.update(a,n,e),a},update(n,e,t){const i=Cf.get(n);Object.assign(i,{props:e,ctx:t}),n.dataset.mobile=String(!!t.mobile),Qt(n,{background:e.fill,color:e.color,fontFamily:e.font==="body"?"var(--tour-font-body)":En(e.font),borderRadius:`${e.radius}px`}),n.style.setProperty("--control-hover",e.hoverColor);const r=!!t.playbackState?.audio?.muted,a=!!t.playbackState?.autopilot?.playing;if(i.skin!==e.skin&&(i.muted=void 0,i.playing=void 0,i.guidedLabel=void 0,i.skin=e.skin),i.audio.setAttribute("aria-label",`${e.audioLabel}: ${r?"off":"on"}`),i.audio.setAttribute("aria-pressed",String(!r)),i.audio.title=e.audioLabel,i.muted!==r&&(i.audio.replaceChildren(yi(r?"volume-x":"volume-2",{size:23})),i.muted=r),i.guided.setAttribute("aria-label",e.guidedLabel),i.guided.setAttribute("aria-pressed",String(a)),(i.playing!==a||i.guidedLabel!==e.guidedLabel)&&(i.guided.replaceChildren(de("span",{text:e.guidedLabel}),yi(a?"pause":"play",{size:16})),i.playing=a,i.guidedLabel=e.guidedLabel),i.call.textContent=e.callLabel,n.dataset.skin=e.skin||"",e.skin==="h-farm")for(const[s,l]of[[i.audio,r?Xi.muted:Xi.audio],[i.guided,a?Xi.paused:Xi.guided],[i.call,Xi.call]])s.firstElementChild?.getAttribute("src")!==l&&s.replaceChildren(de("img",{src:l,alt:"",draggable:!1}))}},Pf=new WeakMap,Lf={id:"panorama-variant-picker",kind:"element",name:"Versiones de la panorámica",category:"Botones",mobile:"keep",defaults:{label:"Ambiente",showIcons:!0,baseIcon:"sun",alternativeIcon:"moon",baseAsset:null,alternativeAsset:null,fill:"#ffffff",color:"#151515",activeFill:"#151515",activeColor:"#ffffff",radius:24},slots:[{key:"label",type:"text",label:"Etiqueta",toolbar:!0},{key:"showIcons",type:"toggle",label:"Mostrar iconos"},{key:"baseIcon",type:"icon",label:"Icono de la original"},{key:"alternativeIcon",type:"icon",label:"Icono de las alternativas"},{key:"baseAsset",type:"image",label:"PNG o imagen de la original (opcional)"},{key:"alternativeAsset",type:"image",label:"PNG o imagen de las alternativas (opcional)"},...[["fill","Fondo"],["color","Texto"],["activeFill","Fondo seleccionado"],["activeColor","Texto seleccionado"]].map(([n,e])=>({key:n,label:e,type:"color"})),{key:"radius",type:"range",label:"Redondeo",min:0,max:40}],render(n,e){const t=de("div",{className:"tour-panorama-picker","data-ui":"",role:"group"});return Pf.set(t,{ctx:e,signature:null}),Lf.update(t,n,e),t},update(n,e,t){const i=Pf.get(n);i.ctx=t;const r=t.doc?.scenes?.find(o=>o.id===t.state?.sceneId);let a=t.panoramaVariants||ia(r);t.editing&&a.length<2&&(a=[{id:"base",label:"Original"},{id:"demo",label:"Alternativa"}]),n.hidden=a.length<2,n.setAttribute("aria-label",e.label||"Versiones de la panorámica"),n.setAttribute("aria-busy",String(!!t.variantPending)),Object.assign(n.style,{background:e.fill,color:e.color,borderRadius:`${e.radius??24}px`});const l=JSON.stringify([a.map(o=>[o.id,o.label]),e,St(t.doc,e.baseAsset),St(t.doc,e.alternativeAsset),t.state?.panoramaVariantId,t.variantPending,t.variantError,t.editing,t.loading?.ready,t.playbackState?.video?.open]);l!==i.signature&&(i.signature=l,n.replaceChildren(...a.map((o,c)=>{const u=o.id===(t.state?.panoramaVariantId||"base"),f=de("button",{type:"button","aria-pressed":String(u),title:o.label});if(f.disabled=!!t.variantPending||!!t.loading&&!t.loading.ready||!!t.playbackState?.video?.open,Object.assign(f.style,{background:u?e.activeFill:"transparent",color:u?e.activeColor:e.color,borderRadius:`${e.radius??24}px`}),e.showIcons!==!1){const d=()=>yi(c===0?e.baseIcon||"sun":e.alternativeIcon||"moon",{size:18}),m=St(t.doc,c===0?e.baseAsset:e.alternativeAsset);if(m){const h=de("img",{src:m,alt:"",draggable:"false"});h.addEventListener("error",()=>h.replaceWith(d()),{once:!0}),f.append(h)}else f.append(d())}return f.append(de("span",{text:o.label})),f.addEventListener("click",d=>{d.stopPropagation(),i.ctx.editing||i.ctx.selectPanoramaVariant?.(o.id)}),f})),t.variantError&&n.append(de("span",{className:"tour-panorama-picker-error",role:"status",text:t.variantError})))}},sx=[Qi,bs,Rf,Lf,qu,Qu,Ji,Ol,ef,tf,nf,Tf,af,cf,uf,hf,gf,Ef,Ku,Ju],If=new Map;function ox(n){If.set(n.id,n)}function on(n){return If.get(n)||null}[...S_,...w_,...sx].forEach(ox);const ca=1440,da=900,$l=390,ql=844,lx=720,cx=.8,dx=1.25,Mi=16,si=12,Df={"top-left":[0,0],top:[.5,0],"top-right":[1,0],left:[0,.5],center:[.5,.5],right:[1,.5],"bottom-left":[0,1],bottom:[.5,1],"bottom-right":[1,1]},ux=["stretch-top","stretch-bottom","stretch-left","stretch-right","stretch-fill"],Yl=n=>ux.includes(n),Ur=n=>Number.isFinite(n)?n:0,ji=(n,e,t)=>Math.max(e,Math.min(t,n));function Kl(n,e,t={w:ca,h:da}){return!(n>0)||!(e>0)?1:ji(Math.sqrt(n/t.w*(e/t.h)),cx,dx)}const Si=n=>n>0&&n<lx;function Ei(n,e,t,i){const r=n.width/e,a=n.height/e;return{box:{left:n.left-t*r*(1-e),top:n.top-i*a*(1-e),width:r,height:a},origin:{x:t,y:i},scale:e,rect:n}}function Ai(n,e,t=1,i={}){const{anchor:r="top-left",x:a=0,y:s=0,w:l=0,h:o=0}=n||{},{W:c,H:u}=e,f=Ur(a)*t+Ur(n?.relativeX)*c,d=Ur(s)*t+Ur(n?.relativeY)*u,m=(l>0?l:Ur(i.w))*t,h=(o>0?o:Ur(i.h))*t;switch(r){case"stretch-top":return Ei({left:f,top:d,width:Math.max(0,c-2*f),height:h},t,0,0);case"stretch-bottom":return Ei({left:f,top:u-d-h,width:Math.max(0,c-2*f),height:h},t,0,1);case"stretch-left":return Ei({left:f,top:d,width:m,height:Math.max(0,u-2*d)},t,0,0);case"stretch-right":return Ei({left:c-f-m,top:d,width:m,height:Math.max(0,u-2*d)},t,1,0);case"stretch-fill":return Ei({left:f,top:d,width:Math.max(0,c-2*f),height:Math.max(0,u-2*d)},t,0,0);default:{const[v,p]=Df[r]||Df["top-left"],g=v*c+f,y=p*u+d-p*h,b=Number.isFinite(n?.minBottom)?Math.min(y,u-h-n.minBottom*t):y;return Ei({left:g-v*m,top:b,width:m,height:h},t,v,p)}}}function fx(n){return n==="stretch-top"||n==="top"||n==="top-left"||n==="top-right"?"top":n==="stretch-bottom"||n==="bottom"||n==="bottom-left"||n==="bottom-right"?"bottom":"center"}function Nf(n){return n==="top-left"||n==="left"||n==="bottom-left"||n==="stretch-left"?"left":n==="top-right"||n==="right"||n==="bottom-right"||n==="stretch-right"?"right":"center"}function hx(n,e,t){const{W:i,H:r}=e,a=t??Kl(i,r,{w:$l,h:ql}),s=new Map,l=[],o={top:[],center:[],bottom:[]},c=b=>Ai(b,{W:ca,H:da},1).rect;n.forEach(b=>{const A=b.frame||{};if(b.mode==="custom"&&b.mobileFrame){s.set(b.id,Ai(b.mobileFrame,e,a,{w:b.w,h:b.h}));return}if(Yl(A.anchor)||b.behavior==="keep"){l.push(b);return}const E=b.behavior==="dock-bottom"?"bottom":fx(A.anchor),w=c(A);o[E].push({item:b,sortTop:w.top,sortLeft:w.left})});let u=0,f=r;l.forEach(b=>{const A=Ai(b.frame,e,a,{w:b.w,h:b.h});s.set(b.id,A),b.frame?.anchor==="stretch-top"&&(u=Math.max(u,A.rect.top+A.rect.height)),b.frame?.anchor==="stretch-bottom"&&(f=Math.min(f,A.rect.top))});const d=(b,A)=>b.sortTop-A.sortTop||b.sortLeft-A.sortLeft;Object.values(o).forEach(b=>b.sort(d));const m=Math.max(0,i-2*Mi);function h(b,A){const{item:E}=b,w=E.frame||{},_=w.w>0?w.w*a:m,C=Math.min(_,m),T=E.scaleGroup&&w.w>0?Math.min(a,m/w.w):a,L=(E.h>0?E.h:w.h>0?w.h:0)*T,R=E.behavior==="dock-bottom"?"center":Nf(w.anchor),U=R==="left"?Mi:R==="right"?i-Mi-C:(i-C)/2;return s.set(E.id,Ei({left:U,top:A,width:C,height:L},T,0,0)),L}let v=u>0?u+si:Mi,p=u;o.top.forEach(b=>{const A=h(b,v);p=v+A,v=p+si});let g=f<r?f-si:r-Mi,S=f;if([...o.bottom].reverse().forEach(b=>{const A=b.item,E=(A.h>0?A.h:A.frame?.h>0?A.frame.h:0)*(A.scaleGroup&&A.frame?.w>0?Math.min(a,m/A.frame.w):a),w=g-E;h(b,w),S=w,g=w-si}),o.center.length){const b=o.center.map(({item:C})=>(C.h>0?C.h:C.frame?.h>0?C.frame.h:0)*(C.scaleGroup&&C.frame?.w>0?Math.min(a,m/C.frame.w):a)),A=b.reduce((C,T)=>C+T,0)+si*(b.length-1),E=o.top.length?p+si:u>0?u+si:Mi,w=o.bottom.length||f<r?S-si:r-Mi;let _=ji(r/2-A/2,E,Math.max(E,w-A));o.center.forEach((C,T)=>{h(C,_),_+=b[T]+si})}let y=0;return n.forEach(b=>{if(b.frame?.anchor!=="stretch-top")return;const A=s.get(b.id);A&&(y=Math.max(y,A.rect.top+A.rect.height))}),{scale:a,items:s,topInset:y}}function px(n,e,t){const i=t??Kl(e.W,e.H),r=new Map;let a=0;return n.forEach(s=>{const l=Ai(s.frame,e,i,{w:s.w,h:s.h});r.set(s.id,l),s.frame?.anchor==="stretch-top"&&(a=Math.max(a,l.rect.top+l.rect.height))}),{scale:i,items:r,topInset:a}}const mx=Object.freeze({enabled:!0,minScale:.75}),Zl=n=>n?.screens?.uiLayout??n?.uiLayout;function Jl(n){return{enabled:n?.enabled!==!1,minScale:Number.isFinite(n?.minScale)?ji(n.minScale,.5,1):mx.minScale}}function Ql(n,e,t,i=Si(n)){const r=Jl(t),a=i?{w:$l,h:ql}:{w:ca,h:da};return r.enabled?(!(n>0)||!(e>0),1):Kl(n,e,a)}function gx(n,e,t=1,i){const r=Math.min(1,e.width/Math.max(1,n.width),e.height/Math.max(1,n.height));return Math.max(Math.min(1,Jl(i).minScale/t),r)}function _s(n,e,t){return!n&&e&&t?e.left-t.left<t.right-e.right?"left":"right":Nf(n)==="left"?"left":"right"}const Ff=(n,e)=>n.left<e.left+e.width-.5&&e.left<n.left+n.width-.5&&n.top<e.top+e.height-.5&&e.top<n.top+n.height-.5,vx=(n,{W:e,H:t})=>n.left>=-.5&&n.top>=-.5&&n.left+n.width<=e+.5&&n.top+n.height<=t+.5;function bx(n,e,t){const i=Si(e.W),r=Jl(t),a=i?hx:px,s=(h,v,p)=>{const g=a(h,v,p);return h.filter(S=>r.enabled&&S.fixedScale).forEach(S=>{const y=i&&S.mode==="custom"?S.mobileFrame:S.frame;g.items.set(S.id,Ai(y,v,1,{w:S.w,h:S.h}))}),g};if(!r.enabled)return s(n,e);const l=i?{W:$l,H:ql}:{W:ca,H:da},o=s(n.map(h=>({...h,h:void 0})),l,1).items,c=n.map(h=>{const v=i&&h.mode==="custom"?"mobileFrame":"frame",p=h[v]||{};return{...h,[v]:{...p,h:Math.max(p.h||0,h.h||0)}}}),u=[];n.forEach((h,v)=>n.slice(v+1).forEach(p=>{h.avoidOverlap===!1||p.avoidOverlap===!1||Ff(o.get(h.id).rect,o.get(p.id).rect)||u.push([h.id,p.id])}));const f=h=>[...h.items.values()].every(v=>vx(v.rect,e))&&u.every(([v,p])=>!Ff(h.items.get(v).rect,h.items.get(p).rect));let d=Ql(e.W,e.H,r,i),m=s(c,e,d);if(!f(m)&&d>r.minScale){let h=r.minScale,v=d;if(m=s(c,e,h),f(m))for(let p=0;p<18;p++){const g=(h+v)/2,S=s(c,e,g);f(S)?h=g:v=g}d=h,m=s(c,e,d)}if(!f(m)){const h=new Map(m.items),v=s(n.map(p=>({...p,h:void 0})),e,d).items;n.forEach(p=>{const g=h.get(p.id),S=g.rect,y=o.get(p.id).rect,b=v.get(p.id).rect;let A=0,E=e.H;n.forEach(T=>{if(T.id===p.id||p.avoidOverlap===!1||T.avoidOverlap===!1)return;const L=o.get(T.id).rect,R=v.get(T.id).rect;S.left>=R.left+R.width-.5||R.left>=S.left+S.width-.5||(L.top+L.height<=y.top+.5&&(A=Math.max(A,Math.min(b.top,R.top+R.height+4*d))),y.top+y.height<=L.top+.5&&(E=Math.min(E,Math.max(b.top+1,R.top-4*d))))}),A=ji(A,0,Math.max(0,e.H-1)),E=ji(E,A+1,e.H);const w=Math.min(S.height,Math.max(1,E-A)),_={left:ji(S.left,0,Math.max(0,e.W-S.width)),top:ji(S.top,A,Math.max(A,E-w)),width:Math.min(S.width,e.W),height:w},C=Ei(_,g.scale,g.origin.x,g.origin.y);C.contentHeight=g.box.height,C.scroll=w<S.height-.5,m.items.set(p.id,C)})}return m.scale=n.some(h=>h.fixedScale)?1:d,m.topInset=Math.max(0,...n.filter(h=>h.frame?.anchor==="stretch-top").map(h=>{const v=m.items.get(h.id).rect;return v.top+v.height})),m}function _x(n,e,t,i){const r=n*n+e*e;return r>0?1+(n*t+e*i)/r:1}const xx=new Set(["size","titleSize","headingSize","valueSize","labelSize","fontSize","padding","gap","radius","contentWidth","contentHeight","detailGap"]);function jl(n,e,t){const i=structuredClone(n),r=(a,s=!1)=>{if(a.frame)for(const l of s?["w","h"]:["x","y","w","h"])typeof a.frame[l]=="number"&&(a.frame[l]*=e);a.props={...a.props};for(const[l,o]of Object.entries(a.props))xx.has(l)&&typeof o=="number"&&o>0&&(a.props[l]=o*e);a.template==="text"&&!(n.props?.size>0)&&s&&t>0,a.children?.forEach(l=>r(l))};return r(i,!0),i}function Uf(n,e){const t=structuredClone(n),i=t.props?.contentWidth||t.frame?.w||e;t.props={...t.props,contentWidth:e};const r=t.props.padding||0,a=Math.max(1,e-r*2)/Math.max(1,i-r*2);return t.children=t.children?.map(s=>({...s,frame:{...s.frame,x:r+((s.frame?.x||0)-r)*a,w:(s.frame?.w||i)*a}})),t}function yx(n,e){return{...n,frame:{...n.frame,h:e},props:{...n.props,autoFit:!1,contentHeight:0,detailFixedHeight:!0}}}function Mx(n,e){const t=n.mobile?.mode==="custom"&&n.mobile.frame;return e&&n.template==="group"&&t?.heightMode==="manual"&&t.h>0?{height:t.h,autoFit:!1}:{}}function ec(n,e){const t=structuredClone(n);if(t.version===2)return{...t,geometry:"outer"};if(t.geometry==="outer"||!t.elements?.length)return t;if(t.legacy||t.legacyPanel){if(t.elements.length!==1||t.elements[0].template!=="group"){const r=t.elements.map(o=>Ai(o.frame,{W:320,H:400},1,{w:320,h:80}).rect),a=Math.min(...r.map(o=>o.left)),s=Math.min(...r.map(o=>o.top)),l=Math.max(120,...r.map(o=>o.left+o.width-a));t.elements=[{id:`hotspot-detail-${t.elements[0]?.id||"root"}`,template:"group",name:"Detalle del hotspot",frame:{anchor:"top-left",x:0,y:0,w:l,h:0},props:{autoFit:!0,contentWidth:l,detailAutoLayout:!1},children:t.elements.map((o,c)=>({...o,frame:{...o.frame,anchor:"top-left",x:r[c].left-a,y:r[c].top-s}}))}]}delete t.legacy,delete t.legacyPanel}const i=t.elements[0];if(i.frame={anchor:"top-left",x:0,y:0,w:320,h:0,...i.frame},e==="detail"&&t.placement==="inline"){const r=i.props?.detailScale||1,a=i.frame.w,s=a/(i.props?.contentWidth||a);i.children=(i.children||[]).map(l=>{const o=jl(l,s);return o.frame.x=(l.frame.x||0)*s+15*r,o.frame.y=(l.frame.y||0)*s+21*r,o}),i.frame.w+=30*r,i.props={...i.props,contentWidth:i.frame.w,contentHeight:0,padding:(i.props?.padding||0)*s+12*r,detailAutoLayout:!1}}return t.geometry="outer",t}const kf=(n,e,t)=>{const i=Gi(e,t);return{...n.defaults,...e.props,children:e.children,width:i.w,height:i.h}},xs=(n,e,t)=>{const i=t.getTemplate("group");[...e.querySelectorAll(".tour-rt-group")].reverse().forEach(r=>i?.measure?.(r)),n.measure?.(e)};function Of(n,e,t,i,r){let a=!1;const s=aa(e,t,i,r.mobile?"mobile":"desktop");let l=Math.max(1,Gi(s[0],r.mobile).w||320);const o=document.createElement("div");o.className="hs-detail-stage",o.style.width=`${l}px`,o.style.setProperty("--s","1"),n.append(o);const c=s.map(p=>{const g=r.getTemplate(p.template);if(!g)return null;const S=kf(g,p,r.mobile),y=g.render(S,{...r,elementId:p.id,elementPath:p.id,groupDepth:0});return y.dataset.elId=p.id,y.dataset.template=p.template,o.append(y),xs(g,y,r),{template:g,node:y}}).filter(Boolean),u=()=>{const p=Math.min(1,n.clientWidth/l||1);o.style.transform=`scale(${p})`;const g=`${Math.max(1,o.offsetHeight)*p}px`;n.style.height!==g&&(n.style.height=g)};let f;const d=()=>{a||f||(f=requestAnimationFrame(()=>{f=null,!a&&(c.forEach(({template:p,node:g})=>xs(p,g,r)),u())}))},m=document.fonts;m?.ready?.then(d),m?.addEventListener?.("loadingdone",d),o.addEventListener?.("load",d,!0);const h=typeof ResizeObserver=="function"?new ResizeObserver(d):null;h?.observe(o),h?.observe(n),u();const v=()=>{a=!0,m?.removeEventListener?.("loadingdone",d),o.removeEventListener?.("load",d,!0),h?.disconnect(),f&&cancelAnimationFrame(f),c.forEach(({template:p,node:g})=>p.dispose?.(g)),o.remove()};return v.measure=()=>{c.forEach(({template:p,node:g})=>xs(p,g,r)),u()},v.update=(p,g,S,y=r)=>{const b=aa(p,g,S,y.mobile?"mobile":"desktop");return b.length!==c.length||b.some((A,E)=>A.id!==c[E].node.dataset.elId||A.template!==c[E].template.id)?!1:(r=y,l=Math.max(1,Gi(b[0],y.mobile).w||320),o.style.width=`${l}px`,b.forEach((A,E)=>{const{template:w,node:_}=c[E],C=kf(w,A,y.mobile);w.update(_,C,{...y,elementId:A.id,elementPath:A.id,groupDepth:0}),xs(w,_,y)}),u(),!0)},v}function ys(n,e){n?.targetSceneId&&e?.(n.targetSceneId,{camera:n.targetView??n.content?.targetView})}function Sx(n,e,t){const i=t.mobile?"mobile":"desktop",r=ra(n,t.mode,i),a=mu(n,i);return{detail:r?.enabled&&r.placement==="inline"?Rl(ec(r,"detail"),n,e):null,summary:n.content?.card?{...Dr(n,"card",{device:i}),version:n.content.card.version}:null,emptyNotice:t.mode==="edit"&&!!a?.enabled&&a.placement==="inline"&&pu(a,n)}}function Ex(n,e,t,i,r){let a,s,l,o,c,u,f=!1,d,m,h=!1,v,p,g;const S=new Map,y=new Map,b=()=>!!o&&(f||o.matches(".hs-co-card"));function A(){o&&(delete o.dataset.tourInlineOverflow,delete o.dataset.tourScrollEdge);for(const L of y.values())L.dispose(),L.body.remove();y.clear(),u?.remove(),u=null,_?.remove(),_=null,h&&c?.remove(),o&&f?o.remove():o&&m&&(m.cssText!==void 0&&(o.style.cssText=m.cssText),o.className=m.className,delete o.dataset.hotspotSurface,delete o.dataset.hsGeometry,m.children&&o.replaceChildren(...m.children),c&&(c.hidden=m.footHidden)),o=null,c=null,f=!1,h=!1,m=null,n.classList.toggle("hs-with-inline-detail",!1),n.classList.toggle("hs-with-card-surface",!1)}function E(L,R){let U=y.get(L);if(!R){U?.dispose(),U?.body.remove(),y.delete(L);return}if(U?.dispose.update(R,a,s,l))return;U?.dispose(),U?.body.remove();const I=document.createElement("div");I.className=L==="detail"?"hs-detail-body":"hs-marker-card-body",I.dataset.hotspotId=a.id,I.dataset.hotspotSurface=L,L==="card"?o.prepend(I):o.insertBefore(I,c);const x=Of(I,R,a,s,l);y.set(L,{body:I,dispose:x})}function w(){if(!o)return;const L=r.open&&!!p?.elements?.length,R=L?p:g,U=R?.geometry==="outer";o.classList.toggle("hs-detail-expanded",L),o.classList.toggle("hs-marker-composed",!!g),o.dataset.hotspotSurface=L?"detail":"card",o.dataset.hotspotId=a.id,U?o.dataset.hsGeometry="outer":delete o.dataset.hsGeometry;for(const[D,N]of y)N.body.hidden=D==="detail"?!L:L;R?(o.style.width=`${Gi(R.elements[0],l.mobile).w||320}px`,o.style.padding="0",o.style.gap="0",o.style.minWidth="0",o.style.height="",o.style.scale="",ri(o,{fill:"transparent",glass:!1,borderWidth:0,shadow:!1,radius:0})):(o.style.width=s.cardWidth?`${s.cardWidth}px`:"",o.style.padding="",o.style.gap="",o.style.minWidth="",ri(o,{...s,color:s.iconColor})),c&&(c.hidden=!p?.enabled||p.placement!=="inline"||p.reveal==="always"||!L&&!!g,c.textContent=L?"Ver menos":"Ver detalle",c.setAttribute("aria-expanded",String(L))),u&&(u.hidden=!L),n.classList.toggle("hs-with-inline-detail",!!p?.enabled&&p.placement==="inline"),n.classList.toggle("hs-with-card-surface",!!R),y.get(L?"detail":"card")?.dispose.measure?.();const I=R?.elements?.[0];if(R?.version===2&&R.layoutMode==="manual"){const D=I.props?.hotspotOriginX||0,N=I.props?.hotspotOriginY||0,B=`${L?"detail":"card"}:${R.template}:${l.mobile?"mobile":"desktop"}`,F=I.props?.detailReferenceHeight||S.get(B)||I.frame?.h||o.offsetHeight||0;if(S.set(B,F),o.dataset.resolvedOriginX=String(D),o.dataset.resolvedOriginY=String(N),o.dataset.detailReferenceHeight=String(F),b())o.style.translate=`${D}px ${N-F}px`;else{const z=typeof getComputedStyle=="function"&&getComputedStyle(o).bottom!=="auto";o.style.translate=`${D}px ${N+(z?(o.offsetHeight||0)-F:0)}px`}}else o.style.translate=m?.translate||"",delete o.dataset.resolvedOriginX,delete o.dataset.resolvedOriginY,delete o.dataset.detailReferenceHeight}let _=null;function C(L){if(!L){_?.remove(),_=null;return}if(!_){_=document.createElement("div"),_.className="hs-detail-empty",_.setAttribute("data-ui","");const R=document.createElement("span");R.textContent="Detalle vacío · agrega contenido";const U=document.createElement("button");U.type="button",U.textContent="Agregar contenido",U.addEventListener("pointerdown",I=>I.stopPropagation()),U.addEventListener("click",I=>{I.stopPropagation(),I.preventDefault(),l.onEditDetailContent?.(a)}),_.append(R,U)}(_.parentNode!==o||_!==o.lastElementChild)&&o.append(_)}function T(L,R,U){const I=sa.split(",").includes(L.content?.card?.host)?L.content.card.host:".hs-co-card";o&&d!==I&&A(),a=L,s=R,l=U,d=I;const x=Sx(a,s,l);p=x.detail,g=x.summary?Rl(ec(x.summary,"card"),a,s):null;const D=x.emptyNotice;return!p&&!g&&!D?(A(),!0):(o||=n.querySelector(d),!o&&(p||g||D)&&(o=document.createElement("div"),o.className="hs-co-card hs-detail-inline-card",o.style.left=`${s.dx??48}px`,o.style.top=`${s.dy??-40}px`,n.append(o),f=!0),o&&(!f&&!m&&(m={cssText:o.style.cssText,className:o.className,translate:o.style.translate,children:o.childNodes?[...o.childNodes]:null,footHidden:!!o.querySelector(".hs-co-foot")?.hidden}),C(D),c||=o.querySelector(".hs-co-foot"),!p&&h&&(c?.remove(),c=null,h=!1),!c&&p&&(c=document.createElement("span"),c.className="hs-co-foot",o.append(c),h=!0),g&&!o.matches(".hs-co-card")&&!y.has("card")&&(o.replaceChildren(),c=null,o.classList.add("hs-marker-piece-host"),o.style.display="block"),E("card",g),E("detail",p),a.type==="nav"&&p&&!u?(u=document.createElement("button"),u.className="hs-detail-enter",u.textContent="Entrar",u.onclick=N=>{N.stopPropagation(),l.mode!=="edit"&&ys(a,l.goToScene)},o.insertBefore(u,c)):u&&(a.type!=="nav"||!p)&&(u.remove(),u=null),v={x:s.dx??(parseFloat(o.style.left)||48),y:s.dy??(parseFloat(o.style.top)||-40)},b()&&(o.style.left=`${v.x}px`,o.style.top=`${v.y}px`),w()),!0)}return T(e,t,i),{update:T,paint:w,setOffset(L,R){o&&(v={x:L,y:R})},click(L){return p?(L.target.closest("button,a,input,select,textarea")||y.get("detail")?.body.contains(L.target)||p.reveal!=="always"&&(r.toggle(),w()),!0):!1},constrain(L){if(!o||!p&&!g)return;o.style.scale="",delete o.dataset.tourInlineOverflow,delete o.dataset.tourScrollEdge;const U=o.getBoundingClientRect().width/o.offsetWidth||1;o.style.maxWidth=`${Math.max(120,(L.width-24)/U)}px`,b()&&(o.style.left=`${v.x}px`,o.style.top=`${v.y}px`);const I=o.getBoundingClientRect(),x=typeof getComputedStyle=="function"&&parseFloat(getComputedStyle(n).zoom)||1,D={width:Math.max(1,L.width-24),height:Math.max(1,L.height-24)},N=gx(I,D,x,Zl(l.doc?.design));N<1&&(o.style.scale=String(N)),I.height*N>D.height+.5&&(o.dataset.tourInlineOverflow="",o.dataset.tourScrollEdge=_s(null,I,L),o.style.setProperty("--tour-inline-height",`${D.height/U/N}px`));const B=o.getBoundingClientRect(),F=U,z=U,K=(B.right>L.right-12?L.right-12-B.right:B.left<L.left+12?L.left+12-B.left:0)/F,ie=(B.top<L.top+12?L.top+12-B.top:B.bottom>L.bottom-12?L.bottom-12-B.bottom:0)/z;b()&&(o.style.left=`${v.x+K}px`,o.style.top=`${v.y+ie}px`);const $=n.querySelector(".hs-co-line line");$&&($.setAttribute("x2",v.x+K),$.setAttribute("y2",v.y+ie),$.style.setProperty("--len",Math.hypot(v.x+K,v.y+ie)))},dispose(){A()}}}function Bf(){let n,e=!1,t=!1;return{configure(i){const r=`${!!i?.enabled}:${i?.placement}:${i?.reveal}`;r!==n&&(e=!1,t=!1),n=r,this.detail=i},preview(i){t=!!i},resetVisitor(){e=!1},toggle(){e=!e},get open(){return!!this.detail?.enabled&&this.detail.placement==="inline"&&(this.detail.reveal==="always"||t||e)},get previewing(){return t}}}const Ax=[".hs-co-card",".hs-fc-card"],tc=n=>n?.version===2||n?.geometry==="outer";function ua(n,e){const t=Dr(n,"detail"),i=Dr(n,"card");return i&&(!i.host||Ax.includes(i.host))&&(e==="card"||!t?.enabled||t.placement!=="inline")?"card":t?.enabled&&t.placement==="inline"&&t.elements?.[0]?.template==="group"?"detail":null}const Ms=5;function zf(n,e,t,i){const r=ua(n,i);if(!r||!Number.isFinite(t))return null;const a=structuredClone(n.content[r]);return a.elements[0]=yx(a.elements[0],Math.max(Ms,Math.round(t*100)/100)),r==="detail"&&(delete a.legacy,delete a.legacyPanel),{style:structuredClone(e||{template:"circle-icon",props:{}}),content:{...n.content,[r]:a}}}function Hf(n,e,t,i){const r=n.elements[0],a=aa(n,e,t?.props)[0],s=a.props?.hotspotOriginX||0,l=a.frame?.w||r.frame?.w||320,o=Math.max(60-s,l*i),c=r.props?.padding||0,u=Math.max(1,o-c*2)/Math.max(1,l-c*2);return{...r,frame:{...r.frame,w:o+s},props:{...r.props,contentWidth:o},children:r.children?.map(f=>({...f,frame:{...f.frame,x:s+c+((f.frame?.x||0)-s-c)*u,w:(f.frame?.w||l)*u}}))}}function Tx(n,e,t,i,r){const a=structuredClone(e||{template:"circle-icon",props:{}});a.props={...a.props};const s=Dr(n,"detail"),l=Dr(n,"card");if(l&&(!l.host||[".hs-co-card",".hs-fc-card"].includes(l.host))&&(r==="card"||!s?.enabled||s.placement!=="inline")){const o=structuredClone(n.content.card),c=o.elements[0];return o.elements[0]=i?jl(c,t):tc(n.content.card)?Hf(l,n,a,t):Uf(c,Math.max(60,c.frame.w*t)),!i&&!tc(n.content.card)&&(o.elements[0].frame.w=Math.max(60,c.frame.w*t)),l.host===".hs-fc-card"&&(a.props.size=o.elements[0].frame.w*(a.props.markerScale||1),a.props.markerWidth=a.props.size),{style:a,content:{...n.content,card:o}}}if(s?.enabled&&s.placement==="inline"&&s.elements?.[0]?.template==="group"){const o=structuredClone(n.content.detail),c=o.elements[0],u=c.frame?.w||320;if(i)o.elements[0]=jl(c,t),o.elements[0].props.detailScale=(c.props?.detailScale||1)*t,o.elements[0].props.detailGap=(c.props?.detailGap??12)*t;else if(tc(n.content.detail))o.elements[0]=Hf(s,n,a,t);else{const f=30*(c.props?.detailScale||1),d=Math.max(60,(u+f)*t-f);o.elements[0]=Uf(c,d),o.elements[0].frame.w=d}return delete o.legacy,delete o.legacyPanel,{style:a,content:{...n.content,detail:o}}}return a.template==="callout"?i?a.props.cardScale=(a.props.cardScale||1)*t:a.props.cardWidth=Math.max(60,(a.props.cardWidth||240)*t):i?(a.props.size=Math.max(8,(a.props.size||30)*t),a.props.markerScale=(a.props.markerScale||1)*t,a.props.markerWidth&&(a.props.markerWidth*=t)):a.props.markerWidth=Math.max(8,(a.props.markerWidth||a.props.size||30)*t),{style:a}}function wx({height:n,bottom:e},t,i){const r=s=>Math.round(s*100)/100;if(t==="n")return{height:r(Math.max(Ms,n+i)),bottom:e};const a=Math.max(Ms-n,Math.min(e,i));return{height:r(n+a),bottom:r(e-a)}}function Cx({bottom:n},e,t){return e==="s"&&t>n?"Límite del punto. Usa la manija superior para dar más altura.":""}function Rx(n,e,t,i){const r=e.includes("w"),a=e.includes("n"),s=e.length===2;if(e==="n"||e==="s"){const f=Math.max(Ms/n.height,Math.min(4,1+(a?-i:i)/n.height)),d=n.height*f;return{left:n.left,top:a?n.top+n.height-d:n.top,width:n.width,height:d,factor:f,corner:!1,axis:"y",handle:e,grow:d-n.height}}const l=1+(r?-t:t)/n.width,o=Math.max(.25,Math.min(4,s?_x(n.width,n.height,r?-t:t,a?-i:i):l)),c=n.width*o,u=s?n.height*o:n.height;return{left:r?n.left+n.width-c:n.left,top:a?n.top+n.height-u:n.top,width:c,height:u,factor:o,corner:s,axis:s?"both":"x"}}function Px(n,e,t){const i=(e.left-t.left)/n.scale,r=(e.top-t.top)/n.scale;return{left:n.dx+i,top:n.dy+r,authoredDx:n.authoredDx+i,authoredDy:n.authoredDy+r}}const Lx=n=>n&&n.width>0&&n.height>0;function Ix(n){const e=n.filter(Lx),t=e.length?e:n.filter(Boolean).slice(0,1);if(!t.length)return{left:0,top:0,right:0,bottom:0,width:0,height:0};const i=Math.min(...t.map(l=>l.left)),r=Math.min(...t.map(l=>l.top)),a=Math.max(...t.map(l=>l.right??l.left+l.width)),s=Math.max(...t.map(l=>l.bottom??l.top+l.height));return{left:i,top:r,right:a,bottom:s,width:a-i,height:s-r}}function nc(n,e=!1){const t=[n.getBoundingClientRect()];return e&&n.querySelectorAll("*").forEach(i=>t.push(i.getBoundingClientRect())),Ix(t)}function Dx({wrapper:n,target:e,anchor:t,handles:i=["nw","n","ne","e","se","s","sw","w"],availableHandles:r,start:a,preview:s,commit:l,cancel:o}){const c=document.createElement("div");c.className="hs-resize-outline",c.setAttribute("data-ui",""),n.appendChild(c);const u=document.createElement("div");u.className="hs-set-outline",u.setAttribute("data-ui",""),n.appendChild(u);const f=document.createElement("span");f.className="hs-resize-hint",f.setAttribute("role","status"),f.hidden=!0,c.appendChild(f);let d,m;const h=()=>{clearTimeout(m),f.hidden=!0,f.textContent=""},v=()=>nc(e,e===t),p=()=>{if(!e.isConnected||!d&&!n.classList.contains("hs-marker--selected")&&!n.matches?.(":hover"))return;if(r){const w=r();for(const _ of c.querySelectorAll("[data-resize-handle]"))_.hidden=!w.includes(_.dataset.resizeHandle)}const b=n.getBoundingClientRect(),A=v(),E=b.width/n.offsetWidth||1;if(Object.assign(c.style,{left:`${(A.left-b.left)/E}px`,top:`${(A.top-b.top)/E}px`,width:`${A.width/E}px`,height:`${A.height/E}px`}),t&&t!==e){const w=nc(t,!0),_=6,C=Math.min(A.left,w.left)-_,T=Math.min(A.top,w.top)-_,L=Math.max(A.right,w.right)+_,R=Math.max(A.bottom,w.bottom)+_;Object.assign(u.style,{left:`${(C-b.left)/E}px`,top:`${(T-b.top)/E}px`,width:`${(L-C)/E}px`,height:`${(R-T)/E}px`})}};for(const b of i){const A=document.createElement("button");A.type="button",A.className=`hs-resize-handle hs-resize-handle--${b}`,A.dataset.resizeHandle=b;const E=b==="n"||b==="s";A.setAttribute("aria-label",b.length===2?`Escalar hotspot ${b}`:`Cambiar ${E?"alto":"ancho"} del hotspot ${b}`),A.title=b.length===2?"Arrastra para escalar todo":`Arrastra para cambiar el ${E?"alto":"ancho"}`,A.addEventListener("pointerdown",w=>{if(w.button!==0)return;w.preventDefault(),w.stopPropagation(),h();const _=v();d={handle:b,box:_,x:w.clientX,y:w.clientY,moved:!1},a?.(),c.setPointerCapture(w.pointerId)}),A.addEventListener("click",w=>{w.preventDefault(),w.stopPropagation()}),c.appendChild(A)}c.addEventListener("pointermove",b=>{if(!d)return;b.preventDefault(),b.stopPropagation(),d.moved=!0;const A=s(Rx(d.box,d.handle,b.clientX-d.x,b.clientY-d.y));f.textContent=A||"",f.hidden=!A,p()});const g=b=>{if(!d)return;b.stopPropagation();const A=d.moved;d=null,b.type==="pointerup"&&A?(l(),m=setTimeout(h,1800)):(o(),h()),p()};for(const b of["pointerup","pointercancel","lostpointercapture"])c.addEventListener(b,g);const S=b=>{b.key==="Escape"&&d&&(b.preventDefault(),b.stopImmediatePropagation(),d=null,o(),h(),p())},y=b=>{d&&(d=null,o(),h(),p(),b.preventDefault())};return window.addEventListener("tour-studio:cancel-active-gesture",y),window.addEventListener("keydown",S,!0),{sync:p,dispose(){h(),u.remove(),window.removeEventListener("keydown",S,!0),window.removeEventListener("tour-studio:cancel-active-gesture",y),c.remove()}}}const Nx=(n,e,t)=>Math.max(e,Math.min(t,n));function Fx(n,e,t,i){if(e==="e")return{width:Math.round(Nx(n.width+t,wu,Cu))};const r=e==="s"?2*i:-2*i;return{height:Math.round(Math.max(5,n.height+r))}}function Ux({wrapper:n,content:e,isSelected:t,setSelected:i,onSelect:r,onChange:a}){const s=e.querySelector(".hs-label-chip");if(!s)return null;const l=document.createElement("div");l.className="hs-label-outline",l.setAttribute("data-ui","");const o={};for(const p of["e","n","s"]){const g=document.createElement("button");g.type="button",g.className=`hs-label-handle hs-label-handle--${p}`,g.dataset.labelHandle=p,g.setAttribute("aria-label",p==="e"?"Cambiar el ancho de la etiqueta":"Cambiar el alto de la etiqueta"),l.appendChild(g),o[p]=g}n.appendChild(l);let c=null,u=!1;const f=()=>n.getBoundingClientRect().width/(n.offsetWidth||1)||1;function d(){const p=t()&&s.isConnected;if(l.style.visibility=p?"visible":"hidden",s.classList.toggle("hs-label--selected",t()),!p)return;const g=n.getBoundingClientRect(),S=s.getBoundingClientRect(),y=f();Object.assign(l.style,{left:`${(S.left-g.left)/y}px`,top:`${(S.top-g.top)/y}px`,width:`${S.width/y}px`,height:`${S.height/y}px`})}const m=p=>{if(p.button!==0||(p.stopPropagation(),u))return;p.preventDefault();const g=t();i(!0),d(),g||r?.()};s.addEventListener("pointerdown",m),s.addEventListener("click",p=>p.stopPropagation());function h(p,g){if(!u)return;u=!1,s.removeAttribute("contenteditable");const S=s.textContent.replace(/\s+/g," ").trim();p&&S&&S!==g?a({label:S}):s.textContent=g,d()}s.addEventListener("dblclick",p=>{if(p.stopPropagation(),p.preventDefault(),u)return;u=!0,i(!0);const g=s.textContent;s.setAttribute("contenteditable","true"),s.focus();const S=document.createRange();S.selectNodeContents(s);const y=getSelection();y.removeAllRanges(),y.addRange(S),s.onkeydown=b=>{b.stopPropagation(),b.key==="Enter"?(b.preventDefault(),h(!0,g)):b.key==="Escape"&&(b.preventDefault(),h(!1,g))},s.onblur=()=>h(!0,g)});for(const[p,g]of Object.entries(o)){g.addEventListener("pointerdown",y=>{if(y.button!==0)return;y.preventDefault(),y.stopPropagation();const b=s.getBoundingClientRect(),A=f();c={name:p,x:y.clientX,y:y.clientY,scale:A,start:{width:b.width/A,height:b.height/A},before:{width:s.style.width,minHeight:s.style.minHeight,maxWidth:s.style.maxWidth}},g.setPointerCapture?.(y.pointerId)}),g.addEventListener("pointermove",y=>{if(!c)return;y.stopPropagation();const b=Fx(c.start,p,(y.clientX-c.x)/c.scale,(y.clientY-c.y)/c.scale);c.next=b,b.width&&(s.style.width=`${b.width}px`,s.style.maxWidth="none"),b.height&&(s.style.minHeight=`${b.height}px`),d()});const S=y=>{if(!c)return;y.stopPropagation();const b=c;c=null,y.type==="pointerup"&&b.next?a(b.next.width?{labelWidth:b.next.width}:{labelHeight:b.next.height}):Object.assign(s.style,{width:b.before.width,minHeight:b.before.minHeight,maxWidth:b.before.maxWidth}),d()};for(const y of["pointerup","pointercancel"])g.addEventListener(y,S)}const v=p=>{!t()||s.contains(p.target)||l.contains(p.target)||(i(!1),d())};return window.addEventListener("pointerdown",v,!0),{sync:d,dispose(){window.removeEventListener("pointerdown",v,!0),l.remove()}}}const kx=4,ic=(n,e,t)=>ls({type:n.type,locked:n.locked},{...e,props:{...e?.props,dx:0,dy:0}},t,"");function Ox({scene:n,mode:e,pick:t,onOpen:i,onClick:r,onSelect:a,onMove:s,onStyleMove:l,onResize:o,onEditPiece:c,container:u,getContext:f=()=>({})}){let d=[];const m=new Map;let h=[],v=!1;const p=new Map,g=new Map,S=new Set,y=new Set,b=new Map,A=new Map,E=new Set;let w=null,_,C,T;function L(){const F=f();return(T===void 0||F.doc?.design!==_||F.doc?.assets!==C)&&(_=F.doc?.design,C=F.doc?.assets,T=gu(F)),T}const R=u&&typeof ResizeObserver<"u"?new ResizeObserver(()=>{const F=Ll(u.clientWidth);F!==v&&(v=F,N(h))}):null;u&&(v=Ll(u.clientWidth),R?.observe(u));function U(F){const z=m.get(F);z&&(g.get(F)?.dispose(),g.delete(F),b.get(F)?.dispose(),b.delete(F),A.get(F)?.dispose(),A.delete(F),y.delete(F),n.remove(z.obj),m.delete(F))}function I(){S.forEach(clearTimeout),S.clear(),[...m.keys()].forEach(U),d=[]}function x(F,z,K,ie){const $=on(z?.template)||on("circle-icon"),Z={...f(),getTemplate:on,hotspot:F,mode:e,mobile:v},ae={...Tn($.defaults,z?.props),markerImage:z?.markerImage},W=F.content?.detail?.enabled&&F.content.detail.placement==="inline"?1:ae.markerScale||1,ne={...ae,size:ae.size/W,...ae.markerWidth?{markerWidth:ae.markerWidth/W}:{}},q=$.render(ne,Z);W!==1&&(q.style.scale=String(W)),ae.markerWidth&&W&&(q.style.width=`${ae.markerWidth/W}px`);const ge=Ex(q,F,ae,Z,p.get(F.id));g.set(F.id,ge);const fe=document.createElement("div");fe.className="hs-marker",fe.setAttribute("data-ui",""),fe.dataset.hotspotId=F.id,fe.style.pointerEvents="auto",fe.appendChild(q);const pe=new db(fe);$.id==="hotspot-image"&&pe.center.set(ae.anchorX??.5,ae.anchorY??.5),pe.position.copy(Ir(K,ie));const _e={obj:pe,content:q,appearance:ic(F,z,v),templateId:z?.template,key:ls(F,z,v,L()),refresh(ce,ve){F=ce,z=ve,Object.assign(Z,f(),{hotspot:F})},adopt(ce){_e.refresh({...F,...ce},ce.style??z),_e.appearance=ic(F,z,v),_e.key=ls(F,z,v,L())}};if(e==="edit"){if(fe.classList.add("hs-marker--edit"),F.locked&&fe.classList.add("hs-marker--locked"),D(fe,q,()=>({hotspot:F,style:z}),pe,!F.locked,ce=>_e.adopt(ce)),w===F.id&&fe.classList.add("hs-marker--selected"),!F.locked){const ce=Ux({wrapper:fe,content:q,isSelected:()=>E.has(F.id),setSelected:ve=>{ve?E.add(F.id):E.delete(F.id)},onSelect:()=>{w=F.id,fe.classList.add("hs-marker--selected"),d.forEach(ve=>{ve.element!==fe&&ve.element.classList?.remove("hs-marker--selected")}),r?.(F,q.getBoundingClientRect())},onChange:ve=>{const Le={...z,template:z?.template||$.id,props:{...Tn($.defaults,z?.props),...ve}};_e.adopt({style:Le}),l?.(F.id,Le)}});ce&&A.set(F.id,ce)}if(!F.locked){const ce=q.querySelector(".hs-co-card")||q,ve=($.id||z?.template)==="hotspot-card",Le=ce===q&&$.id==="navigation-ring";let Re,Oe;const Ye=ze=>{const at={...Tn($.defaults,z?.props)};ce!==q&&!ua(F,ce.classList.contains("hs-detail-expanded")?"detail":"card")&&(at.cardWidth=Re.cardWidth),Le?delete at.markerWidth:ce===q&&(at.markerWidth=Re.visualWidth);const Ge=ce.classList.contains("hs-detail-expanded")?"detail":"card";if(ve&&ze.axis==="y"){const V=wx({height:Re.cardH,bottom:Re.cardBottom},ze.handle,ze.grow/Re.cardScale),ft={...Tn($.defaults,z?.props),cardHeight:V.height,cardBottom:V.bottom};if(Oe={style:{...z,template:$.id||z?.template,props:ft}},ua(F,"card")==="card"){const Je=zf(F,Oe.style,V.height,"card");Je&&(Oe.content=Je.content,ge.update({...F,content:Oe.content},ft,Z))}return q.style.setProperty("--hs-fc-h",`${V.height}px`),q.style.setProperty("--hs-fc-bottom",`${V.bottom}px`),Cx({bottom:Re.cardBottom},ze.handle,ze.grow/Re.cardScale)}const He={...z,template:$.id||z?.template,props:at};if(Oe=ze.axis==="y"?zf(F,He,Re.height*ze.factor,Ge):Tx(F,He,ze.factor,ze.corner,Ge),!!Oe)if(ce!==q){ce.style.left=`${Re.dx}px`,ce.style.top=`${Re.dy}px`,Oe.content?ge.update({...F,content:Oe.content},Oe.style.props,Z):(ce.style.width=`${Oe.style.props.cardWidth||240}px`,ce.style.scale=String(Oe.style.props.cardScale||1),ce.style.transformOrigin="bottom left"),ce.style.left=`${Re.dx}px`,ce.style.top=`${Re.dy}px`,Oe.content&&(ce.style.scale=Re.visualScale),ce.style.animation="none";const V=ce.getBoundingClientRect(),{left:ft,top:Je,authoredDx:k,authoredDy:M}=Px(Re,ze,V);ce.style.left=`${ft}px`,ce.style.top=`${Je}px`,Oe.style.props.dx=k,Oe.style.props.dy=M,g.get(F.id)?.setOffset(Oe.style.props.dx,Oe.style.props.dy);const Y=q.querySelector(".hs-co-line line");Y?.setAttribute("x2",ft),Y?.setAttribute("y2",Je)}else{Oe.content?.card&&ge.update({...F,content:Oe.content},Oe.style.props,Z);const V=Oe.style.props.markerScale||1;q.style.scale=String(V),Le?q.style.removeProperty("width"):(q.style.setProperty("--hs-size",`${(Oe.style.props.size||30)/V}px`),q.style.width=`${(Oe.style.props.markerWidth||Oe.style.props.size||30)/V}px`)}};b.set(F.id,Dx({wrapper:fe,target:ce,anchor:q,availableHandles:()=>{if(ve)return["nw","n","ne","e","se","s","sw","w"];const ze=!!ua(F,"card")||!!ua(F,"detail");return Le&&!ze?["nw","ne","se","sw"]:["nw",...ze?["n"]:[],"ne","e","se",...ze&&ce!==q?["s"]:[],"sw","w"]},start(){w=F.id,fe.classList.add("hs-marker--selected"),y.add(F.id);const ze=ve?q.querySelector(".hs-fc-card"):null,at=Tn($.defaults,z?.props);Re={authoredDx:at.dx??48,authoredDy:at.dy??-40,visualScale:ce.style.scale,cardH:ze?.offsetHeight||0,cardBottom:Number.isFinite(Number(Tn($.defaults,z?.props).cardBottom))?Number(Tn($.defaults,z?.props).cardBottom):12,cardScale:ze&&ze.getBoundingClientRect().height/(ze.offsetHeight||1)||1,dx:parseFloat(ce.style.left)||0,dy:parseFloat(ce.style.top)||0,cardWidth:ce.offsetWidth,height:ce===q?nc(q,!0).height/(fe.getBoundingClientRect().width/fe.offsetWidth||1):ce.offsetHeight,visualWidth:ce.getBoundingClientRect().width/(fe.getBoundingClientRect().width/fe.offsetWidth||1),targetStyle:ce.style.cssText,contentStyle:q.style.cssText,scale:fe.getBoundingClientRect().width/fe.offsetWidth||1}},preview:Ye,commit(){y.delete(F.id),Oe&&(_e.adopt(Oe),o?.(F.id,Oe))},cancel(){const ze=ce.getBoundingClientRect();Ye({factor:1,corner:!0,left:ze.left,top:ze.top}),ce.style.cssText=Re.targetStyle,q.style.cssText=Re.contentStyle,g.get(F.id)?.setOffset(Re.authoredDx,Re.authoredDy),y.delete(F.id)}}))}}else fe.addEventListener("click",ce=>{if(ce.stopPropagation(),ge.click(ce)){i?.(F);return}i?.(F)});return _e}function D(F,z,K,ie,$,Z){let ae=!1,W=!1,ne=0,q=0,ge=null,fe=null;const pe=z.querySelector(".hs-co-card"),_e=z.querySelector(".hs-co-line line");F.addEventListener("pointerdown",ve=>{if(ve.button!==0)return;S.forEach(clearTimeout),S.clear(),ve.stopPropagation(),ve.preventDefault();const{hotspot:Le}=K();w=Le.id,d.forEach(Re=>Re.element.classList.toggle?.("hs-marker--selected",Re.element===F)),ae=!0,y.add(Le.id),W=!1,ne=ve.clientX,q=ve.clientY,fe=ie.position.clone(),ge=pe?.contains(ve.target)?{dx:parseFloat(pe.style.left),dy:parseFloat(pe.style.top),scale:z.getBoundingClientRect().width/z.offsetWidth||1}:null,F.setPointerCapture(ve.pointerId)}),F.addEventListener("pointermove",ve=>{if(!ae||(ve.stopPropagation(),!$)||!W&&Math.hypot(ve.clientX-ne,ve.clientY-q)<kx)return;if(W=!0,ge){const Re=Math.round(Math.max(-800,Math.min(800,ge.dx+(ve.clientX-ne)/ge.scale))),Oe=Math.round(Math.max(-800,Math.min(800,ge.dy+(ve.clientY-q)/ge.scale)));pe.style.animation="none",pe.style.left=`${Re}px`,pe.style.top=`${Oe}px`,_e?.setAttribute("x2",Re),_e?.setAttribute("y2",Oe),_e?.style.setProperty("--len",Math.hypot(Re,Oe));return}const Le=t(ve.clientX,ve.clientY);Le&&ie.position.copy(Ir(Le.lon,Le.lat))});function ce(ve){if(!ae)return;ve.stopPropagation(),ae=!1;const{hotspot:Le,style:Re}=K();if(y.delete(Le.id),ve.type!=="pointerup"){ge?(pe.style.left=`${ge.dx}px`,pe.style.top=`${ge.dy}px`,_e?.setAttribute("x2",ge.dx),_e?.setAttribute("y2",ge.dy),_e?.style.setProperty("--len",Math.hypot(ge.dx,ge.dy))):ie.position.copy(fe);return}if(W){if(ge){g.get(Le.id)?.setOffset(parseFloat(pe.style.left),parseFloat(pe.style.top));const Ye={template:Re?.template||"callout",props:{...Re?.props??{},dx:parseFloat(pe.style.left),dy:parseFloat(pe.style.top)}};Z({style:Ye}),l?.(Le.id,Ye);return}const Oe=t(ve.clientX,ve.clientY);Oe&&s?.(Le.id,Oe)}else if(a?.(Le),!c||!$)r?.(Le,z.getBoundingClientRect());else{const Oe=setTimeout(()=>{S.delete(Oe),d.includes(ie)&&r?.(K().hotspot,z.getBoundingClientRect())},350);S.add(Oe)}}F.addEventListener("pointerup",ce),F.addEventListener("pointercancel",ce),F.addEventListener("lostpointercapture",ce),F.addEventListener("click",ve=>ve.stopPropagation()),F.addEventListener("dblclick",ve=>{if(ve.stopPropagation(),ve.preventDefault(),!$||!c)return;S.forEach(clearTimeout),S.clear();const{hotspot:Le}=K(),Re=Nb(z,ve.clientX,ve.clientY,ve.target);if(!Re.closest?.(sa)){r?.(Le,z.getBoundingClientRect());return}c(Le,Mu(Re,F,Le),z.getBoundingClientRect())})}function N(F){for(const K of p.keys())F.some(({hotspot:ie})=>ie.id===K)||p.delete(K);h=F;const z=new Set(F.map(({hotspot:K})=>K.id));[...m.keys()].filter(K=>!z.has(K)).forEach(U);for(const{hotspot:K,style:ie,lon:$,lat:Z}of F){const ae=K.id,W=ls(K,ie,v,L());let ne=m.get(ae);if(p.has(ae)||p.set(ae,Bf()),p.get(ae).configure(ra(K,e)),ne&&ne.key!==W&&ne.appearance===ic(K,ie,v)&&ne.templateId===ie?.template&&ne.obj.element.hasAttribute?.("data-piece-editing")){const q={...f(),getTemplate:on,hotspot:K,mode:e,mobile:v},ge=Tn(on(ie?.template)?.defaults||{},ie?.props);g.get(ae)?.update(K,ge,q)===!0&&(ne.refresh(K,ie),ne.key=W)}if(!ne||ne.key!==W){const q=ne?.obj.element,ge=q?.parentNode,fe=q?.nextSibling,pe=q?.style.transform;U(ae),ne=x(K,ie,$??K.lon,Z??K.lat),ge&&(ne.obj.element.style.transform=pe,ge.insertBefore(ne.obj.element,fe)),m.set(ae,ne),n.add(ne.obj)}else ne.refresh(K,ie);y.has(ae)||ne.obj.position.copy(Ir($??K.lon,Z??K.lat))}F.forEach(({hotspot:K},ie)=>{const $=m.get(K.id).obj.element;$?.style&&($.style.zIndex=String(ie+1))}),d=F.map(({hotspot:K})=>m.get(K.id).obj)}function B(){R?.disconnect(),I()}return{setEntries:N,dispose:B,setMode(F){if(e!==F){e=F;for(const z of p.values())z.resetVisitor();I(),N(h)}},select(F){w=F,d.forEach((z,K)=>z.element.classList.toggle?.("hs-marker--selected",h[K]?.hotspot.id===F))},constrainDetails(F){const z=F||u?.getBoundingClientRect();d.forEach((K,ie)=>{K.element.style.display!=="none"&&(z&&!y.has(h[ie]?.hotspot.id)&&g.get(h[ie]?.hotspot.id)?.constrain?.(z),b.get(h[ie]?.hotspot.id)?.sync(),A.get(h[ie]?.hotspot.id)?.sync())})},previewDetail(F,z){p.has(F)||p.set(F,Bf()),p.get(F).preview(z),g.get(F)?.paint()}}}const Ss=85,Bx=-60,rc={kind:"color",color:"#000000",image:null,sizePct:20},Vf=495,er=1024,ac=(n,e,t)=>Math.max(e,Math.min(t,n)),Gf=n=>typeof n=="number"&&Number.isFinite(n);function zx(n,e){return(e?n?.sceneNadirs?.[e]:null)??n?.nadir}function Wf(n){const e=n?.mode==="limit"||n?.mode==="cover"?n.mode:"none",t={...rc,...n?.cover||{}};return{mode:e,limitDeg:ac(Gf(n?.limitDeg)?n.limitDeg:Bx,-Ss,0),cover:{kind:t.kind==="image"?"image":"color",color:typeof t.color=="string"&&t.color?t.color:rc.color,image:typeof t.image=="string"&&t.image?t.image:null,sizePct:ac(Gf(t.sizePct)?t.sizePct:rc.sizePct,2,70)}}}function Hx(n,e){return n.mode!=="limit"?-Ss:ac(n.limitDeg+e/2,-Ss,Ss)}function Vx(n,e){return typeof n!="string"||!n.startsWith("asset:")?null:e?.assets?.[n.slice(6)]?.url??null}function Gx(n){return new Promise((e,t)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=()=>t(new Error("No se pudo cargar la imagen del nadir")),i.src=n})}function Wx(n,e){const t=document.createElement("canvas");t.width=t.height=er;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,er,er);const r=n.naturalWidth/n.naturalHeight,s=r>.9&&r<1.1?er:er*.72,l=r>=1?s:s*r,o=r>=1?s/r:s;i.drawImage(n,(er-l)/2,(er-o)/2,l,o);const c=new Dp(t);return c.colorSpace=Rt,c.anisotropy=4,c}function Xx({scene:n,camera:e,onChange:t}){let i=Wf(null),r=null,a=null,s=0,l=!1;function o(){s++,a&&(n.remove(a),a.geometry.dispose(),a.material.map?.dispose(),a.material.dispose(),a=null)}function c(u,f){const d=bn.degToRad(u.sizePct/100*90),m=Vf*Math.cos(d),h=Vf*Math.sin(d),v=new ll(1,96);v.rotateX(-Math.PI/2),v.rotateY(Math.PI);const p=new Mr({color:new st(u.color),side:gn});if(a=new qt(v,p),a.position.y=-m,a.scale.set(h,1,h),a.renderOrder=1,n.add(a),u.kind==="image"&&f){const g=++s;Gx(f).then(S=>{if(l||g!==s||!a)return;const y=Wx(S,u.color);a.material.map=y,a.material.color.set(16777215),a.material.needsUpdate=!0}).catch(S=>console.warn("[TourRuntime]",S.message))}}return{apply(u,f){if(l)return;const d=Wf(u),m=d.mode!==i.mode||d.limitDeg!==i.limitDeg;i=d;let h=null,v=null;d.mode==="cover"&&(v=d.cover.kind==="image"?Vx(d.cover.image,f):null,h=JSON.stringify([d.cover.kind,d.cover.color,d.cover.sizePct,v])),h!==r&&(r=h,o(),h&&c(d.cover,v)),m&&t?.()},getMinLat(u){return Hx(i,u)},dispose(){l=!0,o()}}}const wn=Math.PI/180,fa=(n,e)=>`${n}_${e}`;function $x(n,e,t){return String(n).replaceAll("{c}",String(e)).replaceAll("{r}",String(t))}function qx(n,e,t,i){const r=(n+.5)/t*360,a=(e+.5)/i*180;return{lon:Yx(90-r),lat:90-a}}function Yx(n){return((n+180)%360+360)%360-180}function Es(n,e){const t=Math.cos(e*wn);return[t*Math.sin(n*wn),Math.sin(e*wn),t*Math.cos(n*wn)]}function Kx(n,e,t,i){const r=Es(n,e),a=Es(t,i),s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2];return Math.acos(Math.max(-1,Math.min(1,s)))/wn}function Zx(n,e){const t=Es(n,e);let i=[t[2],0,-t[0]],r=Math.hypot(i[0],i[2]);r<1e-6&&(i=[Math.cos(n*wn),0,-Math.sin(n*wn)],r=1),i=i.map(s=>s/r);const a=[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];return{forward:t,right:i,up:a}}const sc=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];function Jx(n,e,t,i,r=5){const a=[];for(let s=0;s<r;s++)for(let l=0;l<r;l++){const o=(n+s/(r-1))/t*360,c=(e+l/(r-1))/i*180;a.push(Es(90-o,90-c))}return a}function Qx(n,e,t,i){const r=n.map(s=>[sc(s,e.right),sc(s,e.up),sc(s,e.forward)]),a=s=>r.every(l=>s(l)<0);return!(a(([,,s])=>s)||a(([s,,l])=>s+l*t)||a(([s,,l])=>-s+l*t)||a(([,s,l])=>s+l*i)||a(([,s,l])=>-s+l*i))}function Xf({cols:n,rows:e,lon:t,lat:i,fov:r,aspect:a,marginDeg:s=8}){const l=Zx(t,i),o=Math.min(89,r/2*1+s),c=Math.min(89,Math.atan(Math.tan(r/2*wn)*a)/wn+s),u=Math.tan(o*wn),f=Math.tan(c*wn),d=[];for(let m=0;m<e;m++)for(let h=0;h<n;h++){if(!Qx(Jx(h,m,n,e),l,f,u))continue;const v=qx(h,m,n,e);d.push({c:h,r:m,key:fa(h,m),dist:Kx(t,i,v.lon,v.lat)})}return d.sort((m,h)=>m.dist-h.dist||m.r-h.r||m.c-h.c)}function jx(n,e,t=8){return n.filter(r=>!e.has(r.key)).sort((r,a)=>r.dist-a.dist).slice(t).map(r=>r.key)}function ey(n,{maxTextureSize:e=4096,mobile:t=!1,deviceMemory:i=8}={}){if(!n)return null;const a=(t||i<=4||e<n.width/2)&&n.mobile?n.mobile:n;return a.width/2>e||a.width/a.cols>e?null:a}const ty=498,ny=4,iy=400,$f=10,ry=8,oc=3,ay=2500,sy=400,qf={w:64,h:32},oy="AAAAHGZ0eXBhdmlmAAAAAG1pZjFhdmlmbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAACJpbG9jAAAAAERAAAEAAQAAAAAA+gABAAAAAAAAACQAAAAjaWluZgAAAAAAAQAAABVpbmZlAgAAAAABAABhdjAxAAAAAA5waXRtAAAAAAABAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAABAAAAAQAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAAsbWRhdBIACgg4DP/aQENBpDIWHEJi5OmmmmFjYAB1fc4kfm2ilWF4fA==";let As=null,lc=null;function Yf(){return lc||(lc=(async()=>{try{if(typeof createImageBitmap!="function"||typeof atob!="function")return!1;const n=Uint8Array.from(atob(oy),t=>t.charCodeAt(0));return(await createImageBitmap(new Blob([n],{type:"image/avif"}))).close?.(),!0}catch{return!1}})().then(n=>As=n)),lc}typeof window<"u"&&Yf();function Kf(n,e){return new Promise((t,i)=>{const r=new Image;e.img=r,r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>{const a=r.decode?r.decode().catch(()=>{}):Promise.resolve();Promise.race([a,new Promise(s=>setTimeout(s,sy))]).then(()=>t(r))},r.onerror=()=>i(new Error(`No se pudo cargar ${n}`)),r.src=n})}function ha(n){const e=n.img;e&&(e.onload=e.onerror=null,e.src="",n.img=null)}function Zf(n,{mipmaps:e,rasterize:t=!1}){if(t){const r=document.createElement("canvas");r.width=n.naturalWidth||n.width,r.height=n.naturalHeight||n.height,r.getContext("2d").drawImage(n,0,0),n=r}const i=new yt(n);return i.colorSpace=Rt,e||(i.minFilter=xt,i.generateMipmaps=!1),i.needsUpdate=!0,i}function Ts(n){n?.dispose(),n?.image?.tagName==="CANVAS"&&(n.image.width=n.image.height=0)}function ly({scene:n,camera:e,sphere:t,renderer:i,normalizeImages:r=!1,onSupport:a,onProgress:s}={}){const l=new qr;l.renderOrder=1,n.add(l);let o=null,c=0,u=null,f=null;const d=new Map,m=new Map,h=new Set;let v=!1;const p=i?.capabilities.maxTextureSize??4096,g=()=>(i?.domElement.clientWidth??globalThis.innerWidth)<720||(globalThis.navigator?.deviceMemory??8)<=4||p<4096,S=Z=>ey(Z,{maxTextureSize:p,mobile:g(),deviceMemory:globalThis.navigator?.deviceMemory??8});function y(){if(!o)return;const Z=(o.ready?1:0)+o.initial.filter(W=>m.get(W.key)?.status==="ready").length,ae=1+o.initial.length;if(s?.({sceneId:o.id,loaded:Z,total:ae}),Z===ae&&o.resolve){const W=o.resolve;o.resolve=null,W()}}let b=null,A=!0,E=0;const w=new J;As===null&&Yf().then(Z=>{v||a?.(Z)});function _(Z){if(v||globalThis.__TOUR_DISABLE_TILES__===!0||As!==!0)return!1;const ae=Z?.image?.tiles;return!ae||!ae.base||!ae.tileUrl||!(ae.cols>0)||!(ae.rows>0)||!S(ae)?!1:!h.has(Z.image.tiles.base)}function C(Z,ae,W,ne,q,ge=Math.floor(q/2)){const fe=fa(Z,ae);let pe=d.get(fe);if(!pe){const _e=Math.max(2,Math.round(qf.w/W)),ce=Math.max(2,Math.round(qf.h/ne)),ve=Math.floor(Z*q/W)/q,Le=Math.floor((Z+1)*q/W)/q,Re=Math.floor(ae*ge/ne)/ge,Oe=Math.floor((ae+1)*ge/ne)/ge;pe=new jr(ty,_e,ce,ve*Math.PI*2,(Le-ve)*Math.PI*2,Re*Math.PI,(Oe-Re)*Math.PI).scale(-1,1,1),d.set(fe,pe)}return pe}function T(Z){const ae=m.get(Z);ae&&(ha(ae.holder),ae.mesh&&l.remove(ae.mesh),ae.material?.dispose(),Ts(ae.texture),m.delete(Z))}function L(){for(const Z of[...m.keys()])T(Z);for(const Z of d.values())Z.dispose();d.clear()}function R(){f&&(ha(f),f=null),u&&t.material.map!==u&&(Ts(u),u=null)}function U(Z,ae,W){Z.status="loading",Z.attempts++,Z.holder={};const ne=$x(ae.tileUrl,Z.c,Z.r);Kf(ne,Z.holder).then(q=>{v||!o||o.token!==W||m.get(fa(Z.c,Z.r))!==Z||(Z.holder.img=null,Z.texture=Zf(q,{mipmaps:!o.rasterize&&!g(),rasterize:o.rasterize}),Z.material=new Mr({map:Z.texture,transparent:!0,opacity:0}),Z.mesh=new qt(C(Z.c,Z.r,ae.cols,ae.rows,ae.width,ae.height),Z.material),Z.mesh.renderOrder=1,Z.fadeStart=performance.now(),Z.status="ready",l.add(Z.mesh),A=!0,y())},()=>{if(!(v||!o||o.token!==W||m.get(fa(Z.c,Z.r))!==Z)&&(Z.status="failed",Z.retryAt=performance.now()+ay,A=!0,Z.attempts>=oc&&o.initial.some(q=>q.key===fa(Z.c,Z.r))&&o.reject)){h.add(o.tiles.base);const q=o.reject;o.reject=null,q(new Error("No se pudo completar la vista inicial en alta definición"))}})}function I(){return e.getWorldDirection(w),{lon:bn.radToDeg(Math.atan2(w.x,w.z)),lat:bn.radToDeg(Math.asin(bn.clamp(w.y,-1,1))),fov:e.fov,aspect:e.aspect}}function x(Z){return!b||Math.abs(Z.lon-b.lon)>.25||Math.abs(Z.lat-b.lat)>.25||Z.fov!==b.fov||Z.aspect!==b.aspect}function D(Z){const{tiles:ae}=o,W=Xf({cols:ae.cols,rows:ae.rows,...Z,marginDeg:$f}),ne=[...new Map([...o.resolve?o.initial:[],...W].map(_e=>[_e.key,_e])).values()],q=new Set(ne.map(_e=>_e.key)),ge=performance.now();for(const[_e,ce]of m)ce.status==="loading"&&!q.has(_e)&&T(_e);const fe=[];for(const[_e,ce]of m)ce.status==="ready"&&fe.push({key:_e,dist:B(ce.c,ce.r,Z,ae)});for(const _e of jx(fe,q,g()?2:ry))T(_e);let pe=0;for(const _e of m.values())_e.status==="loading"&&pe++;E=0;for(const _e of ne){if(pe>=(g()?2:ny))break;let ce=m.get(_e.key);if(!(ce&&ce.status!=="failed")){if(ce&&(ce.attempts>=oc||ge<ce.retryAt)){ce.attempts<oc&&(E=E?Math.min(E,ce.retryAt):ce.retryAt);continue}ce||(ce={c:_e.c,r:_e.r,status:"idle",attempts:0,holder:{}},m.set(_e.key,ce)),U(ce,ae,o.token),pe++}}A=!1}function N(){if(v)return;if(!o){u&&R();return}const Z=performance.now();for(const W of m.values()){if(W.status!=="ready"||W.fadeStart==null)continue;const ne=Math.min(1,(Z-W.fadeStart)/iy);W.material.opacity=ne,ne>=1&&(W.material.transparent=!1,W.material.needsUpdate=!0,W.fadeStart=null)}if(!o.ready)return;E&&Z>=E&&(A=!0);const ae=I();(A||x(ae))&&(b=ae,D(ae))}function B(Z,ae,W,ne){const q=(Z+.5)/ne.cols*360,ge=(ae+.5)/ne.rows*180,fe=90-q,pe=90-ge,_e=Math.PI/180,ce=[Math.cos(pe*_e)*Math.sin(fe*_e),Math.sin(pe*_e),Math.cos(pe*_e)*Math.cos(fe*_e)],ve=[Math.cos(W.lat*_e)*Math.sin(W.lon*_e),Math.sin(W.lat*_e),Math.cos(W.lat*_e)*Math.cos(W.lon*_e)],Le=ce[0]*ve[0]+ce[1]*ve[1]+ce[2]*ve[2];return Math.acos(Math.max(-1,Math.min(1,Le)))/_e}function F(){c++,o?.reject?.(new Error("Mosaicos reemplazados")),o=null,b=null,A=!0,E=0,L()}function z(Z,ae,{preserveBase:W=!1}={}){F(),f&&ha(f);const ne=S(Z.image.tiles),q=c;let ge,fe;const pe=new Promise((ce,ve)=>{ge=ce,fe=ve});if(pe.catch(()=>{}),o={id:Z.id,tiles:ne,token:q,ready:!1,rasterize:r||Z.image.tiles.width>6144,initial:Xf({cols:ne.cols,rows:ne.rows,...I(),marginDeg:$f}),resolve:ge,reject:fe},W)return R(),o.ready=!0,A=!0,y(),Z.image.tiles.width>6144?Promise.resolve():pe;y();const _e={};return f=_e,Kf(ne.base,_e).then(ce=>{if(v||!o||o.token!==q)throw new Error("Mosaicos reemplazados");f=null;const ve=u;u=Zf(ce,{mipmaps:!1,rasterize:o.rasterize});const Le=t.material;return Le.map=u,Le.color.set(16777215),Le.needsUpdate=!0,ve&&ve!==u&&Ts(ve),o.ready=!0,A=!0,ae?.(),y(),Z.image.tiles.width>6144?void 0:pe},ce=>{throw o&&o.token===q&&(h.add(Z.image.tiles.base),o.reject?.(ce),o=null,f=null),ce})}function K(){!o&&m.size===0||(F(),f&&(ha(f),f=null))}function ie(){v||(F(),v=!0,f&&ha(f),Ts(u),u=null,n.remove(l))}return{canShow:_,isProbing:()=>As===null&&globalThis.__TOUR_DISABLE_TILES__!==!0,show:z,hide:K,update:N,dispose:ie}}function cy(n,e=[]){if(!n)return null;let{left:t,top:i,right:r,bottom:a}=n;for(const{anchor:s,rect:l,visible:o=!0}of e)!o||!l||!(l.width>0&&l.height>0)||l.right<=n.left||l.left>=n.right||l.bottom<=n.top||l.top>=n.bottom||(["stretch-top","top","top-left","top-right"].includes(s)&&(i=Math.max(i,Math.min(n.bottom,l.bottom))),["stretch-bottom","bottom","bottom-left","bottom-right"].includes(s)&&(a=Math.min(a,Math.max(n.top,l.top))),s==="stretch-left"&&(t=Math.max(t,Math.min(n.right,l.right))),s==="stretch-right"&&(r=Math.min(r,Math.max(n.left,l.left))));return r=Math.max(t,r),a=Math.max(i,a),{left:t,top:i,right:r,bottom:a,width:r-t,height:a-i}}const dy=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function cc({host:n,getTemplate:e,stagger:t=!1,animate:i=!0,onLayout:r}){const a=[];let s=null,l={getTemplate:e},o=0,c=1,u="",f=!1;const d=I=>({...I,getTemplate:e}),m=(I,x)=>({...ds(I,x.props),...x.template==="group"?{children:x.children??[],width:x.frame?.w,height:x.frame?.h,...hs(x,Si(n.clientWidth)),...Mx(x,Si(n.clientWidth))}:{}}),h=I=>({...l,mobile:Si(n.clientWidth),elementId:I.id,elementPath:I.id,groupDepth:0});function v(I){const x=I.def.mobile||{};return x.mode==="hidden"?"hide":x.behavior||I.template.mobile||"stack"}function p(){return a.map(I=>{try{I.visible=as(I.def,l?.state?.sceneId,l?.doc?.scenes)&&(I.template.isVisible?!!I.template.isVisible(l,m(I.template,I.def)):!0)}catch{I.visible=!0}return I.visible})}function g(I,x,D=0){const N=I.wrapper.style;N.display="",N.left="0px",N.top="0px",N.width=x>0?`${x}px`:"max-content",N.height=D>0?`${D}px`:"auto",N.transform="none",I.wrapper.setAttribute("data-tour-measuring","");const B=I.wrapper.getBoundingClientRect(),F=n.offsetWidth&&n.getBoundingClientRect().width/n.offsetWidth||1,z=I.def.template==="group"?B.height/F:Math.max(B.height/F,I.content.scrollHeight||0);return I.wrapper.removeAttribute("data-tour-measuring"),{w:Math.ceil(B.width/F-.01),h:Math.ceil(z-.01)}}function S(I,x){const D=I.wrapper.style,N=x.box;D.display="",D.left=`${jt(N.left)}px`,D.top=`${jt(N.top)}px`,D.width=`${jt(N.width)}px`,D.height=`${jt(N.height)}px`,D.transformOrigin=`${x.origin.x*100}% ${x.origin.y*100}%`,D.transform=x.scale===1?"none":`scale(${jt(x.scale,4)})`,I.wrapper.toggleAttribute("data-tour-overflow",!!x.scroll),x.scroll?(I.wrapper.tabIndex=0,I.wrapper.setAttribute("role","region"),I.wrapper.setAttribute("aria-label",I.def.name||I.template.name||"Contenido del recorrido")):(I.wrapper.removeAttribute("tabindex"),I.wrapper.removeAttribute("role"),I.wrapper.removeAttribute("aria-label")),I.wrapper.dataset.tourScrollEdge=_s(I.activeFrame?.anchor),D.setProperty("--tour-content-height",`${jt(x.contentHeight??N.height)}px`),D.setProperty("--tour-popup-height",`${Math.max(0,(n.clientHeight-x.rect.top-16)/x.scale-N.height-8)}px`)}function y(){if(f)return;const I=n.clientWidth,x=n.clientHeight;if(!I||!x)return;const D={W:I,H:x},N=Si(I);a.forEach($=>{$.def.template!=="group"&&$.mobile!==N&&($.mobile=N,$.template.update($.content,m($.template,$.def),h($.def)))}),n.toggleAttribute("data-tour-mobile",N);const B=p(),F=[];a.forEach(($,Z)=>{const ae=v($);if(!B[Z]||N&&ae==="hide"||$.def.hidden){$.wrapper.style.display="none";return}const W=$.def.frame||{},ne=$.def.mobile||{},q=N&&ne.mode==="custom"&&ne.frame,ge={id:$.def.id??String(Z),frame:W,mode:q?"custom":"auto",mobileFrame:q?ne.frame:void 0,behavior:ae,scaleGroup:$.def.template==="group",fixedScale:!N&&$.def.props?.scaleWithContent===!1,item:$};F.push(ge)});const z=Zl(l.doc?.design),K=Ql(I,x,z,N);F.forEach($=>{const Z=$.mode==="custom"?$.mobileFrame:$.frame;$.item.activeFrame=Z;const ae=N&&$.mode==="auto"&&!Yl($.frame.anchor)&&$.behavior!=="keep";if($.item.def.template==="group"){$.item.template.update($.item.content,m($.item.template,$.item.def),h($.item.def));const W=g($.item,Z.w||hs($.item.def,N).contentWidth||$.item.def.props?.contentWidth||360);$.w=W.w,$.h=Math.max(W.h,Z.h||0)}else if(ae&&($.item.template.fit==="content"||!($.frame.h>0))){const W=I-2*Mi,ne=$.frame.w>0?$.frame.w*K:W;$.h=g($.item,Math.min(ne,W)/K).h}else{const W=Z.w>0?Z.w:Yl(Z.anchor)?Math.max(1,I/K-2*(Z.x||0)):0,ne=g($.item,W,Z.h);$.w=ne.w,$.h=Z.h>0&&ne.h<=Z.h+1?Z.h:ne.h}});const ie=bx(F,D,z);c=ie.scale,F.forEach($=>{const Z=ie.items.get($.id);Z&&S($.item,Z)}),o=ie.topInset,n.style.setProperty("--s",String(jt(ie.scale,4))),n.style.setProperty("--tour-rt-top",`${jt(o+16)}px`),u=B.join(""),r?.({W:I,H:x,mobile:N,scale:ie.scale,topInset:o})}function b(I,x){if(!i)return;const D=a_(I.def.props,I.template,{stagger:t,index:x,reduced:dy()});if(!D)return;const N=`tour-rt-anim--${D.kind}`;I.anim.style.setProperty("--tour-anim-delay",`${D.delayMs}ms`),I.anim.classList.add(N);const B=()=>I.anim.classList.remove(N);I.anim.addEventListener("animationend",B,{once:!0}),I.anim.addEventListener("animationcancel",B,{once:!0})}function A(){a.forEach(I=>{try{R?.unobserve(I.content),I.template.dispose?.(I.content)}catch{}I.wrapper.remove()}),a.length=0}const E=I=>[...I].sort((x,D)=>(x.z??0)-(D.z??0)),w=I=>JSON.stringify(I.map(x=>[x.id??"",x.template,x.z??0]));function _(I,x){const D=E(I).filter(B=>e(B.template)),N=w(D);if(l=d(x),N!==s){s=N,A(),D.forEach((B,F)=>{const z=e(B.template),K=m(z,B),ie=document.createElement("div");ie.className="tour-rt-el"+(z.interactive===!1?" tour-rt-el--through":""),z.interactive!==!1&&ie.setAttribute("data-ui",""),ie.dataset.elId=B.id??"",ie.dataset.elPath=B.id??"",ie.dataset.template=B.template,ie.style.zIndex=String(B.z??0);const $=document.createElement("div");$.className="tour-rt-el-anim";const Z=z.render(K,h(B));$.appendChild(Z),ie.appendChild($),n.appendChild(ie),R?.observe(Z);const ae={def:B,template:z,wrapper:ie,anim:$,content:Z,visible:!0,propsKey:JSON.stringify(B.props??null)};a.push(ae),b(ae,F)}),T(x);return}D.forEach((B,F)=>{const z=a[F];z.def=B,z.propsKey=JSON.stringify(B.props??null)}),T(x),y()}function C(I=n){const x=I.getBoundingClientRect(),D=I.offsetWidth?x.width/I.offsetWidth:1,N=[],B=(F,z,K=null,ie=z.id)=>{if(F.style.display==="none"||!F.isConnected)return;const $=F.getBoundingClientRect(),Z=z.template==="group"&&(hs(z,Si(n.clientWidth)).contentWidth||z.props?.contentWidth)||z.frame?.w,ae=N.find(ge=>ge.id===K),W=Z>0?$.width/D/Z:ae?.scale??c,ne=F.querySelector(".tour-rt-text"),q=z.template==="group"?F.querySelector(":scope > .tour-rt-el-anim > .tour-rt-group > .tour-rt-group-inner, :scope > .tour-rt-group > .tour-rt-group-inner")?.getBoundingClientRect():null;if(N.push({id:z.id??"",parentId:K,path:ie,template:z.template,scale:W,layoutScale:c,fontSize:ne?parseFloat(getComputedStyle(ne).fontSize):void 0,...q?{contentLeft:jt((q.left-x.left)/D),contentTop:jt((q.top-x.top)/D)}:{},left:jt(($.left-x.left)/D),top:jt(($.top-x.top)/D),width:jt($.width/D),height:jt($.height/D)}),z.template==="group"){const ge=F.querySelectorAll("[data-el-id]");(z.children??[]).forEach(fe=>{const pe=[...ge].find(_e=>_e.dataset.elId===fe.id);pe&&B(pe,fe,z.id,`${ie}/${fe.id}`)})}};return a.forEach(F=>B(F.wrapper,F.def)),N}function T(I){const x=I?.doc!==l.doc||I?.language!==l.language||I?.state?.sceneId!==l.state?.sceneId;l=d(I);let D=!1;const N=u,B=p();a.forEach((F,z)=>{if(!B[z])return;const K=F.template.update(F.content,m(F.template,F.def),h(F.def));K&&typeof K=="object"&&K.nodeType===1&&K!==F.content&&(R?.unobserve(F.content),F.anim.replaceChild(K,F.content),R?.observe(K),F.content=K)}),B.join("")!==N&&(D=!0),(D||!u||x)&&y()}let L=null;const R=typeof ResizeObserver=="function"?new ResizeObserver(()=>{L===null&&(L=requestAnimationFrame(()=>{L=null,y()}))}):null;R?.observe(n),typeof document<"u"&&document.fonts?.ready&&document.fonts.ready.then(()=>y()),typeof document<"u"&&document.fonts?.addEventListener&&document.fonts.addEventListener("loadingdone",y);function U(){f=!0,R?.disconnect(),L!==null&&cancelAnimationFrame(L),typeof document<"u"&&document.fonts?.removeEventListener?.("loadingdone",y),A(),s=null}return{rebuild:_,update:T,relayout:y,getTopInset:()=>o,getScale:()=>c,getBoxes:C,items:a,dispose:U}}function jt(n,e=2){const t=10**e;return Math.round(n*t)/t}function uy({uiLayer:n,getTemplate:e,animate:t=!0,onLayout:i}){const r=cc({host:n,getTemplate:e,animate:t,onLayout:i});return{rebuild:r.rebuild,update:r.update,getTopInset:r.getTopInset,getDetailViewport(a){const s=r.items.filter(l=>l.visible&&!l.wrapper.hidden&&l.wrapper.style.display!=="none"&&l.wrapper.isConnected).map(l=>{const o=n.clientWidth<720,c=o&&l.def.mobile?.mode==="custom"&&l.def.mobile.frame,u=l.def.mobile?.behavior||l.template?.mobile,f=c?l.def.mobile.frame.anchor:l.def.frame?.anchor;if(!(["basic-topbar","frame-scrubber"].includes(l.def.template)||["stretch-top","stretch-bottom","stretch-left","stretch-right"].includes(f)))return null;const m=l.wrapper.getBoundingClientRect(),h=l.content.getBoundingClientRect(),v=Math.min(m.left,h.left),p=Math.min(m.top,h.top),g=Math.max(m.right,h.right),S=Math.max(m.bottom,h.bottom);return{anchor:c?f:o&&u==="dock-bottom"&&!f?.startsWith("stretch-")?"bottom":f,rect:{left:v,top:p,right:g,bottom:S,width:g-v,height:S-p}}});return cy(a,s.filter(Boolean))},getBoxes:r.getBoxes,dispose:r.dispose}}const fy=850,Jf={x:22,y:14},Qf=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function hy(){let n=null,e=!1,t=null;function i(){const{hostCtx:h}=n;return{...h.getCtx(),ready:e,enter:h.enter,intro:!0}}function r(h,v){const p=document.createElement("div");p.className="tour-rt-intro-bg";const g=v&&typeof v=="object"?v:{},S=$i(g.color,"");S&&(p.style.background=S);const y=St(h,g.poster);let b=null;if(g.kind==="video"){const A=St(h,g.asset);if(A){b=document.createElement("video"),b.muted=!0,b.defaultMuted=!0,b.loop=!0,b.autoplay=!0,b.playsInline=!0,b.setAttribute("muted",""),b.setAttribute("playsinline",""),b.setAttribute("aria-hidden","true"),b.preload="auto",b.disablePictureInPicture=!0,y&&(b.poster=y),b.src=A,b.addEventListener("error",()=>{b.remove(),y&&p.appendChild(a(y))}),p.appendChild(b);const E=b.play?.();E&&typeof E.catch=="function"&&E.catch(()=>{})}else y&&p.appendChild(a(y))}else if(g.kind==="image"){const A=St(h,g.asset)||y;A&&p.appendChild(a(A))}return{bg:p,video:b}}function a(h){const v=document.createElement("img");return v.src=h,v.alt="",v.draggable=!1,v.setAttribute("aria-hidden","true"),v}function s(h){const{scrim:v,grid:p,intro:g}=n,S=g.background||{},y=s_(S.scrim,h);v.style.background=y.background,v.style.opacity=String(y.opacity);const b=o_(S.grid);p.hidden=!b,b&&Object.assign(p.style,b)}function l(h,v){m(),t=v;const p=!!v?.design,g=h?.design?.screens?.intro;if(!g||!g.enabled||!v?.root)return!1;const S=document.createElement("div");S.className="tour-rt-intro",S.setAttribute("data-ui",""),S.setAttribute("role","dialog"),S.setAttribute("aria-label","Bienvenida"),["wheel","pointerdown","touchstart"].forEach(T=>S.addEventListener(T,L=>L.stopPropagation(),{passive:!0}));const{bg:y,video:b}=r(h,g.background),A=document.createElement("div");A.className="tour-rt-intro-scrim";const E=document.createElement("div");E.className="tour-rt-intro-grid";const w=document.createElement("div");w.className="tour-rt-intro-layer",S.append(y,A,E,w),v.root.appendChild(S),n={el:S,bg:y,scrim:A,grid:E,layerEl:w,video:b,hostCtx:v,doc:h,intro:g,layer:null,leaveTimer:null,readyTimer:null,mobile:null},e=p,S.toggleAttribute("data-ready",e);const _=cc({host:w,getTemplate:v.getTemplate,stagger:!0,animate:!p,onLayout:T=>{n&&n.mobile!==T.mobile&&(n.mobile=T.mobile,s(T.mobile)),v.onLayout?.(T)}});n.layer=_,s(!1);const C=(Array.isArray(g.elements)?g.elements:[]).filter(T=>T&&!T.hidden);return _.rebuild(C,i()),g.background?.parallax&&!Qf()&&!p&&(S.addEventListener("pointermove",T=>{if(T.pointerType==="touch"||n.mobile)return;const L=S.getBoundingClientRect();if(!L.width||!L.height)return;const R=(T.clientX-L.left)/L.width-.5,U=(T.clientY-L.top)/L.height-.5;y.style.transform=`translate(${(-R*Jf.x).toFixed(1)}px, ${(-U*Jf.y).toFixed(1)}px) scale(1.03)`}),S.addEventListener("pointerleave",()=>{y.style.transform=""})),!0}function o(h){const v=h?.design?.screens?.intro;if(!n||n.leaving)return t?l(h,t):!1;if(!v||!v.enabled)return m(),!1;if(JSON.stringify(v.background??null)!==JSON.stringify(n.intro.background??null))return l(h,n.hostCtx);n.doc=h,n.intro=v,s(!!n.mobile);const p=(Array.isArray(v.elements)?v.elements:[]).filter(g=>g&&!g.hidden);return n.layer.rebuild(p,i()),!0}function c(h){return n&&!n.leaving?n.layer.getBoxes(h):[]}function u(h){e=!!h,!(!n||!n.layer)&&(e&&clearTimeout(n.readyTimer),n.el.toggleAttribute("data-ready",e),n.layer.update(i()),e&&n.intro.autoEnter&&!n.hostCtx.design&&!n.autoEntered&&(n.autoEntered=!0,n.hostCtx.enter()))}function f(h){clearTimeout(h.leaveTimer),clearTimeout(h.readyTimer),h.layer?.dispose(),h.video&&(h.video.pause?.(),h.video.removeAttribute("src"),h.video.load?.()),h.el.remove()}function d(){if(!n||n.leaving)return;const h=n;h.leaving=!0,h.el.classList.add("is-leaving"),h.el.setAttribute("aria-hidden","true");const v=()=>{n===h&&(n=null),f(h)};Qf()?v():h.leaveTimer=setTimeout(v,fy)}function m(){if(!n)return;const h=n;n=null,f(h)}return{show:l,refresh:o,setReady:u,refreshProgress:()=>n?.layer?.update(i()),hide:d,getBoxes:c,dispose:m}}const py=8,jf={fullscreen:"Pantalla completa","reset-view":"Restablecer la vista",link:"Abrir enlace"};function eh(n){if(typeof n!="string"||n.length>2048||!/^https?:\/\//i.test(n.trim()))return"";try{const e=new URL(n.trim());return["https:","http:"].includes(e.protocol)?e.href:""}catch{return""}}function my(n){const e=n&&typeof n=="object"?n:{},t=Array.isArray(e.items)?e.items:[{id:"fullscreen",type:"fullscreen",label:""},{id:"reset-view",type:"reset-view",label:""}],i=new Set;return{enabled:e.enabled===!0,items:t.filter(r=>r&&Object.hasOwn(jf,r.type)&&typeof r.id=="string"&&!i.has(r.id)&&i.add(r.id)).slice(0,py).map(r=>({id:r.id,type:r.type,label:String(r.label??"").slice(0,100),url:eh(r.url)})),credit:{enabled:e.credit?.enabled!==!1,name:String(e.credit?.name??"").slice(0,100),url:eh(e.credit?.url)}}}function gy(n,{fullscreenSupported:e=!0,fullscreen:t=!1}={}){return n.enabled?n.items.filter(i=>(i.type!=="fullscreen"||e)&&(i.type!=="link"||i.url)).map(i=>({...i,label:i.label.trim()||(i.type==="fullscreen"&&t?"Salir de pantalla completa":jf[i.type])})):[]}function vy(n,e,t,i,r){return{x:Math.max(6,Math.min(n,r.width-t-6)),y:Math.max(6,Math.min(e,r.height-i-6))}}function by({root:n,getConfig:e,resetView:t,reportError:i}){let r=null,a=null,s=!1,l=null,o=null;const c=n.hasAttribute("tabindex");c||(n.tabIndex=-1);function u(y){clearTimeout(o),l?.remove(),l=document.createElement("div"),l.className="tour-context-menu-notice",l.dataset.ui="context-menu-notice",l.setAttribute("role","alert"),l.textContent=y,n.append(l),o=setTimeout(()=>{l?.remove(),l=null},5e3),i?.(y)}function f({restoreFocus:y=!1}={}){if(!r)return;const b=r.contains(document.activeElement);r.remove(),r=null,y&&b&&(s?n:a?.isConnected?a:n).focus({preventScroll:!0}),a=null}function d(){const y=my(e()),b=gy(y,{fullscreenSupported:!!document.fullscreenEnabled&&!!n.requestFullscreen,fullscreen:document.fullscreenElement===n});return{config:y,entries:b,credit:y.enabled&&y.credit.enabled&&!!y.credit.name.trim()}}function m(y,b){f();const{config:A,entries:E,credit:w}=d();if(!A.enabled||!E.length&&!w)return!1;a=document.activeElement,s=!n.contains(a),r=document.createElement("div"),r.className="tour-context-menu",r.dataset.ui="context-menu",r.setAttribute("role","menu"),r.setAttribute("aria-label","Opciones del recorrido"),r.tabIndex=-1;for(const U of E){const I=document.createElement(U.type==="link"?"a":"button");I.className="tour-context-menu-item",I.dataset.action=U.type,I.setAttribute("role","menuitem"),I.tabIndex=-1,I.textContent=U.label,U.type==="link"?(I.href=U.url,I.target="_blank",I.rel="noopener noreferrer",I.addEventListener("click",()=>f({restoreFocus:!0}))):(I.type="button",I.addEventListener("click",async()=>{f({restoreFocus:!0});try{U.type==="reset-view"?t():document.fullscreenElement===n?await document.exitFullscreen():await n.requestFullscreen()}catch{u("No se pudo cambiar a pantalla completa en este navegador.")}})),r.append(I)}if(w){const U=document.createElement(A.credit.url?"a":"div");U.className="tour-context-menu-credit",U.textContent=`Created by ${A.credit.name.trim()}`,E.length&&U.classList.add("tour-context-menu-credit--divider"),A.credit.url&&(U.href=A.credit.url,U.target="_blank",U.rel="noopener noreferrer",U.setAttribute("role","menuitem"),U.tabIndex=-1,U.addEventListener("click",()=>f({restoreFocus:!0}))),r.append(U)}n.append(r);const _=n.getBoundingClientRect(),C=parseFloat(n.style.getPropertyValue?.("--tour-ui-scale"))||1,T=_.width/(n.clientWidth||_.width)||1,L={width:(n.clientWidth||_.width)/C,height:(n.clientHeight||_.height)/C},R=vy((y-_.left)/T/C,(b-_.top)/T/C,r.offsetWidth,r.offsetHeight,L);return r.style.left=`${R.x}px`,r.style.top=`${R.y}px`,r.dataset.tourScrollEdge=_s(null,{left:R.x,right:R.x+r.offsetWidth},{left:0,right:L.width}),(r.querySelector('[role="menuitem"]')||r).focus({preventScroll:!0}),!0}function h(y){r&&!r.contains(y.target)&&f()}function v(y){if(!r)return;if(y.key==="Escape"||y.key==="Tab"){y.key==="Escape"&&y.preventDefault(),y.stopPropagation(),f({restoreFocus:!0});return}if(!r.contains(y.target))return;const b=[...r.querySelectorAll('[role="menuitem"]')],A=b.indexOf(document.activeElement);let E;if(y.key==="ArrowDown")E=(A+1)%b.length;else if(y.key==="ArrowUp")E=(A-1+b.length)%b.length;else if(y.key==="Home")E=0;else if(y.key==="End")E=b.length-1;else if(y.key===" "&&document.activeElement.tagName==="A"){y.preventDefault(),document.activeElement.click();return}else return;y.preventDefault(),y.stopPropagation(),b[E]?.focus()}const p=()=>f(),g=y=>{r?.contains(y.target)||f()};document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",v,!0),window.addEventListener("resize",p),window.addEventListener("blur",p),document.addEventListener("scroll",g,!0);const S=new ResizeObserver(p);return S.observe(n),{open:m,close:f,dispose(){f(),S.disconnect(),clearTimeout(o),l?.remove(),document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",v,!0),window.removeEventListener("resize",p),window.removeEventListener("blur",p),document.removeEventListener("scroll",g,!0),c||n.removeAttribute("tabindex")}}}function _y(n,e){if(!n.length||!e||e==="custom")return n;const t=n.map(c=>Ai(c.frame,{W:ca,H:da},1).rect),i=Math.min(...t.map(c=>c.left)),r=Math.min(...t.map(c=>c.top)),a=Math.max(...t.map(c=>c.left+c.width)),s=Math.max(...t.map(c=>c.top+c.height)),l=(i+a)/2,o=(r+s)/2;return n.map((c,u)=>{const f=t[u];return{...c,frame:{...c.frame,anchor:e,x:e==="left"?f.left-i+24:e==="right"?f.left+f.width-a-24:f.left+f.width/2-l,y:e==="bottom"?f.top+f.height-s-24:f.top+f.height/2-o}}})}function dc({root:n,getTemplate:e,onClose:t,design:i=!1,onLayout:r}){const a=document.createElement("div");a.className=`tour-rt-reusable-panel${i?" is-design":""}`,i||(a.setAttribute("role","dialog"),a.setAttribute("aria-label","Información del hotspot")),n.appendChild(a);const s=cc({host:a,getTemplate:e,animate:!i,onLayout:r}),l=document.createElement("button");l.type="button",l.className="tour-rt-reusable-close",l.textContent="×",l.setAttribute("aria-label","Cerrar información"),l.setAttribute("data-ui",""),l.addEventListener("click",()=>t?.()),a.appendChild(l);let o,c;function u(){if(!o)return;const m=Si(a.clientWidth),h=i?o.elements??[]:wl(o.elements,c.hotspot);s.rebuild(_y(h,o.position?.[m?"mobile":"desktop"]),c),l.hidden=o.closeButton===!1;const v=s.getBoxes(a);if(v.length){const p=Math.max(...v.map(S=>S.left+S.width)),g=Math.min(...v.map(S=>S.top));l.style.right="auto",l.style.left=`${Math.max(8,Math.min(a.clientWidth-50,p-50))}px`,l.style.top=`${Math.max(8,Math.min(a.clientHeight-50,g+8))}px`}}const f=typeof ResizeObserver=="function"?new ResizeObserver(u):null;f?.observe(a);const d=m=>{!i&&m.key==="Escape"&&t?.()};return window.addEventListener("keydown",d),{el:a,update(m,h){o=m,c=h,u()},getBoxes:s.getBoxes,dispose(){f?.disconnect(),window.removeEventListener("keydown",d),s.dispose(),a.remove()}}}function xy(n,e){const t=document.createElement("div");t.className="hs-screen-details",n.append(t);const i=new Map,r=new Map;let a=null,s=null,l=[],o=null;const c=h=>{const v=i.get(h);v?.dispose?.(),v?.node.remove(),i.delete(h)},u=h=>{a===h&&(a=null),s===h&&(s=null),c(h),f(l)};function f(h){l=h;const v=e(),p=new Set;h.forEach(({hotspot:S,style:y})=>{const b=n.clientWidth<720,A=ra(S,v.mode,b?"mobile":"desktop"),E={...v.getTemplate(y?.template)?.defaults,...y?.props},w=A?Rl(ec(A,"detail"),S,E):null;if(!w?.enabled||w.placement!=="screen"||v.mode==="design"||(s||a)!==S.id)return;p.add(S.id);const _=JSON.stringify([w,S.title,S.description,S.price,S.image,y,b]);if(i.get(S.id)?.key===_)return;const C=i.get(S.id),T=JSON.stringify([w.position,b]);if(C?.update&&C.placementKey===T&&C.update(w,S,E,{...v,mobile:b})){C.key=_,C.layout(w);return}if(c(S.id),w.legacy||w.legacyPanel){if(w.legacyPanel){const $=dc({root:t,getTemplate:v.getTemplate,onClose:()=>u(S.id)});$.update(w.legacyPanel,{...v,hotspot:S}),i.set(S.id,{key:_,node:$.el,dispose:$.dispose})}else{const $=v.getTemplate(w.legacy.template)||v.getTemplate("floating-card"),Z=$.render(w.legacy.props,{...v,hotspot:S,onClose:()=>u(S.id)});t.append(Z),i.set(S.id,{key:_,node:Z,dispose:()=>$.dispose?.(Z)})}return}const L=w.position?.[b?"mobile":"desktop"]||"right";let R=t;if(L!=="custom"){if(!r.has(L)){const $=document.createElement("div");$.className=`hs-screen-stack hs-screen-stack--${L}`,t.append($),r.set(L,$)}R=r.get(L)}const U=document.createElement("section");U.className="hs-screen-detail",U.dataset.hotspotId=S.id,U.dataset.hotspotSurface="detail",U.style.setProperty("--detail-width",`${Gi(w.elements?.[0],b).w||320}px`),U.ondblclick=$=>{v.onEditPiece&&($.preventDefault(),$.stopPropagation(),v.onEditPiece(S,Mu($.target,U,S),U.getBoundingClientRect()))},U.setAttribute("data-ui",""),U.setAttribute("aria-label",S.title||"Detalle del hotspot"),w.inheritAppearance!==!1&&(U.style.setProperty("--detail-fill",E.fill||"rgba(20,37,68,.75)"),U.style.setProperty("--detail-color",E.iconColor||"#ffffff")),R.append(U);const I=document.createElement("div");I.className="hs-screen-detail-scroll",U.append(I),I.tabIndex=0,I.setAttribute("aria-label","Contenido del detalle");const x=document.createElement("div");x.className="hs-screen-detail-content",I.append(x);const D=Of(x,w,S,E,{...v,mobile:b});{const $=document.createElement("button");$.className="hs-screen-detail-close",$.textContent="×",$.setAttribute("aria-label","Cerrar detalle"),$.onclick=()=>u(S.id),U.append($)}if(S.type==="nav"){const $=document.createElement("button");$.className="hs-detail-enter",$.textContent="Entrar",$.onclick=()=>{const Z=l.find(W=>W.hotspot.id===S.id)?.hotspot,ae=e();ae.mode!=="edit"&&Z?.type==="nav"&&ys(Z,ae.goToScene)},I.append($)}let N=w;const B=Gi(A.elements?.[0],b),F=w.elements?.[0]?.props?.detailReferenceHeight||B.h||x.offsetHeight||1,z=w.elements?.[0]?.props?.detailReferenceWidth||B.w||320,K=($=N)=>{N=$;const Z=Gi(N.elements?.[0],b),ae=parseFloat(n.style.getPropertyValue("--tour-ui-scale"))||Ql(n.clientWidth,n.clientHeight,Zl(v.doc?.design));I.dataset.tourScrollEdge=_s(L==="custom"?Z.anchor:L);const W=N.elements?.[0]?.props;U.style.borderRadius=`${W?.radius??8}px`;const ne=n.getBoundingClientRect?.().width/n.clientWidth||1,q=o?Math.max(1,(o.width-24)/ne):n.clientWidth-32;U.style.setProperty("--detail-width",`${Math.min(q,(Z.w||320)*ae)}px`),L!=="custom"&&(R.style.width=`${Math.max(1,Math.min(q,(Z.w||320)*ae))}px`);const ge=N.version===2&&N.layoutMode==="manual",fe=ge&&W?.hotspotOriginX||0,pe=ge&&W?.hotspotOriginY||0,_e=["right"].includes(L)?1:["center","bottom"].includes(L)?.5:0,ce=(N.offset?.x||0)+fe+(ge?((Z.w||z)-z)*_e:0),ve=(N.offset?.y||0)+pe+(ge&&L==="bottom"?x.offsetHeight-F:0);U.dataset.resolvedOriginX=String(fe),U.dataset.resolvedOriginY=String(pe),U.dataset.detailReferenceHeight=String(F),U.dataset.detailReferenceWidth=String(z),U.style.transform=`translate(${ce}px,${ve}px)`;const Le=N.elements?.[0]?.props?.detailFixedHeight?Z.h*ae:0,Oe=n.getBoundingClientRect?.()?.height/n.clientHeight||1,Ye=o?Math.max(1,(o.height-24)/Oe):n.clientHeight-16,ze=Math.max(1,Math.min(Ye,L==="custom"?n.clientHeight-16:R.clientHeight-4)),at=Le>0?Math.min(ze,Le):ze;if(U.style.height=Le>0?`${at}px`:"",U.style.setProperty("--detail-max-height",`${at}px`),L==="custom"){const Ge=Ai({...Z,...ge?{w:z,h:F}:{h:Z.h||x.offsetHeight||200}},{W:n.clientWidth,H:n.clientHeight},ae),He=Math.min(q,ge?(Z.w||z)*ae:Ge.rect.width||320),V=Math.min(at,x.offsetHeight||200);Object.assign(U.style,{position:"absolute",left:`${Math.max(8,Math.min(n.clientWidth-He-8,Ge.rect.left))}px`,top:`${Math.max(8,Math.min(n.clientHeight-V-8,Ge.rect.top))}px`,width:`${He}px`,maxHeight:`${n.clientHeight-16}px`})}if(U.getBoundingClientRect&&n.getBoundingClientRect){const Ge=n.getBoundingClientRect(),He=o||Ge,V=U.getBoundingClientRect(),ft=Ge.width/n.clientWidth||1,Je=Ge.height/n.clientHeight||1,k=V.left<He.left+12?He.left+12-V.left:V.right>He.right-12?He.right-12-V.right:0,M=V.top<He.top+12?He.top+12-V.top:V.bottom>He.bottom-12?He.bottom-12-V.bottom:0;U.style.transform=`translate(${ce+k/ft}px,${ve+M/Je}px)`}},ie=typeof ResizeObserver=="function"?new ResizeObserver(()=>K()):null;ie?.observe(n),ie?.observe(x),K(),i.set(S.id,{key:_,node:U,placementKey:T,layout:K,update:w.geometry==="outer"?D.update:null,dispose:()=>{ie?.disconnect(),D()}})});for(const S of i.keys())p.has(S)||c(S);for(const[S,y]of r)y.childElementCount||(y.remove(),r.delete(S));const g=S=>h.some(({hotspot:y})=>{const b=ra(y,v.mode,n.clientWidth<720?"mobile":"desktop");return y.id===S&&b?.enabled&&b.placement==="screen"});g(a)||(a=null),g(s)||(s=null)}const d=h=>{h.key==="Escape"&&a&&u(a)},m=typeof ResizeObserver=="function"?new ResizeObserver(()=>f(l)):null;return m?.observe(n),window.addEventListener("keydown",d),{sync:f,constrain(h){o=h;for(const v of i.values())v.layout?.()},open(h){s=null,a=a===h.id?null:h.id,f(l)},close(){a=null,s=null,f(l)},preview(h,v){v?(a=null,s=h):s===h&&(s=null),f(l)},dispose(){m?.disconnect(),window.removeEventListener("keydown",d),[...i.keys()].forEach(c),t.remove()}}}const th=new WeakMap,ws=n=>typeof n=="number"&&Number.isFinite(n);function yy(n,e){return((e-n+540)%360+360)%360-180}function My(n){return((n+180)%360+360)%360-180}function Sy(n,e,t){const i={};return!n||typeof n!="object"||Object.keys(n).map(r=>[Number(r),n[r]]).filter(([r,a])=>Number.isInteger(r)&&r>=e&&r<=t&&a&&ws(a.lon)&&ws(a.lat)).sort((r,a)=>r[0]-a[0]).forEach(([r,a])=>{i[String(r)]={lon:a.lon,lat:a.lat}}),i}function Ey(n,e=1/0){if(!Array.isArray(n))return[];const t=th.get(n);if(t&&t.last===e)return t.result;const i=[];n.forEach(a=>{if(!a||!ws(a.from)||!ws(a.to))return;const s=Math.round(a.from),l=Math.min(Math.round(a.to),e);s<0||s>l||i.push({from:s,to:l,keys:Sy(a.keys,s,l)})}),i.sort((a,s)=>a.from-s.from||a.to-s.to);const r=[];return i.forEach(a=>{const s=r[r.length-1];s&&a.from<=s.to||r.push(a)}),th.set(n,{last:e,result:r}),r}function Ay(n,e){return n.find(t=>e>=t.from&&e<=t.to)??null}function Ty(n){return Object.keys(n.keys||{}).map(e=>[Number(e),n.keys[e]]).sort((e,t)=>e[0]-t[0])}function wy(n,e,t){const i=Ty(n);if(!i.length)return{lon:t.lon,lat:t.lat};if(e<=i[0][0])return{...i[0][1]};const r=i[i.length-1];if(e>=r[0])return{...r[1]};for(let a=0;a<i.length-1;a++){const[s,l]=i[a],[o,c]=i[a+1];if(e===s)return{...l};if(e>s&&e<o){const u=(e-s)/(o-s);return{lon:My(l.lon+yy(l.lon,c.lon)*u),lat:l.lat+(c.lat-l.lat)*u}}}return{...r[1]}}function nh(n,e,t){const i=e?.scenes[t];if(!i)return[];if(i.origen!=="video_frame")return(n.hotspotsByScene.get(i.id)||[]).map(s=>({hotspot:s,lon:s.lon,lat:s.lat}));const r=e.scenes.length-1,a=[];return e.scenes.forEach((s,l)=>{(n.hotspotsByScene.get(s.id)||[]).forEach(o=>{const c=Ey(o.segments,r);if(!c.length){l===t&&a.push({hotspot:o,lon:o.lon,lat:o.lat});return}const u=Ay(c,t);if(!u)return;const{lon:f,lat:d}=wy(u,t,o);a.push({hotspot:o,lon:f,lat:d})})}),a}function Cy(n,e){const t=Db(e);n.style.setProperty("--tour-font-heading",t.heading),n.style.setProperty("--tour-font-body",t.body),n.style.setProperty("--tour-font-mono",t.mono),n.style.fontFamily=t.body}const ih=new WeakMap,Ry=new Set(["auto","block","swap","fallback","optional"]),Py=new Set(["normal","italic","oblique"]);function Ly(n){const e=String(n??"normal");if(["normal","bold"].includes(e))return e;const t=e.split(" ").map(Number);return t.length<=2&&t.every(i=>i>=1&&i<=1e3)&&(t.length===1||t[0]<=t[1])?e:"normal"}function Iy(n){const e=new Map((Array.isArray(n?.design?.fonts)?n.design.fonts:[]).map(t=>[t?.asset,t]));return Object.entries(n?.assets||{}).flatMap(([t,i])=>{const r=`asset:${t}`,a=Pl(r),s=e.get(r)||{};return i?.kind!=="font"||!a?[]:[{id:r,label:s.name||i.name||i.originalName||"Fuente del tour",family:En(r),url:i.url,faceFamily:a,weight:Ly(s.weight),style:Py.has(s.style)?s.style:"normal",display:Ry.has(s.display)?s.display:"optional"}]})}function Dy(n){return typeof n!="string"||!n||/[\u0000-\u0020"'\\()]/.test(n)?null:/^(?:https?:|blob:)/i.test(n)||!/^[a-z][a-z0-9+.-]*:/i.test(n)?n:null}function Ny({fontSet:n=globalThis.document?.fonts,Face:e=globalThis.FontFace,resolveUrl:t=a=>a,onError:i=()=>{},maxWaitMs:r=300}={}){const a=new Map;let s=!1,l=n&&ih.get(n);!l&&n&&(l=new Map,ih.set(n,l));function o(u){const f=a.get(u);f&&(a.delete(u),--f.users===0&&(f.cancel?.(),n.delete(f.face),l.delete(u)))}function c(u){if(s||!n?.add||!e)return Promise.resolve([]);const f=new Set,d=[];for(const m of Iy(u)){const h=Dy(t(m.url));if(!h)continue;const v=JSON.stringify([m.id,h,m.weight,m.style,m.display]);f.add(v);let p=a.get(v)||l.get(v);if(!p)try{const g=new e(m.faceFamily,`url("${h}")`,{weight:m.weight,style:m.style,display:m.display});p={face:g,users:0,ready:null,pending:!0,cancel:null};const S=p;p.ready=new Promise(y=>{let b=!1;const A=w=>{b||(b=!0,clearTimeout(E),S.pending=!1,y(w))},E=setTimeout(()=>A(null),Math.max(0,r));S.cancel=()=>A(null),Promise.resolve().then(()=>g.load()).then(w=>{if(!(b||S.users===0))try{n.add(w),A(w)}catch(_){i({asset:m.id,error:_}),A(null)}},w=>{b||(i({asset:m.id,error:w}),A(null))})}),l.set(v,p)}catch(g){i({asset:m.id,error:g});continue}a.has(v)||(p.users++,a.set(v,p)),d.push(p.ready)}return[...a.keys()].filter(m=>!f.has(m)).forEach(o),Promise.all(d)}return{update:c,isPending:()=>[...a.values()].some(u=>u.pending),dispose(){s=!0,[...a.keys()].forEach(o)}}}function Fy(n,e){const t=Ny(e);let i=0,r=!1;return{update(a){const s=t.update(a),l=++i;return t.isPending()?(n.dataset.tourFontsPending="true",s.then(()=>{!r&&l===i&&delete n.dataset.tourFontsPending})):delete n.dataset.tourFontsPending,s},dispose(){r=!0,t.dispose(),delete n.dataset.tourFontsPending}}}function pa(n){const e=n?.languages||{},t=[...new Set((Array.isArray(e.list)?e.list:["es"]).filter(i=>typeof i=="string"&&/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(i)))].slice(0,12);return t.length||t.push("es"),{list:t,default:t.includes(e.default)?e.default:t[0],catalog:e.catalog||{}}}function Uy(n,e=""){const t=pa(n),i=new URLSearchParams(e).get("lang");return t.list.includes(i)?i:t.default}const ky={title:"título",description:"descripción",price:"precio",name:"nombre",text:"texto",heading:"encabezado",subtitle:"subtítulo",label:"etiqueta",alt:"texto alternativo",caption:"pie de foto",suffix:"sufijo",placeholder:"texto de ayuda",value:"valor"};function Oy(n,e){const t=(s,l,o,c,u=ky[l])=>{typeof s?.[l]=="string"&&s[l].trim()&&e(s,l,o,u?`${c} · ${u}`:c)};t(n.tour||n,"title","tour:title","Recorrido"),t(n.tour||n,"description","tour:description","Recorrido");const i=(s,l)=>(s||[]).forEach(o=>{const c=o.props||{},u=`element:${l}:${o.id}:`;for(const f of["text","heading","title","subtitle","label","alt","caption","suffix","placeholder"])t(c,f,u+f,`${l} · ${o.name||o.template}`);for(const f of["items","sections"])(Array.isArray(c[f])?c[f]:[]).forEach((d,m)=>{for(const h of["text","label","caption","title","description","suffix","value"])t(d,h,`${u}${f}.${d.id||m}.${h}`,`${l} · ${o.name||o.template} · ${m+1}`)});i(o.children,l)});for(const s of n.scenes||[]){t(s,"name",`scene:${s.id}:name`,"Escena","nombre");for(const l of s.hotspots||[])r(l)}function r(s){for(const l of["title","description","price"])t(s,l,`hotspot:${s.id}:${l}`,`Hotspot · ${s.title||s.id}`);for(const l of["card","detail"])i(s.content?.[l]?.elements,`hotspot-${s.id}-${l}`)}for(const s of n.hotspots||[])r(s);for(const s of n.groups||[])for(const l of["name","description"])t(s,l,`group:${s.id}:${l}`,"Piso");const a=n.design||{};for(const s of["intro","tour"])i(a.screens?.[s]?.elements,s);for(const s of a.panels||[])i(s.elements,`panel:${s.id}`);for(const s of a.contextMenu?.items||[])t(s,"label",`menu:${s.id}:label`,"Menú de clic derecho","etiqueta");t(a.contextMenu?.credit,"name","credit:name","Crédito","nombre"),t(a.playback?.notice,"text","playback:notice:text","Aviso de bienvenida",null)}function uc(n,e){const t=JSON.parse(JSON.stringify(n)),i=pa(n?.design);return!i.list.includes(e)||e===i.default||Oy(t,(r,a,s)=>{const l=i.catalog[s]?.[e];l?.source===r[a]&&typeof l.text=="string"&&l.text.trim()&&(a==="name"&&s.startsWith("scene:")&&r.label===r[a]&&(r.label=l.text),r[a]=l.text)}),t}const rh={panoramaLoading:"Cargando…",panoramaLoadError:"No pudimos cargar esta panorámica.",tourEmpty:"Este tour aún no tiene escenas.",variantLoadError:"No se pudo cargar esta versión. Puedes volver a intentarlo.",backToPanorama:"Volver a la panorámica",videoLoading:"Cargando video",language:"Idioma",languageAria:"Idioma del recorrido",floors:"Pisos",noFloor:"Sin piso",floorPlanOf:"Plano de {name}",fullPlanOf:"Plano completo: {name}",closePlan:"Cerrar plano ×",planLoadError:"No se pudo cargar el plano.",currentScene:"Escena actual: {name}",goTo:"Ir a {name}",prevScene:"Escena anterior",nextScene:"Escena siguiente",floorScene:"Escena del piso",chooseScene:"Elegir escena",floorNoScenes:"Este piso aún no tiene escenas",thumbnails:"Miniaturas de escenas",visited:"✓ Visitada",enlargePlan:"Ampliar plano",tools:"Herramientas del recorrido",fullscreen:"Pantalla completa",resetView:"Restablecer vista",muteAudio:"Silenciar audio",enableAudio:"Activar audio",stopTour:"Detener recorrido",startTour:"Iniciar recorrido",ambientVolume:"Volumen del ambiente",pauseAmbient:"Pausar ambiente",retryAudio:"Reintentar audio",enableAmbient:"Activar ambiente",enableSound:"Activar sonido",mute:"Silenciar",retryAudioHint:"Pulsa para reintentar el audio.",backToTour:"Volver al recorrido",videoVolume:"Volumen del video",pause:"Pausar",retryPlayback:"Reintentar reproducción",play:"Reproducir",playHint:"Pulsa Reproducir para iniciar el video.",videoLoadError:"No se pudo cargar el video. Comprueba el archivo.",videoUnavailable:"El video 360° ya no está disponible en este tour.",fullscreenError:"No se pudo cambiar a pantalla completa.",gallery:"Galería de imágenes",images:"Imágenes",enlargedImage:"Imagen ampliada",closeImage:"Cerrar imagen ampliada",prevImage:"Imagen anterior",nextImage:"Imagen siguiente"},ah={panoramaLoading:"Loading…",panoramaLoadError:"This panorama could not be loaded.",tourEmpty:"This tour has no scenes yet.",variantLoadError:"This version could not be loaded. Please try again.",backToPanorama:"Back to panorama",videoLoading:"Loading video",language:"Language",languageAria:"Tour language",floors:"Floors",noFloor:"No floor",floorPlanOf:"Plan of {name}",fullPlanOf:"Full plan: {name}",closePlan:"Close plan ×",planLoadError:"The plan could not be loaded.",currentScene:"Current scene: {name}",goTo:"Go to {name}",prevScene:"Previous scene",nextScene:"Next scene",floorScene:"Scene on this floor",chooseScene:"Choose a scene",floorNoScenes:"This floor has no scenes yet",thumbnails:"Scene thumbnails",visited:"✓ Visited",enlargePlan:"Enlarge plan",tools:"Tour tools",fullscreen:"Full screen",resetView:"Reset view",muteAudio:"Mute audio",enableAudio:"Turn audio on",stopTour:"Stop tour",startTour:"Start tour",ambientVolume:"Ambient volume",pauseAmbient:"Pause ambient sound",retryAudio:"Retry audio",enableAmbient:"Play ambient sound",enableSound:"Unmute",mute:"Mute",retryAudioHint:"Press to retry the audio.",backToTour:"Back to the tour",videoVolume:"Video volume",pause:"Pause",retryPlayback:"Retry playback",play:"Play",playHint:"Press Play to start the video.",videoLoadError:"The video could not be loaded. Check the file.",videoUnavailable:"The 360° video is no longer available in this tour.",fullscreenError:"Full screen could not be toggled.",gallery:"Image gallery",images:"Images",enlargedImage:"Enlarged image",closeImage:"Close enlarged image",prevImage:"Previous image",nextImage:"Next image"},By={es:rh,en:ah,it:{panoramaLoading:"Caricamento…",panoramaLoadError:"Impossibile caricare questo panorama.",tourEmpty:"Questo tour non ha ancora scene.",variantLoadError:"Impossibile caricare questa versione. Riprova.",backToPanorama:"Torna al panorama",videoLoading:"Caricamento video",language:"Lingua",languageAria:"Lingua del tour",floors:"Piani",noFloor:"Senza piano",floorPlanOf:"Pianta di {name}",fullPlanOf:"Pianta completa: {name}",closePlan:"Chiudi pianta ×",planLoadError:"Impossibile caricare la pianta.",currentScene:"Scena attuale: {name}",goTo:"Vai a {name}",prevScene:"Scena precedente",nextScene:"Scena successiva",floorScene:"Scena del piano",chooseScene:"Scegli una scena",floorNoScenes:"Questo piano non ha ancora scene",thumbnails:"Miniature delle scene",visited:"✓ Visitata",enlargePlan:"Ingrandisci pianta",tools:"Strumenti del tour",fullscreen:"Schermo intero",resetView:"Ripristina vista",muteAudio:"Disattiva audio",enableAudio:"Attiva audio",stopTour:"Ferma tour",startTour:"Avvia tour",ambientVolume:"Volume ambiente",pauseAmbient:"Metti in pausa l'ambiente",retryAudio:"Riprova audio",enableAmbient:"Attiva ambiente",enableSound:"Riattiva suono",mute:"Silenzia",retryAudioHint:"Premi per riprovare l'audio.",backToTour:"Torna al tour",videoVolume:"Volume del video",pause:"Pausa",retryPlayback:"Riprova riproduzione",play:"Riproduci",playHint:"Premi Riproduci per avviare il video.",videoLoadError:"Impossibile caricare il video. Controlla il file.",videoUnavailable:"Il video 360° non è più disponibile in questo tour.",fullscreenError:"Impossibile cambiare schermo intero.",gallery:"Galleria di immagini",images:"Immagini",enlargedImage:"Immagine ingrandita",closeImage:"Chiudi immagine ingrandita",prevImage:"Immagine precedente",nextImage:"Immagine successiva"}};function zy(n){const e=String(n||"es").toLowerCase().split("-")[0];return By[e]||ah}function mn(n){const e=zy(n);return(t,i)=>String(e[t]??rh[t]??t).replace(/\{(\w+)\}/g,(r,a)=>i?.[a]??"")}const Et=(n,e,t,i)=>Number.isFinite(n)?Math.max(t,Math.min(i,n)):e;function sh(n){if(!(!n?.start||!n?.target))return{start:{yaw:Et(n.start.yaw,0,-36e3,36e3),pitch:Et(n.start.pitch,0,-90,90),...Number.isFinite(n.start.fov)?{fov:Et(n.start.fov,75,1,120)}:{}},target:{yaw:Et(n.target.yaw,0,-36e3,36e3),pitch:Et(n.target.pitch,0,-90,90)},speed:{yaw:Et(n.speed?.yaw,10,.01,3600),pitch:Et(n.speed?.pitch,10,.01,3600)}}}function Hy(n){if(Number.isFinite(n.durationMs))return Math.max(1,n.durationMs);const e=n.camera;return e?Math.max(1,1e3*Math.max(Math.abs(e.target.yaw-e.start.yaw)/e.speed.yaw,Math.abs(e.target.pitch-e.start.pitch)/e.speed.pitch)):8e3}const Vy=n=>({asset:typeof n?.asset=="string"?n.asset:null,volume:Et(n?.volume,.5,0,1),loop:n?.loop!==!1});function fc(n){if(!n)return null;const e=Number.isFinite(n.fov)?Et(n.fov,75,1,120):void 0,t=Number.isFinite(n.mobileFov)?Et(n.mobileFov,75,1,120):void 0,i={...e===void 0?{}:{fov:e},...t===void 0?{}:{mobileFov:t}};if(!Number.isFinite(n.minLat)||!Number.isFinite(n.maxLat)||n.minLat>=n.maxLat)return Object.keys(i).length?i:null;const r=Et(n.minLat,-85,-90,90),a=Et(n.maxLat,85,-90,90);return r<a?{minLat:r,maxLat:a,...i}:null}function Cs(n){const e=n?.playback||{},t=e.autopilot||{};return{view:fc(e.view),sceneViews:e.sceneViews||{},autopilot:{enabled:t.enabled===!0,loop:t.loop===!0,recordHistory:t.recordHistory===!0,onInteraction:["pause","stop","ignore"].includes(t.onInteraction)?t.onInteraction:"pause",steps:(Array.isArray(t.steps)?t.steps:[]).slice(0,200).map((i,r)=>({id:String(i.id||`step-${r}`),sceneId:String(i.sceneId||""),...Number.isFinite(i.durationMs)||!i.camera?{durationMs:Et(i.durationMs,8e3,250,6e5)}:{},...sh(i.camera)?{camera:sh(i.camera)}:{},...i.audio?.asset?{audio:{asset:i.audio.asset,volume:Et(i.audio.volume,1,0,1),waitForEnd:i.audio.waitForEnd!==!1}}:{},rotationDeg:Et(i.rotationDeg,40,-3600,3600),transition:["cut","fade","zoom"].includes(i.transition)?i.transition:"fade",transitionMs:Et(i.transitionMs,600,0,1e4)}))},audio:{enabled:e.audio?.enabled===!0,asset:typeof e.audio?.asset=="string"?e.audio.asset:null,volume:Et(e.audio?.volume,.5,0,1),loop:e.audio?.loop!==!1},sceneAudio:Object.fromEntries(Object.entries(e.sceneAudio||{}).slice(0,1e3).map(([i,r])=>[i,Vy(r)])),audioPrompt:{enabled:e.audioPrompt?.enabled===!0,text:String(e.audioPrompt?.text||"¿Activar audio?").slice(0,500),yesLabel:String(e.audioPrompt?.yesLabel||"Sí").slice(0,80),noLabel:String(e.audioPrompt?.noLabel||"No").slice(0,80)},ducking:{mode:e.ducking?.mode==="pause"?"pause":"attenuate",volume:Et(e.ducking?.volume,.15,0,1)},notice:{enabled:e.notice?.enabled===!0,text:String(e.notice?.text||"").slice(0,1e3),durationMs:Et(e.notice?.durationMs,5e3,500,6e4)},effects:{vignette:Et(e.effects?.vignette,0,0,1),reticle:e.effects?.reticle===!0}}}function hc(n,e,t=!1){const i=Cs(n),r=[i.view,fc(e?.view),fc(i.sceneViews[e?.id])].filter(Boolean),a=Object.assign({},...r);if(t){let s;for(const l of r){const o=Number.isFinite(l.mobileFov)?l.mobileFov:l.fov;Number.isFinite(o)&&(s=o)}s!==void 0&&(a.fov=s)}return Object.keys(a).length?a:null}function Gy(n){const e=Number(n?.startSec);return{startSec:Number.isFinite(e)&&e>0?Math.min(e,86400):0,onEnd:n?.onEnd==="hold"?"hold":"return"}}function Wy({root:n,getContext:e,onOverlayOpen:t}){const i=document.createElement("div");i.className="tour-navigation",i.dataset.ui="navigation",n.append(i);let r,a,s,l,o,c,u,f;const d=(E,w)=>mn(r?.language)(E,w),m=(E,w,_)=>{const C=document.createElement(E);return w&&(C.className=w),_!=null&&(C.textContent=_),C},h=(E,w,_="")=>{const C=m("button",_,E);return C.type="button",C.addEventListener("click",w),C};function v(){o&&(o.remove(),o=null,document.removeEventListener("keydown",p),c?.focus(),c=null)}function p(E){if(E.key==="Escape"){E.preventDefault(),v();return}if(E.key==="Tab"&&o){const w=[...o.querySelectorAll("button:not(:disabled),select")],_=w[0],C=w.at(-1);E.shiftKey&&document.activeElement===_?(E.preventDefault(),C?.focus()):!E.shiftKey&&document.activeElement===C&&(E.preventDefault(),_?.focus())}}function g(E){v(),(e?.()||r)?.goToScene?.(E)}function S(E,w=!1){const _=m("div",`tour-navigation-map${w?" is-large":""}`),C=St(r.doc,E?.floorplan);if(!C)return _;const T=m("img");T.src=C,T.alt=d("floorPlanOf",{name:E.name}),T.draggable=!1,w&&T.addEventListener("load",()=>{T.naturalWidth>0&&T.naturalHeight>0&&(_.style.width=`min(100%, ${72*T.naturalWidth/T.naturalHeight}vh)`)}),T.addEventListener("error",()=>{_.replaceChildren(m("p","",d("planLoadError")))}),_.append(T);for(const R of vs(r.doc.scenes).filter(U=>U.groupId===E.id)){const U=tx(R);if(!U)continue;const I=R.id===r.state?.sceneId,x=h("",()=>g(R.id),`tour-navigation-point${I?" is-current":""}${Gl(r.doc.design?.navigation).visited&&l.has(R.id)?" is-visited":""}`);x.style.left=`${U.x*100}%`,x.style.top=`${U.y*100}%`,x.style.setProperty("--heading",`${U.heading}deg`),x.title=xf(R,r.doc.scenes),x.setAttribute("aria-label",d(I?"currentScene":"goTo",{name:x.title})),I&&x.setAttribute("aria-current","location"),_.append(x)}if(w)return _;const L=m("div","tour-navigation-map-viewport");return L.append(_),L}function y(E,w){v(),t?.(),c=w,o=m("div","tour-navigation-overlay"),o.dataset.ui="floorplan",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-label",d("fullPlanOf",{name:E.name}));const _=m("section","tour-navigation-plan-card"),C=m("header");C.append(m("strong","",E.name),h(d("closePlan"),v)),_.append(C,S(E,!0)),o.append(_),n.append(o),o.addEventListener("click",T=>{T.target===o&&v()}),document.addEventListener("keydown",p),_.querySelector("button")?.focus()}function b(E){r=E||e?.();const w=Gl(r?.doc?.design?.navigation),_=w.enabled&&!r?.editing&&!r?.isEditor&&!["design","edit","editor"].includes(r?.mode)&&r?.screen!=="intro";if(i.hidden=!_,i.classList.toggle("has-language-picker",r?.languagePickerVisible===!0),i.style.bottom=r?.frameScrubberVisible?"48px":"0px",!_){v(),i.replaceChildren(),u=null;return}const C=r.doc.id||r.doc.tour?.id||"unknown";C!==s&&(s=C,l=r.visitState?.store(w.visited)||Xl(C),a=void 0,v()),r.visitState&&(l=r.visitState.store(w.visited));const T=r.doc.scenes?.find(U=>U.id===r.state?.sceneId);w.visited&&T?.id&&!r.visitState&&l.mark(T.id);const L=vs(r.doc.groups),R=JSON.stringify([r.state?.sceneId,r.language,r.playbackState,r.visitState?l.values():null]);R===u&&f===r.doc||(u=R,f=r.doc,T?.id!==i.dataset.scene&&(a=T?.groupId||null,v()),i.dataset.scene=T?.id||"",a&&!L.some(U=>U.id===a)&&(a=null),A())}function A(){const E=Gl(r.doc.design?.navigation);i.replaceChildren();const w=vs(r.doc.groups),_=r.doc.scenes.find(F=>F.id===r.state?.sceneId),C=w.find(F=>F.id===a);if(E.floors&&w.length){const F=m("nav","tour-navigation-floors");F.setAttribute("aria-label",d("floors"));for(const z of w){const K=h(z.code||z.name,()=>{a=z.id,A()});K.title=z.name,K.setAttribute("aria-pressed",String(z.id===a)),F.append(K)}if(r.doc.scenes.some(z=>!z.groupId)){const z=h(d("noFloor"),()=>{a=null,A()});z.setAttribute("aria-pressed",String(!a)),F.append(z)}i.append(F)}if(E.floors&&C){const F=m("section","tour-navigation-floor-card");F.append(m("strong","",C.name)),C.description&&F.append(m("span","",C.description)),i.append(F)}const T=nx(r.doc,E.floors&&w.length?a:void 0),L=m("div","tour-navigation-scene-bar"),R=T.findIndex(F=>_&&pn(F)===pn(_)),U=h("‹",()=>g(T[R-1]?.id));U.setAttribute("aria-label",d("prevScene")),U.disabled=R<=0;const I=h("›",()=>g(T[R+1]?.id));I.setAttribute("aria-label",d("nextScene")),I.disabled=R<0||R>=T.length-1;const x=m("select");if(x.setAttribute("aria-label",d("floorScene")),R<0){const F=m("option","",T.length?d("chooseScene"):d("floorNoScenes"));F.value="",x.append(F)}if(T.forEach(F=>{const z=m("option","",Wl(F,r.doc.scenes,r.entries));z.value=F.id,z.selected=_&&pn(F)===pn(_),x.append(z)}),x.disabled=!T.length,x.addEventListener("change",()=>{x.value&&g(x.value)}),L.append(U,x,I),i.append(L),E.thumbnails&&T.length){const F=m("nav","tour-navigation-thumbnails");F.setAttribute("aria-label",d("thumbnails"));for(const z of T){const K=_&&pn(z)===pn(_),ie=h("",()=>g(z.id),"tour-navigation-thumb");ie.setAttribute("aria-label",Wl(z,r.doc.scenes,r.entries)),K&&ie.setAttribute("aria-current","location");const $=z.image?.webp||z.panorama?.url||z.image?.url||z.url||z.webpPath,Z=z.image?.preview||$;if(Z){const ae=m("img");$&&$!==Z&&ae.addEventListener("error",()=>{ae.src=$},{once:!0}),ae.src=Z,ae.alt="",ae.loading="lazy",ie.append(ae)}ie.append(m("span","",Wl(z,r.doc.scenes,r.entries))),E.visited&&r.doc.scenes.some(ae=>pn(ae)===pn(z)&&l.has(ae.id))&&ie.append(m("small","",d("visited"))),F.append(ie)}i.append(F)}if(E.minimap&&C?.floorplan){const F=m("section","tour-navigation-minimap");F.append(S(C));const z=h(d("enlargePlan"),()=>y(C,z));F.append(z),i.append(F)}const D=m("nav","tour-navigation-tools");D.setAttribute("aria-label",d("tools"));const N=r.playbackState||{},B=[["fullscreen",d("fullscreen"),r.toggleFullscreen],["reset",d("resetView"),r.resetView],["audio",N.audio?.playing?d("muteAudio"):d("enableAudio"),r.doc.design?.playback?.audio?.enabled?r.toggleAudio:null],["autopilot",N.autopilot?.running?d("stopTour"):d("startTour"),r.doc.design?.playback?.autopilot?.enabled?r.toggleAutopilot:null]];for(const[F,z,K]of B)if(E.tools[F]&&typeof K=="function"){const ie=h(z,()=>{const $=e?.()||r,Z={fullscreen:$.toggleFullscreen,reset:$.resetView,audio:$.toggleAudio,autopilot:$.toggleAutopilot}[F];Z?.()});ie.dataset.action=F,D.append(ie)}D.childElementCount&&i.append(D)}return{update:b,closeOverlay:v,dispose(){v(),i.remove(),r=null}}}function Xy(n){try{return new Intl.DisplayNames([n],{type:"language"}).of(n)}catch{return n}}function $y({root:n,getContext:e,onChange:t}){const i=de("select",{"aria-label":mn()("languageAria"),onChange:l=>t(l.target.value)}),r=de("span",{text:mn()("language")}),a=de("label",{className:"tour-language-picker","data-ui":"true"},[r,i]);n.append(a);function s(l=e()){const o=pa(l?.doc?.design);a.hidden=!!(l?.editing||l?.mode==="edit"||l?.mode==="design")||o.list.length<2;const c=o.list.join("|");i.dataset.languages!==c&&(i.replaceChildren(...o.list.map(f=>de("option",{value:f,text:Xy(f)}))),i.dataset.languages=c),i.value=l?.language||o.default;const u=mn(i.value);r.textContent=u("language"),i.setAttribute("aria-label",u("languageAria"))}for(const l of["pointerdown","wheel","keydown","click"])a.addEventListener(l,o=>o.stopPropagation());return s(),{update:s,dispose(){a.remove()}}}function qy({root:n,onOverlayOpen:e,t=mn()}){let i,r=[],a=0,s,l;const o=n.ownerDocument||globalThis.document;function c(){i&&(i.remove(),i=null,o.removeEventListener("keydown",d,!0),n.style.overflow=l,s?.focus?.(),r=[])}function u(){const h=r[a],v=de("img",{src:h.url||h.asset,alt:h.caption||t("enlargedImage"),draggable:"false"}),p=de("figcaption",{text:h.caption||""}),g=(S,y,b,A=!1)=>de("button",{type:"button",text:S,"aria-label":y,disabled:A,onClick:b});i.replaceChildren(g("×",t("closeImage"),c),de("figure",{},[v,p]),de("nav",{"aria-label":t("images")},[g("←",t("prevImage"),()=>f(-1),r.length<2),de("span",{text:`${a+1} / ${r.length}`,"aria-live":"polite"}),g("→",t("nextImage"),()=>f(1),r.length<2)]))}function f(h){a=(a+h+r.length)%r.length;const v=[...i.querySelectorAll("button")].indexOf(o.activeElement);u(),i.querySelectorAll("button")[Math.max(0,v)]?.focus()}function d(h){if(i&&(h.stopPropagation(),h.key==="Escape"&&(h.preventDefault(),c()),(h.key==="ArrowLeft"||h.key==="ArrowRight")&&(h.preventDefault(),f(h.key==="ArrowLeft"?-1:1)),h.key==="Tab")){const v=[...i.querySelectorAll("button:not(:disabled)")],p=v[0],g=v.at(-1);h.shiftKey&&(o.activeElement===p||!i.contains(o.activeElement))?(h.preventDefault(),g.focus()):!h.shiftKey&&(o.activeElement===g||!i.contains(o.activeElement))&&(h.preventDefault(),p.focus())}}function m(h){const v=(Array.isArray(h?.items)?h.items:[]).filter(p=>p&&typeof(p.url||p.asset)=="string"&&(p.url||p.asset));if(v.length){c(),e?.(),s=o.activeElement,l=n.style.overflow,r=v.slice(0,20),a=Math.max(0,Math.min(r.length-1,Math.trunc(Number(h.index)||0))),i=de("div",{className:"tour-lightbox",role:"dialog","aria-modal":"true","aria-label":t("gallery"),"data-ui":"true"});for(const p of["pointerdown","pointermove","pointerup","wheel","click","dblclick","contextmenu"])i.addEventListener(p,g=>{g.stopPropagation(),p==="wheel"&&g.preventDefault()},{passive:!1});i.addEventListener("click",p=>{p.target===i&&c()}),n.append(i),n.style.overflow="hidden",u(),o.addEventListener("keydown",d,!0),i.querySelector("button").focus()}}return{open:m,close:c,dispose:c}}function Yy({root:n,onTexture:e,onClose:t,onState:i,onError:r,t:a=mn()}){let s=null,l=null,o=0,c=!1,u=0,f="return",d={open:!1,playing:!1,loading:!1,muted:!1,volume:1,error:null},m=!1,h=null;const v=document.createElement("div");v.dataset.ui="spherical-video",v.className="tour-video360",v.hidden=!0;const p=document.createElement("div");p.dataset.ui="video360-loading",p.className="tour-video360-loading",p.hidden=!0,p.setAttribute("role","status"),p.setAttribute("aria-label",a("videoLoading"));const g=document.createElement("button"),S=document.createElement("button"),y=document.createElement("button"),b=document.createElement("input"),A=document.createElement("span");g.type=S.type=y.type="button",y.textContent=a("backToTour"),b.type="range",b.min=0,b.max=1,b.step=.05,b.value=1,b.setAttribute("aria-label",a("videoVolume")),A.setAttribute("role","status"),v.append(g,S,b,y,A),n.append(v),n.append(p);function E(){g.textContent=d.playing?a("pause"):d.error?a("retryPlayback"):a("play"),S.textContent=d.muted?a("enableSound"):a("mute"),y.textContent=h||a("backToPanorama"),A.textContent=d.error||"",p.hidden=!d.open||!d.loading,p.setAttribute("aria-label",a("videoLoading")),i?.({...d})}async function w(){const C=s,T=o;if(!C)return!1;d.error&&C.load();try{return await C.play(),T!==o?!1:(d.playing=!C.paused,d.error=null,E(),d.playing)}catch(L){if(T===o){const R=L?.name==="NotSupportedError"||!!C.error;d.playing=!1,d.loading=!1,d.error=a(R?"videoLoadError":"playHint"),E(),r?.(new Error(d.error))}return!1}}function _(C=!0){const T=d.open;o++,s&&(s.onloadeddata=s.onloadedmetadata=s.onended=s.onerror=s.onpause=s.onplay=s.onwaiting=s.onstalled=s.onplaying=s.onseeking=s.onseeked=null,s.pause(),s.removeAttribute("src"),s.load(),s=null),l?.dispose(),l=null,d={...d,open:!1,playing:!1,loading:!1,error:null},v.hidden=!0,E(),T&&C&&t?.()}return g.onclick=()=>{s?.paused?(s.ended&&(s.currentTime=u),w()):(s?.pause(),d.playing=!1,E())},S.onclick=()=>{d.muted=!d.muted,s&&(s.muted=d.muted||m),E()},b.oninput=()=>{d.volume=Number(b.value),s&&(s.volume=d.volume),E()},y.onclick=()=>_(),{open({url:C,poster:T,startSec:L=0,onEnd:R="return",backLabel:U}={}){if(c||!C)return Promise.resolve(!1);_(!1);const I=o;if(h=typeof U=="string"?U.trim().slice(0,80):null,u=Number.isFinite(L)&&L>0?L:0,f=R==="hold"?"hold":"return",s=document.createElement("video"),s.crossOrigin="anonymous",s.playsInline=!0,s.preload="auto",s.loop=!1,s.muted=d.muted,s.volume=d.volume,T&&(s.poster=T),s.muted=d.muted||m,l=new md(s),l.colorSpace=Rt,d={...d,open:!0,loading:!0,error:null},v.hidden=!1,s.onloadeddata=()=>{I===o&&(d.loading=!1,e?.(l),E())},s.onerror=()=>{I===o&&(d.error=a("videoLoadError"),d.playing=!1,d.loading=!1,E(),r?.(new Error(d.error)))},s.onloadedmetadata=()=>{if(I!==o||!u)return;const x=s.duration;s.currentTime=Number.isFinite(x)&&x>0?Math.min(u,Math.max(0,x-.1)):u},s.onpause=()=>{d.playing=!1,d.loading=!1,E()},s.onwaiting=s.onstalled=s.onseeking=()=>{I===o&&(d.loading=!0,E())},s.onplaying=s.onseeked=()=>{I===o&&(d.loading=!1,E())},s.onended=()=>{I===o&&(d.playing=!1,d.loading=!1,E(),f==="return"&&_())},s.onplay=()=>{d.playing=!0,d.error=null,E()},s.src=C,u)try{s.currentTime=u}catch{}return e?.(l),E(),w()},close:_,setGlobalMuted(C){m=!!C,s&&(s.muted=d.muted||m)},getState:()=>({...d,localMuted:d.muted,muted:d.muted||m}),dispose(){c=!0,_(!1),v.remove(),p.remove()}}}function oh(n,e,t){return(n||[]).some(i=>!i.hidden&&as(i,e,t)&&(i.template==="tour-controls"||i.props?.action?.type==="toggleAudio"||i.props?.binding==="audioOn"||oh(i.children,e,t)))}function Ky({onChange:n,createAudio:e=()=>document.createElement("audio")}={}){let t={},i=()=>null,r=null,a=0,s=!1,l=null,o=!1,c=!1,u=!1,f=null;const d=new Set,m=new Set,h=new Set,v=new Map,p=()=>{s||n?.(L())},g=()=>h.size>0||[...m].some(R=>!R.ended&&!R.audio.paused);function S(R){R.released=!0,R.audio.onended=R.audio.onerror=null,R.audio.pause(),R.audio.removeAttribute("src"),R.audio.load(),d.delete(R)}function y(R,U=!1){if(!(s||R.released||!o||R.pending||!U&&R.failed||!R.audio.paused||R.audio.ended&&!U)){R.pending=!0;try{R.promise=Promise.resolve(R.audio.play()).then(()=>{R.pending=!1,!R.released&&!s&&(R.paused&&R.audio.pause(),R.failed=!1,f=null,b(),p())}).catch(()=>{R.pending=!1,!R.released&&!s&&(R.failed=!0,f="No se pudo reproducir el audio. Toca para reintentar",R.onFailure?.(),p())})}catch{R.pending=!1,R.failed=!0,R.onFailure?.()}}}function b(){const R=g(),U=R&&t.ducking?.mode!=="pause"?t.ducking?.volume??.15:1;for(const I of d)I.audio.muted=c||!o,I.audio.volume=Math.max(0,Math.min(1,I.volume*I.gain*U)),u||R&&t.ducking?.mode==="pause"?I.audio.pause():y(I);for(const I of m)I.audio.muted=c||!o;for(const[I,x]of v)I.muted=x.muted||c||!o}function A(R){clearInterval(l),l=null;const U=[...d].map(D=>[D,D.gain]),I=performance.now();function x(){const D=Math.min(1,Math.max(0,(performance.now()-I)/500));for(const[N,B]of U)N.gain=B+((N===R?1:0)-B)*D;if(b(),D>=1){clearInterval(l),l=null;for(const[N]of U)N!==R&&S(N);p()}}l=setInterval(x,25),x()}function E(R,U,I){t=R,i=I;const x=t.sceneAudio?.[U]||(t.audio?.enabled?t.audio:null),D=x?.asset&&i(x.asset);if(!D){r&&(r=null,A(null));return}if(r?.url===D){r.configuredVolume!==x.volume&&(r.volume=r.configuredVolume=x.volume),r.audio.loop=x.loop,b();return}const N=[...d].find(z=>z.url===D&&!z.released);if(N){r=N,r.volume=r.configuredVolume=x.volume,r.audio.loop=x.loop,b(),A(r);return}const B=e();B.preload="auto",B.src=D,B.loop=x.loop;const F={id:++a,asset:x.asset,url:D,audio:B,volume:x.volume,configuredVolume:x.volume,gain:o?0:1};if(B.onended=p,B.onerror=()=>{F.released||(f="No se pudo cargar el audio. Toca para reintentar",F.failed=!0,p())},d.add(F),r=F,o)b(),A(F);else{for(const z of[...d])z!==F&&S(z);b()}}function w(R){o=!0,c=!R,f=null;for(const U of d)U.failed=!1;b();for(const U of m)!U.ended&&!U.paused&&y(U,!0);return p(),R}function _(R,U,I=!1){const x=i(R.asset),D=e(),N={audio:D,paused:I,ended:!1,released:!1,pending:!1,asset:R.asset};function B(z=!1){N.ended||N.released||(N.ended=!0,N.failed=z,D.pause(),b(),p(),U?.())}N.onFailure=()=>B(!0),D.preload="auto",D.src=x||"",D.loop=!1,D.volume=R.volume??1,D.muted=c||!o,D.onended=()=>B(),D.onerror=()=>B(!0),m.add(N);const F=()=>{!N.ended&&!N.paused&&y(N)};return!x||!o?queueMicrotask(()=>B(!0)):I||F(),b(),p(),{pause(){N.paused=!0,D.pause(),b(),p()},resume(){N.paused=!1,F(),b(),p()},stop(){N.released=!0,D.onended=D.onerror=null,D.pause(),D.removeAttribute("src"),D.load(),m.delete(N),b(),p()},getState:()=>({asset:N.asset,ended:N.ended,failed:N.failed===!0,playing:!N.ended&&!D.paused,currentTime:D.currentTime||0,duration:Number.isFinite(D.duration)?D.duration:null,muted:D.muted})}}function C(R,U){const I=h.has(R);U?h.add(R):h.delete(R),I!==!!U&&(b(),p())}function T(R,{duck:U=!0,muted:I=R.muted}={}){const x={muted:!!I},D=()=>C(R,U&&!R.error&&!R.paused&&!R.ended&&!x.muted&&R.volume>0);x.cleanup=()=>{for(const N of["play","pause","ended","volumechange","error"])R.removeEventListener(N,D)},v.set(R,x);for(const N of["play","pause","ended","volumechange","error"])R.addEventListener(N,D);return b(),D(),()=>{x.cleanup(),v.delete(R),C(R,!1)}}function L(){return{unlocked:o,enabled:o&&!c,muted:c||!o,playing:[...d].some(R=>!R.audio.paused),volume:r?.volume??.5,error:f,ducked:g(),ducking:t.ducking?.mode||"attenuate",tracks:[...d].map(R=>({id:R.id,asset:R.asset,gain:R.gain,volume:R.audio.volume,muted:R.audio.muted,paused:R.audio.paused,currentTime:R.audio.currentTime||0}))}}return{configure:E,getState:L,enable:w,async toggleAudio(){const R=w(!o||c);return await Promise.all([...d].map(U=>U.promise)),R&&!f},unlock(){o||w(!0)},createNarration:_,registerMedia:T,setDuckingSource:C,pauseAudio(){u=!0,b(),p()},resumeAudio(){return u=!1,b(),p(),Promise.resolve(o)},setVolume(R){r&&(r.volume=R),b(),p()},dispose(){s=!0,clearInterval(l);for(const R of[...d])S(R);for(const R of m)R.released=!0,R.audio.onended=R.audio.onerror=null,R.audio.pause(),R.audio.removeAttribute("src"),R.audio.load();m.clear();for(const R of v.values())R.cleanup();v.clear(),h.clear()}}}function Zy({root:n,getContext:e,onChange:t,t:i=mn()}){const r=document.createElement("div");r.className="tour-ambient",r.dataset.ui="ambient";const a=document.createElement("div");a.className="tour-ambient-effects";const s=document.createElement("div");s.className="tour-ambient-notice",s.setAttribute("role","status");const l=document.createElement("div");l.className="tour-ambient-controls";const o=document.createElement("button"),c=document.createElement("button"),u=document.createElement("input"),f=document.createElement("span");o.type=c.type="button",u.type="range",u.min=0,u.max=1,u.step=.05;const d=document.createElement("div"),m=document.createElement("div"),h=document.createElement("p"),v=document.createElement("button"),p=document.createElement("button");d.className="tour-audio-prompt",d.dataset.ui="audio-prompt",d.hidden=!0,m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-label","Audio"),v.type=p.type="button",m.append(h,v,p),d.append(m),l.append(o,c,u,f),r.append(a,s,l,d),n.append(r);let g,S=null,y=null,b=null,A=null,E=Cs(),w=!1,_=!1;function C(){if(!g||_)return;const x=g.getState();o.textContent=x.enabled?i("pauseAmbient"):x.error?i("retryAudio"):i("enableAmbient"),c.textContent=x.muted?i("enableSound"):i("mute"),u.setAttribute("aria-label",i("ambientVolume")),u.value=x.volume,f.textContent=x.error||"",t?.({...x,prompt:!d.hidden})}const T=()=>Ky({onChange:C});g=T();function L(x){A=x,d.hidden=!0,g.enable(x),C()}v.onclick=()=>L(!0),p.onclick=()=>L(!1);function R(){A=!0,d.hidden=!0;const x=g.toggleAudio();return C(),x}o.onclick=c.onclick=R,u.oninput=()=>g.setVolume(Number(u.value));function U(x){w||_||!x?.isTrusted||x.target?.closest?.('[data-ui="audio-prompt"], [data-action="toggleAudio"], .tour-ambient-controls')||(!E.audioPrompt.enabled||A!==null)&&g.unlock()}for(const x of["pointerdown","click","keydown"])n.addEventListener?.(x,U,!0);function I(x=e?.()||{}){const D=x.doc||{};E=Cs(D.design),w=!!(x.editing||x.isEditor||x.mode==="editor"),r.hidden=w;const N=D.id||D.tour?.id||"tour";S!==N&&(S!==null&&(g.dispose(),g=T()),S=N,y=null,A=null,clearTimeout(b),s.hidden=!0),!w&&y!==S&&(y=S,s.hidden=!E.notice.enabled,s.textContent=E.notice.text,s.hidden||(b=setTimeout(()=>{s.hidden=!0},E.notice.durationMs))),a.style.boxShadow=E.effects.vignette?`inset 0 0 20vmin 8vmin rgba(0,0,0,${E.effects.vignette})`:"none",a.classList.toggle("has-reticle",E.effects.reticle);const B=E.audio.enabled&&!!E.audio.asset||Object.values(E.sceneAudio).some(K=>K.asset)||E.autopilot.steps.some(K=>K.audio),F=!w&&B&&E.audioPrompt.enabled&&A===null;d.hidden=!F,h.textContent=E.audioPrompt.text,v.textContent=E.audioPrompt.yesLabel,p.textContent=E.audioPrompt.noLabel;const z=K=>x.resolveAsset?.(K)||D.assets?.[K?.replace(/^asset:/,"")]?.url||null;g.configure(w?{...E,audio:{enabled:!1},sceneAudio:{}}:E,x.state?.sceneId,z),l.hidden=w||!B||oh(D.design?.screens?.tour?.elements,x.state?.sceneId,D.scenes),C()}return{update:I,toggleAudio:R,unlock:()=>{(!E.audioPrompt.enabled||A!==null)&&g.unlock()},pauseAudio:()=>g.pauseAudio(),resumeAudio:()=>g.resumeAudio(),createNarration:(...x)=>g.createNarration(...x),setDuckingSource:(...x)=>g.setDuckingSource(...x),registerMedia:(...x)=>g.registerMedia(...x),getState:()=>({...g.getState(),prompt:!d.hidden}),dispose(){_=!0,clearTimeout(b);for(const x of["pointerdown","click","keydown"])n.removeEventListener?.(x,U,!0);g.dispose(),r.remove()}}}const Jy=n=>n*n*(3-2*n);function Qy({navigate:n,getView:e,setView:t,createNarration:i,onChange:r,onError:a}){let s={enabled:!1,steps:[]},l=new Set,o=0,c=null,u=null,f=!1,d={running:!1,paused:!1,index:-1,phase:"idle",reason:null},m=null,h=null;const v=()=>m?m.elapsed+(m.began==null?0:Math.max(0,performance.now()-m.began)):0,p=()=>({...d,playing:d.running&&!d.paused,elapsedMs:v(),durationMs:m?.duration||0,progress:m?Math.min(1,v()/m.duration):0,narration:h?.getState?.()||null}),g=()=>r?.(p()),S=()=>{c!=null&&cancelAnimationFrame(c),clearTimeout(u),c=u=null};function y(U="manual"){o++,S(),h?.stop(),h=null,m=null,d={...d,running:!1,paused:!1,phase:"idle",reason:U},g()}function b(U){if(!m)return;const I=m.segmentStart||m.start,x=m.segmentAt||0,D=Math.max(0,Math.min(1,(U-x)/Math.max(1,m.duration-x))),N=m.smooth?Jy(D):D;t({lon:I.lon+(m.target.lon-I.lon)*N,lat:I.lat+(m.target.lat-I.lat)*N,fov:I.fov})}function A(U){f||U!==o||d.paused||(S(),h?.stop(),h=null,d.index+1<s.steps.length?_(d.index+1,U):s.loop?_(0,U):y("complete"))}function E(U){if(U!==o||d.paused||!m)return;S(),b(m.duration),m.elapsed=m.duration,m.began=null,s.steps[d.index].audio?.waitForEnd!==!1&&h&&!h.getState().ended?(d.phase="narration",g()):A(U)}function w(U){if(!m||U!==o||d.paused)return;if(d.phase==="narration"){(!h||h.getState().ended)&&A(U);return}m.began=performance.now(),b(m.elapsed);function I(){U!==o||d.paused||!m||(b(v()),c=requestAnimationFrame(I))}c=requestAnimationFrame(I),u=setTimeout(()=>E(U),Math.max(0,m.duration-m.elapsed))}async function _(U,I){if(f||I!==o)return;const x=s.steps[U];if(!x||!l.has(x.sceneId)){y("missing-scene"),a?.(new Error("El piloto se detuvo: la escena ya no existe."));return}m=null,d={running:!0,paused:!1,index:U,phase:"loading",reason:null},g();try{if(await n(x.sceneId,{kind:x.transition,durationMs:x.transitionMs})===!1&&I===o){y("navigation-cancelled");return}}catch(z){I===o&&(y("load-error"),a?.(z));return}if(f||I!==o)return;const D=e(),N=x.camera,B=N?{lon:N.start.yaw,lat:N.start.pitch,fov:N.start.fov??D.fov}:{...D},F=N?{lon:N.target.yaw,lat:N.target.pitch}:{lon:B.lon+(x.rotationDeg||0),lat:B.lat};if(m={start:B,target:F,duration:Hy(x),elapsed:0,began:null,smooth:!!N},d.phase="moving",x.audio&&i){const z=i(x.audio,()=>{h!==z||!d.running||(d.phase==="narration"&&!d.paused?A(o):g())},d.paused);h=z}w(I),g()}function C(U="manual"){return!d.running||d.paused?!1:(m?.began!=null&&(m.elapsed=Math.min(m.duration,v()),m.began=null,b(m.elapsed)),m&&(m.pausedView={...e()}),S(),d.paused=!0,d.reason=U,h?.pause(),g(),!0)}function T(){if(!d.running||!d.paused)return!1;if(d.phase==="away"){const U=o,I=d.index,x=s.steps[I];return d.paused=!1,d.reason=null,m?(d.phase="loading",g(),Promise.resolve(n(x.sceneId,{kind:x.transition,durationMs:x.transitionMs})).then(D=>{if(!(U!==o||f)){if(D===!1){y("navigation-cancelled");return}d.phase=m.elapsed>=m.duration?"narration":"moving",d.paused||(h?.resume(),w(U)),g()}}).catch(D=>{U===o&&(y("load-error"),a?.(D))}),!0):(_(I,U),!0)}if(m?.pausedView&&d.phase==="moving"){const U=e();["lon","lat","fov"].some(I=>Math.abs(U[I]-m.pausedView[I])>.001)&&(m.segmentStart={...U},m.segmentAt=m.elapsed)}return d.paused=!1,d.reason=null,h?.resume(),g(),w(o),!0}function L(){d.running&&s.onInteraction!=="ignore"&&(s.onInteraction==="stop"?y("interaction"):C("interaction"))}function R(){L(),d.running&&d.paused&&(o++,d.phase="away",g())}return{configure(U,I){JSON.stringify(U)!==JSON.stringify(s)&&(d.running&&y("configuration"),s=U||{enabled:!1,steps:[]}),l=new Set(I||[]),d.running&&!l.has(s.steps[d.index]?.sceneId)&&y("missing-scene")},start(){return f||!s.enabled||!s.steps?.length?!1:(y("restart"),d.running=!0,_(0,o),!0)},pause:C,resume:T,interact:L,visitorNavigate:R,stop:y,getState:p,dispose(){y("disposed"),f=!0}}}function jy({canvas:n,getView:e,setView:t,reducedMotion:i=()=>globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches}){let r=0,a=null,s=null,l=null,o=!1,c=null;const u=n.style.opacity,f=n.style.transition;function d(){r++,o=!1,c=null,l?.(),l=null,a!=null&&cancelAnimationFrame(a),a=null,n.style.opacity=u,n.style.transition=f,s?.(),s=null}function m(){if(!c||o)return;c.began=performance.now();function g(S){const y=c;if(!y||y.token!==r||o)return;const b=y.duration<=0?1:Math.min(1,(y.elapsed+Math.max(0,S-y.began))/y.duration);y.callback(b),b<1?a=requestAnimationFrame(g):(c=null,a=null,s=null,y.resolve())}a=requestAnimationFrame(g)}function h(g,S,y){return new Promise(b=>{s=b,c={duration:g,callback:S,token:y,resolve:b,elapsed:0,began:null},m()})}function v(){o||(o=!0,c?.began!=null&&(c.elapsed+=Math.max(0,performance.now()-c.began),c.began=null),a!=null&&cancelAnimationFrame(a),a=null)}function p(){o&&(o=!1,m())}return{cancel:d,pause:v,resume:p,dispose:d,async run({kind:g="cut",durationMs:S=600}={},y){d();const b=r,A=i()?0:S,E=e();g==="zoom"&&(l=()=>t({...e(),fov:E.fov}));try{if(g==="fade"&&A&&await h(A/2,_=>{n.style.opacity=String(1-_)},b),g==="zoom"&&A&&await h(A/2,_=>t({...E,fov:E.fov-Math.min(20,E.fov/3)*_}),b),b!==r||(await y(),b!==r))return!1;const w=e();return g==="zoom"&&(l=()=>t({...e(),fov:w.fov})),g==="fade"&&A&&await h(A/2,_=>{n.style.opacity=String(_)},b),g==="zoom"&&A&&await h(A/2,_=>t({...w,fov:w.fov-Math.min(20,w.fov/3)*(1-_)}),b),b===r}finally{b===r&&(l?.(),l=null,n.style.opacity=u,n.style.transition=f)}}}}function eM(n,e=["calendly.com"]){const t=ai(n);if(!t)return null;const i=new URL(t).hostname.toLowerCase();return e.some(r=>typeof r=="string"&&(i===r.toLowerCase()||i.endsWith(`.${r.toLowerCase()}`)))?t:null}const lh=n=>typeof n=="string"&&/^(?:[1-9]\d?|100)%$|^[1-9]\d{0,3}px$/.test(n)?n:"90%";function tM({root:n,getContext:e,onOpen:t,onClose:i}){let r=null,a=null,s=[];const l=n.ownerDocument||document;function o(){if(r){r.remove(),r=null,l.removeEventListener("keydown",c,!0);for(const[u,f]of s)u.inert=f;s=[],a?.focus?.(),a=null,i?.()}}function c(u){if(u.key==="Escape"&&(u.preventDefault(),u.stopPropagation(),o()),u.key==="Tab"&&r){const f=r.querySelector("button"),d=r.querySelector("iframe");(!r.contains(l.activeElement)||u.shiftKey&&l.activeElement===f)&&(u.preventDefault(),(u.shiftKey?d:f)?.focus())}}return{open(u){const f=ai(u?.url);if(!f)return!1;const d=e()?.doc?.design?.embed?.allowedDomains??["calendly.com"];if(!eM(f,Array.isArray(d)?d:[]))return window.open(f,"_blank","noopener,noreferrer"),!0;o(),a=l.activeElement,r=document.createElement("dialog"),r.className="tour-embed-overlay",r.dataset.ui="embed",r.setAttribute("aria-label",u.title||"Contenido web");const m=document.createElement("div");m.className="tour-embed-dialog",m.style.width=lh(u.width),m.style.height=lh(u.height);const h=document.createElement("button");h.type="button",h.textContent="×",h.setAttribute("aria-label","Cerrar"),h.onclick=o;const v=document.createElement("iframe");v.title=u.title||"Contenido web",v.setAttribute("sandbox","allow-scripts allow-forms allow-same-origin allow-popups"),v.referrerPolicy="strict-origin-when-cross-origin",v.src=f,v.tabIndex=0,s=[...n.children].map(p=>[p,p.inert]);for(const[p]of s)p.inert=!0;return m.append(h,v),r.append(m),n.append(r),r.addEventListener("cancel",p=>{p.preventDefault(),o()}),typeof r.showModal=="function"?r.showModal():(r.setAttribute("open",""),r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true")),r.onclick=p=>{p.target===r&&o()},l.addEventListener("keydown",c,!0),h.focus(),t?.(),!0},close:o,isOpen:()=>!!r,dispose:o}}const pc=(n,e,t,i)=>(n||[]).some(r=>!r.hidden&&as(r,t,i)&&(r.template===e||pc(r.children,e,t,i)));function nM({root:n,getContext:e,controls:t,navigateReady:i,cancelNavigation:r,applyVideoTexture:a,restoreVideo:s,setLanguage:l,reportError:o,onPlaybackChange:c}){let u=!1,f=!1,d,m,h,v,p,g=!1,S=null,y=null;const b=(B,F)=>mn(e()?.language)(B,F);function A(B){if(u)return;const F=B?.message||String(B);S?.remove(),clearTimeout(y),S=document.createElement("div"),S.className="tour-wave4-error",S.dataset.ui="error",S.setAttribute("role","alert"),S.textContent=F,n.append(S),y=setTimeout(()=>{S?.remove(),S=null},6e3),o?.(F)}function E(){return{autopilot:v?.getState()||{running:!1},audio:h?.getState()||{playing:!1},video:p?.getState()||{open:!1},embed:{open:R?.isOpen()||!1}}}function w(B="manual"){v?.getState().running&&(v.stop(B),T.cancel(),r?.(),t.cancelAnimation())}function _(){const B=e(),F=p?.getState().open;return{...B,...D(),editing:!!B.editing||F,screen:F?"video":B.screen,resolveAsset:z=>St(B.doc,z)}}function C(){if(!(u||f)){f=!0;try{const B=_(),F=Cs(B.doc?.design),z=B.doc?.design?.screens?.tour?.elements;(B.editing||B.screen==="intro")&&w("editor"),v?.configure(F.autopilot,(B.doc?.scenes||[]).map(W=>W.id));const K=pc(z,"language-toggle",B.state?.sceneId,B.doc?.scenes);m?.update({...B,editing:B.editing||B.screen==="intro"||K});const ie=e();h?.update({...B,editing:ie.editing}),p?.setGlobalMuted?.(h?.getState().muted);const $=p?.getState(),Z=!!$?.open||R.isOpen();Z!==g&&(g=Z,g?h?.pauseAudio():h?.resumeAudio()),h?.setDuckingSource?.("video360",$?.open&&$?.playing&&!$?.localMuted&&$?.volume>0);const ae=!B.editing&&B.screen!=="intro"&&!K&&(B.doc?.design?.languages?.list?.length||0)>1;d?.update({..._(),languagePickerVisible:ae,frameScrubberVisible:B.state?.frameCount>1&&pc(z,"frame-scrubber",B.state?.sceneId)}),n.classList.toggle("tour-video360-open",!!p?.getState().open)}finally{f=!1}c?.(E())}}const T=jy({canvas:n.querySelector("canvas"),getView:t.getViewState,setView:t.setViewState}),L=qy({root:n,t:b,onOverlayOpen:()=>{w("overlay"),d?.closeOverlay()}}),R=tM({root:n,getContext:e,onOpen:()=>{v?.pause("embed"),t.cancelAnimation(),L.close(),d?.closeOverlay(),C()},onClose:()=>{u||C()}});h=Zy({root:n,t:b,getContext:_,onChange:C}),v=Qy({navigate:(B,F)=>T.run(F,()=>i(B)),getView:t.getViewState,setView:t.setViewState,animateView:t.animateCameraTo,createNarration:(...B)=>h.createNarration(...B),onChange:B=>{B.running?B.paused?T.pause?.():T.resume?.():(T.cancel(),r?.()),C()},onError:A}),p=Yy({root:n,t:b,onTexture:a,onError:A,onState:C,onClose(){if(u)return;const B=t.getViewState();s(),t.setViewState(B),h.setDuckingSource?.("video360",!1),C()}}),m=$y({root:n,getContext:_,onChange:B=>{w("language"),l(B)}}),d=Wy({root:n,getContext:_,onOverlayOpen:()=>{w("overlay"),L.close()}});function U(B){const F=e();if(F.editing)return Promise.resolve(!1);const K=F.doc?.assets?.[String(B?.asset||"").replace(/^asset:/,"")]?.kind==="video"?St(F.doc,B.asset):null;return K?(R.close(),w("video"),L.close(),d.closeOverlay(),t.cancelAnimation(),p.open({url:K,poster:St(F.doc,B.poster),backLabel:B.backLabel,...Gy(B)})):(A(new Error(b("videoUnavailable"))),Promise.resolve(!1))}function I(){const B=e();return B.editing||B.screen==="intro"||R.isOpen()?!1:v.getState().running?v.getState().paused?v.resume():(v.pause(),!1):x()}function x(){const B=e();return B.editing||B.screen==="intro"||R.isOpen()?!1:(p.close(),L.close(),d.closeOverlay(),v.start())}function D(){return{playbackState:E(),play360:U,openLightbox:B=>{e().editing||L.open(B)},onLanguage:l,toggleAutopilot:I,toggleAudio:()=>h?.toggleAudio(),openEmbed:B=>e().editing?!1:R.open(B),resetView:()=>{w("reset");const B=e(),F=B.doc?.scenes?.find(z=>z.id===B.state.sceneId);t.resetView(F?.initialYaw||0,F?.initialPitch||0,hc(B.doc?.design,F,n.clientWidth<720)?.fov??75)},toggleFullscreen:async()=>{w("fullscreen");try{document.fullscreenElement===n?await document.exitFullscreen():await n.requestFullscreen()}catch{A(new Error(b("fullscreenError")))}}}}function N(B){B.isTrusted&&!B.target.closest?.('[data-action="autopilot"], [data-action="toggleAutopilot"], [data-action="toggleAudio"], [data-action="openEmbed"], [data-ui="embed"], [data-ui="audio-prompt"]')&&!e().editing&&v.interact()}return n.addEventListener("click",N,!0),{extras:D,update:C,stop:w,play360:U,interact:()=>v.interact(),visitorNavigate(){v.visitorNavigate(),v.getState().paused&&(T.cancel(),r?.())},pauseAutopilot:()=>v.pause(),resumeAutopilot:()=>!R.isOpen()&&v.resume(),toggleAutopilot:I,toggleAudio:()=>h.toggleAudio(),registerMedia:(...B)=>h.registerMedia(...B),startAutopilot:x,getState:E,sceneWillChange(){R.close(),L.close(),d.closeOverlay(),p.getState().open&&p.close()},dispose(){u=!0,clearTimeout(y),S?.remove(),n.removeEventListener("click",N,!0),v.dispose(),T.dispose(),p.dispose(),L.dispose(),R.dispose(),d.dispose(),m.dispose(),h.dispose()}}}function iM(n,e=50){let t=[];const i=()=>t.map(a=>({sceneId:a.sceneId,view:{...a.view}})),r=()=>n?.({canGoBack:t.length>0,entries:i()});return{push(a,s){a&&(t.push({sceneId:a,view:{lon:s.lon,lat:s.lat,fov:s.fov}}),t=t.slice(-e),r())},pop(a=()=>!0){let s;for(;t.length;){const l=t.pop();if(a(l.sceneId)){s=l;break}}return r(),s||null},clear(){t=[],r()},retain(a){const s=t.filter(l=>a(l.sceneId));s.length!==t.length&&(t=s,r())},canGoBack:()=>t.length>0,getEntries:i}}function ch(n,e=16,t=495){const i=n.map(o=>Ir(o.yaw,o.pitch,1)),r=[],a=[],s=[];for(let o=0;o<=e;o++){const c=o/e;for(let u=0;u<=e;u++){const f=u/e,d=i[0].clone().lerp(i[1],f),m=i[3].clone().lerp(i[2],f),h=d.lerp(m,c).normalize().multiplyScalar(t);if(r.push(h.x,h.y,h.z),a.push(f,1-c),o<e&&u<e){const v=o*(e+1)+u,p=v+e+1;s.push(v,p,v+1,p,p+1,v+1)}}}const l=new un;return l.setAttribute("position",new Dt(r,3)),l.setAttribute("uv",new Dt(a,2)),l.setIndex(s),l.computeBoundingSphere(),l}function dh(n,e,t){const i=Math.max(1,n||1),r=Math.max(1,e||1),a=.5*Math.min(i,r)*Math.max(0,Math.min(.5,t||0));return new je(a/i,a/r)}function rM(n,e,t,i,r){const a=dh(t,i,r);if(!a.x||!a.y)return 1;const s=Math.max(0,1-Math.min(n,1-n)/a.x),l=Math.max(0,1-Math.min(e,1-e)/a.y);return Math.max(0,1-Math.sqrt(s*s+l*l))}function aM(){return new Sn({transparent:!0,side:gn,depthWrite:!1,uniforms:{media:{value:null},opacity:{value:1},blendingLimit:{value:new je},decodeVideo:{value:!1}},vertexShader:`varying vec2 vUV;
      void main() { vUV = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform sampler2D media;
      uniform float opacity;
      uniform vec2 blendingLimit;
      uniform bool decodeVideo;
      varying vec2 vUV;
      void main() {
        vec4 color = texture2D(media, vUV);
        if (decodeVideo) color = sRGBTransferEOTF(color);
        float alpha = color.a * opacity;
        if (blendingLimit.x > 0.0 && blendingLimit.y > 0.0) {
          vec2 edge = min(vUV, 1.0 - vUV);
          vec2 coef = max(vec2(0.0), 1.0 - edge / blendingLimit);
          alpha *= max(0.0, 1.0 - sqrt(dot(coef, coef)));
        }
        gl_FragColor = vec4(color.rgb, alpha);
        #include <colorspace_fragment>
      }`})}const sM=n=>Array.isArray(n)&&n.length===4&&n.every(e=>Number.isFinite(e?.yaw)&&Number.isFinite(e?.pitch));function oM({root:n,scene:e,camera:t,getContext:i,registerMedia:r,onError:a,createVideo:s=()=>document.createElement("video"),textureLoader:l=new Xp}){const o=new Map,c=new Td,u=new je;let f=null,d=!1,m=!1,h=!1,v=null;function p(T){const L=T.texture?.image;return[L?.videoWidth||L?.naturalWidth||L?.width||1,L?.videoHeight||L?.naturalHeight||L?.height||1]}function g(T){const[L,R]=p(T);T.mesh.material.uniforms.blendingLimit.value.copy(dh(L,R,T.spec.feather))}function S(T){if(h||d||!T.video)return;const L=T.video;try{Promise.resolve(L.play()).catch(R=>{h||T.video!==L||(T.error=R?.name==="NotAllowedError"?"Toca el video para reproducirlo.":"No se pudo reproducir el video incrustado.",a?.({id:T.spec.id,message:T.error}))})}catch(R){T.error=R.message}}function y(T){T.unregister?.(),T.unregister=null,T.video&&(T.video.onloadedmetadata=T.video.onloadeddata=T.video.onended=T.video.onerror=T.video.onplay=null,T.video.pause(),T.video.removeAttribute("src"),T.video.load(),T.video=null),T.texture?.dispose(),T.texture=null,T.mesh.material.uniforms.media.value=null}function b(T,L,R){y(T);const U=i(),I=St(U.doc,L);if(T.asset=L,T.error=null,T.mesh.visible=!1,!I){T.error="El archivo incrustado no está disponible.";return}if(T.spec.kind==="image"){const x=l.load(I,D=>{if(h||T.texture!==x){D.dispose();return}g(T),T.mesh.visible=!d},void 0,()=>{T.texture===x&&(T.error="No se pudo cargar la imagen incrustada.",a?.({id:T.spec.id,message:T.error}))});T.texture=x,x.colorSpace=Rt}else{const x=s();T.video=x,x.crossOrigin="anonymous",x.playsInline=!0,x.preload="auto",x.loop=R,x.volume=T.spec.volume??1,x.muted=!!T.spec.muted;const D=St(U.doc,T.spec.poster);D&&(x.poster=D),T.texture=new md(x),T.texture.colorSpace=Rt,x.onloadedmetadata=()=>g(T),x.onloadeddata=()=>{g(T),T.mesh.visible=!d},x.onplay=()=>{T.error=null},x.onerror=()=>{T.error="No se pudo cargar el video incrustado.",a?.({id:T.spec.id,message:T.error})},x.onended=()=>{const N=T.spec.onEnd;N&&typeof N=="object"&&N.swapTo&&T.asset!==N.swapTo&&(b(T,N.swapTo,N.loop!==!1),S(T))},x.src=I,T.unregister=r?.(x,{muted:!!T.spec.muted})}T.mesh.material.uniforms.media.value=T.texture,T.mesh.material.uniforms.decodeVideo.value=T.spec.kind==="video",g(T)}function A(T){y(T),e.remove(T.mesh),T.mesh.geometry.dispose(),T.mesh.material.dispose()}function E(){if(!(h||m)){m=!0;try{const T=i(),L=T.state?.sceneId;if(f!==L){for(const x of o.values())A(x);o.clear(),f=L}const R=d;d=!!T.playbackState?.video?.open||!!T.playbackState?.embed?.open||T.screen==="intro";const U=(T.doc?.design?.sceneOverlays?.[f]||[]).filter(x=>x?.id&&["image","video"].includes(x.kind)&&sM(x.corners)),I=new Set(U.map(x=>x.id));for(const[x,D]of o)I.has(x)||(A(D),o.delete(x));for(const x of U){let D=o.get(x.id);if(!D){const K=new qt(ch(x.corners),aM());K.renderOrder=1+o.size,e.add(K),D={mesh:K,spec:x,geometryKey:JSON.stringify(x.corners),sourceKey:null},o.set(x.id,D)}const N=D.spec;D.spec=x;const B=JSON.stringify(x.corners);D.geometryKey!==B&&(D.mesh.geometry.dispose(),D.mesh.geometry=ch(x.corners),D.geometryKey=B),D.mesh.material.uniforms.opacity.value=x.opacity??1;const F=JSON.stringify([x.kind,x.asset,St(T.doc,x.asset),x.poster]),z=D.sourceKey!==F;z?(D.sourceKey=F,b(D,x.asset,x.onEnd==="loop"||!!x.loop),D.resume=x.autoplay!==!1,D.resume&&S(D)):D.video&&(D.video.volume=x.volume??1,!!N.muted!=!!x.muted&&(D.unregister?.(),D.unregister=r?.(D.video,{muted:!!x.muted})),D.video.loop=D.asset!==x.asset?x.onEnd?.loop!==!1:x.onEnd==="loop"||!!x.loop),g(D),D.mesh.visible=!d&&(D.spec.kind==="image"?!!D.texture?.image?.width:(D.video?.readyState??0)>=2),d&&!R&&(z||(D.resume=!!D.video&&!D.video.paused),D.video?.pause()),!d&&R&&D.resume&&S(D)}}finally{m=!1}}}function w(T){if(i().editing||d||T.target.closest?.("[data-ui],button,a,input,textarea,select,.hs-marker"))return null;const R=n.getBoundingClientRect();u.set((T.clientX-R.left)/R.width*2-1,-(T.clientY-R.top)/R.height*2+1),c.setFromCamera(u,t);const U=c.intersectObjects([...o.values()].map(I=>I.mesh));for(const I of U){const x=[...o.values()].find(B=>B.mesh===I.object);if(!x?.mesh.visible||x.spec.click==="none")continue;const[D,N]=p(x);if(rM(I.uv.x,I.uv.y,D,N,x.spec.feather)*(x.spec.opacity??1)>.02)return x}return null}const _=T=>{T.button===0&&(v={x:T.clientX,y:T.clientY})};function C(T){if(!v||Math.hypot(T.clientX-v.x,T.clientY-v.y)>5){v=null;return}v=null;const L=w(T);if(!L)return;const R=L.spec.click??"playPause";R==="playPause"&&L.video?L.video.paused?S(L):L.video.pause():R&&typeof R=="object"&&(R.type==="openUrl"&&ai(R.target)?window.open(ai(R.target),"_blank","noopener,noreferrer"):ps(R,i()))}return n.addEventListener("pointerdown",_,!0),n.addEventListener("click",C),{update:E,getState:()=>[...o.values()].map(T=>({id:T.spec.id,asset:T.asset,kind:T.spec.kind,paused:T.video?.paused??!0,currentTime:T.video?.currentTime||0,duration:T.video?.duration||null,muted:T.video?.muted,volume:T.video?.volume,loop:T.video?.loop,visible:T.mesh.visible,error:T.error,dimensions:p(T),feather:T.mesh.material.uniforms.blendingLimit.value.toArray()})),dispose(){h=!0,n.removeEventListener("pointerdown",_,!0),n.removeEventListener("click",C);for(const T of o.values())A(T);o.clear()}}}const lM="#4da3ff";function cM(n,e,t={}){const i=t.mode||"view",r=i==="edit",a=i==="design";let s=null,l=t.designScreen==="intro"||ss(t.designScreen)?t.designScreen:"tour";const o=new Map;let c=!0;const u=[];function f(O,H){o.get(O)?.forEach(ue=>{try{ue(H)}catch(me){console.error(`[TourRuntime] error en el manejador de "${O}"`,me)}})}function d(O,H){c?u.push([O,H]):f(O,H)}function m(O,H){o.has(O)||o.set(O,new Set),o.get(O).add(H)}function h(O,H){o.get(O)?.delete(H)}const v=document.createElement("div");v.className="tour-rt-root",n.appendChild(v);const p=fb(v),g=_b({camera:p.camera,sphere:p.sphere}),S=e?.design?.panoramas?.maxWidth>6144,y=v.clientWidth<720||(globalThis.navigator?.deviceMemory??8)<=4,b=S?y?2048:4096:1/0,A=xl({frames:[],maxTextureSize:Math.min(p.renderer.capabilities.maxTextureSize,b),...S?{maxCache:2,ahead:0,behind:0}:{}}),E=xl({maxCache:5,maxTextureSize:1024}),w=xl({maxCache:2,maxTextureSize:Math.min(p.renderer.capabilities.maxTextureSize,y?2048:4096),ahead:0,behind:0}),_=gb({scene:p.scene,renderer:p.renderer}),C=new Map;let T=0,L=null,R=null;const U=document.createElement("div");U.className="tour-rt-status",U.hidden=!0;const I=document.createElement("div");I.className="tour-rt-ui",v.append(U,I);let x=e,D=Uy(x?.design,globalThis.location?.search||""),N=r||a?x:uc(x,D),B=yf(N?.tour?.id||N?.id);const F=Fy(v,{resolveUrl:t.resolveUrl,onError:O=>d("fontError",O)});let z=null,K=null,ie=!1,$=!1,Z=!1,ae=!1,W=null;const ne=new Set;let q=vf(N),ge=bf(q),fe=null,pe=0,_e=null,ce=null,ve=null,Le,Re=0,Oe=!1,Ye=!1,ze=null,at=null,Ge={sceneId:null,loaded:0,total:0,ready:!1};const He=()=>fe?.scenes[pe]??null;function V(O){const H=yl(O,C.get(O?.id));return H?{...O,image:H.image}:O}function ft(){++T,_.cancel(),L=null,R=null}async function Je(O){const H=He(),ue=ia(H),me=ue.find(Ne=>Ne.id===O);if(!me||!Ge.ready||z?.getState().video.open||L)return!1;if(yl(H,C.get(H.id))?.id===O)return!0;const xe=++T;L=O,R=null,Gn(),++Re,clearTimeout(Le),ve=null,w.setFrames([me.image.webp]);try{const Ne=await w.loadTexture(0);return Ye||xe!==T||He()?.id!==H.id||!await _.run(Ne,N?.design?.panoramas?.variantFadeMs??600)||Ye||xe!==T||He()?.id!==H.id?!1:(Ue.hide(),p.sphere.material.map=Ne,p.sphere.material.color.set(16777215),p.sphere.material.needsUpdate=!0,C.set(H.id,O),_e=me.image.webp,ce=null,M(fe),w.evictFarTextures(0),v.dataset.panoramaQuality="full",d("variantchange",{sceneId:H.id,variantId:O}),O==="base"&&Ue.canShow(H)&&Ue.show(H,null,{preserveBase:!0}).then(()=>{!Ye&&xe===T&&He()?.id===H.id&&(_e=`tiles:${H.id}:${H.image.tiles.base}`)}).catch(()=>{}),!0)}catch{return xe===T&&!Ye&&(R=mn(D)("variantLoadError"),d("varianterror",{sceneId:H.id,variantId:O})),!1}finally{xe===T&&!Ye&&(L=null,Gn())}}const k=iM(O=>{d("history",O),Gn()});function M(O){A.setFrames(O.scenes.map(H=>V(H)?.image?.webp)),E.setFrames(O.scenes.map(H=>V(H)?.image?.preview))}function Y(){return{sceneId:He()?.id??null,batchKey:fe?.key??null,frameIndex:pe,frameCount:fe?.scenes.length??0,language:D,panoramaVariantId:yl(He(),C.get(He()?.id))?.id||"base",...oe.getViewState()}}function ee(O,H){r||(U.textContent=O,U.className=`tour-rt-status tour-rt-status--${H}`,U.hidden=!1)}function se(){U.hidden=!0}function be(){const O=N?.design?.brand||{};v.style.setProperty("--tour-accent",O.colors?.[0]||lM);const H=O.radius??8;v.style.setProperty("--tour-radius",typeof H=="number"?`${H}px`:String(H)),F.update(N),Cy(v,O.fonts),L_(v,N?.design?.theme)}function Se(){re.apply(zx(N?.design,He()?.id),N)}const re=Xx({scene:p.scene,camera:p.camera,onChange:()=>oe.reclamp()}),oe=pb({containerEl:v,camera:p.camera,getMinLat:O=>re.getMinLat(O),getViewBounds:()=>hc(N?.design,He(),v.clientWidth<720),onInteraction:()=>z?.interact(),onArrowKey:O=>{r||nr(pe+O)}}),ye=by({root:v,getConfig:()=>N?.design?.contextMenu,resetView:()=>{z?.stop("reset"),ga()},reportError:O=>d("actionerror",{message:O})}),Ue=ly({scene:p.scene,camera:p.camera,sphere:p.sphere,renderer:p.renderer,normalizeImages:S,onProgress:O=>{!Ye&&O.sceneId===He()?.id&&!Ge.ready&&Wt(O)},onSupport:()=>{!Ye&&fe&&ci()}});function Ae(O,H){return g.pointToLonLat(O,H,v.getBoundingClientRect())}const Me=Ox({scene:p.scene,mode:a?"view":i,container:v,pick:Ae,getContext:Fe,onOpen:qe,onClick:(O,H)=>d("hotspotclick",{hotspot:O,rect:H}),onSelect:O=>d("hotspotselect",{hotspot:O}),onEditPiece:(O,H,ue)=>d("hotspoteditpiece",{hotspot:O,piece:H,rect:ue}),onMove:(O,{lon:H,lat:ue})=>d("hotspotmove",{id:O,lon:H,lat:ue,sceneId:He()?.id??null,frameIndex:pe}),onStyleMove:(O,H)=>d("hotspotstylechange",{id:O,style:H}),onResize:(O,H)=>d("hotspotresize",{id:O,patch:H})}),Be=xy(v,()=>({...Fe(),mode:ie?"view":i,getTemplate:on,onEditPiece:r?(O,H,ue)=>{ie||d("hotspoteditpiece",{hotspot:O,piece:H,rect:ue})}:null}));function Ve(){const H=(fe?nh(q,fe,pe):[]).map(({hotspot:ue,lon:me,lat:xe})=>({hotspot:ue,lon:me,lat:xe,style:j_(ue,N.design)}));Me.setEntries(H),Be.sync(H)}function qe(O){if(a)return;if(O.content?.media360?.enabled){z?.play360(O.content.media360);return}const H=ra(O,ie?"view":i);if((!H?.enabled||H.placement!=="screen")&&Be.close(),H?.placement==="inline"&&le(),H){H.enabled?H.placement==="screen"&&(le(),Be.open(O)):O.type==="nav"&&ys(O,Ci);return}if(O.type==="nav"){ys(O,Ci);return}Ee(O),d("hotspotopen",{hotspot:O})}function G(O){const H=wb(N?.design,O);if(H)return{panel:H};const ue=N?.design?.detailPanel;return{template:on(ue?.template)||on("floating-card"),props:ue?.props||{}}}function Ee(O){if(le(),a)return;const{template:H,props:ue,panel:me}=G(O);if(me){const Ne=dc({root:I,getTemplate:on,onClose:le});Ne.update(me,{...Fe(),hotspot:O}),ze={hotspot:O,el:Ne.el,layer:Ne};return}const xe=H.render(ue,{hotspot:O,mode:i,onClose:le});I.appendChild(xe),ze={hotspot:O,el:xe,template:H}}function le(){ze&&(ze.layer?ze.layer.dispose():(ze.template?.dispose?.(ze.el),ze.el.remove()),ze=null)}function Te(){if(!ze)return;const O=(q.hotspotsByScene.get(ze.hotspot.sceneId)||[]).find(H=>H.id===ze.hotspot.id);if(!O){le();return}Ee(O)}const Ie=O=>H=>{O==="tour"&&v.style.setProperty("--tour-ui-scale",String(H.scale)),d("layout",{screen:O,...H})},he=uy({uiLayer:I,getTemplate:on,animate:!a,onLayout:Ie("tour")}),ke=hy();z=nM({root:v,getContext:Fe,controls:oe,navigateReady:ht,setLanguage:gt,onPlaybackChange:O=>{K?.update(),r||he.update(Fe()),d("playback",O)},cancelNavigation:()=>[...ne].forEach(O=>O()),reportError:O=>d("actionerror",{message:O}),applyVideoTexture(O){ft(),ae||(W=p.sphere.material.map,ae=!0),++Re,Ue.hide(),p.sphere.material.map=O,p.sphere.material.color.set(16777215),p.sphere.material.needsUpdate=!0},restoreVideo(){Ye||Z||(Z=!0,p.sphere.material.map=W,p.sphere.material.needsUpdate=!0,W=null,ae=!1,_e=null,ci(),Z=!1)}}),K=oM({root:v,scene:p.scene,camera:p.camera,getContext:Fe,registerMedia:(...O)=>z.registerMedia(...O),onError:O=>d("overlayerror",O)});function Fe(){return{mode:ie?"view":i,doc:N,state:Y(),loading:Ge,entries:ge,...!r&&!a?{visitState:B}:{},language:D,onLanguage:gt,screen:$?"intro":l,editing:a||r&&!ie,panoramaVariants:ia(He()),selectPanoramaVariant:Je,variantPending:L,variantError:R,goToScene:Ci,back:Is,canGoBack:k.canGoBack,goToFrame:nr,seek:nr,...r?{onEditDetailContent:O=>d("hotspoteditdetail",{hotspot:O})}:{},...z?.extras(),...a?{editorState:s}:{}}}function gt(O){const H=pa(x?.design),ue=H.list.includes(O)?O:H.default;D!==ue&&(z?.stop("language"),D=ue,Ns(x),d("languagechange",{language:D}))}function ht(O,H={}){return Ye||!q.sceneById.has(O)?Promise.reject(new Error("La escena del recorrido ya no existe.")):He()?.id===O&&Ge.ready?Promise.resolve():new Promise((ue,me)=>{let xe;const Ne=()=>{clearTimeout(xe),h("sceneready",we),h("loaderror",Qe),ne.delete(Ke)},we=tt=>{tt.sceneId===O&&(Ne(),ue())},Qe=tt=>{tt.sceneId===O&&(Ne(),me(new Error("No se pudo cargar la escena del recorrido.")))},Ke=()=>{Ne(),me(new Error("Se canceló el recorrido."))};ne.add(Ke),m("sceneready",we),m("loaderror",Qe),xe=setTimeout(()=>{Ne(),me(new Error("La escena tardó demasiado en cargar."))},3e4),Ci(O,{...H,automatic:!0})})}function Wt(O){Ge={...Ge,...O},d("loadprogress",{sceneId:Ge.sceneId,loaded:Ge.loaded,total:Ge.total}),Gn(),ke.refreshProgress()}function en(){if(K?.update(),r){z?.update();return}const O=(N?.design?.screens?.tour?.elements||[]).filter(H=>!H.hidden);he.rebuild(O,Fe()),v.style.setProperty("--tour-rt-top",`${he.getTopInset()+16}px`),a&&tr(),z?.update()}function Gn(){K?.update(),r||he.update(Fe()),z?.update()}function xc(){const O=He()?.id;Mf({mode:i,introVisible:$,ready:Ge.ready,sceneId:O})&&B.mark(O)&&d("visitprogress",{sceneId:O})}function Ps(){if(!r){if(a){tr();return}$=ke.show(N,{root:v,getTemplate:on,getCtx:Fe,enter:()=>{ke.hide(),$=!1,xc(),Gn(),d("enter")}})}}let Ti=!1,oi=null;function Ls(){const O=N?.design?.screens?.intro||{};return{...N,design:{...N.design,screens:{...N.design.screens,intro:{...O,enabled:!0}}}}}function tr(){const O=ss(l),H=N?.design?.panels?.find(me=>me.id===O);if(H?(oi||(oi=dc({root:I,getTemplate:on,design:!0,onLayout:me=>d("layout",{screen:l,...me})})),oi.update(H,Fe())):(oi?.dispose(),oi=null),I.querySelectorAll(":scope > .tour-rt-el").forEach(me=>{me.hidden=!!O||l==="intro"}),l!=="intro"){Ti&&ke.dispose(),Ti=!1;return}const ue=Ls();Ti?ke.refresh(ue):(ke.show(ue,{root:v,getTemplate:on,getCtx:Fe,enter:()=>{},design:!0,onLayout:Ie("intro")}),Ti=!0)}function li(O){if(!a)return;const H=O==="intro"||ss(O)?O:"tour";H!==l&&(l=H,tr(),d("layout",{screen:l}))}function ma(){const O=a?l:"tour";return{screen:O,boxes:O==="intro"?ke.getBoxes(v):ss(O)?oi?.getBoxes(v)??[]:he.getBoxes(v)}}function ci(){if(z?.getState().video.open&&!Z)return;const O=pe,H=V(He()),ue=H?.image?.webp,me=N?.design?.panoramas?.progressive===!0?H?.image?.preview:null,xe=H?.image?.tiles&&Ue.isProbing(),Ne=Ue.canShow(H),we=Ne?`tiles:${H.id}:${H.image.tiles.base}`:ue,Qe=JSON.stringify([H?.id,we,me,!!xe]);if(ve===Qe)return;ve=Qe,clearTimeout(Le);const Ke=++Re;let tt=!1,lt=!1,At=!1;const Ce=()=>!Ye&&Ke===Re,Lt=()=>!!me&&ce===me&&Ge.sceneId===H?.id&&Ge.ready;Lt()||Wt({sceneId:H?.id??null,loaded:0,total:0,ready:!1});function nt(Ht){const dt=p.sphere.material;dt.map=Ht,dt.color.set(16777215),dt.needsUpdate=!0}function zt(){se(),!Ge.ready&&(Mf({mode:i,introVisible:$,ready:!0,sceneId:H.id})&&B.mark(H.id)&&d("visitprogress",{sceneId:H.id}),Wt({loaded:Ge.total||Ge.loaded||1,total:Ge.total||Ge.loaded||1,ready:!0}),Oe||(Oe=!0,d("ready")),ke.setReady(!0),d("sceneready",{sceneId:H.id}))}function tn(){At=!0,ve=null,_e=we,ce=null,v.dataset.panoramaQuality="full",zt(),!r&&!Ne&&A.preloadGPU(O)}function ln(){if(Ce()){if(C.get(H?.id)&&C.get(H.id)!=="base"){C.delete(H.id),M(fe),ve=null,ci();return}if(tt){lt=!0;return}ve=null,!Lt()&&(ee(mn(D)("panoramaLoadError"),"error"),d("loaderror",{sceneId:H?.id??null,index:O}))}}if(!ue){ln();return}if(!xe&&we===_e){tn();return}function di(){if(!(!Ce()||xe)){if(Ne){Ue.show(H,()=>{!Ce()||!me||(At=!0,_e=null,ce=me,v.dataset.panoramaQuality="preview",zt())}).then(()=>{Ce()&&tn()}).catch(()=>{Ce()&&(Ue.canShow(H)?ln():ci())});return}Ue.hide(),A.loadTexture(O,Ht=>{Ce()&&!Lt()&&Wt(Ht)}).then(Ht=>{Ce()&&(nt(Ht),tn())}).catch(ln)}}if(!me||Lt()||!Ne&&!xe&&A.hasTexture(O)){di();return}Ue.hide(),tt=!0;let ct=!1;const vt=()=>{ct||!Ce()||(ct=!0,clearTimeout(Le),di())};Le=setTimeout(vt,800),E.loadTexture(O).then(Ht=>{Ce()&&!At&&(nt(Ht),_e=null,ce=me,v.dataset.panoramaQuality="preview",zt())}).catch(()=>{}).finally(()=>{tt=!1,Ye||E.evictFarTextures(pe),vt(),lt&&ln()})}function kr(O,{resetCamera:H=!1,batchChanged:ue=!1}={}){ft(),ye.close(),z?.sceneWillChange();const me=He()?.id??null;pe=Math.max(0,Math.min(fe.scenes.length-1,O));const xe=He();if(Se(),H?ga():oe.reclamp(),ue){const Ne=p.sphere.material;Ne.map=null,Ne.color.set(1118498),Ne.needsUpdate=!0,_e=null,ce=null,delete v.dataset.panoramaQuality,ee(mn(D)("panoramaLoading"),"loading")}ze&&(!ue&&nh(q,fe,pe).some(we=>we.hotspot.id===ze.hotspot.id)||le()),ci(),Ve(),ue&&d("scenechange",{sceneId:xe.id}),(ue||me!==xe.id)&&d("framechange",{index:pe,total:fe.scenes.length,sceneId:xe.id}),Gn()}function wi(O,H,{resetCamera:ue}){fe=O,M(O),kr(H,{resetCamera:ue,batchChanged:!0})}function nr(O,{automatic:H=!1}={}){if(H||z?.visitorNavigate(),!fe||!Number.isFinite(O))return;const ue=Math.max(0,Math.min(fe.scenes.length-1,Math.round(O)));ue!==pe&&kr(ue)}const Wn=(O,H)=>hc(O,H,v.clientWidth<720)?.fov??75;function ga(){const O=He();oe.resetView(O?.initialYaw||0,O?.initialPitch||0,Wn(N?.design,O))}function va(O,H){Number.isFinite(O)&&Number.isFinite(H)&&Math.abs(O-H)>1e-6&&oe.setViewState({fov:H})}function Is(){const O=k.pop(H=>q.sceneById.has(H));return O?(Ci(O.sceneId,{recordHistory:!1,camera:{yaw:O.view.lon,pitch:O.view.lat,fov:O.view.fov}}),!0):!1}function Ci(O,{automatic:H=!1,recordHistory:ue=!H||N?.design?.playback?.autopilot?.recordHistory===!0,camera:me}={}){H||z?.visitorNavigate();const xe=q.batchByScene.get(O);if(!xe)return;const Ne=He(),we=Ne?.origen==="video_frame"&&xe.batch.key===fe?.key&&xe.batch.scenes[xe.index]?.origen==="video_frame";if(ue&&Ne?.id!==O&&!we&&!a&&(!r||ie)&&k.push(Ne?.id,oe.getViewState()),fe&&xe.batch.key===fe.key){if(xe.index===pe){me&&oe.setViewState({lon:me.yaw,lat:me.pitch,fov:me.fov});return}const Qe=xe.batch.scenes[xe.index];kr(xe.index,{resetCamera:Qe.origen!=="video_frame"})}else wi(xe.batch,xe.index,{resetCamera:!0});me&&oe.setViewState({lon:me.yaw,lat:me.pitch,fov:me.fov})}function Ds(){ft(),ye.close(),z?.sceneWillChange(),fe=null,pe=0,re.apply(null,N),Re++,clearTimeout(Le),ve=null,_e=null,ce=null,delete v.dataset.panoramaQuality;const O=p.sphere.material;O.map=null,O.color.set(1118498),O.needsUpdate=!0,Ue.hide(),Me.setEntries([]),Be.sync([]),le(),ee(mn(D)("tourEmpty"),"error"),Gn()}function Ns(O){if(ft(),Ye)return;ye.close();const H=He(),ue=H?Wn(N?.design,H):null,me=x?.tour?.id||x?.id,xe=fe?.key??null;x=O;const Ne=pa(x?.design);Ne.list.includes(D)||(D=Ne.default),N=r||a?x:uc(x,D),q=vf(N),(x?.tour?.id||x?.id)!==me?(k.clear(),B=yf(x?.tour?.id||x?.id)):k.retain(Ke=>q.sceneById.has(Ke)),ge=bf(q),be();let we=H?q.batchByScene.get(H.id):null;if(!we&&xe){const Ke=q.batches.find(tt=>tt.key===xe);Ke&&(we={batch:Ke,index:Math.min(pe,Ke.scenes.length-1)})}let Qe=!1;if(!we){const Ke=_f(q,{});we=Ke&&{batch:Ke.batch,index:Ke.frameIndex},Qe=!0}if(!we)Ds();else if(we.batch.key===xe){fe=we.batch,M(fe),pe=we.index;const Ke=He();Se(),oe.reclamp();const tt=V(Ke);(Ue.canShow(tt)?`tiles:${Ke.id}:${tt.image.tiles.base}`:tt.image?.webp)!==_e&&ci(),Ve(),H?.id!==Ke.id?d("framechange",{index:pe,total:fe.scenes.length,sceneId:Ke.id}):va(ue,Wn(N?.design,Ke))}else wi(we.batch,we.index,{resetCamera:Qe});Te(),en()}function P(O){if(Ye||!N)return;ye.close();const H=O?.playback!==x?.design?.playback?He():null,ue=H?Wn(N.design,H):null;x={...x,design:O},N=r||a?x:uc(x,D),Se(),H&&va(ue,Wn(N.design,H)),H&&oe.reclamp(),be(),Ve(),Te(),en()}function X(O){if(!O.target.closest?.("[data-ui], button, a, input, textarea, select, .hs-marker, .tour-rt-intro"))if(r&&!ie){O.preventDefault();const H=Ae(O.clientX,O.clientY);H&&d("contextmenu",{...H,clientX:O.clientX,clientY:O.clientY})}else!a&&He()&&ye.open(O.clientX,O.clientY)&&O.preventDefault()}v.addEventListener("contextmenu",X);function te(){Ue.update(),p.render();const O=v.getBoundingClientRect(),H=r?O:he.getDetailViewport(O);Me.constrainDetails(H),Be.constrain(H),at=requestAnimationFrame(te)}te();const Q=new ResizeObserver(()=>p.setSize(v.clientWidth,v.clientHeight));Q.observe(v),be(),Ps();const j=_f(q,t);j?wi(j.batch,j.frameIndex,{resetCamera:!0}):Ds(),en(),c=!1,queueMicrotask(()=>u.splice(0).forEach(([O,H])=>f(O,H)));function De(){Ye||(Ye=!0,ft(),_.dispose(),w.dispose(),clearTimeout(Le),cancelAnimationFrame(at),Q.disconnect(),v.removeEventListener("contextmenu",X),ne.forEach(O=>O()),F.dispose(),K?.dispose(),z?.dispose(),ye.dispose(),oe.dispose(),le(),Me.dispose(),Be.dispose(),oi?.dispose(),he.dispose(),ke.dispose(),re.dispose(),Ue.dispose(),A.dispose(),E.dispose(),p.dispose(),o.clear(),v.remove())}return{setEditorState(O){a&&(s=O,Gn(),l!=="tour"&&tr())},setHotspotTesting(O){r&&(ye.close(),ie=O,Be.close(),Me.setMode(O?"view":"edit"),z?.update())},previewHotspotDetail(O,H){Me.previewDetail(O,H),Be.preview(O,H)},selectHotspot(O){i==="edit"&&Me.select(O)},setDocument:Ns,setDesign:P,goToScene:Ci,back:Is,canGoBack:k.canGoBack,getHistory:k.getEntries,goToFrame:nr,selectPanoramaVariant:Je,getState:Y,setLanguage:gt,play360:O=>z.play360(O),startAutopilot:()=>z.startAutopilot(),pauseAutopilot:()=>z.pauseAutopilot(),resumeAutopilot:()=>z.resumeAutopilot(),toggleAutopilot:()=>z.toggleAutopilot(),toggleAudio:()=>z.toggleAudio(),registerMedia:(...O)=>z.registerMedia(...O),stopAutopilot:()=>z.stop(),getPlaybackState:()=>z.getState(),getOverlayState:()=>K.getState(),focus:(O,H,ue=600)=>oe.animateCameraTo(O,H,ue),pickLonLat:Ae,projectLonLat(O,H){const ue=Ir(O,H,495).project(p.camera);return{x:(ue.x+1)/2*v.clientWidth,y:(1-ue.y)/2*v.clientHeight,visible:ue.z>=-1&&ue.z<1}},offsetLonLat(O,H,ue,me){const xe=v.getBoundingClientRect(),Ne=Ir(O,H).clone().project(p.camera);return Ne.z<1?Ae(xe.left+(Ne.x+1)/2*xe.width+ue,xe.top+(1-Ne.y)/2*xe.height+me):null},setDesignScreen:li,getElementBoxes:ma,on:m,off:h,destroy:De}}return Fs.createTourRuntime=cM,Object.defineProperty(Fs,Symbol.toStringTag,{value:"Module"}),Fs})({});
