var V2=Object.defineProperty;var W2=(t,e,n)=>e in t?V2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>W2(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Td(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ft={},No=[],ls=()=>{},E_=()=>!1,cu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uu=t=>t.startsWith("onUpdate:"),gn=Object.assign,wd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},X2=Object.prototype.hasOwnProperty,Tt=(t,e)=>X2.call(t,e),Ke=Array.isArray,Uo=t=>_l(t)==="[object Map]",hu=t=>_l(t)==="[object Set]",um=t=>_l(t)==="[object Date]",rt=t=>typeof t=="function",sn=t=>typeof t=="string",ds=t=>typeof t=="symbol",wt=t=>t!==null&&typeof t=="object",b_=t=>(wt(t)||rt(t))&&rt(t.then)&&rt(t.catch),T_=Object.prototype.toString,_l=t=>T_.call(t),j2=t=>_l(t).slice(8,-1),w_=t=>_l(t)==="[object Object]",Ad=t=>sn(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ga=Td(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fu=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},q2=/-\w/g,Oi=fu(t=>t.replace(q2,e=>e.slice(1).toUpperCase())),$2=/\B([A-Z])/g,vr=fu(t=>t.replace($2,"-$1").toLowerCase()),A_=fu(t=>t.charAt(0).toUpperCase()+t.slice(1)),eh=fu(t=>t?`on${A_(t)}`:""),ss=(t,e)=>!Object.is(t,e),Sc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},R_=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Y2=t=>{const e=parseFloat(t);return isNaN(e)?t:e},K2=t=>{const e=sn(t)?Number(t):NaN;return isNaN(e)?t:e};let hm;const du=()=>hm||(hm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function En(t){if(Ke(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=sn(i)?e3(i):En(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(sn(t)||wt(t))return t}const Z2=/;(?![^(]*\))/g,J2=/:([^]+)/,Q2=/\/\*[^]*?\*\//g;function e3(t){const e={};return t.replace(Q2,"").split(Z2).forEach(n=>{if(n){const i=n.split(J2);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bn(t){let e="";if(sn(t))e=t;else if(Ke(t))for(let n=0;n<t.length;n++){const i=bn(t[n]);i&&(e+=i+" ")}else if(wt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const t3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n3=Td(t3);function C_(t){return!!t||t===""}function i3(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=vl(t[i],e[i]);return n}function vl(t,e){if(t===e)return!0;let n=um(t),i=um(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ds(t),i=ds(e),n||i)return t===e;if(n=Ke(t),i=Ke(e),n||i)return n&&i?i3(t,e):!1;if(n=wt(t),i=wt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!vl(t[o],e[o]))return!1}}return String(t)===String(e)}function P_(t,e){return t.findIndex(n=>vl(n,e))}const I_=t=>!!(t&&t.__v_isRef===!0),dt=t=>sn(t)?t:t==null?"":Ke(t)||wt(t)&&(t.toString===T_||!rt(t.toString))?I_(t)?dt(t.value):JSON.stringify(t,D_,2):String(t),D_=(t,e)=>I_(e)?D_(t,e.value):Uo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[th(i,r)+" =>"]=s,n),{})}:hu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>th(n))}:ds(e)?th(e):wt(e)&&!Ke(e)&&!w_(e)?String(e):e,th=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class s3{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Zn,!e&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zn;try{return Zn=this,e()}finally{Zn=n}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function r3(){return Zn}let Ot;const nh=new WeakSet;class L_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nh.has(this)&&(nh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||N_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fm(this),U_(this);const e=Ot,n=Bi;Ot=this,Bi=!0;try{return this.fn()}finally{O_(this),Ot=e,Bi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pd(e);this.deps=this.depsTail=void 0,fm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tf(this)&&this.run()}get dirty(){return tf(this)}}let F_=0,Ha,za;function N_(t,e=!1){if(t.flags|=8,e){t.next=za,za=t;return}t.next=Ha,Ha=t}function Rd(){F_++}function Cd(){if(--F_>0)return;if(za){let e=za;for(za=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ha;){let e=Ha;for(Ha=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function U_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function O_(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Pd(i),o3(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function tf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(B_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function B_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qa)||(t.globalVersion=Qa,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!tf(t))))return;t.flags|=2;const e=t.dep,n=Ot,i=Bi;Ot=t,Bi=!0;try{U_(t);const s=t.fn(t._value);(e.version===0||ss(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ot=n,Bi=i,O_(t),t.flags&=-3}}function Pd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Pd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function o3(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Bi=!0;const k_=[];function Bs(){k_.push(Bi),Bi=!1}function ks(){const t=k_.pop();Bi=t===void 0?!0:t}function fm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ot;Ot=void 0;try{e()}finally{Ot=n}}}let Qa=0;class a3{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Id{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ot||!Bi||Ot===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ot)n=this.activeLink=new a3(Ot,this),Ot.deps?(n.prevDep=Ot.depsTail,Ot.depsTail.nextDep=n,Ot.depsTail=n):Ot.deps=Ot.depsTail=n,G_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ot.depsTail,n.nextDep=void 0,Ot.depsTail.nextDep=n,Ot.depsTail=n,Ot.deps===n&&(Ot.deps=i)}return n}trigger(e){this.version++,Qa++,this.notify(e)}notify(e){Rd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cd()}}}function G_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)G_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const nf=new WeakMap,Hr=Symbol(""),sf=Symbol(""),el=Symbol("");function Ln(t,e,n){if(Bi&&Ot){let i=nf.get(t);i||nf.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Id),s.map=i,s.key=n),s.track()}}function Is(t,e,n,i,s,r){const o=nf.get(t);if(!o){Qa++;return}const a=l=>{l&&l.trigger()};if(Rd(),e==="clear")o.forEach(a);else{const l=Ke(t),c=l&&Ad(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===el||!ds(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(el)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Hr)),Uo(t)&&a(o.get(sf)));break;case"delete":l||(a(o.get(Hr)),Uo(t)&&a(o.get(sf)));break;case"set":Uo(t)&&a(o.get(Hr));break}}Cd()}function co(t){const e=Et(t);return e===t?e:(Ln(e,"iterate",el),Ai(t)?e:e.map(Gi))}function pu(t){return Ln(t=Et(t),"iterate",el),t}function ts(t,e){return Gs(t)?zo(zr(t)?Gi(e):e):Gi(e)}const l3={__proto__:null,[Symbol.iterator](){return ih(this,Symbol.iterator,t=>ts(this,t))},concat(...t){return co(this).concat(...t.map(e=>Ke(e)?co(e):e))},entries(){return ih(this,"entries",t=>(t[1]=ts(this,t[1]),t))},every(t,e){return Ms(this,"every",t,e,void 0,arguments)},filter(t,e){return Ms(this,"filter",t,e,n=>n.map(i=>ts(this,i)),arguments)},find(t,e){return Ms(this,"find",t,e,n=>ts(this,n),arguments)},findIndex(t,e){return Ms(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ms(this,"findLast",t,e,n=>ts(this,n),arguments)},findLastIndex(t,e){return Ms(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ms(this,"forEach",t,e,void 0,arguments)},includes(...t){return sh(this,"includes",t)},indexOf(...t){return sh(this,"indexOf",t)},join(t){return co(this).join(t)},lastIndexOf(...t){return sh(this,"lastIndexOf",t)},map(t,e){return Ms(this,"map",t,e,void 0,arguments)},pop(){return ya(this,"pop")},push(...t){return ya(this,"push",t)},reduce(t,...e){return dm(this,"reduce",t,e)},reduceRight(t,...e){return dm(this,"reduceRight",t,e)},shift(){return ya(this,"shift")},some(t,e){return Ms(this,"some",t,e,void 0,arguments)},splice(...t){return ya(this,"splice",t)},toReversed(){return co(this).toReversed()},toSorted(t){return co(this).toSorted(t)},toSpliced(...t){return co(this).toSpliced(...t)},unshift(...t){return ya(this,"unshift",t)},values(){return ih(this,"values",t=>ts(this,t))}};function ih(t,e,n){const i=pu(t),s=i[e]();return i!==t&&!Ai(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const c3=Array.prototype;function Ms(t,e,n,i,s,r){const o=pu(t),a=o!==t&&!Ai(t),l=o[e];if(l!==c3[e]){const h=l.apply(t,r);return a?Gi(h):h}let c=n;o!==t&&(a?c=function(h,f){return n.call(this,ts(t,h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function dm(t,e,n,i){const s=pu(t),r=s!==t&&!Ai(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=ts(t,c)),n.call(this,c,ts(t,u),h,t)}):n.length>3&&(o=function(c,u,h){return n.call(this,c,u,h,t)}));const l=s[e](o,...i);return a?ts(t,l):l}function sh(t,e,n){const i=Et(t);Ln(i,"iterate",el);const s=i[e](...n);return(s===-1||s===!1)&&Fd(n[0])?(n[0]=Et(n[0]),i[e](...n)):s}function ya(t,e,n=[]){Bs(),Rd();const i=Et(t)[e].apply(t,n);return Cd(),ks(),i}const u3=Td("__proto__,__v_isRef,__isVue"),H_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds));function h3(t){ds(t)||(t=String(t));const e=Et(this);return Ln(e,"has",t),e.hasOwnProperty(t)}class z_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?S3:j_:r?X_:W_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ke(e);if(!s){let l;if(o&&(l=l3[n]))return l;if(n==="hasOwnProperty")return h3}const a=Reflect.get(e,n,Nn(e)?e:i);if((ds(n)?H_.has(n):u3(n))||(s||Ln(e,"get",n),r))return a;if(Nn(a)){const l=o&&Ad(n)?a:a.value;return s&&wt(l)?of(l):l}return wt(a)?s?of(a):tl(a):a}}class V_ extends z_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ke(e)&&Ad(n);if(!this._isShallow){const c=Gs(r);if(!Ai(i)&&!Gs(i)&&(r=Et(r),i=Et(i)),!o&&Nn(r)&&!Nn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:Tt(e,n),l=Reflect.set(e,n,i,Nn(e)?e:s);return e===Et(s)&&(a?ss(i,r)&&Is(e,"set",n,i):Is(e,"add",n,i)),l}deleteProperty(e,n){const i=Tt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Is(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ds(n)||!H_.has(n))&&Ln(e,"has",n),i}ownKeys(e){return Ln(e,"iterate",Ke(e)?"length":Hr),Reflect.ownKeys(e)}}class f3 extends z_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const d3=new V_,p3=new f3,m3=new V_(!0);const rf=t=>t,Fl=t=>Reflect.getPrototypeOf(t);function g3(t,e,n){return function(...i){const s=this.__v_raw,r=Et(s),o=Uo(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?rf:e?zo:Gi;return!e&&Ln(r,"iterate",l?sf:Hr),gn(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Nl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _3(t,e){const n={get(s){const r=this.__v_raw,o=Et(r),a=Et(s);t||(ss(s,a)&&Ln(o,"get",s),Ln(o,"get",a));const{has:l}=Fl(o),c=e?rf:t?zo:Gi;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Ln(Et(s),"iterate",Hr),s.size},has(s){const r=this.__v_raw,o=Et(r),a=Et(s);return t||(ss(s,a)&&Ln(o,"has",s),Ln(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Et(a),c=e?rf:t?zo:Gi;return!t&&Ln(l,"iterate",Hr),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return gn(n,t?{add:Nl("add"),set:Nl("set"),delete:Nl("delete"),clear:Nl("clear")}:{add(s){const r=Et(this),o=Fl(r),a=Et(s),l=!e&&!Ai(s)&&!Gs(s)?a:s;return o.has.call(r,l)||ss(s,l)&&o.has.call(r,s)||ss(a,l)&&o.has.call(r,a)||(r.add(l),Is(r,"add",l,l)),this},set(s,r){!e&&!Ai(r)&&!Gs(r)&&(r=Et(r));const o=Et(this),{has:a,get:l}=Fl(o);let c=a.call(o,s);c||(s=Et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ss(r,u)&&Is(o,"set",s,r):Is(o,"add",s,r),this},delete(s){const r=Et(this),{has:o,get:a}=Fl(r);let l=o.call(r,s);l||(s=Et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Is(r,"delete",s,void 0),c},clear(){const s=Et(this),r=s.size!==0,o=s.clear();return r&&Is(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=g3(s,t,e)}),n}function Dd(t,e){const n=_3(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Tt(n,s)&&s in i?n:i,s,r)}const v3={get:Dd(!1,!1)},x3={get:Dd(!1,!0)},y3={get:Dd(!0,!1)};const W_=new WeakMap,X_=new WeakMap,j_=new WeakMap,S3=new WeakMap;function M3(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E3(t){return t.__v_skip||!Object.isExtensible(t)?0:M3(j2(t))}function tl(t){return Gs(t)?t:Ld(t,!1,d3,v3,W_)}function b3(t){return Ld(t,!1,m3,x3,X_)}function of(t){return Ld(t,!0,p3,y3,j_)}function Ld(t,e,n,i,s){if(!wt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=E3(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function zr(t){return Gs(t)?zr(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function Ai(t){return!!(t&&t.__v_isShallow)}function Fd(t){return t?!!t.__v_raw:!1}function Et(t){const e=t&&t.__v_raw;return e?Et(e):t}function T3(t){return!Tt(t,"__v_skip")&&Object.isExtensible(t)&&R_(t,"__v_skip",!0),t}const Gi=t=>wt(t)?tl(t):t,zo=t=>wt(t)?of(t):t;function Nn(t){return t?t.__v_isRef===!0:!1}function pt(t){return w3(t,!1)}function w3(t,e){return Nn(t)?t:new A3(t,e)}class A3{constructor(e,n){this.dep=new Id,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Et(e),this._value=n?e:Gi(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Ai(e)||Gs(e);e=i?e:Et(e),ss(e,n)&&(this._rawValue=e,this._value=i?e:Gi(e),this.dep.trigger())}}function af(t){return Nn(t)?t.value:t}const R3={get:(t,e,n)=>e==="__v_raw"?t:af(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Nn(s)&&!Nn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function q_(t){return zr(t)?t:new Proxy(t,R3)}class C3{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Id(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return N_(this,!0),!0}get value(){const e=this.dep.track();return B_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function P3(t,e,n=!1){let i,s;return rt(t)?i=t:(i=t.get,s=t.set),new C3(i,s,n)}const Ul={},Fc=new WeakMap;let Dr;function I3(t,e=!1,n=Dr){if(n){let i=Fc.get(n);i||Fc.set(n,i=[]),i.push(t)}}function D3(t,e,n=Ft){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:Ai(x)||s===!1||s===0?Ds(x,1):Ds(x);let u,h,f,d,g=!1,_=!1;if(Nn(t)?(h=()=>t.value,g=Ai(t)):zr(t)?(h=()=>c(t),g=!0):Ke(t)?(_=!0,g=t.some(x=>zr(x)||Ai(x)),h=()=>t.map(x=>{if(Nn(x))return x.value;if(zr(x))return c(x);if(rt(x))return l?l(x,2):x()})):rt(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){Bs();try{f()}finally{ks()}}const x=Dr;Dr=u;try{return l?l(t,3,[d]):t(d)}finally{Dr=x}}:h=ls,e&&s){const x=h,P=s===!0?1/0:s;h=()=>Ds(x(),P)}const m=r3(),p=()=>{u.stop(),m&&m.active&&wd(m.effects,u)};if(r&&e){const x=e;e=(...P)=>{x(...P),p()}}let y=_?new Array(t.length).fill(Ul):Ul;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(s||g||(_?P.some((T,F)=>ss(T,y[F])):ss(P,y))){f&&f();const T=Dr;Dr=u;try{const F=[P,y===Ul?void 0:_&&y[0]===Ul?[]:y,d];y=P,l?l(e,3,F):e(...F)}finally{Dr=T}}}else u.run()};return a&&a(M),u=new L_(h),u.scheduler=o?()=>o(M,!1):M,d=x=>I3(x,!1,u),f=u.onStop=()=>{const x=Fc.get(u);if(x){if(l)l(x,4);else for(const P of x)P();Fc.delete(u)}},e?i?M(!0):y=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ds(t,e=1/0,n){if(e<=0||!wt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Nn(t))Ds(t.value,e,n);else if(Ke(t))for(let i=0;i<t.length;i++)Ds(t[i],e,n);else if(hu(t)||Uo(t))t.forEach(i=>{Ds(i,e,n)});else if(w_(t)){for(const i in t)Ds(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ds(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xl(t,e,n,i){try{return i?t(...i):t()}catch(s){mu(s,e,n)}}function Hi(t,e,n,i){if(rt(t)){const s=xl(t,e,n,i);return s&&b_(s)&&s.catch(r=>{mu(r,e,n)}),s}if(Ke(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Hi(t[r],e,n,i));return s}}function mu(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){Bs(),xl(r,null,10,[t,l,c]),ks();return}}L3(t,n,s,i,o)}function L3(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const zn=[];let Ji=-1;const Oo=[];let or=null,Do=0;const $_=Promise.resolve();let Nc=null;function F3(t){const e=Nc||$_;return t?e.then(this?t.bind(this):t):e}function N3(t){let e=Ji+1,n=zn.length;for(;e<n;){const i=e+n>>>1,s=zn[i],r=nl(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Nd(t){if(!(t.flags&1)){const e=nl(t),n=zn[zn.length-1];!n||!(t.flags&2)&&e>=nl(n)?zn.push(t):zn.splice(N3(e),0,t),t.flags|=1,Y_()}}function Y_(){Nc||(Nc=$_.then(Z_))}function U3(t){Ke(t)?Oo.push(...t):or&&t.id===-1?or.splice(Do+1,0,t):t.flags&1||(Oo.push(t),t.flags|=1),Y_()}function pm(t,e,n=Ji+1){for(;n<zn.length;n++){const i=zn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;zn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function K_(t){if(Oo.length){const e=[...new Set(Oo)].sort((n,i)=>nl(n)-nl(i));if(Oo.length=0,or){or.push(...e);return}for(or=e,Do=0;Do<or.length;Do++){const n=or[Do];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}or=null,Do=0}}const nl=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Z_(t){try{for(Ji=0;Ji<zn.length;Ji++){const e=zn[Ji];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ji<zn.length;Ji++){const e=zn[Ji];e&&(e.flags&=-2)}Ji=-1,zn.length=0,K_(),Nc=null,(zn.length||Oo.length)&&Z_()}}let Ti=null,J_=null;function Uc(t){const e=Ti;return Ti=t,J_=t&&t.type.__scopeId||null,e}function lf(t,e=Ti,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&kc(-1);const r=Uc(e);let o;try{o=t(...s)}finally{Uc(r),i._d&&kc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ol(t,e){if(Ti===null)return t;const n=yu(Ti),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ft]=e[s];r&&(rt(r)&&(r={mounted:r,updated:r}),r.deep&&Ds(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Mr(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Bs(),Hi(l,n,8,[t.el,a,t,e]),ks())}}function O3(t,e){if(Wn){let n=Wn.provides;const i=Wn.parent&&Wn.parent.provides;i===n&&(n=Wn.provides=Object.create(i)),n[t]=e}}function Mc(t,e,n=!1){const i=P1();if(i||Bo){let s=Bo?Bo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&rt(e)?e.call(i&&i.proxy):e}}const B3=Symbol.for("v-scx"),k3=()=>Mc(B3);function Va(t,e,n){return Q_(t,e,n)}function Q_(t,e,n=Ft){const{immediate:i,deep:s,flush:r,once:o}=n,a=gn({},n),l=e&&i||!e&&r!=="post";let c;if(rl){if(r==="sync"){const d=k3();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ls,d.resume=ls,d.pause=ls,d}}const u=Wn;a.call=(d,g,_)=>Hi(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{Kn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Nd(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=D3(t,e,a);return rl&&(c?c.push(f):l&&f()),f}function G3(t,e,n){const i=this.proxy,s=sn(t)?t.includes(".")?e1(i,t):()=>i[t]:t.bind(i,i);let r;rt(e)?r=e:(r=e.handler,n=e);const o=yl(this),a=Q_(s,r.bind(i),n);return o(),a}function e1(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const H3=Symbol("_vte"),t1=t=>t.__isTeleport,Qi=Symbol("_leaveCb"),Sa=Symbol("_enterCb");function z3(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return to(()=>{t.isMounted=!0}),c1(()=>{t.isUnmounting=!0}),t}const vi=[Function,Array],n1={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vi,onEnter:vi,onAfterEnter:vi,onEnterCancelled:vi,onBeforeLeave:vi,onLeave:vi,onAfterLeave:vi,onLeaveCancelled:vi,onBeforeAppear:vi,onAppear:vi,onAfterAppear:vi,onAppearCancelled:vi},i1=t=>{const e=t.subTree;return e.component?i1(e.component):e},V3={name:"BaseTransition",props:n1,setup(t,{slots:e}){const n=P1(),i=z3();return()=>{const s=e.default&&o1(e.default(),!0);if(!s||!s.length)return;const r=s1(s),o=Et(t),{mode:a}=o;if(i.isLeaving)return rh(r);const l=mm(r);if(!l)return rh(r);let c=cf(l,o,i,n,h=>c=h);l.type!==Vn&&il(l,c);let u=n.subTree&&mm(n.subTree);if(u&&u.type!==Vn&&!Fr(u,l)&&i1(n).type!==Vn){let h=cf(u,o,i,n);if(il(u,h),a==="out-in"&&l.type!==Vn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},rh(r);a==="in-out"&&l.type!==Vn?h.delayLeave=(f,d,g)=>{const _=r1(i,u);_[String(u.key)]=u,f[Qi]=()=>{d(),f[Qi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function s1(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Vn){e=n;break}}return e}const W3=V3;function r1(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function cf(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:M}=e,x=String(t.key),P=r1(n,t),T=(A,I)=>{A&&Hi(A,i,9,I)},F=(A,I)=>{const w=I[1];T(A,I),Ke(A)?A.every(L=>L.length<=1)&&w():A.length<=1&&w()},S={mode:o,persisted:a,beforeEnter(A){let I=l;if(!n.isMounted)if(r)I=m||l;else return;A[Qi]&&A[Qi](!0);const w=P[x];w&&Fr(t,w)&&w.el[Qi]&&w.el[Qi](),T(I,[A])},enter(A){if(P[x]===t)return;let I=c,w=u,L=h;if(!n.isMounted)if(r)I=p||c,w=y||u,L=M||h;else return;let V=!1;A[Sa]=O=>{V||(V=!0,O?T(L,[A]):T(w,[A]),S.delayedLeave&&S.delayedLeave(),A[Sa]=void 0)};const $=A[Sa].bind(null,!1);I?F(I,[A,$]):$()},leave(A,I){const w=String(t.key);if(A[Sa]&&A[Sa](!0),n.isUnmounting)return I();T(f,[A]);let L=!1;A[Qi]=$=>{L||(L=!0,I(),$?T(_,[A]):T(g,[A]),A[Qi]=void 0,P[w]===t&&delete P[w])};const V=A[Qi].bind(null,!1);P[w]=t,d?F(d,[A,V]):V()},clone(A){const I=cf(A,e,n,i,s);return s&&s(I),I}};return S}function rh(t){if(gu(t))return t=dr(t),t.children=null,t}function mm(t){if(!gu(t))return t1(t.type)&&t.children?s1(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&rt(n.default))return n.default()}}function il(t,e){t.shapeFlag&6&&t.component?(t.transition=e,il(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function o1(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===qt?(o.patchFlag&128&&s++,i=i.concat(o1(o.children,e,a))):(e||o.type!==Vn)&&i.push(a!=null?dr(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function eo(t,e){return rt(t)?gn({name:t.name},e,{setup:t}):t}function a1(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gm(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Oc=new WeakMap;function Wa(t,e,n,i,s=!1){if(Ke(t)){t.forEach((_,m)=>Wa(_,e&&(Ke(e)?e[m]:e),n,i,s));return}if(Xa(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wa(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?yu(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ft?a.refs={}:a.refs,h=a.setupState,f=Et(h),d=h===Ft?E_:_=>gm(u,_)?!1:Tt(f,_),g=(_,m)=>!(m&&gm(u,m));if(c!=null&&c!==l){if(_m(e),sn(c))u[c]=null,d(c)&&(h[c]=null);else if(Nn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(rt(l))xl(l,a,12,[o,u]);else{const _=sn(l),m=Nn(l);if(_||m){const p=()=>{if(t.f){const y=_?d(l)?h[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)Ke(y)&&wd(y,r);else if(Ke(y))y.includes(r)||y.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const M=[r];g(l,t.k)&&(l.value=M),t.k&&(u[t.k]=M)}}else _?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const y=()=>{p(),Oc.delete(t)};y.id=-1,Oc.set(t,y),Kn(y,n)}else _m(t),p()}}}function _m(t){const e=Oc.get(t);e&&(e.flags|=8,Oc.delete(t))}du().requestIdleCallback;du().cancelIdleCallback;const Xa=t=>!!t.type.__asyncLoader,gu=t=>t.type.__isKeepAlive;function X3(t,e){l1(t,"a",e)}function j3(t,e){l1(t,"da",e)}function l1(t,e,n=Wn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_u(e,i,n),n){let s=n.parent;for(;s&&s.parent;)gu(s.parent.vnode)&&q3(i,e,n,s),s=s.parent}}function q3(t,e,n,i){const s=_u(e,t,i,!0);xr(()=>{wd(i[e],s)},n)}function _u(t,e,n=Wn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Bs();const a=yl(n),l=Hi(e,n,t,o);return a(),ks(),l});return i?s.unshift(r):s.push(r),r}}const qs=t=>(e,n=Wn)=>{(!rl||t==="sp")&&_u(t,(...i)=>e(...i),n)},$3=qs("bm"),to=qs("m"),Y3=qs("bu"),K3=qs("u"),c1=qs("bum"),xr=qs("um"),Z3=qs("sp"),J3=qs("rtg"),Q3=qs("rtc");function ey(t,e=Wn){_u("ec",t,e)}const ty=Symbol.for("v-ndc");function cs(t,e,n,i){let s;const r=n,o=Ke(t);if(o||sn(t)){const a=o&&zr(t);let l=!1,c=!1;a&&(l=!Ai(t),c=Gs(t),t=pu(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?c?zo(Gi(t[u])):Gi(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(wt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const uf=t=>t?I1(t)?yu(t):uf(t.parent):null,ja=gn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uf(t.parent),$root:t=>uf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>h1(t),$forceUpdate:t=>t.f||(t.f=()=>{Nd(t.update)}),$nextTick:t=>t.n||(t.n=F3.bind(t.proxy)),$watch:t=>G3.bind(t)}),oh=(t,e)=>t!==Ft&&!t.__isScriptSetup&&Tt(t,e),ny={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(oh(i,e))return o[e]=1,i[e];if(s!==Ft&&Tt(s,e))return o[e]=2,s[e];if(Tt(r,e))return o[e]=3,r[e];if(n!==Ft&&Tt(n,e))return o[e]=4,n[e];hf&&(o[e]=0)}}const c=ja[e];let u,h;if(c)return e==="$attrs"&&Ln(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Ft&&Tt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Tt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return oh(s,e)?(s[e]=n,!0):i!==Ft&&Tt(i,e)?(i[e]=n,!0):Tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Ft&&a[0]!=="$"&&Tt(t,a)||oh(e,a)||Tt(r,a)||Tt(i,a)||Tt(ja,a)||Tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vm(t){return Ke(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hf=!0;function iy(t){const e=h1(t),n=t.proxy,i=t.ctx;hf=!1,e.beforeCreate&&xm(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:M,unmounted:x,render:P,renderTracked:T,renderTriggered:F,errorCaptured:S,serverPrefetch:A,expose:I,inheritAttrs:w,components:L,directives:V,filters:$}=e;if(c&&sy(c,i,null),o)for(const k in o){const Q=o[k];rt(Q)&&(i[k]=Q.bind(n))}if(s){const k=s.call(n,n);wt(k)&&(t.data=tl(k))}if(hf=!0,r)for(const k in r){const Q=r[k],ee=rt(Q)?Q.bind(n,n):rt(Q.get)?Q.get.bind(n,n):ls,ce=!rt(Q)&&rt(Q.set)?Q.set.bind(n):ls,pe=Li({get:ee,set:ce});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Te=>pe.value=Te})}if(a)for(const k in a)u1(a[k],i,n,k);if(l){const k=rt(l)?l.call(n):l;Reflect.ownKeys(k).forEach(Q=>{O3(Q,k[Q])})}u&&xm(u,t,"c");function z(k,Q){Ke(Q)?Q.forEach(ee=>k(ee.bind(n))):Q&&k(Q.bind(n))}if(z($3,h),z(to,f),z(Y3,d),z(K3,g),z(X3,_),z(j3,m),z(ey,S),z(Q3,T),z(J3,F),z(c1,y),z(xr,x),z(Z3,A),Ke(I))if(I.length){const k=t.exposed||(t.exposed={});I.forEach(Q=>{Object.defineProperty(k,Q,{get:()=>n[Q],set:ee=>n[Q]=ee,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===ls&&(t.render=P),w!=null&&(t.inheritAttrs=w),L&&(t.components=L),V&&(t.directives=V),A&&a1(t)}function sy(t,e,n=ls){Ke(t)&&(t=ff(t));for(const i in t){const s=t[i];let r;wt(s)?"default"in s?r=Mc(s.from||i,s.default,!0):r=Mc(s.from||i):r=Mc(s),Nn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function xm(t,e,n){Hi(Ke(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function u1(t,e,n,i){let s=i.includes(".")?e1(n,i):()=>n[i];if(sn(t)){const r=e[t];rt(r)&&Va(s,r)}else if(rt(t))Va(s,t.bind(n));else if(wt(t))if(Ke(t))t.forEach(r=>u1(r,e,n,i));else{const r=rt(t.handler)?t.handler.bind(n):e[t.handler];rt(r)&&Va(s,r,t)}}function h1(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Bc(l,c,o,!0)),Bc(l,e,o)),wt(e)&&r.set(e,l),l}function Bc(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Bc(t,r,n,!0),s&&s.forEach(o=>Bc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=ry[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ry={data:ym,props:Sm,emits:Sm,methods:Fa,computed:Fa,beforeCreate:kn,created:kn,beforeMount:kn,mounted:kn,beforeUpdate:kn,updated:kn,beforeDestroy:kn,beforeUnmount:kn,destroyed:kn,unmounted:kn,activated:kn,deactivated:kn,errorCaptured:kn,serverPrefetch:kn,components:Fa,directives:Fa,watch:ay,provide:ym,inject:oy};function ym(t,e){return e?t?function(){return gn(rt(t)?t.call(this,this):t,rt(e)?e.call(this,this):e)}:e:t}function oy(t,e){return Fa(ff(t),ff(e))}function ff(t){if(Ke(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kn(t,e){return t?[...new Set([].concat(t,e))]:e}function Fa(t,e){return t?gn(Object.create(null),t,e):e}function Sm(t,e){return t?Ke(t)&&Ke(e)?[...new Set([...t,...e])]:gn(Object.create(null),vm(t),vm(e??{})):e}function ay(t,e){if(!t)return e;if(!e)return t;const n=gn(Object.create(null),t);for(const i in e)n[i]=kn(t[i],e[i]);return n}function f1(){return{app:null,config:{isNativeTag:E_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ly=0;function cy(t,e){return function(i,s=null){rt(i)||(i=gn({},i)),s!=null&&!wt(s)&&(s=null);const r=f1(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ly++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Hy,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&rt(u.install)?(o.add(u),u.install(c,...h)):rt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||hn(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,u,f),l=!0,c._container=u,u.__vue_app__=c,yu(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Bo;Bo=c;try{return u()}finally{Bo=h}}};return c}}let Bo=null;const uy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Oi(e)}Modifiers`]||t[`${vr(e)}Modifiers`];function hy(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ft;let s=n;const r=e.startsWith("update:"),o=r&&uy(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>sn(u)?u.trim():u)),o.number&&(s=n.map(Y2)));let a,l=i[a=eh(e)]||i[a=eh(Oi(e))];!l&&r&&(l=i[a=eh(vr(e))]),l&&Hi(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hi(c,t,6,s)}}const fy=new WeakMap;function d1(t,e,n=!1){const i=n?fy:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!rt(t)){const l=c=>{const u=d1(c,e,!0);u&&(a=!0,gn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(wt(t)&&i.set(t,null),null):(Ke(r)?r.forEach(l=>o[l]=null):gn(o,r),wt(t)&&i.set(t,o),o)}function vu(t,e){return!t||!cu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Tt(t,e[0].toLowerCase()+e.slice(1))||Tt(t,vr(e))||Tt(t,e))}function Mm(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=t,m=Uc(t);let p,y;try{if(n.shapeFlag&4){const x=s||i,P=x;p=ns(c.call(P,x,u,h,d,f,g)),y=a}else{const x=e;p=ns(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),y=e.props?a:dy(a)}}catch(x){qa.length=0,mu(x,t,1),p=hn(Vn)}let M=p;if(y&&_!==!1){const x=Object.keys(y),{shapeFlag:P}=M;x.length&&P&7&&(r&&x.some(uu)&&(y=py(y,r)),M=dr(M,y,!1,!0))}return n.dirs&&(M=dr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&il(M,n.transition),p=M,Uc(m),p}const dy=t=>{let e;for(const n in t)(n==="class"||n==="style"||cu(n))&&((e||(e={}))[n]=t[n]);return e},py=(t,e)=>{const n={};for(const i in t)(!uu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function my(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Em(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(p1(o,i,f)&&!vu(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Em(i,o,c):!0:!!o;return!1}function Em(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(p1(e,t,r)&&!vu(n,r))return!0}return!1}function p1(t,e,n){const i=t[n],s=e[n];return n==="style"&&wt(i)&&wt(s)?!vl(i,s):i!==s}function gy({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const m1={},g1=()=>Object.create(m1),_1=t=>Object.getPrototypeOf(t)===m1;function _y(t,e,n,i=!1){const s={},r=g1();t.propsDefaults=Object.create(null),v1(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:b3(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function vy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Et(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(vu(t.emitsOptions,f))continue;const d=e[f];if(l)if(Tt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Oi(f);s[g]=df(l,a,g,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{v1(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Tt(e,h)&&((u=vr(h))===h||!Tt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=df(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Tt(e,h))&&(delete r[h],c=!0)}c&&Is(t.attrs,"set","")}function v1(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ga(l))continue;const c=e[l];let u;s&&Tt(s,u=Oi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:vu(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Et(n),c=a||Ft;for(let u=0;u<r.length;u++){const h=r[u];n[h]=df(s,l,h,c[h],t,!Tt(c,h))}}return o}function df(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=yl(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vr(n))&&(i=!0))}return i}const xy=new WeakMap;function x1(t,e,n=!1){const i=n?xy:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!rt(t)){const u=h=>{l=!0;const[f,d]=x1(h,e,!0);gn(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return wt(t)&&i.set(t,No),No;if(Ke(r))for(let u=0;u<r.length;u++){const h=Oi(r[u]);bm(h)&&(o[h]=Ft)}else if(r)for(const u in r){const h=Oi(u);if(bm(h)){const f=r[u],d=o[h]=Ke(f)||rt(f)?{type:f}:gn({},f),g=d.type;let _=!1,m=!0;if(Ke(g))for(let p=0;p<g.length;++p){const y=g[p],M=rt(y)&&y.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=rt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||Tt(d,"default"))&&a.push(h)}}const c=[o,a];return wt(t)&&i.set(t,c),c}function bm(t){return t[0]!=="$"&&!Ga(t)}const Ud=t=>t==="_"||t==="_ctx"||t==="$stable",Od=t=>Ke(t)?t.map(ns):[ns(t)],yy=(t,e,n)=>{if(e._n)return e;const i=lf((...s)=>Od(e(...s)),n);return i._c=!1,i},y1=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ud(s))continue;const r=t[s];if(rt(r))e[s]=yy(s,r,i);else if(r!=null){const o=Od(r);e[s]=()=>o}}},S1=(t,e)=>{const n=Od(e);t.slots.default=()=>n},M1=(t,e,n)=>{for(const i in e)(n||!Ud(i))&&(t[i]=e[i])},Sy=(t,e,n)=>{const i=t.slots=g1();if(t.vnode.shapeFlag&32){const s=e._;s?(M1(i,e,n),n&&R_(i,"_",s,!0)):y1(e,i)}else e&&S1(t,e)},My=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ft;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:M1(s,e,n):(r=!e.$stable,y1(e,s)),o=e}else e&&(S1(t,e),o={default:1});if(r)for(const a in s)!Ud(a)&&o[a]==null&&delete s[a]},Kn=Ay;function Ey(t){return by(t)}function by(t,e){const n=du();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ls,insertStaticContent:g}=t,_=(D,N,X,ne=null,Y=null,re=null,he=void 0,ge=null,R=!!N.dynamicChildren)=>{if(D===N)return;D&&!Fr(D,N)&&(ne=we(D),Te(D,Y,re,!0),D=null),N.patchFlag===-2&&(R=!1,N.dynamicChildren=null);const{type:oe,ref:xe,shapeFlag:fe}=N;switch(oe){case xu:m(D,N,X,ne);break;case Vn:p(D,N,X,ne);break;case Ec:D==null&&y(N,X,ne,he);break;case qt:L(D,N,X,ne,Y,re,he,ge,R);break;default:fe&1?P(D,N,X,ne,Y,re,he,ge,R):fe&6?V(D,N,X,ne,Y,re,he,ge,R):(fe&64||fe&128)&&oe.process(D,N,X,ne,Y,re,he,ge,R,qe)}xe!=null&&Y?Wa(xe,D&&D.ref,re,N||D,!N):xe==null&&D&&D.ref!=null&&Wa(D.ref,null,re,D,!0)},m=(D,N,X,ne)=>{if(D==null)i(N.el=a(N.children),X,ne);else{const Y=N.el=D.el;N.children!==D.children&&c(Y,N.children)}},p=(D,N,X,ne)=>{D==null?i(N.el=l(N.children||""),X,ne):N.el=D.el},y=(D,N,X,ne)=>{[D.el,D.anchor]=g(D.children,N,X,ne,D.el,D.anchor)},M=({el:D,anchor:N},X,ne)=>{let Y;for(;D&&D!==N;)Y=f(D),i(D,X,ne),D=Y;i(N,X,ne)},x=({el:D,anchor:N})=>{let X;for(;D&&D!==N;)X=f(D),s(D),D=X;s(N)},P=(D,N,X,ne,Y,re,he,ge,R)=>{if(N.type==="svg"?he="svg":N.type==="math"&&(he="mathml"),D==null)T(N,X,ne,Y,re,he,ge,R);else{const oe=D.el&&D.el._isVueCE?D.el:null;try{oe&&oe._beginPatch(),A(D,N,Y,re,he,ge,R)}finally{oe&&oe._endPatch()}}},T=(D,N,X,ne,Y,re,he,ge)=>{let R,oe;const{props:xe,shapeFlag:fe,transition:J,dirs:Ie}=D;if(R=D.el=o(D.type,re,xe&&xe.is,xe),fe&8?u(R,D.children):fe&16&&S(D.children,R,null,ne,Y,ah(D,re),he,ge),Ie&&Mr(D,null,ne,"created"),F(R,D,D.scopeId,he,ne),xe){for(const v in xe)v!=="value"&&!Ga(v)&&r(R,v,null,xe[v],re,ne);"value"in xe&&r(R,"value",null,xe.value,re),(oe=xe.onVnodeBeforeMount)&&qi(oe,ne,D)}Ie&&Mr(D,null,ne,"beforeMount");const b=Ty(Y,J);b&&J.beforeEnter(R),i(R,N,X),((oe=xe&&xe.onVnodeMounted)||b||Ie)&&Kn(()=>{try{oe&&qi(oe,ne,D),b&&J.enter(R),Ie&&Mr(D,null,ne,"mounted")}finally{}},Y)},F=(D,N,X,ne,Y)=>{if(X&&d(D,X),ne)for(let re=0;re<ne.length;re++)d(D,ne[re]);if(Y){let re=Y.subTree;if(N===re||w1(re.type)&&(re.ssContent===N||re.ssFallback===N)){const he=Y.vnode;F(D,he,he.scopeId,he.slotScopeIds,Y.parent)}}},S=(D,N,X,ne,Y,re,he,ge,R=0)=>{for(let oe=R;oe<D.length;oe++){const xe=D[oe]=ge?Ps(D[oe]):ns(D[oe]);_(null,xe,N,X,ne,Y,re,he,ge)}},A=(D,N,X,ne,Y,re,he)=>{const ge=N.el=D.el;let{patchFlag:R,dynamicChildren:oe,dirs:xe}=N;R|=D.patchFlag&16;const fe=D.props||Ft,J=N.props||Ft;let Ie;if(X&&Er(X,!1),(Ie=J.onVnodeBeforeUpdate)&&qi(Ie,X,N,D),xe&&Mr(N,D,X,"beforeUpdate"),X&&Er(X,!0),(fe.innerHTML&&J.innerHTML==null||fe.textContent&&J.textContent==null)&&u(ge,""),oe?I(D.dynamicChildren,oe,ge,X,ne,ah(N,Y),re):he||Q(D,N,ge,null,X,ne,ah(N,Y),re,!1),R>0){if(R&16)w(ge,fe,J,X,Y);else if(R&2&&fe.class!==J.class&&r(ge,"class",null,J.class,Y),R&4&&r(ge,"style",fe.style,J.style,Y),R&8){const b=N.dynamicProps;for(let v=0;v<b.length;v++){const B=b[v],K=fe[B],ae=J[B];(ae!==K||B==="value")&&r(ge,B,K,ae,Y,X)}}R&1&&D.children!==N.children&&u(ge,N.children)}else!he&&oe==null&&w(ge,fe,J,X,Y);((Ie=J.onVnodeUpdated)||xe)&&Kn(()=>{Ie&&qi(Ie,X,N,D),xe&&Mr(N,D,X,"updated")},ne)},I=(D,N,X,ne,Y,re,he)=>{for(let ge=0;ge<N.length;ge++){const R=D[ge],oe=N[ge],xe=R.el&&(R.type===qt||!Fr(R,oe)||R.shapeFlag&198)?h(R.el):X;_(R,oe,xe,null,ne,Y,re,he,!0)}},w=(D,N,X,ne,Y)=>{if(N!==X){if(N!==Ft)for(const re in N)!Ga(re)&&!(re in X)&&r(D,re,N[re],null,Y,ne);for(const re in X){if(Ga(re))continue;const he=X[re],ge=N[re];he!==ge&&re!=="value"&&r(D,re,ge,he,Y,ne)}"value"in X&&r(D,"value",N.value,X.value,Y)}},L=(D,N,X,ne,Y,re,he,ge,R)=>{const oe=N.el=D?D.el:a(""),xe=N.anchor=D?D.anchor:a("");let{patchFlag:fe,dynamicChildren:J,slotScopeIds:Ie}=N;Ie&&(ge=ge?ge.concat(Ie):Ie),D==null?(i(oe,X,ne),i(xe,X,ne),S(N.children||[],X,xe,Y,re,he,ge,R)):fe>0&&fe&64&&J&&D.dynamicChildren&&D.dynamicChildren.length===J.length?(I(D.dynamicChildren,J,X,Y,re,he,ge),(N.key!=null||Y&&N===Y.subTree)&&E1(D,N,!0)):Q(D,N,X,xe,Y,re,he,ge,R)},V=(D,N,X,ne,Y,re,he,ge,R)=>{N.slotScopeIds=ge,D==null?N.shapeFlag&512?Y.ctx.activate(N,X,ne,he,R):$(N,X,ne,Y,re,he,R):O(D,N,R)},$=(D,N,X,ne,Y,re,he)=>{const ge=D.component=Fy(D,ne,Y);if(gu(D)&&(ge.ctx.renderer=qe),Ny(ge,!1,he),ge.asyncDep){if(Y&&Y.registerDep(ge,z,he),!D.el){const R=ge.subTree=hn(Vn);p(null,R,N,X),D.placeholder=R.el}}else z(ge,D,N,X,Y,re,he)},O=(D,N,X)=>{const ne=N.component=D.component;if(my(D,N,X))if(ne.asyncDep&&!ne.asyncResolved){k(ne,N,X);return}else ne.next=N,ne.update();else N.el=D.el,ne.vnode=N},z=(D,N,X,ne,Y,re,he)=>{const ge=()=>{if(D.isMounted){let{next:fe,bu:J,u:Ie,parent:b,vnode:v}=D;{const me=b1(D);if(me){fe&&(fe.el=v.el,k(D,fe,he)),me.asyncDep.then(()=>{Kn(()=>{D.isUnmounted||oe()},Y)});return}}let B=fe,K;Er(D,!1),fe?(fe.el=v.el,k(D,fe,he)):fe=v,J&&Sc(J),(K=fe.props&&fe.props.onVnodeBeforeUpdate)&&qi(K,b,fe,v),Er(D,!0);const ae=Mm(D),de=D.subTree;D.subTree=ae,_(de,ae,h(de.el),we(de),D,Y,re),fe.el=ae.el,B===null&&gy(D,ae.el),Ie&&Kn(Ie,Y),(K=fe.props&&fe.props.onVnodeUpdated)&&Kn(()=>qi(K,b,fe,v),Y)}else{let fe;const{el:J,props:Ie}=N,{bm:b,m:v,parent:B,root:K,type:ae}=D,de=Xa(N);Er(D,!1),b&&Sc(b),!de&&(fe=Ie&&Ie.onVnodeBeforeMount)&&qi(fe,B,N),Er(D,!0);{K.ce&&K.ce._hasShadowRoot()&&K.ce._injectChildStyle(ae,D.parent?D.parent.type:void 0);const me=D.subTree=Mm(D);_(null,me,X,ne,D,Y,re),N.el=me.el}if(v&&Kn(v,Y),!de&&(fe=Ie&&Ie.onVnodeMounted)){const me=N;Kn(()=>qi(fe,B,me),Y)}(N.shapeFlag&256||B&&Xa(B.vnode)&&B.vnode.shapeFlag&256)&&D.a&&Kn(D.a,Y),D.isMounted=!0,N=X=ne=null}};D.scope.on();const R=D.effect=new L_(ge);D.scope.off();const oe=D.update=R.run.bind(R),xe=D.job=R.runIfDirty.bind(R);xe.i=D,xe.id=D.uid,R.scheduler=()=>Nd(xe),Er(D,!0),oe()},k=(D,N,X)=>{N.component=D;const ne=D.vnode.props;D.vnode=N,D.next=null,vy(D,N.props,ne,X),My(D,N.children,X),Bs(),pm(D),ks()},Q=(D,N,X,ne,Y,re,he,ge,R=!1)=>{const oe=D&&D.children,xe=D?D.shapeFlag:0,fe=N.children,{patchFlag:J,shapeFlag:Ie}=N;if(J>0){if(J&128){ce(oe,fe,X,ne,Y,re,he,ge,R);return}else if(J&256){ee(oe,fe,X,ne,Y,re,he,ge,R);return}}Ie&8?(xe&16&&se(oe,Y,re),fe!==oe&&u(X,fe)):xe&16?Ie&16?ce(oe,fe,X,ne,Y,re,he,ge,R):se(oe,Y,re,!0):(xe&8&&u(X,""),Ie&16&&S(fe,X,ne,Y,re,he,ge,R))},ee=(D,N,X,ne,Y,re,he,ge,R)=>{D=D||No,N=N||No;const oe=D.length,xe=N.length,fe=Math.min(oe,xe);let J;for(J=0;J<fe;J++){const Ie=N[J]=R?Ps(N[J]):ns(N[J]);_(D[J],Ie,X,null,Y,re,he,ge,R)}oe>xe?se(D,Y,re,!0,!1,fe):S(N,X,ne,Y,re,he,ge,R,fe)},ce=(D,N,X,ne,Y,re,he,ge,R)=>{let oe=0;const xe=N.length;let fe=D.length-1,J=xe-1;for(;oe<=fe&&oe<=J;){const Ie=D[oe],b=N[oe]=R?Ps(N[oe]):ns(N[oe]);if(Fr(Ie,b))_(Ie,b,X,null,Y,re,he,ge,R);else break;oe++}for(;oe<=fe&&oe<=J;){const Ie=D[fe],b=N[J]=R?Ps(N[J]):ns(N[J]);if(Fr(Ie,b))_(Ie,b,X,null,Y,re,he,ge,R);else break;fe--,J--}if(oe>fe){if(oe<=J){const Ie=J+1,b=Ie<xe?N[Ie].el:ne;for(;oe<=J;)_(null,N[oe]=R?Ps(N[oe]):ns(N[oe]),X,b,Y,re,he,ge,R),oe++}}else if(oe>J)for(;oe<=fe;)Te(D[oe],Y,re,!0),oe++;else{const Ie=oe,b=oe,v=new Map;for(oe=b;oe<=J;oe++){const ye=N[oe]=R?Ps(N[oe]):ns(N[oe]);ye.key!=null&&v.set(ye.key,oe)}let B,K=0;const ae=J-b+1;let de=!1,me=0;const Z=new Array(ae);for(oe=0;oe<ae;oe++)Z[oe]=0;for(oe=Ie;oe<=fe;oe++){const ye=D[oe];if(K>=ae){Te(ye,Y,re,!0);continue}let Ae;if(ye.key!=null)Ae=v.get(ye.key);else for(B=b;B<=J;B++)if(Z[B-b]===0&&Fr(ye,N[B])){Ae=B;break}Ae===void 0?Te(ye,Y,re,!0):(Z[Ae-b]=oe+1,Ae>=me?me=Ae:de=!0,_(ye,N[Ae],X,null,Y,re,he,ge,R),K++)}const le=de?wy(Z):No;for(B=le.length-1,oe=ae-1;oe>=0;oe--){const ye=b+oe,Ae=N[ye],Se=N[ye+1],ve=ye+1<xe?Se.el||T1(Se):ne;Z[oe]===0?_(null,Ae,X,ve,Y,re,he,ge,R):de&&(B<0||oe!==le[B]?pe(Ae,X,ve,2):B--)}}},pe=(D,N,X,ne,Y=null)=>{const{el:re,type:he,transition:ge,children:R,shapeFlag:oe}=D;if(oe&6){pe(D.component.subTree,N,X,ne);return}if(oe&128){D.suspense.move(N,X,ne);return}if(oe&64){he.move(D,N,X,qe);return}if(he===qt){i(re,N,X);for(let fe=0;fe<R.length;fe++)pe(R[fe],N,X,ne);i(D.anchor,N,X);return}if(he===Ec){M(D,N,X);return}if(ne!==2&&oe&1&&ge)if(ne===0)ge.beforeEnter(re),i(re,N,X),Kn(()=>ge.enter(re),Y);else{const{leave:fe,delayLeave:J,afterLeave:Ie}=ge,b=()=>{D.ctx.isUnmounted?s(re):i(re,N,X)},v=()=>{re._isLeaving&&re[Qi](!0),fe(re,()=>{b(),Ie&&Ie()})};J?J(re,b,v):v()}else i(re,N,X)},Te=(D,N,X,ne=!1,Y=!1)=>{const{type:re,props:he,ref:ge,children:R,dynamicChildren:oe,shapeFlag:xe,patchFlag:fe,dirs:J,cacheIndex:Ie,memo:b}=D;if(fe===-2&&(Y=!1),ge!=null&&(Bs(),Wa(ge,null,X,D,!0),ks()),Ie!=null&&(N.renderCache[Ie]=void 0),xe&256){N.ctx.deactivate(D);return}const v=xe&1&&J,B=!Xa(D);let K;if(B&&(K=he&&he.onVnodeBeforeUnmount)&&qi(K,N,D),xe&6)et(D.component,X,ne);else{if(xe&128){D.suspense.unmount(X,ne);return}v&&Mr(D,null,N,"beforeUnmount"),xe&64?D.type.remove(D,N,X,qe,ne):oe&&!oe.hasOnce&&(re!==qt||fe>0&&fe&64)?se(oe,N,X,!1,!0):(re===qt&&fe&384||!Y&&xe&16)&&se(R,N,X),ne&&Oe(D)}const ae=b!=null&&Ie==null;(B&&(K=he&&he.onVnodeUnmounted)||v||ae)&&Kn(()=>{K&&qi(K,N,D),v&&Mr(D,null,N,"unmounted"),ae&&(D.el=null)},X)},Oe=D=>{const{type:N,el:X,anchor:ne,transition:Y}=D;if(N===qt){ct(X,ne);return}if(N===Ec){x(D);return}const re=()=>{s(X),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(D.shapeFlag&1&&Y&&!Y.persisted){const{leave:he,delayLeave:ge}=Y,R=()=>he(X,re);ge?ge(D.el,re,R):R()}else re()},ct=(D,N)=>{let X;for(;D!==N;)X=f(D),s(D),D=X;s(N)},et=(D,N,X)=>{const{bum:ne,scope:Y,job:re,subTree:he,um:ge,m:R,a:oe}=D;Tm(R),Tm(oe),ne&&Sc(ne),Y.stop(),re&&(re.flags|=8,Te(he,D,N,X)),ge&&Kn(ge,N),Kn(()=>{D.isUnmounted=!0},N)},se=(D,N,X,ne=!1,Y=!1,re=0)=>{for(let he=re;he<D.length;he++)Te(D[he],N,X,ne,Y)},we=D=>{if(D.shapeFlag&6)return we(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const N=f(D.anchor||D.el),X=N&&N[H3];return X?f(X):N};let _e=!1;const je=(D,N,X)=>{let ne;D==null?N._vnode&&(Te(N._vnode,null,null,!0),ne=N._vnode.component):_(N._vnode||null,D,N,null,null,null,X),N._vnode=D,_e||(_e=!0,pm(ne),K_(),_e=!1)},qe={p:_,um:Te,m:pe,r:Oe,mt:$,mc:S,pc:Q,pbc:I,n:we,o:t};return{render:je,hydrate:void 0,createApp:cy(je)}}function ah({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ty(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function E1(t,e,n=!1){const i=t.children,s=e.children;if(Ke(i)&&Ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ps(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&E1(o,a)),a.type===xu&&(a.patchFlag===-1&&(a=s[r]=Ps(a)),a.el=o.el),a.type===Vn&&!a.el&&(a.el=o.el)}}function wy(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function b1(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:b1(e)}function Tm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function T1(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?T1(e.subTree):null}const w1=t=>t.__isSuspense;function Ay(t,e){e&&e.pendingBranch?Ke(t)?e.effects.push(...t):e.effects.push(t):U3(t)}const qt=Symbol.for("v-fgt"),xu=Symbol.for("v-txt"),Vn=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),qa=[];let ci=null;function Qe(t=!1){qa.push(ci=t?null:[])}function Ry(){qa.pop(),ci=qa[qa.length-1]||null}let sl=1;function kc(t,e=!1){sl+=t,t<0&&ci&&e&&(ci.hasOnce=!0)}function A1(t){return t.dynamicChildren=sl>0?ci||No:null,Ry(),sl>0&&ci&&ci.push(t),t}function tt(t,e,n,i,s,r){return A1(te(t,e,n,i,s,r,!0))}function Gc(t,e,n,i,s){return A1(hn(t,e,n,i,s,!0))}function Hc(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const R1=({key:t})=>t??null,bc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?sn(t)||Nn(t)||rt(t)?{i:Ti,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,i=0,s=null,r=t===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&R1(e),ref:e&&bc(e),scopeId:J_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ti};return a?(Bd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=sn(n)?8:16),sl>0&&!o&&ci&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ci.push(l),l}const hn=Cy;function Cy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ty)&&(t=Vn),Hc(t)){const a=dr(t,e,!0);return n&&Bd(a,n),sl>0&&!r&&ci&&(a.shapeFlag&6?ci[ci.indexOf(t)]=a:ci.push(a)),a.patchFlag=-2,a}if(ky(t)&&(t=t.__vccOpts),e){e=Py(e);let{class:a,style:l}=e;a&&!sn(a)&&(e.class=bn(a)),wt(l)&&(Fd(l)&&!Ke(l)&&(l=gn({},l)),e.style=En(l))}const o=sn(t)?1:w1(t)?128:t1(t)?64:wt(t)?4:rt(t)?2:0;return te(t,e,n,i,s,o,r,!0)}function Py(t){return t?Fd(t)||_1(t)?gn({},t):t:null}function dr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Iy(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&R1(c),ref:e&&e.ref?n&&r?Ke(r)?r.concat(bc(e)):[r,bc(e)]:bc(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dr(t.ssContent),ssFallback:t.ssFallback&&dr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&il(u,l.clone(u)),u}function Hn(t=" ",e=0){return hn(xu,null,t,e)}function C1(t,e){const n=hn(Ec,null,t);return n.staticCount=e,n}function an(t="",e=!1){return e?(Qe(),Gc(Vn,null,t)):hn(Vn,null,t)}function ns(t){return t==null||typeof t=="boolean"?hn(Vn):Ke(t)?hn(qt,null,t.slice()):Hc(t)?Ps(t):hn(xu,null,String(t))}function Ps(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dr(t)}function Bd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ke(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Bd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_1(e)?e._ctx=Ti:s===3&&Ti&&(Ti.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else rt(e)?(e={default:e,_ctx:Ti},n=32):(e=String(e),i&64?(n=16,e=[Hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=bn([e.class,i.class]));else if(s==="style")e.style=En([e.style,i.style]);else if(cu(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ke(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!uu(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function qi(t,e,n,i=null){Hi(t,e,7,[n,i])}const Dy=f1();let Ly=0;function Fy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Dy,r={uid:Ly++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new s3(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:x1(i,s),emitsOptions:d1(i,s),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=hy.bind(null,r),t.ce&&t.ce(r),r}let Wn=null;const P1=()=>Wn||Ti;let zc,pf;{const t=du(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};zc=e("__VUE_INSTANCE_SETTERS__",n=>Wn=n),pf=e("__VUE_SSR_SETTERS__",n=>rl=n)}const yl=t=>{const e=Wn;return zc(t),t.scope.on(),()=>{t.scope.off(),zc(e)}},wm=()=>{Wn&&Wn.scope.off(),zc(null)};function I1(t){return t.vnode.shapeFlag&4}let rl=!1;function Ny(t,e=!1,n=!1){e&&pf(e);const{props:i,children:s}=t.vnode,r=I1(t);_y(t,i,r,e),Sy(t,s,n||e);const o=r?Uy(t,e):void 0;return e&&pf(!1),o}function Uy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ny);const{setup:i}=n;if(i){Bs();const s=t.setupContext=i.length>1?By(t):null,r=yl(t),o=xl(i,t,0,[t.props,s]),a=b_(o);if(ks(),r(),(a||t.sp)&&!Xa(t)&&a1(t),a){if(o.then(wm,wm),e)return o.then(l=>{Am(t,l)}).catch(l=>{mu(l,t,0)});t.asyncDep=o}else Am(t,o)}else D1(t)}function Am(t,e,n){rt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:wt(e)&&(t.setupState=q_(e)),D1(t)}function D1(t,e,n){const i=t.type;t.render||(t.render=i.render||ls);{const s=yl(t);Bs();try{iy(t)}finally{ks(),s()}}}const Oy={get(t,e){return Ln(t,"get",""),t[e]}};function By(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Oy),slots:t.slots,emit:t.emit,expose:e}}function yu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(q_(T3(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ja)return ja[n](t)},has(e,n){return n in e||n in ja}})):t.proxy}function ky(t){return rt(t)&&"__vccOpts"in t}const Li=(t,e)=>P3(t,e,rl);function Gy(t,e,n){try{kc(-1);const i=arguments.length;return i===2?wt(e)&&!Ke(e)?Hc(e)?hn(t,null,[e]):hn(t,e):hn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Hc(n)&&(n=[n]),hn(t,e,n))}finally{kc(1)}}const Hy="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mf;const Rm=typeof window<"u"&&window.trustedTypes;if(Rm)try{mf=Rm.createPolicy("vue",{createHTML:t=>t})}catch{}const L1=mf?t=>mf.createHTML(t):t=>t,zy="http://www.w3.org/2000/svg",Vy="http://www.w3.org/1998/Math/MathML",Cs=typeof document<"u"?document:null,Cm=Cs&&Cs.createElement("template"),Wy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Cs.createElementNS(zy,t):e==="mathml"?Cs.createElementNS(Vy,t):n?Cs.createElement(t,{is:n}):Cs.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Cs.createTextNode(t),createComment:t=>Cs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Cm.innerHTML=L1(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Cm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zs="transition",Ma="animation",ol=Symbol("_vtc"),F1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xy=gn({},n1,F1),jy=t=>(t.displayName="Transition",t.props=Xy,t),Pm=jy((t,{slots:e})=>Gy(W3,qy(t),e)),br=(t,e=[])=>{Ke(t)?t.forEach(n=>n(...e)):t&&t(...e)},Im=t=>t?Ke(t)?t.some(e=>e.length>1):t.length>1:!1;function qy(t){const e={};for(const L in t)L in F1||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=$y(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:M,onLeave:x,onLeaveCancelled:P,onBeforeAppear:T=p,onAppear:F=y,onAppearCancelled:S=M}=e,A=(L,V,$,O)=>{L._enterCancelled=O,Tr(L,V?u:a),Tr(L,V?c:o),$&&$()},I=(L,V)=>{L._isLeaving=!1,Tr(L,h),Tr(L,d),Tr(L,f),V&&V()},w=L=>(V,$)=>{const O=L?F:y,z=()=>A(V,L,$);br(O,[V,z]),Dm(()=>{Tr(V,L?l:r),Es(V,L?u:a),Im(O)||Lm(V,i,_,z)})};return gn(e,{onBeforeEnter(L){br(p,[L]),Es(L,r),Es(L,o)},onBeforeAppear(L){br(T,[L]),Es(L,l),Es(L,c)},onEnter:w(!1),onAppear:w(!0),onLeave(L,V){L._isLeaving=!0;const $=()=>I(L,V);Es(L,h),L._enterCancelled?(Es(L,f),Um(L)):(Um(L),Es(L,f)),Dm(()=>{L._isLeaving&&(Tr(L,h),Es(L,d),Im(x)||Lm(L,i,m,$))}),br(x,[L,$])},onEnterCancelled(L){A(L,!1,void 0,!0),br(M,[L])},onAppearCancelled(L){A(L,!0,void 0,!0),br(S,[L])},onLeaveCancelled(L){I(L),br(P,[L])}})}function $y(t){if(t==null)return null;if(wt(t))return[lh(t.enter),lh(t.leave)];{const e=lh(t);return[e,e]}}function lh(t){return K2(t)}function Es(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ol]||(t[ol]=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ol];n&&(n.delete(e),n.size||(t[ol]=void 0))}function Dm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Yy=0;function Lm(t,e,n,i){const s=t._endId=++Yy,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Ky(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Ky(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Zs}Delay`),r=i(`${Zs}Duration`),o=Fm(s,r),a=i(`${Ma}Delay`),l=i(`${Ma}Duration`),c=Fm(a,l);let u=null,h=0,f=0;e===Zs?o>0&&(u=Zs,h=o,f=r.length):e===Ma?c>0&&(u=Ma,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Zs:Ma:null,f=u?u===Zs?r.length:l.length:0);const d=u===Zs&&/\b(?:transform|all)(?:,|$)/.test(i(`${Zs}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Fm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Nm(n)+Nm(t[i])))}function Nm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Um(t){return(t?t.ownerDocument:document).body.offsetHeight}function Zy(t,e,n){const i=t[ol];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Om=Symbol("_vod"),Jy=Symbol("_vsh"),Qy=Symbol(""),eS=/(?:^|;)\s*display\s*:/;function tS(t,e,n){const i=t.style,s=sn(n);let r=!1;if(n&&!s){if(e)if(sn(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Tc(i,a,"")}else for(const o in e)n[o]==null&&Tc(i,o,"");for(const o in n)o==="display"&&(r=!0),Tc(i,o,n[o])}else if(s){if(e!==n){const o=i[Qy];o&&(n+=";"+o),i.cssText=n,r=eS.test(n)}}else e&&t.removeAttribute("style");Om in t&&(t[Om]=r?i.display:"",t[Jy]&&(i.display="none"))}const Bm=/\s*!important$/;function Tc(t,e,n){if(Ke(n))n.forEach(i=>Tc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=nS(t,e);Bm.test(n)?t.setProperty(vr(i),n.replace(Bm,""),"important"):t[i]=n}}const km=["Webkit","Moz","ms"],ch={};function nS(t,e){const n=ch[e];if(n)return n;let i=Oi(e);if(i!=="filter"&&i in t)return ch[e]=i;i=A_(i);for(let s=0;s<km.length;s++){const r=km[s]+i;if(r in t)return ch[e]=r}return e}const Gm="http://www.w3.org/1999/xlink";function Hm(t,e,n,i,s,r=n3(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gm,e.slice(6,e.length)):t.setAttributeNS(Gm,e,n):n==null||r&&!C_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ds(n)?String(n):n)}function zm(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?L1(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=C_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function N1(t,e,n,i){t.addEventListener(e,n,i)}function iS(t,e,n,i){t.removeEventListener(e,n,i)}const Vm=Symbol("_vei");function sS(t,e,n,i,s=null){const r=t[Vm]||(t[Vm]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=rS(e);if(i){const c=r[e]=lS(i,s);N1(t,a,c,l)}else o&&(iS(t,a,o,l),r[e]=void 0)}}const Wm=/(?:Once|Passive|Capture)$/;function rS(t){let e;if(Wm.test(t)){e={};let i;for(;i=t.match(Wm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vr(t.slice(2)),e]}let uh=0;const oS=Promise.resolve(),aS=()=>uh||(oS.then(()=>uh=0),uh=Date.now());function lS(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Hi(cS(i,n.value),e,5,[i])};return n.value=t,n.attached=aS(),n}function cS(t,e){if(Ke(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Xm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uS=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Zy(t,i,o):e==="style"?tS(t,n,i):cu(e)?uu(e)||sS(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hS(t,e,i,o))?(zm(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hm(t,e,i,o,r,e!=="value")):t._isVueCE&&(fS(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!sn(i)))?zm(t,Oi(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Hm(t,e,i,o))};function hS(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xm(e)&&rt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xm(e)&&sn(n)?!1:e in t}function fS(t,e){const n=t._def.props;if(!n)return!1;const i=Oi(e);return Array.isArray(n)?n.some(s=>Oi(s)===i):Object.keys(n).some(s=>Oi(s)===i)}const jm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ke(e)?n=>Sc(e,n):e},hh=Symbol("_assign"),Bl={deep:!0,created(t,e,n){t[hh]=jm(n),N1(t,"change",()=>{const i=t._modelValue,s=dS(t),r=t.checked,o=t[hh];if(Ke(i)){const a=P_(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(hu(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(U1(t,r))})},mounted:qm,beforeUpdate(t,e,n){t[hh]=jm(n),qm(t,e,n)}};function qm(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ke(e))s=P_(e,i.props.value)>-1;else if(hu(e))s=e.has(i.props.value);else{if(e===n)return;s=vl(e,U1(t,!0))}t.checked!==s&&(t.checked=s)}function dS(t){return"_value"in t?t._value:t.value}function U1(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const pS=["ctrl","shift","alt","meta"],mS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pS.some(n=>t[`${n}Key`]&&!e.includes(n))},gS=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=mS[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},_S={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vS=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(s=>{if(!("key"in s))return;const r=vr(s.key);if(e.some(o=>o===r||_S[o]===r))return t(s)}))},xS=gn({patchProp:uS},Wy);let $m;function yS(){return $m||($m=Ey(xS))}const SS=((...t)=>{const e=yS().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ES(i);if(!s)return;const r=e._component;!rt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,MS(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function MS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ES(t){return sn(t)?document.querySelector(t):t}const es=t=>`${"/filter/".endsWith("/")?"/filter/":"/filter//"}${t.replace(/^\/+/,"")}`,Ym=[{id:"jjk",name:"Jujutsu Kaisen",sub:"Shibuya, Tokyo",image:es("/assets/worlds/jjk.jpg"),gradient:"linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #1a0533 100%)"},{id:"naruto",name:"Naruto",sub:"Hidden Leaf Village",image:es("/assets/worlds/naruto.jpg"),gradient:"linear-gradient(135deg, #0a1f0a 0%, #1a4d1a 50%, #0a1f0a 100%)",locked:!0},{id:"dbz",name:"Dragon Ball Z",sub:"Hyperbolic Time Chamber",image:es("/assets/worlds/dbz.jpg"),gradient:"linear-gradient(135deg, #1f1a00 0%, #4d3d0a 50%, #1f1a00 100%)",locked:!0}],Km=[{id:"gojo",name:"Satoru Gojo",sub:"The Strongest Sorcerer",image:es("/assets/characters/gojo.png"),accent:"#818cf8",abilities:[{name:"Blue",color:"#60a5fa"},{name:"Red",color:"#f87171"},{name:"Hollow Purple",color:"#a78bfa"},{name:"Infinite Void",color:"#c7d2fe"}],sounds:{blue:es("/assets/sounds/blue.mp3"),red:es("/assets/sounds/red.mp3"),purple:es("/assets/sounds/purple.mp3"),shoot:es("/assets/sounds/shoot.mp3")}},{id:"sukuna",name:"Ryomen Sukuna",sub:"King of Curses",image:es("/assets/characters/sukuna.png"),accent:"#f87171",abilities:[{name:"Cleave",color:"#f87171"},{name:"Dismantle",color:"#fb923c"},{name:"Malevolent Shrine",color:"#dc2626"}],sounds:{},locked:!0},{id:"yuta",name:"Yuta Okkotsu",sub:"Special Grade Sorcerer",image:es("/assets/characters/yuta.png"),accent:"#38bdf8",abilities:[{name:"Rika",color:"#38bdf8"},{name:"Copycat",color:"#7dd3fc"},{name:"Domain Expansion",color:"#e0f2fe"}],sounds:{},locked:!0}],bS=["onKeydown"],TS={class:"content"},wS={class:"section"},AS={class:"card-row"},RS=["disabled","onClick"],CS={class:"card-content"},PS={class:"card-name"},IS={class:"card-sub"},DS={key:2,class:"lock-overlay"},LS={key:3,class:"selected-ring"},FS={class:"section"},NS={class:"card-row"},US=["disabled","onClick"],OS={class:"card-content"},BS=["src","alt"],kS={key:1,class:"avatar-letter"},GS={class:"card-name"},HS={class:"card-sub"},zS={class:"ability-tags"},VS={key:0,class:"lock-overlay"},WS={key:1,class:"selected-ring"},XS=eo({__name:"CharacterSelect",emits:["start"],setup(t,{emit:e}){const n=e,i=pt("jjk"),s=pt("gojo"),r=pt();let o=0;const a=tl({}),l=tl({});function c(d){return d?new Promise(g=>{const _=new Image;_.onload=()=>g(d),_.onerror=()=>g(null),_.src=d}):Promise.resolve(null)}to(async()=>{for(const d of Ym){const g=await c(d.image);g&&(a[d.id]=g)}for(const d of Km){const g=await c(d.image);g&&(l[d.id]=g)}f()});function u(d){const g=d.accent;return`linear-gradient(135deg, ${g}11 0%, ${g}22 40%, ${g}11 100%)`}function h(){n("start",{world:i.value,character:s.value})}function f(){const d=r.value;if(!d)return;const g=d,_=g.getContext("2d"),m=[];function p(){g.width=g.clientWidth*window.devicePixelRatio,g.height=g.clientHeight*window.devicePixelRatio}p(),window.addEventListener("resize",p);for(let M=0;M<50;M++)m.push({x:Math.random()*g.clientWidth,y:Math.random()*g.clientHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:1+Math.random()*1.5,o:.12+Math.random()*.25});function y(){const M=window.devicePixelRatio,x=g.clientWidth,P=g.clientHeight;_.resetTransform(),_.scale(M,M),_.clearRect(0,0,x,P);for(const T of m)T.x+=T.vx,T.y+=T.vy,T.x<0&&(T.x=x),T.x>x&&(T.x=0),T.y<0&&(T.y=P),T.y>P&&(T.y=0),_.beginPath(),_.arc(T.x,T.y,T.r,0,Math.PI*2),_.fillStyle=`rgba(124,58,237,${T.o})`,_.fill();for(let T=0;T<m.length;T++)for(let F=T+1;F<m.length;F++){const S=m[T].x-m[F].x,A=m[T].y-m[F].y,I=S*S+A*A;I<14400&&(_.beginPath(),_.moveTo(m[T].x,m[T].y),_.lineTo(m[F].x,m[F].y),_.strokeStyle=`rgba(124,58,237,${.06*(1-Math.sqrt(I)/120)})`,_.lineWidth=.5,_.stroke())}o=requestAnimationFrame(y)}y()}return xr(()=>cancelAnimationFrame(o)),(d,g)=>(Qe(),tt("div",{class:"select-screen",onKeydown:vS(gS(h,["prevent"]),["space"])},[te("canvas",{ref_key:"bgCanvas",ref:r,class:"bg-canvas"},null,512),te("div",TS,[g[5]||(g[5]=C1('<header class="header" data-v-cf875a97><div class="logo-mark" data-v-cf875a97><div class="hex hex1" data-v-cf875a97></div><div class="hex hex2" data-v-cf875a97></div><div class="hex hex3" data-v-cf875a97></div></div><h1 class="title" data-v-cf875a97>THE STRONGEST</h1><p class="subtitle" data-v-cf875a97>Hand-Tracking Ability Simulator</p></header>',1)),te("section",wS,[g[1]||(g[1]=te("div",{class:"section-label"},[te("span",{class:"label-line"}),Hn("SELECT WORLD"),te("span",{class:"label-line"})],-1)),te("div",AS,[(Qe(!0),tt(qt,null,cs(af(Ym),_=>(Qe(),tt("button",{key:_.id,class:bn(["card world-card",{selected:i.value===_.id,locked:_.locked}]),disabled:_.locked,onClick:m=>!_.locked&&(i.value=_.id)},[a[_.id]?(Qe(),tt("div",{key:0,class:"card-bg-img",style:En({backgroundImage:`url(${a[_.id]})`})},null,4)):(Qe(),tt("div",{key:1,class:"card-bg",style:En({background:_.gradient})},null,4)),te("div",CS,[te("div",PS,dt(_.name),1),te("div",IS,dt(_.sub),1)]),_.locked?(Qe(),tt("div",DS,[...g[0]||(g[0]=[te("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[te("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),te("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1),te("span",null,"COMING SOON",-1)])])):an("",!0),i.value===_.id&&!_.locked?(Qe(),tt("div",LS)):an("",!0)],10,RS))),128))])]),te("section",FS,[g[3]||(g[3]=te("div",{class:"section-label"},[te("span",{class:"label-line"}),Hn("SELECT CHARACTER"),te("span",{class:"label-line"})],-1)),te("div",NS,[(Qe(!0),tt(qt,null,cs(af(Km),_=>(Qe(),tt("button",{key:_.id,class:bn(["card char-card",{selected:s.value===_.id,locked:_.locked}]),disabled:_.locked,onClick:m=>!_.locked&&(s.value=_.id)},[te("div",{class:"card-bg",style:En({background:u(_)})},null,4),te("div",OS,[te("div",{class:"char-avatar",style:En({borderColor:_.accent})},[l[_.id]?(Qe(),tt("img",{key:0,src:l[_.id],class:"avatar-img",alt:_.name},null,8,BS)):(Qe(),tt("span",kS,dt(_.name[0]),1))],4),te("div",GS,dt(_.name),1),te("div",HS,dt(_.sub),1),te("div",zS,[(Qe(!0),tt(qt,null,cs(_.abilities,m=>(Qe(),tt("span",{key:m.name,class:"tag",style:En({color:m.color,borderColor:m.color+"44"})},dt(m.name),5))),128))])]),_.locked?(Qe(),tt("div",VS,[...g[2]||(g[2]=[te("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[te("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),te("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1),te("span",null,"COMING SOON",-1)])])):an("",!0),s.value===_.id&&!_.locked?(Qe(),tt("div",WS)):an("",!0)],10,US))),128))])]),te("button",{class:"start-btn",onClick:h},[...g[4]||(g[4]=[te("span",{class:"btn-glow"},null,-1),te("span",{class:"btn-text"},"ACTIVATE",-1),te("kbd",{class:"kbd"},"SPACE",-1)])])])],40,bS))}}),ra=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},jS=ra(XS,[["__scopeId","data-v-cf875a97"]]);class qS{constructor(){C(this,"listeners",new Map)}on(e,n){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n)}off(e,n){var i;(i=this.listeners.get(e))==null||i.delete(n)}emit(e,n){var i;(i=this.listeners.get(e))==null||i.forEach(s=>{s(n)})}}var Vo=typeof self<"u"?self:{};function O1(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=Vo,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function wr(){throw Error("Invalid UTF8")}function Zm(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let kl,fh;const $S=typeof TextDecoder<"u";let YS;const KS=typeof TextEncoder<"u";function B1(t){if(KS)t=(YS||(YS=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){const r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function k1(t){Vo.setTimeout((()=>{throw t}),0)}var gf,ZS=O1(610401301,!1),Jm=O1(748402147,!0);function Qm(){var t=Vo.navigator;return t&&(t=t.userAgent)?t:""}const e0=Vo.navigator;function Su(t){return Su[" "](t),t}gf=e0&&e0.userAgentData||null,Su[" "]=function(){};const G1={};let Na=null;function JS(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return(function(r,o){function a(c){for(;l<r.length;){const u=r.charAt(l++),h=Na[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}H1();let l=0;for(;;){const c=a(-1),u=a(0),h=a(64),f=a(64);if(f===64&&c===-1)break;o(c<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),f!=64&&o(h<<6&192|f))}})(t,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function H1(){if(!Na){Na={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));G1[n]=i;for(let s=0;s<i.length;s++){const r=i[s];Na[r]===void 0&&(Na[r]=s)}}}}var QS=typeof Uint8Array<"u",z1=!(!(ZS&&gf&&gf.brands.length>0)&&(Qm().indexOf("Trident")!=-1||Qm().indexOf("MSIE")!=-1))&&typeof btoa=="function";const t0=/[-_.]/g,eM={"-":"+",_:"/",".":"="};function tM(t){return eM[t]||""}function V1(t){if(!z1)return JS(t);t=t0.test(t)?t.replace(t0,tM):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function kd(t){return QS&&t!=null&&t instanceof Uint8Array}var Wo={};function $r(){return nM||(nM=new us(null,Wo))}function Gd(t){W1(Wo);var e=t.g;return(e=e==null||kd(e)?e:typeof e=="string"?V1(e):null)==null?e:t.g=e}var us=class{h(){return new Uint8Array(Gd(this)||0)}constructor(t,e){if(W1(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let nM,iM;function W1(t){if(t!==Wo)throw Error("illegal external caller")}function X1(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function _f(t){return X1(t=Error(t),"warning"),t}function Xo(t,e){if(t!=null){var n=iM??(iM={}),i=n[t]||0;i>=e||(n[t]=i+1,X1(t=Error(),"incident"),k1(t))}}function oa(){return typeof BigInt=="function"}var aa=typeof Symbol=="function"&&typeof Symbol()=="symbol";function gs(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var sM=gs("jas",void 0,!0),n0=gs(void 0,"0di"),Ea=gs(void 0,"1oa"),ui=gs(void 0,Symbol()),rM=gs(void 0,"0ub"),oM=gs(void 0,"0ubs"),vf=gs(void 0,"0ubsb"),aM=gs(void 0,"0actk"),jo=gs("m_m","Pa",!0),i0=gs();const j1={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},q1=Object.defineProperties,Ge=aa?sM:"Ga";var no;const s0=[];function Sl(t,e){aa||Ge in t||q1(t,j1),t[Ge]|=e}function _n(t,e){aa||Ge in t||q1(t,j1),t[Ge]=e}function Ml(t){return Sl(t,34),t}function al(t){return Sl(t,8192),t}_n(s0,7),no=Object.freeze(s0);var qo={};function fi(t,e){return e===void 0?t.h!==Yr&&!!(2&(0|t.v[Ge])):!!(2&e)&&t.h!==Yr}const Yr={};function Hd(t,e){if(t!=null){if(typeof t=="string")t=t?new us(t,Wo):$r();else if(t.constructor!==us)if(kd(t))t=t.length?new us(new Uint8Array(t),Wo):$r();else{if(!e)throw Error();t=void 0}}return t}class r0{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var lM=Object.freeze({});function $1(t,e,n){const i=128&e?0:-1,s=t.length;var r;(r=!!s)&&(r=(r=t[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const o=s+(r?-1:0);for(e=128&e?1:0;e<o;e++)n(e-i,t[e]);if(r){t=t[s-1];for(const a in t)!isNaN(a)&&n(+a,t[a])}}var Y1={};function la(t){return 128&t?Y1:void 0}function Mu(t){return t.Na=!0,t}var cM=Mu((t=>typeof t=="number")),o0=Mu((t=>typeof t=="string")),uM=Mu((t=>typeof t=="boolean")),Eu=typeof Vo.BigInt=="function"&&typeof Vo.BigInt(0)=="bigint";function hi(t){var e=t;if(o0(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(cM(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Eu?BigInt(t):t=uM(t)?t?"1":"0":o0(t)?t.trim()||"0":String(t)}var xf=Mu((t=>Eu?t>=fM&&t<=pM:t[0]==="-"?a0(t,hM):a0(t,dM)));const hM=Number.MIN_SAFE_INTEGER.toString(),fM=Eu?BigInt(Number.MIN_SAFE_INTEGER):void 0,dM=Number.MAX_SAFE_INTEGER.toString(),pM=Eu?BigInt(Number.MAX_SAFE_INTEGER):void 0;function a0(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}const mM=typeof Uint8Array.prototype.slice=="function";let gM,Ht=0,on=0;function l0(t){const e=t>>>0;Ht=e,on=(t-e)/4294967296>>>0}function $o(t){if(t<0){l0(-t);const[e,n]=Wd(Ht,on);Ht=e>>>0,on=n>>>0}else l0(t)}function zd(t){const e=gM||(gM=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),on=0,Ht=e.getUint32(0,!0)}function K1(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:ll(t,e)}function _M(t,e){return hi(oa()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):ll(t,e))}function Z1(t,e){return oa()?hi(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):hi(Vd(t,e))}function ll(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else oa()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+c0(n)+c0(t));return n}function c0(t){return t=String(t),"0000000".slice(t.length)+t}function Vd(t,e){if(2147483648&e)if(oa())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Wd(t,e);t="-"+ll(n,i)}else t=ll(t,e);return t}function bu(t){if(t.length<16)$o(Number(t));else if(oa())t=BigInt(t),Ht=Number(t&BigInt(4294967295))>>>0,on=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");on=Ht=0;const n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){const r=Number(t.slice(i,s));on*=1e6,Ht=1e6*Ht+r,Ht>=4294967296&&(on+=Math.trunc(Ht/4294967296),on>>>=0,Ht>>>=0)}if(e){const[i,s]=Wd(Ht,on);Ht=i,on=s}}}function Wd(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function ki(t){return Array.prototype.slice.call(t)}const El=typeof BigInt=="function"?BigInt.asIntN:void 0,vM=typeof BigInt=="function"?BigInt.asUintN:void 0,Kr=Number.isSafeInteger,Tu=Number.isFinite,Yo=Math.trunc,xM=hi(0);function Ua(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function rs(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function cl(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function J1(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const yM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function bl(t){switch(typeof t){case"bigint":return!0;case"number":return Tu(t);case"string":return yM.test(t);default:return!1}}function ca(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Tu(t)?0|t:void 0}function Q1(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Tu(t)?t>>>0:void 0}function ev(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(bu(t),Vd(Ht,on))}function Xd(t){if(t=Yo(t),!Kr(t)){$o(t);var e=Ht,n=on;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=K1(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function tv(t){var e=Yo(Number(t));return Kr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),ev(t))}function nv(t){var e=Yo(Number(t));return Kr(e)?hi(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),oa()?hi(El(64,BigInt(t))):hi(ev(t)))}function iv(t){return Kr(t)?t=hi(Xd(t)):(t=Yo(t),Kr(t)?t=String(t):($o(t),t=Vd(Ht,on)),t=hi(t)),t}function Vc(t){const e=typeof t;return t==null?t:e==="bigint"?hi(El(64,t)):bl(t)?e==="string"?nv(t):iv(t):void 0}function sv(t){if(typeof t!="string")throw Error();return t}function Tl(t){if(t!=null&&typeof t!="string")throw Error();return t}function wn(t){return t==null||typeof t=="string"?t:void 0}function jd(t,e,n,i){return t!=null&&t[jo]===qo?t:Array.isArray(t)?((i=(n=0|t[Ge])|32&i|2&i)!==n&&_n(t,i),new e(t)):(n?2&i?((t=e[n0])||(Ml((t=new e).v),t=e[n0]=t),e=t):e=new e:e=void 0,e)}function SM(t,e,n){if(e)e:{if(!bl(e=t))throw _f("int64");switch(typeof e){case"string":e=nv(e);break e;case"bigint":e=hi(El(64,e));break e;default:e=iv(e)}}else e=Vc(t);return(t=e)==null?n?xM:void 0:t}const MM={};let EM=(function(){try{return Su(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class dh{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const bM=EM?(Object.setPrototypeOf(dh.prototype,Map.prototype),Object.defineProperties(dh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),dh):class extends Map{constructor(){super()}};function u0(t){return t}function ph(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Hs=class extends bM{constructor(t,e,n=u0,i=u0){super(),this.J=0|t[Ge],this.K=e,this.S=n,this.fa=this.K?TM:i;for(let s=0;s<t.length;s++){const r=t[s],o=n(r[0],!1,!0);let a=r[1];e?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(t){return al(Array.from(super.entries(),t))}clear(){ph(this),super.clear()}delete(t){return ph(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new r0(t,wM,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new r0(t,Hs.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,s)=>{t.call(e,s.get(i),i,s)})):super.forEach(t,e)}set(t,e){return ph(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function TM(t,e,n,i,s,r){return t=jd(t,i,n,r),s&&(t=$d(t)),t}function wM(t){return[t,this.get(t)]}let AM;function h0(){return AM||(AM=new Hs(Ml([]),void 0,void 0,void 0,MM))}function wu(t){return ui?t[ui]:void 0}function Wc(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Hs.prototype.toJSON=void 0;var yf=class{};const RM={Ka:!0};function CM(t,e){e<100||Xo(oM,1)}function Au(t,e,n,i){const s=i!==void 0;i=!!i;var r,o=ui;!s&&aa&&o&&(r=t[o])&&Wc(r,CM),o=[];var a=t.length;let l;r=4294967295;let c=!1;const u=!!(64&e),h=u?128&e?0:-1:void 0;1&e||(l=a&&t[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--a:l=void 0,!u||128&e||s||(c=!0,r=r-h+h)),e=void 0;for(var f=0;f<a;f++){let d=t[f];if(d!=null&&(d=n(d,i))!=null)if(u&&f>=r){const g=f-h;(e??(e={}))[g]=d}else o[f]=d}if(l)for(let d in l){if((a=l[d])==null||(a=n(a,i))==null)continue;let g;f=+d,u&&!Number.isNaN(f)&&(g=f+h)<r?o[g]=a:(e??(e={}))[d]=a}return e&&(c?o.push(e):o[r]=e),s&&ui&&(t=wu(t))&&t instanceof yf&&(o[ui]=(function(d){const g=new yf;return Wc(d,((_,m,p)=>{g[m]=ki(p)})),g.da=d.da,g})(t)),o}function PM(t){return t[0]=ul(t[0]),t[1]=ul(t[1]),t}function ul(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return xf(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ge];return t.length===0&&1&e?void 0:Au(t,e,ul)}if(t!=null&&t[jo]===qo)return rv(t);if(t instanceof us){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(z1){for(var n="",i=0,s=e.length-10240;i<s;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),H1(),n=G1[n],i=Array(Math.floor(e.length/3)),s=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var r=e[c],o=e[c+1],a=e[c+2],l=n[r>>2];r=n[(3&r)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[u++]=l+r+o+a}switch(l=0,a=s,e.length-c){case 2:a=n[(15&(l=e[c+1]))<<2]||s;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+a+s}e=i.join("")}t=t.g=e}return t}return t instanceof Hs?t=t.size!==0?t.V(PM):void 0:void 0}return t}let IM,DM;function rv(t){return Au(t=t.v,0|t[Ge],ul)}function Vr(t,e){return ov(t,e[0],e[1])}function ov(t,e,n,i=0){if(t==null){var s=32;n?(t=[n],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[Ge],Jm&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Jm)throw Error("carr");Xo(aM,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&_n(t,s|i),t;if(n&&(s|=128,n!==t[0]))throw Error("mid");e:{s|=64;var r=(n=t).length;if(r){var o=r-1;const l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(r=+a)<o&&(n[r+e]=l[a],delete l[a]);s=-16760833&s|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return _n(t,64|s|i),t}function LM(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ge];return t.length===0&&1&n?void 0:f0(t,n,e)}if(t!=null&&t[jo]===qo)return d0(t);if(t instanceof Hs){if(2&(e=t.J))return t;if(!t.size)return;if(n=Ml(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[jo]===qo?d0(s):Array.isArray(s)?f0(s,0|s[Ge],!!(32&e)):void 0,i[1]=s}return n}return t instanceof us?t:void 0}function f0(t,e,n){return 2&e||(!n||4096&e||16&e?t=ua(t,e,!1,n&&!(16&e)):(Sl(t,34),4&e&&Object.freeze(t))),t}function qd(t,e,n){return t=new t.constructor(e),n&&(t.h=Yr),t.m=Yr,t}function d0(t){const e=t.v,n=0|e[Ge];return fi(t,n)?t:Yd(t,e,n)?qd(t,e):ua(e,n)}function ua(t,e,n,i){return i??(i=!!(34&e)),t=Au(t,e,LM,i),i=32,n&&(i|=2),_n(t,e=16769217&e|i),t}function $d(t){const e=t.v,n=0|e[Ge];return fi(t,n)?Yd(t,e,n)?qd(t,e,!0):new t.constructor(ua(e,n,!1)):t}function ha(t){if(t.h!==Yr)return!1;var e=t.v;return Sl(e=ua(e,0|e[Ge]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function fa(t){if(!ha(t)&&fi(t,0|t.v[Ge]))throw Error()}function io(t,e){e===void 0&&(e=0|t[Ge]),32&e&&!(4096&e)&&_n(t,4096|e)}function Yd(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(_n(e,2|n),t.h=Yr,!0)}const av=hi(0),Js={};function zt(t,e,n,i,s){if((e=zs(t.v,e,n,s))!==null||i&&t.m!==Yr)return e}function zs(t,e,n,i){if(e===-1)return null;const s=e+(n?0:-1),r=t.length-1;let o,a;if(!(r<1+(n?0:-1))){if(s>=r)if(o=t[r],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[e],a=!0;else{if(s!==r)return;n=o}else n=t[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[e]=i:t[s]=i,i}return n}}function It(t,e,n,i){fa(t),pn(t=t.v,0|t[Ge],e,n,i)}function pn(t,e,n,i,s){const r=n+(s?0:-1);var o=t.length-1;if(o>=1+(s?0:-1)&&r>=o){const a=t[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,e}return r<=o?(t[r]=i,e):(i!==void 0&&(n>=(o=(e??(e=0|t[Ge]))>>14&1023||536870912)?i!=null&&(t[o+(s?0:-1)]={[n]:i}):t[r]=i),e)}function Or(){return lM===void 0?2:4}function Br(t,e,n,i,s){let r=t.v,o=0|r[Ge];i=fi(t,o)?1:i,s=!!s||i===3,i===2&&ha(t)&&(r=t.v,o=0|r[Ge]);let a=(t=Kd(r,e))===no?7:0|t[Ge],l=Zd(a,o);var c=!(4&l);if(c){4&l&&(t=ki(t),a=0,l=Xr(l,o),o=pn(r,o,e,t));let u=0,h=0;for(;u<t.length;u++){const f=n(t[u]);f!=null&&(t[h++]=f)}h<u&&(t.length=h),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(_n(t,l),2&l&&Object.freeze(t)),lv(t,l,r,o,e,i,c,s)}function lv(t,e,n,i,s,r,o,a){let l=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?Wr(e)||((e|=!t.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&_n(t,e),Object.freeze(t)):(r===2&&Wr(e)&&(t=ki(t),l=0,e=Xr(e,i),i=pn(n,i,s,t)),Wr(e)||(a||(e|=16),e!==l&&_n(t,e))),2&e||!(4096&e||16&e)||io(n,i),t}function Kd(t,e,n){return t=zs(t,e,n),Array.isArray(t)?t:no}function Zd(t,e){return 2&e&&(t|=2),1|t}function Wr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function cv(t){return Hd(t,!0)}function uv(t){t=ki(t);for(let e=0;e<t.length;e++){const n=t[e]=ki(t[e]);Array.isArray(n[1])&&(n[1]=Ml(n[1]))}return al(t)}function ar(t,e,n,i){fa(t),pn(t=t.v,0|t[Ge],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function da(t,e,n){if(2&e)throw Error();const i=la(e);let s=Kd(t,n,i),r=s===no?7:0|s[Ge],o=Zd(r,e);return(2&o||Wr(o)||16&o)&&(o===r||Wr(o)||_n(s,o),s=ki(s),r=0,o=Xr(o,e),pn(t,e,n,s,i)),o&=-13,o!==r&&_n(s,o),s}function mh(t,e){var n=tx;return Qd(Jd(t=t.v),t,void 0,n)===e?e:-1}function Jd(t){if(aa)return t[Ea]??(t[Ea]=new Map);if(Ea in t)return t[Ea];const e=new Map;return Object.defineProperty(t,Ea,{value:e}),e}function hv(t,e,n,i,s){const r=Jd(t),o=Qd(r,t,e,n,s);return o!==i&&(o&&(e=pn(t,e,o,void 0,s)),r.set(n,i)),e}function Qd(t,e,n,i,s){let r=t.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){const a=i[o];zs(e,a,s)!=null&&(r!==0&&(n=pn(e,n,r,void 0,s)),r=a)}return t.set(i,r),r}function ep(t,e,n){let i=0|t[Ge];const s=la(i),r=zs(t,n,s);let o;if(r!=null&&r[jo]===qo){if(!fi(r))return ha(r),r.v;o=r.v}else Array.isArray(r)&&(o=r);if(o){const a=0|o[Ge];2&a&&(o=ua(o,a))}return o=Vr(o,e),o!==r&&pn(t,i,n,o,s),o}function fv(t,e,n,i,s){let r=!1;if((i=zs(t,i,s,(o=>{const a=jd(o,n,!1,e);return r=a!==o&&a!=null,a})))!=null)return r&&!fi(i)&&io(t,e),i}function Mt(t,e,n,i){let s=t.v,r=0|s[Ge];if((e=fv(s,r,e,n,i))==null)return e;if(r=0|s[Ge],!fi(t,r)){const o=$d(e);o!==e&&(ha(t)&&(s=t.v,r=0|s[Ge]),r=pn(s,r,n,e=o,i),io(s,r))}return e}function dv(t,e,n,i,s,r,o,a){var l=fi(t,n);r=l?1:r,o=!!o||r===3,l=a&&!l,(r===2||l)&&ha(t)&&(n=0|(e=t.v)[Ge]);var c=(t=Kd(e,s))===no?7:0|t[Ge],u=Zd(c,n);if(a=!(4&u)){var h=t,f=n;const d=!!(2&u);d&&(f|=2);let g=!d,_=!0,m=0,p=0;for(;m<h.length;m++){const y=jd(h[m],i,!1,f);if(y instanceof i){if(!d){const M=fi(y);g&&(g=!M),_&&(_=M)}h[p++]=y}}p<m&&(h.length=p),u|=4,u=_?-4097&u:4096|u,u=g?8|u:-9&u}if(u!==c&&(_n(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(r===1||r===4&&(2&u||!(16&u)&&32&n)))){for(Wr(u)&&(t=ki(t),u=Xr(u,n),n=pn(e,n,s,t)),i=t,l=u,c=0;c<i.length;c++)(h=i[c])!==(u=$d(h))&&(i[c]=u);l|=8,_n(t,u=l=i.length?4096|l:-4097&l)}return lv(t,u,e,n,s,r,a,o)}function Vs(t,e,n){const i=t.v;return dv(t,i,0|i[Ge],e,n,Or(),!1,!0)}function pv(t){return t==null&&(t=void 0),t}function Ye(t,e,n,i,s){return It(t,n,i=pv(i),s),i&&!fi(i)&&io(t.v),t}function $a(t,e,n,i){e:{var s=i=pv(i);fa(t);const r=t.v;let o=0|r[Ge];if(s==null){const a=Jd(r);if(Qd(a,r,o,n)!==e)break e;a.set(n,0)}else o=hv(r,o,n,e);pn(r,o,e,s)}i&&!fi(i)&&io(t.v)}function Xr(t,e){return-273&(2&e?2|t:-3&t)}function tp(t,e,n,i){var s=i;fa(t),t=dv(t,i=t.v,0|i[Ge],n,e,2,!0),s=s??new n,t.push(s),e=n=t===no?7:0|t[Ge],(s=fi(s))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&_n(t,n),s||io(i)}function wi(t,e,n){return ca(zt(t,e,void 0,n))}function tn(t,e){return zt(t,e,void 0,void 0,rs)??0}function Ws(t,e,n){if(n!=null){if(typeof n!="number"||!Tu(n))throw _f("int32");n|=0}It(t,e,n)}function Xe(t,e,n){It(t,e,Ua(n))}function di(t,e,n){ar(t,e,Tl(n),"")}function Xc(t,e,n){{fa(t);const o=t.v;let a=0|o[Ge];if(n==null)pn(o,a,e);else{var i=t=n===no?7:0|n[Ge],s=Wr(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=ki(n),i=0,t=Xr(t,a),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<n.length;s++){const l=n[s],c=sv(l);Object.is(l,c)||(r&&(n=ki(n),i=0,t=Xr(t,a),r=!1),n[s]=c)}t!==i&&(r&&(n=ki(n),t=Xr(t,a)),_n(n,t)),pn(o,a,e,n)}}}function Ru(t,e,n){fa(t),Br(t,e,wn,2,!0).push(sv(n))}var uo=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function np(t,e){if(typeof t=="string")return new uo(V1(t),e);if(Array.isArray(t))return new uo(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new uo(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new uo(t,!1);if(t.constructor===us)return e=Gd(t)||new Uint8Array(0),new uo(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new uo(t,!1);throw Error()}function ip(t,e){let n,i=0,s=0,r=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(jr(t,a),!(128&n))return e(i>>>0,s>>>0);throw Error()}function sp(t){let e=0,n=t.g;const i=n+10,s=t.h;for(;n<i;){const r=s[n++];if(e|=r,(128&r)==0)return jr(t,n),!!(127&e)}throw Error()}function pr(t){const e=t.h;let n=t.g,i=e[n++],s=127&i;if(128&i&&(i=e[n++],s|=(127&i)<<7,128&i&&(i=e[n++],s|=(127&i)<<14,128&i&&(i=e[n++],s|=(127&i)<<21,128&i&&(i=e[n++],s|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return jr(t,n),s}function ps(t){return pr(t)>>>0}function jc(t){var e=t.h;const n=t.g;var i=e[n],s=e[n+1];const r=e[n+2];return e=e[n+3],jr(t,t.g+4),t=2*((s=(i<<0|s<<8|r<<16|e<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:t*(1/0):i==0?1401298464324817e-60*t*s:t*Math.pow(2,i-150)*(s+8388608)}function FM(t){return pr(t)}function jr(t,e){if(t.g=e,e>t.l)throw Error()}function mv(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function gv(t,e){if(e==0)return $r();var n=mv(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):mM?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?$r():new us(n,Wo)}var p0=[];function _v(t,e,n,i){if(qc.length){const s=qc.pop();return s.o(i),s.g.init(t,e,n,i),s}return new NM(t,e,n,i)}function vv(t){t.g.clear(),t.l=-1,t.h=-1,qc.length<100&&qc.push(t)}function xv(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=ps(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function wc(t){switch(t.h){case 0:t.h!=0?wc(t):sp(t.g);break;case 1:jr(t=t.g,t.g+8);break;case 2:if(t.h!=2)wc(t);else{var e=ps(t.g);jr(t=t.g,t.g+e)}break;case 5:jr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!xv(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}wc(t)}break;default:throw Error()}}function wl(t,e,n){const i=t.g.l;var s=ps(t.g);let r=(s=t.g.g+s)-i;if(r<=0&&(t.g.l=s,n(e,t,void 0,void 0,void 0),r=s-t.g.g),r)throw Error();return t.g.g=s,t.g.l=i,e}function rp(t){var e=ps(t.g),n=mv(t=t.g,e);if(t=t.h,$S){var i,s=t;(i=fh)||(i=fh=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(a){if(kl===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),kl=!0}catch{kl=!1}}throw!kl&&(fh=void 0),a}}else{e=(r=n)+e,n=[];let a,l=null;for(;r<e;){var o=t[r++];o<128?n.push(o):o<224?r>=e?wr():(a=t[r++],o<194||(192&a)!=128?(r--,wr()):n.push((31&o)<<6|63&a)):o<240?r>=e-1?wr():(a=t[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[r++]))!=128?(r--,wr()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=e-2?wr():(a=t[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,wr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):wr(),n.length>=8192&&(l=Zm(l,n),n.length=0)}r=Zm(l,n)}return r}function yv(t){const e=ps(t.g);return gv(t.g,e)}function Cu(t,e,n){var i=ps(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var NM=class{constructor(t,e,n,i){if(p0.length){const s=p0.pop();s.init(t,e,n,i),t=s}else t=new class{constructor(s,r,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,o,a)}init(s,r,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,s&&(s=np(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},qc=[];function m0(t){return t?/^\d+$/.test(t)?(bu(t),new Sf(Ht,on)):null:UM||(UM=new Sf(0,0))}var Sf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let UM;function g0(t){return t?/^-?\d+$/.test(t)?(bu(t),new Mf(Ht,on)):null:OM||(OM=new Mf(0,0))}var Mf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let OM;function ko(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function pa(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Pu(t,e){if(e>=0)pa(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function op(t){var e=Ht;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Ko(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Ri(t,e,n){pa(t.g,8*e+n)}function ap(t,e){return Ri(t,e,2),e=t.g.end(),Ko(t,e),e.push(t.h),e}function lp(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Iu(t,e,n){Ri(t,e,2),pa(t.g,n.length),Ko(t,t.g.end()),Ko(t,n)}function $c(t,e,n,i){n!=null&&(e=ap(t,e),i(n,t),lp(t,e))}function _s(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var cp=_s(),Sv=_s(),up=_s(),hp=_s(),fp=_s(),Mv=_s(),BM=_s(),Du=_s(),Ev=_s(),bv=_s();function vs(t,e,n){var i=t.v;ui&&ui in i&&(i=i[ui])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var He=class{constructor(t,e){this.v=ov(t,e,void 0,2048)}toJSON(){return rv(this)}j(){var s;var t=xE,e=this.v,n=t.g,i=ui;if(aa&&i&&((s=e[i])==null?void 0:s[n])!=null&&Xo(rM,3),e=t.g,i0&&ui&&i0===void 0&&(i=(n=this.v)[ui])&&(i=i.da))try{i(n,e,RM)}catch(r){k1(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ge];return Yd(this,t,e)?qd(this,t,!0):new this.constructor(ua(t,e,!1))}};He.prototype[jo]=qo,He.prototype.toString=function(){return this.v.toString()};var ma=class{constructor(t,e,n){this.g=t,this.h=e,t=cp,this.l=!!t&&n===t||!1}};function Lu(t,e){return new ma(t,e,cp)}function Tv(t,e,n,i,s){$c(t,n,Cv(e,i),s)}const kM=Lu((function(t,e,n,i,s){return t.h===2&&(wl(t,ep(e,i,n),s),!0)}),Tv),GM=Lu((function(t,e,n,i,s){return t.h===2&&(wl(t,ep(e,i,n),s),!0)}),Tv);var Fu=Symbol(),Nu=Symbol(),Ef=Symbol(),_0=Symbol(),v0=Symbol();let wv,Av;function so(t,e,n,i){var s=i[t];if(s)return s;(s={}).qa=i,s.T=(function(h){switch(typeof h){case"boolean":return IM||(IM=[0,void 0,!0]);case"number":return h>0?void 0:h===0?DM||(DM=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++o])=="function"&&(s.ma=!0,wv??(wv=r),Av??(Av=i[o+1]),r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let h;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof ma?h=r:(h=kM,o--),h==null?void 0:h.l){r=i[++o],c=i;var u=o;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=i[++o])=="number"&&r<0&&(u-=r,r=i[++o]);l<u;l++){const f=a[l];c?n(s,l,h,c,f):e(s,l,h,f)}}return i[t]=s}function Rv(t){return Array.isArray(t)?t[0]instanceof ma?t:[GM,t]:[t,void 0]}function Cv(t,e){return t instanceof He?t.v:Array.isArray(t)?Vr(t,e):void 0}function dp(t,e,n,i){const s=n.g;t[e]=i?(r,o,a)=>s(r,o,a,i):s}function pp(t,e,n,i,s){const r=n.g;let o,a;t[e]=(l,c,u)=>r(l,c,u,a||(a=so(Nu,dp,pp,i).T),o||(o=mp(i)),s)}function mp(t){let e=t[Ef];if(e!=null)return e;const n=so(Nu,dp,pp,t);return e=n.ma?(i,s)=>wv(i,s,n):(i,s)=>{for(;xv(s)&&s.h!=4;){var r=s.l,o=n[r];if(o==null){var a=n.ba;a&&(a=a[r])&&(a=zM(a))!=null&&(o=n[r]=a)}if(o==null||!o(s,i,r)){if(o=(a=s).m,wc(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=gv(a.g,l);o=void 0,a=i,l&&((o=a[ui]??(a[ui]=new yf))[r]??(o[r]=[])).push(l)}}return(i=wu(i))&&(i.da=n.qa[v0]),!0},t[Ef]=e,t[v0]=HM.bind(t),e}function HM(t,e,n,i){var s=this[Nu];const r=this[Ef],o=Vr(void 0,s.T),a=wu(t);if(a){var l=!1,c=s.ba;if(c){if(s=(u,h,f)=>{if(f.length!==0)if(c[h])for(const d of f){u=_v(d);try{l=!0,r(o,u)}finally{vv(u)}}else i==null||i(t,h,f)},e==null)Wc(a,s);else if(a!=null){const u=a[e];u&&s(a,e,u)}if(l){let u=0|t[Ge];if(2&u&&2048&u&&!(n!=null&&n.Ka))throw Error();const h=la(u),f=(d,g)=>{if(zs(t,d,h)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}g!=null&&(u=pn(t,u,d,g,h)),delete a[d]};e==null?$1(o,0|o[Ge],((d,g)=>{f(d,g)})):f(e,zs(o,e,h))}}}}function zM(t){const e=(t=Rv(t))[0].g;if(t=t[1]){const n=mp(t),i=so(Nu,dp,pp,t).T;return(s,r,o)=>e(s,r,o,i,n)}return e}function Uu(t,e,n){t[e]=n.h}function Ou(t,e,n,i){let s,r;const o=n.h;t[e]=(a,l,c)=>o(a,l,c,r||(r=so(Fu,Uu,Ou,i).T),s||(s=Pv(i)))}function Pv(t){let e=t[_0];if(!e){const n=so(Fu,Uu,Ou,t);e=(i,s)=>Iv(i,s,n),t[_0]=e}return e}function Iv(t,e,n){$1(t,0|t[Ge],((i,s)=>{if(s!=null){var r=(function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var c=(l=Rv(l))[0].h;if(l=l[1]){const u=Pv(l),h=so(Fu,Uu,Ou,l).T;l=o.ma?Av(h,u):(f,d,g)=>c(f,d,g,h,u)}else l=c;return o[a]=l}})(n,i);r?r(e,s,i):i<500||Xo(vf,3)}})),(t=wu(t))&&Wc(t,((i,s,r)=>{for(Ko(e,e.g.end()),i=0;i<r.length;i++)Ko(e,Gd(r[i])||new Uint8Array(0))}))}const VM=hi(0);function ga(t,e){if(Array.isArray(e)){var n=0|e[Ge];if(4&n)return e;for(var i=0,s=0;i<e.length;i++){const r=t(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),(t=-1537&(5|n))!==n&&_n(e,t),2&t&&Object.freeze(e),e}}function Un(t,e,n){return new ma(t,e,n)}function _a(t,e,n){return new ma(t,e,n)}function On(t,e,n){pn(t,0|t[Ge],e,n,la(0|t[Ge]))}var WM=Lu((function(t,e,n,i,s){if(t.h!==2)return!1;if(t=ki(t=wl(t,Vr([void 0,void 0],i),s)),s=la(i=0|e[Ge]),2&i)throw Error();let r=zs(e,n,s);if(r instanceof Hs)(2&r.J)!=0?(r=r.V(),r.push(t),pn(e,i,n,r,s)):r.Ma(t);else if(Array.isArray(r)){var o=0|r[Ge];8192&o||_n(r,o|=8192),2&o&&(r=uv(r),pn(e,i,n,r,s)),r.push(t)}else pn(e,i,n,al([t]),s);return!0}),(function(t,e,n,i,s){if(e instanceof Hs)e.forEach(((r,o)=>{$c(t,n,Vr([o,r],i),s)}));else if(Array.isArray(e)){for(let r=0;r<e.length;r++){const o=e[r];Array.isArray(o)&&$c(t,n,Vr(o,i),s)}al(e)}}));function Dv(t,e,n){(e=rs(e))!=null&&(Ri(t,n,5),t=t.g,zd(e),op(t))}function Lv(t,e,n){if(e=(function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(El(64,i));if(bl(i)){if(s==="string")return tv(i);if(s==="number")return Xd(i)}})(e),e!=null&&(typeof e=="string"&&g0(e),e!=null))switch(Ri(t,n,0),typeof e){case"number":t=t.g,$o(e),ko(t,Ht,on);break;case"bigint":n=BigInt.asUintN(64,e),n=new Mf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ko(t.g,n.h,n.g);break;default:n=g0(e),ko(t.g,n.h,n.g)}}function Fv(t,e,n){(e=ca(e))!=null&&e!=null&&(Ri(t,n,0),Pu(t.g,e))}function Nv(t,e,n){(e=J1(e))!=null&&(Ri(t,n,0),t.g.g.push(e?1:0))}function Uv(t,e,n){(e=wn(e))!=null&&Iu(t,n,B1(e))}function Ov(t,e,n,i,s){$c(t,n,Cv(e,i),s)}function Bv(t,e,n){(e=e==null||typeof e=="string"||e instanceof us?e:void 0)!=null&&Iu(t,n,np(e,!0).buffer)}function kv(t,e,n){(e=Q1(e))!=null&&e!=null&&(Ri(t,n,0),pa(t.g,e))}function Gv(t,e,n){return(t.h===5||t.h===2)&&(e=da(e,0|e[Ge],n),t.h==2?Cu(t,jc,e):e.push(jc(t.g)),!0)}var ln=Un((function(t,e,n){return t.h===5&&(On(e,n,jc(t.g)),!0)}),Dv,Du),XM=_a(Gv,(function(t,e,n){if((e=ga(rs,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(Ri(i,s,5),i=i.g,zd(r),op(i))}}),Du),gp=_a(Gv,(function(t,e,n){if((e=ga(rs,e))!=null&&e.length){Ri(t,n,2),pa(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,zd(e[i]),op(n)}}),Du),jM=Un((function(t,e,n){return t.h===5&&(On(e,n,(t=jc(t.g))===0?void 0:t),!0)}),Dv,Du),mr=Un((function(t,e,n){return t.h!==0?t=!1:(On(e,n,ip(t.g,Z1)),t=!0),t}),Lv,Mv),gh=Un((function(t,e,n){return t.h!==0?e=!1:(On(e,n,(t=ip(t.g,Z1))===VM?void 0:t),e=!0),e}),Lv,Mv),qM=Un((function(t,e,n){return t.h!==0?t=!1:(On(e,n,ip(t.g,_M)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(vM(64,i));if(bl(i)){if(s==="string")return s=Yo(Number(i)),Kr(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(bu(i),i=ll(Ht,on))),i;if(s==="number")return(i=Yo(i))>=0&&Kr(i)||($o(i),i=K1(Ht,on)),i}})(e),e!=null&&(typeof e=="string"&&m0(e),e!=null))switch(Ri(t,n,0),typeof e){case"number":t=t.g,$o(e),ko(t,Ht,on);break;case"bigint":n=BigInt.asUintN(64,e),n=new Sf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ko(t.g,n.h,n.g);break;default:n=m0(e),ko(t.g,n.h,n.g)}}),BM),fn=Un((function(t,e,n){return t.h===0&&(On(e,n,pr(t.g)),!0)}),Fv,hp),Al=_a((function(t,e,n){return(t.h===0||t.h===2)&&(e=da(e,0|e[Ge],n),t.h==2?Cu(t,pr,e):e.push(pr(t.g)),!0)}),(function(t,e,n){if((e=ga(ca,e))!=null&&e.length){n=ap(t,n);for(let i=0;i<e.length;i++)Pu(t.g,e[i]);lp(t,n)}}),hp),Fo=Un((function(t,e,n){return t.h===0&&(On(e,n,(t=pr(t.g))===0?void 0:t),!0)}),Fv,hp),Vt=Un((function(t,e,n){return t.h===0&&(On(e,n,sp(t.g)),!0)}),Nv,Sv),qr=Un((function(t,e,n){return t.h===0&&(On(e,n,(t=sp(t.g))===!1?void 0:t),!0)}),Nv,Sv),Dn=_a((function(t,e,n){return t.h===2&&(t=rp(t),da(e,0|e[Ge],n).push(t),!0)}),(function(t,e,n){if((e=ga(wn,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&Iu(i,s,B1(r))}}),up),lr=Un((function(t,e,n){return t.h===2&&(On(e,n,(t=rp(t))===""?void 0:t),!0)}),Uv,up),Nt=Un((function(t,e,n){return t.h===2&&(On(e,n,rp(t)),!0)}),Uv,up),Mn=(function(t,e,n=cp){return new ma(t,e,n)})((function(t,e,n,i,s){return t.h===2&&(i=Vr(void 0,i),da(e,0|e[Ge],n).push(i),wl(t,i,s),!0)}),(function(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)Ov(t,e[r],n,i,s);1&(t=0|e[Ge])||_n(e,1|t)}})),kt=Lu((function(t,e,n,i,s,r){if(t.h!==2)return!1;let o=0|e[Ge];return hv(e,o,r,n,la(o)),wl(t,e=ep(e,i,n),s),!0}),Ov),Hv=Un((function(t,e,n){return t.h===2&&(On(e,n,yv(t)),!0)}),Bv,Ev),$M=_a((function(t,e,n){return(t.h===0||t.h===2)&&(e=da(e,0|e[Ge],n),t.h==2?Cu(t,ps,e):e.push(ps(t.g)),!0)}),(function(t,e,n){if((e=ga(Q1,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(Ri(i,s,0),pa(i.g,r))}}),fp),YM=Un((function(t,e,n){return t.h===0&&(On(e,n,(t=ps(t.g))===0?void 0:t),!0)}),kv,fp),Fn=Un((function(t,e,n){return t.h===0&&(On(e,n,pr(t.g)),!0)}),(function(t,e,n){(e=ca(e))!=null&&(e=parseInt(e,10),Ri(t,n,0),Pu(t.g,e))}),bv);class KM{constructor(e,n){var i=mi;this.g=e,this.h=n,this.m=Mt,this.j=Ye,this.defaultValue=void 0,this.l=i.Oa!=null?Y1:void 0}register(){Su(this)}}function xs(t,e){return new KM(t,e)}function yr(t,e){return(n,i)=>{{const r={ea:!0};i&&Object.assign(r,i),n=_v(n,void 0,void 0,r);try{const o=new t,a=o.v;mp(e)(a,n);var s=o}finally{vv(n)}}return s}}function Bu(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Iv(this.v,e,so(Fu,Uu,Ou,t)),Ko(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];n.set(a,r),r+=a.length}return e.l=[n],n}}var x0=class extends He{constructor(t){super(t)}},y0=[0,lr,Un((function(t,e,n){return t.h===2&&(On(e,n,(t=yv(t))===$r()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof He){const i=e.Ra;return void(i?(e=i(e),e!=null&&Iu(t,n,np(e,!0).buffer)):Xo(vf,3))}if(Array.isArray(e))return void Xo(vf,3)}Bv(t,e,n)}),Ev)];let _h,S0=globalThis.trustedTypes;function M0(t){var e;return _h===void 0&&(_h=(function(){let n=null;if(!S0)return n;try{const i=s=>s;n=S0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=_h)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function Gl(t,...e){if(e.length===0)return M0(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return M0(n)}var zv=[0,fn,Fn,Vt,-1,Al,Fn,-1,Vt],ZM=class extends He{constructor(t){super(t)}},Vv=[0,Vt,Nt,Vt,Fn,-1,_a((function(t,e,n){return(t.h===0||t.h===2)&&(e=da(e,0|e[Ge],n),t.h==2?Cu(t,FM,e):e.push(pr(t.g)),!0)}),(function(t,e,n){if((e=ga(ca,e))!=null&&e.length){n=ap(t,n);for(let i=0;i<e.length;i++)Pu(t.g,e[i]);lp(t,n)}}),bv),Nt,-1,[0,Vt,-1],Fn,Vt,-1],Wv=[0,3,Vt,-1,2,[0,[2],fn,kt,[0,Un((function(t,e,n){return t.h===0&&(On(e,n,ps(t.g)),!0)}),kv,fp)]],[0,Fn,Vt,Fn,Vt,Fn,Vt,Nt,-1],[0,[3,4],Nt,-1,kt,[0,fn],kt,[0,Fn]],[0]],Xv=[0,Nt,-2],E0=class extends He{constructor(t){super(t)}},jv=[0],qv=[0,fn,Vt,1,Vt,-4],mi=class extends He{constructor(t){super(t,2)}},mn={};mn[336783863]=[0,Nt,Vt,-1,fn,[0,[1,2,3,4,5,6,7,8,9],kt,jv,kt,Vv,kt,Xv,kt,qv,kt,zv,kt,[0,Nt,-2],kt,[0,Nt,Fn],kt,Wv,kt,[0,Fn,-1,Vt]],[0,Nt],Vt,[0,[1,3],[2,4],kt,[0,Al],-1,kt,[0,Dn],-1,Mn,[0,Nt,-1]],Nt];var b0=[0,gh,-1,qr,-3,gh,Al,lr,Fo,gh,-1,qr,Fo,qr,-2,lr];function Gt(t,e){Ru(t,3,e)}function vt(t,e){Ru(t,4,e)}var ei=class extends He{constructor(t){super(t,500)}o(t){return Ye(this,0,7,t)}},Ya=[-1,{}],T0=[0,Nt,1,Ya],w0=[0,Nt,Dn,Ya];function Ci(t,e){tp(t,1,ei,e)}function Wt(t,e){Ru(t,10,e)}function bt(t,e){Ru(t,15,e)}var gi=class extends He{constructor(t){super(t,500)}o(t){return Ye(this,0,1001,t)}},$v=[-500,Mn,[-500,lr,-1,Dn,-3,[-2,mn,Vt],Mn,y0,Fo,-1,T0,w0,Mn,[0,lr,qr],lr,b0,Fo,Dn,987,Dn],4,Mn,[-500,Nt,-1,[-1,{}],998,Nt],Mn,[-500,Nt,Dn,-1,[-2,{},Vt],997,Dn,-1],Fo,Mn,[-500,Nt,Dn,Ya,998,Dn],Dn,Fo,T0,w0,Mn,[0,lr,-1,Ya],Dn,-2,b0,lr,-1,qr,[0,qr,YM],978,Ya,Mn,y0];gi.prototype.g=Bu($v);var JM=yr(gi,$v),QM=class extends He{constructor(t){super(t)}},Yv=class extends He{constructor(t){super(t)}g(){return Vs(this,QM,1)}},Kv=[0,Mn,[0,fn,ln,Nt,-1]],ku=yr(Yv,Kv),eE=class extends He{constructor(t){super(t)}},tE=class extends He{constructor(t){super(t)}},vh=class extends He{constructor(t){super(t)}l(){return Mt(this,eE,2)}g(){return Vs(this,tE,5)}},Zv=yr(class extends He{constructor(t){super(t)}},[0,Dn,Al,gp,[0,Fn,[0,fn,-3],[0,ln,-3],[0,fn,-1,[0,Mn,[0,fn,-2]]],Mn,[0,ln,-1,Nt,ln]],Nt,-1,mr,Mn,[0,fn,ln],Dn,mr]),Jv=class extends He{constructor(t){super(t)}},Go=yr(class extends He{constructor(t){super(t)}},[0,Mn,[0,ln,-4]]),Qv=class extends He{constructor(t){super(t)}},Rl=yr(class extends He{constructor(t){super(t)}},[0,Mn,[0,ln,-4]]),nE=class extends He{constructor(t){super(t)}},iE=[0,fn,-1,gp,Fn],ex=class extends He{constructor(t){super(t)}};ex.prototype.g=Bu([0,ln,-4,mr]);var sE=class extends He{constructor(t){super(t)}},rE=yr(class extends He{constructor(t){super(t)}},[0,Mn,[0,1,fn,Nt,Kv],mr]),A0=class extends He{constructor(t){super(t)}},oE=class extends He{constructor(t){super(t)}na(){const t=zt(this,1,void 0,void 0,cv);return t??$r()}},aE=class extends He{constructor(t){super(t)}},tx=[1,2],lE=yr(class extends He{constructor(t){super(t)}},[0,Mn,[0,tx,kt,[0,gp],kt,[0,Hv],fn,Nt],mr]),_p=class extends He{constructor(t){super(t)}},nx=[0,Nt,fn,ln,Dn,-1],R0=class extends He{constructor(t){super(t)}},cE=[0,Vt,-1],C0=class extends He{constructor(t){super(t)}},Ac=[1,2,3,4,5,6],Yc=class extends He{constructor(t){super(t)}g(){return zt(this,1,void 0,void 0,cv)!=null}l(){return wn(zt(this,2))!=null}},Kt=class extends He{constructor(t){super(t)}g(){return J1(zt(this,2))??!1}},ix=[0,Hv,Nt,[0,fn,mr,-1],[0,qM,mr]],un=[0,ix,Vt,[0,Ac,kt,qv,kt,Vv,kt,zv,kt,jv,kt,Xv,kt,Wv],Fn],Gu=class extends He{constructor(t){super(t)}},vp=[0,un,ln,-1,fn],uE=xs(502141897,Gu);mn[502141897]=vp;var hE=yr(class extends He{constructor(t){super(t)}},[0,[0,Fn,-1,XM,$M],iE]),sx=class extends He{constructor(t){super(t)}},rx=class extends He{constructor(t){super(t)}},bf=[0,un,ln,[0,un],Vt],fE=xs(508968150,rx);mn[508968150]=[0,un,vp,bf,ln,[0,[0,ix]]],mn[508968149]=bf;var ho=class extends He{constructor(t){super(t)}l(){return Mt(this,_p,2)}g(){It(this,2)}},ox=[0,un,nx];mn[478825465]=ox;var dE=class extends He{constructor(t){super(t)}},ax=class extends He{constructor(t){super(t)}},xp=class extends He{constructor(t){super(t)}},yp=class extends He{constructor(t){super(t)}},lx=class extends He{constructor(t){super(t)}},P0=[0,un,[0,un],ox,-1],cx=[0,un,ln,fn],Sp=[0,un,ln],ux=[0,un,cx,Sp,ln],pE=xs(479097054,lx);mn[479097054]=[0,un,ux,P0],mn[463370452]=P0,mn[464864288]=cx;var mE=xs(462713202,yp);mn[462713202]=ux,mn[474472470]=Sp;var gE=class extends He{constructor(t){super(t)}},hx=class extends He{constructor(t){super(t)}},fx=class extends He{constructor(t){super(t)}},dx=class extends He{constructor(t){super(t)}},Mp=[0,un,ln,-1,fn],Tf=[0,un,ln,Vt];dx.prototype.g=Bu([0,un,Sp,[0,un],vp,bf,Mp,Tf]);var px=class extends He{constructor(t){super(t)}},_E=xs(456383383,px);mn[456383383]=[0,un,nx];var mx=class extends He{constructor(t){super(t)}},vE=xs(476348187,mx);mn[476348187]=[0,un,cE];var gx=class extends He{constructor(t){super(t)}},I0=class extends He{constructor(t){super(t)}},_x=[0,Fn,-1],xE=xs(458105876,class extends He{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ge];return t=fi(this,n),e=(function(i,s,r,o){var a=I0;!o&&ha(i)&&(r=0|(s=i.v)[Ge]);var l=zs(s,2);if(i=!1,l==null){if(o)return h0();l=[]}else if(l.constructor===Hs){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Ge])):l=[];if(o){if(!l.length)return h0();i||(i=!0,Ml(l))}else i&&(i=!1,al(l),l=uv(l));return!i&&32&r&&Sl(l,32),r=pn(s,r,2,o=new Hs(l,a,SM,void 0)),i||io(s,r),o})(this,e,n,t),!t&&I0&&(e.ra=!0),e}});mn[458105876]=[0,_x,WM,[!0,mr,[0,Nt,-1,Dn]],[0,Al,Vt,Fn]];var Ep=class extends He{constructor(t){super(t)}},vx=xs(458105758,Ep);mn[458105758]=[0,un,Nt,_x];var xh=class extends He{constructor(t){super(t)}},D0=[0,jM,-1,qr],yE=class extends He{constructor(t){super(t)}},xx=class extends He{constructor(t){super(t)}},wf=[1,2];xx.prototype.g=Bu([0,wf,kt,D0,kt,[0,Mn,D0]]);var yx=class extends He{constructor(t){super(t)}},SE=xs(443442058,yx);mn[443442058]=[0,un,Nt,fn,ln,Dn,-1,Vt,ln],mn[514774813]=Mp;var Sx=class extends He{constructor(t){super(t)}},ME=xs(516587230,Sx);function Af(t,e){return e=e?e.clone():new _p,t.displayNamesLocale!==void 0?It(e,1,Tl(t.displayNamesLocale)):t.displayNamesLocale===void 0&&It(e,1),t.maxResults!==void 0?Ws(e,2,t.maxResults):"maxResults"in t&&It(e,2),t.scoreThreshold!==void 0?Xe(e,3,t.scoreThreshold):"scoreThreshold"in t&&It(e,3),t.categoryAllowlist!==void 0?Xc(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&It(e,4),t.categoryDenylist!==void 0?Xc(e,5,t.categoryDenylist):"categoryDenylist"in t&&It(e,5),e}function Mx(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function bp(t,e=-1,n=""){return{categories:t.map((i=>({index:wi(i,1)??0??-1,score:tn(i,2)??0,categoryName:wn(zt(i,3))??""??"",displayName:wn(zt(i,4))??""??""}))),headIndex:e,headName:n}}function EE(t){const e={classifications:Vs(t,sE,1).map((n=>{var i;return bp(((i=Mt(n,Yv,4))==null?void 0:i.g())??[],wi(n,2)??0,wn(zt(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(xf(n)?n=Number(n):(n=El(64,n),n=xf(n)?Number(n):String(n)),n):bl(n)?typeof n=="number"?Xd(n):tv(n):void 0})(zt(t,2,void 0,void 0,Vc))!=null&&(e.timestampMs=Mx(zt(t,2,void 0,void 0,Vc)??av)),e}function Ex(t){var o,a;var e=Br(t,3,rs,Or()),n=Br(t,2,ca,Or()),i=Br(t,1,wn,Or()),s=Br(t,9,wn,Or());const r={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)r.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:s[l]??""});if((e=(o=Mt(t,vh,4))==null?void 0:o.l())&&(r.boundingBox={originX:wi(e,1,Js)??0,originY:wi(e,2,Js)??0,width:wi(e,3,Js)??0,height:wi(e,4,Js)??0,angle:0}),(a=Mt(t,vh,4))==null?void 0:a.g().length)for(const l of Mt(t,vh,4).g())r.keypoints.push({x:zt(l,1,void 0,Js,rs)??0,y:zt(l,2,void 0,Js,rs)??0,score:zt(l,4,void 0,Js,rs)??0,label:wn(zt(l,3,void 0,Js))??""});return r}function Hu(t){const e=[];for(const n of Vs(t,Qv,1))e.push({x:tn(n,1)??0,y:tn(n,2)??0,z:tn(n,3)??0,visibility:tn(n,4)??0});return e}function Ka(t){const e=[];for(const n of Vs(t,Jv,1))e.push({x:tn(n,1)??0,y:tn(n,2)??0,z:tn(n,3)??0,visibility:tn(n,4)??0});return e}function L0(t){return Array.from(t,(e=>e>127?e-256:e))}function F0(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let Hl;mn[516587230]=[0,un,Mp,Tf,ln],mn[518928384]=Tf;const bE=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function bx(t){if(t)return!0;if(Hl===void 0)try{await WebAssembly.instantiate(bE),Hl=!0}catch{Hl=!1}return Hl}async function zl(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await bx(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Lo=class{};function Tx(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function N0(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;await self.import(t.toString())}}function wx(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ve(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function U0(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=wx(e);return!t.l||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function O0(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const s of i)t.i._free(s);t.i._free(e)}function $i(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Qs(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Lo.forVisionTasks=function(t,e=!1){return zl("vision",t??Gl``,e)},Lo.forTextTasks=function(t,e=!1){return zl("text",t??Gl``,e)},Lo.forGenAiTasks=function(t,e=!1){return zl("genai",t??Gl``,e)},Lo.forAudioTasks=function(t,e=!1){return zl("audio",t??Gl``,e)},Lo.isSimdSupported=function(t=!1){return bx(t)};async function TE(t,e,n,i){return t=await(async(s,r,o,a,l)=>{if(r&&await N0(r),!self.ModuleFactory||o&&(await N0(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await t.o(i),t}function yh(t,e){const n=Mt(t.baseOptions,Yc,1)||new Yc;typeof e=="string"?(It(n,2,Tl(e)),It(n,1)):e instanceof Uint8Array&&(It(n,1,Hd(e,!1)),It(n,2)),Ye(t.baseOptions,0,1,n)}function B0(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Ne(t,e){t.C=Math.max(t.C,e)}function zu(t,e){t.B=new ei,di(t.B,2,"PassThroughCalculator"),Gt(t.B,"free_memory"),vt(t.B,"free_memory_unused_out"),Wt(e,"free_memory"),Ci(e,t.B)}function Zo(t,e){Gt(t.B,e),vt(t.B,e+"_unused_out")}function Vu(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Rf=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,s,r,o,a;if(e){const l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=Mt(this.baseOptions,Yc,1))!=null&&s.g()||(r=Mt(this.baseOptions,Yc,1))!=null&&r.l()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(c,u){let h=Mt(c.baseOptions,C0,3);if(!h){var f=h=new C0,d=new E0;$a(f,4,Ac,d)}"delegate"in u&&(u.delegate==="GPU"?(u=h,f=new ZM,$a(u,2,Ac,f)):(u=h,f=new E0,$a(u,4,Ac,f))),Ye(c.baseOptions,0,3,h)})(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then((c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)})).then((c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),yh(this,"/model.dat"),this.m(),this.L()}));if(l.modelAssetBuffer instanceof Uint8Array)yh(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return(async function(c){const u=[];for(var h=0;;){const{done:f,value:d}=await c.read();if(f)break;u.push(d),h+=d.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];c=new Uint8Array(h),h=0;for(const f of u)c.set(f,h),h+=f.length;return c})(l.modelAssetBuffer).then((c=>{yh(this,c),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=JM(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,B0(this)}finishProcessing(){this.g.finishProcessing(),B0(this)}close(){this.B=void 0,this.g.closeGraph()}};function hr(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Rf.prototype.close=Rf.prototype.close;class wE{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function k0(t,e,n){const i=t.g;if(n=hr(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function G0(t,e){const n=t.g,i=hr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=hr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=hr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new wE(n,i,s,r)}function Tp(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function AE(t,e,n,i){return Tp(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=G0(t,!0)),n=t.u):(t.A||(t.A=G0(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function Ax(t,e,n){return Tp(t,e),t=hr(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Rx(t,e,n){Tp(t,e),t.B||(t.B=hr(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function RE(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Cx=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=hr(t.createProgram(),"Failed to create WebGL program"),this.X=k0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=k0(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ls(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Cf(t){var e=Ls(t,1);if(!e){if(e=Ls(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Jo(t);var n=wp(t);if(Rx(n,i,Px(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Px(t){let e=Ls(t,2);if(!e){const n=Jo(t);e=Dx(t);const i=Cf(t),s=Ix(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),Pf(t)}return e}function Jo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=hr(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Ix(t){if(t=Jo(t),!Vl)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Vl=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Vl=t.R16F}return Vl}function wp(t){return t.l||(t.l=new Cx),t.l}function Dx(t){const e=Jo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ls(t,2);return n||(n=Ax(wp(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Pf(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Vl,Sn=class{constructor(t,e,n,i,s,r,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--H0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ls(this,0)}ka(){return!!Ls(this,1)}R(){return!!Ls(this,2)}ja(){return(e=Ls(t=this,0))||(e=Cf(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Cf(this)}N(){return Px(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Jo(this),s=wp(this);i.activeTexture(i.TEXTURE1),n=Ax(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=Ix(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Rx(s,i,n),AE(s,i,!1,(()=>{Dx(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Pf(this)})),RE(s),Pf(this)}}t.push(n)}return new Sn(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Jo(this).deleteTexture(Ls(this,2)),H0=-1}};Sn.prototype.close=Sn.prototype.close,Sn.prototype.clone=Sn.prototype.clone,Sn.prototype.getAsWebGLTexture=Sn.prototype.N,Sn.prototype.getAsFloat32Array=Sn.prototype.ia,Sn.prototype.getAsUint8Array=Sn.prototype.ja,Sn.prototype.hasWebGLTexture=Sn.prototype.R,Sn.prototype.hasFloat32Array=Sn.prototype.ka,Sn.prototype.hasUint8Array=Sn.prototype.Fa;var H0=250;function zi(...t){return t.map((([e,n])=>({start:e,end:n})))}const CE=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((z0=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Tx()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ve(this,i||"input_audio",(r=>{Ve(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){$i(this,"__graph_config__",(e=>{t(e)})),Ve(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){const r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),Ve(this,i,(o=>{this.i._addAudioToInputStream(this.g,e,n,o,s)}))}addGpuBufferToStream(t,e,n){Ve(this,e,(i=>{const[s,r]=U0(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(t,e,n){Ve(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Ve(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Ve(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Ve(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Ve(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Ve(this,e,(i=>{Ve(this,t,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(t,e,n){Ve(this,e,(i=>{O0(this,Object.keys(t),(s=>{O0(this,Object.values(t),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Ve(this,n,(s=>{Ve(this,e,(r=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(t,e){Ve(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Ve(this,e,(i=>{const s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(t,e,n){Ve(this,e,(i=>{const s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(t,e,n){Ve(this,e,(i=>{const s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(t,e,n){Ve(this,e,(i=>{const s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(t,e,n){Ve(this,e,(i=>{const s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(t,e,n){Ve(this,e,(i=>{const s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ve(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(t,e){Ve(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Ve(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Ve(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Ve(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Ve(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Ve(this,e,(n=>{Ve(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Ve(this,n,(i=>{Ve(this,e,(s=>{const r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(t,e){Ve(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Ve(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Ve(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Ve(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Ve(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Ve(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ve(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){$i(this,t,e),Ve(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){$i(this,t,e),Ve(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){$i(this,t,e),Ve(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){$i(this,t,e),Ve(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){$i(this,t,e),Ve(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){$i(this,t,e),Ve(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){$i(this,t,e),Ve(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Qs(this,t,e),Ve(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),$i(this,t,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)})),Ve(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends z0{get ga(){return this.i}pa(t,e,n){Ve(this,e,(i=>{const[s,r]=U0(this,t,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)}))}Z(t,e){$i(this,t,e),Ve(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){Qs(this,t,e),Ve(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var z0,Vi=class extends CE{};async function yt(t,e,n){return(async function(i,s,r,o){return TE(i,s,r,o)})(t,n.canvas??(Tx()?void 0:document.createElement("canvas")),e,n)}function Lx(t,e,n,i){if(t.U){const r=new ex;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Xe(r,1,(s.left+s.right)/2),Xe(r,2,(s.top+s.bottom)/2),Xe(r,4,s.right-s.left),Xe(r,3,s.bottom-s.top)}else Xe(r,1,.5),Xe(r,2,.5),Xe(r,4,1),Xe(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Xe(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=wx(e);n=tn(r,3)*a/o,s=tn(r,4)*o/a,Xe(r,4,n),Xe(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Wi(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Lx(t,e,n,t.C+1)}function ys(t,e,n,i){var s;if(!((s=t.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Lx(t,e,n,i)}function Qo(t,e,n,i){var s=e.data;const r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return t=new Sn([s],n,!1,t.g.i.canvas,t.P,r,e),i?t.clone():t}var pi=class extends Rf{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new Cx}l(t,e=!0){if("runningMode"in t&&It(this.baseOptions,2,cl(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};pi.prototype.close=pi.prototype.close;var xi=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ye(t=this.h=new Gu,0,1,e=new Kt),Xe(this.h,2,.5),Xe(this.h,3,.3)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Xe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Xe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Wi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},ys(this,t,n,e),this.j}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect_in"),bt(t,"detections");const e=new mi;vs(e,uE,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect_in"),vt(n,"DETECTIONS:detections"),n.o(e),Ci(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Zv(r),this.j.detections.push(Ex(i));Ne(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xi.prototype.detectForVideo=xi.prototype.G,xi.prototype.detect=xi.prototype.F,xi.prototype.setOptions=xi.prototype.o,xi.createFromModelPath=async function(t,e){return yt(xi,t,{baseOptions:{modelAssetPath:e}})},xi.createFromModelBuffer=function(t,e){return yt(xi,t,{baseOptions:{modelAssetBuffer:e}})},xi.createFromOptions=function(t,e){return yt(xi,t,e)};var Ap=zi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Rp=zi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Cp=zi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Fx=zi([474,475],[475,476],[476,477],[477,474]),Pp=zi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ip=zi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Nx=zi([469,470],[470,471],[471,472],[472,469]),Dp=zi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Ux=[...Ap,...Rp,...Cp,...Pp,...Ip,...Dp],Ox=zi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function V0(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var jt=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ye(t=this.h=new rx,0,1,e=new Kt),this.A=new sx,Ye(this.h,0,3,this.A),this.u=new Gu,Ye(this.h,0,2,this.u),Ws(this.u,4,1),Xe(this.u,2,.5),Xe(this.A,2,.5),Xe(this.h,4,.5)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return"numFaces"in t&&Ws(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Xe(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Xe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Xe(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return V0(this),Wi(this,t,e),this.j}G(t,e,n){return V0(this),ys(this,t,n,e),this.j}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect"),bt(t,"face_landmarks");const e=new mi;vs(e,fE,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Ci(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=Rl(r),this.j.faceLandmarks.push(Hu(i));Ne(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Ne(this,i)})),this.outputFaceBlendshapes&&(bt(t,"blendshapes"),vt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=ku(r),this.j.faceBlendshapes.push(bp(i.g()??[]));Ne(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Ne(this,i)}))),this.outputFacialTransformationMatrixes&&(bt(t,"face_geometry"),vt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=Mt(i=hE(r),nE,2))&&this.j.facialTransformationMatrixes.push({rows:wi(i,1)??0??0,columns:wi(i,2)??0??0,data:Br(i,3,rs,Or()).slice()??[]});Ne(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Ne(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};jt.prototype.detectForVideo=jt.prototype.G,jt.prototype.detect=jt.prototype.F,jt.prototype.setOptions=jt.prototype.o,jt.createFromModelPath=function(t,e){return yt(jt,t,{baseOptions:{modelAssetPath:e}})},jt.createFromModelBuffer=function(t,e){return yt(jt,t,{baseOptions:{modelAssetBuffer:e}})},jt.createFromOptions=function(t,e){return yt(jt,t,e)},jt.FACE_LANDMARKS_LIPS=Ap,jt.FACE_LANDMARKS_LEFT_EYE=Rp,jt.FACE_LANDMARKS_LEFT_EYEBROW=Cp,jt.FACE_LANDMARKS_LEFT_IRIS=Fx,jt.FACE_LANDMARKS_RIGHT_EYE=Pp,jt.FACE_LANDMARKS_RIGHT_EYEBROW=Ip,jt.FACE_LANDMARKS_RIGHT_IRIS=Nx,jt.FACE_LANDMARKS_FACE_OVAL=Dp,jt.FACE_LANDMARKS_CONTOURS=Ux,jt.FACE_LANDMARKS_TESSELATION=Ox;var Lp=zi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function W0(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function X0(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function j0(t,e=!0){const n=[];for(const s of t){var i=ku(s);t=[];for(const r of i.g())i=e&&wi(r,1)!=null?wi(r,1)??0:-1,t.push({score:tn(r,2)??0,index:i,categoryName:wn(zt(r,3))??""??"",displayName:wn(zt(r,4))??""??""});n.push(t)}return n}var ni=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ye(t=this.j=new lx,0,1,e=new Kt),this.u=new yp,Ye(this.j,0,2,this.u),this.D=new xp,Ye(this.u,0,3,this.D),this.A=new ax,Ye(this.u,0,2,this.A),this.h=new dE,Ye(this.j,0,3,this.h),Xe(this.A,2,.5),Xe(this.u,4,.5),Xe(this.D,2,.5)}get baseOptions(){return Mt(this.j,Kt,1)}set baseOptions(t){Ye(this.j,0,1,t)}o(t){var s,r,o,a;if(Ws(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Xe(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Xe(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Xe(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new ho,n=e,i=Af(t.cannedGesturesClassifierOptions,(s=Mt(this.h,ho,3))==null?void 0:s.l());Ye(n,0,2,i),Ye(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((r=Mt(this.h,ho,3))==null||r.g());return t.customGesturesClassifierOptions?(Ye(n=e=new ho,0,2,i=Af(t.customGesturesClassifierOptions,(o=Mt(this.h,ho,4))==null?void 0:o.l())),Ye(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=Mt(this.h,ho,4))==null||a.g()),this.l(t)}Ha(t,e){return W0(this),Wi(this,t,e),X0(this)}Ia(t,e,n){return W0(this),ys(this,t,n,e),X0(this)}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect"),bt(t,"hand_gestures"),bt(t,"hand_landmarks"),bt(t,"world_hand_landmarks"),bt(t,"handedness");const e=new mi;vs(e,pE,this.j);const n=new ei;di(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"HAND_GESTURES:hand_gestures"),vt(n,"LANDMARKS:hand_landmarks"),vt(n,"WORLD_LANDMARKS:world_hand_landmarks"),vt(n,"HANDEDNESS:handedness"),n.o(e),Ci(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=Rl(r);const o=[];for(const a of Vs(i,Qv,1))o.push({x:tn(a,1)??0,y:tn(a,2)??0,z:tn(a,3)??0,visibility:tn(a,4)??0});this.landmarks.push(o)}Ne(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ne(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=Go(r);const o=[];for(const a of Vs(i,Jv,1))o.push({x:tn(a,1)??0,y:tn(a,2)??0,z:tn(a,3)??0,visibility:tn(a,4)??0});this.worldLandmarks.push(o)}Ne(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ne(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...j0(i,!1)),Ne(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Ne(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...j0(i)),Ne(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function q0(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}ni.prototype.recognizeForVideo=ni.prototype.Ia,ni.prototype.recognize=ni.prototype.Ha,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(t,e){return yt(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return yt(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return yt(ni,t,e)},ni.HAND_CONNECTIONS=Lp;var Yn=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ye(t=this.h=new yp,0,1,e=new Kt),this.u=new xp,Ye(this.h,0,3,this.u),this.j=new ax,Ye(this.h,0,2,this.j),Ws(this.j,3,1),Xe(this.j,2,.5),Xe(this.u,2,.5),Xe(this.h,4,.5)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return"numHands"in t&&Ws(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Xe(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Xe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Xe(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Wi(this,t,e),q0(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ys(this,t,n,e),q0(this)}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect"),bt(t,"hand_landmarks"),bt(t,"world_hand_landmarks"),bt(t,"handedness");const e=new mi;vs(e,mE,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"LANDMARKS:hand_landmarks"),vt(n,"WORLD_LANDMARKS:world_hand_landmarks"),vt(n,"HANDEDNESS:handedness"),n.o(e),Ci(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=Rl(r),this.landmarks.push(Hu(i));Ne(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ne(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=Go(r),this.worldLandmarks.push(Ka(i));Ne(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ne(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const l of i){i=ku(l);const c=[];for(const u of i.g())c.push({score:tn(u,2)??0,index:wi(u,1)??0??-1,categoryName:wn(zt(u,3))??""??"",displayName:wn(zt(u,4))??""??""});a.push(c)}o.call(r,...a),Ne(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Yn.prototype.detectForVideo=Yn.prototype.G,Yn.prototype.detect=Yn.prototype.F,Yn.prototype.setOptions=Yn.prototype.o,Yn.createFromModelPath=function(t,e){return yt(Yn,t,{baseOptions:{modelAssetPath:e}})},Yn.createFromModelBuffer=function(t,e){return yt(Yn,t,{baseOptions:{modelAssetBuffer:e}})},Yn.createFromOptions=function(t,e){return yt(Yn,t,e)},Yn.HAND_CONNECTIONS=Lp;var Bx=zi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function $0(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Y0(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Vu(t)}}function Wl(t,e){t=Rl(t),e.push(Hu(t))}var Bt=class extends pi{constructor(t,e){super(new Vi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ye(t=this.j=new dx,0,1,e=new Kt),this.I=new xp,Ye(this.j,0,2,this.I),this.W=new gE,Ye(this.j,0,3,this.W),this.u=new Gu,Ye(this.j,0,4,this.u),this.O=new sx,Ye(this.j,0,5,this.O),this.A=new hx,Ye(this.j,0,6,this.A),this.M=new fx,Ye(this.j,0,7,this.M),Xe(this.u,2,.5),Xe(this.u,3,.3),Xe(this.O,2,.5),Xe(this.A,2,.5),Xe(this.A,3,.3),Xe(this.M,2,.5),Xe(this.I,2,.5)}get baseOptions(){return Mt(this.j,Kt,1)}set baseOptions(t){Ye(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Xe(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Xe(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Xe(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Xe(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Xe(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Xe(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Xe(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,$0(this),Wi(this,t,i),Y0(this)}G(t,e,n,i){const s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,$0(this),ys(this,t,s,e),Y0(this)}m(){var t=new gi;Wt(t,"input_frames_image"),bt(t,"pose_landmarks"),bt(t,"pose_world_landmarks"),bt(t,"face_landmarks"),bt(t,"left_hand_landmarks"),bt(t,"left_hand_world_landmarks"),bt(t,"right_hand_landmarks"),bt(t,"right_hand_world_landmarks");const e=new mi,n=new x0;di(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))It(s,2,Au(r,0,ul));else{if(!(typeof r=="string"||r instanceof us||kd(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ar(s,2,Hd(r,!1),$r())}})(n,this.j.g());const i=new ei;di(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),tp(i,8,x0,n),Gt(i,"IMAGE:input_frames_image"),vt(i,"POSE_LANDMARKS:pose_landmarks"),vt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),vt(i,"FACE_LANDMARKS:face_landmarks"),vt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),vt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),vt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),vt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Ci(t,i),zu(this,t),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Wl(s,this.h.poseLandmarks),Ne(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{Ne(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=Go(s),o.push(Ka(s)),Ne(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{Ne(this,s)})),this.outputPoseSegmentationMasks&&(vt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Zo(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Qo(this,s,!0,!this.D)],Ne(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],Ne(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Wl(s,this.h.faceLandmarks),Ne(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{Ne(this,s)})),this.outputFaceBlendshapes&&(bt(t,"extra_blendshapes"),vt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=ku(s),o.push(bp(s.g()??[]))),Ne(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{Ne(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Wl(s,this.h.leftHandLandmarks),Ne(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{Ne(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=Go(s),o.push(Ka(s)),Ne(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{Ne(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Wl(s,this.h.rightHandLandmarks),Ne(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{Ne(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=Go(s),o.push(Ka(s)),Ne(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{Ne(this,s)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Bt.prototype.detectForVideo=Bt.prototype.G,Bt.prototype.detect=Bt.prototype.F,Bt.prototype.setOptions=Bt.prototype.o,Bt.createFromModelPath=function(t,e){return yt(Bt,t,{baseOptions:{modelAssetPath:e}})},Bt.createFromModelBuffer=function(t,e){return yt(Bt,t,{baseOptions:{modelAssetBuffer:e}})},Bt.createFromOptions=function(t,e){return yt(Bt,t,e)},Bt.HAND_CONNECTIONS=Lp,Bt.POSE_CONNECTIONS=Bx,Bt.FACE_LANDMARKS_LIPS=Ap,Bt.FACE_LANDMARKS_LEFT_EYE=Rp,Bt.FACE_LANDMARKS_LEFT_EYEBROW=Cp,Bt.FACE_LANDMARKS_LEFT_IRIS=Fx,Bt.FACE_LANDMARKS_RIGHT_EYE=Pp,Bt.FACE_LANDMARKS_RIGHT_EYEBROW=Ip,Bt.FACE_LANDMARKS_RIGHT_IRIS=Nx,Bt.FACE_LANDMARKS_FACE_OVAL=Dp,Bt.FACE_LANDMARKS_CONTOURS=Ux,Bt.FACE_LANDMARKS_TESSELATION=Ox;var yi=class extends pi{constructor(t,e){super(new Vi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ye(t=this.h=new px,0,1,e=new Kt)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return Ye(this.h,0,2,Af(t,Mt(this.h,_p,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Wi(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},ys(this,t,n,e),this.j}m(){var t=new gi;Wt(t,"input_image"),Wt(t,"norm_rect"),bt(t,"classifications");const e=new mi;vs(e,_E,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Gt(n,"IMAGE:input_image"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"CLASSIFICATIONS:classifications"),n.o(e),Ci(t,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=EE(rE(i)),Ne(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yi.prototype.classifyForVideo=yi.prototype.ta,yi.prototype.classify=yi.prototype.sa,yi.prototype.setOptions=yi.prototype.o,yi.createFromModelPath=function(t,e){return yt(yi,t,{baseOptions:{modelAssetPath:e}})},yi.createFromModelBuffer=function(t,e){return yt(yi,t,{baseOptions:{modelAssetBuffer:e}})},yi.createFromOptions=function(t,e){return yt(yi,t,e)};var ii=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!0),this.h=new mx,this.embeddings={embeddings:[]},Ye(t=this.h,0,1,e=new Kt)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){var e=this.h,n=Mt(this.h,R0,2);return n=n?n.clone():new R0,t.l2Normalize!==void 0?It(n,1,cl(t.l2Normalize)):"l2Normalize"in t&&It(n,1),t.quantize!==void 0?It(n,2,cl(t.quantize)):"quantize"in t&&It(n,2),Ye(e,0,2,n),this.l(t)}za(t,e){return Wi(this,t,e),this.embeddings}Aa(t,e,n){return ys(this,t,n,e),this.embeddings}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect"),bt(t,"embeddings_out");const e=new mi;vs(e,vE,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"EMBEDDINGS:embeddings_out"),n.o(e),Ci(t,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=lE(i),this.embeddings=(function(r){return{embeddings:Vs(r,aE,1).map((o=>{var c,u;const a={headIndex:wi(o,3)??0??-1,headName:wn(zt(o,4))??""??""};var l=o.v;return fv(l,0|l[Ge],A0,mh(o,1))!==void 0?(o=Br(o=Mt(o,A0,mh(o,1),void 0),1,rs,Or()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=((u=(c=Mt(o,oE,mh(o,2),void 0))==null?void 0:c.na())==null?void 0:u.h())??l),a})),timestampMs:Mx(zt(r,2,void 0,void 0,Vc)??av)}})(i),Ne(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ii.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=F0(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=F0(L0(t.quantizedEmbedding),L0(e.quantizedEmbedding))}return t},ii.prototype.embedForVideo=ii.prototype.Aa,ii.prototype.embed=ii.prototype.za,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(t,e){return yt(ii,t,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(t,e){return yt(ii,t,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(t,e){return yt(ii,t,e)};var If=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function PE(t){var n,i;const e=(function(s){return Vs(s,ei,1)})(t.ca()).filter((s=>(wn(zt(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=Mt(e[0],mi,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach(((s,r)=>{t.u[Number(r)]=wn(zt(s,1))??""}))}function K0(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Z0(t){try{const e=new If(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Vu(t)}}If.prototype.close=If.prototype.close;var $n=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Ep,this.A=new gx,Ye(this.h,0,3,this.A),Ye(t=this.h,0,1,e=new Kt)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?It(this.h,2,Tl(t.displayNamesLocale)):"displayNamesLocale"in t&&It(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){PE(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,K0(this),Wi(this,t,i),Z0(this)}La(t,e,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,K0(this),ys(this,t,s,e),Z0(this)}Da(){return this.u}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect");const e=new mi;vs(e,vx,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect"),n.o(e),Ci(t,n),zu(this,t),this.outputConfidenceMasks&&(bt(t,"confidence_masks"),vt(n,"CONFIDENCE_MASKS:confidence_masks"),Zo(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Qo(this,r,!0,!this.j))),Ne(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ne(this,i)}))),this.outputCategoryMask&&(bt(t,"category_mask"),vt(n,"CATEGORY_MASK:category_mask"),Zo(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=Qo(this,i,!1,!this.j),Ne(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ne(this,i)}))),bt(t,"quality_scores"),vt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Ne(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$n.prototype.getLabels=$n.prototype.Da,$n.prototype.segmentForVideo=$n.prototype.La,$n.prototype.segment=$n.prototype.segment,$n.prototype.setOptions=$n.prototype.o,$n.createFromModelPath=function(t,e){return yt($n,t,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(t,e){return yt($n,t,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(t,e){return yt($n,t,e)};var Df=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};Df.prototype.close=Df.prototype.close;var Yi=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Ep,this.u=new gx,Ye(this.h,0,3,this.u),Ye(t=this.h,0,1,e=new Kt)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new xx,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new xh;ar(r,3,cl(!0),!1),ar(r,1,Ua(e.keypoint.x),0),ar(r,2,Ua(e.keypoint.y),0),$a(i,1,wf,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new yE;for(r of e.scribble)ar(e=new xh,3,cl(!0),!1),ar(e,1,Ua(r.x),0),ar(e,2,Ua(r.y),0),tp(a,1,xh,e);$a(i,2,wf,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Wi(this,t,s);e:{try{const a=new Df(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break e}this.j(a)}finally{Vu(this)}o=void 0}return o}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"roi_in"),Wt(t,"norm_rect_in");const e=new mi;vs(e,vx,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Gt(n,"IMAGE:image_in"),Gt(n,"ROI:roi_in"),Gt(n,"NORM_RECT:norm_rect_in"),n.o(e),Ci(t,n),zu(this,t),this.outputConfidenceMasks&&(bt(t,"confidence_masks"),vt(n,"CONFIDENCE_MASKS:confidence_masks"),Zo(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Qo(this,r,!0,!this.j))),Ne(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ne(this,i)}))),this.outputCategoryMask&&(bt(t,"category_mask"),vt(n,"CATEGORY_MASK:category_mask"),Zo(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=Qo(this,i,!1,!this.j),Ne(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ne(this,i)}))),bt(t,"quality_scores"),vt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Ne(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Yi.prototype.segment=Yi.prototype.segment,Yi.prototype.setOptions=Yi.prototype.o,Yi.createFromModelPath=function(t,e){return yt(Yi,t,{baseOptions:{modelAssetPath:e}})},Yi.createFromModelBuffer=function(t,e){return yt(Yi,t,{baseOptions:{modelAssetBuffer:e}})},Yi.createFromOptions=function(t,e){return yt(Yi,t,e)};var Si=class extends pi{constructor(t,e){super(new Vi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ye(t=this.h=new yx,0,1,e=new Kt)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?It(this.h,2,Tl(t.displayNamesLocale)):"displayNamesLocale"in t&&It(this.h,2),t.maxResults!==void 0?Ws(this.h,3,t.maxResults):"maxResults"in t&&It(this.h,3),t.scoreThreshold!==void 0?Xe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&It(this.h,4),t.categoryAllowlist!==void 0?Xc(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&It(this.h,5),t.categoryDenylist!==void 0?Xc(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&It(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Wi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},ys(this,t,n,e),this.j}m(){var t=new gi;Wt(t,"input_frame_gpu"),Wt(t,"norm_rect"),bt(t,"detections");const e=new mi;vs(e,SE,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Gt(n,"IMAGE:input_frame_gpu"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"DETECTIONS:detections"),n.o(e),Ci(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Zv(r),this.j.detections.push(Ex(i));Ne(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Ne(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Si.prototype.detectForVideo=Si.prototype.G,Si.prototype.detect=Si.prototype.F,Si.prototype.setOptions=Si.prototype.o,Si.createFromModelPath=async function(t,e){return yt(Si,t,{baseOptions:{modelAssetPath:e}})},Si.createFromModelBuffer=function(t,e){return yt(Si,t,{baseOptions:{modelAssetBuffer:e}})},Si.createFromOptions=function(t,e){return yt(Si,t,e)};var Lf=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function J0(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Q0(t){try{const e=new Lf(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Vu(t)}}Lf.prototype.close=Lf.prototype.close;var si=class extends pi{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ye(t=this.h=new Sx,0,1,e=new Kt),this.A=new fx,Ye(this.h,0,3,this.A),this.j=new hx,Ye(this.h,0,2,this.j),Ws(this.j,4,1),Xe(this.j,2,.5),Xe(this.A,2,.5),Xe(this.h,4,.5)}get baseOptions(){return Mt(this.h,Kt,1)}set baseOptions(t){Ye(this.h,0,1,t)}o(t){return"numPoses"in t&&Ws(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Xe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Xe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Xe(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,J0(this),Wi(this,t,i),Q0(this)}G(t,e,n,i){const s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,J0(this),ys(this,t,s,e),Q0(this)}m(){var t=new gi;Wt(t,"image_in"),Wt(t,"norm_rect"),bt(t,"normalized_landmarks"),bt(t,"world_landmarks"),bt(t,"segmentation_masks");const e=new mi;vs(e,ME,this.h);const n=new ei;di(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Gt(n,"IMAGE:image_in"),Gt(n,"NORM_RECT:norm_rect"),vt(n,"NORM_LANDMARKS:normalized_landmarks"),vt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Ci(t,n),zu(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=Rl(r),this.landmarks.push(Hu(i));Ne(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Ne(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=Go(r),this.worldLandmarks.push(Ka(i));Ne(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Ne(this,i)})),this.outputSegmentationMasks&&(vt(n,"SEGMENTATION_MASK:segmentation_masks"),Zo(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Qo(this,r,!0,!this.u))),Ne(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Ne(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};si.prototype.detectForVideo=si.prototype.G,si.prototype.detect=si.prototype.F,si.prototype.setOptions=si.prototype.o,si.createFromModelPath=function(t,e){return yt(si,t,{baseOptions:{modelAssetPath:e}})},si.createFromModelBuffer=function(t,e){return yt(si,t,{baseOptions:{modelAssetBuffer:e}})},si.createFromOptions=function(t,e){return yt(si,t,e)},si.POSE_CONNECTIONS=Bx;const eg=t=>`${"/filter/".endsWith("/")?"/filter/":"/filter//"}${t.replace(/^\/+/,"")}`;class IE{constructor(e,n){C(this,"handLandmarker",null);C(this,"videoElement");C(this,"eventBus");C(this,"running",!1);C(this,"lastVideoTime",-1);C(this,"animationFrameId",0);C(this,"detectionCanvas");C(this,"detectionCtx");C(this,"DETECT_W",640);C(this,"DETECT_H",480);C(this,"skipCounter",0);C(this,"smoothedLandmarks",new Map);C(this,"SMOOTH_ALPHA",.55);this.videoElement=e,this.eventBus=n,this.detectionCanvas=document.createElement("canvas"),this.detectionCanvas.width=this.DETECT_W,this.detectionCanvas.height=this.DETECT_H,this.detectionCtx=this.detectionCanvas.getContext("2d",{willReadFrequently:!1})}async initialize(){const e=await Lo.forVisionTasks(eg("/wasm"));this.handLandmarker=await Yn.createFromOptions(e,{baseOptions:{modelAssetPath:eg("/models/hand_landmarker.task"),delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.72,minHandPresenceConfidence:.7,minTrackingConfidence:.65}),await this.startCamera()}async startCamera(){const e=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1920,min:1280},height:{ideal:1080,min:720},facingMode:"user",frameRate:{ideal:60,min:30}}});this.videoElement.srcObject=e,await new Promise(s=>{this.videoElement.onloadedmetadata=()=>{this.videoElement.play(),s()}});const i=e.getVideoTracks()[0].getSettings();console.log(`[Camera] ${i.width}x${i.height} @ ${i.frameRate}fps`)}start(){this.running=!0,this.detectFrame()}stop(){this.running=!1,cancelAnimationFrame(this.animationFrameId);const e=this.videoElement.srcObject;e==null||e.getTracks().forEach(n=>n.stop())}detectFrame(){var n;if(!this.running||!this.handLandmarker)return;const e=performance.now();if(this.videoElement.currentTime!==this.lastVideoTime&&(this.lastVideoTime=this.videoElement.currentTime,this.skipCounter++,this.skipCounter%2===0)){this.detectionCtx.drawImage(this.videoElement,0,0,this.DETECT_W,this.DETECT_H);const i=this.handLandmarker.detectForVideo(this.detectionCanvas,e),s=new Set,r=[];for(let o=0;o<(((n=i.landmarks)==null?void 0:n.length)??0);o++){const a=i.handedness[o][0].categoryName;s.add(a);const l=i.landmarks[o].map(c=>({x:c.x,y:c.y,z:c.z}));r.push({landmarks:this.smoothLandmarks(a,l),worldLandmarks:i.worldLandmarks[o].map(c=>({x:c.x,y:c.y,z:c.z})),handedness:a})}for(const o of this.smoothedLandmarks.keys())s.has(o)||this.smoothedLandmarks.delete(o);this.eventBus.emit("handUpdate",r)}this.animationFrameId=requestAnimationFrame(()=>this.detectFrame())}smoothLandmarks(e,n){const i=this.smoothedLandmarks.get(e);if(!i){const o=n.map(a=>({...a}));return this.smoothedLandmarks.set(e,o),o}const s=this.SMOOTH_ALPHA,r=n.map((o,a)=>({x:i[a].x+s*(o.x-i[a].x),y:i[a].y+s*(o.y-i[a].y),z:i[a].z+s*(o.z-i[a].z)}));return this.smoothedLandmarks.set(e,r),r}}class DE{constructor(e){C(this,"gestures",[]);C(this,"eventBus");C(this,"lastTime",performance.now());this.eventBus=e,this.eventBus.on("handUpdate",n=>this.onHandUpdate(n))}registerGesture(e){this.gestures.push(e)}onHandUpdate(e){const n=performance.now(),i=(n-this.lastTime)/1e3;this.lastTime=n;for(const s of this.gestures){const r=s.detect(e,i);r&&this.eventBus.emit("gestureDetected",r)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="184",LE=0,tg=1,FE=2,Rc=1,NE=2,Oa=3,gr=0,Qn=1,li=2,Ns=0,fr=1,Xn=2,ng=3,ig=4,kx=5,Nr=100,UE=101,OE=102,BE=103,kE=104,GE=200,HE=201,zE=202,VE=203,Kc=204,Zc=205,WE=206,XE=207,jE=208,qE=209,$E=210,YE=211,KE=212,ZE=213,JE=214,Ff=0,Nf=1,Uf=2,ea=3,Of=4,Bf=5,kf=6,Gf=7,Gx=0,QE=1,eb=2,hs=0,Hx=1,zx=2,Vx=3,Wx=4,Xx=5,jx=6,qx=7,$x=300,Zr=301,ta=302,Sh=303,Mh=304,Wu=306,Hf=1e3,Fs=1001,zf=1002,Tn=1003,tb=1004,Xl=1005,$t=1006,Eh=1007,kr=1008,Ei=1009,Yx=1010,Kx=1011,hl=1012,Np=1013,ms=1014,os=1015,Xs=1016,Up=1017,Op=1018,fl=1020,Zx=35902,Jx=35899,Qx=1021,e2=1022,Ui=1023,js=1026,Gr=1027,t2=1028,Bp=1029,Jr=1030,kp=1031,Gp=1033,Cc=33776,Pc=33777,Ic=33778,Dc=33779,Vf=35840,Wf=35841,Xf=35842,jf=35843,qf=36196,$f=37492,Yf=37496,Kf=37488,Zf=37489,Jc=37490,Jf=37491,Qf=37808,ed=37809,td=37810,nd=37811,id=37812,sd=37813,rd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,hd=37820,fd=37821,dd=36492,pd=36494,md=36495,gd=36283,_d=36284,Qc=36285,vd=36286,nb=3200,sg=0,ib=1,cr="",Jn="srgb",eu="srgb-linear",tu="linear",At="srgb",fo=7680,rg=519,sb=512,rb=513,ob=514,Hp=515,ab=516,lb=517,zp=518,cb=519,xd=35044,og="300 es",as=2e3,nu=2001;function ub(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function iu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hb(){const t=iu("canvas");return t.style.display="block",t}const ag={};function su(...t){const e="THREE."+t.shift();console.log(e,...t)}function n2(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ze(...t){t=n2(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function _t(...t){t=n2(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function yd(...t){const e=t.join(" ");e in ag||(ag[e]=!0,Ze(...t))}function fb(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const db={[Ff]:Nf,[Uf]:kf,[Of]:Gf,[ea]:Bf,[Nf]:Ff,[kf]:Uf,[Gf]:Of,[Bf]:ea};class ro{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lg=1234567;const Za=Math.PI/180,dl=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function mt(t,e,n){return Math.max(e,Math.min(n,t))}function Vp(t,e){return(t%e+e)%e}function pb(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function mb(t,e,n){return t!==e?(n-t)/(e-t):0}function Ja(t,e,n){return(1-n)*t+n*e}function gb(t,e,n,i){return Ja(t,e,1-Math.exp(-n*i))}function _b(t,e=1){return e-Math.abs(Vp(t,e*2)-e)}function vb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function yb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Sb(t,e){return t+Math.random()*(e-t)}function Mb(t){return t*(.5-Math.random())}function Eb(t){t!==void 0&&(lg=t);let e=lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bb(t){return t*Za}function Tb(t){return t*dl}function wb(t){return(t&t-1)===0&&t!==0}function Ab(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Rb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Cb(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*d,a*c);break;case"YXY":t.set(l*d,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*d,a*u,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Pb={DEG2RAD:Za,RAD2DEG:dl,generateUUID:Us,clamp:mt,euclideanModulo:Vp,mapLinear:pb,inverseLerp:mb,lerp:Ja,damp:gb,pingpong:_b,smoothstep:vb,smootherstep:xb,randInt:yb,randFloat:Sb,randFloatSpread:Mb,seededRandom:Eb,degToRad:bb,radToDeg:Tb,isPowerOfTwo:wb,ceilPowerOfTwo:Ab,floorPowerOfTwo:Rb,setQuaternionFromProperEuler:Cb,normalize:Rt,denormalize:Ni},Zp=class Zp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let ft=Zp;class va{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[n]=a*g+u*h+l*d-c*f,e[n+1]=l*g+u*f+c*h-a*d,e[n+2]=c*g+u*d+a*f-l*h,e[n+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jp=class Jp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),h=2*(r*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jp.prototype.isVector3=!0;let H=Jp;const bh=new H,cg=new va,Qp=class Qp{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],M=s[4],x=s[7],P=s[2],T=s[5],F=s[8];return r[0]=o*_+a*y+l*P,r[3]=o*m+a*M+l*T,r[6]=o*p+a*x+l*F,r[1]=c*_+u*y+h*P,r[4]=c*m+u*M+h*T,r[7]=c*p+u*x+h*F,r[2]=f*_+d*y+g*P,r[5]=f*m+d*M+g*T,r[8]=f*p+d*x+g*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=n*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=d*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Th.makeScale(e,n)),this}rotate(e){return this.premultiply(Th.makeRotation(-e)),this}translate(e,n){return this.premultiply(Th.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qp.prototype.isMatrix3=!0;let st=Qp;const Th=new st,ug=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ib(){const t={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=Ho(s.r),s.g=Ho(s.g),s.b=Ho(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cr?tu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[eu]:{primaries:e,whitePoint:i,transfer:tu,toXYZ:ug,fromXYZ:hg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:i,transfer:At,toXYZ:ug,fromXYZ:hg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),t}const gt=Ib();function Os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ho(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let po;class Db{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{po===void 0&&(po=iu("canvas")),po.width=e.width,po.height=e.height;const s=po.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=po}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=iu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Os(n[i]/255)*255):n[i]=Os(n[i]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lb=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wh(s[o].image)):r.push(wh(s[o]))}else r=wh(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function wh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Db.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Fb=0;const Ah=new H;class An extends ro{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=Fs,s=Fs,r=$t,o=kr,a=Ui,l=Ei,c=An.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Us(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hf:e.x=e.x-Math.floor(e.x);break;case Fs:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hf:e.y=e.y-Math.floor(e.y);break;case Fs:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=$x;An.DEFAULT_ANISOTROPY=1;const em=class em{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,x=(d+1)/2,P=(p+1)/2,T=(u+f)/4,F=(h+_)/4,S=(g+m)/4;return M>x&&M>P?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=F/i):x>P?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=S/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=F/r,s=S/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;let nn=em;class Nb extends ro{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new An(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Wp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends Nb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class i2 extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ub extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,n,i,s,r,o,a,l,c,u,h,f,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,n,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),r=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=d+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;n[0]=f+_*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;n[0]=l*u,n[4]=g*c-d,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*h,n[8]=g*h+d,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*h+g,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+_,n[5]=o*u,n[9]=d*h-g,n[2]=g*h-d,n[6]=a*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ob,e,Bb)}lookAt(e,n,i){const s=this.elements;return ri.subVectors(e,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),er.crossVectors(i,ri),er.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),er.crossVectors(i,ri)),er.normalize(),jl.crossVectors(ri,er),s[0]=er.x,s[4]=jl.x,s[8]=ri.x,s[1]=er.y,s[5]=jl.y,s[9]=ri.y,s[2]=er.z,s[6]=jl.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],M=i[7],x=i[11],P=i[15],T=s[0],F=s[4],S=s[8],A=s[12],I=s[1],w=s[5],L=s[9],V=s[13],$=s[2],O=s[6],z=s[10],k=s[14],Q=s[3],ee=s[7],ce=s[11],pe=s[15];return r[0]=o*T+a*I+l*$+c*Q,r[4]=o*F+a*w+l*O+c*ee,r[8]=o*S+a*L+l*z+c*ce,r[12]=o*A+a*V+l*k+c*pe,r[1]=u*T+h*I+f*$+d*Q,r[5]=u*F+h*w+f*O+d*ee,r[9]=u*S+h*L+f*z+d*ce,r[13]=u*A+h*V+f*k+d*pe,r[2]=g*T+_*I+m*$+p*Q,r[6]=g*F+_*w+m*O+p*ee,r[10]=g*S+_*L+m*z+p*ce,r[14]=g*A+_*V+m*k+p*pe,r[3]=y*T+M*I+x*$+P*Q,r[7]=y*F+M*w+x*O+P*ee,r[11]=y*S+M*L+x*z+P*ce,r[15]=y*A+M*V+x*k+P*pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*d-c*f,M=a*d-c*h,x=a*f-l*h,P=o*d-c*u,T=o*f-l*u,F=o*h-a*u;return n*(_*y-m*M+p*x)-i*(g*y-m*P+p*T)+s*(g*M-_*P+p*F)-r*(g*x-_*T+m*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=n*a-i*o,M=n*l-s*o,x=n*c-r*o,P=i*l-s*a,T=i*c-r*a,F=s*c-r*l,S=u*_-h*g,A=u*m-f*g,I=u*p-d*g,w=h*m-f*_,L=h*p-d*_,V=f*p-d*m,$=y*V-M*L+x*w+P*I-T*A+F*S;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/$;return e[0]=(a*V-l*L+c*w)*O,e[1]=(s*L-i*V-r*w)*O,e[2]=(_*F-m*T+p*P)*O,e[3]=(f*T-h*F-d*P)*O,e[4]=(l*I-o*V-c*A)*O,e[5]=(n*V-s*I+r*A)*O,e[6]=(m*x-g*F-p*M)*O,e[7]=(u*F-f*x+d*M)*O,e[8]=(o*L-a*I+c*S)*O,e[9]=(i*I-n*L-r*S)*O,e[10]=(g*T-_*x+p*y)*O,e[11]=(h*x-u*T-d*y)*O,e[12]=(a*A-o*w-l*S)*O,e[13]=(n*w-i*A+s*S)*O,e[14]=(_*M-g*P-m*y)*O,e[15]=(u*P-h*M+f*y)*O,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=l*c,M=l*u,x=l*h,P=i.x,T=i.y,F=i.z;return s[0]=(1-(_+p))*P,s[1]=(d+x)*P,s[2]=(g-M)*P,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+M)*F,s[9]=(m-y)*F,s[10]=(1-(f+_))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=mo.set(s[0],s[1],s[2]).length();const a=mo.set(s[4],s[5],s[6]).length(),l=mo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pi.copy(this);const c=1/o,u=1/a,h=1/l;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=u,Pi.elements[5]*=u,Pi.elements[6]*=u,Pi.elements[8]*=h,Pi.elements[9]*=h,Pi.elements[10]*=h,n.setFromRotationMatrix(Pi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=as,l=!1){const c=this.elements,u=2*r/(n-e),h=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===as)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===nu)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=as,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-s),f=-(n+e)/(n-e),d=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===as)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===nu)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lu.prototype.isMatrix4=!0;let Yt=lu;const mo=new H,Pi=new Yt,Ob=new H(0,0,0),Bb=new H(1,1,1),er=new H,jl=new H,ri=new H,fg=new Yt,dg=new va;class Qr{constructor(e=0,n=0,i=0,s=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class s2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kb=0;const pg=new H,go=new va,bs=new Yt,ql=new H,ba=new H,Gb=new H,Hb=new va,mg=new H(1,0,0),gg=new H(0,1,0),_g=new H(0,0,1),vg={type:"added"},zb={type:"removed"},_o={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Rn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new H,n=new Qr,i=new va,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new st}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,n){return go.setFromAxisAngle(e,n),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,n){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ql.copy(e):ql.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(ba,ql,this.up):bs.lookAt(ql,ba,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),go.setFromRotationMatrix(bs),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vg),_o.child=e,this.dispatchEvent(_o),_o.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zb),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(bs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vg),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Hb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rn.DEFAULT_UP=new H(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ba extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vb={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const r2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Ph(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ee{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=Vp(e,1),n=mt(n,0,1),i=mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Ph(o,r,e+1/3),this.g=Ph(o,r,e),this.b=Ph(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,n=Jn){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=r2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return gt.workingToColorSpace(In.copy(this),e),Math.round(mt(In.r*255,0,255))*65536+Math.round(mt(In.g*255,0,255))*256+Math.round(mt(In.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(In.copy(this),n);const i=In.r,s=In.g,r=In.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(In.copy(this),n),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Jn){gt.workingToColorSpace(In.copy(this),e);const n=In.r,i=In.g,s=In.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL($l);const i=Ja(tr.h,$l.h,n),s=Ja(tr.s,$l.s,n),r=Ja(tr.l,$l.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ee;Ee.NAMES=r2;class o2 extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ii=new H,Ts=new H,Ih=new H,ws=new H,vo=new H,xo=new H,xg=new H,Dh=new H,Lh=new H,Fh=new H,Nh=new nn,Uh=new nn,Oh=new nn;class bi{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Ii.subVectors(e,n),s.cross(Ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Ii.subVectors(s,n),Ts.subVectors(i,n),Ih.subVectors(e,n);const o=Ii.dot(Ii),a=Ii.dot(Ts),l=Ii.dot(Ih),c=Ts.dot(Ts),u=Ts.dot(Ih),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ws.x),l.addScaledVector(o,ws.y),l.addScaledVector(a,ws.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Nh.setScalar(0),Uh.setScalar(0),Oh.setScalar(0),Nh.fromBufferAttribute(e,n),Uh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nh,r.x),o.addScaledVector(Uh,r.y),o.addScaledVector(Oh,r.z),o}static isFrontFacing(e,n,i,s){return Ii.subVectors(i,n),Ts.subVectors(e,n),Ii.cross(Ts).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Ii.cross(Ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return bi.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;vo.subVectors(s,i),xo.subVectors(r,i),Dh.subVectors(e,i);const l=vo.dot(Dh),c=xo.dot(Dh);if(l<=0&&c<=0)return n.copy(i);Lh.subVectors(e,s);const u=vo.dot(Lh),h=xo.dot(Lh);if(u>=0&&h<=u)return n.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(vo,o);Fh.subVectors(e,r);const d=vo.dot(Fh),g=xo.dot(Fh);if(g>=0&&d<=g)return n.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(xo,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return xg.subVectors(r,s),a=(h-u)/(h-u+(d-g)),n.copy(s).addScaledVector(xg,a);const p=1/(m+_+f);return o=_*p,a=f*p,n.copy(i).addScaledVector(vo,o).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cl{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Kl.subVectors(this.max,Ta),yo.subVectors(e.a,Ta),So.subVectors(e.b,Ta),Mo.subVectors(e.c,Ta),nr.subVectors(So,yo),ir.subVectors(Mo,So),Ar.subVectors(yo,Mo);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ar.z,Ar.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ar.z,0,-Ar.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ar.y,Ar.x,0];return!Bh(n,yo,So,Mo,Kl)||(n=[1,0,0,0,1,0,0,0,1],!Bh(n,yo,So,Mo,Kl))?!1:(Zl.crossVectors(nr,ir),n=[Zl.x,Zl.y,Zl.z],Bh(n,yo,So,Mo,Kl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(As),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const As=[new H,new H,new H,new H,new H,new H,new H,new H],Di=new H,Yl=new Cl,yo=new H,So=new H,Mo=new H,nr=new H,ir=new H,Ar=new H,Ta=new H,Kl=new H,Zl=new H,Rr=new H;function Bh(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Rr.fromArray(t,r);const a=s.x*Math.abs(Rr.x)+s.y*Math.abs(Rr.y)+s.z*Math.abs(Rr.z),l=e.dot(Rr),c=n.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rn=new H,Jl=new ft;let Wb=0;class dn extends ro{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xd,this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jl.fromBufferAttribute(this,n),Jl.applyMatrix3(e),this.setXY(n,Jl.x,Jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class a2 extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l2 extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Xb=new Cl,wa=new H,kh=new H;class Pl{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Xb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const n=wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(wa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(kh)),this.expandByPoint(wa.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jb=0;const Mi=new Yt,Gh=new Rn,Eo=new H,oi=new Cl,Aa=new Cl,yn=new H;class Zt extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ub(e)?l2:a2)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,n,i){return Mi.makeTranslation(e,n,i),this.applyMatrix4(Mi),this}scale(e,n,i){return Mi.makeScale(e,n,i),this.applyMatrix4(Mi),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Aa.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(oi.min,Aa.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Aa.max),oi.expandByPoint(yn)):(oi.expandByPoint(Aa.min),oi.expandByPoint(Aa.max))}oi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(Eo.fromBufferAttribute(e,c),yn.add(Eo)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new H,l[S]=new H;const c=new H,u=new H,h=new H,f=new ft,d=new ft,g=new ft,_=new H,m=new H;function p(S,A,I){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,I),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(w),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[S].add(_),a[A].add(_),a[I].add(_),l[S].add(m),l[A].add(m),l[I].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,A=y.length;S<A;++S){const I=y[S],w=I.start,L=I.count;for(let V=w,$=w+L;V<$;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new H,x=new H,P=new H,T=new H;function F(S){P.fromBufferAttribute(s,S),T.copy(P);const A=a[S];M.copy(A),M.sub(P.multiplyScalar(P.dot(A))).normalize(),x.crossVectors(T,A);const w=x.dot(l[S])<0?-1:1;o.setXYZW(S,M.x,M.y,M.z,w)}for(let S=0,A=y.length;S<A;++S){const I=y[S],w=I.start,L=I.count;for(let V=w,$=w+L;V<$;V+=3)F(e.getX(V+0)),F(e.getX(V+1)),F(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new dn(f,u,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=xd,this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new H;class ru{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ni(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ni(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ni(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ni(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){su("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new dn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){su("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let $b=0;class oo extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=fr,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c2 extends oo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bo;const Ra=new H,To=new H,wo=new H,Ao=new ft,Ca=new ft,u2=new Yt,Ql=new H,Pa=new H,ec=new H,yg=new ft,Hh=new ft,Sg=new ft;class Yb extends Rn{constructor(e=new c2){if(super(),this.isSprite=!0,this.type="Sprite",bo===void 0){bo=new Zt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qb(n,5);bo.setIndex([0,1,2,0,2,3]),bo.setAttribute("position",new ru(i,3,0,!1)),bo.setAttribute("uv",new ru(i,2,3,!1))}this.geometry=bo,this.material=e,this.center=new ft(.5,.5),this.count=1}raycast(e,n){e.camera===null&&_t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),u2.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-wo.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;tc(Ql.set(-.5,-.5,0),wo,o,To,s,r),tc(Pa.set(.5,-.5,0),wo,o,To,s,r),tc(ec.set(.5,.5,0),wo,o,To,s,r),yg.set(0,0),Hh.set(1,0),Sg.set(1,1);let a=e.ray.intersectTriangle(Ql,Pa,ec,!1,Ra);if(a===null&&(tc(Pa.set(-.5,.5,0),wo,o,To,s,r),Hh.set(0,1),a=e.ray.intersectTriangle(Ql,ec,Pa,!1,Ra),a===null))return;const l=e.ray.origin.distanceTo(Ra);l<e.near||l>e.far||n.push({distance:l,point:Ra.clone(),uv:bi.getInterpolation(Ra,Ql,Pa,ec,yg,Hh,Sg,new ft),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function tc(t,e,n,i,s,r){Ao.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(Ca.x=r*Ao.x-s*Ao.y,Ca.y=s*Ao.x+r*Ao.y):Ca.copy(Ao),t.copy(e),t.x+=Ca.x,t.y+=Ca.y,t.applyMatrix4(u2)}const Rs=new H,zh=new H,nc=new H,sr=new H,Vh=new H,ic=new H,Wh=new H;class Xp{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Rs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Rs.copy(this.origin).addScaledVector(this.direction,n),Rs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){zh.copy(e).add(n).multiplyScalar(.5),nc.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(zh);const r=e.distanceTo(n)*.5,o=-this.direction.dot(nc),a=sr.dot(this.direction),l=-sr.dot(nc),c=sr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(zh).addScaledVector(nc,f),d}intersectSphere(e,n){Rs.subVectors(e.center,this.origin);const i=Rs.dot(this.direction),s=Rs.dot(Rs)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Rs)!==null}intersectTriangle(e,n,i,s,r){Vh.subVectors(n,e),ic.subVectors(i,e),Wh.crossVectors(Vh,ic);let o=this.direction.dot(Wh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(ic.crossVectors(sr,ic));if(l<0)return null;const c=a*this.direction.dot(Vh.cross(sr));if(c<0||l+c>o)return null;const u=-a*sr.dot(Wh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xu extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=Gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mg=new Yt,Cr=new Xp,sc=new Pl,Eg=new H,rc=new H,oc=new H,ac=new H,Xh=new H,lc=new H,bg=new H,cc=new H;class jn extends Rn{constructor(e=new Zt,n=new Xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){lc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Xh.fromBufferAttribute(h,e),o?lc.addScaledVector(Xh,u):lc.addScaledVector(Xh.sub(n),u))}n.add(lc)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(r),Cr.copy(e.ray).recast(e.near),!(sc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(sc,Eg)===null||Cr.origin.distanceToSquared(Eg)>(e.far-e.near)**2))&&(Mg.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(Mg),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,P=M;x<P;x+=3){const T=a.getX(x),F=a.getX(x+1),S=a.getX(x+2);s=uc(this,p,e,i,c,u,h,T,F,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=uc(this,o,e,i,c,u,h,y,M,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,P=M;x<P;x+=3){const T=x,F=x+1,S=x+2;s=uc(this,p,e,i,c,u,h,T,F,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,x=m+2;s=uc(this,o,e,i,c,u,h,y,M,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Kb(t,e,n,i,s,r,o,a){let l;if(e.side===Qn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gr,a),l===null)return null;cc.copy(a),cc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(cc);return c<n.near||c>n.far?null:{distance:c,point:cc.clone(),object:t}}function uc(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,rc),t.getVertexPosition(l,oc),t.getVertexPosition(c,ac);const u=Kb(t,e,n,i,rc,oc,ac,bg);if(u){const h=new H;bi.getBarycoord(bg,rc,oc,ac,h),s&&(u.uv=bi.getInterpolatedAttribute(s,a,l,c,h,new ft)),r&&(u.uv1=bi.getInterpolatedAttribute(r,a,l,c,h,new ft)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};bi.getNormal(rc,oc,ac,f.normal),u.face=f,u.barycoord=h}return u}class Zb extends An{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Tn,u=Tn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new H,Jb=new H,Qb=new st;class Lr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=jh.subVectors(i,n).cross(Jb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(jh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Qb.getNormalMatrix(e),s=this.coplanarPoint(jh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Pl,eT=new ft(.5,.5),hc=new H;class h2{constructor(e=new Lr,n=new Lr,i=new Lr,s=new Lr,r=new Lr,o=new Lr){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=as,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],M=r[13],x=r[14],P=r[15];if(s[0].setComponents(c-o,d-u,p-g,P-y).normalize(),s[1].setComponents(c+o,d+u,p+g,P+y).normalize(),s[2].setComponents(c+a,d+h,p+_,P+M).normalize(),s[3].setComponents(c-a,d-h,p-_,P-M).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,P-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,P-x).normalize(),n===as)s[5].setComponents(c+l,d+f,p+m,P+x).normalize();else if(n===nu)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const n=eT.distanceTo(e.center);return Pr.radius=.7071067811865476+n,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(hc.x=s.normal.x>0?e.max.x:e.min.x,hc.y=s.normal.y>0?e.max.y:e.min.y,hc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ju extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new H,au=new H,Tg=new Yt,Ia=new Xp,fc=new Pl,qh=new H,wg=new H;class jp extends Rn{constructor(e=new Zt,n=new ju){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)ou.fromBufferAttribute(n,s-1),au.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=ou.distanceTo(au);e.setAttribute("lineDistance",new cn(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),fc.radius+=r,e.ray.intersectsSphere(fc)===!1)return;Tg.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(Tg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),M=dc(this,e,Ia,l,p,y,_);M&&n.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=dc(this,e,Ia,l,_,m,g-1);p&&n.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=dc(this,e,Ia,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){const _=dc(this,e,Ia,l,g-1,d,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dc(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(ou.fromBufferAttribute(a,s),au.fromBufferAttribute(a,r),n.distanceSqToSegment(ou,au,qh,wg)>i)return;qh.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(qh);if(!(c<e.near||c>e.far))return{distance:c,point:wg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Ag=new H,Rg=new H;class tT extends jp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Ag.fromBufferAttribute(n,s),Rg.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ag.distanceTo(Rg);e.setAttribute("lineDistance",new cn(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class na extends oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cg=new Yt,Sd=new Xp,pc=new Pl,mc=new H;class pl extends Rn{constructor(e=new Zt,n=new na){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;Cg.copy(s).invert(),Sd.copy(e.ray).applyMatrix4(Cg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);mc.fromBufferAttribute(h,m),Pg(mc,m,l,s,e,n,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)mc.fromBufferAttribute(h,g),Pg(mc,g,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pg(t,e,n,i,s,r,o){const a=Sd.distanceSqToPoint(t);if(a<n){const l=new H;Sd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class f2 extends An{constructor(e,n,i,s,r=$t,o=$t,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class d2 extends An{constructor(e=[],n=Zr,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nT extends An{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ia extends An{constructor(e,n,i=ms,s,r,o,a=Tn,l=Tn,c,u=js,h=1){if(u!==js&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class iT extends ia{constructor(e,n=ms,i=Zr,s,r,o=Tn,a=Tn,l,c=js){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class p2 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Il extends Zt{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function g(_,m,p,y,M,x,P,T,F,S,A){const I=x/F,w=P/S,L=x/2,V=P/2,$=T/2,O=F+1,z=S+1;let k=0,Q=0;const ee=new H;for(let ce=0;ce<z;ce++){const pe=ce*w-V;for(let Te=0;Te<O;Te++){const Oe=Te*I-L;ee[_]=Oe*y,ee[m]=pe*M,ee[p]=$,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Te/F),h.push(1-ce/S),k+=1}}for(let ce=0;ce<S;ce++)for(let pe=0;pe<F;pe++){const Te=f+pe+O*ce,Oe=f+pe+O*(ce+1),ct=f+(pe+1)+O*(ce+1),et=f+(pe+1)+O*ce;l.push(Te,Oe,et),l.push(Oe,ct,et),Q+=6}a.addGroup(d,Q,A),d+=Q,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _r extends Zt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=n/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let M=0;M<c;M++){const x=M*h-r;g.push(x,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,x=y+c*(p+1),P=y+1+c*(p+1),T=y+1+c*p;d.push(M,x,T),d.push(x,P,T)}this.setIndex(d),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class qu extends Zt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,f=new H,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let x=0;p===0&&o===0?x=.5/n:p===i&&l===Math.PI&&(x=-.5/n);for(let P=0;P<=n;P++){const T=P/n;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-M),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<n;y++){const M=u[p][y+1],x=u[p][y],P=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&d.push(M,x,T),(p!==i-1||l<Math.PI)&&d.push(x,P,T)}this.setIndex(d),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function sa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(Ig(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Ig(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Gn(t){const e={};for(let n=0;n<t.length;n++){const i=sa(t[n]);for(const s in i)e[s]=i[s]}return e}function Ig(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function sT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const rT={clone:sa,merge:Gn};var oT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oT,this.fragmentShader=aT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=sT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lT extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cT extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uT extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hT extends Rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const gc=new H,_c=new va,Ki=new H;class g2 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=as,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gc,_c,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(gc,_c,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new H,Dg=new ft,Lg=new ft;class Fi extends g2{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Dg,Lg),n.subVectors(Lg,Dg)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $u extends g2{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _2 extends hT{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ro=-90,Co=1;class fT extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fi(Ro,Co,e,n);s.layers=this.layers,this.add(s);const r=new Fi(Ro,Co,e,n);r.layers=this.layers,this.add(r);const o=new Fi(Ro,Co,e,n);o.layers=this.layers,this.add(o);const a=new Fi(Ro,Co,e,n);a.layers=this.layers,this.add(a);const l=new Fi(Ro,Co,e,n);l.layers=this.layers,this.add(l);const c=new Fi(Ro,Co,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===as)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dT extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const tm=class tm{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};tm.prototype.isMatrix2=!0;let Fg=tm;function Ng(t,e,n,i){const s=pT(i);switch(n){case Qx:return t*e;case t2:return t*e/s.components*s.byteLength;case Bp:return t*e/s.components*s.byteLength;case Jr:return t*e*2/s.components*s.byteLength;case kp:return t*e*2/s.components*s.byteLength;case e2:return t*e*3/s.components*s.byteLength;case Ui:return t*e*4/s.components*s.byteLength;case Gp:return t*e*4/s.components*s.byteLength;case Cc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wf:case jf:return Math.max(t,16)*Math.max(e,8)/4;case Vf:case Xf:return Math.max(t,8)*Math.max(e,8)/2;case qf:case $f:case Kf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yf:case Jc:case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dd:case pd:case md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qc:case vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pT(t){switch(t){case Ei:case Yx:return{byteLength:1,components:1};case hl:case Kx:case Xs:return{byteLength:2,components:1};case Up:case Op:return{byteLength:2,components:4};case ms:case Np:case os:return{byteLength:4,components:1};case Zx:case Jx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v2(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function mT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_T=`#ifdef USE_ALPHAHASH
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
#endif`,vT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ST=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MT=`#ifdef USE_AOMAP
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
#endif`,ET=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bT=`#ifdef USE_BATCHING
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
#endif`,TT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CT=`#ifdef USE_IRIDESCENCE
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
#endif`,PT=`#ifdef USE_BUMPMAP
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
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kT=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HT=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jT="gl_FragColor = linearToOutputTexel( gl_FragColor );",qT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,YT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ew=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iw=`#ifdef USE_GRADIENTMAP
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
}`,sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aw=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,lw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
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
#endif`,pw=`uniform sampler2D dfgLUT;
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
}`,mw=`
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gw=`#if defined( RE_IndirectDiffuse )
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
#endif`,_w=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ww=`#if defined( USE_POINTS_UV )
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
#endif`,Aw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`#ifdef USE_MORPHTARGETS
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
#endif`,Lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kw=`#ifdef USE_NORMALMAP
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
#endif`,Gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$w=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,tA=`float getShadowMask() {
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
}`,nA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iA=`#ifdef USE_SKINNING
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
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,oA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uA=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hA=`#ifdef USE_TRANSMISSION
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_A=`uniform sampler2D t2D;
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
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
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
}`,EA=`#if DEPTH_PACKING == 3200
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
}`,bA=`#define DISTANCE
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
}`,TA=`#define DISTANCE
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
void main () {
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`uniform float scale;
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
}`,CA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,IA=`uniform vec3 diffuse;
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
}`,DA=`#define LAMBERT
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
}`,LA=`#define LAMBERT
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
}`,FA=`#define MATCAP
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
}`,NA=`#define MATCAP
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
}`,UA=`#define NORMAL
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
}`,OA=`#define NORMAL
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
}`,BA=`#define PHONG
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
}`,kA=`#define PHONG
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
}`,GA=`#define STANDARD
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
}`,HA=`#define STANDARD
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
}`,zA=`#define TOON
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
}`,VA=`#define TOON
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
}`,WA=`uniform float size;
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
}`,XA=`uniform vec3 diffuse;
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
}`,jA=`#include <common>
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
}`,qA=`uniform vec3 color;
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
}`,$A=`uniform float rotation;
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
}`,YA=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:gT,alphahash_pars_fragment:_T,alphamap_fragment:vT,alphamap_pars_fragment:xT,alphatest_fragment:yT,alphatest_pars_fragment:ST,aomap_fragment:MT,aomap_pars_fragment:ET,batching_pars_vertex:bT,batching_vertex:TT,begin_vertex:wT,beginnormal_vertex:AT,bsdfs:RT,iridescence_fragment:CT,bumpmap_pars_fragment:PT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:DT,clipping_planes_pars_vertex:LT,clipping_planes_vertex:FT,color_fragment:NT,color_pars_fragment:UT,color_pars_vertex:OT,color_vertex:BT,common:kT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:HT,displacementmap_pars_vertex:zT,displacementmap_vertex:VT,emissivemap_fragment:WT,emissivemap_pars_fragment:XT,colorspace_fragment:jT,colorspace_pars_fragment:qT,envmap_fragment:$T,envmap_common_pars_fragment:YT,envmap_pars_fragment:KT,envmap_pars_vertex:ZT,envmap_physical_pars_fragment:lw,envmap_vertex:JT,fog_vertex:QT,fog_pars_vertex:ew,fog_fragment:tw,fog_pars_fragment:nw,gradientmap_pars_fragment:iw,lightmap_pars_fragment:sw,lights_lambert_fragment:rw,lights_lambert_pars_fragment:ow,lights_pars_begin:aw,lights_toon_fragment:cw,lights_toon_pars_fragment:uw,lights_phong_fragment:hw,lights_phong_pars_fragment:fw,lights_physical_fragment:dw,lights_physical_pars_fragment:pw,lights_fragment_begin:mw,lights_fragment_maps:gw,lights_fragment_end:_w,lightprobes_pars_fragment:vw,logdepthbuf_fragment:xw,logdepthbuf_pars_fragment:yw,logdepthbuf_pars_vertex:Sw,logdepthbuf_vertex:Mw,map_fragment:Ew,map_pars_fragment:bw,map_particle_fragment:Tw,map_particle_pars_fragment:ww,metalnessmap_fragment:Aw,metalnessmap_pars_fragment:Rw,morphinstance_vertex:Cw,morphcolor_vertex:Pw,morphnormal_vertex:Iw,morphtarget_pars_vertex:Dw,morphtarget_vertex:Lw,normal_fragment_begin:Fw,normal_fragment_maps:Nw,normal_pars_fragment:Uw,normal_pars_vertex:Ow,normal_vertex:Bw,normalmap_pars_fragment:kw,clearcoat_normal_fragment_begin:Gw,clearcoat_normal_fragment_maps:Hw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Vw,opaque_fragment:Ww,packing:Xw,premultiplied_alpha_fragment:jw,project_vertex:qw,dithering_fragment:$w,dithering_pars_fragment:Yw,roughnessmap_fragment:Kw,roughnessmap_pars_fragment:Zw,shadowmap_pars_fragment:Jw,shadowmap_pars_vertex:Qw,shadowmap_vertex:eA,shadowmask_pars_fragment:tA,skinbase_vertex:nA,skinning_pars_vertex:iA,skinning_vertex:sA,skinnormal_vertex:rA,specularmap_fragment:oA,specularmap_pars_fragment:aA,tonemapping_fragment:lA,tonemapping_pars_fragment:cA,transmission_fragment:uA,transmission_pars_fragment:hA,uv_pars_fragment:fA,uv_pars_vertex:dA,uv_vertex:pA,worldpos_vertex:mA,background_vert:gA,background_frag:_A,backgroundCube_vert:vA,backgroundCube_frag:xA,cube_vert:yA,cube_frag:SA,depth_vert:MA,depth_frag:EA,distance_vert:bA,distance_frag:TA,equirect_vert:wA,equirect_frag:AA,linedashed_vert:RA,linedashed_frag:CA,meshbasic_vert:PA,meshbasic_frag:IA,meshlambert_vert:DA,meshlambert_frag:LA,meshmatcap_vert:FA,meshmatcap_frag:NA,meshnormal_vert:UA,meshnormal_frag:OA,meshphong_vert:BA,meshphong_frag:kA,meshphysical_vert:GA,meshphysical_frag:HA,meshtoon_vert:zA,meshtoon_frag:VA,points_vert:WA,points_frag:XA,shadow_vert:jA,shadow_frag:qA,sprite_vert:$A,sprite_frag:YA},Re={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},is={basic:{uniforms:Gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Gn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Gn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Gn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Gn([Re.common,Re.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Gn([Re.lights,Re.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};is.physical={uniforms:Gn([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const vc={r:0,b:0,g:0},KA=new Yt,x2=new st;x2.set(-1,0,0,0,1,0,0,0,1);function ZA(t,e,n,i,s,r){const o=new Ee(0);let a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const x=y.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(y){let M=!1;const x=d(y);x===null?m(o,a):x&&x.isColor&&(m(x,1),M=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===Wu)?(c===void 0&&(c=new jn(new Il(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:sa(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KA.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(x2),c.material.toneMapped=gt.getTransfer(x.colorSpace)!==At,(u!==x||h!==x.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new jn(new _r(2,2),new qn({name:"BackgroundMaterial",uniforms:sa(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=gt.getTransfer(x.colorSpace)!==At,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(vc,m2(t)),n.buffers.color.setClear(vc.r,vc.g,vc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function JA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,L,V,$,O){let z=!1;const k=h(w,$,V,L);r!==k&&(r=k,c(r.object)),z=d(w,$,V,O),z&&g(w,$,V,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(w,L,V,$),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function h(w,L,V,$){const O=$.wireframe===!0;let z=i[L.id];z===void 0&&(z={},i[L.id]=z);const k=w.isInstancedMesh===!0?w.id:0;let Q=z[k];Q===void 0&&(Q={},z[k]=Q);let ee=Q[V.id];ee===void 0&&(ee={},Q[V.id]=ee);let ce=ee[O];return ce===void 0&&(ce=f(l()),ee[O]=ce),ce}function f(w){const L=[],V=[],$=[];for(let O=0;O<n;O++)L[O]=0,V[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:$,object:w,attributes:{},index:null}}function d(w,L,V,$){const O=r.attributes,z=L.attributes;let k=0;const Q=V.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const pe=O[ee];let Te=z[ee];if(Te===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Te=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Te=w.instanceColor)),pe===void 0||pe.attribute!==Te||Te&&pe.data!==Te.data)return!0;k++}return r.attributesNum!==k||r.index!==$}function g(w,L,V,$){const O={},z=L.attributes;let k=0;const Q=V.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let pe=z[ee];pe===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const Te={};Te.attribute=pe,pe&&pe.data&&(Te.data=pe.data),O[ee]=Te,k++}r.attributes=O,r.attributesNum=k,r.index=$}function _(){const w=r.newAttributes;for(let L=0,V=w.length;L<V;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const V=r.newAttributes,$=r.enabledAttributes,O=r.attributeDivisors;V[w]=1,$[w]===0&&(t.enableVertexAttribArray(w),$[w]=1),O[w]!==L&&(t.vertexAttribDivisor(w,L),O[w]=L)}function y(){const w=r.newAttributes,L=r.enabledAttributes;for(let V=0,$=L.length;V<$;V++)L[V]!==w[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function M(w,L,V,$,O,z,k){k===!0?t.vertexAttribIPointer(w,L,V,O,z):t.vertexAttribPointer(w,L,V,$,O,z)}function x(w,L,V,$){_();const O=$.attributes,z=V.getAttributes(),k=L.defaultAttributeValues;for(const Q in z){const ee=z[Q];if(ee.location>=0){let ce=O[Q];if(ce===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const pe=ce.normalized,Te=ce.itemSize,Oe=e.get(ce);if(Oe===void 0)continue;const ct=Oe.buffer,et=Oe.type,se=Oe.bytesPerElement,we=et===t.INT||et===t.UNSIGNED_INT||ce.gpuType===Np;if(ce.isInterleavedBufferAttribute){const _e=ce.data,je=_e.stride,qe=ce.offset;if(_e.isInstancedInterleavedBuffer){for(let Je=0;Je<ee.locationSize;Je++)p(ee.location+Je,_e.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Je=0;Je<ee.locationSize;Je++)m(ee.location+Je);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let Je=0;Je<ee.locationSize;Je++)M(ee.location+Je,Te/ee.locationSize,et,pe,je*se,(qe+Te/ee.locationSize*Je)*se,we)}else{if(ce.isInstancedBufferAttribute){for(let _e=0;_e<ee.locationSize;_e++)p(ee.location+_e,ce.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<ee.locationSize;_e++)m(ee.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let _e=0;_e<ee.locationSize;_e++)M(ee.location+_e,Te/ee.locationSize,et,pe,Te*se,Te/ee.locationSize*_e*se,we)}}else if(k!==void 0){const pe=k[Q];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(ee.location,pe);break;case 3:t.vertexAttrib3fv(ee.location,pe);break;case 4:t.vertexAttrib4fv(ee.location,pe);break;default:t.vertexAttrib1fv(ee.location,pe)}}}}y()}function P(){A();for(const w in i){const L=i[w];for(const V in L){const $=L[V];for(const O in $){const z=$[O];for(const k in z)u(z[k].object),delete z[k];delete $[O]}}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const V in L){const $=L[V];for(const O in $){const z=$[O];for(const k in z)u(z[k].object),delete z[k];delete $[O]}}delete i[w.id]}function F(w){for(const L in i){const V=i[L];for(const $ in V){const O=V[$];if(O[w.id]===void 0)continue;const z=O[w.id];for(const k in z)u(z[k].object),delete z[k];delete O[w.id]}}}function S(w){for(const L in i){const V=i[L],$=w.isInstancedMesh===!0?w.id:0,O=V[$];if(O!==void 0){for(const z in O){const k=O[z];for(const Q in k)u(k[Q].object),delete k[Q];delete O[z]}delete V[$],Object.keys(V).length===0&&delete i[L]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function QA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function e4(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==Ui&&i.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const S=F===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ei&&i.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==os&&!S)}function l(F){if(F==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:P,samples:T}}function t4(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Lr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,M=y*4;let x=p.clippingState||null;l.value=x,x=u(g,f,M,d);for(let P=0;P!==M;++P)x[P]=n[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const ur=4,Ug=[.125,.215,.35,.446,.526,.582],Ur=20,n4=256,Da=new $u,Og=new Ee;let $h=null,Yh=0,Kh=0,Zh=!1;const i4=new H;class Bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=i4}=r;$h=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($h,Yh,Kh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Xs,format:Ui,colorSpace:eu,depthBuffer:!1},s=kg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=s4(r)),this._blurMaterial=o4(r,e,n),this._ggxMaterial=r4(r,e,n)}return s}_compileMaterial(e){const n=new jn(new Zt,e);this._renderer.compile(n,Da)}_sceneToCubeUV(e,n,i,s,r){const l=new Fi(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Og),h.toneMapping=hs,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jn(new Il,new Xu({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Og),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const P=this._cubeSize;Po(s,x*P,M>2?P:0,P,P),h.setRenderTarget(s),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Zr||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Da)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-ur?i-g+ur:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-n,Po(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Da),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Po(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Da)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ur;m>Ur&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let y=0;for(let F=0;F<Ur;++F){const S=F/_,A=Math.exp(-S*S/2);p.push(A),F===0?y+=A:F<m&&(y+=2*A)}for(let F=0;F<p.length;F++)p[F]=p[F]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const x=this._sizeLods[s],P=3*x*(s>M-ur?s-M+ur:0),T=4*(this._cubeSize-x);Po(n,P,T,3*x,2*x),l.setRenderTarget(n),l.render(h,Da)}}function s4(t){const e=[],n=[],i=[];let s=t;const r=t-ur+1+Ug.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-ur?l=Ug[o-t+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){const F=T%3*2/3-1,S=T>2?0:-1,A=[F,S,0,F+2/3,S,0,F+2/3,S+1,0,F,S,0,F+2/3,S+1,0,F,S+1,0];y.set(A,_*g*T),M.set(f,m*g*T);const I=[T,T,T,T,T,T];x.set(I,p*g*T)}const P=new Zt;P.setAttribute("position",new dn(y,_)),P.setAttribute("uv",new dn(M,m)),P.setAttribute("faceIndex",new dn(x,p)),i.push(new jn(P,null)),s>ur&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function kg(t,e,n){const i=new fs(t,e,n);return i.texture.mapping=Wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function r4(t,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function o4(t,e,n){const i=new Float32Array(Ur),s=new H(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Gg(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Hg(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}class y2 extends fs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new d2(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Il(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:Ns});r.uniforms.tEquirect.value=n;const o=new jn(s,r),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=$t),new fT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function a4(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Sh||d===Mh)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new y2(g.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,g=d===Sh||d===Mh,_=d===Zr||d===ta;if(g||_){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Bg(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Bg(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Sh?f.mapping=Zr:d===Mh&&(f.mapping=ta),f}function l(f){let d=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function c(f){const d=f.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function l4(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&yd("WebGLRenderer: "+i+" extension not supported."),s}}}function c4(t,e,n,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const y=d.array;_=d.version;for(let M=0,x=y.length;M<x;M+=3){const P=y[M+0],T=y[M+1],F=y[M+2];f.push(P,T,T,F,F,P)}}else{const y=g.array;_=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const P=M+0,T=M+1,F=M+2;f.push(P,T,T,F,F,P)}}const m=new(g.count>=65535?l2:a2)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function u4(t,e,n){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){t.drawElements(i,f,r,h*o),n.update(f,i,1)}function c(h,f,d){d!==0&&(t.drawElementsInstanced(i,f,r,h*o,d),n.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function h4(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function f4(t,e,n){const i=new WeakMap,s=new nn;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let I=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var d=I;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*T*4*h),S=new i2(F,P,T,h);S.type=os,S.needsUpdate=!0;const A=x*4;for(let w=0;w<h;w++){const L=p[w],V=y[w],$=M[w],O=P*T*4*w;for(let z=0;z<L.count;z++){const k=z*A;g===!0&&(s.fromBufferAttribute(L,z),F[O+k+0]=s.x,F[O+k+1]=s.y,F[O+k+2]=s.z,F[O+k+3]=0),_===!0&&(s.fromBufferAttribute(V,z),F[O+k+4]=s.x,F[O+k+5]=s.y,F[O+k+6]=s.z,F[O+k+7]=0),m===!0&&(s.fromBufferAttribute($,z),F[O+k+8]=s.x,F[O+k+9]=s.y,F[O+k+10]=s.z,F[O+k+11]=$.itemSize===4?s.w:1)}}f={count:h,texture:S,size:new ft(P,T)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function d4(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const p4={[Hx]:"LINEAR_TONE_MAPPING",[zx]:"REINHARD_TONE_MAPPING",[Vx]:"CINEON_TONE_MAPPING",[Wx]:"ACES_FILMIC_TONE_MAPPING",[jx]:"AGX_TONE_MAPPING",[qx]:"NEUTRAL_TONE_MAPPING",[Xx]:"CUSTOM_TONE_MAPPING"};function m4(t,e,n,i,s){const r=new fs(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new ia(e,n):void 0}),o=new fs(e,n,{type:Xs,depthBuffer:!1,stencilBuffer:!1}),a=new Zt;a.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new cn([0,2,0,0,2,0],2));const l=new lT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new jn(a,l),u=new $u(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(y,M){r.setSize(y,M),o.setSize(y,M);for(let x=0;x<m.length;x++){const P=m[x];P.setSize&&P.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,x=r.height;for(let P=0;P<m.length;P++){const T=m[P];T.setSize&&T.setSize(M,x)}},this.begin=function(y,M){if(d||y.toneMapping===hs&&m.length===0)return!1;if(_=M,M!==null){const x=M.width,P=M.height;(r.width!==x||r.height!==P)&&this.setSize(x,P)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=hs,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=g,d=!0;let x=r,P=o;for(let T=0;T<m.length;T++){const F=m[T];if(F.enabled!==!1&&(F.render(y,P,x,M),F.needsSwap!==!1)){const S=x;x=P,P=S}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},gt.getTransfer(h)===At&&(l.defines.SRGB_TRANSFER="");const T=p4[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(_),y.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const S2=new An,Md=new ia(1,1),M2=new i2,E2=new Ub,b2=new d2,zg=[],Vg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),jg=new Float32Array(4);function xa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=zg[s];if(r===void 0&&(r=new Float32Array(s),zg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function vn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ku(t,e){let n=Vg[e];n===void 0&&(n=new Int32Array(e),Vg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function g4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;t.uniform2fv(this.addr,e),xn(n,e)}}function v4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vn(n,e))return;t.uniform3fv(this.addr,e),xn(n,e)}}function x4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;t.uniform4fv(this.addr,e),xn(n,e)}}function y4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,i))return;jg.set(i),t.uniformMatrix2fv(this.addr,!1,jg),xn(n,i)}}function S4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,i))return;Xg.set(i),t.uniformMatrix3fv(this.addr,!1,Xg),xn(n,i)}}function M4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,i))return;Wg.set(i),t.uniformMatrix4fv(this.addr,!1,Wg),xn(n,i)}}function E4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function b4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;t.uniform2iv(this.addr,e),xn(n,e)}}function T4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;t.uniform3iv(this.addr,e),xn(n,e)}}function w4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;t.uniform4iv(this.addr,e),xn(n,e)}}function A4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function R4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;t.uniform2uiv(this.addr,e),xn(n,e)}}function C4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;t.uniform3uiv(this.addr,e),xn(n,e)}}function P4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;t.uniform4uiv(this.addr,e),xn(n,e)}}function I4(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Md.compareFunction=n.isReversedDepthBuffer()?zp:Hp,r=Md):r=S2,n.setTexture2D(e||r,s)}function D4(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||E2,s)}function L4(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||b2,s)}function F4(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||M2,s)}function N4(t){switch(t){case 5126:return g4;case 35664:return _4;case 35665:return v4;case 35666:return x4;case 35674:return y4;case 35675:return S4;case 35676:return M4;case 5124:case 35670:return E4;case 35667:case 35671:return b4;case 35668:case 35672:return T4;case 35669:case 35673:return w4;case 5125:return A4;case 36294:return R4;case 36295:return C4;case 36296:return P4;case 35678:case 36198:case 36298:case 36306:case 35682:return I4;case 35679:case 36299:case 36307:return D4;case 35680:case 36300:case 36308:case 36293:return L4;case 36289:case 36303:case 36311:case 36292:return F4}}function U4(t,e){t.uniform1fv(this.addr,e)}function O4(t,e){const n=xa(e,this.size,2);t.uniform2fv(this.addr,n)}function B4(t,e){const n=xa(e,this.size,3);t.uniform3fv(this.addr,n)}function k4(t,e){const n=xa(e,this.size,4);t.uniform4fv(this.addr,n)}function G4(t,e){const n=xa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function H4(t,e){const n=xa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z4(t,e){const n=xa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function V4(t,e){t.uniform1iv(this.addr,e)}function W4(t,e){t.uniform2iv(this.addr,e)}function X4(t,e){t.uniform3iv(this.addr,e)}function j4(t,e){t.uniform4iv(this.addr,e)}function q4(t,e){t.uniform1uiv(this.addr,e)}function $4(t,e){t.uniform2uiv(this.addr,e)}function Y4(t,e){t.uniform3uiv(this.addr,e)}function K4(t,e){t.uniform4uiv(this.addr,e)}function Z4(t,e,n){const i=this.cache,s=e.length,r=Ku(n,s);vn(i,r)||(t.uniform1iv(this.addr,r),xn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Md:o=S2;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function J4(t,e,n){const i=this.cache,s=e.length,r=Ku(n,s);vn(i,r)||(t.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||E2,r[o])}function Q4(t,e,n){const i=this.cache,s=e.length,r=Ku(n,s);vn(i,r)||(t.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||b2,r[o])}function eR(t,e,n){const i=this.cache,s=e.length,r=Ku(n,s);vn(i,r)||(t.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||M2,r[o])}function tR(t){switch(t){case 5126:return U4;case 35664:return O4;case 35665:return B4;case 35666:return k4;case 35674:return G4;case 35675:return H4;case 35676:return z4;case 5124:case 35670:return V4;case 35667:case 35671:return W4;case 35668:case 35672:return X4;case 35669:case 35673:return j4;case 5125:return q4;case 36294:return $4;case 36295:return Y4;case 36296:return K4;case 35678:case 36198:case 36298:case 36306:case 35682:return Z4;case 35679:case 36299:case 36307:return J4;case 35680:case 36300:case 36308:case 36293:return Q4;case 36289:case 36303:case 36311:case 36292:return eR}}class nR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=N4(n.type)}}class iR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tR(n.type)}}class sR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function qg(t,e){t.seq.push(e),t.map[e.id]=e}function rR(t,e,n){const i=t.name,s=i.length;for(Jh.lastIndex=0;;){const r=Jh.exec(i),o=Jh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qg(n,c===void 0?new nR(a,t,e):new iR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new sR(a),qg(n,h)),n=h}}}class Lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);rR(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function $g(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oR=37297;let aR=0;function lR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Yg=new st;function cR(t){gt._getMatrix(Yg,gt.workingColorSpace,t);const e=`mat3( ${Yg.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case tu:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+lR(t.getShaderSource(e),a)}else return r}function uR(t,e){const n=cR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hR={[Hx]:"Linear",[zx]:"Reinhard",[Vx]:"Cineon",[Wx]:"ACESFilmic",[jx]:"AgX",[qx]:"Neutral",[Xx]:"Custom"};function fR(t,e){const n=hR[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xc=new H;function dR(){gt.getLuminanceCoefficients(xc);const t=xc.x.toFixed(4),e=xc.y.toFixed(4),n=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function mR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ka(t){return t!==""}function Zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(t){return t.replace(_R,xR)}const vR=new Map;function xR(t,e){let n=ut[e];if(n===void 0){const i=vR.get(e);if(i!==void 0)n=ut[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(n)}const yR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(t){return t.replace(yR,SR)}function SR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function e_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const MR={[Rc]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function ER(t){return MR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bR={[Zr]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[Wu]:"ENVMAP_TYPE_CUBE_UV"};function TR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":bR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const wR={[ta]:"ENVMAP_MODE_REFRACTION"};function AR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":wR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RR={[Gx]:"ENVMAP_BLENDING_MULTIPLY",[QE]:"ENVMAP_BLENDING_MIX",[eb]:"ENVMAP_BLENDING_ADD"};function CR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":RR[t.combine]||"ENVMAP_BLENDING_NONE"}function PR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function IR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ER(n),c=TR(n),u=AR(n),h=CR(n),f=PR(n),d=pR(n),g=mR(r),_=s.createProgram();let m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(m=[e_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[e_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hs?"#define TONE_MAPPING":"",n.toneMapping!==hs?ut.tonemapping_pars_fragment:"",n.toneMapping!==hs?fR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,uR("linearToOutputTexel",n.outputColorSpace),dR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),o=Ed(o),o=Zg(o,n),o=Jg(o,n),a=Ed(a),a=Zg(a,n),a=Jg(a,n),o=Qg(o),a=Qg(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===og?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,x=y+p+a,P=$g(s,s.VERTEX_SHADER,M),T=$g(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,T),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function F(w){if(t.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(P)||"",$=s.getShaderInfoLog(T)||"",O=L.trim(),z=V.trim(),k=$.trim();let Q=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,P,T);else{const ce=Kg(s,P,"vertex"),pe=Kg(s,T,"fragment");_t("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+ce+`
`+pe)}else O!==""?Ze("WebGLProgram: Program Info Log:",O):(z===""||k==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Q,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(T),S=new Lc(s,_),A=gR(s,_)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,oR)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let DR=0;class LR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FR(e),n.set(e,i)),i}}class FR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function NR(t){return t===Jr||t===Jc||t===Qc}function UR(t,e,n,i,s,r){const o=new s2,a=new LR,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,A,I,w,L,V){const $=w.fog,O=L.geometry,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?w.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Q=e.get(S.envMap||z,k),ee=Q&&Q.mapping===Wu?Q.image.height:null,ce=d[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ze("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Te=pe!==void 0?pe.length:0;let Oe=0;O.morphAttributes.position!==void 0&&(Oe=1),O.morphAttributes.normal!==void 0&&(Oe=2),O.morphAttributes.color!==void 0&&(Oe=3);let ct,et,se,we;if(ce){const ot=is[ce];ct=ot.vertexShader,et=ot.fragmentShader}else ct=S.vertexShader,et=S.fragmentShader,a.update(S),se=a.getVertexShaderID(S),we=a.getFragmentShaderID(S);const _e=t.getRenderTarget(),je=t.state.buffers.depth.getReversed(),qe=L.isInstancedMesh===!0,Je=L.isBatchedMesh===!0,D=!!S.map,N=!!S.matcap,X=!!Q,ne=!!S.aoMap,Y=!!S.lightMap,re=!!S.bumpMap,he=!!S.normalMap,ge=!!S.displacementMap,R=!!S.emissiveMap,oe=!!S.metalnessMap,xe=!!S.roughnessMap,fe=S.anisotropy>0,J=S.clearcoat>0,Ie=S.dispersion>0,b=S.iridescence>0,v=S.sheen>0,B=S.transmission>0,K=fe&&!!S.anisotropyMap,ae=J&&!!S.clearcoatMap,de=J&&!!S.clearcoatNormalMap,me=J&&!!S.clearcoatRoughnessMap,Z=b&&!!S.iridescenceMap,le=b&&!!S.iridescenceThicknessMap,ye=v&&!!S.sheenColorMap,Ae=v&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ve=!!S.specularColorMap,it=!!S.specularIntensityMap,lt=B&&!!S.transmissionMap,St=B&&!!S.thicknessMap,U=!!S.gradientMap,Me=!!S.alphaMap,ie=S.alphaTest>0,De=!!S.alphaHash,be=!!S.extensions;let ue=hs;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ue=t.toneMapping);const ke={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:et,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Je,batchingColor:Je&&L._colorsTexture!==null,instancing:qe,instancingColor:qe&&L.instanceColor!==null,instancingMorph:qe&&L.morphTexture!==null,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:D,matcap:N,envMap:X,envMapMode:X&&Q.mapping,envMapCubeUVHeight:ee,aoMap:ne,lightMap:Y,bumpMap:re,normalMap:he,displacementMap:ge,emissiveMap:R,normalMapObjectSpace:he&&S.normalMapType===ib,normalMapTangentSpace:he&&S.normalMapType===sg,packedNormalMap:he&&S.normalMapType===sg&&NR(S.normalMap.format),metalnessMap:oe,roughnessMap:xe,anisotropy:fe,anisotropyMap:K,clearcoat:J,clearcoatMap:ae,clearcoatNormalMap:de,clearcoatRoughnessMap:me,dispersion:Ie,iridescence:b,iridescenceMap:Z,iridescenceThicknessMap:le,sheen:v,sheenColorMap:ye,sheenRoughnessMap:Ae,specularMap:Se,specularColorMap:ve,specularIntensityMap:it,transmission:B,transmissionMap:lt,thicknessMap:St,gradientMap:U,opaque:S.transparent===!1&&S.blending===fr&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:ie,alphaHash:De,combine:S.combine,mapUv:D&&g(S.map.channel),aoMapUv:ne&&g(S.aoMap.channel),lightMapUv:Y&&g(S.lightMap.channel),bumpMapUv:re&&g(S.bumpMap.channel),normalMapUv:he&&g(S.normalMap.channel),displacementMapUv:ge&&g(S.displacementMap.channel),emissiveMapUv:R&&g(S.emissiveMap.channel),metalnessMapUv:oe&&g(S.metalnessMap.channel),roughnessMapUv:xe&&g(S.roughnessMap.channel),anisotropyMapUv:K&&g(S.anisotropyMap.channel),clearcoatMapUv:ae&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Se&&g(S.specularMap.channel),specularColorMapUv:ve&&g(S.specularColorMap.channel),specularIntensityMapUv:it&&g(S.specularIntensityMap.channel),transmissionMapUv:lt&&g(S.transmissionMap.channel),thicknessMapUv:St&&g(S.thicknessMap.channel),alphaMapUv:Me&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||fe),vertexNormals:!!O.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(D||Me),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||O.attributes.normal===void 0&&he===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:je,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,decodeVideoTexture:D&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===At,decodeVideoTextureEmissive:R&&S.emissiveMap.isVideoTexture===!0&&gt.getTransfer(S.emissiveMap.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===Qn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)A.push(I),A.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(p(A,S),y(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function p(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function M(S){const A=d[S.type];let I;if(A){const w=is[A];I=rT.clone(w.uniforms)}else I=S.uniforms;return I}function x(S,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new IR(t,A,S,s),c.push(I),u.set(A,I)),I}function P(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){a.remove(S)}function F(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:P,releaseShaderCache:T,programs:c,dispose:F}}function OR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function BR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function t_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function n_(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,_,m,p){let y=t[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},t[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=g,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=p),e++,y}function l(f,d,g,_,m,p){const y=a(f,d,g,_,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):n.push(y)}function c(f,d,g,_,m,p){const y=a(f,d,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):n.unshift(y)}function u(f,d){n.length>1&&n.sort(f||BR),i.length>1&&i.sort(d||t_),s.length>1&&s.sort(d||t_)}function h(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function kR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new n_,t.set(i,[o])):s>=r.length?(o=new n_,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function GR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ee};break;case"SpotLight":n={position:new H,direction:new H,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":n={color:new Ee,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function HR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zR=0;function VR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WR(t){const e=new GR,n=HR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new Yt,o=new Yt;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,M=0,x=0,P=0,T=0,F=0;c.sort(VR);for(let A=0,I=c.length;A<I;A++){const w=c[A],L=w.color,V=w.intensity,$=w.distance;let O=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Jr?O=w.shadow.map.texture:O=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*V,h+=L.g*V,f+=L.b*V;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],V);F++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,Q=n.get(w);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=w.shadow.matrix,y++}i.directional[d]=z,d++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(V),z.distance=$,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[_]=z;const k=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,k.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[_]=k.matrix,w.castShadow){const Q=n.get(w);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=O,x++}_++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(L).multiplyScalar(V),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=z,m++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const k=w.shadow,Q=n.get(w);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=w.shadow.matrix,M++}i.point[g]=z,g++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(V),z.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[p]=z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==x||S.numSpotMaps!==P||S.numLightProbes!==F)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=F,S.directionalLength=d,S.pointLength=g,S.spotLength=_,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=x,S.numSpotMaps=P,S.numLightProbes=F,i.version=zR++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function i_(t){const e=new WR(t),n=[],i=[],s=[];function r(f){h.camera=f,n.length=0,i.length=0,s.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function XR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new i_(t),e.set(s,[a])):r>=o.length?(a=new i_(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const jR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qR=`uniform sampler2D shadow_pass;
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
}`,$R=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],YR=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],s_=new Yt,La=new H,Qh=new H;function KR(t,e,n){let i=new h2;const s=new ft,r=new ft,o=new nn,a=new cT,l=new uT,c={},u=n.maxTextureSize,h={[gr]:Qn,[Qn]:gr,[li]:li},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:jR,fragmentShader:qR}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(T,F,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===NE&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Rc);const A=t.getRenderTarget(),I=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Ns),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=p!==this.type;V&&F.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(O=>O.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,O=T.length;$<O;$++){const z=T[$],k=z.shadow;if(k===void 0){Ze("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Q=k.getFrameExtents();s.multiply(Q),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y));const ee=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ee,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Oa){if(z.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new fs(s.x,s.y,{format:Jr,type:Xs,minFilter:$t,magFilter:$t,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new ia(s.x,s.y,os),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=js,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Tn,k.map.depthTexture.magFilter=Tn}else z.isPointLight?(k.map=new y2(s.x),k.map.depthTexture=new iT(s.x,ms)):(k.map=new fs(s.x,s.y),k.map.depthTexture=new ia(s.x,s.y,ms)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=js,this.type===Rc?(k.map.depthTexture.compareFunction=ee?zp:Hp,k.map.depthTexture.minFilter=$t,k.map.depthTexture.magFilter=$t):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Tn,k.map.depthTexture.magFilter=Tn);k.camera.updateProjectionMatrix()}const ce=k.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,pe),t.clear();else{pe===0&&(t.setRenderTarget(k.map),t.clear());const Te=k.getViewport(pe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),L.viewport(o)}if(z.isPointLight){const Te=k.camera,Oe=k.matrix,ct=z.distance||Te.far;ct!==Te.far&&(Te.far=ct,Te.updateProjectionMatrix()),La.setFromMatrixPosition(z.matrixWorld),Te.position.copy(La),Qh.copy(Te.position),Qh.add($R[pe]),Te.up.copy(YR[pe]),Te.lookAt(Qh),Te.updateMatrixWorld(),Oe.makeTranslation(-La.x,-La.y,-La.z),s_.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),k._frustum.setFromProjectionMatrix(s_,Te.coordinateSystem,Te.reversedDepth)}else k.updateMatrices(z);i=k.getFrustum(),x(F,S,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Oa&&y(k,S),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(A,I,w)};function y(T,F){const S=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fs(s.x,s.y,{format:Jr,type:Xs})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(F,null,S,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(F,null,S,d,_,null)}function M(T,F,S,A){let I=null;const w=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)I=w;else if(I=S.isPointLight===!0?l:a,t.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const L=I.uuid,V=F.uuid;let $=c[L];$===void 0&&($={},c[L]=$);let O=$[V];O===void 0&&(O=I.clone(),$[V]=O,F.addEventListener("dispose",P)),I=O}if(I.visible=F.visible,I.wireframe=F.wireframe,A===Oa?I.side=F.shadowSide!==null?F.shadowSide:F.side:I.side=F.shadowSide!==null?F.shadowSide:h[F.side],I.alphaMap=F.alphaMap,I.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,I.map=F.map,I.clipShadows=F.clipShadows,I.clippingPlanes=F.clippingPlanes,I.clipIntersection=F.clipIntersection,I.displacementMap=F.displacementMap,I.displacementScale=F.displacementScale,I.displacementBias=F.displacementBias,I.wireframeLinewidth=F.wireframeLinewidth,I.linewidth=F.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=t.properties.get(I);L.light=S}return I}function x(T,F,S,A,I){if(T.visible===!1)return;if(T.layers.test(F.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Oa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const V=e.update(T),$=T.material;if(Array.isArray($)){const O=V.groups;for(let z=0,k=O.length;z<k;z++){const Q=O[z],ee=$[Q.materialIndex];if(ee&&ee.visible){const ce=M(T,ee,A,I);T.onBeforeShadow(t,T,F,S,V,ce,Q),t.renderBufferDirect(S,null,V,ce,T,Q),T.onAfterShadow(t,T,F,S,V,ce,Q)}}}else if($.visible){const O=M(T,$,A,I);T.onBeforeShadow(t,T,F,S,V,O,null),t.renderBufferDirect(S,null,V,O,T,null),T.onAfterShadow(t,T,F,S,V,O,null)}}const L=T.children;for(let V=0,$=L.length;V<$;V++)x(L[V],F,S,A,I)}function P(T){T.target.removeEventListener("dispose",P);for(const S in c){const A=c[S],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function ZR(t,e){function n(){let U=!1;const Me=new nn;let ie=null;const De=new nn(0,0,0,0);return{setMask:function(be){ie!==be&&!U&&(t.colorMask(be,be,be,be),ie=be)},setLocked:function(be){U=be},setClear:function(be,ue,ke,ot,Jt){Jt===!0&&(be*=ot,ue*=ot,ke*=ot),Me.set(be,ue,ke,ot),De.equals(Me)===!1&&(t.clearColor(be,ue,ke,ot),De.copy(Me))},reset:function(){U=!1,ie=null,De.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,ie=null,De=null,be=null;return{setReversed:function(ue){if(Me!==ue){const ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Me=ue;const ot=be;be=null,this.setClear(ot)}},getReversed:function(){return Me},setTest:function(ue){ue?_e(t.DEPTH_TEST):je(t.DEPTH_TEST)},setMask:function(ue){ie!==ue&&!U&&(t.depthMask(ue),ie=ue)},setFunc:function(ue){if(Me&&(ue=db[ue]),De!==ue){switch(ue){case Ff:t.depthFunc(t.NEVER);break;case Nf:t.depthFunc(t.ALWAYS);break;case Uf:t.depthFunc(t.LESS);break;case ea:t.depthFunc(t.LEQUAL);break;case Of:t.depthFunc(t.EQUAL);break;case Bf:t.depthFunc(t.GEQUAL);break;case kf:t.depthFunc(t.GREATER);break;case Gf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){U=ue},setClear:function(ue){be!==ue&&(be=ue,Me&&(ue=1-ue),t.clearDepth(ue))},reset:function(){U=!1,ie=null,De=null,be=null,Me=!1}}}function s(){let U=!1,Me=null,ie=null,De=null,be=null,ue=null,ke=null,ot=null,Jt=null;return{setTest:function(Ct){U||(Ct?_e(t.STENCIL_TEST):je(t.STENCIL_TEST))},setMask:function(Ct){Me!==Ct&&!U&&(t.stencilMask(Ct),Me=Ct)},setFunc:function(Ct,Ss,Xi){(ie!==Ct||De!==Ss||be!==Xi)&&(t.stencilFunc(Ct,Ss,Xi),ie=Ct,De=Ss,be=Xi)},setOp:function(Ct,Ss,Xi){(ue!==Ct||ke!==Ss||ot!==Xi)&&(t.stencilOp(Ct,Ss,Xi),ue=Ct,ke=Ss,ot=Xi)},setLocked:function(Ct){U=Ct},setClear:function(Ct){Jt!==Ct&&(t.clearStencil(Ct),Jt=Ct)},reset:function(){U=!1,Me=null,ie=null,De=null,be=null,ue=null,ke=null,ot=null,Jt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,x=null,P=null,T=null,F=null,S=new Ee(0,0,0),A=0,I=!1,w=null,L=null,V=null,$=null,O=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Q=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=Q>=2);let ce=null,pe={};const Te=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),ct=new nn().fromArray(Te),et=new nn().fromArray(Oe);function se(U,Me,ie,De){const be=new Uint8Array(4),ue=t.createTexture();t.bindTexture(U,ue),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<ie;ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Me+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return ue}const we={};we[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),o.setFunc(ea),re(!1),he(tg),_e(t.CULL_FACE),ne(Ns);function _e(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function je(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function qe(U,Me){return f[U]!==Me?(t.bindFramebuffer(U,Me),f[U]=Me,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Me),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function Je(U,Me){let ie=g,De=!1;if(U){ie=d.get(Me),ie===void 0&&(ie=[],d.set(Me,ie));const be=U.textures;if(ie.length!==be.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,ke=be.length;ue<ke;ue++)ie[ue]=t.COLOR_ATTACHMENT0+ue;ie.length=be.length,De=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,De=!0);De&&t.drawBuffers(ie)}function D(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const N={[Nr]:t.FUNC_ADD,[UE]:t.FUNC_SUBTRACT,[OE]:t.FUNC_REVERSE_SUBTRACT};N[BE]=t.MIN,N[kE]=t.MAX;const X={[GE]:t.ZERO,[HE]:t.ONE,[zE]:t.SRC_COLOR,[Kc]:t.SRC_ALPHA,[$E]:t.SRC_ALPHA_SATURATE,[jE]:t.DST_COLOR,[WE]:t.DST_ALPHA,[VE]:t.ONE_MINUS_SRC_COLOR,[Zc]:t.ONE_MINUS_SRC_ALPHA,[qE]:t.ONE_MINUS_DST_COLOR,[XE]:t.ONE_MINUS_DST_ALPHA,[YE]:t.CONSTANT_COLOR,[KE]:t.ONE_MINUS_CONSTANT_COLOR,[ZE]:t.CONSTANT_ALPHA,[JE]:t.ONE_MINUS_CONSTANT_ALPHA};function ne(U,Me,ie,De,be,ue,ke,ot,Jt,Ct){if(U===Ns){m===!0&&(je(t.BLEND),m=!1);return}if(m===!1&&(_e(t.BLEND),m=!0),U!==kx){if(U!==p||Ct!==I){if((y!==Nr||P!==Nr)&&(t.blendEquation(t.FUNC_ADD),y=Nr,P=Nr),Ct)switch(U){case fr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xn:t.blendFunc(t.ONE,t.ONE);break;case ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ig:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:_t("WebGLState: Invalid blending: ",U);break}else switch(U){case fr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ng:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ig:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",U);break}M=null,x=null,T=null,F=null,S.set(0,0,0),A=0,p=U,I=Ct}return}be=be||Me,ue=ue||ie,ke=ke||De,(Me!==y||be!==P)&&(t.blendEquationSeparate(N[Me],N[be]),y=Me,P=be),(ie!==M||De!==x||ue!==T||ke!==F)&&(t.blendFuncSeparate(X[ie],X[De],X[ue],X[ke]),M=ie,x=De,T=ue,F=ke),(ot.equals(S)===!1||Jt!==A)&&(t.blendColor(ot.r,ot.g,ot.b,Jt),S.copy(ot),A=Jt),p=U,I=!1}function Y(U,Me){U.side===li?je(t.CULL_FACE):_e(t.CULL_FACE);let ie=U.side===Qn;Me&&(ie=!ie),re(ie),U.blending===fr&&U.transparent===!1?ne(Ns):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const De=U.stencilWrite;a.setTest(De),De&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),R(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):je(t.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function he(U){U!==LE?(_e(t.CULL_FACE),U!==L&&(U===tg?t.cullFace(t.BACK):U===FE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):je(t.CULL_FACE),L=U}function ge(U){U!==V&&(k&&t.lineWidth(U),V=U)}function R(U,Me,ie){U?(_e(t.POLYGON_OFFSET_FILL),($!==Me||O!==ie)&&($=Me,O=ie,o.getReversed()&&(Me=-Me),t.polygonOffset(Me,ie))):je(t.POLYGON_OFFSET_FILL)}function oe(U){U?_e(t.SCISSOR_TEST):je(t.SCISSOR_TEST)}function xe(U){U===void 0&&(U=t.TEXTURE0+z-1),ce!==U&&(t.activeTexture(U),ce=U)}function fe(U,Me,ie){ie===void 0&&(ce===null?ie=t.TEXTURE0+z-1:ie=ce);let De=pe[ie];De===void 0&&(De={type:void 0,texture:void 0},pe[ie]=De),(De.type!==U||De.texture!==Me)&&(ce!==ie&&(t.activeTexture(ie),ce=ie),t.bindTexture(U,Me||we[U]),De.type=U,De.texture=Me)}function J(){const U=pe[ce];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ie(){try{t.compressedTexImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function v(){try{t.texSubImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function B(){try{t.texSubImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function ae(){try{t.compressedTexSubImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function de(){try{t.texStorage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function me(){try{t.texStorage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function Z(){try{t.texImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function le(){try{t.texImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function ye(U){return h[U]!==void 0?h[U]:t.getParameter(U)}function Ae(U,Me){h[U]!==Me&&(t.pixelStorei(U,Me),h[U]=Me)}function Se(U){ct.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function ve(U){et.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function it(U,Me){let ie=c.get(Me);ie===void 0&&(ie=new WeakMap,c.set(Me,ie));let De=ie.get(U);De===void 0&&(De=t.getUniformBlockIndex(Me,U.name),ie.set(U,De))}function lt(U,Me){const De=c.get(Me).get(U);l.get(Me)!==De&&(t.uniformBlockBinding(Me,De,U.__bindingPointIndex),l.set(Me,De))}function St(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},ce=null,pe={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,y=null,M=null,x=null,P=null,T=null,F=null,S=new Ee(0,0,0),A=0,I=!1,w=null,L=null,V=null,$=null,O=null,ct.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:je,bindFramebuffer:qe,drawBuffers:Je,useProgram:D,setBlending:ne,setMaterial:Y,setFlipSided:re,setCullFace:he,setLineWidth:ge,setPolygonOffset:R,setScissorTest:oe,activeTexture:xe,bindTexture:fe,unbindTexture:J,compressedTexImage2D:Ie,compressedTexImage3D:b,texImage2D:Z,texImage3D:le,pixelStorei:Ae,getParameter:ye,updateUBOMapping:it,uniformBlockBinding:lt,texStorage2D:de,texStorage3D:me,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:K,compressedTexSubImage3D:ae,scissor:Se,viewport:ve,reset:St}}function JR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return g?new OffscreenCanvas(b,v):iu("canvas")}function m(b,v,B){let K=1;const ae=Ie(b);if((ae.width>B||ae.height>B)&&(K=B/Math.max(ae.width,ae.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(K*ae.width),me=Math.floor(K*ae.height);f===void 0&&(f=_(de,me));const Z=v?_(de,me):f;return Z.width=de,Z.height=me,Z.getContext("2d").drawImage(b,0,0,de,me),Ze("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+de+"x"+me+")."),Z}else return"data"in b&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),b;return b}function p(b){return b.generateMipmaps}function y(b){t.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(b,v,B,K,ae,de=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let me;K&&(me=e.get("EXT_texture_norm16"),me||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8),B===t.UNSIGNED_SHORT&&me&&(Z=me.R16_EXT),B===t.SHORT&&me&&(Z=me.R16_SNORM_EXT)),v===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),v===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8),B===t.UNSIGNED_SHORT&&me&&(Z=me.RG16_EXT),B===t.SHORT&&me&&(Z=me.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),v===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),B===t.UNSIGNED_INT&&(Z=t.RGB32UI),B===t.BYTE&&(Z=t.RGB8I),B===t.SHORT&&(Z=t.RGB16I),B===t.INT&&(Z=t.RGB32I)),v===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),B===t.UNSIGNED_INT&&(Z=t.RGBA32UI),B===t.BYTE&&(Z=t.RGBA8I),B===t.SHORT&&(Z=t.RGBA16I),B===t.INT&&(Z=t.RGBA32I)),v===t.RGB&&(B===t.UNSIGNED_SHORT&&me&&(Z=me.RGB16_EXT),B===t.SHORT&&me&&(Z=me.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),v===t.RGBA){const le=de?tu:gt.getTransfer(ae);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=le===At?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&me&&(Z=me.RGBA16_EXT),B===t.SHORT&&me&&(Z=me.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function P(b,v){let B;return b?v===null||v===ms||v===fl?B=t.DEPTH24_STENCIL8:v===os?B=t.DEPTH32F_STENCIL8:v===hl&&(B=t.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ms||v===fl?B=t.DEPTH_COMPONENT24:v===os?B=t.DEPTH_COMPONENT32F:v===hl&&(B=t.DEPTH_COMPONENT16),B}function T(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tn&&b.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function F(b){const v=b.target;v.removeEventListener("dispose",F),A(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function S(b){const v=b.target;v.removeEventListener("dispose",S),w(v)}function A(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,K=d.get(B);if(K){const ae=K[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&I(b),Object.keys(K).length===0&&d.delete(B)}i.remove(b)}function I(b){const v=i.get(b);t.deleteTexture(v.__webglTexture);const B=b.source,K=d.get(B);delete K[v.__cacheKey],o.memory.textures--}function w(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ae=0;ae<v.__webglFramebuffer[K].length;ae++)t.deleteFramebuffer(v.__webglFramebuffer[K][ae]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let K=0,ae=B.length;K<ae;K++){const de=i.get(B[K]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(b)}let L=0;function V(){L=0}function $(){return L}function O(b){L=b}function z(){const b=L;return b>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function k(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Q(b,v){const B=i.get(b);if(b.isVideoTexture&&fe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const K=b.image;if(K===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{je(B,b,v);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+v)}function ee(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){je(B,b,v);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+v)}function ce(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){je(B,b,v);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+v)}function pe(b,v){const B=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){qe(B,b,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+v)}const Te={[Hf]:t.REPEAT,[Fs]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},Oe={[Tn]:t.NEAREST,[tb]:t.NEAREST_MIPMAP_NEAREST,[Xl]:t.NEAREST_MIPMAP_LINEAR,[$t]:t.LINEAR,[Eh]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},ct={[sb]:t.NEVER,[cb]:t.ALWAYS,[rb]:t.LESS,[Hp]:t.LEQUAL,[ob]:t.EQUAL,[zp]:t.GEQUAL,[ab]:t.GREATER,[lb]:t.NOTEQUAL};function et(b,v){if(v.type===os&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===Eh||v.magFilter===Xl||v.magFilter===kr||v.minFilter===$t||v.minFilter===Eh||v.minFilter===Xl||v.minFilter===kr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Te[v.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Te[v.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Te[v.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Oe[v.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Oe[v.minFilter]),v.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tn||v.minFilter!==Xl&&v.minFilter!==kr||v.type===os&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function se(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",F));const K=v.source;let ae=d.get(K);ae===void 0&&(ae={},d.set(K,ae));const de=k(v);if(de!==b.__cacheKey){ae[de]===void 0&&(ae[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ae[de].usedTimes++;const me=ae[b.__cacheKey];me!==void 0&&(ae[b.__cacheKey].usedTimes--,me.usedTimes===0&&I(v)),b.__cacheKey=de,b.__webglTexture=ae[de].texture}return B}function we(b,v,B){return Math.floor(Math.floor(b/B)/v)}function _e(b,v,B,K){const de=b.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,B,K,v.data);else{de.sort((Ae,Se)=>Ae.start-Se.start);let me=0;for(let Ae=1;Ae<de.length;Ae++){const Se=de[me],ve=de[Ae],it=Se.start+Se.count,lt=we(ve.start,v.width,4),St=we(Se.start,v.width,4);ve.start<=it+1&&lt===St&&we(ve.start+ve.count-1,v.width,4)===lt?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++me,de[me]=ve)}de.length=me+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),le=n.getParameter(t.UNPACK_SKIP_PIXELS),ye=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Ae=0,Se=de.length;Ae<Se;Ae++){const ve=de[Ae],it=Math.floor(ve.start/4),lt=Math.ceil(ve.count/4),St=it%v.width,U=Math.floor(it/v.width),Me=lt,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,St),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,St,U,Me,ie,B,K,v.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function je(b,v,B){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const ae=se(b,v),de=v.source;n.bindTexture(K,b.__webglTexture,t.TEXTURE0+B);const me=i.get(de);if(de.version!==me.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ie=gt.getPrimaries(gt.workingColorSpace),De=v.colorSpace===cr?null:gt.getPrimaries(v.colorSpace),be=v.colorSpace===cr||ie===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let le=m(v.image,!1,s.maxTextureSize);le=J(v,le);const ye=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type);let Se=x(v.internalFormat,ye,Ae,v.normalized,v.colorSpace,v.isVideoTexture);et(K,v);let ve;const it=v.mipmaps,lt=v.isVideoTexture!==!0,St=me.__version===void 0||ae===!0,U=de.dataReady,Me=T(v,le);if(v.isDepthTexture)Se=P(v.format===Gr,v.type),St&&(lt?n.texStorage2D(t.TEXTURE_2D,1,Se,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Se,le.width,le.height,0,ye,Ae,null));else if(v.isDataTexture)if(it.length>0){lt&&St&&n.texStorage2D(t.TEXTURE_2D,Me,Se,it[0].width,it[0].height);for(let ie=0,De=it.length;ie<De;ie++)ve=it[ie],lt?U&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ye,Ae,ve.data):n.texImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ye,Ae,ve.data);v.generateMipmaps=!1}else lt?(St&&n.texStorage2D(t.TEXTURE_2D,Me,Se,le.width,le.height),U&&_e(v,le,ye,Ae)):n.texImage2D(t.TEXTURE_2D,0,Se,le.width,le.height,0,ye,Ae,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){lt&&St&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Se,it[0].width,it[0].height,le.depth);for(let ie=0,De=it.length;ie<De;ie++)if(ve=it[ie],v.format!==Ui)if(ye!==null)if(lt){if(U)if(v.layerUpdates.size>0){const be=Ng(ve.width,ve.height,v.format,v.type);for(const ue of v.layerUpdates){const ke=ve.data.subarray(ue*be/ve.data.BYTES_PER_ELEMENT,(ue+1)*be/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,ue,ve.width,ve.height,1,ye,ke)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,le.depth,ye,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Se,ve.width,ve.height,le.depth,0,ve.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,le.depth,ye,Ae,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Se,ve.width,ve.height,le.depth,0,ye,Ae,ve.data)}else{lt&&St&&n.texStorage2D(t.TEXTURE_2D,Me,Se,it[0].width,it[0].height);for(let ie=0,De=it.length;ie<De;ie++)ve=it[ie],v.format!==Ui?ye!==null?lt?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ye,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?U&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ye,Ae,ve.data):n.texImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ye,Ae,ve.data)}else if(v.isDataArrayTexture)if(lt){if(St&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Se,le.width,le.height,le.depth),U)if(v.layerUpdates.size>0){const ie=Ng(le.width,le.height,v.format,v.type);for(const De of v.layerUpdates){const be=le.data.subarray(De*ie/le.data.BYTES_PER_ELEMENT,(De+1)*ie/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,le.width,le.height,1,ye,Ae,be)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Ae,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,ye,Ae,le.data);else if(v.isData3DTexture)lt?(St&&n.texStorage3D(t.TEXTURE_3D,Me,Se,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Ae,le.data)):n.texImage3D(t.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,ye,Ae,le.data);else if(v.isFramebufferTexture){if(St)if(lt)n.texStorage2D(t.TEXTURE_2D,Me,Se,le.width,le.height);else{let ie=le.width,De=le.height;for(let be=0;be<Me;be++)n.texImage2D(t.TEXTURE_2D,be,Se,ie,De,0,ye,Ae,null),ie>>=1,De>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),le.parentNode!==ie){ie.appendChild(le),h.add(v),ie.onpaint=ot=>{const Jt=ot.changedElements;for(const Ct of h)Jt.includes(Ct.image)&&(Ct.needsUpdate=!0)},ie.requestPaint();return}const De=0,be=t.RGBA,ue=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,De,be,ue,ke,le),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(it.length>0){if(lt&&St){const ie=Ie(it[0]);n.texStorage2D(t.TEXTURE_2D,Me,Se,ie.width,ie.height)}for(let ie=0,De=it.length;ie<De;ie++)ve=it[ie],lt?U&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ye,Ae,ve):n.texImage2D(t.TEXTURE_2D,ie,Se,ye,Ae,ve);v.generateMipmaps=!1}else if(lt){if(St){const ie=Ie(le);n.texStorage2D(t.TEXTURE_2D,Me,Se,ie.width,ie.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ae,le)}else n.texImage2D(t.TEXTURE_2D,0,Se,ye,Ae,le);p(v)&&y(K),me.__version=de.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function qe(b,v,B){if(v.image.length!==6)return;const K=se(b,v),ae=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const de=i.get(ae);if(ae.version!==de.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const me=gt.getPrimaries(gt.workingColorSpace),Z=v.colorSpace===cr?null:gt.getPrimaries(v.colorSpace),le=v.colorSpace===cr||me===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Ae=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!ye&&!Ae?Se[ue]=m(v.image[ue],!0,s.maxCubemapSize):Se[ue]=Ae?v.image[ue].image:v.image[ue],Se[ue]=J(v,Se[ue]);const ve=Se[0],it=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),St=x(v.internalFormat,it,lt,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,Me=de.__version===void 0||K===!0,ie=ae.dataReady;let De=T(v,ve);et(t.TEXTURE_CUBE_MAP,v);let be;if(ye){U&&Me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,St,ve.width,ve.height);for(let ue=0;ue<6;ue++){be=Se[ue].mipmaps;for(let ke=0;ke<be.length;ke++){const ot=be[ke];v.format!==Ui?it!==null?U?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,ot.width,ot.height,it,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,St,ot.width,ot.height,0,ot.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,ot.width,ot.height,it,lt,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,St,ot.width,ot.height,0,it,lt,ot.data)}}}else{if(be=v.mipmaps,U&&Me){be.length>0&&De++;const ue=Ie(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,St,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ae){U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,it,lt,Se[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,St,Se[ue].width,Se[ue].height,0,it,lt,Se[ue].data);for(let ke=0;ke<be.length;ke++){const Jt=be[ke].image[ue].image;U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,Jt.width,Jt.height,it,lt,Jt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,St,Jt.width,Jt.height,0,it,lt,Jt.data)}}else{U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,it,lt,Se[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,St,it,lt,Se[ue]);for(let ke=0;ke<be.length;ke++){const ot=be[ke];U?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,it,lt,ot.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,St,it,lt,ot.image[ue])}}}p(v)&&y(t.TEXTURE_CUBE_MAP),de.__version=ae.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Je(b,v,B,K,ae,de){const me=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),le=x(B.internalFormat,me,Z,B.normalized,B.colorSpace),ye=i.get(v),Ae=i.get(B);if(Ae.__renderTarget=v,!ye.__hasExternalTextures){const Se=Math.max(1,v.width>>de),ve=Math.max(1,v.height>>de);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,de,le,Se,ve,v.depth,0,me,Z,null):n.texImage2D(ae,de,le,Se,ve,0,me,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),xe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ae,Ae.__webglTexture,0,oe(v)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ae,Ae.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(b,v,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),v.depthBuffer){const K=v.depthTexture,ae=K&&K.isDepthTexture?K.type:null,de=P(v.stencilBuffer,ae),me=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(v),de,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(v),de,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,de,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,b)}else{const K=v.textures;for(let ae=0;ae<K.length;ae++){const de=K[ae],me=r.convert(de.format,de.colorSpace),Z=r.convert(de.type),le=x(de.internalFormat,me,Z,de.normalized,de.colorSpace);xe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(v),le,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(v),le,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,le,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function N(b,v,B){const K=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(v.depthTexture);if(ae.__renderTarget=v,(!ae.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,v.depthTexture.addEventListener("dispose",F)),ae.__webglTexture===void 0){ae.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),et(t.TEXTURE_CUBE_MAP,v.depthTexture);const ye=r.convert(v.depthTexture.format),Ae=r.convert(v.depthTexture.type);let Se;v.depthTexture.format===js?Se=t.DEPTH_COMPONENT24:v.depthTexture.format===Gr&&(Se=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,v.width,v.height,0,ye,Ae,null)}}else Q(v.depthTexture,0);const de=ae.__webglTexture,me=oe(v),Z=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,le=v.depthTexture.format===Gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===js)xe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,Z,de,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,le,Z,de,0);else if(v.depthTexture.format===Gr)xe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,Z,de,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,le,Z,de,0);else throw new Error("Unknown depthTexture format")}function X(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ae)};K.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=K}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)N(v.__webglFramebuffer[K],b,K);else{const K=b.texture.mipmaps;K&&K.length>0?N(v.__webglFramebuffer[0],b,0):N(v.__webglFramebuffer,b,0)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=t.createRenderbuffer(),D(v.__webglDepthbuffer[K],b,!1);else{const ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,de)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),D(v.__webglDepthbuffer,b,!1);else{const ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(b,v,B){const K=i.get(b);v!==void 0&&Je(K.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&X(b)}function Y(b){const v=b.texture,B=i.get(b),K=i.get(v);b.addEventListener("dispose",S);const ae=b.textures,de=b.isWebGLCubeRenderTarget===!0,me=ae.length>1;if(me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let le=0;le<v.mipmaps.length;le++)B.__webglFramebuffer[Z][le]=t.createFramebuffer()}else B.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)B.__webglFramebuffer[Z]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(me)for(let Z=0,le=ae.length;Z<le;Z++){const ye=i.get(ae[Z]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&xe(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<ae.length;Z++){const le=ae[Z];B.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ye=r.convert(le.format,le.colorSpace),Ae=r.convert(le.type),Se=x(le.internalFormat,ye,Ae,le.normalized,le.colorSpace,b.isXRRenderTarget===!0),ve=oe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Se,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),D(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),et(t.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Je(B.__webglFramebuffer[Z][le],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le);else Je(B.__webglFramebuffer[Z],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(v)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let Z=0,le=ae.length;Z<le;Z++){const ye=ae[Z],Ae=i.get(ye);let Se=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,Ae.__webglTexture),et(Se,ye),Je(B.__webglFramebuffer,b,ye,t.COLOR_ATTACHMENT0+Z,Se,0),p(ye)&&y(Se)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Z=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,K.__webglTexture),et(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Je(B.__webglFramebuffer[le],b,v,t.COLOR_ATTACHMENT0,Z,le);else Je(B.__webglFramebuffer,b,v,t.COLOR_ATTACHMENT0,Z,0);p(v)&&y(Z),n.unbindTexture()}b.depthBuffer&&X(b)}function re(b){const v=b.textures;for(let B=0,K=v.length;B<K;B++){const ae=v[B];if(p(ae)){const de=M(b),me=i.get(ae).__webglTexture;n.bindTexture(de,me),y(de),n.unbindTexture()}}}const he=[],ge=[];function R(b){if(b.samples>0){if(xe(b)===!1){const v=b.textures,B=b.width,K=b.height;let ae=t.COLOR_BUFFER_BIT;const de=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(b),Z=v.length>1;if(Z)for(let ye=0;ye<v.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const le=b.texture.mipmaps;le&&le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);const Ae=i.get(v[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,ae,t.NEAREST),l===!0&&(he.length=0,ge.length=0,he.push(t.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(he.push(de),ge.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ye=0;ye<v.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);const Ae=i.get(v[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function oe(b){return Math.min(s.maxSamples,b.samples)}function xe(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function fe(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function J(b,v){const B=b.colorSpace,K=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==eu&&B!==cr&&(gt.getTransfer(B)===At?(K!==Ui||ae!==Ei)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",B)),v}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.getTextureUnits=$,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=pe,this.rebindTextures=ne,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function QR(t,e){function n(i,s=cr){let r;const o=gt.getTransfer(s);if(i===Ei)return t.UNSIGNED_BYTE;if(i===Up)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Op)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yx)return t.BYTE;if(i===Kx)return t.SHORT;if(i===hl)return t.UNSIGNED_SHORT;if(i===Np)return t.INT;if(i===ms)return t.UNSIGNED_INT;if(i===os)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===Qx)return t.ALPHA;if(i===e2)return t.RGB;if(i===Ui)return t.RGBA;if(i===js)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===t2)return t.RED;if(i===Bp)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===kp)return t.RG_INTEGER;if(i===Gp)return t.RGBA_INTEGER;if(i===Cc||i===Pc||i===Ic||i===Dc)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ic)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vf||i===Wf||i===Xf||i===jf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qf||i===$f||i===Yf||i===Kf||i===Zf||i===Jc||i===Jf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qf||i===$f)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yf)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kf)return r.COMPRESSED_R11_EAC;if(i===Zf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jc)return r.COMPRESSED_RG11_EAC;if(i===Jf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qf||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===od||i===ad||i===ld||i===cd||i===ud||i===hd||i===fd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qf)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rd)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ad)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ld)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cd)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ud)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hd)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fd)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dd||i===pd||i===md)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dd)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===md)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gd||i===_d||i===Qc||i===vd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===gd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_d)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const eC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
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

}`;class nC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new p2(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qn({vertexShader:eC,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iC extends ro{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new nC,p={},y=n.getContextAttributes();let M=null,x=null;const P=[],T=[],F=new ft;let S=null;const A=new Fi;A.viewport=new nn;const I=new Fi;I.viewport=new nn;const w=[A,I],L=new dT;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let we=P[se];return we===void 0&&(we=new Ch,P[se]=we),we.getTargetRaySpace()},this.getControllerGrip=function(se){let we=P[se];return we===void 0&&(we=new Ch,P[se]=we),we.getGripSpace()},this.getHand=function(se){let we=P[se];return we===void 0&&(we=new Ch,P[se]=we),we.getHandSpace()};function O(se){const we=T.indexOf(se.inputSource);if(we===-1)return;const _e=P[we];_e!==void 0&&(_e.update(se.inputSource,se.frame,c||o),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let se=0;se<P.length;se++){const we=T[se];we!==null&&(T[se]=null,P[se].disconnect(we))}V=null,$=null,m.reset();for(const se in p)delete p[se];e.setRenderTarget(M),d=null,f=null,h=null,s=null,x=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(F),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,je=null,qe=null;y.depth&&(qe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=y.stencil?Gr:js,je=y.stencil?fl:ms);const Je={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new fs(f.textureWidth,f.textureHeight,{format:Ui,type:Ei,depthTexture:new ia(f.textureWidth,f.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new fs(d.framebufferWidth,d.framebufferHeight,{format:Ui,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(se){for(let we=0;we<se.removed.length;we++){const _e=se.removed[we],je=T.indexOf(_e);je>=0&&(T[je]=null,P[je].disconnect(_e))}for(let we=0;we<se.added.length;we++){const _e=se.added[we];let je=T.indexOf(_e);if(je===-1){for(let Je=0;Je<P.length;Je++)if(Je>=T.length){T.push(_e),je=Je;break}else if(T[Je]===null){T[Je]=_e,je=Je;break}if(je===-1)break}const qe=P[je];qe&&qe.connect(_e)}}const Q=new H,ee=new H;function ce(se,we,_e){Q.setFromMatrixPosition(we.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const je=Q.distanceTo(ee),qe=we.projectionMatrix.elements,Je=_e.projectionMatrix.elements,D=qe[14]/(qe[10]-1),N=qe[14]/(qe[10]+1),X=(qe[9]+1)/qe[5],ne=(qe[9]-1)/qe[5],Y=(qe[8]-1)/qe[0],re=(Je[8]+1)/Je[0],he=D*Y,ge=D*re,R=je/(-Y+re),oe=R*-Y;if(we.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(oe),se.translateZ(R),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),qe[10]===-1)se.projectionMatrix.copy(we.projectionMatrix),se.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const xe=D+R,fe=N+R,J=he-oe,Ie=ge+(je-oe),b=X*N/fe*xe,v=ne*N/fe*xe;se.projectionMatrix.makePerspective(J,Ie,b,v,xe,fe),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function pe(se,we){we===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(we.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let we=se.near,_e=se.far;m.texture!==null&&(m.depthNear>0&&(we=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),L.near=I.near=A.near=we,L.far=I.far=A.far=_e,(V!==L.near||$!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,$=L.far),L.layers.mask=se.layers.mask|6,A.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const je=se.parent,qe=L.cameras;pe(L,je);for(let Je=0;Je<qe.length;Je++)pe(qe[Je],je);qe.length===2?ce(L,A,I):L.projectionMatrix.copy(A.projectionMatrix),Te(se,L,je)};function Te(se,we,_e){_e===null?se.matrix.copy(we.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(we.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(we.projectionMatrix),se.projectionMatrixInverse.copy(we.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=dl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(se){return p[se]};let Oe=null;function ct(se,we){if(u=we.getViewerPose(c||o),g=we,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let je=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,je=!0);for(let N=0;N<_e.length;N++){const X=_e[N];let ne=null;if(d!==null)ne=d.getViewport(X);else{const re=h.getViewSubImage(f,X);ne=re.viewport,N===0&&(e.setRenderTargetTextures(x,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(x))}let Y=w[N];Y===void 0&&(Y=new Fi,Y.layers.enable(N),Y.viewport=new nn,w[N]=Y),Y.matrix.fromArray(X.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(X.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ne.x,ne.y,ne.width,ne.height),N===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),je===!0&&L.cameras.push(Y)}const qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const N=h.getDepthInformation(_e[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(qe&&qe.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let N=0;N<_e.length;N++){const X=_e[N].camera;if(X){let ne=p[X];ne||(ne=new p2,p[X]=ne);const Y=h.getCameraImage(X);ne.sourceTexture=Y}}}}for(let _e=0;_e<P.length;_e++){const je=T[_e],qe=P[_e];je!==null&&qe!==void 0&&qe.update(je,we,c||o)}Oe&&Oe(se,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),g=null}const et=new v2;et.setAnimationLoop(ct),this.setAnimationLoop=function(se){Oe=se},this.dispose=function(){}}}const sC=new Yt,T2=new st;T2.set(-1,0,0,0,1,0,0,0,1);function rC(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,m2(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(T2),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oC(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;i.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const P=M.program;i.updateUBOMapping(y,P);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const M=h();y.__bindingPointIndex=M;const x=t.createBuffer(),P=y.__size,T=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],x=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let T=0,F=x.length;T<F;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,I=S.length;A<I;A++){const w=S[A];if(d(w,T,A,P)===!0){const L=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let O=0;O<V.length;O++){const z=V[O],k=_(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,L+$,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):ArrayBuffer.isView(z)?w.__data.set(new z.constructor(z.buffer,z.byteOffset,w.__data.length)):(z.toArray(w.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(y,M,x,P){const T=y.value,F=M+"_"+x;if(P[F]===void 0)return typeof T=="number"||typeof T=="boolean"?P[F]=T:ArrayBuffer.isView(T)?P[F]=T.slice():P[F]=T.clone(),!0;{const S=P[F];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return P[F]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(S.equals(T)===!1)return S.copy(T),!0}}return!1}function g(y){const M=y.uniforms;let x=0;const P=16;for(let F=0,S=M.length;F<S;F++){const A=Array.isArray(M[F])?M[F]:[M[F]];for(let I=0,w=A.length;I<w;I++){const L=A[I],V=Array.isArray(L.value)?L.value:[L.value];for(let $=0,O=V.length;$<O;$++){const z=V[$],k=_(z),Q=x%P,ee=Q%k.boundary,ce=Q+ee;x+=ee,ce!==0&&P-ce<k.storage&&(x+=P-ce),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=k.storage}}}const T=x%P;return T>0&&(x+=P-T),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const aC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function lC(){return Zi===null&&(Zi=new Zb(aC,16,16,Jr,Xs),Zi.name="DFG_LUT",Zi.minFilter=$t,Zi.magFilter=$t,Zi.wrapS=Fs,Zi.wrapT=Fs,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class w2{constructor(e={}){const{canvas:n=hb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Ei}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=d,m=new Set([Gp,kp,Bp]),p=new Set([Ei,ms,hl,fl,Up,Op]),y=new Uint32Array(4),M=new Int32Array(4),x=new H;let P=null,T=null;const F=[],S=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let w=!1,L=null;this._outputColorSpace=Jn;let V=0,$=0,O=null,z=-1,k=null;const Q=new nn,ee=new nn;let ce=null;const pe=new Ee(0);let Te=0,Oe=n.width,ct=n.height,et=1,se=null,we=null;const _e=new nn(0,0,Oe,ct),je=new nn(0,0,Oe,ct);let qe=!1;const Je=new h2;let D=!1,N=!1;const X=new Yt,ne=new H,Y=new nn,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ge(){return O===null?et:1}let R=i;function oe(E,G){return n.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",ot,!1),R===null){const G="webgl2";if(R=oe(G,E),R===null)throw oe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw _t("WebGLRenderer: "+E.message),E}let xe,fe,J,Ie,b,v,B,K,ae,de,me,Z,le,ye,Ae,Se,ve,it,lt,St,U,Me,ie;function De(){xe=new l4(R),xe.init(),U=new QR(R,xe),fe=new e4(R,xe,e,U),J=new ZR(R,xe),fe.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),Ie=new h4(R),b=new OR,v=new JR(R,xe,J,b,fe,U,Ie),B=new a4(I),K=new mT(R),Me=new JA(R,K),ae=new c4(R,K,Ie,Me),de=new d4(R,ae,K,Me,Ie),it=new f4(R,fe,v),Ae=new t4(b),me=new UR(I,B,xe,fe,Me,Ae),Z=new rC(I,b),le=new kR,ye=new XR(xe),ve=new ZA(I,B,J,de,g,l),Se=new KR(I,de,fe),ie=new oC(R,Ie,fe,J),lt=new QA(R,xe,Ie),St=new u4(R,xe,Ie),Ie.programs=me.programs,I.capabilities=fe,I.extensions=xe,I.properties=b,I.renderLists=le,I.shadowMap=Se,I.state=J,I.info=Ie}De(),_!==Ei&&(A=new m4(_,n.width,n.height,s,r));const be=new iC(I,R);this.xr=be,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(Oe,ct,!1))},this.getSize=function(E){return E.set(Oe,ct)},this.setSize=function(E,G,q=!0){if(be.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=E,ct=G,n.width=Math.floor(E*et),n.height=Math.floor(G*et),q===!0&&(n.style.width=E+"px",n.style.height=G+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Oe*et,ct*et).floor()},this.setDrawingBufferSize=function(E,G,q){Oe=E,ct=G,et=q,n.width=Math.floor(E*q),n.height=Math.floor(G*q),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(_===Ei){_t("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){Ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,G,q,W){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,G,q,W),J.viewport(Q.copy(_e).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(je)},this.setScissor=function(E,G,q,W){E.isVector4?je.set(E.x,E.y,E.z,E.w):je.set(E,G,q,W),J.scissor(ee.copy(je).multiplyScalar(et).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){J.setScissorTest(qe=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){we=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,q=!0){let W=0;if(E){let j=!1;if(O!==null){const Pe=O.texture.format;j=m.has(Pe)}if(j){const Pe=O.texture.type,Fe=p.has(Pe),Ce=ve.getClearColor(),Be=ve.getClearAlpha(),ze=Ce.r,at=Ce.g,ht=Ce.b;Fe?(y[0]=ze,y[1]=at,y[2]=ht,y[3]=Be,R.clearBufferuiv(R.COLOR,0,y)):(M[0]=ze,M[1]=at,M[2]=ht,M[3]=Be,R.clearBufferiv(R.COLOR,0,M))}else W|=R.COLOR_BUFFER_BIT}G&&(W|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),ve.dispose(),le.dispose(),ye.dispose(),b.dispose(),B.dispose(),de.dispose(),Me.dispose(),ie.dispose(),me.dispose(),be.dispose(),be.removeEventListener("sessionstart",nm),be.removeEventListener("sessionend",im),Sr.stop()};function ue(E){E.preventDefault(),su("WebGLRenderer: Context Lost."),w=!0}function ke(){su("WebGLRenderer: Context Restored."),w=!1;const E=Ie.autoReset,G=Se.enabled,q=Se.autoUpdate,W=Se.needsUpdate,j=Se.type;De(),Ie.autoReset=E,Se.enabled=G,Se.autoUpdate=q,Se.needsUpdate=W,Se.type=j}function ot(E){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Jt(E){const G=E.target;G.removeEventListener("dispose",Jt),Ct(G)}function Ct(E){Ss(E),b.remove(E)}function Ss(E){const G=b.get(E).programs;G!==void 0&&(G.forEach(function(q){me.releaseProgram(q)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,q,W,j,Pe){G===null&&(G=re);const Fe=j.isMesh&&j.matrixWorld.determinant()<0,Ce=O2(E,G,q,W,j);J.setMaterial(W,Fe);let Be=q.index,ze=1;if(W.wireframe===!0){if(Be=ae.getWireframeAttribute(q),Be===void 0)return;ze=2}const at=q.drawRange,ht=q.attributes.position;let We=at.start*ze,Pt=(at.start+at.count)*ze;Pe!==null&&(We=Math.max(We,Pe.start*ze),Pt=Math.min(Pt,(Pe.start+Pe.count)*ze)),Be!==null?(We=Math.max(We,0),Pt=Math.min(Pt,Be.count)):ht!=null&&(We=Math.max(We,0),Pt=Math.min(Pt,ht.count));const Qt=Pt-We;if(Qt<0||Qt===1/0)return;Me.setup(j,W,Ce,q,Be);let Xt,Dt=lt;if(Be!==null&&(Xt=K.get(Be),Dt=St,Dt.setIndex(Xt)),j.isMesh)W.wireframe===!0?(J.setLineWidth(W.wireframeLinewidth*ge()),Dt.setMode(R.LINES)):Dt.setMode(R.TRIANGLES);else if(j.isLine){let Cn=W.linewidth;Cn===void 0&&(Cn=1),J.setLineWidth(Cn*ge()),j.isLineSegments?Dt.setMode(R.LINES):j.isLineLoop?Dt.setMode(R.LINE_LOOP):Dt.setMode(R.LINE_STRIP)}else j.isPoints?Dt.setMode(R.POINTS):j.isSprite&&Dt.setMode(R.TRIANGLES);if(j.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))Dt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Cn=j._multiDrawStarts,Le=j._multiDrawCounts,ti=j._multiDrawCount,xt=Be?K.get(Be).bytesPerElement:1,_i=b.get(W).currentProgram.getUniforms();for(let ji=0;ji<ti;ji++)_i.setValue(R,"_gl_DrawID",ji),Dt.render(Cn[ji]/xt,Le[ji])}else if(j.isInstancedMesh)Dt.renderInstances(We,Qt,j.count);else if(q.isInstancedBufferGeometry){const Cn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,Cn);Dt.renderInstances(We,Qt,Le)}else Dt.render(We,Qt)};function Xi(E,G,q){E.transparent===!0&&E.side===li&&E.forceSinglePass===!1?(E.side=Qn,E.needsUpdate=!0,Ll(E,G,q),E.side=gr,E.needsUpdate=!0,Ll(E,G,q),E.side=li):Ll(E,G,q)}this.compile=function(E,G,q=null){q===null&&(q=E),T=ye.get(q),T.init(G),S.push(T),q.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==q&&E.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const W=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const Ce=Pe[Fe];Xi(Ce,q,j),W.add(Ce)}else Xi(Pe,q,j),W.add(Pe)}),T=S.pop(),W},this.compileAsync=function(E,G,q=null){const W=this.compile(E,G,q);return new Promise(j=>{function Pe(){if(W.forEach(function(Fe){b.get(Fe).currentProgram.isReady()&&W.delete(Fe)}),W.size===0){j(E);return}setTimeout(Pe,10)}xe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ju=null;function N2(E){Ju&&Ju(E)}function nm(){Sr.stop()}function im(){Sr.start()}const Sr=new v2;Sr.setAnimationLoop(N2),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(E){Ju=E,be.setAnimationLoop(E),E===null?Sr.stop():Sr.start()},be.addEventListener("sessionstart",nm),be.addEventListener("sessionend",im),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L!==null&&L.renderStart(E,G);const q=be.enabled===!0&&be.isPresenting===!0,W=A!==null&&(O===null||q)&&A.begin(I,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(G),G=be.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,G,O),T=ye.get(E,S.length),T.init(G),T.state.textureUnits=v.getTextureUnits(),S.push(T),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Je.setFromProjectionMatrix(X,as,G.reversedDepth),N=this.localClippingEnabled,D=Ae.init(this.clippingPlanes,N),P=le.get(E,F.length),P.init(),F.push(P),be.enabled===!0&&be.isPresenting===!0){const Fe=I.xr.getDepthSensingMesh();Fe!==null&&Qu(Fe,G,-1/0,I.sortObjects)}Qu(E,G,0,I.sortObjects),P.finish(),I.sortObjects===!0&&P.sort(se,we),he=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,he&&ve.addToRenderList(P,E),this.info.render.frame++,D===!0&&Ae.beginShadows();const j=T.state.shadowsArray;if(Se.render(j,E,G),D===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&A.hasRenderPass())===!1){const Fe=P.opaque,Ce=P.transmissive;if(T.setupLights(),G.isArrayCamera){const Be=G.cameras;if(Ce.length>0)for(let ze=0,at=Be.length;ze<at;ze++){const ht=Be[ze];rm(Fe,Ce,E,ht)}he&&ve.render(E);for(let ze=0,at=Be.length;ze<at;ze++){const ht=Be[ze];sm(P,E,ht,ht.viewport)}}else Ce.length>0&&rm(Fe,Ce,E,G),he&&ve.render(E),sm(P,E,G)}O!==null&&$===0&&(v.updateMultisampleRenderTarget(O),v.updateRenderTargetMipmap(O)),W&&A.end(I),E.isScene===!0&&E.onAfterRender(I,E,G),Me.resetDefaultState(),z=-1,k=null,S.pop(),S.length>0?(T=S[S.length-1],v.setTextureUnits(T.state.textureUnits),D===!0&&Ae.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,L!==null&&L.renderEnd()};function Qu(E,G,q,W){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Je.intersectsSprite(E)){W&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(X);const Fe=de.update(E),Ce=E.material;Ce.visible&&P.push(E,Fe,Ce,q,Y.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Je.intersectsObject(E))){const Fe=de.update(E),Ce=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Y.copy(E.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Y.copy(Fe.boundingSphere.center)),Y.applyMatrix4(E.matrixWorld).applyMatrix4(X)),Array.isArray(Ce)){const Be=Fe.groups;for(let ze=0,at=Be.length;ze<at;ze++){const ht=Be[ze],We=Ce[ht.materialIndex];We&&We.visible&&P.push(E,Fe,We,q,Y.z,ht)}}else Ce.visible&&P.push(E,Fe,Ce,q,Y.z,null)}}const Pe=E.children;for(let Fe=0,Ce=Pe.length;Fe<Ce;Fe++)Qu(Pe[Fe],G,q,W)}function sm(E,G,q,W){const{opaque:j,transmissive:Pe,transparent:Fe}=E;T.setupLightsView(q),D===!0&&Ae.setGlobalState(I.clippingPlanes,q),W&&J.viewport(Q.copy(W)),j.length>0&&Dl(j,G,q),Pe.length>0&&Dl(Pe,G,q),Fe.length>0&&Dl(Fe,G,q),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function rm(E,G,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const We=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new fs(1,1,{generateMipmaps:!0,type:We?Xs:Ei,minFilter:kr,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Pe=T.state.transmissionRenderTarget[W.id],Fe=W.viewport||Q;Pe.setSize(Fe.z*I.transmissionResolutionScale,Fe.w*I.transmissionResolutionScale);const Ce=I.getRenderTarget(),Be=I.getActiveCubeFace(),ze=I.getActiveMipmapLevel();I.setRenderTarget(Pe),I.getClearColor(pe),Te=I.getClearAlpha(),Te<1&&I.setClearColor(16777215,.5),I.clear(),he&&ve.render(q);const at=I.toneMapping;I.toneMapping=hs;const ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),D===!0&&Ae.setGlobalState(I.clippingPlanes,W),Dl(E,q,W),v.updateMultisampleRenderTarget(Pe),v.updateRenderTargetMipmap(Pe),xe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Pt=0,Qt=G.length;Pt<Qt;Pt++){const Xt=G[Pt],{object:Dt,geometry:Cn,material:Le,group:ti}=Xt;if(Le.side===li&&Dt.layers.test(W.layers)){const xt=Le.side;Le.side=Qn,Le.needsUpdate=!0,om(Dt,q,W,Cn,Le,ti),Le.side=xt,Le.needsUpdate=!0,We=!0}}We===!0&&(v.updateMultisampleRenderTarget(Pe),v.updateRenderTargetMipmap(Pe))}I.setRenderTarget(Ce,Be,ze),I.setClearColor(pe,Te),ht!==void 0&&(W.viewport=ht),I.toneMapping=at}function Dl(E,G,q){const W=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Pe=E.length;j<Pe;j++){const Fe=E[j],{object:Ce,geometry:Be,group:ze}=Fe;let at=Fe.material;at.allowOverride===!0&&W!==null&&(at=W),Ce.layers.test(q.layers)&&om(Ce,G,q,Be,at,ze)}}function om(E,G,q,W,j,Pe){E.onBeforeRender(I,G,q,W,j,Pe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(I,G,q,W,E,Pe),j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=Qn,j.needsUpdate=!0,I.renderBufferDirect(q,G,W,j,E,Pe),j.side=gr,j.needsUpdate=!0,I.renderBufferDirect(q,G,W,j,E,Pe),j.side=li):I.renderBufferDirect(q,G,W,j,E,Pe),E.onAfterRender(I,G,q,W,j,Pe)}function Ll(E,G,q){G.isScene!==!0&&(G=re);const W=b.get(E),j=T.state.lights,Pe=T.state.shadowsArray,Fe=j.state.version,Ce=me.getParameters(E,j.state,Pe,G,q,T.state.lightProbeGridArray),Be=me.getProgramCacheKey(Ce);let ze=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,W.fog=G.fog;const at=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=B.get(E.envMap||W.environment,at),W.envMapRotation=W.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Jt),ze=new Map,W.programs=ze);let ht=ze.get(Be);if(ht!==void 0){if(W.currentProgram===ht&&W.lightsStateVersion===Fe)return lm(E,Ce),ht}else Ce.uniforms=me.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,q,Ce),E.onBeforeCompile(Ce,I),ht=me.acquireProgram(Ce,Be),ze.set(Be,ht),W.uniforms=Ce.uniforms;const We=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=Ae.uniform),lm(E,Ce),W.needsLights=k2(E),W.lightsStateVersion=Fe,W.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=ht,W.uniformsList=null,ht}function am(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Lc.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function lm(E,G){const q=b.get(E);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function U2(E,G){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let q=0,W=E.length;q<W;q++){const j=E[q];if(j.texture!==null&&j.boundingBox.containsPoint(x))return j}return null}function O2(E,G,q,W,j){G.isScene!==!0&&(G=re),v.resetTextureUnits();const Pe=G.fog,Fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?G.environment:null,Ce=O===null?I.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:gt.workingColorSpace,Be=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ze=B.get(W.envMap||Fe,Be),at=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ht=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!q.morphAttributes.position,Pt=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color;let Xt=hs;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Xt=I.toneMapping);const Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Cn=Dt!==void 0?Dt.length:0,Le=b.get(W),ti=T.state.lights;if(D===!0&&(N===!0||E!==k)){const Ut=E===k&&W.id===z;Ae.setState(W,E,Ut)}let xt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ti.state.version||Le.outputColorSpace!==Ce||j.isBatchedMesh&&Le.batching===!1||!j.isBatchedMesh&&Le.batching===!0||j.isBatchedMesh&&Le.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Le.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Le.instancing===!1||!j.isInstancedMesh&&Le.instancing===!0||j.isSkinnedMesh&&Le.skinning===!1||!j.isSkinnedMesh&&Le.skinning===!0||j.isInstancedMesh&&Le.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Le.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Le.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Le.instancingMorph===!1&&j.morphTexture!==null||Le.envMap!==ze||W.fog===!0&&Le.fog!==Pe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ae.numPlanes||Le.numIntersection!==Ae.numIntersection)||Le.vertexAlphas!==at||Le.vertexTangents!==ht||Le.morphTargets!==We||Le.morphNormals!==Pt||Le.morphColors!==Qt||Le.toneMapping!==Xt||Le.morphTargetsCount!==Cn||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Le.__version=W.version);let _i=Le.currentProgram;xt===!0&&(_i=Ll(W,G,j),L&&W.isNodeMaterial&&L.onUpdateProgram(W,_i,Le));let ji=!1,$s=!1,ao=!1;const Lt=_i.getUniforms(),en=Le.uniforms;if(J.useProgram(_i.program)&&(ji=!0,$s=!0,ao=!0),W.id!==z&&(z=W.id,$s=!0),Le.needsLights){const Ut=U2(T.state.lightProbeGridArray,j);Le.lightProbeGrid!==Ut&&(Le.lightProbeGrid=Ut,$s=!0)}if(ji||k!==E){J.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Lt.setValue(R,"projectionMatrix",E.projectionMatrix),Lt.setValue(R,"viewMatrix",E.matrixWorldInverse);const Ks=Lt.map.cameraPosition;Ks!==void 0&&Ks.setValue(R,ne.setFromMatrixPosition(E.matrixWorld)),fe.logarithmicDepthBuffer&&Lt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Lt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,$s=!0,ao=!0)}if(Le.needsLights&&(ti.state.directionalShadowMap.length>0&&Lt.setValue(R,"directionalShadowMap",ti.state.directionalShadowMap,v),ti.state.spotShadowMap.length>0&&Lt.setValue(R,"spotShadowMap",ti.state.spotShadowMap,v),ti.state.pointShadowMap.length>0&&Lt.setValue(R,"pointShadowMap",ti.state.pointShadowMap,v)),j.isSkinnedMesh){Lt.setOptional(R,j,"bindMatrix"),Lt.setOptional(R,j,"bindMatrixInverse");const Ut=j.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Lt.setValue(R,"boneTexture",Ut.boneTexture,v))}j.isBatchedMesh&&(Lt.setOptional(R,j,"batchingTexture"),Lt.setValue(R,"batchingTexture",j._matricesTexture,v),Lt.setOptional(R,j,"batchingIdTexture"),Lt.setValue(R,"batchingIdTexture",j._indirectTexture,v),Lt.setOptional(R,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(R,"batchingColorTexture",j._colorsTexture,v));const Ys=q.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&it.update(j,q,_i),($s||Le.receiveShadow!==j.receiveShadow)&&(Le.receiveShadow=j.receiveShadow,Lt.setValue(R,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&G.environment!==null&&(en.envMapIntensity.value=G.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=lC()),$s){if(Lt.setValue(R,"toneMappingExposure",I.toneMappingExposure),Le.needsLights&&B2(en,ao),Pe&&W.fog===!0&&Z.refreshFogUniforms(en,Pe),Z.refreshMaterialUniforms(en,W,et,ct,T.state.transmissionRenderTarget[E.id]),Le.needsLights&&Le.lightProbeGrid){const Ut=Le.lightProbeGrid;en.probesSH.value=Ut.texture,en.probesMin.value.copy(Ut.boundingBox.min),en.probesMax.value.copy(Ut.boundingBox.max),en.probesResolution.value.copy(Ut.resolution)}Lc.upload(R,am(Le),en,v)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Lc.upload(R,am(Le),en,v),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Lt.setValue(R,"center",j.center),Lt.setValue(R,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(R,"normalMatrix",j.normalMatrix),Lt.setValue(R,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const Ut=W.uniformsGroups;for(let Ks=0,lo=Ut.length;Ks<lo;Ks++){const cm=Ut[Ks];ie.update(cm,_i),ie.bind(cm,_i)}}return _i}function B2(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function k2(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,G,q){const W=b.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=G,b.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const q=b.get(E);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const G2=R.createFramebuffer();this.setRenderTarget=function(E,G=0,q=0){O=E,V=G,$=q;let W=null,j=!1,Pe=!1;if(E){const Ce=b.get(E);if(Ce.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(R.FRAMEBUFFER,Ce.__webglFramebuffer),Q.copy(E.viewport),ee.copy(E.scissor),ce=E.scissorTest,J.viewport(Q),J.scissor(ee),J.setScissorTest(ce),z=-1;return}else if(Ce.__webglFramebuffer===void 0)v.setupRenderTarget(E);else if(Ce.__hasExternalTextures)v.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const at=E.depthTexture;if(Ce.__boundDepthTexture!==at){if(at!==null&&b.has(at)&&(E.width!==at.image.width||E.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Pe=!0);const ze=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?W=ze[G][q]:W=ze[G],j=!0):E.samples>0&&v.useMultisampledRTT(E)===!1?W=b.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[q]:W=ze,Q.copy(E.viewport),ee.copy(E.scissor),ce=E.scissorTest}else Q.copy(_e).multiplyScalar(et).floor(),ee.copy(je).multiplyScalar(et).floor(),ce=qe;if(q!==0&&(W=G2),J.bindFramebuffer(R.FRAMEBUFFER,W)&&J.drawBuffers(E,W),J.viewport(Q),J.scissor(ee),J.setScissorTest(ce),j){const Ce=b.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,q)}else if(Pe){const Ce=G;for(let Be=0;Be<E.textures.length;Be++){const ze=b.get(E.textures[Be]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Be,ze.__webglTexture,q,Ce)}}else if(E!==null&&q!==0){const Ce=b.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ce.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(E,G,q,W,j,Pe,Fe,Ce=0){if(!(E&&E.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){J.bindFramebuffer(R.FRAMEBUFFER,Be);try{const ze=E.textures[Ce],at=ze.format,ht=ze.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ce),!fe.textureFormatReadable(at)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ht)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-W&&q>=0&&q<=E.height-j&&R.readPixels(G,q,W,j,U.convert(at),U.convert(ht),Pe)}finally{const ze=O!==null?b.get(O).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,G,q,W,j,Pe,Fe,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(G>=0&&G<=E.width-W&&q>=0&&q<=E.height-j){J.bindFramebuffer(R.FRAMEBUFFER,Be);const ze=E.textures[Ce],at=ze.format,ht=ze.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ce),!fe.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.bufferData(R.PIXEL_PACK_BUFFER,Pe.byteLength,R.STREAM_READ),R.readPixels(G,q,W,j,U.convert(at),U.convert(ht),0);const Pt=O!==null?b.get(O).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Pt);const Qt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await fb(R,Qt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Pe),R.deleteBuffer(We),R.deleteSync(Qt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,q=0){const W=Math.pow(2,-q),j=Math.floor(E.image.width*W),Pe=Math.floor(E.image.height*W),Fe=G!==null?G.x:0,Ce=G!==null?G.y:0;v.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Fe,Ce,j,Pe),J.unbindTexture()};const H2=R.createFramebuffer(),z2=R.createFramebuffer();this.copyTextureToTexture=function(E,G,q=null,W=null,j=0,Pe=0){let Fe,Ce,Be,ze,at,ht,We,Pt,Qt;const Xt=E.isCompressedTexture?E.mipmaps[Pe]:E.image;if(q!==null)Fe=q.max.x-q.min.x,Ce=q.max.y-q.min.y,Be=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,at=q.min.y,ht=q.isBox3?q.min.z:0;else{const en=Math.pow(2,-j);Fe=Math.floor(Xt.width*en),Ce=Math.floor(Xt.height*en),E.isDataArrayTexture?Be=Xt.depth:E.isData3DTexture?Be=Math.floor(Xt.depth*en):Be=1,ze=0,at=0,ht=0}W!==null?(We=W.x,Pt=W.y,Qt=W.z):(We=0,Pt=0,Qt=0);const Dt=U.convert(G.format),Cn=U.convert(G.type);let Le;G.isData3DTexture?(v.setTexture3D(G,0),Le=R.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(v.setTexture2DArray(G,0),Le=R.TEXTURE_2D_ARRAY):(v.setTexture2D(G,0),Le=R.TEXTURE_2D),J.activeTexture(R.TEXTURE0),J.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),J.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),J.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const ti=J.getParameter(R.UNPACK_ROW_LENGTH),xt=J.getParameter(R.UNPACK_IMAGE_HEIGHT),_i=J.getParameter(R.UNPACK_SKIP_PIXELS),ji=J.getParameter(R.UNPACK_SKIP_ROWS),$s=J.getParameter(R.UNPACK_SKIP_IMAGES);J.pixelStorei(R.UNPACK_ROW_LENGTH,Xt.width),J.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Xt.height),J.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),J.pixelStorei(R.UNPACK_SKIP_ROWS,at),J.pixelStorei(R.UNPACK_SKIP_IMAGES,ht);const ao=E.isDataArrayTexture||E.isData3DTexture,Lt=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const en=b.get(E),Ys=b.get(G),Ut=b.get(en.__renderTarget),Ks=b.get(Ys.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,Ut.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let lo=0;lo<Be;lo++)ao&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,b.get(E).__webglTexture,j,ht+lo),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,b.get(G).__webglTexture,Pe,Qt+lo)),R.blitFramebuffer(ze,at,Fe,Ce,We,Pt,Fe,Ce,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||b.has(E)){const en=b.get(E),Ys=b.get(G);J.bindFramebuffer(R.READ_FRAMEBUFFER,H2),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,z2);for(let Ut=0;Ut<Be;Ut++)ao?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,en.__webglTexture,j,ht+Ut):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,en.__webglTexture,j),Lt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ys.__webglTexture,Pe,Qt+Ut):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ys.__webglTexture,Pe),j!==0?R.blitFramebuffer(ze,at,Fe,Ce,We,Pt,Fe,Ce,R.COLOR_BUFFER_BIT,R.NEAREST):Lt?R.copyTexSubImage3D(Le,Pe,We,Pt,Qt+Ut,ze,at,Fe,Ce):R.copyTexSubImage2D(Le,Pe,We,Pt,ze,at,Fe,Ce);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Lt?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Le,Pe,We,Pt,Qt,Fe,Ce,Be,Dt,Cn,Xt.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(Le,Pe,We,Pt,Qt,Fe,Ce,Be,Dt,Xt.data):R.texSubImage3D(Le,Pe,We,Pt,Qt,Fe,Ce,Be,Dt,Cn,Xt):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Pe,We,Pt,Fe,Ce,Dt,Cn,Xt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Pe,We,Pt,Xt.width,Xt.height,Dt,Xt.data):R.texSubImage2D(R.TEXTURE_2D,Pe,We,Pt,Fe,Ce,Dt,Cn,Xt);J.pixelStorei(R.UNPACK_ROW_LENGTH,ti),J.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt),J.pixelStorei(R.UNPACK_SKIP_PIXELS,_i),J.pixelStorei(R.UNPACK_SKIP_ROWS,ji),J.pixelStorei(R.UNPACK_SKIP_IMAGES,$s),Pe===0&&G.generateMipmaps&&R.generateMipmap(Le),J.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&v.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?v.setTextureCube(E,0):E.isData3DTexture?v.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?v.setTexture2DArray(E,0):v.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){V=0,$=0,O=null,J.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return as}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}var ai=(t=>(t.INACTIVE="inactive",t.SPAWNING="spawning",t.IDLE="idle",t.SHOOTING="shooting",t.DISSIPATING="dissipating",t))(ai||{});class Zu{constructor(e){C(this,"config");C(this,"state",ai.INACTIVE);C(this,"position",new H);C(this,"shootDirection",new H);C(this,"normalizedAnchor",{x:.5,y:.5,z:0});this.config=e}onSpawn(e){this.state=ai.SPAWNING,this.getEffect().spawn(),this.state=ai.IDLE}onIdle(e,n,i=1){this.state=ai.IDLE,this.normalizedAnchor={...e},this.position.copy(n),this.getEffect().setPosition(n),this.getEffect().setScale(i),this.getEffect().normalizedPosition={x:1-e.x,y:1-e.y}}onShoot(e){this.state=ai.SHOOTING,this.shootDirection.copy(e).normalize().multiplyScalar(3)}async onDissipate(){this.state=ai.DISSIPATING,await this.getEffect().dissipate(),this.state=ai.INACTIVE}update(e){this.state===ai.SHOOTING&&(this.position.add(this.shootDirection.clone().multiplyScalar(e)),this.getEffect().setPosition(this.position))}}var ml=(t=>(t[t.SPAWNING=0]="SPAWNING",t[t.IDLE=1]="IDLE",t[t.DISSIPATING=2]="DISSIPATING",t[t.DONE=3]="DONE",t))(ml||{});class nt{constructor(){C(this,"group",new Ba);C(this,"distortionType",0);C(this,"distortionStrength",0);C(this,"normalizedPosition",{x:.5,y:.5});C(this,"darkenBackground",!1);C(this,"phase",1);C(this,"phaseTime",0);C(this,"spawnDur",.5);C(this,"dissipateDur",.4)}get spawnT(){return this.phase===0?Math.min(this.phaseTime/this.spawnDur,1):1}get dissipateT(){return this.phase===2?Math.min(this.phaseTime/this.dissipateDur,1):this.phase===3?1:0}get isDone(){return this.phase===3}tickPhase(e){this.phaseTime+=e,this.phase===0&&this.phaseTime>=this.spawnDur&&(this.phase=1,this.phaseTime=0),this.phase===2&&this.phaseTime>=this.dissipateDur&&(this.phase=3,this.phaseTime=this.dissipateDur)}spawn(){this.phase=0,this.phaseTime=0}beginDissipate(){this.phase=2,this.phaseTime=0}async dissipate(){this.beginDissipate(),await new Promise(e=>{const n=()=>this.isDone?e():requestAnimationFrame(n);n()})}static easeOutElastic(e){return e<=0?0:e>=1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Math.PI*2/3)+1}static easeOutBack(e,n=1.70158){const i=n;return 1+(i+1)*Math.pow(e-1,3)+i*Math.pow(e-1,2)}static easeIn(e,n=2){return Math.pow(Math.max(0,Math.min(1,e)),n)}static easeOut(e,n=2){return 1-Math.pow(1-Math.max(0,Math.min(1,e)),n)}static makeGlowSprite(e,n){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d"),[o,a,l]=[e.r,e.g,e.b].map(f=>Math.round(f*255)),c=r.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);c.addColorStop(0,`rgba(${o},${a},${l},1)`),c.addColorStop(.15,`rgba(${o},${a},${l},0.78)`),c.addColorStop(.4,`rgba(${o},${a},${l},0.32)`),c.addColorStop(.7,`rgba(${o},${a},${l},0.07)`),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.fillRect(0,0,256,256);const u=new c2({map:new nT(s),transparent:!0,blending:Xn,depthWrite:!1,opacity:0}),h=new Yb(u);return h.scale.set(n,n,1),h}setScale(e){}getObject3D(){return this.group}}const cC=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,uC=`
uniform sampler2D uVideo;
uniform float     uOpacity;
uniform float     uAspect;       // canvas width / height
uniform float     uVideoAspect;  // always 16/9

varying vec2 vUv;

void main() {
  // The video is 1920×1080 (16:9). Scale it to fill or fit the current canvas.
  vec2 uv = vUv;
  gl_FragColor = texture2D(uVideo, uv) * uOpacity;
}
`;class hC extends nt{constructor(n){super();C(this,"video");C(this,"texture");C(this,"mesh");C(this,"mat");C(this,"_available",!1);C(this,"_playing",!1);C(this,"_cfg");this._cfg=n,this.video=document.createElement("video"),this.video.src=n.url,this.video.loop=n.loop??!0,this.video.muted=!0,this.video.playsInline=!0,this.video.crossOrigin="anonymous",this.video.preload="auto",this.texture=new f2(this.video),this.texture.minFilter=$t,this.texture.magFilter=$t,this.texture.colorSpace=Jn;const i=n.fullscreen?new _r(2,2):new _r(n.planeSize??2,n.planeSize??2);n.fullscreen?this.mat=new qn({vertexShader:cC,fragmentShader:uC,uniforms:{uVideo:{value:this.texture},uOpacity:{value:0},uAspect:{value:window.innerWidth/window.innerHeight},uVideoAspect:{value:16/9}},transparent:!0,depthWrite:!1,depthTest:!1,blending:n.blending??Xn}):this.mat=new Xu({map:this.texture,transparent:!0,opacity:0,blending:n.blending??Xn,depthWrite:!1,side:li}),this.mesh=new jn(i,this.mat),this.mesh.renderOrder=98,this.group.add(this.mesh),fetch(n.url,{method:"HEAD"}).then(s=>{s.ok&&(this._available=!0,this.video.load())}).catch(()=>{})}spawn(){super.spawn(),this._available&&!this._playing&&(this.video.currentTime=0,this.video.play().catch(()=>{}),this._playing=!0)}beginDissipate(){super.beginDissipate(),this._cfg.loop||this.video.pause()}update(n){if(this.tickPhase(n),!this._available)return;const i=this.spawnT*(1-this.dissipateT);if(this._cfg.fullscreen){const s=this.mat.uniforms;s.uOpacity.value=i,s.uAspect.value=window.innerWidth/window.innerHeight}else this.mat.opacity=i;this.texture.needsUpdate=!0}setPosition(n){this._cfg.fullscreen||(this.group.position.copy(n),this.group.rotation.set(0,0,0))}dispose(){this.video.pause(),this.video.src="",this._playing=!1,this.texture.dispose(),this.mat.dispose(),this.mesh.geometry.dispose()}get isAvailable(){return this._available}}class fC extends nt{constructor(n,i){super();C(this,"primary");C(this,"overlay");this.primary=n,this.overlay=i,this.group.add(n.getObject3D()),this.group.add(i.getObject3D())}spawn(){this.primary.spawn(),this.overlay.spawn()}beginDissipate(){this.primary.beginDissipate(),this.overlay.beginDissipate()}get isDone(){return this.primary.isDone&&this.overlay.isDone}update(n){this.primary.update(n),this.overlay.update(n),this.distortionType=this.primary.distortionType,this.distortionStrength=this.primary.distortionStrength,this.darkenBackground=this.primary.darkenBackground,this.normalizedPosition=this.primary.normalizedPosition}setPosition(n){this.primary.setPosition(n),this.overlay.setPosition(n)}dispose(){this.primary.dispose(),this.overlay.dispose()}}class dC extends Zu{constructor(n){super(n);C(this,"effect");C(this,"forceFieldSign");C(this,"forceFieldRadius");C(this,"forceFieldStrength");const i=new n.EffectClass;this.effect=new fC(i,new hC({url:n.videoUrl,fullscreen:!1,planeSize:4,blending:Xn,loop:!0})),this.forceFieldSign=n.forceFieldSign,this.forceFieldRadius=n.forceFieldRadius,this.forceFieldStrength=n.forceFieldStrength}getEffect(){return this.effect}getForceField(){return this.state!==ai.IDLE?null:{position:this.position.clone(),radius:this.forceFieldRadius,strength:this.forceFieldStrength,sign:this.forceFieldSign}}}var $e=(t=>(t.NONE="none",t.LEFT_HAND_RAISED="left_hand_raised",t.RIGHT_HAND_RAISED="right_hand_raised",t.HANDS_MERGED="hands_merged",t.FINGER_FLICK_LEFT="finger_flick_left",t.FINGER_FLICK_RIGHT="finger_flick_right",t.DOMAIN_EXPANSION="domain_expansion",t.DOMAIN_EXIT="domain_exit",t))($e||{}),Ue=(t=>(t[t.WRIST=0]="WRIST",t[t.THUMB_CMC=1]="THUMB_CMC",t[t.THUMB_MCP=2]="THUMB_MCP",t[t.THUMB_IP=3]="THUMB_IP",t[t.THUMB_TIP=4]="THUMB_TIP",t[t.INDEX_FINGER_MCP=5]="INDEX_FINGER_MCP",t[t.INDEX_FINGER_PIP=6]="INDEX_FINGER_PIP",t[t.INDEX_FINGER_DIP=7]="INDEX_FINGER_DIP",t[t.INDEX_FINGER_TIP=8]="INDEX_FINGER_TIP",t[t.MIDDLE_FINGER_MCP=9]="MIDDLE_FINGER_MCP",t[t.MIDDLE_FINGER_PIP=10]="MIDDLE_FINGER_PIP",t[t.MIDDLE_FINGER_DIP=11]="MIDDLE_FINGER_DIP",t[t.MIDDLE_FINGER_TIP=12]="MIDDLE_FINGER_TIP",t[t.RING_FINGER_MCP=13]="RING_FINGER_MCP",t[t.RING_FINGER_PIP=14]="RING_FINGER_PIP",t[t.RING_FINGER_DIP=15]="RING_FINGER_DIP",t[t.RING_FINGER_TIP=16]="RING_FINGER_TIP",t[t.PINKY_MCP=17]="PINKY_MCP",t[t.PINKY_PIP=18]="PINKY_PIP",t[t.PINKY_DIP=19]="PINKY_DIP",t[t.PINKY_TIP=20]="PINKY_TIP",t))(Ue||{});class r_{constructor(e){C(this,"geometry");C(this,"material");C(this,"points");C(this,"particleCount");C(this,"positions");C(this,"velocities");C(this,"lifetimes");C(this,"config");this.config=e,this.particleCount=e.count,this.positions=new Float32Array(this.particleCount*3),this.velocities=new Float32Array(this.particleCount*3),this.lifetimes=new Float32Array(this.particleCount),this.initializeParticles(),this.geometry=new Zt,this.geometry.setAttribute("position",new dn(this.positions,3)),this.material=new na({color:e.color,size:e.size,transparent:!0,opacity:e.opacity,blending:Xn,depthWrite:!1,sizeAttenuation:!0}),this.points=new pl(this.geometry,this.material)}initializeParticles(){for(let e=0;e<this.particleCount;e++)this.resetParticle(e)}resetParticle(e){const n=e*3,i=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),r=this.config.sizeVariation??.5,o=this.config.radius*(r+Math.random()*(1-r));this.positions[n]=Math.sin(s)*Math.cos(i)*o,this.positions[n+1]=Math.sin(s)*Math.sin(i)*o,this.positions[n+2]=Math.cos(s)*o;const a=this.config.speedVariation??.5,l=this.config.speed*(a+Math.random()*(1-a));this.config.direction==="inward"?(this.velocities[n]=-this.positions[n]*l,this.velocities[n+1]=-this.positions[n+1]*l,this.velocities[n+2]=-this.positions[n+2]*l):this.config.direction==="outward"?(this.velocities[n]=this.positions[n]*l,this.velocities[n+1]=this.positions[n+1]*l,this.velocities[n+2]=this.positions[n+2]*l):(this.velocities[n]=-this.positions[n+1]*l,this.velocities[n+1]=this.positions[n]*l,this.velocities[n+2]=(Math.random()-.5)*l*.3),this.lifetimes[e]=.5+Math.random()*.5}update(e){for(let n=0;n<this.particleCount;n++){const i=n*3;if(this.lifetimes[n]-=e*.4,this.lifetimes[n]<=0){this.resetParticle(n);continue}this.positions[i]+=this.velocities[i]*e,this.positions[i+1]+=this.velocities[i+1]*e,this.positions[i+2]+=this.velocities[i+2]*e}this.geometry.attributes.position.needsUpdate=!0}getObject3D(){return this.points}setOpacity(e){this.material.opacity=e}dispose(){this.geometry.dispose(),this.material.dispose()}}class o_ extends nt{constructor(n,i,s=!1){super();C(this,"particles");C(this,"trailParticles");C(this,"coreGlow");C(this,"outerGlow");C(this,"flashSprite");C(this,"whiteFlash");C(this,"impactFlash");C(this,"shockwave");C(this,"velocity",new H);C(this,"lifetime",0);C(this,"maxLifetime");C(this,"opacity",1);C(this,"isPurple");this.isPurple=s,this.maxLifetime=s?2.8:1.4,this.distortionType=0,this.distortionStrength=0,this.particles=new r_({count:s?600:150,color:n,size:s?.022:.007,speed:s?.7:.25,radius:s?.14:.02,direction:"outward",opacity:.9}),this.group.add(this.particles.getObject3D()),this.trailParticles=new r_({count:s?400:100,color:i,size:s?.016:.005,speed:s?.3:.08,radius:s?.22:.03,direction:"orbital",opacity:.65}),this.group.add(this.trailParticles.getObject3D()),this.coreGlow=nt.makeGlowSprite(n,s?.7:.1),this.group.add(this.coreGlow),this.outerGlow=nt.makeGlowSprite(i,s?1.4:.18),this.group.add(this.outerGlow),this.flashSprite=nt.makeGlowSprite(new Ee(.75,.15,1),s?6:0),this.group.add(this.flashSprite),this.whiteFlash=nt.makeGlowSprite(new Ee(1,.97,1),s?10:0),this.group.add(this.whiteFlash),this.impactFlash=nt.makeGlowSprite(new Ee(.95,.8,1),s?14:0),this.group.add(this.impactFlash),this.shockwave=nt.makeGlowSprite(new Ee(.9,.55,1),s?3.5:0),this.group.add(this.shockwave)}setVelocity(n){this.velocity.copy(n)}spawn(){this.lifetime=0,this.opacity=1}update(n){this.lifetime+=n;const i=this.lifetime/this.maxLifetime;if(this.opacity=i<.85?1:Math.max(0,1-(i-.85)/.15),this.group.position.add(this.velocity.clone().multiplyScalar(n)),this.particles.update(n),this.trailParticles.update(n),this.particles.setOpacity(this.opacity*.9),this.trailParticles.setOpacity(this.opacity*.65),this.coreGlow.material.opacity=this.opacity,this.outerGlow.material.opacity=this.opacity*.85,this.isPurple){let s;if(i<.15)s=1+i/.15*.5;else if(i<.65)s=1.5+(i-.15)/.5*12.5;else{const u=(i-.65)/.35;s=14+u*u*u*41}this.group.scale.setScalar(s);const r=Math.max(0,1-i/.2)*(i<.08?i/.08:1);this.whiteFlash.material.opacity=r*.95;const o=Math.max(0,1-Math.abs(i-.8)/.1),a=o*o;this.impactFlash.material.opacity=a*.98;const l=Math.sin(Math.min(i/.85,1)*Math.PI);this.flashSprite.material.opacity=l*.9;const c=Math.max(0,Math.sin((i-.18)*Math.PI/.35));this.shockwave.material.opacity=c*.8}else{const s=1+i*.4;this.group.scale.setScalar(s),this.flashSprite.material.opacity=0,this.whiteFlash.material.opacity=0,this.impactFlash.material.opacity=0,this.shockwave.material.opacity=0}}isExpired(){return this.lifetime>=this.maxLifetime}setPosition(n){this.group.position.copy(n)}async dissipate(){this.opacity=0}dispose(){var n;this.particles.dispose(),this.trailParticles.dispose();for(const i of[this.coreGlow,this.outerGlow,this.flashSprite,this.whiteFlash,this.impactFlash,this.shockwave])(n=i.material.map)==null||n.dispose(),i.material.dispose()}}class gl{constructor(e){C(this,"geom");C(this,"mat");C(this,"mesh");C(this,"pos");C(this,"vel");C(this,"life");C(this,"maxLife");C(this,"config");this.config=e;const n=e.count;this.pos=new Float32Array(n*6),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n);for(let i=0;i<n;i++)this.reset(i,!0);this.geom=new Zt,this.geom.setAttribute("position",new dn(this.pos,3)),this.mat=new ju({color:e.color,transparent:!0,opacity:e.opacity,blending:Xn,depthWrite:!1}),this.mesh=new tT(this.geom,this.mat)}reset(e,n=!1){const i=this.config,s=Math.random()*Math.PI*2,r=i.radius*(.8+Math.random()*.2),o=Math.cos(s)*r,a=Math.sin(s)*r,l=(Math.random()-.5)*r*.15,c=Math.sqrt(o*o+a*a+l*l),u=i.speed*(.6+Math.random()*.4);let h=0,f=0,d=0;if(i.direction==="inward")h=-o/c*u,f=-a/c*u,d=-l/c*u;else if(i.direction==="outward")h=o/c*u,f=a/c*u,d=l/c*u;else if(i.direction==="spiral"){const M=-o/c*.55+-Math.sin(s)*.9,x=-a/c*.55+Math.cos(s)*.9,P=Math.sqrt(M*M+x*x);h=M/P*u,f=x/P*u,d=0}else h=-Math.sin(s)*u,f=Math.cos(s)*u,d=0;this.pos[e*6+0]=o,this.pos[e*6+1]=a,this.pos[e*6+2]=l;const g=Math.sqrt(h*h+f*f+d*d),_=i.lineLength/g;this.pos[e*6+3]=o-h*_,this.pos[e*6+4]=a-f*_,this.pos[e*6+5]=l-d*_,this.vel[e*3]=h,this.vel[e*3+1]=f,this.vel[e*3+2]=d;const m=.5+Math.random()*.7;this.maxLife[e]=m,this.life[e]=n?Math.random()*m:m}update(e){for(let n=0;n<this.config.count;n++){if(this.life[n]-=e,this.life[n]<=0){this.reset(n);continue}this.pos[n*6]+=this.vel[n*3]*e,this.pos[n*6+1]+=this.vel[n*3+1]*e,this.pos[n*6+2]+=this.vel[n*3+2]*e;const i=this.vel[n*3],s=this.vel[n*3+1],r=this.vel[n*3+2],o=Math.sqrt(i*i+s*s+r*r),a=this.config.lineLength/o;this.pos[n*6+3]=this.pos[n*6]-i*a,this.pos[n*6+4]=this.pos[n*6+1]-s*a,this.pos[n*6+5]=this.pos[n*6+2]-r*a}this.geom.attributes.position.needsUpdate=!0}setOpacity(e){this.mat.opacity=Math.max(0,Math.min(1,e))}getObject3D(){return this.mesh}dispose(){this.geom.dispose(),this.mat.dispose()}}class a_{constructor(e,n){C(this,"mesh");C(this,"posAttr");C(this,"pts");C(this,"fireTimer",0);C(this,"cooldown",Math.random()*2);C(this,"angle",0);C(this,"length",0);this.pts=e;const i=new Float32Array(e*2*3),s=[];for(let a=0;a<e-1;a++){const l=a*2;s.push(l,l+2,l+1,l+2,l+3,l+1)}const r=new Zt;this.posAttr=new cn(i,3),r.setAttribute("position",this.posAttr),r.setIndex(s);const o=new Xu({color:n,transparent:!0,opacity:0,blending:Xn,depthWrite:!1,side:li});this.mesh=new jn(r,o)}regenerate(e,n){const i=Math.cos(this.angle),s=Math.sin(this.angle),r=-s,o=i,a=n*.5;for(let l=0;l<this.pts;l++){const c=l/(this.pts-1),u=(c-.5)*this.length,h=(Math.random()-.5)*e*Math.sin(c*Math.PI),f=i*u+r*h,d=s*u+o*h,g=l*6;this.posAttr.array[g+0]=f+r*a,this.posAttr.array[g+1]=d+o*a,this.posAttr.array[g+2]=0,this.posAttr.array[g+3]=f-r*a,this.posAttr.array[g+4]=d-o*a,this.posAttr.array[g+5]=0}this.posAttr.needsUpdate=!0}setOpacity(e){this.mesh.material.opacity=Math.max(0,Math.min(1,e))}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class l_{constructor(e,n){C(this,"line");C(this,"positions");C(this,"segments");C(this,"fireTimer",0);C(this,"cooldown",Math.random()*2);C(this,"angle",0);C(this,"length",0);this.segments=e,this.positions=new Float32Array(e*3);const i=new Zt;i.setAttribute("position",new dn(this.positions,3));const s=new ju({color:n,transparent:!0,opacity:0,blending:Xn,depthWrite:!1});this.line=new jp(i,s)}regenerate(e){const n=Math.cos(this.angle),i=Math.sin(this.angle),s=-i,r=n;for(let o=0;o<this.segments;o++){const a=o/(this.segments-1),l=(a-.5)*this.length,c=(Math.random()-.5)*e*Math.sin(a*Math.PI);this.positions[o*3]=n*l+s*c,this.positions[o*3+1]=i*l+r*c,this.positions[o*3+2]=0}this.line.geometry.attributes.position.needsUpdate=!0}setOpacity(e){this.line.material.opacity=Math.max(0,Math.min(1,e))}dispose(){this.line.geometry.dispose(),this.line.material.dispose()}}class A2 extends nt{constructor(){super();C(this,"thickBolts");C(this,"thinBolts");C(this,"fieldLines");C(this,"whiteCore");C(this,"purpleCore");C(this,"innerGlow");C(this,"outerGlow");C(this,"time",0);C(this,"flickReady",!1);C(this,"flashIntensity",0);C(this,"depthScale",1);C(this,"spawnDur",.7);C(this,"dissipateDur",.5);this.distortionType=0,this.distortionStrength=0,this.darkenBackground=!0,this.thickBolts=[],this.thinBolts=[];const n=[new Ee(1,.95,1),new Ee(1,.95,1),new Ee(.88,.5,1),new Ee(.88,.5,1)];for(const i of n){const s=new a_(14,i);s.angle=Math.random()*Math.PI,s.length=4+Math.random()*2,s.cooldown=.4+Math.random()*1.2,this.thickBolts.push(s),this.group.add(s.mesh)}for(let i=0;i<3;i++){const s=new a_(18,new Ee(.6,.05,1));s.angle=Math.random()*Math.PI*2,s.length=5+Math.random()*2.5,s.cooldown=1+Math.random()*2,this.thickBolts.push(s),this.group.add(s.mesh)}for(let i=0;i<8;i++){const s=new l_(10,new Ee(.95,.75,1));s.angle=i/8*Math.PI,s.length=3.5+Math.random()*1.5,s.cooldown=Math.random()*1.5,this.thinBolts.push(s),this.group.add(s.line)}for(let i=0;i<12;i++){const s=i<6?new Ee(.88,.35,1):new Ee(.55,.05,1),r=new l_(16,s);r.angle=Math.random()*Math.PI*2,r.length=4.5+Math.random()*2.5,r.cooldown=Math.random()*2.5,this.thinBolts.push(r),this.group.add(r.line)}this.fieldLines=new gl({count:55,color:new Ee(.75,.25,1),speed:.5,radius:.12,lineLength:.05,opacity:.55,direction:"orbital"}),this.group.add(this.fieldLines.getObject3D()),this.whiteCore=nt.makeGlowSprite(new Ee(1,.97,1),.35),this.purpleCore=nt.makeGlowSprite(new Ee(.8,.15,1),.8),this.innerGlow=nt.makeGlowSprite(new Ee(.55,.02,.9),1.5),this.outerGlow=nt.makeGlowSprite(new Ee(.22,0,.55),2.8);for(const i of[this.whiteCore,this.purpleCore,this.innerGlow,this.outerGlow])this.group.add(i)}setFlickReady(n){this.flickReady=n}spawn(){super.spawn(),this.time=0,this.flickReady=!1,this.flashIntensity=0}beginDissipate(){super.beginDissipate(),this.darkenBackground=!1,this.flashIntensity=0}update(n){this.tickPhase(n),this.time+=n;const i=this.spawnT,s=this.dissipateT;this.flashIntensity=Math.max(0,this.flashIntensity-n*4);const r=this.flickReady,o=nt.easeOutBack(i,1.2),a=1+.6*nt.easeIn(s,.8);this.group.scale.setScalar(Math.max(.001,o*a*this.depthScale));const l=nt.easeOut(i,.6),c=1-nt.easeIn(s,.9),u=l*c,h=this.phase===ml.SPAWNING?1+(1-i)*.8:1,f=this.phase===ml.DISSIPATING?0:1,d=h*f;for(let M=0;M<4;M++){const x=this.thickBolts[M];if(x.fireTimer>0)x.fireTimer-=n,x.regenerate(r?.16:.1,.018+Math.random()*.008),x.setOpacity(u*.85*(r?1.3:1));else{x.setOpacity(0),x.cooldown-=n;const P=(r?.18:.08)*d;x.cooldown<=0&&Math.random()<P&&(x.angle=Math.random()*Math.PI,x.length=4+Math.random()*2.5,x.fireTimer=(r?.14:.1)*(.5+Math.random()),x.cooldown=.3+Math.random()*1,x.regenerate(.1,.018))}}for(let M=4;M<7;M++){const x=this.thickBolts[M];if(x.fireTimer>0)x.fireTimer-=n,x.regenerate(r?.3:.2,.014+Math.random()*.006),x.setOpacity(u*.75*(r?1.2:1));else{x.setOpacity(0),x.cooldown-=n;const P=(r?.1:.04)*d;x.cooldown<=0&&Math.random()<P&&(x.angle=Math.random()*Math.PI*2,x.length=r?6+Math.random()*2:5+Math.random()*2,x.fireTimer=(r?.22:.16)*(.6+Math.random()*.4),x.cooldown=.6+Math.random()*2,x.regenerate(.2,.014),this.flashIntensity=Math.min(1,this.flashIntensity+.5))}}const g=(r?.16:.07)*d,_=r?.16:.1;for(let M=0;M<8;M++){const x=this.thinBolts[M];x.fireTimer>0?(x.fireTimer-=n,x.regenerate(r?.12:.08),x.setOpacity(u*.8*(r?1.3:1))):(x.setOpacity(0),x.cooldown-=n,x.cooldown<=0&&Math.random()<g&&(x.angle=Math.random()*Math.PI,x.length=3.5+Math.random()*1.5,x.fireTimer=_*(.5+Math.random()*.5),x.cooldown=.2+Math.random()*1,x.regenerate(.08)))}const m=(r?.1:.04)*d;for(let M=8;M<this.thinBolts.length;M++){const x=this.thinBolts[M];x.fireTimer>0?(x.fireTimer-=n,x.regenerate(r?.28:.18),x.setOpacity(u*Math.min(.8*(r?1.25:1),1))):(x.setOpacity(0),x.cooldown-=n,x.cooldown<=0&&Math.random()<m&&(x.angle=Math.random()*Math.PI*2,x.length=r?5.5+Math.random()*2:4.5+Math.random()*2,x.fireTimer=(r?.24:.16)*(.6+Math.random()*.4),x.cooldown=.4+Math.random()*2,x.regenerate(.18)))}this.fieldLines.setOpacity(u*(r?.72:.5)),this.fieldLines.update(n);const p=.55+.3*Math.sin(this.time*6.5)+this.flashIntensity*.5,y=r?1.4:1;this.whiteCore.material.opacity=u*Math.min(p*y,1),this.purpleCore.material.opacity=u*(.82+this.flashIntensity*.28)*y,this.innerGlow.material.opacity=u*(.68+this.flashIntensity*.22)*y,this.outerGlow.material.opacity=u*(.38+this.flashIntensity*.12)*y}setPosition(n){this.group.position.copy(n)}setScale(n){this.depthScale=n}dispose(){var n;for(const i of this.thickBolts)i.dispose();for(const i of this.thinBolts)i.dispose();this.fieldLines.dispose();for(const i of[this.whiteCore,this.purpleCore,this.innerGlow,this.outerGlow])(n=i.material.map)==null||n.dispose(),i.material.dispose()}}const pC=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,mC=`
uniform float uTime;
uniform float uOpacity;
uniform float uBuildUp;
uniform float uAspect;

varying vec2 vUv;

float hash1(float n) { return fract(sin(n * 127.1)  * 43758.5453); }
float hash2(float n) { return fract(sin(n * 311.7 + 5.0) * 12345.6789); }

void main() {
  const float PI  = 3.14159265;
  const float TAU = 6.28318530;

  vec2 uv = vUv - 0.5;
  uv.x *= uAspect;

  float r     = length(uv);
  float theta = atan(uv.y, uv.x);
  float build = uBuildUp;
  float t     = uTime;

  // ── BASE: white void fading to deep indigo at edges ──────────────────────
  vec3 voidWhite  = vec3(0.97, 0.97, 1.00);
  vec3 lineIndigo = vec3(0.04, 0.02, 0.22);
  vec3 edgeBlue   = vec3(0.02, 0.01, 0.10);

  float edgeFactor = smoothstep(0.12, 0.60, r) * build;
  vec3 color = mix(voidWhite, edgeBlue, edgeFactor * edgeFactor);

  // ── RADIAL LINES — 72 thin spokes radiating from centre ──────────────────
  float numRad  = 72.0;
  float angStep = TAU / numRad;
  float normTheta = mod(theta + TAU, TAU);
  float tLocal    = mod(normTheta, angStep) / angStep; // 0..1 within each sector
  // Sharp thin spike at every sector boundary
  float radLine = pow(1.0 - min(tLocal, 1.0 - tLocal) * 2.0, 32.0);
  // Fade in from centre, fade before outer edge
  radLine *= smoothstep(0.02, 0.10, r) * smoothstep(0.72, 0.45, r) * build;

  // ── CONCENTRIC RINGS — 4 scales drifting inward ──────────────────────────
  float rings = 0.0;
  rings += pow(max(0.0, cos(r * 110.0 - t * 1.5)), 10.0) * 0.30;
  rings += pow(max(0.0, cos(r *  55.0 - t * 0.9)), 12.0) * 0.45;
  rings += pow(max(0.0, cos(r *  28.0 - t * 0.5)), 10.0) * 0.60;
  rings += pow(max(0.0, cos(r *  14.0 - t * 0.25)), 8.0) * 0.40;
  rings *= build * smoothstep(0.015, 0.06, r) * smoothstep(0.75, 0.55, r);

  // ── ROTATING ANGULAR SECTORS — 24-fold, slow clockwise spin ─────────────
  float rTheta    = theta + t * 0.03;
  float normRTheta = mod(rTheta + TAU, TAU);
  float secStep   = TAU / 24.0;
  float secLocal  = mod(normRTheta, secStep) / secStep;
  float secLine   = pow(1.0 - min(secLocal, 1.0 - secLocal) * 2.0, 28.0) * 0.5;
  secLine *= build * smoothstep(0.0, 0.10, r) * smoothstep(0.68, 0.30, r);

  // ── CARTESIAN GRID — very slow CCW rotation ──────────────────────────────
  float cartRot = t * 0.015;
  float cg = cos(cartRot), sg = sin(cartRot);
  vec2 gUv  = vec2(cg * uv.x - sg * uv.y, sg * uv.x + cg * uv.y) * 11.0;
  float cartX = pow(abs(cos(gUv.x * PI)), 28.0);
  float cartY = pow(abs(cos(gUv.y * PI)), 28.0);
  float cartGrid = max(cartX, cartY) * 0.30;
  cartGrid *= build * smoothstep(0.60, 0.18, r);

  // ── COMPOSITE GEOMETRY ───────────────────────────────────────────────────
  float geom = clamp(radLine * 0.75 + rings * 0.85 + secLine * 0.60 + cartGrid, 0.0, 1.0);
  color = mix(color, lineIndigo, geom * 0.90);

  // ── FLOATING POINT-SYMBOLS — 16 orbiting bright dots ────────────────────
  float symBright = 0.0;
  for (int j = 0; j < 16; j++) {
    float fj    = float(j);
    float speed = 0.06 + hash1(fj) * 0.10;
    float dir   = mod(fj, 2.0) < 1.0 ? 1.0 : -1.0;
    float ang   = fj * 0.3927 + t * speed * dir;
    float orbitR = 0.07 + hash2(fj) * 0.38;
    vec2 sPos   = vec2(cos(ang) * orbitR, sin(ang) * orbitR);
    float d     = length(uv - sPos);
    symBright  += smoothstep(0.014, 0.0, d);
    symBright  += smoothstep(0.055, 0.005, d) * 0.25;
  }
  symBright = min(symBright * build, 2.0);
  // Blue-white glow dots visible against the white background
  color  = mix(color, vec3(0.10, 0.08, 0.60), min(symBright * 0.55, 1.0));
  color += vec3(0.20, 0.25, 0.80) * min(symBright * 0.35, 0.8);

  // ── CENTRE SINGULARITY ────────────────────────────────────────────────────
  float coreR    = 0.022 + build * 0.012;
  float coreHard = smoothstep(coreR, 0.0, r);
  float coreSoft = smoothstep(coreR * 9.0, coreR * 0.5, r);
  color  = mix(color, vec3(0.80, 0.88, 1.0), coreSoft * build * 0.55);
  color += vec3(1.0, 1.0, 1.0) * coreHard;
  color  = min(color, vec3(1.5)); // allow slight bloom overshoot

  // ── DOMAIN EXPANSION MASK — circular wave expanding from centre ──────────
  // At build=0 → expandR≈0.06; at build=1 → expandR≈1.16 (covers 16:9 corners)
  float expandR  = 0.06 + build * 1.10;
  float softness = 0.15 * (1.0 - build * 0.5);
  float expansion = smoothstep(expandR, expandR - softness, r);

  float alpha = uOpacity * expansion;
  gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
}
`,Ir=150,Io=90;class R2 extends nt{constructor(){super();C(this,"voidMaterial");C(this,"splashPositions");C(this,"splashVelocities");C(this,"splashColors");C(this,"splashSizes");C(this,"splashRandSizes");C(this,"splashPoints");C(this,"splashGeom");C(this,"debrisAngles");C(this,"debrisRadii");C(this,"debrisSpeeds");C(this,"debrisPositions");C(this,"debrisPoints");C(this,"debrisGeom");C(this,"opacity",0);C(this,"targetOpacity",0);C(this,"time",0);C(this,"buildUp",0);C(this,"BUILD_TIME",4);this.darkenBackground=!1,this.distortionType=2,this.distortionStrength=0;const n=new _r(2,2);this.voidMaterial=new qn({vertexShader:pC,fragmentShader:mC,uniforms:{uTime:{value:0},uOpacity:{value:0},uBuildUp:{value:0},uAspect:{value:window.innerWidth/window.innerHeight}},transparent:!0,depthWrite:!1,depthTest:!1,blending:kx,blendSrc:Kc,blendDst:Zc});const i=new jn(n,this.voidMaterial);i.renderOrder=99,this.group.add(i),this.splashPositions=new Float32Array(Ir*3),this.splashVelocities=new Float32Array(Ir*3),this.splashColors=new Float32Array(Ir*3),this.splashSizes=new Float32Array(Ir),this.splashRandSizes=new Float32Array(Ir);for(let s=0;s<Ir;s++)this.splashRandSizes[s]=.018+Math.random()*.035,this.respawnSplash(s);this.splashGeom=new Zt,this.splashGeom.setAttribute("position",new dn(this.splashPositions,3)),this.splashGeom.setAttribute("color",new dn(this.splashColors,3)),this.splashGeom.setAttribute("size",new dn(this.splashSizes,1)),this.splashPoints=new pl(this.splashGeom,new na({size:.04,vertexColors:!0,transparent:!0,opacity:0,blending:fr,depthWrite:!1,sizeAttenuation:!0})),this.splashPoints.renderOrder=101,this.group.add(this.splashPoints),this.debrisAngles=new Float32Array(Io),this.debrisRadii=new Float32Array(Io),this.debrisSpeeds=new Float32Array(Io),this.debrisPositions=new Float32Array(Io*3);for(let s=0;s<Io;s++)this.debrisAngles[s]=Math.random()*Math.PI*2,this.debrisRadii[s]=.2+Math.random()*1,this.debrisSpeeds[s]=.25+Math.random()*1.2;this.debrisGeom=new Zt,this.debrisGeom.setAttribute("position",new dn(this.debrisPositions,3)),this.debrisPoints=new pl(this.debrisGeom,new na({color:394042,size:.022,transparent:!0,opacity:0,blending:fr,depthWrite:!1,sizeAttenuation:!0})),this.debrisPoints.renderOrder=100,this.group.add(this.debrisPoints)}respawnSplash(n){const i=Math.random()*Math.PI*2,s=.15+Math.random()*.65;this.splashPositions[n*3]=0,this.splashPositions[n*3+1]=0,this.splashPositions[n*3+2]=0,this.splashVelocities[n*3]=Math.cos(i)*s,this.splashVelocities[n*3+1]=Math.sin(i)*s,this.splashVelocities[n*3+2]=0,Math.random()<.5?(this.splashColors[n*3]=.06,this.splashColors[n*3+1]=.03,this.splashColors[n*3+2]=.38):(this.splashColors[n*3]=.1,this.splashColors[n*3+1]=.05,this.splashColors[n*3+2]=.55)}spawn(){super.spawn(),this.opacity=0,this.targetOpacity=1,this.buildUp=0,this.time=0}beginDissipate(){this.targetOpacity=0}get isDone(){return this.targetOpacity===0&&this.opacity<.01}update(n){this.time+=n,this.buildUp=Math.min(this.buildUp+n/this.BUILD_TIME,1),this.opacity+=(this.targetOpacity-this.opacity)*Math.min(n*1.5,1),this.distortionStrength=this.buildUp*this.opacity*.6;const i=this.voidMaterial.uniforms;i.uTime.value=this.time,i.uOpacity.value=this.opacity,i.uBuildUp.value=this.buildUp,i.uAspect.value=window.innerWidth/window.innerHeight;const s=this.splashGeom.attributes;for(let o=0;o<Ir;o++){let a=this.splashVelocities[o*3+2];a+=n,a>1.5+Math.random()*1&&(this.respawnSplash(o),a=0);const l=this.splashVelocities[o*3],c=this.splashVelocities[o*3+1],u=this.splashPositions[o*3],h=this.splashPositions[o*3+1],f=Math.sqrt(u*u+h*h)+.01,d=.015*this.buildUp/f;this.splashPositions[o*3]+=(l-u*d)*n,this.splashPositions[o*3+1]+=(c-h*d)*n,this.splashVelocities[o*3+2]=a;const g=a<.15?a/.15:Math.max(0,1-(a-.5)/1.5);this.splashSizes[o]=this.splashRandSizes[o]*g*this.buildUp}s.position.needsUpdate=!0,s.size.needsUpdate=!0,this.splashPoints.material.opacity=this.opacity*this.buildUp*.8;const r=this.debrisGeom.attributes.position;for(let o=0;o<Io;o++)this.debrisAngles[o]+=n*this.debrisSpeeds[o]*(1+(1-this.debrisRadii[o])*1.5),this.debrisRadii[o]-=n*.025*this.buildUp,this.debrisRadii[o]<.07&&(this.debrisRadii[o]=.35+Math.random()*.85,this.debrisAngles[o]=Math.random()*Math.PI*2),r.array[o*3]=Math.cos(this.debrisAngles[o])*this.debrisRadii[o],r.array[o*3+1]=Math.sin(this.debrisAngles[o])*this.debrisRadii[o],r.array[o*3+2]=0;r.needsUpdate=!0,this.debrisPoints.material.opacity=this.opacity*this.buildUp*.55}setPosition(n){}dispose(){this.voidMaterial.dispose(),this.splashGeom.dispose(),this.splashPoints.material.dispose(),this.debrisGeom.dispose(),this.debrisPoints.material.dispose()}getBuildUp(){return this.buildUp}getOpacity(){return this.opacity}}class gC extends nt{constructor(){super();C(this,"blueGlow");C(this,"redGlow");C(this,"midGlow");C(this,"clashGlow");C(this,"clashRing");C(this,"particles",[]);C(this,"particleGeom");C(this,"particleMesh");C(this,"start",new H);C(this,"end",new H);C(this,"intensity",0);C(this,"time",0);C(this,"clashFlash",0);C(this,"MAX_PARTICLES",400);this.blueGlow=nt.makeGlowSprite(new Ee(.25,.65,1),.4),this.redGlow=nt.makeGlowSprite(new Ee(1,.08,0),.4),this.midGlow=nt.makeGlowSprite(new Ee(.65,.1,.9),.5),this.clashRing=nt.makeGlowSprite(new Ee(1,.8,.9),.7),this.clashGlow=nt.makeGlowSprite(new Ee(1,.96,1),.25);for(const i of[this.midGlow,this.clashRing,this.clashGlow,this.blueGlow,this.redGlow])this.group.add(i);const n=this.MAX_PARTICLES;this.particleGeom=new Zt,this.particleGeom.setAttribute("position",new cn(new Float32Array(n*3),3)),this.particleGeom.setAttribute("color",new cn(new Float32Array(n*3),3)),this.particleGeom.setAttribute("size",new cn(new Float32Array(n),1)),this.particleMesh=new pl(this.particleGeom,new na({size:.016,vertexColors:!0,transparent:!0,opacity:.95,blending:Xn,depthWrite:!1,sizeAttenuation:!1})),this.group.add(this.particleMesh)}setEndpoints(n,i,s){this.start.copy(n),this.end.copy(i),this.intensity=Math.max(0,Math.min(1,s))}update(n){this.time+=n;const i=this.intensity;if(i<=0)return;const s=this.start.clone().add(this.end).multiplyScalar(.5),r=this.end.clone().sub(this.start),o=r.length();if(o<.001)return;r.divideScalar(o);const a=new H(-r.y,r.x,0),l=Math.floor(i*10);for(let m=0;m<l&&this.particles.length<this.MAX_PARTICLES;m++){const p=Math.random()<.5,y=p?this.start.clone():this.end.clone(),M=.03+(1-i)*.05;y.x+=(Math.random()-.5)*M,y.y+=(Math.random()-.5)*M;const x=s.clone().sub(y).normalize(),P=.2+i*.3+Math.random()*.15,T=(Math.random()-.5)*.12*i;this.particles.push({pos:y,vel:new H(x.x*P+a.x*T,x.y*P+a.y*T,0),life:0,maxLife:.25+Math.random()*.4,color:p?new Ee(.15+Math.random()*.2,.55+Math.random()*.3,1):new Ee(1,.08+Math.random()*.18,.02),isClash:!1})}const c=Math.floor(i*i*18);for(let m=0;m<c&&this.particles.length<this.MAX_PARTICLES;m++){const p=s.clone();p.x+=a.x*(Math.random()-.5)*.06,p.y+=a.y*(Math.random()-.5)*.06;const y=Math.random()<.5?1:-1,M=.25+i*.55+Math.random()*.3,x=(Math.random()-.5)*.15,P=Math.random(),T=new Ee(.8+P*.2,.3*(1-P),.6+(1-P)*.4);this.particles.push({pos:p,vel:new H(a.x*y*M+r.x*x,a.y*y*M+r.y*x,0),life:0,maxLife:.12+Math.random()*.22,color:T,isClash:!0})}const u=this.particleGeom.attributes.position.array,h=this.particleGeom.attributes.color.array,f=this.particleGeom.attributes.size.array;for(let m=this.particles.length-1;m>=0;m--){const p=this.particles[m];if(p.life+=n,p.life>=p.maxLife){this.particles.splice(m,1);continue}if(p.isClash)p.vel.multiplyScalar(.88);else{const y=s.clone().sub(p.pos);if(y.length()>.01){const x=y.normalize().multiplyScalar(n*(.3+p.life/p.maxLife*.6)*i);p.vel.add(x);const P=p.pos.clone().sub(s).dot(r),T=p.color.b>.5;(T&&P>.01||!T&&P<-.01)&&(p.vel.x-=r.x*p.vel.dot(r)*1.8,p.vel.y-=r.y*p.vel.dot(r)*1.8)}p.vel.multiplyScalar(.94)}p.pos.add(p.vel.clone().multiplyScalar(n))}const d=this.particles.length;for(let m=0;m<this.MAX_PARTICLES;m++)if(m<d){const p=this.particles[m],y=p.life/p.maxLife,M=y<.1?y/.1:y>.65?(1-y)/.35:1;u[m*3]=p.pos.x,u[m*3+1]=p.pos.y,u[m*3+2]=0,h[m*3]=p.color.r*M,h[m*3+1]=p.color.g*M,h[m*3+2]=p.color.b*M,f[m]=p.isClash?.006+M*.018*i:.007+M*.012*(1+i*.4)}else u[m*3]=u[m*3+1]=u[m*3+2]=0,h[m*3]=h[m*3+1]=h[m*3+2]=0,f[m]=0;this.particleGeom.attributes.position.needsUpdate=!0,this.particleGeom.attributes.color.needsUpdate=!0,this.particleGeom.attributes.size.needsUpdate=!0,this.particleGeom.setDrawRange(0,d);const g=i*i;this.blueGlow.material.opacity=i*.65,this.blueGlow.scale.setScalar(.22+i*.28),this.blueGlow.position.copy(this.start),this.redGlow.material.opacity=i*.65,this.redGlow.scale.setScalar(.22+i*.28),this.redGlow.position.copy(this.end),this.midGlow.material.opacity=g*.75,this.midGlow.scale.setScalar(.12+g*.55),this.midGlow.position.copy(s),this.clashFlash=Math.max(0,this.clashFlash-n*8),i>.35&&Math.random()<i*.45&&(this.clashFlash=.55+Math.random()*.55);const _=this.clashFlash*i;this.clashRing.material.opacity=g*.55+_*.3,this.clashRing.scale.setScalar(.06+g*.28+_*.12),this.clashRing.position.copy(s),this.clashGlow.material.opacity=_*.95,this.clashGlow.scale.setScalar(.05+_*.2),this.clashGlow.position.copy(s)}spawn(){this.group.visible=!0}async dissipate(){this.group.visible=!1}setPosition(n){}dispose(){var n;for(const i of[this.blueGlow,this.redGlow,this.midGlow,this.clashRing,this.clashGlow])(n=i.material.map)==null||n.dispose(),i.material.dispose();this.particleGeom.dispose(),this.particleMesh.material.dispose()}}class c_ extends nt{constructor(n){super();C(this,"glow");C(this,"charge",0);this.glow=nt.makeGlowSprite(n,.4),this.group.add(this.glow)}setCharge(n){this.charge=Math.max(0,Math.min(1,n)),this.glow.material.opacity=this.charge*.5;const i=.2+this.charge*.6;this.glow.scale.setScalar(i),this.group.visible=this.charge>0}update(n){}setPosition(n){this.group.position.copy(n)}dispose(){var n;(n=this.glow.material.map)==null||n.dispose(),this.glow.material.dispose()}}class _C{play(e){}haptic(e){}}function vC(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2,z:(t.z+e.z)/2}}const C2=[Ue.INDEX_FINGER_TIP,Ue.MIDDLE_FINGER_TIP,Ue.RING_FINGER_TIP,Ue.PINKY_TIP,Ue.THUMB_TIP],xC=[Ue.INDEX_FINGER_PIP,Ue.MIDDLE_FINGER_PIP,Ue.RING_FINGER_PIP,Ue.PINKY_PIP,Ue.THUMB_IP];function yC(t,e,n){return t[e].y<t[n].y}function SC(t){let e=0;for(let n=0;n<4;n++)yC(t,C2[n],xC[n])&&e++;return e}function qp(t){let e=t[Ue.INDEX_FINGER_TIP];for(const n of C2)t[n].y<e.y&&(e=t[n]);return e}function MC(t){return vC(t[Ue.THUMB_TIP],t[Ue.INDEX_FINGER_TIP])}function EC(t){const e=t[Ue.THUMB_TIP],n=t[Ue.INDEX_FINGER_TIP],i=e.x-n.x,s=e.y-n.y;return Math.sqrt(i*i+s*s)}function P2(t){const e=t[Ue.WRIST],n=t[Ue.MIDDLE_FINGER_MCP],i=e.x-n.x,s=e.y-n.y;return Math.sqrt(i*i+s*s)}function $p(t){const e=EC(t),n=P2(t);return n<.001?0:e/n}function Yp(t,e){return t.find(n=>n.handedness===e)}const bC=700,TC=2800,u_=400,h_=10,wC=.28,f_=.5,AC=3;class RC{constructor(e,n){C(this,"registry",new Map);C(this,"activeAbilities",new Map);C(this,"lastSeenTime",new Map);C(this,"projectiles",[]);C(this,"eventBus");C(this,"sceneManager");C(this,"soundManager");C(this,"latestHands",[]);C(this,"postShootBlockUntil",0);C(this,"mergeBeam",null);C(this,"mergeContactTimer",0);C(this,"pinchHeldFrames",0);C(this,"pinchWasHeld",!1);C(this,"lastFlickTime",0);C(this,"prevNormPinch",0);C(this,"normPinchHistory",[]);C(this,"lastNormPinch",0);C(this,"lastVelocity",0);C(this,"chargeBlue");C(this,"chargeRed");C(this,"domainActive",!1);C(this,"domainEffect",null);C(this,"domainTimer",0);C(this,"debugEvents",[]);C(this,"eventLog",null);C(this,"domainGesture",null);C(this,"ATTRACTION_RANGE",2.2);C(this,"MERGE_TOUCH_DIST",.28);C(this,"MERGE_HOLD_TIME",.9);this.eventBus=e,this.sceneManager=n,this.soundManager=new _C,this.chargeBlue=new c_(new Ee(.2,.55,1)),this.chargeRed=new c_(new Ee(1,.08,0)),this.sceneManager.addEffect(this.chargeBlue),this.sceneManager.addEffect(this.chargeRed),this.eventBus.on("gestureDetected",i=>this.onGesture(i)),this.eventBus.on("handUpdate",i=>{this.latestHands=i})}addAnimation(e,n){this.registry.set(e,n)}setDomainGesture(e){this.domainGesture=e}setEventLog(e){this.eventLog=e}getDebugState(){var e;return{activeAbilities:[...this.activeAbilities.keys()],mergeProgress:this.MERGE_HOLD_TIME>0?Math.min(this.mergeContactTimer/this.MERGE_HOLD_TIME,1):0,flickState:{normalizedPinch:this.lastNormPinch,velocity:this.lastVelocity,pinchHeld:this.pinchWasHeld,pinchFrames:this.pinchHeldFrames,flickCooldown:performance.now()<this.lastFlickTime+u_},recentEvents:[...this.debugEvents],domainActive:this.domainActive,domainProgress:this.domainActive?Math.min(this.domainTimer/h_,1):0,domainHoldProgress:((e=this.domainGesture)==null?void 0:e.getHoldProgress())??0}}logEvent(e){this.debugEvents.length>0&&this.debugEvents[0].label===e||(this.debugEvents.unshift({label:e,t:performance.now()}),this.debugEvents.length>8&&this.debugEvents.pop())}onGesture(e){if(e.type===$e.FINGER_FLICK_LEFT||e.type===$e.FINGER_FLICK_RIGHT){this.handleFlick(e);return}if(e.type===$e.DOMAIN_EXPANSION){this.activateDomain();return}if(e.type===$e.DOMAIN_EXIT){this.deactivateDomain();return}this.domainActive||e.type!==$e.HANDS_MERGED&&(this.activeAbilities.has($e.HANDS_MERGED)||performance.now()<this.postShootBlockUntil||this.handleAbilityGesture(e))}activateDomain(){var e,n;if(!this.domainActive){(e=this.domainGesture)==null||e.setDomainActive(!0);for(const[i,s]of this.activeAbilities)this.sceneManager.removeEffect(s.getEffect()),this.activeAbilities.delete(i),this.lastSeenTime.delete(i);this.clearMergeBeam(),this.pinchHeldFrames=0,this.pinchWasHeld=!1,this.normPinchHistory=[],this.domainActive=!0,this.domainTimer=0,this.domainEffect=new R2,this.sceneManager.addEffect(this.domainEffect),this.domainEffect.spawn(),this.soundManager.play("domain"),this.soundManager.haptic([200,60,200,60,300]),(n=this.eventLog)==null||n.logDomain(!0),this.logEvent("DOMAIN EXPANSION: Infinite Void")}}deactivateDomain(){var e,n;this.domainActive&&((e=this.domainGesture)==null||e.setDomainActive(!1),this.domainEffect&&(this.sceneManager.removeEffect(this.domainEffect),this.domainEffect=null),this.domainActive=!1,this.domainTimer=0,(n=this.eventLog)==null||n.logDomain(!1),this.logEvent("Domain: dissipated"))}handleAbilityGesture(e){var u,h,f,d;const n=this.registry.get(e.type);if(!n||!e.anchorPosition)return;this.lastSeenTime.set(e.type,performance.now());const i=e.type===$e.LEFT_HAND_RAISED?"Left":"Right",s=Yp(this.latestHands,i);let r=e.anchorPosition;if(s){const g=qp(s.landmarks);r={x:g.x,y:g.y-.07,z:g.z}}const o=e.type===$e.LEFT_HAND_RAISED?this.chargeBlue:this.chargeRed;if(e.charging){const g=this.sceneManager.landmarkToWorld(r);o.setCharge(e.confidence),o.setPosition(g);return}o.setCharge(0);let a=this.activeAbilities.get(e.type);const l=this.sceneManager.landmarkToWorld(r);a||(a=n(),this.activeAbilities.set(e.type,a),this.sceneManager.addEffect(a.getEffect()),a.onSpawn(r),e.type===$e.LEFT_HAND_RAISED?(this.soundManager.play("blue"),this.soundManager.haptic([60]),(u=this.eventLog)==null||u.logSpawn("blue",r.x,r.y,r.z??0),this.logEvent("SPAWN Blue")):e.type===$e.RIGHT_HAND_RAISED&&(this.soundManager.play("red"),this.soundManager.haptic([60]),(h=this.eventLog)==null||h.logSpawn("red",r.x,r.y,r.z??0),this.logEvent("SPAWN Red")));let c=1;if(s){const g=s.landmarks[Ue.WRIST].z;c=Math.max(.5,Math.min(1.6,1-g*4))}e.type===$e.LEFT_HAND_RAISED?(f=this.eventLog)==null||f.logPosition("blue",r.x,r.y,r.z??0,c):e.type===$e.RIGHT_HAND_RAISED&&((d=this.eventLog)==null||d.logPosition("red",r.x,r.y,r.z??0,c)),a.onIdle(r,l,c)}updateMerge(e){const n=this.activeAbilities.get($e.LEFT_HAND_RAISED),i=this.activeAbilities.get($e.RIGHT_HAND_RAISED);if(!n||!i||this.activeAbilities.has($e.HANDS_MERGED)||performance.now()<this.postShootBlockUntil){this.mergeContactTimer=0,this.clearMergeBeam();return}const s=n.getEffect().getObject3D().position,r=i.getEffect().getObject3D().position,o=s.distanceTo(r);if(o<this.ATTRACTION_RANGE){const a=1-o/this.ATTRACTION_RANGE;this.mergeBeam||(this.mergeBeam=new gC,this.sceneManager.addEffect(this.mergeBeam),this.mergeBeam.spawn(),this.logEvent("Merge beam START")),this.mergeBeam.setEndpoints(s,r,a),this.mergeBeam.update(e)}else this.clearMergeBeam();o<this.MERGE_TOUCH_DIST?(this.mergeContactTimer+=e,this.mergeContactTimer>=this.MERGE_HOLD_TIME&&(this.mergeContactTimer=0,this.doMerge())):this.mergeContactTimer=0}clearMergeBeam(){this.mergeBeam&&(this.sceneManager.killEffect(this.mergeBeam),this.mergeBeam=null)}doMerge(){var i;for(const s of[$e.LEFT_HAND_RAISED,$e.RIGHT_HAND_RAISED]){const r=this.activeAbilities.get(s);r&&(this.sceneManager.removeEffect(r.getEffect()),this.activeAbilities.delete(s),this.lastSeenTime.delete(s))}this.clearMergeBeam();const e=this.registry.get($e.HANDS_MERGED);if(!e)return;const n=e();this.activeAbilities.set($e.HANDS_MERGED,n),this.sceneManager.addEffect(n.getEffect()),n.onSpawn({x:.5,y:.5,z:0}),this.soundManager.play("purple"),this.soundManager.haptic([100,40,100]),(i=this.eventLog)==null||i.logSpawn("purple",.5,.5,0),this.logEvent("MERGE → Hollow Purple"),this.pinchHeldFrames=0,this.pinchWasHeld=!1,this.normPinchHistory=[]}handleFlick(e){var c,u,h;const n=this.activeAbilities.get($e.HANDS_MERGED);if(n){this.activeAbilities.delete($e.HANDS_MERGED),this.lastSeenTime.delete($e.HANDS_MERGED),this.pinchHeldFrames=0,this.pinchWasHeld=!1,this.normPinchHistory=[],this.lastFlickTime=performance.now();const f=n.config.color.clone(),d=n.config.glowColor.clone(),g=new o_(f,d,!0);g.setPosition(n.getEffect().getObject3D().position.clone()),g.setVelocity(new H(0,0,0)),g.spawn(),this.sceneManager.addEffect(g),this.projectiles.push(g),this.sceneManager.removeEffect(n.getEffect()),this.sceneManager.clearDarkState(),this.soundManager.play("shoot"),this.soundManager.haptic([80]),(c=this.eventLog)==null||c.logDissipate("purple"),(u=this.eventLog)==null||u.logShoot(.5,.5),this.logEvent("FLICK → SHOOT!"),this.postShootBlockUntil=performance.now()+TC;return}if(!e||performance.now()<this.postShootBlockUntil)return;const i=e.type===$e.FINGER_FLICK_LEFT?$e.LEFT_HAND_RAISED:$e.RIGHT_HAND_RAISED,s=this.activeAbilities.get(i);if(!s||s.state!==ai.IDLE)return;this.activeAbilities.delete(i),this.lastSeenTime.delete(i),this.lastFlickTime=performance.now();const r=s.config.color.clone(),o=s.config.glowColor.clone(),a=new o_(r,o,!1);a.setPosition(s.getEffect().getObject3D().position.clone()),a.setVelocity(new H(0,0,0)),a.spawn(),this.sceneManager.addEffect(a),this.projectiles.push(a),this.sceneManager.removeEffect(s.getEffect()),this.soundManager.play("shoot"),this.soundManager.haptic([80]);const l=i===$e.LEFT_HAND_RAISED?"blue":"red";(h=this.eventLog)==null||h.logDissipate(l),this.logEvent(`FLICK → SHOOT ${l.toUpperCase()}!`),this.postShootBlockUntil=performance.now()+1e3}update(e){if(this.domainActive){this.domainTimer+=e,this.domainTimer>=h_&&this.deactivateDomain();for(let s=this.projectiles.length-1;s>=0;s--){const r=this.projectiles[s];r.isExpired()&&(this.sceneManager.killEffect(r),this.projectiles.splice(s,1))}return}this.updateMerge(e);const n=this.activeAbilities.get($e.HANDS_MERGED);if(n&&n.state===ai.IDLE&&this.latestHands.length>0){const r=this.latestHands[0].landmarks,o=MC(r),a={x:o.x,y:o.y-.06,z:o.z},l=Math.max(.5,Math.min(1.6,1-r[Ue.WRIST].z*4));n.onIdle(a,this.sceneManager.landmarkToWorld(a),l),this.lastSeenTime.set($e.HANDS_MERGED,performance.now());const c=$p(r);this.normPinchHistory.push(c),this.normPinchHistory.length>3&&this.normPinchHistory.shift();const u=this.normPinchHistory.reduce((d,g)=>d+g,0)/this.normPinchHistory.length,h=e>0?(u-this.prevNormPinch)/e:0;if(this.prevNormPinch=u,this.lastNormPinch=u,this.lastVelocity=h,!(performance.now()<this.lastFlickTime+u_))if(u<wC)this.pinchHeldFrames=Math.min(this.pinchHeldFrames+1,60),this.pinchHeldFrames>=AC&&(this.pinchWasHeld=!0);else if(u>f_&&this.pinchWasHeld){this.logEvent(`flick v=${h.toFixed(2)}`),this.handleFlick();return}else u>f_&&(this.pinchHeldFrames=0,this.pinchWasHeld=!1);n.getEffect().setFlickReady(this.pinchWasHeld)}else n||(this.pinchHeldFrames=0,this.pinchWasHeld=!1,this.normPinchHistory=[],this.prevNormPinch=0);const i=[];for(const[,s]of this.activeAbilities)if(s.update(e),s instanceof dC){const r=s.getForceField();r&&i.push(r)}this.sceneManager.setForceFields(i);for(let s=this.projectiles.length-1;s>=0;s--){const r=this.projectiles[s];r.isExpired()&&(this.sceneManager.killEffect(r),this.projectiles.splice(s,1))}}removeAbilitiesForMissingHands(e){var i,s;if(this.domainActive)return;const n=performance.now();for(const[r,o]of this.activeAbilities){if(r===$e.HANDS_MERGED)continue;if(e.has(r)){this.lastSeenTime.set(r,n);continue}const a=this.lastSeenTime.get(r)??0;n-a>bC&&o.state===ai.IDLE&&(this.sceneManager.removeEffect(o.getEffect()),this.activeAbilities.delete(r),this.lastSeenTime.delete(r),r===$e.LEFT_HAND_RAISED&&((i=this.eventLog)==null||i.logDissipate("blue")),r===$e.RIGHT_HAND_RAISED&&((s=this.eventLog)==null||s.logDissipate("red")),this.logEvent(`dissipate:${r}`))}for(const r of[$e.LEFT_HAND_RAISED,$e.RIGHT_HAND_RAISED])!e.has(r)&&!this.activeAbilities.has(r)&&(r===$e.LEFT_HAND_RAISED?this.chargeBlue:this.chargeRed).setCharge(0)}}const yc=80,d_=.8,CC=.92,p_=3.5;class PC{constructor(e,n){C(this,"particles");C(this,"geom");C(this,"points");C(this,"posAttr");C(this,"colAttr");C(this,"time",0);this.particles=[];const i=new Float32Array(yc*3),s=new Float32Array(yc*3);for(let r=0;r<yc;r++){const o=(Math.random()-.5)*e*.85,a=(Math.random()-.5)*n*.85,l=new H(o,a,0);this.particles.push({pos:l.clone(),vel:new H,basePos:l,phase:Math.random()*Math.PI*2}),i[r*3]=o,i[r*3+1]=a,i[r*3+2]=0;const c=Math.random();s[r*3]=.4+c*.3,s[r*3+1]=.5+c*.2,s[r*3+2]=.8+c*.2}this.posAttr=new cn(i,3),this.colAttr=new cn(s,3),this.geom=new Zt,this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.points=new pl(this.geom,new na({size:.022,vertexColors:!0,transparent:!0,opacity:.28,blending:Xn,depthWrite:!1,sizeAttenuation:!0}))}getObject3D(){return this.points}update(e,n){this.time+=e;const i=n.length>1;for(let s=0;s<yc;s++){const r=this.particles[s],o=.03,a=Math.sin(this.time*.6+r.phase)*o,l=Math.cos(this.time*.5+r.phase*1.3)*o;r.vel.x+=a*e,r.vel.y+=l*e;let c=!1;for(const _ of n){const m=_.position.x-r.pos.x,p=_.position.y-r.pos.y,y=Math.sqrt(m*m+p*p);if(y>_.radius||y<.001)continue;c=!0;const M=1-y/_.radius,x=_.sign*_.strength*M*e;r.vel.x+=m/y*x,r.vel.y+=p/y*x}if(!c){const _=r.basePos.x-r.pos.x,m=r.basePos.y-r.pos.y;r.vel.x+=_*d_*e,r.vel.y+=m*d_*e}r.vel.multiplyScalar(CC);const u=r.vel.length();u>p_&&r.vel.multiplyScalar(p_/u),r.pos.x+=r.vel.x*e,r.pos.y+=r.vel.y*e,this.posAttr.array[s*3]=r.pos.x,this.posAttr.array[s*3+1]=r.pos.y,this.posAttr.array[s*3+2]=0;let h=.4,f=.5,d=.9;i?(h=.85,f=.7,d=1):n.length===1&&(n[0].sign===1?(h=.2,f=.6,d=1):(h=1,f=.3,d=.15));const g=Math.min(e*3,1);this.colAttr.array[s*3]+=(h-this.colAttr.array[s*3])*g,this.colAttr.array[s*3+1]+=(f-this.colAttr.array[s*3+1])*g,this.colAttr.array[s*3+2]+=(d-this.colAttr.array[s*3+2])*g}this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.points.material.opacity=n.length===0?.18:.28+n.length*.08}dispose(){this.geom.dispose(),this.points.material.dispose()}}var IC=`varying vec2 vUv;

void main() {\r
  vUv = uv;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,DC=`uniform sampler2D uVideoTexture;\r
uniform float uTime;\r
uniform float uDarkness;\r
uniform vec2 uDistortionCenters[3];\r
uniform float uDistortionStrengths[3];\r
uniform float uDistortionTypes[3]; 
uniform int uActiveDistortions;

varying vec2 vUv;

void main() {\r
  vec2 uv = vUv;

  for (int i = 0; i < 3; i++) {\r
    if (i >= uActiveDistortions) break;

    vec2 center = uDistortionCenters[i];\r
    float strength = uDistortionStrengths[i];\r
    float dtype = uDistortionTypes[i];

    vec2 toCenter = center - uv;\r
    float dist = length(toCenter);\r
    float radius = 0.45;

    if (dist < radius && dist > 0.001) {\r
      float normalizedDist = dist / radius;\r
      float falloff = 1.0 - normalizedDist;\r
      falloff = falloff * falloff * falloff;\r
      vec2 dir = normalize(toCenter);

      if (abs(dtype - 1.0) < 0.5) {\r
        
        float pushStrength = falloff * strength * 0.25;\r
        uv -= dir * pushStrength;\r
        
        float ring = sin(dist * 40.0 - uTime * 6.0) * 0.5 + 0.5;\r
        float ring2 = sin(dist * 25.0 - uTime * 4.0) * 0.5 + 0.5;\r
        uv -= dir * (ring * 0.03 + ring2 * 0.015) * falloff * strength;\r
        
        float angle = falloff * strength * 0.25;\r
        float s = sin(angle);\r
        float c = cos(angle);\r
        vec2 off = uv - center;\r
        uv = center + vec2(c * off.x - s * off.y, s * off.x + c * off.y);\r
      } else if (abs(dtype + 1.0) < 0.5) {\r
        
        float pullStrength = falloff * strength * 0.2;\r
        uv += dir * pullStrength;\r
        
        float angle = falloff * strength * 0.8 * sin(uTime * 4.0);\r
        float s = sin(angle);\r
        float c = cos(angle);\r
        vec2 off = uv - center;\r
        uv = center + vec2(c * off.x - s * off.y, s * off.x + c * off.y);\r
        
        float wave = sin(dist * 35.0 + uTime * 8.0) * 0.5 + 0.5;\r
        uv += dir * wave * falloff * strength * 0.025;\r
      } else if (abs(dtype - 2.0) < 0.5) {\r
        
        float bendStrength = falloff * strength * 0.3;\r
        uv += dir * bendStrength;\r
        
        float ring1 = sin(dist * 20.0 - uTime * 3.0) * 0.5 + 0.5;\r
        float ring2 = sin(dist * 35.0 - uTime * 5.0) * 0.5 + 0.5;\r
        float ring3 = sin(dist * 50.0 - uTime * 7.0) * 0.5 + 0.5;\r
        float rings = ring1 * 0.5 + ring2 * 0.3 + ring3 * 0.2;\r
        uv += dir * rings * falloff * strength * 0.06;\r
        
        float spread = falloff * strength * 0.1;\r
        uv += vec2(sin(uTime * 2.0 + dist * 15.0), cos(uTime * 2.5 + dist * 15.0)) * spread * 0.04;\r
      }\r
    }\r
  }

  
  vec2 sampleUv = clamp(vec2(1.0 - uv.x, uv.y), 0.0, 1.0);\r
  vec4 color = texture2D(uVideoTexture, sampleUv);

  
  color.rgb *= uDarkness;

  
  for (int i = 0; i < 3; i++) {\r
    if (i >= uActiveDistortions) break;\r
    vec2 center = uDistortionCenters[i];\r
    float dist = length(center - vUv);\r
    float dtype = uDistortionTypes[i];\r
    float strength = uDistortionStrengths[i];\r
    float falloff = max(0.0, 1.0 - dist / 0.3);\r
    float tint = falloff * strength;

    if (abs(dtype - 1.0) < 0.5) {\r
      
      color.rgb *= 1.0 - tint * 0.4;\r
      color.rgb += vec3(-0.06, 0.04, 0.25) * tint;\r
      float vignette = max(0.0, 1.0 - dist / 0.2) * strength;\r
      color.rgb *= 1.0 - vignette * 0.5;\r
    } else if (abs(dtype + 1.0) < 0.5) {\r
      
      color.rgb *= 1.0 - tint * 0.4;\r
      color.rgb += vec3(0.3, -0.06, -0.06) * tint;\r
      float vignette = max(0.0, 1.0 - dist / 0.2) * strength;\r
      color.rgb *= 1.0 - vignette * 0.35;\r
      color.r += vignette * 0.12;\r
    } else if (abs(dtype - 2.0) < 0.5) {\r
      
      float purpleTint = tint * 1.5;\r
      color.rgb *= 1.0 - purpleTint * 0.5;\r
      color.rgb += vec3(0.15, -0.08, 0.3) * purpleTint;\r
      float hotspot = max(0.0, 1.0 - dist / 0.08) * strength;\r
      color.rgb += vec3(0.4, 0.25, 0.5) * hotspot;\r
      float vignette = max(0.0, 1.0 - dist / 0.35) * strength;\r
      color.rgb *= 1.0 - vignette * 0.6;\r
    }\r
  }

  gl_FragColor = color;\r
}`;class LC{constructor(e){C(this,"scene");C(this,"camera");C(this,"renderer");C(this,"canvas");C(this,"effects",new Set);C(this,"dyingEffects",new Set);C(this,"bgMaterial");C(this,"videoTexture");C(this,"frustumWidth",2);C(this,"frustumHeight",2);C(this,"debris");C(this,"activeForceFields",[]);C(this,"_distCenters",[new ft(.5,.5),new ft(.5,.5),new ft(.5,.5)]);C(this,"_distStrengths",[0,0,0]);C(this,"_distTypes",[0,0,0]);this.canvas=e,this.scene=new o2,this.camera=new $u(-1,1,1,-1,.1,100),this.camera.position.z=10,this.renderer=new w2({canvas:this.canvas,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(0,1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))}initialize(e){const n=this.canvas.clientWidth||window.innerWidth,i=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(n,i,!1);const s=n/i;this.frustumHeight=2,this.frustumWidth=this.frustumHeight*s,this.updateCamera(s),this.videoTexture=new f2(e),this.videoTexture.minFilter=$t,this.videoTexture.magFilter=$t,this.videoTexture.colorSpace=Jn,this.bgMaterial=new qn({vertexShader:IC,fragmentShader:DC,uniforms:{uVideoTexture:{value:this.videoTexture},uTime:{value:0},uDarkness:{value:1},uDistortionCenters:{value:this._distCenters},uDistortionStrengths:{value:[0,0,0]},uDistortionTypes:{value:[0,0,0]},uActiveDistortions:{value:0}},depthWrite:!1,depthTest:!1});const r=new _r(this.frustumWidth,this.frustumHeight),o=new jn(r,this.bgMaterial);o.position.z=-1,o.renderOrder=-1,this.scene.add(o);const a=new _2(16777215,.6);this.scene.add(a),this.debris=new PC(this.frustumWidth,this.frustumHeight),this.scene.add(this.debris.getObject3D()),window.addEventListener("resize",()=>this.onResize())}updateCamera(e){this.frustumWidth=this.frustumHeight*e,this.camera.left=-this.frustumWidth/2,this.camera.right=this.frustumWidth/2,this.camera.top=this.frustumHeight/2,this.camera.bottom=-this.frustumHeight/2,this.camera.updateProjectionMatrix()}onResize(){const e=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,n,!1),this.updateCamera(e/n)}landmarkToWorld(e){const n=-(e.x-.5)*this.frustumWidth,i=-(e.y-.5)*this.frustumHeight;return new H(n,i,0)}setForceFields(e){this.activeForceFields=e}clearDarkState(){this.bgMaterial.uniforms.uDarkness.value=1}addEffect(e){this.effects.add(e),this.scene.add(e.getObject3D())}removeEffect(e){this.effects.has(e)&&(this.effects.delete(e),e.beginDissipate(),this.dyingEffects.add(e))}killEffect(e){this.effects.delete(e),this.dyingEffects.delete(e),this.scene.remove(e.getObject3D()),e.dispose()}render(e,n=!0){this.bgMaterial.uniforms.uTime.value+=e,n&&this.debris.update(e,this.activeForceFields);let i=0,s=!1;for(const a of this.effects)a.update(e),a.getObject3D().visible=n,n&&a.darkenBackground&&(s=!0),n&&a.distortionType!==0&&a.distortionStrength>0&&i<3&&(this._distCenters[i].set(a.normalizedPosition.x,a.normalizedPosition.y),this._distStrengths[i]=a.distortionStrength,this._distTypes[i]=a.distortionType,i++);for(const a of this.dyingEffects)a.update(e),a.getObject3D().visible=n,n&&a.darkenBackground&&(s=!0);for(const a of this.dyingEffects)a.isDone&&(this.dyingEffects.delete(a),this.scene.remove(a.getObject3D()),a.dispose());for(let a=i;a<3;a++)this._distCenters[a].set(.5,.5),this._distStrengths[a]=0,this._distTypes[a]=0;const r=s?.15:1,o=this.bgMaterial.uniforms.uDarkness.value;this.bgMaterial.uniforms.uDarkness.value=o+(r-o)*Math.min(e*6,1),this.bgMaterial.uniforms.uDistortionStrengths.value=this._distStrengths,this.bgMaterial.uniforms.uDistortionTypes.value=this._distTypes,this.bgMaterial.uniforms.uActiveDistortions.value=i,this.renderer.render(this.scene,this.camera)}setPixelRatio(e){this.renderer.setPixelRatio(Math.min(e,1.5))}getCanvas(){return this.canvas}}class Kp{}const m_=8;class g_ extends Kp{constructor(n){super();C(this,"type");C(this,"name");C(this,"handSide");C(this,"stableFrames",0);C(this,"spawned",!1);this.handSide=n,this.type=n==="Left"?$e.LEFT_HAND_RAISED:$e.RIGHT_HAND_RAISED,this.name=`${n} Hand Raised`}detect(n,i){const s=Yp(n,this.handSide);if(!s)return this.stableFrames=0,this.spawned=!1,null;const r=s.landmarks,o=r[Ue.INDEX_FINGER_TIP].y<r[Ue.INDEX_FINGER_PIP].y,a=r[Ue.MIDDLE_FINGER_TIP].y<r[Ue.MIDDLE_FINGER_PIP].y,l=r[Ue.RING_FINGER_TIP].y>=r[Ue.RING_FINGER_PIP].y,c=r[Ue.PINKY_TIP].y>=r[Ue.PINKY_PIP].y;if(o&&a&&l&&c)return this.stableFrames=0,this.spawned=!1,null;const u=SC(r);if(u<1)return this.stableFrames=0,this.spawned=!1,null;this.stableFrames=Math.min(this.stableFrames+1,60);const h=qp(r),f={x:h.x,y:h.y-.07,z:h.z};if(!this.spawned){if(this.stableFrames<m_)return{type:this.type,confidence:this.stableFrames/m_,timestamp:performance.now(),handData:s,anchorPosition:f,charging:!0};this.spawned=!0}return{type:this.type,confidence:Math.min(u/3,1),timestamp:performance.now(),handData:s,anchorPosition:f}}}const ef=.25,FC=6,NC=.55,__=1.8,UC=.5,OC=150,BC=800,kC=3,GC=6;class v_ extends Kp{constructor(n){super();C(this,"type");C(this,"name");C(this,"handSide");C(this,"state","IDLE");C(this,"pinchFrames",0);C(this,"throwingAt",0);C(this,"lastFireTime",0);C(this,"pinchSpread",0);C(this,"pinchIndexTip",{x:0,y:0});C(this,"wristBuffer",[]);C(this,"velHistory",[]);this.handSide=n,this.type=n==="Left"?$e.FINGER_FLICK_LEFT:$e.FINGER_FLICK_RIGHT,this.name=`${n} Finger Flick`}detect(n,i){const s=Yp(n,this.handSide);if(!s)return this._reset(),null;const r=s.landmarks,o=s.worldLandmarks,a=i>0?i:1/60,l=r[Ue.WRIST];if(this.wristBuffer.push({...l}),this.wristBuffer.length>GC&&this.wristBuffer.shift(),this.wristBuffer.length>=2){const _=this.wristBuffer[this.wristBuffer.length-2],m=this.wristBuffer[this.wristBuffer.length-1];this.velHistory.push({x:(m.x-_.x)/a,y:(m.y-_.y)/a}),this.velHistory.length>kC&&this.velHistory.shift()}const c={x:0,y:0};for(const _ of this.velHistory)c.x+=_.x,c.y+=_.y;this.velHistory.length>0&&(c.x/=this.velHistory.length,c.y/=this.velHistory.length);const u=Math.sqrt(c.x**2+c.y**2),h=o[Ue.MIDDLE_FINGER_MCP],f=[Ue.INDEX_FINGER_TIP,Ue.MIDDLE_FINGER_TIP,Ue.RING_FINGER_TIP,Ue.PINKY_TIP];let d=0;for(const _ of f){const m=o[_],p=m.x-h.x,y=m.y-h.y,M=m.z-h.z;d+=Math.sqrt(p*p+y*y+M*M)}d/=f.length;const g=$p(r);switch(this.state){case"IDLE":g<ef?(this.pinchFrames++,this.pinchFrames>=FC&&(this.state="PINCH_HELD",this.pinchSpread=d,this.pinchIndexTip={x:r[Ue.INDEX_FINGER_TIP].x,y:r[Ue.INDEX_FINGER_TIP].y})):this.pinchFrames=0;break;case"PINCH_HELD":g<ef+.05&&(this.pinchSpread=d,this.pinchIndexTip={x:r[Ue.INDEX_FINGER_TIP].x,y:r[Ue.INDEX_FINGER_TIP].y}),u>NC?(this.state="THROWING",this.throwingAt=performance.now()):g>=ef+.1&&this._resetState();break;case"THROWING":{if(performance.now()-this.throwingAt>OC){this._resetState();break}const m=this.pinchSpread>0?d/this.pinchSpread:0;if(m>__){const p=r[Ue.INDEX_FINGER_TIP].x-this.pinchIndexTip.x,y=r[Ue.INDEX_FINGER_TIP].y-this.pinchIndexTip.y,M=Math.sqrt(p**2+y**2),x=Math.sqrt(c.x**2+c.y**2);let P=0;if(M>.001&&x>.001&&(P=p/M*(c.x/x)+y/M*(c.y/x)),P>UC){const T=performance.now();if(T-this.lastFireTime>BC)return this.lastFireTime=T,this._reset(),{type:this.type,confidence:Math.min(m/(__*1.5),1),timestamp:T,handData:s,anchorPosition:qp(r),direction:{x:c.x/x,y:c.y/x,z:0}}}}break}}return null}_resetState(){this.state="IDLE",this.pinchFrames=0}_reset(){this.state="IDLE",this.pinchFrames=0,this.wristBuffer=[],this.velHistory=[],this.pinchSpread=0}}const x_=3e3,y_=1e3,HC=5e3;class zC extends Kp{constructor(){super(...arguments);C(this,"type",$e.DOMAIN_EXPANSION);C(this,"name","Domain Expansion");C(this,"holdStartTime",0);C(this,"holding",!1);C(this,"wasFired",!1);C(this,"lastFireTime",0);C(this,"domainIsActive",!1)}setDomainActive(n){n!==this.domainIsActive&&(this.holding=!1,this.wasFired=!1,this.holdStartTime=0),this.domainIsActive=n}detect(n,i){const s=n[0];if(!s)return this.reset(),null;const r=s.landmarks,o=r[Ue.INDEX_FINGER_TIP].y<r[Ue.INDEX_FINGER_PIP].y,a=r[Ue.MIDDLE_FINGER_TIP].y<r[Ue.MIDDLE_FINGER_PIP].y,l=r[Ue.RING_FINGER_TIP].y>=r[Ue.RING_FINGER_PIP].y,c=r[Ue.PINKY_TIP].y>=r[Ue.PINKY_PIP].y;if(!(o&&a&&l&&c))return this.reset(),null;const u=performance.now();this.holding||(this.holding=!0,this.holdStartTime=u);const h=this.domainIsActive?y_:x_,f=this.domainIsActive?$e.DOMAIN_EXIT:$e.DOMAIN_EXPANSION;return u-this.holdStartTime>=h&&!this.wasFired&&u-this.lastFireTime>HC?(this.wasFired=!0,this.lastFireTime=u,{type:f,confidence:1,timestamp:u,handData:s,anchorPosition:r[Ue.WRIST]}):null}getHoldProgress(){if(!this.holding||this.wasFired)return 0;const n=this.domainIsActive?y_:x_;return Math.min((performance.now()-this.holdStartTime)/n,1)}reset(){this.holding=!1,this.wasFired=!1,this.holdStartTime=0}}var I2=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
uniform float uTime;\r
uniform float uDisplacementScale;

void main() {\r
  vUv = uv;\r
  vNormal = normalize(normalMatrix * normal);\r
  vPosition = position;

  float displacement = (\r
    sin(position.x * 8.0  + uTime * 4.0) * 0.04\r
  + sin(position.y * 6.0  + uTime * 3.0) * 0.04\r
  + sin(position.z * 10.0 + uTime * 5.0) * 0.03\r
  + sin((position.x + position.y) * 12.0 + uTime * 6.0) * 0.02\r
  ) * uDisplacementScale;

  vec3 newPosition = position + normal * displacement;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\r
}`,D2=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
uniform float uTime;\r
uniform vec3 uColor;\r
uniform vec3 uGlowColor;\r
uniform float uOpacity;\r
uniform float uCenterDarkness; 
uniform float uIntensity;      

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }\r
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {\r
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);\r
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\r
  vec3 i = floor(v + dot(v, C.yyy));\r
  vec3 x0 = v - i + dot(i, C.xxx);\r
  vec3 g = step(x0.yzx, x0.xyz);\r
  vec3 l = 1.0 - g;\r
  vec3 i1 = min(g.xyz, l.zxy);\r
  vec3 i2 = max(g.xyz, l.zxy);\r
  vec3 x1 = x0 - i1 + C.xxx;\r
  vec3 x2 = x0 - i2 + C.yyy;\r
  vec3 x3 = x0 - D.yyy;\r
  i = mod289(i);\r
  vec4 p = permute(permute(permute(\r
    i.z + vec4(0.0, i1.z, i2.z, 1.0))\r
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))\r
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));\r
  float n_ = 0.142857142857;\r
  vec3 ns = n_ * D.wyz - D.xzx;\r
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);\r
  vec4 x_ = floor(j * ns.z);\r
  vec4 y_ = floor(j - 7.0 * x_);\r
  vec4 x = x_ * ns.x + ns.yyyy;\r
  vec4 y = y_ * ns.x + ns.yyyy;\r
  vec4 h = 1.0 - abs(x) - abs(y);\r
  vec4 b0 = vec4(x.xy, y.xy);\r
  vec4 b1 = vec4(x.zw, y.zw);\r
  vec4 s0 = floor(b0) * 2.0 + 1.0;\r
  vec4 s1 = floor(b1) * 2.0 + 1.0;\r
  vec4 sh = -step(h, vec4(0.0));\r
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\r
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\r
  vec3 p0 = vec3(a0.xy, h.x);\r
  vec3 p1 = vec3(a0.zw, h.y);\r
  vec3 p2 = vec3(a1.xy, h.z);\r
  vec3 p3 = vec3(a1.zw, h.w);\r
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\r
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;\r
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\r
  m = m * m;\r
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\r
}

void main() {\r
  float noise1 = snoise(vPosition * 4.0 + uTime * 1.2) * 0.5 + 0.5;\r
  float noise2 = snoise(vPosition * 8.0 - uTime * 1.8) * 0.5 + 0.5;\r
  float noise3 = snoise(vPosition * 16.0 + uTime * 2.5) * 0.5 + 0.5;

  float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);

  
  float centerFactor = 1.0 - fresnel; 
  float voidMask = mix(1.0, 1.0 - centerFactor * centerFactor, uCenterDarkness);

  vec3 coreColor = uColor * (0.6 + noise1 * 0.6) * voidMask;\r
  vec3 rimGlow = uGlowColor * fresnel * (1.5 + noise2 * 0.8) * uIntensity;\r
  vec3 detail = uGlowColor * noise3 * 0.3 * fresnel;\r
  vec3 finalColor = (coreColor + rimGlow + detail) * uIntensity;

  
  float pulse = 0.9 + 0.1 * sin(uTime * 4.0);\r
  finalColor *= pulse;

  float alpha = (0.5 + fresnel * 0.5) * uOpacity * voidMask;\r
  alpha = clamp(alpha + noise1 * 0.15, 0.0, 1.0);

  gl_FragColor = vec4(finalColor, alpha * uOpacity);\r
}`;class VC{constructor(e){C(this,"line");C(this,"positions");C(this,"fireTimer",0);C(this,"cooldown",Math.random()*.8);this.positions=new Float32Array(24);const i=new Zt;i.setAttribute("position",new dn(this.positions,3));const s=new ju({color:e,transparent:!0,opacity:0,blending:Xn,depthWrite:!1});this.line=new jp(i,s)}regenerate(){const e=Math.random()*Math.PI*2,n=.22+Math.random()*.06,i=.15+Math.random()*.3,s=Math.cos(e),r=Math.sin(e),o=-r,a=s;for(let l=0;l<8;l++){const c=l/7,u=n+c*i,h=(Math.random()-.5)*.08*Math.sin(c*Math.PI);this.positions[l*3]=s*u+o*h,this.positions[l*3+1]=r*u+a*h,this.positions[l*3+2]=0}this.line.geometry.attributes.position.needsUpdate=!0}setOpacity(e){this.line.material.opacity=Math.max(0,Math.min(1,e))}dispose(){this.line.geometry.dispose(),this.line.material.dispose()}}class L2 extends nt{constructor(){super();C(this,"coreMesh");C(this,"coreMat");C(this,"coreBlue");C(this,"midBlue");C(this,"outerBlue");C(this,"atmosphere");C(this,"sparks");C(this,"innerFlow");C(this,"outerFlow");C(this,"time",0);C(this,"depthScale",1);C(this,"spawnDur",.55);C(this,"dissipateDur",.35);this.distortionType=1,this.distortionStrength=0,this.coreMat=new qn({vertexShader:I2,fragmentShader:D2,uniforms:{uTime:{value:0},uColor:{value:new Ee(0,.08,.7)},uGlowColor:{value:new Ee(.25,.65,1)},uOpacity:{value:0},uCenterDarkness:{value:.5},uIntensity:{value:4.5},uDisplacementScale:{value:.55}},transparent:!0,blending:Xn,depthWrite:!1,side:li}),this.coreMesh=new jn(new qu(.24,64,64),this.coreMat),this.group.add(this.coreMesh),this.coreBlue=nt.makeGlowSprite(new Ee(.2,.55,1),.35),this.midBlue=nt.makeGlowSprite(new Ee(.08,.35,.95),.75),this.outerBlue=nt.makeGlowSprite(new Ee(.03,.18,.7),1.4),this.atmosphere=nt.makeGlowSprite(new Ee(.01,.06,.35),2.6);for(const n of[this.coreBlue,this.midBlue,this.outerBlue,this.atmosphere])this.group.add(n);this.sparks=[];for(let n=0;n<10;n++){const i=n<4?new Ee(.75,.95,1):new Ee(.25,.6,1),s=new VC(i);this.sparks.push(s),this.group.add(s.line)}this.innerFlow=new gl({count:65,color:new Ee(.2,.6,1),speed:.55,radius:.55,lineLength:.25,opacity:.42,direction:"inward"}),this.outerFlow=new gl({count:45,color:new Ee(.08,.35,.85),speed:.4,radius:.95,lineLength:.35,opacity:.28,direction:"inward"}),this.group.add(this.innerFlow.getObject3D()),this.group.add(this.outerFlow.getObject3D())}spawn(){super.spawn(),this.time=0}update(n){this.tickPhase(n),this.time+=n,this.coreMat.uniforms.uTime.value=this.time;const i=this.spawnT,s=this.dissipateT,r=nt.easeOutElastic(i),o=1-.97*nt.easeIn(s,1.6);this.group.scale.setScalar(Math.max(.001,r*o*this.depthScale)),this.coreMesh.scale.setScalar(1+.025*Math.sin(this.time*5));const a=nt.easeOut(i,.35),l=1-nt.easeIn(s,.7),c=a*l,u=Math.max(0,1-i*5);this.coreMat.uniforms.uOpacity.value=c,this.distortionStrength=c*.1,this.coreBlue.material.opacity=c*Math.min(.6+u*.5,1),this.midBlue.material.opacity=c*Math.min(.45+u*.3,1),this.outerBlue.material.opacity=c*.3,this.atmosphere.material.opacity=c*.14;const h=this.phase===ml.IDLE?c:0;for(const f of this.sparks)f.fireTimer>0?(f.fireTimer-=n,f.regenerate(),f.setOpacity(h*(.55+Math.random()*.45))):(f.setOpacity(0),f.cooldown-=n,f.cooldown<=0&&Math.random()<.16&&(f.fireTimer=.04+Math.random()*.07,f.cooldown=.1+Math.random()*.45,f.regenerate()));this.innerFlow.setOpacity(c*.42),this.outerFlow.setOpacity(c*.28),this.innerFlow.update(n),this.outerFlow.update(n)}setPosition(n){this.group.position.copy(n)}setScale(n){this.depthScale=n}dispose(){var n;this.coreMesh.geometry.dispose(),this.coreMat.dispose(),this.innerFlow.dispose(),this.outerFlow.dispose();for(const i of this.sparks)i.dispose();for(const i of[this.coreBlue,this.midBlue,this.outerBlue,this.atmosphere])(n=i.material.map)==null||n.dispose(),i.material.dispose()}}class WC extends Zu{constructor(){super({name:"Cursed Technique Lapse: Blue",color:new Ee(.05,.15,.9),glowColor:new Ee(.3,.6,1),particleCount:200,scale:1});C(this,"effect");this.effect=new L2}getEffect(){return this.effect}}class XC extends Zu{constructor(){super({name:"Hollow Purple",color:new Ee(.5,0,.8),glowColor:new Ee(.8,.3,1),particleCount:500,scale:1.5});C(this,"effect");this.effect=new A2}getEffect(){return this.effect}}class F2 extends nt{constructor(){super();C(this,"coreMesh");C(this,"coreMat");C(this,"rimGlow");C(this,"redAura");C(this,"atmosphere");C(this,"darkWash");C(this,"innerFlow");C(this,"outerFlow");C(this,"time",0);C(this,"depthScale",1);C(this,"spawnDur",.38);C(this,"dissipateDur",.32);this.distortionType=-1,this.distortionStrength=0,this.coreMat=new qn({vertexShader:I2,fragmentShader:D2,uniforms:{uTime:{value:0},uColor:{value:new Ee(.32,0,0)},uGlowColor:{value:new Ee(1,0,0)},uOpacity:{value:0},uCenterDarkness:{value:.92},uIntensity:{value:4.8},uDisplacementScale:{value:.3}},transparent:!0,blending:Xn,depthWrite:!1,side:li}),this.coreMesh=new jn(new qu(.22,64,64),this.coreMat),this.group.add(this.coreMesh),this.rimGlow=nt.makeGlowSprite(new Ee(1,.08,0),.32),this.redAura=nt.makeGlowSprite(new Ee(.9,0,0),.85),this.atmosphere=nt.makeGlowSprite(new Ee(.55,0,0),2),this.darkWash=nt.makeGlowSprite(new Ee(.22,0,0),3.8);for(const n of[this.rimGlow,this.redAura,this.atmosphere,this.darkWash])this.group.add(n);this.innerFlow=new gl({count:90,color:new Ee(1,.06,0),speed:.7,radius:.55,lineLength:.32,opacity:.55,direction:"spiral"}),this.outerFlow=new gl({count:60,color:new Ee(.65,0,0),speed:.5,radius:1.1,lineLength:.45,opacity:.35,direction:"spiral"}),this.group.add(this.innerFlow.getObject3D()),this.group.add(this.outerFlow.getObject3D())}spawn(){super.spawn(),this.time=0}update(n){this.tickPhase(n),this.time+=n,this.coreMat.uniforms.uTime.value=this.time;const i=this.spawnT,s=this.dissipateT,r=Pb.lerp(2.5,1,nt.easeOutBack(i,1.4)),o=1+1.8*nt.easeIn(s,.5);this.group.scale.setScalar(Math.max(.001,r*o*this.depthScale)),this.coreMesh.scale.setScalar(1+.025*Math.sin(this.time*7));const a=nt.easeOut(i,.2),l=1-nt.easeIn(s,.6),c=a*l;this.coreMat.uniforms.uOpacity.value=c,this.distortionStrength=c*.1,this.rimGlow.material.opacity=c*(.65+.15*Math.sin(this.time*5)),this.redAura.material.opacity=c*.55,this.atmosphere.material.opacity=c*.3,this.darkWash.material.opacity=c*.14;const u=this.phase===ml.DISSIPATING?0:c;this.innerFlow.setOpacity(u*.5),this.outerFlow.setOpacity(u*.32),this.innerFlow.update(n),this.outerFlow.update(n)}setPosition(n){this.group.position.copy(n)}setScale(n){this.depthScale=n}dispose(){var n;this.coreMesh.geometry.dispose(),this.coreMat.dispose(),this.innerFlow.dispose(),this.outerFlow.dispose();for(const i of[this.rimGlow,this.redAura,this.atmosphere,this.darkWash])(n=i.material.map)==null||n.dispose(),i.material.dispose()}}class jC extends Zu{constructor(){super({name:"Cursed Technique Reversal: Red",color:new Ee(.9,.1,.05),glowColor:new Ee(1,.4,.2),particleCount:250,scale:1});C(this,"effect");this.effect=new F2}getEffect(){return this.effect}}const qC={class:"debug-overlay"},$C={key:0,class:"debug-info"},YC={class:"debug-title"},KC={class:"debug-row"},ZC={class:"val"},JC={class:"val"},QC={class:"debug-section"},eP={class:"debug-row"},tP={class:"val"},nP={class:"debug-row"},iP={class:"val"},sP={class:"debug-row"},rP={class:"debug-row"},oP={class:"val"},aP={class:"debug-row"},lP={class:"val"},cP={key:0,class:"tag-yellow"},uP={class:"debug-row"},hP={class:"val"},fP={key:0,class:"debug-row tag-yellow"},dP={key:1,class:"debug-row dim"},pP={class:"val"},mP={key:2,class:"debug-row dim"},gP={class:"dim"},_P=eo({__name:"DebugOverlay",props:{hands:{},gestures:{},fps:{},abilityDebug:{},effectsEnabled:{type:Boolean},rawMetrics:{}},emits:["toggle-effects"],setup(t,{expose:e}){const n=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]],i=t,s=pt(!1),r=pt(),o=pt(performance.now());let a=0;function l(d){return((o.value-d)/1e3).toFixed(1)}function c(d){return d.includes("left")?"dot-blue":d.includes("right")?"dot-red":d.includes("merged")||d.includes("purple")?"dot-purple":d.includes("domain")?"dot-white":"dot-dim"}function u(d){return d.includes("FLICK")||d.includes("flick")||d.includes("SHOOT")?"dot-yellow":d.includes("Blue")||d.includes("blue")?"dot-blue":d.includes("Red")||d.includes("red")?"dot-red":d.includes("MERGE")||d.includes("Purple")||d.includes("purple")?"dot-purple":d.includes("DOMAIN")?"dot-white":(d.includes("dissipate"),"dot-dim")}function h(){const d=r.value;if(!d)return;const g=d.parentElement;g&&(d.width=g.clientWidth,d.height=g.clientHeight);const _=d.getContext("2d");if(_){_.clearRect(0,0,d.width,d.height);for(const m of i.hands){const p=m.handedness==="Left"?"#4488ff":"#ff4444",y=m.landmarks;_.strokeStyle=p,_.lineWidth=2,_.globalAlpha=.7;for(const[M,x]of n)_.beginPath(),_.moveTo((1-y[M].x)*d.width,y[M].y*d.height),_.lineTo((1-y[x].x)*d.width,y[x].y*d.height),_.stroke();_.globalAlpha=1;for(let M=0;M<y.length;M++){const x=(1-y[M].x)*d.width,P=y[M].y*d.height,T=[4,8,12,16,20].includes(M);_.beginPath(),_.arc(x,P,T?5:3,0,Math.PI*2),_.fillStyle=T?"#fff":p,_.fill(),T&&(_.strokeStyle=p,_.lineWidth=1.5,_.stroke())}_.fillStyle=p,_.font="bold 12px monospace",_.fillText(m.handedness,(1-y[0].x)*d.width+10,y[0].y*d.height-10)}for(const m of i.gestures)if(m.anchorPosition){const p=(1-m.anchorPosition.x)*d.width,y=m.anchorPosition.y*d.height;_.beginPath(),_.arc(p,y,12,0,Math.PI*2),_.strokeStyle=m.type.includes("left")?"#44aaff":m.type.includes("right")?"#ff6644":"#bb44ff",_.lineWidth=2,_.setLineDash([4,4]),_.stroke(),_.setLineDash([]),_.fillStyle="#fff",_.font="10px monospace",_.fillText(m.type.replace(/_/g," "),p+16,y+4)}}}const f=d=>{var g;(d.key==="d"||d.key==="D")&&((g=document.activeElement)==null?void 0:g.tagName)!=="INPUT"&&(d.preventDefault(),s.value=!s.value)};return Va(()=>[i.hands,i.gestures],h),to(()=>{window.addEventListener("keydown",f),a=window.setInterval(()=>{o.value=performance.now()},100)}),xr(()=>{window.removeEventListener("keydown",f),window.clearInterval(a)}),e({landmarkCanvas:r}),(d,g)=>{var _,m,p,y;return Qe(),tt("div",qC,[te("canvas",{ref_key:"landmarkCanvas",ref:r,class:"landmark-canvas",style:En({opacity:s.value?1:0})},null,4),s.value?(Qe(),tt("div",$C,[te("div",YC,[g[1]||(g[1]=Hn(" DEBUG ",-1)),te("button",{class:"fx-toggle",onClick:g[0]||(g[0]=M=>d.$emit("toggle-effects")),style:{"pointer-events":"auto"}}," FX "+dt(t.effectsEnabled?"ON":"OFF"),1)]),te("div",KC,[g[2]||(g[2]=Hn("FPS ",-1)),te("span",ZC,dt(t.fps),1),g[3]||(g[3]=Hn(" Hands ",-1)),te("span",JC,dt(t.hands.length),1)]),(Qe(!0),tt(qt,null,cs(t.hands,(M,x)=>{var P,T,F,S,A,I,w,L,V,$,O,z,k,Q,ee,ce;return Qe(),tt(qt,{key:M.handedness},[te("div",QC,dt(M.handedness.toUpperCase())+" HAND",1),te("div",eP,[g[4]||(g[4]=Hn(" pinch ",-1)),te("span",tP,dt(((T=(P=t.rawMetrics)==null?void 0:P[x])==null?void 0:T.normPinch.toFixed(3))??"—"),1),te("span",{class:bn((((S=(F=t.rawMetrics)==null?void 0:F[x])==null?void 0:S.normPinch)??1)<.25?"tag-green":(((I=(A=t.rawMetrics)==null?void 0:A[x])==null?void 0:I.normPinch)??1)<.45?"tag-yellow":"tag-dim")},dt((((L=(w=t.rawMetrics)==null?void 0:w[x])==null?void 0:L.normPinch)??1)<.25?"PINCHED":((($=(V=t.rawMetrics)==null?void 0:V[x])==null?void 0:$.normPinch)??1)<.45?"close":"open"),3)]),te("div",nP,[g[5]||(g[5]=Hn(" hand size ",-1)),te("span",iP,dt(((z=(O=t.rawMetrics)==null?void 0:O[x])==null?void 0:z.handSize.toFixed(3))??"—"),1)]),te("div",sP,[g[6]||(g[6]=Hn(" fingers crossed ",-1)),te("span",{class:bn((Q=(k=t.rawMetrics)==null?void 0:k[x])!=null&&Q.fingersCrossed?"tag-green":"tag-dim")},dt((ce=(ee=t.rawMetrics)==null?void 0:ee[x])!=null&&ce.fingersCrossed?"YES":"no"),3)])],64)}),128)),(_=t.abilityDebug)!=null&&_.flickState?(Qe(),tt(qt,{key:0},[g[10]||(g[10]=te("div",{class:"debug-section"},"FLICK DETECTOR",-1)),te("div",rP,[g[7]||(g[7]=Hn(" norm pinch ",-1)),te("span",oP,dt(t.abilityDebug.flickState.normalizedPinch.toFixed(3)),1)]),te("div",aP,[g[8]||(g[8]=Hn(" velocity ",-1)),te("span",lP,dt(t.abilityDebug.flickState.velocity.toFixed(2))+"/s",1),t.abilityDebug.flickState.velocity>2?(Qe(),tt("span",cP,"FAST")):an("",!0)]),te("div",uP,[g[9]||(g[9]=Hn(" pinch frames ",-1)),te("span",hP,dt(t.abilityDebug.flickState.pinchFrames),1),te("span",{class:bn(t.abilityDebug.flickState.pinchHeld?"tag-green":"tag-dim")},dt(t.abilityDebug.flickState.pinchHeld?"LOADED":""),3)]),t.abilityDebug.flickState.flickCooldown?(Qe(),tt("div",fP,"cooldown")):an("",!0)],64)):an("",!0),g[11]||(g[11]=te("div",{class:"debug-section"},"ACTIVE GESTURES",-1)),t.gestures.length===0?(Qe(),tt("div",dP,"none")):an("",!0),(Qe(!0),tt(qt,null,cs(t.gestures,M=>(Qe(),tt("div",{class:"debug-row gesture-row",key:M.type},[te("span",{class:bn(["dot",c(M.type)])},null,2),Hn(" "+dt(M.type.replace(/_/g," "))+" ",1),te("span",pP,dt((M.confidence*100).toFixed(0))+"%",1)]))),128)),g[12]||(g[12]=te("div",{class:"debug-section"},"EVENT LOG",-1)),(p=(m=t.abilityDebug)==null?void 0:m.recentEvents)!=null&&p.length?an("",!0):(Qe(),tt("div",mP,"none")),(Qe(!0),tt(qt,null,cs(((y=t.abilityDebug)==null?void 0:y.recentEvents)??[],(M,x)=>(Qe(),tt("div",{class:"debug-row",key:x,style:En({opacity:Math.max(.25,1-x*.12)})},[te("span",{class:bn(["dot",u(M.label)])},null,2),Hn(" "+dt(M.label)+" ",1),te("span",gP,dt(l(M.t))+"s",1)],4))),128))])):an("",!0)])}}}),vP=ra(_P,[["__scopeId","data-v-3925e506"]]),xP={class:"hud"},yP={class:"ability-row"},SP={class:"slot-label"},MP={key:0,class:"merge-bar-wrap"},EP={class:"merge-bar-track"},bP={key:0,class:"hold-ring-wrap"},TP={class:"hold-ring-svg",viewBox:"0 0 64 64"},wP=["stroke","stroke-dashoffset"],AP={key:0,class:"domain-overlay"},RP={class:"domain-bar-track"},CP=eo({__name:"HUD",props:{activeAbilities:{},abilityDebug:{},effectsEnabled:{type:Boolean}},emits:["toggle-effects"],setup(t){const e=t,n=[{key:$e.LEFT_HAND_RAISED,label:"Red",color:"#f87171",glowColor:"rgba(248,113,113,0.4)",active:!1},{key:$e.HANDS_MERGED,label:"Hollow Purple",color:"#a78bfa",glowColor:"rgba(167,139,250,0.4)",active:!1},{key:$e.RIGHT_HAND_RAISED,label:"Blue",color:"#60a5fa",glowColor:"rgba(96,165,250,0.4)",active:!1}],i=Li(()=>new Set(e.activeAbilities)),s=Li(()=>i.value.has($e.LEFT_HAND_RAISED)&&i.value.has($e.RIGHT_HAND_RAISED)&&!i.value.has($e.HANDS_MERGED)),r=Li(()=>e.abilityDebug?Math.round(e.abilityDebug.mergeProgress*100):0),o=Li(()=>{var h;return((h=e.abilityDebug)==null?void 0:h.domainActive)??!1}),a=Li(()=>{var h;return((h=e.abilityDebug)==null?void 0:h.domainProgress)??0}),l=Li(()=>{var h;return((h=e.abilityDebug)==null?void 0:h.domainHoldProgress)??0}),c=2*Math.PI*28,u=Li(()=>c*(1-l.value));return(h,f)=>(Qe(),tt("div",xP,[f[4]||(f[4]=te("div",{class:"nameplate"},[te("div",{class:"char-name"},"Satoru Gojo"),te("div",{class:"char-world"},"Jujutsu Kaisen · Shibuya")],-1)),te("div",yP,[(Qe(),tt(qt,null,cs(n,d=>te("div",{key:d.key,class:bn(["ability-slot",{active:i.value.has(d.key),pulse:i.value.has(d.key)}]),style:En(d.active?{"--glow":d.glowColor}:{})},[te("div",{class:"slot-ring",style:En({borderColor:d.color})},null,4),te("div",{class:"slot-dot",style:En({background:d.color})},null,4),te("span",SP,dt(d.label),1)],6)),64))]),s.value?(Qe(),tt("div",MP,[f[1]||(f[1]=te("div",{class:"merge-bar-label"},"Converging",-1)),te("div",EP,[te("div",{class:"merge-bar-fill",style:En({width:r.value+"%"})},null,4)])])):an("",!0),hn(Pm,{name:"hold-fade"},{default:lf(()=>[l.value>.02&&t.effectsEnabled!==!1?(Qe(),tt("div",bP,[(Qe(),tt("svg",TP,[f[2]||(f[2]=te("circle",{class:"hold-ring-track",cx:"32",cy:"32",r:"28"},null,-1)),te("circle",{class:"hold-ring-fill",cx:"32",cy:"32",r:"28",stroke:o.value?"#f87171":"#93c5fd","stroke-dashoffset":u.value},null,8,wP)])),te("span",{class:"hold-ring-label",style:En({color:o.value?"#f87171":"#93c5fd"})},dt(o.value?"DISPELLING":"SUMMONING"),5)])):an("",!0)]),_:1}),hn(Pm,{name:"domain-fade"},{default:lf(()=>[o.value&&t.effectsEnabled!==!1?(Qe(),tt("div",AP,[f[3]||(f[3]=te("div",{class:"domain-title"},"INFINITE VOID",-1)),te("div",RP,[te("div",{class:"domain-bar-fill",style:En({width:a.value*100+"%"})},null,4)])])):an("",!0)]),_:1}),te("button",{class:bn(["fx-toggle-btn",{"fx-off":t.effectsEnabled===!1}]),style:{"pointer-events":"auto"},onClick:f[0]||(f[0]=d=>h.$emit("toggle-effects"))}," FX "+dt(t.effectsEnabled===!1?"OFF":"ON"),3),f[5]||(f[5]=C1('<div class="hint-row" data-v-7856673b><span data-v-7856673b>Raise hand → Blue / Red</span><span class="sep" data-v-7856673b>·</span><span data-v-7856673b>Bring together → Purple</span><span class="sep" data-v-7856673b>·</span><span data-v-7856673b>Flick while holding → Shoot</span><span class="sep" data-v-7856673b>·</span><span data-v-7856673b>✌ hold → Domain</span><span class="sep" data-v-7856673b>·</span><kbd data-v-7856673b>D</kbd> Debug <span class="sep" data-v-7856673b>·</span><kbd data-v-7856673b>F</kbd> FX </div>',1))]))}}),PP=ra(CP,[["__scopeId","data-v-7856673b"]]),IP=["title"],DP={key:0,class:"rec-body"},LP={class:"layout-grid"},FP=["disabled","onClick","title"],NP={class:"layout-icon"},UP={class:"layout-name"},OP={class:"layout-grid"},BP=["disabled","onClick","title"],kP={class:"layout-icon"},GP={class:"layout-name"},HP={class:"layout-grid"},zP=["disabled","onClick"],VP={class:"layout-icon"},WP={class:"layout-name"},XP={class:"rec-option"},jP=["disabled"],qP={class:"rec-option"},$P=["disabled"],YP={class:"rec-option"},KP=["disabled"],ZP={class:"rec-option",title:"Records raw camera at 20Mbps, then composites effects offline for maximum quality"},JP=["disabled"],QP={key:0,class:"composite-progress"},eI={class:"composite-label"},tI={class:"composite-bar"},nI={class:"rec-actions"},iI=["disabled"],sI={key:1,class:"rec-timer"},rI=eo({__name:"RecordingControls",emits:["start","stop","abort","format-change"],setup(t,{expose:e,emit:n}){const i=[30,60],s=n,r=[{value:"single",label:"Single",icon:"▣"},{value:"side-by-side",label:"Side/Side",icon:"⊞"},{value:"stacked",label:"Stacked",icon:"⊟"},{value:"pip",label:"PiP",icon:"⊡"}],o=[{value:"original",label:"Original",icon:"▣",hint:"Native camera resolution"},{value:"16:9",label:"16 : 9",icon:"▬",hint:"YouTube / Landscape"},{value:"9:16",label:"9 : 16",icon:"▮",hint:"TikTok / Reels / Shorts"},{value:"1:1",label:"1 : 1",icon:"⬜",hint:"Instagram Square"}],a=pt(!1),l=pt(!1),c=pt(!1),u=pt(0),h=pt("single"),f=pt("original"),d=pt(!0),g=pt(!1),_=pt(!1),m=pt(!1),p=pt(30),y=pt(0),M=pt("0:00");let x=null;function P(A,I=0){c.value=A,u.value=I}e({setCompositing:P});const T=Li(()=>(d.value?1:0)+(g.value?1:0)+(_.value?1:0));function F(){l.value?(l.value=!1,x&&(clearInterval(x),x=null),s("stop")):(l.value=!0,y.value=0,M.value="0:00",x=setInterval(()=>{y.value++;const A=Math.floor(y.value/60),I=y.value%60;M.value=`${A}:${I.toString().padStart(2,"0")}`},1e3),s("start",{layout:h.value,format:f.value,fps:p.value,withEffects:d.value,withoutEffects:g.value,withDebug:_.value,hdMode:m.value}))}function S(){l.value=!1,x&&(clearInterval(x),x=null),s("abort")}return xr(()=>{x&&clearInterval(x)}),Va(f,A=>s("format-change",A),{immediate:!0}),(A,I)=>(Qe(),tt("div",{class:bn(["rec-panel",{expanded:a.value}])},[te("button",{class:"rec-toggle",onClick:I[0]||(I[0]=w=>a.value=!a.value),title:a.value?"Close":"Recording"},[te("span",{class:bn(["rec-icon",{active:l.value}])},null,2)],8,IP),a.value?(Qe(),tt("div",DP,[I[9]||(I[9]=te("div",{class:"rec-section-label"},"Layout",-1)),te("div",LP,[(Qe(),tt(qt,null,cs(r,w=>te("button",{key:w.value,class:bn(["layout-btn",{selected:h.value===w.value}]),disabled:l.value||w.value==="stacked"&&T.value<2,onClick:L=>h.value=w.value,title:w.value==="stacked"&&T.value<2?"Need ≥ 2 options":w.label},[te("span",NP,dt(w.icon),1),te("span",UP,dt(w.label),1)],10,FP)),64))]),I[10]||(I[10]=te("div",{class:"rec-section-label"},"Format",-1)),te("div",OP,[(Qe(),tt(qt,null,cs(o,w=>te("button",{key:w.value,class:bn(["layout-btn",{selected:f.value===w.value}]),disabled:l.value,onClick:L=>f.value=w.value,title:w.hint},[te("span",kP,dt(w.icon),1),te("span",GP,dt(w.label),1)],10,BP)),64))]),I[11]||(I[11]=te("div",{class:"rec-section-label"},"FPS",-1)),te("div",HP,[(Qe(),tt(qt,null,cs(i,w=>te("button",{key:w,class:bn(["layout-btn",{selected:p.value===w}]),disabled:l.value,onClick:L=>p.value=w},[te("span",VP,dt(w),1),te("span",WP,dt(w===30?"Smooth":"Full"),1)],10,zP)),64))]),I[12]||(I[12]=te("div",{class:"rec-section-label"},"Sources",-1)),te("label",XP,[Ol(te("input",{type:"checkbox","onUpdate:modelValue":I[1]||(I[1]=w=>d.value=w),disabled:l.value},null,8,jP),[[Bl,d.value]]),I[5]||(I[5]=te("span",null,"Screen",-1))]),te("label",qP,[Ol(te("input",{type:"checkbox","onUpdate:modelValue":I[2]||(I[2]=w=>g.value=w),disabled:l.value},null,8,$P),[[Bl,g.value]]),I[6]||(I[6]=te("span",null,"Raw Camera",-1))]),te("label",YP,[Ol(te("input",{type:"checkbox","onUpdate:modelValue":I[3]||(I[3]=w=>_.value=w),disabled:l.value},null,8,KP),[[Bl,_.value]]),I[7]||(I[7]=te("span",null,"Debug View",-1))]),I[13]||(I[13]=te("div",{class:"rec-section-label",style:{"margin-top":"4px"}},"Quality",-1)),te("label",ZP,[Ol(te("input",{type:"checkbox","onUpdate:modelValue":I[4]||(I[4]=w=>m.value=w),disabled:l.value},null,8,JP),[[Bl,m.value]]),I[8]||(I[8]=te("span",null,[Hn("HD Offline "),te("span",{class:"hd-badge"},"SLOW")],-1))]),c.value?(Qe(),tt("div",QP,[te("div",eI,"Compositing… "+dt(Math.round(u.value*100))+"%",1),te("div",tI,[te("div",{class:"composite-fill",style:En({width:u.value*100+"%"})},null,4)])])):an("",!0),te("div",nI,[te("button",{class:bn(["rec-btn",{stop:l.value}]),disabled:!l.value&&T.value===0,onClick:F},dt(l.value?"SAVE":"REC"),11,iI),l.value?(Qe(),tt("button",{key:0,class:"rec-btn abort",onClick:S,title:"Discard"}," DISCARD ")):an("",!0)]),l.value?(Qe(),tt("div",sI,dt(M.value),1)):an("",!0)])):an("",!0)],2))}}),oI=ra(rI,[["__scopeId","data-v-58f5c94a"]]),aI={key:0,class:"format-guide"},lI={class:"crop-label"},cI=eo({__name:"FormatGuide",props:{format:{}},setup(t){const e=t,n=pt(window.innerWidth),i=pt(window.innerHeight),s=()=>{n.value=window.innerWidth,i.value=window.innerHeight};to(()=>window.addEventListener("resize",s)),xr(()=>window.removeEventListener("resize",s));const r={original:"","16:9":"16 : 9","9:16":"9 : 16  ·  TikTok / Reels","1:1":"1 : 1  ·  Instagram"},o=Li(()=>r[e.format]),a=Li(()=>{if(e.format==="original")return null;const[l,c]=e.format==="16:9"?[16,9]:e.format==="9:16"?[9,16]:[1,1];let u=n.value,h=Math.round(n.value*c/l);return h>i.value&&(h=i.value,u=Math.round(i.value*l/c)),{left:`${Math.round((n.value-u)/2)}px`,top:`${Math.round((i.value-h)/2)}px`,width:`${u}px`,height:`${h}px`}});return(l,c)=>a.value?(Qe(),tt("div",aI,[te("div",{class:"crop-frame",style:En(a.value)},[te("span",lI,dt(o.value),1)],4)])):an("",!0)}}),uI=ra(cI,[["__scopeId","data-v-6fb5c25d"]]);function bd(t,e,n){if(n==="original")return{sx:0,sy:0,sw:t,sh:e};const[i,s]=n==="16:9"?[16,9]:n==="9:16"?[9,16]:[1,1];let r=t,o=Math.round(t*s/i);return o>e&&(o=e,r=Math.round(e*i/s)),{sx:Math.round((t-r)/2),sy:Math.round((e-o)/2),sw:r,sh:o}}function S_(t,e,n){const i=bd(t,e,n);return{w:i.sw,h:i.sh}}class hI{constructor(){C(this,"_recording",!1);C(this,"_opts",{layout:"single",format:"original",fps:30,withEffects:!0,withoutEffects:!1,withDebug:!1});C(this,"_effectsCanvas",null);C(this,"_videoElement",null);C(this,"_debugCanvas",null);C(this,"recorder",null);C(this,"chunks",[]);C(this,"canvas",null);C(this,"ctx",null);C(this,"_rawRecorder",null);C(this,"_rawChunks",[]);C(this,"_tickFrame",0)}get recording(){return this._recording}start(e,n,i,s){if(this._recording)return;this._recording=!0,this._effectsCanvas=e,this._videoElement=n,this._debugCanvas=s??null,this._opts=i;const r=e.width,o=e.height,a=i.format,{w:l,h:c}=S_(r,o,a);let u=l,h=c;if(i.layout==="side-by-side")u=l*2;else if(i.layout==="stacked"){const m=(i.withEffects?1:0)+(i.withoutEffects?1:0)+(i.withDebug?1:0);h=c*Math.max(1,m)}this.canvas=document.createElement("canvas"),this.canvas.width=u,this.canvas.height=h,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high";const f=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm;codecs=vp8",d=l*c,g=d>2e6?15e6:d>9e5?1e7:6e6;this.chunks=[],this._tickFrame=0;const _=i.fps??30;this.recorder=new MediaRecorder(this.canvas.captureStream(_),{mimeType:f,videoBitsPerSecond:g}),this.recorder.ondataavailable=m=>{m.data.size>0&&this.chunks.push(m.data)},this.recorder.start(100)}tick(){if(!this._recording||!this.ctx||!this.canvas||(this._tickFrame++,this._opts.fps<=30&&this._tickFrame%2!==0))return;const e=this._effectsCanvas,n=this._videoElement,i=this._debugCanvas;if(!e||!n)return;const s=this.ctx,r=this.canvas.width,o=this.canvas.height,a=e.width,l=e.height,c=n.videoWidth||a,u=n.videoHeight||l,h=this._opts.format;s.clearRect(0,0,r,o);const f=(m,p,y,M,x,P,T,F=!1)=>{const{sx:S,sy:A,sw:I,sh:w}=bd(p,y,h);F?(s.save(),s.translate(M+P,x),s.scale(-1,1),s.drawImage(m,S,A,I,w,0,0,P,T),s.restore()):s.drawImage(m,S,A,I,w,M,x,P,T)},d=(m,p,y,M)=>{f(e,a,l,m,p,y,M),i&&i.width>0&&s.drawImage(i,m,p,y,M)},{w:g,h:_}=S_(a,l,h);switch(this._opts.layout){case"single":{this._opts.withEffects||this._opts.withDebug?f(e,a,l,0,0,r,o):this._opts.withoutEffects&&f(n,c,u,0,0,r,o,!0),this._opts.withDebug&&i&&i.width>0&&s.drawImage(i,0,0,r,o);break}case"side-by-side":{f(n,c,u,0,0,g,_,!0),f(e,a,l,g,0,g,_);break}case"stacked":{let m=0;this._opts.withEffects&&(f(e,a,l,0,m,g,_),m+=_),this._opts.withoutEffects&&(f(n,c,u,0,m,g,_,!0),m+=_),this._opts.withDebug&&d(0,m,g,_);break}case"pip":{f(e,a,l,0,0,r,o);const m=Math.round(r*.28),p=Math.round(o*.28),y=r-m-20,M=o-p-20;s.save(),s.beginPath(),s.roundRect(y,M,m,p,10),s.clip();const{sx:x,sy:P,sw:T,sh:F}=bd(c,u,"original");s.translate(y+m,M),s.scale(-1,1),s.drawImage(n,x,P,T,F,0,0,m,p),s.restore(),s.save(),s.strokeStyle="rgba(255,255,255,0.35)",s.lineWidth=2,s.beginPath(),s.roundRect(y,M,m,p,10),s.stroke(),s.restore();break}}}async stop(){this._recording&&await this._finish(!0)}abort(){this._recording&&this._finish(!1)}async _finish(e){if(this._recording=!1,!this.recorder||this.recorder.state==="inactive"){this._cleanup();return}await new Promise(n=>{this.recorder.onstop=()=>{if(e){const i=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),s=this._opts.layout.replace("-","_"),r=this._opts.format.replace(":","x"),o=new Blob(this.chunks,{type:this.recorder.mimeType}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download=`recording_${s}_${r}_${i}.webm`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}n()},this.recorder.stop()}),this._cleanup()}_cleanup(){this.recorder=null,this.canvas=null,this.ctx=null,this._effectsCanvas=null,this._videoElement=null,this._debugCanvas=null,this.chunks=[]}startRaw(e){const n=e.srcObject;if(!n)return;this._rawChunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm;codecs=vp8";this._rawRecorder=new MediaRecorder(n,{mimeType:i,videoBitsPerSecond:2e7}),this._rawRecorder.ondataavailable=s=>{s.data.size>0&&this._rawChunks.push(s.data)},this._rawRecorder.start(100)}async stopRaw(){return!this._rawRecorder||this._rawRecorder.state==="inactive"?null:new Promise(e=>{this._rawRecorder.onstop=()=>{const n=new Blob(this._rawChunks,{type:this._rawRecorder.mimeType});this._rawRecorder=null,this._rawChunks=[],e(n)},this._rawRecorder.stop()})}abortRaw(){this._rawRecorder&&this._rawRecorder.state!=="inactive"&&this._rawRecorder.stop(),this._rawRecorder=null,this._rawChunks=[]}}class fI{constructor(){C(this,"events",[]);C(this,"startMs",0);C(this,"_active",!1);C(this,"posFrame",0)}start(){this.events=[],this.startMs=performance.now(),this._active=!0,this.posFrame=0}stop(){return this._active=!1,[...this.events]}get active(){return this._active}logSpawn(e,n,i,s){this._active&&this.events.push({t:performance.now()-this.startMs,type:"spawn",ability:e,ax:n,ay:i,az:s})}logPosition(e,n,i,s,r){this._active&&(this.posFrame++,this.posFrame%2===0&&this.events.push({t:performance.now()-this.startMs,type:"position",ability:e,ax:n,ay:i,az:s,depth:r}))}logDissipate(e){this._active&&this.events.push({t:performance.now()-this.startMs,type:"dissipate",ability:e})}logDomain(e){this._active&&this.events.push({t:performance.now()-this.startMs,type:e?"domain":"domain_end"})}logShoot(e,n){this._active&&this.events.push({t:performance.now()-this.startMs,type:"shoot",ax:e,ay:n})}}function M_(t,e,n){if(n==="original")return{sx:0,sy:0,sw:t,sh:e};const[i,s]=n==="16:9"?[16,9]:n==="9:16"?[9,16]:[1,1];let r=t,o=Math.round(t*s/i);return o>e&&(o=e,r=Math.round(e*i/s)),{sx:Math.round((t-r)/2),sy:Math.round((e-o)/2),sw:r,sh:o}}class dI{constructor(){C(this,"threeCanvas");C(this,"threeRenderer");C(this,"scene");C(this,"camera");C(this,"activeEffects",new Map);C(this,"dyingEffects",new Set);C(this,"frustumW",2);C(this,"frustumH",2);this.threeCanvas=document.createElement("canvas"),this.threeRenderer=new w2({canvas:this.threeCanvas,antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance"}),this.threeRenderer.setClearColor(0,0),this.scene=new o2,this.camera=new $u(-1,1,1,-1,.1,100),this.camera.position.z=10,this.scene.add(new _2(16777215,.6))}toWorld(e,n,i=0){return new H(-(e-.5)*this.frustumW,-(n-.5)*this.frustumH,i)}spawnEffect(e){let n;switch(e){case"blue":n=new L2;break;case"red":n=new F2;break;case"purple":n=new A2;break;case"domain":n=new R2;break}return this.activeEffects.set(e,n),this.scene.add(n.getObject3D()),n.spawn(),n}dissipateEffect(e){const n=this.activeEffects.get(e);n&&(this.activeEffects.delete(e),n.beginDissipate(),this.dyingEffects.add(n))}processEvent(e){const n=e.ability;switch(e.type){case"spawn":if(!n)break;{const i=this.spawnEffect(n);e.ax!==void 0&&e.ay!==void 0&&i.setPosition(this.toWorld(e.ax,e.ay,e.az??0))}break;case"position":if(!n)break;{const i=this.activeEffects.get(n);i&&e.ax!==void 0&&e.ay!==void 0&&(i.setPosition(this.toWorld(e.ax,e.ay,e.az??0)),e.depth!==void 0&&i.setScale(e.depth))}break;case"dissipate":n&&this.dissipateEffect(n);break;case"domain":this.spawnEffect("domain");break;case"domain_end":this.dissipateEffect("domain");break}}tickEffects(e){for(const n of this.activeEffects.values())n.update(e);for(const n of this.dyingEffects)n.update(e),n.isDone&&(this.scene.remove(n.getObject3D()),n.dispose(),this.dyingEffects.delete(n))}async composite(e,n,i,s,r){const o=URL.createObjectURL(e),a=document.createElement("video");a.src=o,a.muted=!0,a.playsInline=!0,a.preload="auto",document.body.appendChild(a),await new Promise((I,w)=>{a.onloadedmetadata=()=>I(),a.onerror=w});const l=a.videoWidth,c=a.videoHeight,u=a.duration*1e3;this.frustumH=2,this.frustumW=this.frustumH*(l/c),this.threeCanvas.width=l,this.threeCanvas.height=c,this.threeRenderer.setSize(l,c,!1),this.camera.left=-this.frustumW/2,this.camera.right=this.frustumW/2,this.camera.top=this.frustumH/2,this.camera.bottom=-this.frustumH/2,this.camera.updateProjectionMatrix();const{sw:h,sh:f}=M_(l,c,i),d=document.createElement("canvas");d.width=h,d.height=f;const g=d.getContext("2d"),_=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm;codecs=vp8",m=h*f>9e5?15e6:8e6,p=new MediaRecorder(d.captureStream(s),{mimeType:_,videoBitsPerSecond:m}),y=[];p.ondataavailable=I=>{I.data.size>0&&y.push(I.data)},p.start(100);const M=[...n].sort((I,w)=>I.t-w.t);let x=0,P=-1;const{sx:T,sy:F,sw:S,sh:A}=M_(l,c,i);await new Promise(I=>{const w=(L,V)=>{const $=V.mediaTime*1e3,O=P<0?1/s:Math.min(($-P)/1e3,.1);for(P=$;x<M.length&&M[x].t<=$;)this.processEvent(M[x++]);if(this.tickEffects(O),this.threeRenderer.render(this.scene,this.camera),g.clearRect(0,0,h,f),g.save(),g.translate(h,0),g.scale(-1,1),g.drawImage(a,T,F,S,A,0,0,h,f),g.restore(),g.drawImage(this.threeCanvas,T,F,S,A,0,0,h,f),r(Math.min($/u,1)),$>=u-50){a.pause(),I();return}a.requestVideoFrameCallback(w)};a.requestVideoFrameCallback(w),a.play().catch(console.error)}),await new Promise(I=>{p.onstop=()=>{const w=new Blob(y,{type:p.mimeType}),L=URL.createObjectURL(w),V=document.createElement("a");V.href=L,V.download=`hd_composite_${new Date().toISOString().slice(0,19).replace(/[:.]/g,"-")}.webm`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(L),URL.revokeObjectURL(o),I()},p.stop()}),document.body.removeChild(a);for(const I of[...this.activeEffects.values(),...this.dyingEffects])this.scene.remove(I.getObject3D()),I.dispose();this.activeEffects.clear(),this.dyingEffects.clear()}dispose(){this.threeRenderer.dispose()}}const pI={class:"scene-container"},mI={key:1,class:"loading-overlay"},gI=eo({__name:"GojoScene",setup(t){const e=pt(),n=pt(),i=pt(),s=pt(),r=pt(!0),o=pt([]),a=pt([]),l=pt([]),c=pt(0),u=pt(!0),h=pt(null),f=pt([]),d=new hI,g=new fI,_=new dI,m=pt("original"),p=pt(!1);let y=!1,M="original",x=30;function P(ee){var pe;if(!n.value||!e.value)return;if(y=ee.hdMode??!1,M=ee.format,x=ee.fps,y){d.startRaw(e.value),g.start(),w==null||w.setEventLog(g),p.value=!0;return}const ce=ee.withDebug?((pe=i.value)==null?void 0:pe.landmarkCanvas)??void 0:void 0;L.setPixelRatio(1),d.start(n.value,e.value,ee,ce),p.value=!0}async function T(){var ee,ce;if(p.value=!1,y){w==null||w.setEventLog(null);const pe=g.stop(),Te=await d.stopRaw();Te&&((ee=s.value)==null||ee.setCompositing(!0,0),await _.composite(Te,pe,M,x,Oe=>{var ct;(ct=s.value)==null||ct.setCompositing(!0,Oe)}),(ce=s.value)==null||ce.setCompositing(!1)),y=!1;return}d.stop(),L.setPixelRatio(window.devicePixelRatio)}function F(){if(p.value=!1,y){w==null||w.setEventLog(null),g.stop(),d.abortRaw(),y=!1;return}d.abort(),L.setPixelRatio(window.devicePixelRatio)}let S,A,I,w,L,V=0,$=0,O=performance.now();function z(ee){var ce;((ce=document.activeElement)==null?void 0:ce.tagName)!=="INPUT"&&(ee.key==="f"||ee.key==="F")&&(ee.preventDefault(),u.value=!u.value)}function k(ee){return new Promise(ce=>{if(ee.videoWidth>0&&ee.videoHeight>0){ce();return}const pe=()=>{ee.videoWidth>0&&ee.videoHeight>0?ce():requestAnimationFrame(pe)};pe()})}to(async()=>{if(!e.value||!n.value)return;window.addEventListener("keydown",z),S=new qS,L=new LC(n.value),A=new IE(e.value,S),I=new DE(S),w=new RC(S,L),I.registerGesture(new g_("Left")),I.registerGesture(new g_("Right")),I.registerGesture(new v_("Left")),I.registerGesture(new v_("Right"));const ee=new zC;I.registerGesture(ee),w.setDomainGesture(ee),w.addAnimation($e.LEFT_HAND_RAISED,()=>new jC),w.addAnimation($e.RIGHT_HAND_RAISED,()=>new WC),w.addAnimation($e.HANDS_MERGED,()=>new XC);const ce=new Set;S.on("handUpdate",pe=>{o.value=pe,ce.clear(),f.value=pe.map(Te=>{const Oe=Te.landmarks,ct=$p(Oe),et=P2(Oe),se=Oe[Ue.INDEX_FINGER_MCP].x-Oe[Ue.MIDDLE_FINGER_MCP].x,we=Oe[Ue.INDEX_FINGER_TIP].x-Oe[Ue.MIDDLE_FINGER_TIP].x,_e=Math.abs(Oe[Ue.INDEX_FINGER_MCP].x-Oe[Ue.PINKY_MCP].x),je=Math.abs(Oe[Ue.INDEX_FINGER_TIP].x-Oe[Ue.MIDDLE_FINGER_TIP].x),qe=se*we<0&&Oe[Ue.INDEX_FINGER_TIP].y<Oe[Ue.INDEX_FINGER_PIP].y&&Oe[Ue.MIDDLE_FINGER_TIP].y<Oe[Ue.MIDDLE_FINGER_PIP].y&&je>_e*.05;return{normPinch:ct,wristSpeed:0,fingersCrossed:qe,handSize:et}})}),S.on("gestureDetected",pe=>{ce.add(pe.type);const Te=performance.now();a.value=[...a.value.filter(Oe=>{const ct=Oe.type.includes("flick")?1500:600;return Te-Oe.timestamp<ct&&Oe.type!==pe.type}),pe]});try{await A.initialize(),await k(e.value),L.initialize(e.value),A.start(),r.value=!1,Q(ce)}catch(pe){console.error("Failed to initialize:",pe),r.value=!1}});function Q(ee){let ce=performance.now();function pe(){var ct;const Te=performance.now(),Oe=Math.min((Te-ce)/1e3,.1);ce=Te,$++,Te-O>=1e3&&(c.value=$,$=0,O=Te),w==null||w.removeAbilitiesForMissingHands(ee),w==null||w.update(Oe),h.value=(w==null?void 0:w.getDebugState())??null,l.value=((ct=h.value)==null?void 0:ct.activeAbilities)??[],L.render(Oe,u.value),d.tick(),V=requestAnimationFrame(pe)}pe()}return xr(()=>{cancelAnimationFrame(V),A==null||A.stop(),window.removeEventListener("keydown",z)}),(ee,ce)=>(Qe(),tt("div",pI,[te("video",{ref_key:"videoRef",ref:e,autoplay:"",playsinline:"",class:"hidden-video"},null,512),te("canvas",{ref_key:"canvasRef",ref:n,class:"main-canvas"},null,512),hn(vP,{ref_key:"debugOverlayRef",ref:i,hands:o.value,gestures:a.value,fps:c.value,abilityDebug:h.value,effectsEnabled:u.value,rawMetrics:f.value,onToggleEffects:ce[0]||(ce[0]=pe=>u.value=!u.value)},null,8,["hands","gestures","fps","abilityDebug","effectsEnabled","rawMetrics"]),hn(PP,{activeAbilities:l.value,abilityDebug:h.value,effectsEnabled:u.value,onToggleEffects:ce[1]||(ce[1]=pe=>u.value=!u.value)},null,8,["activeAbilities","abilityDebug","effectsEnabled"]),hn(oI,{ref_key:"recordingControlsRef",ref:s,onStart:P,onStop:T,onAbort:F,onFormatChange:ce[2]||(ce[2]=pe=>m.value=pe)},null,512),p.value?an("",!0):(Qe(),Gc(uI,{key:0,format:m.value},null,8,["format"])),r.value?(Qe(),tt("div",mI,[...ce[3]||(ce[3]=[te("div",{class:"loading-text"},"Initializing Infinity...",-1)])])):an("",!0)]))}}),_I=ra(gI,[["__scopeId","data-v-f391af5f"]]),vI=eo({__name:"App",setup(t){const e=pt(!0);function n(s){e.value=!0}function i(s){s.code==="Space"&&e.value&&(s.preventDefault(),e.value=!1)}return to(()=>window.addEventListener("keydown",i)),xr(()=>window.removeEventListener("keydown",i)),(s,r)=>e.value?(Qe(),Gc(_I,{key:0})):(Qe(),Gc(jS,{key:1,onStart:n}))}});SS(vI).mount("#app");
