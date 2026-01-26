const lI=(r,t)=>{const e=r.__vccOpts||r;for(const[n,s]of t)e[n]=s;return e},pl="ti.roster.v2",Gf="ti.roster.v1",ke="xyskillsx",_l={name:"yskills",id:"xyskillsx"};function co(r){const t=new Map;for(const n of r){const s=String(n.id||"").trim(),i=String(n.name||"").trim();!s||!i||t.set(s.toLowerCase(),{name:i,id:s})}t.has(ke)||t.set(ke,_l);const e=[];t.has(ke)&&e.push(t.get(ke));for(const[n,s]of t)n!==ke&&e.push(s);return e}function Hf(){try{const r=localStorage.getItem(pl);if(r){const t=JSON.parse(r);if(Array.isArray(t))return co(t.map(e=>({name:String((e==null?void 0:e.name)??"").trim(),id:String((e==null?void 0:e.id)??"").trim()})).filter(e=>e.name.length>0&&e.id.length>0))}}catch{}try{const r=localStorage.getItem(Gf);if(!r)return[];const t=JSON.parse(r),e=Array.isArray(t)?t.filter(n=>typeof n=="string"):[];return co(e.map(n=>({name:n,id:n})))}catch{return[]}}function Qf(r){try{const t=r.map(i=>({name:String(i.name??"").trim(),id:String(i.id??"").trim()})).filter(i=>i.name.length>0&&i.id.length>0),e=new Set,n=[];for(const i of t){const a=i.id.toLowerCase();e.has(a)||(e.add(a),n.push(i))}const s=co(n);localStorage.setItem(pl,JSON.stringify(s))}catch{}}function hI(r){if(!Array.isArray(r)||!r.length)return;const e=Hf().filter(l=>l.id.toLowerCase()!==ke),n=[],s=new Set;for(const l of r){const d=String((l==null?void 0:l.name)??"").trim(),m=String((l==null?void 0:l.id)??"").trim();if(!d||!m)continue;const g=m.toLowerCase();g!==ke&&(s.has(g)||(s.add(g),n.push({name:d,id:m})))}const i=new Set(n.map(l=>l.id.toLowerCase())),a=e.filter(l=>!i.has(l.id.toLowerCase())),u=[_l,...n,...a];Qf(u)}const Wf=()=>{};var Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Jf=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,m=i>>2,g=(i&3)<<4|u>>4;let I=(u&15)<<2|d>>6,R=d&63;l||(R=64,a||(I=64)),n.push(e[m],e[g],e[I],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(yl(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Jf(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const g=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||g==null)throw new Xf;const I=i<<2|u>>4;if(n.push(I),d!==64){const R=u<<4&240|d>>2;if(n.push(R),g!==64){const C=d<<6&192|g;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Xf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yf=function(r){const t=yl(r);return Il.encodeByteArray(t,!0)},Fs=function(r){return Yf(r).replace(/\./g,"")},Zf=function(r){try{return Il.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=()=>El().__FIREBASE_DEFAULTS__,em=()=>{if(typeof process>"u"||typeof Lu>"u")return;const r=Lu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},nm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Zf(r[1]);return t&&JSON.parse(t)},zo=()=>{try{return Wf()||tm()||em()||nm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},rm=r=>{var t,e;return(e=(t=zo())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},sm=r=>{const t=rm(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Tl=()=>{var r;return(r=zo())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wl(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Fs(JSON.stringify(e)),Fs(JSON.stringify(a)),""].join(".")}const _r={};function am(){const r={prod:[],emulator:[]};for(const t of Object.keys(_r))_r[t]?r.emulator.push(t):r.prod.push(t);return r}function um(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Bu=!1;function cm(r,t){if(typeof window>"u"||typeof document>"u"||!ii(window.location.host)||_r[r]===t||_r[r]||Bu)return;_r[r]=t;function e(I){return`__firebase__banner__${I}`}const n="__firebase__banner",i=am().prod.length>0;function a(){const I=document.getElementById(n);I&&I.remove()}function u(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function l(I,R){I.setAttribute("width","24"),I.setAttribute("id",R),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Bu=!0,a()},I}function m(I,R){I.setAttribute("id",R),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function g(){const I=um(n),R=e("text"),C=document.getElementById(R)||document.createElement("span"),N=e("learnmore"),D=document.getElementById(N)||document.createElement("a"),z=e("preprendIcon"),j=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const B=I.element;u(B),m(D,N);const Q=d();l(j,z),B.append(j,C,D,Q),document.body.appendChild(B)}i?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vl(){var t;const r=(t=zo())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Al(){return!vl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sl(){return!vl()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function bl(){try{return typeof indexedDB=="object"}catch{return!1}}function lm(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="FirebaseError";class Ln extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=hm,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rl.prototype.create)}}class Rl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?dm(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ln(s,u,n)}}function dm(r,t){return r.replace(fm,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const fm=/\{\$([^}]+)}/g;function Rr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Uu(i)&&Uu(a)){if(!Rr(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Uu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(r){return r&&r._delegate?r._delegate:r}class Vr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new im;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pm(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=De){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=De){return this.instances.has(t)}getOptions(t=De){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:gm(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=De){return this.component?this.component.multipleInstances?t:De:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gm(r){return r===De?void 0:r}function pm(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new mm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const ym={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Im=H.INFO,Em={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Tm=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Em[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pl{constructor(t){this.name=t,this._logLevel=Im,this._logHandler=Tm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ym[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const wm=(r,t)=>t.some(e=>r instanceof e);let ju,qu;function vm(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Am(){return qu||(qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vl=new WeakMap,lo=new WeakMap,Cl=new WeakMap,Wi=new WeakMap,$o=new WeakMap;function Sm(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(fe(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Vl.set(e,r)}).catch(()=>{}),$o.set(t,r),t}function bm(r){if(lo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});lo.set(r,t)}let ho={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return lo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Cl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return fe(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Rm(r){ho=r(ho)}function Pm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Ji(this),t,...e);return Cl.set(n,t.sort?t.sort():[t]),fe(n)}:Am().includes(r)?function(...t){return r.apply(Ji(this),t),fe(Vl.get(this))}:function(...t){return fe(r.apply(Ji(this),t))}}function Vm(r){return typeof r=="function"?Pm(r):(r instanceof IDBTransaction&&bm(r),wm(r,vm())?new Proxy(r,ho):r)}function fe(r){if(r instanceof IDBRequest)return Sm(r);if(Wi.has(r))return Wi.get(r);const t=Vm(r);return t!==r&&(Wi.set(r,t),$o.set(t,r)),t}const Ji=r=>$o.get(r);function Cm(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=fe(a);return n&&a.addEventListener("upgradeneeded",l=>{n(fe(a.result),l.oldVersion,l.newVersion,fe(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Dm=["get","getKey","getAll","getAllKeys","count"],xm=["put","add","delete","clear"],Xi=new Map;function zu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Xi.get(t))return Xi.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=xm.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Dm.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return Xi.set(t,i),i}Rm(r=>({...r,get:(t,e,n)=>zu(t,e)||r.get(t,e,n),has:(t,e)=>!!zu(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(km(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function km(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fo="@firebase/app",$u="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Pl("@firebase/app"),Mm="@firebase/app-compat",Om="@firebase/analytics-compat",Fm="@firebase/analytics",Lm="@firebase/app-check-compat",Bm="@firebase/app-check",Um="@firebase/auth",jm="@firebase/auth-compat",qm="@firebase/database",zm="@firebase/data-connect",$m="@firebase/database-compat",Km="@firebase/functions",Gm="@firebase/functions-compat",Hm="@firebase/installations",Qm="@firebase/installations-compat",Wm="@firebase/messaging",Jm="@firebase/messaging-compat",Xm="@firebase/performance",Ym="@firebase/performance-compat",Zm="@firebase/remote-config",tg="@firebase/remote-config-compat",eg="@firebase/storage",ng="@firebase/storage-compat",rg="@firebase/firestore",sg="@firebase/ai",ig="@firebase/firestore-compat",og="firebase",ag="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="[DEFAULT]",ug={[fo]:"fire-core",[Mm]:"fire-core-compat",[Fm]:"fire-analytics",[Om]:"fire-analytics-compat",[Bm]:"fire-app-check",[Lm]:"fire-app-check-compat",[Um]:"fire-auth",[jm]:"fire-auth-compat",[qm]:"fire-rtdb",[zm]:"fire-data-connect",[$m]:"fire-rtdb-compat",[Km]:"fire-fn",[Gm]:"fire-fn-compat",[Hm]:"fire-iid",[Qm]:"fire-iid-compat",[Wm]:"fire-fcm",[Jm]:"fire-fcm-compat",[Xm]:"fire-perf",[Ym]:"fire-perf-compat",[Zm]:"fire-rc",[tg]:"fire-rc-compat",[eg]:"fire-gcs",[ng]:"fire-gcs-compat",[rg]:"fire-fst",[ig]:"fire-fst-compat",[sg]:"fire-vertex","fire-js":"fire-js",[og]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,cg=new Map,go=new Map;function Ku(r,t){try{r.container.addComponent(t)}catch(e){te.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Us(r){const t=r.name;if(go.has(t))return te.debug(`There were multiple attempts to register component ${t}.`),!1;go.set(t,r);for(const e of Bs.values())Ku(e,r);for(const e of cg.values())Ku(e,r);return!0}function Dl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function lg(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new Rl("app","Firebase",hg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=ag;function xl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:mo,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw me.create("bad-app-name",{appName:String(s)});if(e||(e=Tl()),!e)throw me.create("no-options");const i=Bs.get(s);if(i){if(Rr(e,i.options)&&Rr(n,i.config))return i;throw me.create("duplicate-app",{appName:s})}const a=new _m(s);for(const l of go.values())a.addComponent(l);const u=new dg(e,n,a);return Bs.set(s,u),u}function mg(r=mo){const t=Bs.get(r);if(!t&&r===mo&&Tl())return xl();if(!t)throw me.create("no-app",{appName:r});return t}function pn(r,t,e){let n=ug[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(a.join(" "));return}Us(new Vr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebase-heartbeat-database",pg=1,Cr="firebase-heartbeat-store";let Yi=null;function Nl(){return Yi||(Yi=Cm(gg,pg,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Cr)}catch(e){console.warn(e)}}}}).catch(r=>{throw me.create("idb-open",{originalErrorMessage:r.message})})),Yi}async function _g(r){try{const e=(await Nl()).transaction(Cr),n=await e.objectStore(Cr).get(kl(r));return await e.done,n}catch(t){if(t instanceof Ln)te.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});te.warn(e.message)}}}async function Gu(r,t){try{const n=(await Nl()).transaction(Cr,"readwrite");await n.objectStore(Cr).put(t,kl(r)),await n.done}catch(e){if(e instanceof Ln)te.warn(e.message);else{const n=me.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});te.warn(n.message)}}}function kl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=1024,Ig=30;class Eg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new wg(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ig){const a=vg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){te.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hu(),{heartbeatsToSend:n,unsentEntries:s}=Tg(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return te.warn(e),""}}}function Hu(){return new Date().toISOString().substring(0,10)}function Tg(r,t=yg){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Qu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Qu(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class wg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _g(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Qu(r){return Fs(JSON.stringify({version:2,heartbeats:r})).length}function vg(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(r){Us(new Vr("platform-logger",t=>new Nm(t),"PRIVATE")),Us(new Vr("heartbeat",t=>new Eg(t),"PRIVATE")),pn(fo,$u,r),pn(fo,$u,"esm2020"),pn("fire-js","")}Ag("");var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ge,Ml;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function y(){}y.prototype=p.prototype,E.D=p.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(T,w,S){for(var _=Array(arguments.length-2),Wt=2;Wt<arguments.length;Wt++)_[Wt-2]=arguments[Wt];return p.prototype[w].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,y){y||(y=0);var T=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)T[w]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(w=0;16>w;++w)T[w]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=E.g[0],y=E.g[1],w=E.g[2];var S=E.g[3],_=p+(S^y&(w^S))+T[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=S+(w^p&(y^w))+T[1]+3905402710&4294967295,S=p+(_<<12&4294967295|_>>>20),_=w+(y^S&(p^y))+T[2]+606105819&4294967295,w=S+(_<<17&4294967295|_>>>15),_=y+(p^w&(S^p))+T[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(S^y&(w^S))+T[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=S+(w^p&(y^w))+T[5]+1200080426&4294967295,S=p+(_<<12&4294967295|_>>>20),_=w+(y^S&(p^y))+T[6]+2821735955&4294967295,w=S+(_<<17&4294967295|_>>>15),_=y+(p^w&(S^p))+T[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(S^y&(w^S))+T[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=S+(w^p&(y^w))+T[9]+2336552879&4294967295,S=p+(_<<12&4294967295|_>>>20),_=w+(y^S&(p^y))+T[10]+4294925233&4294967295,w=S+(_<<17&4294967295|_>>>15),_=y+(p^w&(S^p))+T[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(S^y&(w^S))+T[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=S+(w^p&(y^w))+T[13]+4254626195&4294967295,S=p+(_<<12&4294967295|_>>>20),_=w+(y^S&(p^y))+T[14]+2792965006&4294967295,w=S+(_<<17&4294967295|_>>>15),_=y+(p^w&(S^p))+T[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(w^S&(y^w))+T[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=S+(y^w&(p^y))+T[6]+3225465664&4294967295,S=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(S^p))+T[11]+643717713&4294967295,w=S+(_<<14&4294967295|_>>>18),_=y+(S^p&(w^S))+T[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^S&(y^w))+T[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=S+(y^w&(p^y))+T[10]+38016083&4294967295,S=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(S^p))+T[15]+3634488961&4294967295,w=S+(_<<14&4294967295|_>>>18),_=y+(S^p&(w^S))+T[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^S&(y^w))+T[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=S+(y^w&(p^y))+T[14]+3275163606&4294967295,S=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(S^p))+T[3]+4107603335&4294967295,w=S+(_<<14&4294967295|_>>>18),_=y+(S^p&(w^S))+T[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^S&(y^w))+T[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=S+(y^w&(p^y))+T[2]+4243563512&4294967295,S=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(S^p))+T[7]+1735328473&4294967295,w=S+(_<<14&4294967295|_>>>18),_=y+(S^p&(w^S))+T[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(y^w^S)+T[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=S+(p^y^w)+T[8]+2272392833&4294967295,S=p+(_<<11&4294967295|_>>>21),_=w+(S^p^y)+T[11]+1839030562&4294967295,w=S+(_<<16&4294967295|_>>>16),_=y+(w^S^p)+T[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^S)+T[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=S+(p^y^w)+T[4]+1272893353&4294967295,S=p+(_<<11&4294967295|_>>>21),_=w+(S^p^y)+T[7]+4139469664&4294967295,w=S+(_<<16&4294967295|_>>>16),_=y+(w^S^p)+T[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^S)+T[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=S+(p^y^w)+T[0]+3936430074&4294967295,S=p+(_<<11&4294967295|_>>>21),_=w+(S^p^y)+T[3]+3572445317&4294967295,w=S+(_<<16&4294967295|_>>>16),_=y+(w^S^p)+T[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^S)+T[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=S+(p^y^w)+T[12]+3873151461&4294967295,S=p+(_<<11&4294967295|_>>>21),_=w+(S^p^y)+T[15]+530742520&4294967295,w=S+(_<<16&4294967295|_>>>16),_=y+(w^S^p)+T[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(w^(y|~S))+T[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=S+(y^(p|~w))+T[7]+1126891415&4294967295,S=p+(_<<10&4294967295|_>>>22),_=w+(p^(S|~y))+T[14]+2878612391&4294967295,w=S+(_<<15&4294967295|_>>>17),_=y+(S^(w|~p))+T[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~S))+T[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=S+(y^(p|~w))+T[3]+2399980690&4294967295,S=p+(_<<10&4294967295|_>>>22),_=w+(p^(S|~y))+T[10]+4293915773&4294967295,w=S+(_<<15&4294967295|_>>>17),_=y+(S^(w|~p))+T[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~S))+T[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=S+(y^(p|~w))+T[15]+4264355552&4294967295,S=p+(_<<10&4294967295|_>>>22),_=w+(p^(S|~y))+T[6]+2734768916&4294967295,w=S+(_<<15&4294967295|_>>>17),_=y+(S^(w|~p))+T[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~S))+T[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=S+(y^(p|~w))+T[11]+3174756917&4294967295,S=p+(_<<10&4294967295|_>>>22),_=w+(p^(S|~y))+T[2]+718787259&4294967295,w=S+(_<<15&4294967295|_>>>17),_=y+(S^(w|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var y=p-this.blockSize,T=this.B,w=this.h,S=0;S<p;){if(w==0)for(;S<=y;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<p;)if(T[w++]=E.charCodeAt(S++),w==this.blockSize){s(this,T),w=0;break}}else for(;S<p;)if(T[w++]=E[S++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var y=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=y&255,y/=256;for(this.u(E),E=Array(16),p=y=0;4>p;++p)for(var T=0;32>T;T+=8)E[y++]=this.g[p]>>>T&255;return E};function i(E,p){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=p(E)}function a(E,p){this.h=p;for(var y=[],T=!0,w=E.length-1;0<=w;w--){var S=E[w]|0;T&&S==p||(y[w]=S,T=!1)}this.g=y}var u={};function l(E){return-128<=E&&128>E?i(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return D(d(-E));for(var p=[],y=1,T=0;E>=y;T++)p[T]=E/y|0,y*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),T=g,w=0;w<E.length;w+=8){var S=Math.min(8,E.length-w),_=parseInt(E.substring(w,w+S),p);8>S?(S=d(Math.pow(p,S)),T=T.j(S).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var g=l(0),I=l(1),R=l(16777216);r=a.prototype,r.m=function(){if(N(this))return-D(this).m();for(var E=0,p=1,y=0;y<this.g.length;y++){var T=this.i(y);E+=(0<=T?T:4294967296+T)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var p=d(Math.pow(E,6)),y=this,T="";;){var w=Q(y,p).g;y=z(y,w.j(p));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=w,C(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=z(this,E),N(E)?-1:C(E)?0:1};function D(E){for(var p=E.g.length,y=[],T=0;T<p;T++)y[T]=~E.g[T];return new a(y,~E.h).add(I)}r.abs=function(){return N(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0,w=0;w<=p;w++){var S=T+(this.i(w)&65535)+(E.i(w)&65535),_=(S>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=_>>>16,S&=65535,_&=65535,y[w]=_<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(E,p){return E.add(D(p))}r.j=function(E){if(C(this)||C(E))return g;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,y=[],T=0;T<2*p;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var S=this.i(T)>>>16,_=this.i(T)&65535,Wt=E.i(w)>>>16,$n=E.i(w)&65535;y[2*T+2*w]+=_*$n,j(y,2*T+2*w),y[2*T+2*w+1]+=S*$n,j(y,2*T+2*w+1),y[2*T+2*w+1]+=_*Wt,j(y,2*T+2*w+1),y[2*T+2*w+2]+=S*Wt,j(y,2*T+2*w+2)}for(T=0;T<p;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=p;T<2*p;T++)y[T]=0;return new a(y,0)};function j(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function B(E,p){this.g=E,this.h=p}function Q(E,p){if(C(p))throw Error("division by zero");if(C(E))return new B(g,g);if(N(E))return p=Q(D(E),p),new B(D(p.g),D(p.h));if(N(p))return p=Q(E,D(p)),new B(D(p.g),p.h);if(30<E.g.length){if(N(E)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,T=p;0>=T.l(E);)y=nt(y),T=nt(T);var w=W(y,1),S=W(T,1);for(T=W(T,2),y=W(y,2);!C(T);){var _=S.add(T);0>=_.l(E)&&(w=w.add(y),S=_),T=W(T,1),y=W(y,1)}return p=z(E,w.j(p)),new B(w,p)}for(w=g;0<=E.l(p);){for(y=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=d(y),_=S.j(p);N(_)||0<_.l(E);)y-=T,S=d(y),_=S.j(p);C(S)&&(S=I),w=w.add(S),E=z(E,_)}return new B(w,E)}r.A=function(E){return Q(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function nt(E){for(var p=E.g.length+1,y=[],T=0;T<p;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function W(E,p){var y=p>>5;p%=32;for(var T=E.g.length-y,w=[],S=0;S<T;S++)w[S]=0<p?E.i(S+y)>>>p|E.i(S+y+1)<<32-p:E.i(S+y);return new a(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ml=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ge=a}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ol,dr,Fl,Ss,po,Ll,Bl,Ul;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var b=h++;return{value:c(b,o[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,I.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,b){for(var x=Array(arguments.length-2),et=2;et<arguments.length;et++)x[et-2]=arguments[et];return c.prototype[A].apply(f,x)}}function N(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const A=o.length||0,b=f.length||0;o.length=A+b;for(let x=0;x<b;x++)o[A+x]=f[x]}else o.push(f)}}class z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var nt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function W(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function S(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Si;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Wt{constructor(){this.h=this.g=null}add(c,h){const f=$n.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var $n=new z(()=>new hf,o=>o.reset());class hf{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Kn,Gn=!1,Si=new Wt,La=()=>{const o=u.Promise.resolve(void 0);Kn=()=>{o.then(df)}};var df=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){S(h)}var c=$n;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Gn=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var ff=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Hn(o,c){if(It.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(nt){t:{try{Q(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:mf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Hn.aa.h.call(this)}}C(Hn,It);var mf={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zr="closure_listenable_"+(1e6*Math.random()|0),gf=0;function pf(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++gf,this.da=this.fa=!1}function ts(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function es(o){this.src=o,this.g={},this.h=0}es.prototype.add=function(o,c,h,f,A){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var x=Ri(o,c,f,A);return-1<x?(c=o[x],h||(c.fa=!1)):(c=new pf(c,this.src,b,!!f,A),c.fa=h,o.push(c)),c};function bi(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(ts(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ri(o,c,h,f){for(var A=0;A<o.length;++A){var b=o[A];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return A}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Vi={};function Ba(o,c,h,f,A){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Ba(o,c[b],h,f,A);return null}return h=qa(h),o&&o[Zr]?o.K(c,h,d(f)?!!f.capture:!1,A):_f(o,c,h,!1,f,A)}function _f(o,c,h,f,A,b){if(!c)throw Error("Invalid event type");var x=d(A)?!!A.capture:!!A,et=Di(o);if(et||(o[Pi]=et=new es(o)),h=et.add(c,h,f,x,b),h.proxy)return h;if(f=yf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)ff||(A=x),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(ja(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function yf(){function o(h){return c.call(o.src,o.listener,h)}const c=If;return o}function Ua(o,c,h,f,A){if(Array.isArray(c))for(var b=0;b<c.length;b++)Ua(o,c[b],h,f,A);else f=d(f)?!!f.capture:!!f,h=qa(h),o&&o[Zr]?(o=o.i,c=String(c).toString(),c in o.g&&(b=o.g[c],h=Ri(b,h,f,A),-1<h&&(ts(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[c],o.h--)))):o&&(o=Di(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ri(c,h,f,A)),(h=-1<o?c[o]:null)&&Ci(h))}function Ci(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Zr])bi(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(ja(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Di(c))?(bi(h,o),h.h==0&&(h.src=null,c[Pi]=null)):ts(o)}}}function ja(o){return o in Vi?Vi[o]:Vi[o]="on"+o}function If(o,c){if(o.da)o=!0;else{c=new Hn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ci(o),o=h.call(f,c)}return o}function Di(o){return o=o[Pi],o instanceof es?o:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function qa(o){return typeof o=="function"?o:(o[xi]||(o[xi]=function(c){return o.handleEvent(c)}),o[xi])}function Et(){se.call(this),this.i=new es(this),this.M=this,this.F=null}C(Et,se),Et.prototype[Zr]=!0,Et.prototype.removeEventListener=function(o,c,h,f){Ua(this,o,c,h,f)};function bt(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new It(c,o);else if(c instanceof It)c.target=c.target||o;else{var A=c;c=new It(f,o),T(c,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var x=c.g=h[b];A=ns(x,f,!0,c)&&A}if(x=c.g=o,A=ns(x,f,!0,c)&&A,A=ns(x,f,!1,c)&&A,h)for(b=0;b<h.length;b++)x=c.g=h[b],A=ns(x,f,!1,c)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)ts(h[f]);delete o.g[c],o.h--}}this.F=null},Et.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Et.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function ns(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,b=0;b<c.length;++b){var x=c[b];if(x&&!x.da&&x.capture==h){var et=x.listener,_t=x.ha||x.src;x.fa&&bi(o.i,x),A=et.call(_t,f)!==!1&&A}}return A&&!f.defaultPrevented}function za(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function $a(o){o.g=za(()=>{o.g=null,o.i&&(o.i=!1,$a(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ef extends se{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$a(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(o){se.call(this),this.h=o,this.g={}}C(Qn,se);var Ka=[];function Ga(o){W(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ci(c)},o),o.g={}}Qn.prototype.N=function(){Qn.aa.N.call(this),Ga(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ni=u.JSON.stringify,Tf=u.JSON.parse,wf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ki(){}ki.prototype.h=null;function Ha(o){return o.h||(o.h=o.i())}function Qa(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){It.call(this,"d")}C(Mi,It);function Oi(){It.call(this,"c")}C(Oi,It);var be={},Wa=null;function rs(){return Wa=Wa||new Et}be.La="serverreachability";function Ja(o){It.call(this,be.La,o)}C(Ja,It);function Jn(o){const c=rs();bt(c,new Ja(c))}be.STAT_EVENT="statevent";function Xa(o,c){It.call(this,be.STAT_EVENT,o),this.stat=c}C(Xa,It);function Rt(o){const c=rs();bt(c,new Xa(c,o))}be.Ma="timingevent";function Ya(o,c){It.call(this,be.Ma,o),this.size=c}C(Ya,It);function Xn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function vf(o,c,h,f,A,b){o.info(function(){if(o.g)if(b)for(var x="",et=b.split("&"),_t=0;_t<et.length;_t++){var J=et[_t].split("=");if(1<J.length){var Tt=J[0];J=J[1];var wt=Tt.split("_");x=2<=wt.length&&wt[1]=="type"?x+(Tt+"="+J+"&"):x+(Tt+"=redacted&")}}else x=null;else x=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+x})}function Af(o,c,h,f,A,b,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+b+" "+x})}function tn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+bf(o,h)+(f?" "+f:"")})}function Sf(o,c){o.info(function(){return"TIMEOUT: "+c})}Yn.prototype.info=function(){};function bf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return Ni(h)}catch{return c}}var ss={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Za={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fi;function is(){}C(is,ki),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Fi=new is;function ie(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Qn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var eu={},Li={};function Bi(o,c,h){o.L=1,o.v=cs(Jt(c)),o.m=h,o.P=!0,nu(o,null)}function nu(o,c){o.F=Date.now(),os(o),o.A=Jt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),pu(h.i,"t",f),o.C=0,h=o.j.J,o.h=new tu,o.g=ku(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Ef(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ka[0]=A.toString()),A=Ka);for(var b=0;b<A.length;b++){var x=Ba(h,A[b],f||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Jn(),vf(o.i,o.u,o.A,o.l,o.R,o.m)}ie.prototype.ca=function(o){o=o.target;const c=this.M;c&&Xt(o)==3?c.j():this.Y(o)},ie.prototype.Y=function(o){try{if(o==this.g)t:{const wt=Xt(this.g);var c=this.g.Ba();const rn=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||vu(this.g)))){this.J||wt!=4||c==7||(c==8||0>=rn?Jn(3):Jn(2)),Ui(this);var h=this.g.Z();this.X=h;e:if(ru(this)){var f=vu(this.g);o="";var A=f.length,b=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),Zn(this);var x="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(b&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,Af(this.i,this.u,this.A,this.l,this.R,wt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,_t=this.g;if((et=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(et)){var J=et;break e}}J=null}if(h=J)tn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,h);else{this.o=!1,this.s=3,Rt(12),Re(this),Zn(this);break t}}if(this.P){h=!0;let Bt;for(;!this.J&&this.C<x.length;)if(Bt=Rf(this,x),Bt==Li){wt==4&&(this.s=4,Rt(14),h=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==eu){this.s=4,Rt(15),tn(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else tn(this.i,this.l,Bt,null),ji(this,Bt);if(ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||x.length!=0||this.h.h||(this.s=1,Rt(16),h=!1),this.o=this.o&&h,!h)tn(this.i,this.l,x,"[Invalid Chunked Response]"),Re(this),Zn(this);else if(0<x.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Hi(Tt),Tt.M=!0,Rt(11))}}else tn(this.i,this.l,x,null),ji(this,x);wt==4&&Re(this),this.o&&!this.J&&(wt==4?Cu(this.j,this):(this.o=!1,os(this)))}else $f(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Re(this),Zn(this)}}}catch{}finally{}};function ru(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Li:(h=Number(c.substring(h,f)),isNaN(h)?eu:(f+=1,f+h>c.length?Li:(c=c.slice(f,f+h),o.C=f+h,c)))}ie.prototype.cancel=function(){this.J=!0,Re(this)};function os(o){o.S=Date.now()+o.I,su(o,o.I)}function su(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Xn(I(o.ba,o),c)}function Ui(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ie.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Sf(this.i,this.A),this.L!=2&&(Jn(),Rt(17)),Re(this),this.s=2,Zn(this)):su(this,this.S-o)};function Zn(o){o.j.G==0||o.J||Cu(o.j,o)}function Re(o){Ui(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ga(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ji(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||qi(h.h,o))){if(!o.K&&qi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)gs(h),fs(h);else break t;Gi(h),Rt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Xn(I(h.Za,h),6e3));if(1>=au(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ve(h,11)}else if((o.K||h.g==o)&&gs(h),!j(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let J=A[c];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const Tt=J[3];Tt!=null&&(h.la=Tt,h.j.info("VER="+h.la));const wt=J[4];wt!=null&&(h.Aa=wt,h.j.info("SVER="+h.Aa));const rn=J[5];rn!=null&&typeof rn=="number"&&0<rn&&(f=1.5*rn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Bt=o.g;if(Bt){const _s=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var b=f.h;b.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(zi(b,b.h),b.h=null))}if(f.D){const Qi=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qi&&(f.ya=Qi,st(f.I,f.D,Qi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var x=o;if(f.qa=Nu(f,f.J?f.ia:null,f.W),x.K){uu(f.h,x);var et=x,_t=f.L;_t&&(et.I=_t),et.B&&(Ui(et),os(et)),f.g=x}else Pu(f);0<h.i.length&&ms(h)}else J[0]!="stop"&&J[0]!="close"||Ve(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Ve(h,7):Ki(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}Jn(4)}catch{}}var Pf=class{constructor(o,c){this.g=o,this.map=c}};function iu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ou(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function au(o){return o.h?1:o.g?o.g.size:0}function qi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function zi(o,c){o.g?o.g.add(c):o.h=c}function uu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}iu.prototype.cancel=function(){if(this.i=cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return N(o.i)}function Vf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Cf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function lu(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Cf(o),f=Vf(o),A=f.length,b=0;b<A;b++)c.call(void 0,f[b],h&&h[b],o)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Df(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var b=o[h].substring(0,f);A=o[h].substring(f+1)}else b=o[h];c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Pe(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pe){this.h=o.h,as(this,o.j),this.o=o.o,this.g=o.g,us(this,o.s),this.l=o.l;var c=o.i,h=new nr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),du(this,h),this.m=o.m}else o&&(c=String(o).match(hu))?(this.h=!1,as(this,c[1]||"",!0),this.o=tr(c[2]||""),this.g=tr(c[3]||"",!0),us(this,c[4]),this.l=tr(c[5]||"",!0),du(this,c[6]||"",!0),this.m=tr(c[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Pe.prototype.toString=function(){var o=[],c=this.j;c&&o.push(er(c,fu,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(er(c,fu,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?kf:Nf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,Of)),o.join("")};function Jt(o){return new Pe(o)}function as(o,c,h){o.j=h?tr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function us(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function du(o,c,h){c instanceof nr?(o.i=c,Ff(o.i,o.h)):(h||(c=er(c,Mf)),o.i=new nr(c,o.h))}function st(o,c,h){o.i.set(c,h)}function cs(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,xf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fu=/[#\/\?@]/g,Nf=/[#\?:]/g,kf=/[#\?]/g,Mf=/[#\?@]/g,Of=/#/g;function nr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function oe(o){o.g||(o.g=new Map,o.h=0,o.i&&Df(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=nr.prototype,r.add=function(o,c){oe(this),this.i=null,o=en(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function mu(o,c){oe(o),c=en(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function gu(o,c){return oe(o),c=en(o,c),o.g.has(c)}r.forEach=function(o,c){oe(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},r.na=function(){oe(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let b=0;b<A.length;b++)h.push(c[f])}return h},r.V=function(o){oe(this);let c=[];if(typeof o=="string")gu(this,o)&&(c=c.concat(this.g.get(en(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return oe(this),this.i=null,o=en(this,o),gu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function pu(o,c,h){mu(o,c),0<h.length&&(o.i=null,o.g.set(en(o,c),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const b=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var A=b;x[f]!==""&&(A+="="+encodeURIComponent(String(x[f]))),o.push(A)}}return this.i=o.join("&")};function en(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ff(o,c){c&&!o.j&&(oe(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(mu(this,f),pu(this,A,h))},o)),o.j=c}function Lf(o,c){const h=new Yn;if(u.Image){const f=new Image;f.onload=R(ae,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(ae,h,"TestLoadImage: error",!1,c,f),f.onabort=R(ae,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(ae,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Bf(o,c){const h=new Yn,f=new AbortController,A=setTimeout(()=>{f.abort(),ae(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?ae(h,"TestPingServer: ok",!0,c):ae(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ae(h,"TestPingServer: error",!1,c)})}function ae(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function Uf(){this.g=new wf}function jf(o,c,h){const f=h||"";try{lu(o,function(A,b){let x=A;d(A)&&(x=Ni(A)),c.push(f+b+"="+encodeURIComponent(x))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function ls(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ls,ki),ls.prototype.g=function(){return new hs(this.l,this.j)},ls.prototype.i=function(o){return function(){return o}}({});function hs(o,c){Et.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(hs,Et),r=hs.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,sr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_u(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _u(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?rr(this):sr(this),this.readyState==3&&_u(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},r.Qa=function(o){this.g&&(this.response=o,rr(this))},r.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function yu(o){let c="";return W(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function $i(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=yu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):st(o,c,h))}function at(o){Et.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(at,Et);var qf=/^https?$/i,zf=["POST","PUT"];r=at.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fi.g(),this.v=this.o?Ha(this.o):Ha(Fi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){Iu(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(zf,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,x]of h)this.g.setRequestHeader(b,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wu(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){Iu(this,b)}};function Iu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Eu(o),ds(o)}function Eu(o){o.A||(o.A=!0,bt(o,"complete"),bt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,bt(this,"complete"),bt(this,"abort"),ds(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ds(this,!0)),at.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Tu(this):this.bb())},r.bb=function(){Tu(this)};function Tu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)za(o.Ea,0,o);else if(bt(o,"readystatechange"),Xt(o)==4){o.h=!1;try{const x=o.Z();t:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=x===0){var A=String(o.D).match(hu)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!qf.test(A?A.toLowerCase():"")}h=f}if(h)bt(o,"complete"),bt(o,"success");else{o.m=6;try{var b=2<Xt(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",Eu(o)}}finally{ds(o)}}}}function ds(o,c){if(o.g){wu(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||bt(o,"ready");try{h.onreadystatechange=f}catch{}}}function wu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Tf(c)}};function vu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(o){const c={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(j(o[f]))continue;var h=w(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[A]||[];c[A]=b,b.push(h)}E(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Au(o){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,o),this.cb=ir("retryDelaySeedMs",1e4,o),this.Wa=ir("forwardChannelMaxRetries",2,o),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new iu(o&&o.concurrentRequestLimit),this.Da=new Uf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Au.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,f){Rt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Nu(this,null,this.W),ms(this)};function Ki(o){if(Su(o),o.G==3){var c=o.U++,h=Jt(o.I);if(st(h,"SID",o.K),st(h,"RID",c),st(h,"TYPE","terminate"),or(o,h),c=new ie(o,o.j,c),c.L=2,c.v=cs(Jt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=ku(c.j,null),c.g.ea(c.v)),c.F=Date.now(),os(c)}xu(o)}function fs(o){o.g&&(Hi(o),o.g.cancel(),o.g=null)}function Su(o){fs(o),o.u&&(u.clearTimeout(o.u),o.u=null),gs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ms(o){if(!ou(o.h)&&!o.s){o.s=!0;var c=o.Ga;Kn||La(),Gn||(Kn(),Gn=!0),Si.add(c,o),o.B=0}}function Kf(o,c){return au(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Xn(I(o.Ga,o,c),Du(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ie(this,this.j,o);let b=this.o;if(this.S&&(b?(b=p(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Ru(this,A,c),h=Jt(this.I),st(h,"RID",o),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),or(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(yu(b)))+"&"+c:this.m&&$i(h,this.m,b)),zi(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",c),st(h,"SID","null"),A.T=!0,Bi(A,h,null)):Bi(A,h,c),this.G=2}}else this.G==3&&(o?bu(this,o):this.i.length==0||ou(this.h)||bu(this))};function bu(o,c){var h;c?h=c.l:h=o.U++;const f=Jt(o.I);st(f,"SID",o.K),st(f,"RID",h),st(f,"AID",o.T),or(o,f),o.m&&o.o&&$i(f,o.m,o.o),h=new ie(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ru(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zi(o.h,h),Bi(h,f,c)}function or(o,c){o.H&&W(o.H,function(h,f){st(c,f,h)}),o.l&&lu({},function(h,f){st(c,f,h)})}function Ru(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;t:{var A=o.i;let b=-1;for(;;){const x=["count="+h];b==-1?0<h?(b=A[0].g,x.push("ofs="+b)):b=0:x.push("ofs="+b);let et=!0;for(let _t=0;_t<h;_t++){let J=A[_t].g;const Tt=A[_t].map;if(J-=b,0>J)b=Math.max(0,A[_t].g-100),et=!1;else try{jf(Tt,x,"req"+J+"_")}catch{f&&f(Tt)}}if(et){f=x.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,f}function Pu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Kn||La(),Gn||(Kn(),Gn=!0),Si.add(c,o),o.v=0}}function Gi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Xn(I(o.Fa,o),Du(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Xn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),fs(this),Vu(this))};function Hi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Vu(o){o.g=new ie(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Jt(o.qa);st(c,"RID","rpc"),st(c,"SID",o.K),st(c,"AID",o.T),st(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(c,"TO",o.ja),st(c,"TYPE","xmlhttp"),or(o,c),o.m&&o.o&&$i(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=cs(Jt(c)),h.m=null,h.P=!0,nu(h,o)}r.Za=function(){this.C!=null&&(this.C=null,fs(this),Gi(this),Rt(19))};function gs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Cu(o,c){var h=null;if(o.g==c){gs(o),Hi(o),o.g=null;var f=2}else if(qi(o.h,c))h=c.D,uu(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=rs(),bt(f,new Ya(f,h)),ms(o)}else Pu(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Kf(o,c)||f==2&&Gi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Ve(o,5);break;case 4:Ve(o,10);break;case 3:Ve(o,6);break;default:Ve(o,2)}}}function Du(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Ve(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const A=!f;f=new Pe(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||as(f,"https"),cs(f),A?Lf(f.toString(),h):Bf(f.toString(),h)}else Rt(2);o.G=0,o.l&&o.l.sa(c),xu(o),Su(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function xu(o){if(o.G=0,o.ka=[],o.l){const c=cu(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Nu(o,c,h){var f=h instanceof Pe?Jt(h):new Pe(h);if(f.g!="")c&&(f.g=c+"."+f.g),us(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var b=new Pe(null);f&&as(b,f),c&&(b.g=c),A&&us(b,A),h&&(b.l=h),f=b}return h=o.D,c=o.ya,h&&c&&st(f,h,c),st(f,"VER",o.la),or(o,f),f}function ku(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new ls({eb:h})):new at(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}r=Mu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ps(){}ps.prototype.g=function(o,c){return new Dt(o,c)};function Dt(o,c){Et.call(this),this.g=new Au(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new nn(this)}C(Dt,Et),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ki(this.g)},Dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ni(o),o=h);c.i.push(new Pf(c.Ya++,o)),c.G==3&&ms(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ki(this.g),delete this.g,Dt.aa.N.call(this)};function Ou(o){Mi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Ou,Mi);function Fu(){Oi.call(this),this.status=1}C(Fu,Oi);function nn(o){this.g=o}C(nn,Mu),nn.prototype.ua=function(){bt(this.g,"a")},nn.prototype.ta=function(o){bt(this.g,new Ou(o))},nn.prototype.sa=function(o){bt(this.g,new Fu)},nn.prototype.ra=function(){bt(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Ul=function(){return new ps},Bl=function(){return rs()},Ll=be,po={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,Ss=ss,Za.COMPLETE="complete",Fl=Za,Qa.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",Et.prototype.listen=Et.prototype.K,dr=Qa,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,Ol=at}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const Ju="@firebase/firestore",Xu="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Pl("@firebase/firestore");function hn(){return $e.logLevel}function V(r,...t){if($e.logLevel<=H.DEBUG){const e=t.map(Ko);$e.debug(`Firestore (${Bn}): ${r}`,...e)}}function ct(r,...t){if($e.logLevel<=H.ERROR){const e=t.map(Ko);$e.error(`Firestore (${Bn}): ${r}`,...e)}}function In(r,...t){if($e.logLevel<=H.WARN){const e=t.map(Ko);$e.warn(`Firestore (${Bn}): ${r}`,...e)}}function Ko(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,jl(r,n,e)}function jl(r,t,e){let n=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ct(n),new Error(n)}function L(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||jl(t,s,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ln{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class bg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Rg{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new ql(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Pg{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Vg{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Pg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,lg(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){L(this.o===void 0,3512);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Yu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Dg(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function _o(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return Zi(s)===Zi(i)?q(s,i):Zi(s)?1:-1}return q(r.length,t.length)}const xg=55296,Ng=57343;function Zi(r){const t=r.charCodeAt(0);return t>=xg&&t<=Ng}function En(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function zl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="__name__";class jt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return jt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=jt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return q(t.length,e.length)}static compareSegments(t,e){const n=jt.isNumericId(t),s=jt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?jt.extractNumericId(t).compare(jt.extractNumericId(e)):_o(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ge.fromString(t.substring(4,t.length-2))}}class Z extends jt{construct(t,e,n){return new Z(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const kg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends jt{construct(t,e,n){return new ot(t,e,n)}static isValidIdentifier(t){return kg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zu}static keyField(){return new ot([Zu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Z.fromString(t))}static fromName(t){return new k(Z.fromString(t).popFirst(5))}static empty(){return new k(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Z(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(r,t,e){if(!e)throw new M(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Og(r,t,e,n){if(t===!0&&n===!0)throw new M(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function tc(r){if(!k.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $l(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ho(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function pe(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ho(r);throw new M(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Kr(r,t){if(!$l(r))throw new M(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new M(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=-62135596800,nc=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*nc);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ec)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nc}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Kr(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ec;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:dt("string",X._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new X(0,0))}static max(){return new U(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=-1;class js{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function yo(r){return r.fields.find(t=>t.kind===2)}function xe(r){return r.fields.filter(t=>t.kind!==2)}js.UNKNOWN_ID=-1;class bs{constructor(t,e){this.fieldPath=t,this.kind=e}}class Dr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Dr(0,Ot.min())}}function Kl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new Ot(s,k.empty(),t)}function Gl(r){return new Ot(r.readTime,r.key,Tn)}class Ot{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ot(U.min(),k.empty(),Tn)}static max(){return new Ot(U.max(),k.empty(),Tn)}}function Qo(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ql{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Hl)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new v((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof v?e:v.resolve(e)}catch(e){return v.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):v.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):v.reject(e)}static resolve(t){return new v((e,n)=>{e(t)})}static reject(t){return new v((e,n)=>{n(t)})}static waitFor(t){return new v((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=v.resolve(!1);for(const n of t)e=e.next(s=>s?v.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new v((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(m=>{a[d]=m,++u,u===i&&n(a)},m=>s(m))}})}static doWhile(t,e){return new v((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="SimpleDb";class oi{static open(t,e,n,s){try{return new oi(e,t.transaction(s,n))}catch(i){throw new yr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Zt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new yr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Wo(n.target.error);this.S.reject(new yr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(V(xt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Lg(e)}}class _e{static delete(t){return V(xt,"Removing database:",t),Me(El().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!bl())return!1;if(_e.F())return!0;const t=Ls(),e=_e.M(t),n=0<e&&e<10,s=Wl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,_e.M(Ls())===12.2&&ct("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(V(xt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new yr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new M(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new M(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new yr(t,a))},s.onupgradeneeded=i=>{V(xt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next(()=>{V(xt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const u=oi.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.C(),d)).catch(d=>(u.abort(d),v.reject(d))).toPromise();return l.catch(()=>{}),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(V(xt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Wl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Fg{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return Me(this.U.delete())}}class yr extends M{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ve(r){return r.name==="IndexedDbTransactionError"}class Lg{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(V(xt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(V(xt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Me(n)}add(t){return V(xt,"ADD",this.store.name,t,t),Me(this.store.add(t))}get(t){return Me(this.store.get(t)).next(e=>(e===void 0&&(e=null),V(xt,"GET",this.store.name,t,e),e))}delete(t){return V(xt,"DELETE",this.store.name,t),Me(this.store.delete(t))}count(){return V(xt,"COUNT",this.store.name),Me(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new v((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.H(i,(u,l)=>{a.push(l)}).next(()=>a)}}Y(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new v((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}Z(t,e){V(xt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const s=this.cursor(n);return this.H(s,(i,a,u)=>u.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new v((n,s)=>{e.onerror=i=>{const a=Wo(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}H(t,e){const n=[];return new v((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Fg(u),d=e(u.primaryKey,u.value,l);if(d instanceof v){const m=d.catch(g=>(l.done(),v.reject(g)));n.push(m)}l.isDone?s():l.G===null?u.continue():u.continue(l.G)}}).next(()=>v.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Me(r){return new v((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Wo(n.target.error);e(s)}})}let rc=!1;function Wo(r){const t=_e.M(Ls());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rc||(rc=!0,setTimeout(()=>{throw n},0)),n}}return r}const Ir="IndexBackfiller";class Bg{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){V(Ir,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();V(Ir,`Documents written: ${e}`)}catch(e){ve(e)?V(Ir,"Ignoring IndexedDB error during index backfill: ",e):await we(e)}await this.re(6e4)})}}class Ug{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return V(Ir,`Processing collection: ${a}`),this.oe(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this._e(s,i)).next(u=>(V(Ir,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Gl(i);Qo(a,n)>0&&(n=a)}),new Ot(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ct.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=-1;function ai(r){return r==null}function xr(r){return r===0&&1/r==-1/0}function Jl(r){return typeof r=="number"&&Number.isInteger(r)&&!xr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="";function St(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=sc(t)),t=jg(r.get(e),t);return sc(t)}function jg(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case qs:e+="";break;default:e+=i}}return e}function sc(r){return r+qs+""}function zt(r){const t=r.length;if(L(t>=2,64408,{path:r}),t===2)return L(r.charAt(0)===qs&&r.charAt(1)==="",56145,{path:r}),Z.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(qs,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new Z(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="remoteDocuments",Gr="owner",sn="owner",Nr="mutationQueues",qg="userId",Ut="mutations",ic="batchId",Be="userMutationsIndex",oc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r,t){return[r,St(t)]}function Xl(r,t,e){return[r,St(t),e]}const zg={},wn="documentMutations",zs="remoteDocumentsV14",$g=["prefixPath","collectionGroup","readTime","documentId"],Ps="documentKeyIndex",Kg=["prefixPath","collectionGroup","documentId"],Yl="collectionGroupIndex",Gg=["collectionGroup","readTime","prefixPath","documentId"],kr="remoteDocumentGlobal",Io="remoteDocumentGlobalKey",vn="targets",Zl="queryTargetsIndex",Hg=["canonicalId","targetId"],An="targetDocuments",Qg=["targetId","path"],Jo="documentTargetsIndex",Wg=["path","targetId"],$s="targetGlobalKey",je="targetGlobal",Mr="collectionParents",Jg=["collectionId","parent"],Sn="clientMetadata",Xg="clientId",ui="bundles",Yg="bundleId",ci="namedQueries",Zg="name",Xo="indexConfiguration",tp="indexId",Eo="collectionGroupIndex",ep="collectionGroup",Er="indexState",np=["indexId","uid"],th="sequenceNumberIndex",rp=["uid","sequenceNumber"],Tr="indexEntries",sp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eh="documentKeyIndex",ip=["indexId","uid","orderedDocumentKey"],li="documentOverlays",op=["userId","collectionPath","documentId"],To="collectionPathOverlayIndex",ap=["userId","collectionPath","largestBatchId"],nh="collectionGroupOverlayIndex",up=["userId","collectionGroup","largestBatchId"],Yo="globals",cp="name",rh=[Nr,Ut,wn,Ne,vn,Gr,je,An,Sn,kr,Mr,ui,ci],lp=[...rh,li],sh=[Nr,Ut,wn,zs,vn,Gr,je,An,Sn,kr,Mr,ui,ci,li],ih=sh,Zo=[...ih,Xo,Er,Tr],hp=Zo,oh=[...Zo,Yo],dp=oh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Ql{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function mt(r,t){const e=F(r);return _e.O(e.le,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Xe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function ah(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Is(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Is(this.root,t,this.comparator,!1)}getReverseIterator(){return new Is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Is(this.root,t,this.comparator,!0)}}class Is{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new yt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new uc(this.data.getIterator())}getIteratorFrom(t){return new uc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Y(this.comparator);return e.data=t,e}}class uc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function on(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new Y(ot.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return En(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uh("Invalid base64 string: "+i):i}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const fp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(r){if(L(!!r,39018),typeof r=="string"){let t=0;const e=fp.exec(r);if(L(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ne(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="server_timestamp",lh="__type__",hh="__previous_value__",dh="__local_write_time__";function ta(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[lh])==null?void 0:n.stringValue)===ch}function hi(r){const t=r.mapValue.fields[hh];return ta(t)?hi(t):t}function Or(r){const t=ee(r.mapValue.fields[dh].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e,n,s,i,a,u,l,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m}}const Fr="(default)";class Ke{constructor(t,e){this.projectId=t,this.database=e||Fr}static empty(){return new Ke("","")}get isDefaultDatabase(){return this.database===Fr}isEqual(t){return t instanceof Ke&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="__type__",fh="__max__",de={mapValue:{fields:{__type__:{stringValue:fh}}}},na="__vector__",bn="value",Vs={nullValue:"NULL_VALUE"};function ye(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ta(r)?4:mh(r)?9007199254740991:di(r)?10:11:O(28295,{value:r})}function Qt(r,t){if(r===t)return!0;const e=ye(r);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Or(r).isEqual(Or(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ee(s.timestampValue),u=ee(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ne(s.bytesValue).isEqual(ne(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=it(s.doubleValue),u=it(i.doubleValue);return a===u?xr(a)===xr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return En(r.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(ac(a)!==ac(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Qt(a[l],u[l])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function Lr(r,t){return(r.values||[]).find(e=>Qt(e,t))!==void 0}function Ie(r,t){if(r===t)return 0;const e=ye(r),n=ye(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=it(i.integerValue||i.doubleValue),l=it(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return cc(r.timestampValue,t.timestampValue);case 4:return cc(Or(r),Or(t));case 5:return _o(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ne(i),l=ne(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=q(u[d],l[d]);if(m!==0)return m}return q(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=q(it(i.latitude),it(a.latitude));return u!==0?u:q(it(i.longitude),it(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return lc(r.arrayValue,t.arrayValue);case 10:return function(i,a){var I,R,C,N;const u=i.fields||{},l=a.fields||{},d=(I=u[bn])==null?void 0:I.arrayValue,m=(R=l[bn])==null?void 0:R.arrayValue,g=q(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((N=m==null?void 0:m.values)==null?void 0:N.length)||0);return g!==0?g:lc(d,m)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===de.mapValue&&a===de.mapValue)return 0;if(i===de.mapValue)return 1;if(a===de.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const I=_o(l[g],m[g]);if(I!==0)return I;const R=Ie(u[l[g]],d[m[g]]);if(R!==0)return R}return q(l.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function cc(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=ee(r),n=ee(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function lc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Ie(e[s],n[s]);if(i)return i}return q(e.length,n.length)}function Rn(r){return vo(r)}function vo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ee(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ne(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return k.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=vo(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${vo(e.fields[a])}`;return s+"}"}(r.mapValue):O(61005,{value:r})}function Cs(r){switch(ye(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=hi(r);return t?16+Cs(t):16;case 5:return 2*r.stringValue.length;case 6:return ne(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Cs(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Xe(n.fields,(i,a)=>{s+=i.length+Cs(a)}),s}(r.mapValue);default:throw O(13486,{value:r})}}function ra(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Ao(r){return!!r&&"integerValue"in r}function Br(r){return!!r&&"arrayValue"in r}function hc(r){return!!r&&"nullValue"in r}function dc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ds(r){return!!r&&"mapValue"in r}function di(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ea])==null?void 0:n.stringValue)===na}function wr(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Xe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=wr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wr(r.arrayValue.values[e]);return t}return{...r}}function mh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===fh}const gh={mapValue:{fields:{[ea]:{stringValue:na},[bn]:{arrayValue:{}}}}};function gp(r){return"nullValue"in r?Vs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ra(Ke.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?di(r)?gh:{mapValue:{}}:O(35942,{value:r})}function pp(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ra(Ke.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?gh:"mapValue"in r?di(r)?{mapValue:{}}:de:O(61959,{value:r})}function fc(r,t){const e=Ie(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function mc(r,t){const e=Ie(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ds(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wr(e)}setAll(t){let e=ot.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=wr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ds(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Xe(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Vt(wr(this.value))}}function ph(r){const t=[];return Xe(r.fields,(e,n)=>{const s=new ot([e]);if(Ds(n)){const i=ph(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ut(t,0,U.min(),U.min(),U.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,s){return new ut(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new ut(t,2,e,U.min(),U.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,U.min(),U.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e){this.position=t,this.inclusive=e}}function gc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(a.referenceValue),e.key):n=Ie(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function pc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Qt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e="asc"){this.field=t,this.dir=e}}function _p(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{}class K extends _h{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new yp(t,e,n):e==="array-contains"?new Tp(t,n):e==="in"?new vh(t,n):e==="not-in"?new wp(t,n):e==="array-contains-any"?new vp(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ip(t,n):new Ep(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ie(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends _h{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new tt(t,e)}matches(t){return Vn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vn(r){return r.op==="and"}function So(r){return r.op==="or"}function sa(r){return yh(r)&&Vn(r)}function yh(r){for(const t of r.filters)if(t instanceof tt)return!1;return!0}function bo(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+Rn(r.value);if(sa(r))return r.filters.map(t=>bo(t)).join(",");{const t=r.filters.map(e=>bo(e)).join(",");return`${r.op}(${t})`}}function Ih(r,t){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&Qt(n.value,s.value)}(r,t):r instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Ih(a,s.filters[u]),!0):!1}(r,t):void O(19439)}function Eh(r,t){const e=r.filters.concat(t);return tt.create(e,r.op)}function Th(r){return r instanceof K?function(e){return`${e.field.canonicalString()} ${e.op} ${Rn(e.value)}`}(r):r instanceof tt?function(e){return e.op.toString()+" {"+e.getFilters().map(Th).join(" ,")+"}"}(r):"Filter"}class yp extends K{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ip extends K{constructor(t,e){super(t,"in",e),this.keys=wh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ep extends K{constructor(t,e){super(t,"not-in",e),this.keys=wh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function wh(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>k.fromName(n.referenceValue))}class Tp extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Br(e)&&Lr(e.arrayValue,this.value)}}class vh extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Lr(this.value.arrayValue,e)}}class wp extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Lr(this.value.arrayValue,e)}}class vp extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Br(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Lr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Te=null}}function Ro(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Ap(r,t,e,n,s,i,a)}function Ge(r){const t=F(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>bo(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ai(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Rn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Rn(n)).join(",")),t.Te=e}return t.Te}function Hr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!_p(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ih(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!pc(r.startAt,t.startAt)&&pc(r.endAt,t.endAt)}function Gs(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Hs(r,t){return r.filters.filter(e=>e instanceof K&&e.field.isEqual(t))}function _c(r,t,e){let n=Vs,s=!0;for(const i of Hs(r,t)){let a=Vs,u=!0;switch(i.op){case"<":case"<=":a=gp(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Vs}fc({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];fc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function yc(r,t,e){let n=de,s=!0;for(const i of Hs(r,t)){let a=de,u=!0;switch(i.op){case">=":case">":a=pp(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=de}mc({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];mc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ah(r,t,e,n,s,i,a,u){return new fi(r,t,e,n,s,i,a,u)}function Qr(r){return new fi(r)}function Ic(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Sp(r){return r.collectionGroup!==null}function vr(r){const t=F(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Y(ot.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Ks(i,n))}),e.has(ot.keyField().canonicalString())||t.Ie.push(new Ks(ot.keyField(),n))}return t.Ie}function Mt(r){const t=F(r);return t.Ee||(t.Ee=bp(t,vr(r))),t.Ee}function bp(r,t){if(r.limitType==="F")return Ro(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ks(s.field,i)});const e=r.endAt?new Pn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Pn(r.startAt.position,r.startAt.inclusive):null;return Ro(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Po(r,t,e){return new fi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function mi(r,t){return Hr(Mt(r),Mt(t))&&r.limitType===t.limitType}function Sh(r){return`${Ge(Mt(r))}|lt:${r.limitType}`}function dn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Th(s)).join(", ")}]`),ai(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rn(s)).join(",")),`Target(${n})`}(Mt(r))}; limitType=${r.limitType})`}function Wr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of vr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=gc(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,vr(n),s)||n.endAt&&!function(a,u,l){const d=gc(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,vr(n),s))}(r,t)}function bh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Rh(r){return(t,e)=>{let n=!1;for(const s of vr(r)){const i=Rp(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Rp(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?Ie(l,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Xe(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new rt(k.comparator);function Nt(){return Pp}const Ph=new rt(k.comparator);function fr(...r){let t=Ph;for(const e of r)t=t.insert(e.key,e);return t}function Vh(r){let t=Ph;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function $t(){return Ar()}function Ch(){return Ar()}function Ar(){return new re(r=>r.toString(),(r,t)=>r.isEqual(t))}const Vp=new rt(k.comparator),Cp=new Y(k.comparator);function $(...r){let t=Cp;for(const e of r)t=t.add(e);return t}const Dp=new Y(q);function ia(){return Dp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(t)?"-0":t}}function Dh(r){return{integerValue:""+r}}function xp(r,t){return Jl(t)?Dh(t):oa(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this._=void 0}}function Np(r,t,e){return r instanceof Ur?function(s,i){const a={fields:{[lh]:{stringValue:ch},[dh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ta(i)&&(i=hi(i)),i&&(a.fields[hh]=i),{mapValue:a}}(e,t):r instanceof Cn?Nh(r,t):r instanceof Dn?kh(r,t):function(s,i){const a=xh(s,i),u=Ec(a)+Ec(s.Ae);return Ao(a)&&Ao(s.Ae)?Dh(u):oa(s.serializer,u)}(r,t)}function kp(r,t,e){return r instanceof Cn?Nh(r,t):r instanceof Dn?kh(r,t):e}function xh(r,t){return r instanceof jr?function(n){return Ao(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Ur extends gi{}class Cn extends gi{constructor(t){super(),this.elements=t}}function Nh(r,t){const e=Mh(t);for(const n of r.elements)e.some(s=>Qt(s,n))||e.push(n);return{arrayValue:{values:e}}}class Dn extends gi{constructor(t){super(),this.elements=t}}function kh(r,t){let e=Mh(t);for(const n of r.elements)e=e.filter(s=>!Qt(s,n));return{arrayValue:{values:e}}}class jr extends gi{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ec(r){return it(r.integerValue||r.doubleValue)}function Mh(r){return Br(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,e){this.field=t,this.transform=e}}function Op(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Cn&&s instanceof Cn||n instanceof Dn&&s instanceof Dn?En(n.elements,s.elements,Qt):n instanceof jr&&s instanceof jr?Qt(n.Ae,s.Ae):n instanceof Ur&&s instanceof Ur}(r.transform,t.transform)}class Fp{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class pi{}function Oh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new aa(r.key,kt.none()):new Un(r.key,r.data,kt.none());{const e=r.data,n=Vt.empty();let s=new Y(ot.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new Ae(r.key,n,new Lt(s.toArray()),kt.none())}}function Lp(r,t,e){r instanceof Un?function(s,i,a){const u=s.value.clone(),l=wc(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof Ae?function(s,i,a){if(!xs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=wc(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Fh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Sr(r,t,e,n){return r instanceof Un?function(i,a,u,l){if(!xs(i.precondition,a))return u;const d=i.value.clone(),m=vc(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof Ae?function(i,a,u,l){if(!xs(i.precondition,a))return u;const d=vc(i.fieldTransforms,l,a),m=a.data;return m.setAll(Fh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return xs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Bp(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=xh(n.transform,s||null);i!=null&&(e===null&&(e=Vt.empty()),e.set(n.field,i))}return e||null}function Tc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&En(n,s,(i,a)=>Op(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Un extends pi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ae extends pi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function wc(r,t,e){const n=new Map;L(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,kp(a,u,e[s]))}return n}function vc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Np(i,a,t))}return n}class aa extends pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lh extends pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Lp(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Sr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Sr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ch();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=Oh(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&En(this.mutations,t.mutations,(e,n)=>Tc(e,n))&&En(this.baseMutations,t.baseMutations,(e,n)=>Tc(e,n))}}class ca{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return Vp}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ca(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,G;function jp(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Bh(r){if(r===void 0)return ct("GRPC error has no .code"),P.UNKNOWN;switch(r){case ht.OK:return P.OK;case ht.CANCELLED:return P.CANCELLED;case ht.UNKNOWN:return P.UNKNOWN;case ht.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ht.INTERNAL:return P.INTERNAL;case ht.UNAVAILABLE:return P.UNAVAILABLE;case ht.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ht.NOT_FOUND:return P.NOT_FOUND;case ht.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ht.ABORTED:return P.ABORTED;case ht.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ht.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}(G=ht||(ht={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new ge([4294967295,4294967295],0);function Ac(r){const t=qp().encode(r),e=new Ml;return e.update(t),new Uint8Array(e.digest())}function Sc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ge([e,n],0),new ge([s,i],0)]}class ha{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new mr(`Invalid padding: ${e}`);if(n<0)throw new mr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new mr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ge.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(ge.fromNumber(n)));return s.compare(zp)===1&&(s=new ge([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Ac(t),[n,s]=Sc(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new ha(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=Ac(t),[n,s]=Sc(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Xr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Jr(U.min(),s,new rt(q),Nt(),$())}}class Xr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Xr(n,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Uh{constructor(t,e){this.targetId=t,this.Ce=e}}class jh{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class bc{constructor(){this.ve=0,this.Fe=Rc(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=$(),e=$(),n=$();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}}),new Xr(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Rc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $p{constructor(t){this.Ge=t,this.ze=new Map,this.je=Nt(),this.Je=Es(),this.He=Es(),this.Ye=new rt(q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Gs(i))if(n===0){const a=new k(i.path);this.et(e,a,ut.newNoDocument(a,U.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const u=this.ut(t),l=u?this.ct(u,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ne(n).toUint8Array()}catch(l){if(l instanceof uh)return In("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ha(a,s,i)}catch(l){return In(l instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const u=this.ot(a);if(u){if(i.current&&Gs(u.target)){const l=new k(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ut.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let n=$();this.He.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new Jr(t,e,this.Ye,this.je,n);return this.je=Nt(),this.Je=Es(),this.He=Es(),this.Ye=new rt(q),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new bc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new Y(q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new Y(q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new bc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Es(){return new rt(k.comparator)}function Rc(){return new rt(k.comparator)}const Kp={asc:"ASCENDING",desc:"DESCENDING"},Gp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hp={and:"AND",or:"OR"};class Qp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vo(r,t){return r.useProto3Json||ai(t)?t:{value:t}}function xn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Wp(r,t){return xn(r,t.toTimestamp())}function Pt(r){return L(!!r,49232),U.fromTimestamp(function(e){const n=ee(e);return new X(n.seconds,n.nanos)}(r))}function da(r,t){return Co(r,t).canonicalString()}function Co(r,t){const e=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function zh(r){const t=Z.fromString(r);return L(Yh(t),10190,{key:t.toString()}),t}function Qs(r,t){return da(r.databaseId,t.path)}function qe(r,t){const e=zh(t);if(e.get(1)!==r.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(Gh(e))}function $h(r,t){return da(r.databaseId,t)}function Kh(r){const t=zh(r);return t.length===4?Z.emptyPath():Gh(t)}function Do(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Gh(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Pc(r,t,e){return{name:Qs(r,t),fields:e.value.mapValue.fields}}function Jp(r,t,e){const n=qe(r,t.name),s=Pt(t.updateTime),i=t.createTime?Pt(t.createTime):U.min(),a=new Vt({mapValue:{fields:t.fields}}),u=ut.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Xp(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?P.UNKNOWN:Bh(d.code);return new M(m,d.message||"")}(a);e=new jh(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=qe(r,n.document.name),i=Pt(n.document.updateTime),a=n.document.createTime?Pt(n.document.createTime):U.min(),u=new Vt({mapValue:{fields:n.document.fields}}),l=ut.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Ns(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=qe(r,n.document),i=n.readTime?Pt(n.readTime):U.min(),a=ut.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Ns([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=qe(r,n.document),i=n.removedTargetIds||[];e=new Ns([],i,s,null)}else{if(!("filter"in t))return O(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Up(s,i),u=n.targetId;e=new Uh(u,a)}}return e}function Ws(r,t){let e;if(t instanceof Un)e={update:Pc(r,t.key,t.value)};else if(t instanceof aa)e={delete:Qs(r,t.key)};else if(t instanceof Ae)e={update:Pc(r,t.key,t.data),updateMask:r_(t.fieldMask)};else{if(!(t instanceof Lh))return O(16599,{Vt:t.type});e={verify:Qs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof Ur)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Cn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof jr)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Wp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(r,t.precondition)),e}function xo(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?kt.updateTime(Pt(i.updateTime)):i.exists!==void 0?kt.exists(i.exists):kt.none()}(t.currentDocument):kt.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new Ur;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new Cn(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new Dn(m)}else"increment"in u?l=new jr(a,u.increment):O(16584,{proto:u});const d=ot.fromServerFormat(u.fieldPath);return new Mp(d,l)}(r,s)):[];if(t.update){t.update.name;const s=qe(r,t.update.name),i=new Vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Lt(d.map(m=>ot.fromServerFormat(m)))}(t.updateMask);return new Ae(s,i,a,e,n)}return new Un(s,i,e,n)}if(t.delete){const s=qe(r,t.delete);return new aa(s,e)}if(t.verify){const s=qe(r,t.verify);return new Lh(s,e)}return O(1463,{proto:t})}function Yp(r,t){return r&&r.length>0?(L(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Pt(s.updateTime):Pt(i);return a.isEqual(U.min())&&(a=Pt(i)),new Fp(a,s.transformResults||[])}(e,t))):[]}function Hh(r,t){return{documents:[$h(r,t.path)]}}function Qh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=$h(r,s);const i=function(d){if(d.length!==0)return Xh(tt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:fn(I.field),direction:t_(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Vo(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function Wh(r){let t=Kh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=function(g){const I=Jh(g);return I instanceof tt&&sa(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(I=>function(C){return new Ks(mn(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(g){let I;return I=typeof g=="object"?g.value:g,ai(I)?null:I}(e.limit));let l=null;e.startAt&&(l=function(g){const I=!!g.before,R=g.values||[];return new Pn(R,I)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const I=!g.before,R=g.values||[];return new Pn(R,I)}(e.endAt)),Ah(t,s,a,i,u,"F",l,d)}function Zp(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Jh(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=mn(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=mn(e.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mn(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(e.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return K.create(mn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return tt.create(e.compositeFilter.filters.map(n=>Jh(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function t_(r){return Kp[r]}function e_(r){return Gp[r]}function n_(r){return Hp[r]}function fn(r){return{fieldPath:r.canonicalString()}}function mn(r){return ot.fromServerFormat(r.fieldPath)}function Xh(r){return r instanceof K?function(e){if(e.op==="=="){if(dc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NAN"}};if(hc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NAN"}};if(hc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(e.field),op:e_(e.op),value:e.value}}}(r):r instanceof tt?function(e){const n=e.getFilters().map(s=>Xh(s));return n.length===1?n[0]:{compositeFilter:{op:n_(e.op),filters:n}}}(r):O(54877,{filter:r})}function r_(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,n,s,i=U.min(),a=U.min(),u=lt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.yt=t}}function s_(r,t){let e;if(t.document)e=Jp(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=k.fromSegments(t.noDocument.path),s=Qe(t.noDocument.readTime);e=ut.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=k.fromSegments(t.unknownDocument.path),s=Qe(t.unknownDocument.version);e=ut.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new X(s[0],s[1]);return U.fromTimestamp(i)}(t.readTime)),e}function Vc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Js(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Qs(i,a.key),fields:a.data.value.mapValue.fields,updateTime:xn(i,a.version.toTimestamp()),createTime:xn(i,a.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:He(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:He(t.version)}}return n}function Js(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function He(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Qe(r){const t=new X(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function Oe(r,t){const e=(t.baseMutations||[]).map(i=>xo(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>xo(r.yt,i)),s=X.fromMillis(t.localWriteTimeMs);return new ua(t.batchId,s,e,n)}function gr(r){const t=Qe(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Qe(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Mt(Qr(Kh(i.documents[0])))}(r.query):function(i){return Mt(Wh(i))}(r.query),new Yt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function td(r,t){const e=He(t.snapshotVersion),n=He(t.lastLimboFreeSnapshotVersion);let s;s=Gs(t.target)?Hh(r.yt,t.target):Qh(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ge(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function ed(r){const t=Wh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Po(t,t.limit,"L"):t}function to(r,t){return new la(t.largestBatchId,xo(r.yt,t.overlayMutation))}function Cc(r,t){const e=t.path.lastSegment();return[r,St(t.path.popLast()),e]}function Dc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:He(n.readTime),documentKey:St(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{getBundleMetadata(t,e){return xc(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Qe(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return xc(t).put(function(s){return{bundleId:s.id,createTime:He(Pt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Nc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:ed(i.bundledQuery),readTime:Qe(i.readTime)}}(n)})}saveNamedQuery(t,e){return Nc(t).put(function(s){return{name:s.name,readTime:He(Pt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function xc(r){return mt(r,ui)}function Nc(r){return mt(r,ci)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new _i(t,n)}getOverlay(t,e){return ar(t).get(Cc(this.userId,e)).next(n=>n?to(this.serializer,n):null)}getOverlays(t,e){const n=$t();return v.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new la(e,a);s.push(this.St(t,u))}),v.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(St(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ar(t).Z(To,u))}),v.waitFor(i)}getOverlaysForCollection(t,e,n){const s=$t(),i=St(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ar(t).J(To,a).next(u=>{for(const l of u){const d=to(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=$t();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ar(t).ee({index:nh,range:u},(l,d,m)=>{const g=to(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()}).next(()=>i)}St(t,e){return ar(t).put(function(s,i,a){const[u,l,d]=Cc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ws(s.yt,a.mutation)}}(this.serializer,this.userId,e))}}function ar(r){return mt(r,li)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{bt(t){return mt(t,Yo)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(it(t.integerValue));else if("doubleValue"in t){const n=it(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),xr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=ee(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(ne(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?mh(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):di(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):O(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,u;const n=t.fields||{};this.Ft(e,53);const s=bn,i=((u=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:u.length)||0;this.Ft(e,15),e.Mt(it(i)),this.Ot(s,e),this.Ct(n[s],e)}Qt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),k.fromName(t).path.forEach(n=>{this.Ft(e,60),this.Ut(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Fe.Kt=new Fe;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=255;function a_(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function kc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=a_(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class u_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(t){const e=this.en(t),n=kc(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=kc(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(an),this.sn(255)}_n(){this.an(an),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===an?(this.sn(an),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===an?(this.an(an),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class c_{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class l_{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class ur{constructor(){this.cn=new u_,this.ln=new c_(this.cn),this.hn=new l_(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e,n,s){this.Tn=t,this.In=e,this.En=n,this.dn=s}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new Le(this.Tn,this.In,this.En,n)}Rn(t,e,n){return{indexId:this.Tn,uid:t,arrayValue:ks(this.En),directionalValue:ks(this.dn),orderedDocumentKey:ks(e),documentKey:n.path.toArray()}}Vn(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ue(r,t){let e=r.Tn-t.Tn;return e!==0?e:(e=Mc(r.En,t.En),e!==0?e:(e=Mc(r.dn,t.dn),e!==0?e:k.comparator(r.In,t.In)))}function Mc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function ks(r){return Sl()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function Oc(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Fc{constructor(t){this.mn=new Y((e,n)=>ot.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const n=e;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(t){if(L(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=yo(t);if(e!==void 0&&!this.wn(e))return!1;const n=xe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const u=this.mn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.Sn(u,l)||!this.bn(this.fn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.fn.length||!this.bn(this.fn[a++],u))return!1}return!0}Dn(){if(this.pn)return null;let t=new Y(ot.comparator);const e=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new bs(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new bs(n.field,0))}for(const n of this.fn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new bs(n.field,n.dir==="asc"?0:1)));return new js(js.UNKNOWN_ID,this.collectionId,e,Dr.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(r){var e,n;if(L(r instanceof K||r instanceof tt,20012),r instanceof K){if(r instanceof vh){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>K.create(r.field,"==",i)))||[];return tt.create(s,"or")}return r}const t=r.filters.map(s=>nd(s));return tt.create(t,r.op)}function h_(r){if(r.getFilters().length===0)return[];const t=Mo(nd(r));return L(rd(t),7391),No(t)||ko(t)?[t]:t.getFilters()}function No(r){return r instanceof K}function ko(r){return r instanceof tt&&sa(r)}function rd(r){return No(r)||ko(r)||function(e){if(e instanceof tt&&So(e)){for(const n of e.getFilters())if(!No(n)&&!ko(n))return!1;return!0}return!1}(r)}function Mo(r){if(L(r instanceof K||r instanceof tt,34018),r instanceof K)return r;if(r.filters.length===1)return Mo(r.filters[0]);const t=r.filters.map(n=>Mo(n));let e=tt.create(t,r.op);return e=Xs(e),rd(e)?e:(L(e instanceof tt,64498),L(Vn(e),40251),L(e.filters.length>1,57927),e.filters.reduce((n,s)=>fa(n,s)))}function fa(r,t){let e;return L(r instanceof K||r instanceof tt,38388),L(t instanceof K||t instanceof tt,25473),e=r instanceof K?t instanceof K?function(s,i){return tt.create([s,i],"and")}(r,t):Lc(r,t):t instanceof K?Lc(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),Vn(s)&&Vn(i))return Eh(s,i.getFilters());const a=So(s)?s:i,u=So(s)?i:s,l=a.filters.map(d=>fa(d,u));return tt.create(l,"or")}(r,t),Xs(e)}function Lc(r,t){if(Vn(t))return Eh(t,r.getFilters());{const e=t.filters.map(n=>fa(r,n));return tt.create(e,"or")}}function Xs(r){if(L(r instanceof K||r instanceof tt,11850),r instanceof K)return r;const t=r.getFilters();if(t.length===1)return Xs(t[0]);if(yh(r))return r;const e=t.map(s=>Xs(s)),n=[];return e.forEach(s=>{s instanceof K?n.push(s):s instanceof tt&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:tt.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.Cn=new ma}addToCollectionParentIndex(t,e){return this.Cn.add(e),v.resolve()}getCollectionParents(t,e){return v.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return v.resolve()}deleteFieldIndex(t,e){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,e){return v.resolve()}getDocumentsMatchingTarget(t,e){return v.resolve(null)}getIndexType(t,e){return v.resolve(0)}getFieldIndexes(t,e){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,e){return v.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,e){return v.resolve(Ot.min())}updateCollectionGroup(t,e,n){return v.resolve()}updateIndexEntries(t,e){return v.resolve()}}class ma{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Y(Z.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Y(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="IndexedDbIndexManager",Ts=new Uint8Array(0);class f_{constructor(t,e){this.databaseId=e,this.vn=new ma,this.Fn=new re(n=>Ge(n),(n,s)=>Hr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:n,parent:St(s)};return Uc(t).put(i)}return v.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[zl(e),""],!1,!0);return Uc(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n})}addFieldIndex(t,e){const n=cr(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=cn(t);return i.next(u=>{a.put(Dc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=cr(t),s=cn(t),i=un(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=cr(t),n=un(t),s=cn(t);return e.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(t,e){return v.forEach(this.Mn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Fc(n).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=un(t);let s=!0;const i=new Map;return v.forEach(this.Mn(e),a=>this.xn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=$();const u=[];return v.forEach(i,(l,d)=>{V(Bc,`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(l)} to execute ${Ge(e)}`);const m=function(B,Q){const nt=yo(Q);if(nt===void 0)return null;for(const W of Hs(B,nt.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(d,l),g=function(B,Q){const nt=new Map;for(const W of xe(Q))for(const E of Hs(B,W.fieldPath))switch(E.op){case"==":case"in":nt.set(W.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return nt.set(W.fieldPath.canonicalString(),E.value),Array.from(nt.values())}return null}(d,l),I=function(B,Q){const nt=[];let W=!0;for(const E of xe(Q)){const p=E.kind===0?_c(B,E.fieldPath,B.startAt):yc(B,E.fieldPath,B.startAt);nt.push(p.value),W&&(W=p.inclusive)}return new Pn(nt,W)}(d,l),R=function(B,Q){const nt=[];let W=!0;for(const E of xe(Q)){const p=E.kind===0?yc(B,E.fieldPath,B.endAt):_c(B,E.fieldPath,B.endAt);nt.push(p.value),W&&(W=p.inclusive)}return new Pn(nt,W)}(d,l),C=this.On(l,d,I),N=this.On(l,d,R),D=this.Nn(l,d,g),z=this.Bn(l.indexId,m,C,I.inclusive,N,R.inclusive,D);return v.forEach(z,j=>n.Y(j,e.limit).next(B=>{B.forEach(Q=>{const nt=k.fromSegments(Q.documentKey);a.has(nt)||(a=a.add(nt),u.push(nt))})}))}).next(()=>u)}return v.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=h_(tt.create(t.filters,"and")).map(n=>Ro(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const I=e?this.Ln(e[g/d]):Ts,R=this.kn(t,I,n[g%d],s),C=this.qn(t,I,i[g%d],a),N=u.map(D=>this.kn(t,I,D,!0));m.push(...this.createRange(R,C,N))}return m}kn(t,e,n,s){const i=new Le(t,k.empty(),e,n);return s?i:i.An()}qn(t,e,n,s){const i=new Le(t,k.empty(),e,n);return s?i.An():i}xn(t,e){const n=new Fc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.yn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.Mn(e);return v.forEach(s,i=>this.xn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new Y(ot.comparator),m=!1;for(const g of l.filters)for(const I of g.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?m=!0:d=d.add(I.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Qn(t,e){const n=new ur;for(const s of xe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Pn(s.kind);Fe.Kt.Dt(i,a)}return n.un()}Ln(t){const e=new ur;return Fe.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const n=new ur;return Fe.Kt.Dt(ra(this.databaseId,e),n.Pn(function(i){const a=xe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.un()}Nn(t,e,n){if(n===null)return[];let s=[];s.push(new ur);let i=0;for(const a of xe(t)){const u=n[i++];for(const l of s)if(this.Un(e,a.fieldPath)&&Br(u))s=this.Kn(s,a,u);else{const d=l.Pn(a.kind);Fe.Kt.Dt(u,d)}}return this.Wn(s)}On(t,e,n){return this.Nn(t,e,n.position)}Wn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Kn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new ur;l.seed(u.un()),Fe.Kt.Dt(a,l.Pn(e.kind)),i.push(l)}return i}Un(t,e){return!!t.filters.find(n=>n instanceof K&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=cr(t),s=cn(t);return(e?n.J(Eo,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return v.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(m,g){const I=g?new Dr(g.sequenceNumber,new Ot(Qe(g.readTime),new k(zt(g.documentKey)),g.largestBatchId)):Dr.empty(),R=m.fields.map(([C,N])=>new bs(ot.fromServerFormat(C),N));return new js(m.indexId,m.collectionGroup,R,I)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=cr(t),i=cn(t);return this.Gn(t).next(a=>s.J(Eo,IDBKeyRange.bound(e,e)).next(u=>v.forEach(u,l=>i.put(Dc(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return v.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),v.forEach(u,l=>this.zn(t,s,l).next(d=>{const m=this.jn(i,l);return d.isEqual(m)?v.resolve():this.Jn(t,i,l,d,m)}))))})}Hn(t,e,n,s){return un(t).put(s.Rn(this.uid,this.$n(n,e.key),e.key))}Yn(t,e,n,s){return un(t).delete(s.Vn(this.uid,this.$n(n,e.key),e.key))}zn(t,e,n){const s=un(t);let i=new Y(ue);return s.ee({index:eh,range:IDBKeyRange.only([n.indexId,this.uid,ks(this.$n(n,e))])},(a,u)=>{i=i.add(new Le(n.indexId,e,Oc(u.arrayValue),Oc(u.directionalValue)))}).next(()=>i)}jn(t,e){let n=new Y(ue);const s=this.Qn(e,t);if(s==null)return n;const i=yo(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Br(a))for(const u of a.arrayValue.values||[])n=n.add(new Le(e.indexId,t.key,this.Ln(u),s))}else n=n.add(new Le(e.indexId,t.key,Ts,s));return n}Jn(t,e,n,s,i){V(Bc,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,m,g,I){const R=l.getIterator(),C=d.getIterator();let N=on(R),D=on(C);for(;N||D;){let z=!1,j=!1;if(N&&D){const B=m(N,D);B<0?j=!0:B>0&&(z=!0)}else N!=null?j=!0:z=!0;z?(g(D),D=on(C)):j?(I(N),N=on(R)):(N=on(R),D=on(C))}}(s,i,ue,u=>{a.push(this.Hn(t,e,n,u))},u=>{a.push(this.Yn(t,e,n,u))}),v.waitFor(a)}Gn(t){let e=1;return cn(t).ee({index:th,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>ue(a,u)).filter((a,u,l)=>!u||ue(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=ue(a,t),l=ue(a,e);if(u===0)s[0]=t.An();else if(u>0&&l<0)s.push(a),s.push(a.An());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Zn(s[a],s[a+1]))return[];const u=s[a].Vn(this.uid,Ts,k.empty()),l=s[a+1].Vn(this.uid,Ts,k.empty());i.push(IDBKeyRange.bound(u,l))}return i}Zn(t,e){return ue(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(jc)}getMinOffset(t,e){return v.mapArray(this.Mn(e),n=>this.xn(t,n).next(s=>s||O(44426))).next(jc)}}function Uc(r){return mt(r,Mr)}function un(r){return mt(r,Tr)}function cr(r){return mt(r,Xo)}function cn(r){return mt(r,Er)}function jc(r){L(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Qo(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ot(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sd=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(r,t,e){const n=r.store(Ut),s=r.store(wn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.ee({range:a},(m,g,I)=>(u++,I.delete()));i.push(l.next(()=>{L(u===1,47070,{batchId:e.batchId})}));const d=[];for(const m of e.mutations){const g=Xl(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return v.waitFor(i).next(()=>d)}function Ys(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(sd,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);class yi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(t,e,n,s){L(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new yi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ce(t).ee({index:Be,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=gn(t),a=ce(t);return a.add({}).next(u=>{L(typeof u=="number",49019);const l=new ua(u,e,n,s),d=function(R,C,N){const D=N.baseMutations.map(j=>Ws(R.yt,j)),z=N.mutations.map(j=>Ws(R.yt,j));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:D,mutations:z}}(this.serializer,this.userId,l),m=[];let g=new Y((I,R)=>q(I.canonicalString(),R.canonicalString()));for(const I of s){const R=Xl(this.userId,I.key.path,u);g=g.add(I.key.path.popLast()),m.push(a.put(d)),m.push(i.put(R,zg))}return g.forEach(I=>{m.push(this.indexManager.addToCollectionParentIndex(t,I))}),t.addOnCommittedListener(()=>{this.Xn[u]=l.keys()}),v.waitFor(m).next(()=>l)})}lookupMutationBatch(t,e){return ce(t).get(e).next(n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Oe(this.serializer,n)):null)}er(t,e){return this.Xn[e]?v.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Xn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ce(t).ee({index:Be,range:s},(a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{tr:n}),i=Oe(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ue;return ce(t).ee({index:Be,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Ue],[this.userId,Number.POSITIVE_INFINITY]);return ce(t).J(Be,e).next(n=>n.map(s=>Oe(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Rs(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return gn(t).ee({range:s},(a,u,l)=>{const[d,m,g]=a,I=zt(m);if(d===this.userId&&e.path.isEqual(I))return ce(t).get(g).next(R=>{if(!R)throw O(61480,{nr:a,batchId:g});L(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:g}),i.push(Oe(this.serializer,R))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Y(q);const s=[];return e.forEach(i=>{const a=Rs(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=gn(t).ee({range:u},(d,m,g)=>{const[I,R,C]=d,N=zt(R);I===this.userId&&i.path.isEqual(N)?n=n.add(C):g.done()});s.push(l)}),v.waitFor(s).next(()=>this.rr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Rs(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new Y(q);return gn(t).ee({range:a},(l,d,m)=>{const[g,I,R]=l,C=zt(I);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(R)):m.done()}).next(()=>this.rr(t,u))}rr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(ce(t).get(i).next(a=>{if(a===null)throw O(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Oe(this.serializer,a))}))}),v.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return id(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),v.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return v.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return gn(t).ee({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=zt(i[1]);s.push(l)}else u.done()}).next(()=>{L(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return od(t,this.userId,e)}_r(t){return ad(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ue,lastStreamToken:""})}}function od(r,t,e){const n=Rs(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return gn(r).ee({range:i,X:!0},(u,l,d)=>{const[m,g,I]=u;m===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function ce(r){return mt(r,Ut)}function gn(r){return mt(r,wn)}function ad(r){return mt(r,Nr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new We(0)}static cr(){return new We(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const n=new We(e.highestTargetId);return e.highestTargetId=n.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>U.fromTimestamp(new X(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.lr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.hr(t,s)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(n=>(n.targetCount+=1,this.Tr(e,n),this.hr(t,n))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>ln(t).delete(e.targetId)).next(()=>this.lr(t)).next(n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.hr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return ln(t).ee((a,u)=>{const l=gr(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(t,e){return ln(t).ee((n,s)=>{const i=gr(s);e(i)})}lr(t){return zc(t).get($s).next(e=>(L(e!==null,2888),e))}hr(t,e){return zc(t).put($s,e)}Pr(t,e){return ln(t).put(td(this.serializer,e))}Tr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ge(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return ln(t).ee({range:s,index:Zl},(a,u,l)=>{const d=gr(u);Hr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=he(t);return e.forEach(a=>{const u=St(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),v.waitFor(s)}removeMatchingKeys(t,e,n){const s=he(t);return v.forEach(e,i=>{const a=St(i.path);return v.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=he(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=he(t);let i=$();return s.ee({range:n,X:!0},(a,u,l)=>{const d=zt(a[1]),m=new k(d);i=i.add(m)}).next(()=>i)}containsKey(t,e){const n=St(e.path),s=IDBKeyRange.bound([n],[zl(n)],!1,!0);let i=0;return he(t).ee({index:Jo,X:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}At(t,e){return ln(t).get(e).next(n=>n?gr(n):null)}}function ln(r){return mt(r,vn)}function zc(r){return mt(r,je)}function he(r){return mt(r,An)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="LruGarbageCollector",ud=1048576;function Kc([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class g_{constructor(t){this.Ir=t,this.buffer=new Y(Kc),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Kc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class cd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V($c,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ve(e)?V($c,"Ignoring IndexedDB error during garbage collection: ",e):await we(e)}await this.Vr(3e5)})}}class p_{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return v.resolve(Ct.ce);const n=new g_(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(qc)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qc):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),hn()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function ld(r,t){return new p_(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t,e){this.db=t,this.garbageCollector=ld(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(n,s)=>e(s))}addReference(t,e,n){return ws(t,n)}removeReference(t,e,n){return ws(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ws(t,e)}br(t,e){return function(s,i){let a=!1;return ad(s).te(u=>od(s,u,i).next(l=>(l&&(a=!0),v.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(t,(a,u)=>{if(u<=e){const l=this.br(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,U.min()),he(t).delete(function(g){return[0,St(g.path)]}(a))))});s.push(l)}}).next(()=>v.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ws(t,e)}Sr(t,e){const n=he(t);let s,i=Ct.ce;return n.ee({index:Jo},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Ct.ce&&e(new k(zt(s)),i),i=d,s=l):i=Ct.ce}).next(()=>{i!==Ct.ce&&e(new k(zt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ws(r,t){return he(r).put(function(n,s){return{targetId:0,path:St(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?v.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Ce(t).put(n)}removeEntry(t,e,n){return Ce(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Js(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Dr(t,n)))}getEntry(t,e){let n=ut.newInvalidDocument(e);return Ce(t).ee({index:Ps,range:IDBKeyRange.only(lr(e))},(s,i)=>{n=this.Cr(e,i)}).next(()=>n)}vr(t,e){let n={size:0,document:ut.newInvalidDocument(e)};return Ce(t).ee({index:Ps,range:IDBKeyRange.only(lr(e))},(s,i)=>{n={document:this.Cr(e,i),size:Ys(i)}}).next(()=>n)}getEntries(t,e){let n=Nt();return this.Fr(t,e,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Mr(t,e){let n=Nt(),s=new rt(k.comparator);return this.Fr(t,e,(i,a)=>{const u=this.Cr(i,a);n=n.insert(i,u),s=s.insert(i,Ys(a))}).next(()=>({documents:n,Or:s}))}Fr(t,e,n){if(e.isEmpty())return v.resolve();let s=new Y(Qc);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(lr(s.first()),lr(s.last())),a=s.getIterator();let u=a.getNext();return Ce(t).ee({index:Ps,range:i},(l,d,m)=>{const g=k.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Qc(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.j(lr(u)):m.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Js(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ce(t).J(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let m=Nt();for(const g of d){const I=this.Cr(k.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);I.isFoundDocument()&&(Wr(e,I)||s.has(I.key))&&(m=m.insert(I.key,I))}return m})}getAllFromCollectionGroup(t,e,n,s){let i=Nt();const a=Hc(e,n),u=Hc(e,Ot.max());return Ce(t).ee({index:Yl,range:IDBKeyRange.bound(a,u,!0)},(l,d,m)=>{const g=this.Cr(k.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(t){return new I_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Gc(t).get(Io).next(e=>(L(!!e,20021),e))}Dr(t,e){return Gc(t).put(Io,e)}Cr(t,e){if(e){const n=s_(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ut.newInvalidDocument(t)}}function dd(r){return new y_(r)}class I_ extends hd{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new re(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new Y((i,a)=>q(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Vc(this.Nr.serializer,a);s=s.add(i.path.popLast());const d=Ys(l);n+=d-u.size,e.push(this.Nr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Vc(this.Nr.serializer,a.convertToNoDocument(U.min()));e.push(this.Nr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,n)),v.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(n=>(this.Br.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:n,Or:s})=>(s.forEach((i,a)=>{this.Br.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Gc(r){return mt(r,kr)}function Ce(r){return mt(r,zs)}function lr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Hc(r,t){const e=t.documentKey.path.toArray();return[r,Js(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Qc(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=q(e[i],n[i]),s)return s;return s=q(e.length,n.length),s||(s=q(e[e.length-2],n[n.length-2]),s||q(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Sr(n.mutation,s,Lt.empty(),X.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,$()).next(()=>n))}getLocalViewOfDocuments(t,e,n=$()){const s=$t();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=fr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=$t();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,$()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Nt();const a=Ar(),u=function(){return Ar()}();return e.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ae)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Sr(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>u.set(d,new E_(m,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const n=Ar();let s=new rt((a,u)=>a-u),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Lt.empty();m=u.applyToLocalView(d,m),n.set(l,m);const g=(s.get(u.batchId)||$()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,g=Ch();m.forEach(I=>{if(!i.has(I)){const R=Oh(e.get(I),n.get(I));R!==null&&g.set(I,R),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return v.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return k.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Sp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):v.resolve($t());let u=Tn,l=i;return a.next(d=>v.forEach(d,(m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?v.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{l=l.insert(m,I)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,$())).next(m=>({batchId:u,changes:Vh(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(n=>{let s=fr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=fr();return this.indexManager.getCollectionParents(t,i).next(u=>v.forEach(u,l=>{const d=function(g,I){return new fi(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))});let u=fr();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&Sr(m.mutation,d,Lt.empty(),X.now()),Wr(e,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return v.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(e)),v.resolve()}getNamedQuery(t,e){return v.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:ed(s.bundledQuery),readTime:Pt(s.readTime)}}(e)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.overlays=new rt(k.comparator),this.qr=new Map}getOverlay(t,e){return v.resolve(this.overlays.get(e))}getOverlays(t,e){const n=$t();return v.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),v.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),v.resolve()}getOverlaysForCollection(t,e,n){const s=$t(),i=e.length+1,a=new k(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return v.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=$t(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=$t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return v.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new la(e,n));let i=this.qr.get(e);i===void 0&&(i=$(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return v.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,v.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.Qr=new Y(gt.$r),this.Ur=new Y(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new gt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new gt(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new k(new Z([])),n=new gt(e,t),s=new gt(e,t+1),i=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new Z([])),n=new gt(e,t),s=new gt(e,t+1);let i=$();return this.Ur.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new gt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class gt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new Y(gt.$r)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ua(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new gt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return v.resolve(a)}lookupMutationBatch(t,e){return v.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?Ue:this.tr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],a=>{const u=this.Xr(a.Yr);i.push(u)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Y(q);return e.forEach(s=>{const i=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],u=>{n=n.add(u.Yr)})}),v.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const a=new gt(new k(i),0);let u=new Y(q);return this.Zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Yr)),!0)},a),v.resolve(this.ti(u))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return v.forEach(e.mutations,s=>{const i=new gt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new gt(e,0),s=this.Zr.firstAfterOrEqual(n);return v.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.ri=t,this.docs=function(){return new rt(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return v.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=Nt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),v.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Nt();const a=e.path,u=new k(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Qo(Gl(m),n)<=0||(s.has(m.key)||Wr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}ii(t,e){return v.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new b_(this)}getSize(t){return v.resolve(this.size)}}class b_ extends hd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),v.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.persistence=t,this.si=new re(e=>Ge(e),Hr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new ga,this.targetCount=0,this.ai=We.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),v.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new We(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,v.resolve()}updateTargetData(t,e){return this.Pr(e),v.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return v.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),v.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),v.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),v.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return v.resolve(n)}containsKey(t,e){return v.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e){this.ui={},this.overlays={},this.ci=new Ct(0),this.li=!1,this.li=!0,this.hi=new v_,this.referenceDelegate=t(this),this.Pi=new R_(this),this.indexManager=new d_,this.remoteDocumentCache=function(s){return new S_(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Zh(e),this.Ii=new T_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new w_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new A_(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const s=new P_(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return v.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class P_ extends Ql{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.Ri=new ga,this.Vi=null}static mi(t){return new Ii(t)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),v.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),v.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),v.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.fi,n=>{const s=k.fromPath(n);return this.gi(t,s).next(i=>{i||e.removeEntry(s,U.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return v.or([()=>v.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Zs{constructor(t,e){this.persistence=t,this.pi=new re(n=>St(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=ld(this,e)}static mi(t,e){return new Zs(t,e)}Ei(){}di(t){return v.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return v.forEach(this.pi,(n,s)=>this.br(t,n,s).next(i=>i?v.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(u=>{u||(n++,i.removeEntry(a,U.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),v.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),v.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),v.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),v.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Cs(t.data.value)),e}br(t,e,n){return v.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return v.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.serializer=t}k(t,e,n,s){const i=new oi("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Gr)}(t),function(l){l.createObjectStore(Nr,{keyPath:qg}),l.createObjectStore(Ut,{keyPath:ic,autoIncrement:!0}).createIndex(Be,oc,{unique:!0}),l.createObjectStore(wn)}(t),Wc(t),function(l){l.createObjectStore(Ne)}(t));let a=v.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(An),l.deleteObjectStore(vn),l.deleteObjectStore(je)}(t),Wc(t)),a=a.next(()=>function(l){const d=l.store(je),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put($s,m)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Ut).J().next(g=>{l.deleteObjectStore(Ut),l.createObjectStore(Ut,{keyPath:ic,autoIncrement:!0}).createIndex(Be,oc,{unique:!0});const I=d.store(Ut),R=g.map(C=>I.put(C));return v.waitFor(R)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(Sn,{keyPath:Xg})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.yi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(kr)}(t),this.wi(i)))),n<7&&s>=7&&(a=a.next(()=>this.Si(i))),n<8&&s>=8&&(a=a.next(()=>this.bi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Di(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(ui,{keyPath:Yg})})(t),function(l){l.createObjectStore(ci,{keyPath:Zg})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(li,{keyPath:op});d.createIndex(To,ap,{unique:!1}),d.createIndex(nh,up,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(zs,{keyPath:$g});d.createIndex(Ps,Kg),d.createIndex(Yl,Gg)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(Ne))),n<14&&s>=14&&(a=a.next(()=>this.Fi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(Xo,{keyPath:tp,autoIncrement:!0}).createIndex(Eo,ep,{unique:!1}),l.createObjectStore(Er,{keyPath:np}).createIndex(th,rp,{unique:!1}),l.createObjectStore(Tr,{keyPath:sp}).createIndex(eh,ip,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(Er).clear()}).next(()=>{e.objectStore(Tr).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(Yo,{keyPath:cp})})(t)})),n<18&&s>=18&&Sl()&&(a=a.next(()=>{e.objectStore(Er).clear()}).next(()=>{e.objectStore(Tr).clear()})),a}wi(t){let e=0;return t.store(Ne).ee((n,s)=>{e+=Ys(s)}).next(()=>{const n={byteSize:e};return t.store(kr).put(Io,n)})}yi(t){const e=t.store(Nr),n=t.store(Ut);return e.J().next(s=>v.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Ue],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Be,a).next(u=>v.forEach(u,l=>{L(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Oe(this.serializer,l);return id(t,i.userId,d).next(()=>{})}))}))}Si(t){const e=t.store(An),n=t.store(Ne);return t.store(je).get($s).next(s=>{const i=[];return n.ee((a,u)=>{const l=new Z(a),d=function(g){return[0,St(g)]}(l);i.push(e.get(d).next(m=>m?v.resolve():(g=>e.put({targetId:0,path:St(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>v.waitFor(i))})}bi(t,e){t.createObjectStore(Mr,{keyPath:Jg});const n=e.store(Mr),s=new ma,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:St(l)})}};return e.store(Ne).ee({X:!0},(a,u)=>{const l=new Z(a);return i(l.popLast())}).next(()=>e.store(wn).ee({X:!0},([a,u,l],d)=>{const m=zt(u);return i(m.popLast())}))}Di(t){const e=t.store(vn);return e.ee((n,s)=>{const i=gr(s),a=td(this.serializer,i);return e.put(a)})}Ci(t,e){const n=e.store(Ne),s=[];return n.ee((i,a)=>{const u=e.store(zs),l=function(g){return g.document?new k(Z.fromString(g.document.name).popFirst(5)):g.noDocument?k.fromSegments(g.noDocument.path):g.unknownDocument?k.fromSegments(g.unknownDocument.path):O(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>v.waitFor(s))}Fi(t,e){const n=e.store(Ut),s=dd(this.serializer),i=new pa(Ii.mi,this.serializer.yt);return n.J().next(a=>{const u=new Map;return a.forEach(l=>{let d=u.get(l.userId)??$();Oe(this.serializer,l).keys().forEach(m=>d=d.add(m)),u.set(l.userId,d)}),v.forEach(u,(l,d)=>{const m=new pt(d),g=_i.wt(this.serializer,m),I=i.getIndexManager(m),R=yi.wt(m,this.serializer,I,i.referenceDelegate);return new fd(s,R,g,I).recalculateAndSaveOverlaysForDocumentKeys(new wo(e,Ct.ce),l).next()})})}}function Wc(r){r.createObjectStore(An,{keyPath:Qg}).createIndex(Jo,Wg,{unique:!0}),r.createObjectStore(vn,{keyPath:"targetId"}).createIndex(Zl,Hg,{unique:!0}),r.createObjectStore(je)}const le="IndexedDbPersistence",eo=18e5,no=5e3,ro="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",C_="main";class _a{constructor(t,e,n,s,i,a,u,l,d,m,g=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Mi=i,this.window=a,this.document=u,this.xi=d,this.Oi=m,this.Ni=g,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=I=>Promise.resolve(),!_a.v())throw new M(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new __(this,s),this.$i=e+C_,this.serializer=new Zh(l),this.Ui=new _e(this.$i,this.Ni,new V_(this.serializer)),this.hi=new o_,this.Pi=new m_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=dd(this.serializer),this.Ii=new i_,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,m===!1&&ct(le,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(P.FAILED_PRECONDITION,ro);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new Ct(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>vs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(ve(t))return V(le,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return V(le,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return hr(t).get(sn).next(e=>v.resolve(this.es(e)))}ts(t){return vs(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,eo)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=mt(e,Sn);return n.J().next(s=>{const i=this.ss(s,eo),a=s.filter(u=>i.indexOf(u)===-1);return v.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?v.resolve(!0):hr(t).get(sn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,no)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new M(P.FAILED_PRECONDITION,ro);return!1}}return!(!this.networkEnabled||!this.inForeground)||vs(t).J().next(n=>this.ss(n,no).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&V(le,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Gr,Sn],t=>{const e=new wo(t,Ct.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(n=>this.rs(n.updateTimeMs,e)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>vs(t).J().next(e=>this.ss(e,eo).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return yi.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new f_(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return _i.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,n){V(le,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===18?dp:l===17?oh:l===16?hp:l===15?Zo:l===14?ih:l===13?sh:l===12?lp:l===11?rh:void O(60245)}(this.Ni);let a;return this.Ui.runTransaction(t,s,i,u=>(a=new wo(u,this.ci?this.ci.next():Ct.ce),e==="readwrite-primary"?this.Hi(a).next(l=>!!l||this.Yi(a)).next(l=>{if(!l)throw ct(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new M(P.FAILED_PRECONDITION,Hl);return n(a)}).next(l=>this.Xi(a).next(()=>l)):this.Is(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Is(t){return hr(t).get(sn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,no)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new M(P.FAILED_PRECONDITION,ro)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return hr(t).put(sn,e)}static v(){return _e.v()}Zi(t){const e=hr(t);return e.get(sn).next(n=>this.es(n)?(V(le,"Releasing primary lease."),e.delete(sn)):v.resolve())}rs(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ct(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;Al()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const n=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return V(le,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ct(le,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){ct("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function hr(r){return mt(r,Gr)}function vs(r){return mt(r,Sn)}function md(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=$(),s=$();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ya(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Al()?8:Wl(Ls())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new D_;return this.Ss(t,e,a).next(u=>{if(i.result=u,this.Vs)return this.bs(t,e,a,u.size)})}).next(()=>i.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(hn()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",dn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),v.resolve()):(hn()<=H.DEBUG&&V("QueryEngine","Query:",dn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(hn()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",dn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):v.resolve())}ys(t,e){if(Ic(e))return v.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Po(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=$(...i);return this.ps.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Ds(e,u);return this.Cs(e,d,a,l.readTime)?this.ys(t,Po(e,null,"F")):this.vs(t,d,e,l)}))})))}ws(t,e,n,s){return Ic(e)||s.isEqual(U.min())?v.resolve(null):this.ps.getDocuments(t,n).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,n,s)?v.resolve(null):(hn()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dn(e)),this.vs(t,a,e,Kl(s,Tn)).next(u=>u))})}Ds(t,e){let n=new Y(Rh(t));return e.forEach((s,i)=>{Wr(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return hn()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ot.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="LocalStore",x_=3e8;class N_{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new rt(q),this.xs=new re(i=>Ge(i),Hr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function pd(r,t,e,n){return new N_(r,t,e,n)}async function _d(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=$();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function k_(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(u,l,d,m){const g=d.batch,I=g.keys();let R=v.resolve();return I.forEach(C=>{R=R.next(()=>m.getEntry(l,C)).next(N=>{const D=d.docVersions.get(C);L(D!==null,48541),N.version.compareTo(D)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function yd(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function M_(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const u=[];t.targetChanges.forEach((m,g)=>{const I=s.get(g);if(!I)return;u.push(e.Pi.removeMatchingKeys(i,m.removedDocuments,g).next(()=>e.Pi.addMatchingKeys(i,m.addedDocuments,g)));let R=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(lt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,n)),s=s.insert(g,R),function(N,D,z){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=x_?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(I,R,m)&&u.push(e.Pi.updateTargetData(i,R))});let l=Nt(),d=$();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))}),u.push(O_(i,a,t.documentUpdates).next(m=>{l=m.ks,d=m.qs})),!n.isEqual(U.min())){const m=e.Pi.getLastRemoteSnapshotVersion(i).next(g=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(m)}return v.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ms=s,i))}function O_(r,t,e){let n=$(),s=$();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Nt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):V(Ia,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{ks:a,qs:s}})}function F_(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ue),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ti(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(i=>i?(s=i,v.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new Yt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Nn(r,t,e){const n=F(r),s=n.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ve(a))throw a;V(Ia,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function Oo(r,t,e){const n=F(r);let s=U.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const g=F(l),I=g.xs.get(m);return I!==void 0?v.resolve(g.Ms.get(I)):g.Pi.getTargetData(d,m)}(n,a,Mt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:$())).next(u=>(Td(n,bh(t),u),{documents:u,Qs:i})))}function Id(r,t){const e=F(r),n=F(e.Pi),s=e.Ms.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.At(i,t).next(a=>a?a.target:null))}function Ed(r,t){const e=F(r),n=e.Os.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.Ns.getAllFromCollectionGroup(s,t,Kl(n,Tn),Number.MAX_SAFE_INTEGER)).then(s=>(Td(e,t,s),s))}function Td(r,t,e){let n=r.Os.get(t)||U.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(t,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="firestore_clients";function Jc(r,t){return`${wd}_${r}_${t}`}const vd="firestore_mutations";function Xc(r,t,e){let n=`${vd}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const Ad="firestore_targets";function so(r,t){return`${Ad}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="SharedClientState";class ei{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Ws(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new M(s.error.code,s.error.message))),a?new ei(t,e,s.state,i):(ct(qt,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Gs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class br{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ws(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new M(n.error.code,n.error.message))),i?new br(t,n.state,s):(ct(qt,`Failed to parse target state for ID '${t}': ${e}`),null)}Gs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ni{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ws(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=ia();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Jl(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new ni(t,i):(ct(qt,`Failed to parse client data for instance '${t}': ${e}`),null)}}class Ea{constructor(t,e){this.clientId=t,this.onlineState=e}static Ws(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Ea(e.clientId,e.onlineState):(ct(qt,`Failed to parse online state: ${t}`),null)}}class Fo{constructor(){this.activeTargetIds=ia()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class io{constructor(t,e,n,s,i){this.window=t,this.Mi=e,this.persistenceKey=n,this.Js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new rt(q),this.started=!1,this.Xs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.eo=Jc(this.persistenceKey,this.Js),this.no=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Fo),this.ro=new RegExp(`^${wd}_${a}_([^_]*)$`),this.io=new RegExp(`^${vd}_${a}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${Ad}_${a}_(\\d+)$`),this.oo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this._o=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ts();for(const n of t){if(n===this.Js)continue;const s=this.getItem(Jc(this.persistenceKey,n));if(s){const i=ni.Ws(n,s);i&&(this.Zs=this.Zs.insert(i.clientId,i))}}this.ao();const e=this.storage.getItem(this.oo);if(e){const n=this.uo(e);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.no,JSON.stringify(t))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(t){let e=!1;return this.Zs.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ho(t,"pending")}updateMutationState(t,e,n){this.ho(t,e,n),this.Po(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(so(this.persistenceKey,t));if(s){const i=br.Ws(t,s);i&&(n=i.state)}}return e&&this.To.zs(t),this.ao(),n}removeLocalQueryTarget(t){this.To.js(t),this.ao()}isLocalQueryTarget(t){return this.To.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(so(this.persistenceKey,t))}updateQueryState(t,e,n){this.Io(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.Po(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Eo(t)}notifyBundleLoaded(t){this.Ao(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return V(qt,"READ",t,e),e}setItem(t,e){V(qt,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){V(qt,"REMOVE",t),this.storage.removeItem(t)}Ys(t){const e=t;if(e.storageArea===this.storage){if(V(qt,"EVENT",e.key,e.newValue),e.key===this.eo)return void ct("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.ro.test(e.key)){if(e.newValue==null){const n=this.Ro(e.key);return this.Vo(n,null)}{const n=this.mo(e.key,e.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(e.key)){if(e.newValue!==null){const n=this.fo(e.key,e.newValue);if(n)return this.po(n)}}else if(this.so.test(e.key)){if(e.newValue!==null){const n=this.yo(e.key,e.newValue);if(n)return this.wo(n)}}else if(e.key===this.oo){if(e.newValue!==null){const n=this.uo(e.newValue);if(n)return this.co(n)}}else if(e.key===this.no){const n=function(i){let a=Ct.ce;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{So:i}),a=u}catch(u){ct(qt,"Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Ct.ce&&this.sequenceNumberHandler(n)}else if(e.key===this._o){const n=this.bo(e.newValue);await Promise.all(n.map(s=>this.syncEngine.Do(s)))}}}else this.Xs.push(e)})}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(t,e,n){const s=new ei(this.currentUser,t,e,n),i=Xc(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Gs())}Po(t){const e=Xc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Eo(t){const e={clientId:this.Js,onlineState:t};this.storage.setItem(this.oo,JSON.stringify(e))}Io(t,e,n){const s=so(this.persistenceKey,t),i=new br(t,e,n);this.setItem(s,i.Gs())}Ao(t){const e=JSON.stringify(Array.from(t));this.setItem(this._o,e)}Ro(t){const e=this.ro.exec(t);return e?e[1]:null}mo(t,e){const n=this.Ro(t);return ni.Ws(n,e)}fo(t,e){const n=this.io.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return ei.Ws(new pt(i),s,e)}yo(t,e){const n=this.so.exec(t),s=Number(n[1]);return br.Ws(s,e)}uo(t){return Ea.Ws(t)}bo(t){return JSON.parse(t)}async po(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Co(t.batchId,t.state,t.error);V(qt,`Ignoring mutation for non-active user ${t.user.uid}`)}wo(t){return this.syncEngine.vo(t.targetId,t.state,t.error)}Vo(t,e){const n=e?this.Zs.insert(t,e):this.Zs.remove(t),s=this.lo(this.Zs),i=this.lo(n),a=[],u=[];return i.forEach(l=>{s.has(l)||a.push(l)}),s.forEach(l=>{i.has(l)||u.push(l)}),this.syncEngine.Fo(a,u).then(()=>{this.Zs=n})}co(t){this.Zs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}lo(t){let e=ia();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class Sd{constructor(){this.Mo=new Fo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Fo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="ConnectivityMonitor";class Zc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Yc,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(Yc,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=null;function Lo(){return As===null?As=function(){return 268435456+Math.round(2147483648*Math.random())}():As++,"0x"+As.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="RestConnection",B_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class U_{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Fr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,i){const a=Lo(),u=this.zo(t,e.toUriEncodedString());V(oo,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:d}=new URL(u),m=ii(d);return this.Jo(t,u,l,n,m).then(g=>(V(oo,`Received RPC '${t}' ${a}: `,g),g),g=>{throw In(oo,`RPC '${t}' ${a} failed with error: `,g,"url: ",u,"request:",n),g})}Ho(t,e,n,s,i,a){return this.Go(t,e,n,s,i)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const n=B_[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class q_ extends U_{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const a=Lo();return new Promise((u,l)=>{const d=new Ol;d.setWithCredentials(!0),d.listenOnce(Fl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ss.NO_ERROR:const g=d.getResponseJson();V(vt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),u(g);break;case Ss.TIMEOUT:V(vt,`RPC '${t}' ${a} timed out`),l(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ss.HTTP_ERROR:const I=d.getStatus();if(V(vt,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const N=function(z){const j=z.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(C.status);l(new M(N,C.message))}else l(new M(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new M(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(vt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);V(vt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)})}T_(t,e,n){const s=Lo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ul(),u=Bl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");V(vt,`Creating RPC '${t}' stream ${s}: ${m}`,l);const g=a.createWebChannel(m,l);this.I_(g);let I=!1,R=!1;const C=new j_({Yo:D=>{R?V(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(V(vt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),I=!0),V(vt,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},Zo:()=>g.close()}),N=(D,z,j)=>{D.listen(z,B=>{try{j(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(g,dr.EventType.OPEN,()=>{R||(V(vt,`RPC '${t}' stream ${s} transport opened.`),C.o_())}),N(g,dr.EventType.CLOSE,()=>{R||(R=!0,V(vt,`RPC '${t}' stream ${s} transport closed`),C.a_(),this.E_(g))}),N(g,dr.EventType.ERROR,D=>{R||(R=!0,In(vt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.a_(new M(P.UNAVAILABLE,"The operation could not be completed")))}),N(g,dr.EventType.MESSAGE,D=>{var z;if(!R){const j=D.data[0];L(!!j,16349);const B=j,Q=(B==null?void 0:B.error)||((z=B[0])==null?void 0:z.error);if(Q){V(vt,`RPC '${t}' stream ${s} received error:`,Q);const nt=Q.status;let W=function(y){const T=ht[y];if(T!==void 0)return Bh(T)}(nt),E=Q.message;W===void 0&&(W=P.INTERNAL,E="Unknown error status: "+nt+" with message "+Q.message),R=!0,C.a_(new M(W,E)),g.close()}else V(vt,`RPC '${t}' stream ${s} received:`,j),C.u_(j)}}),N(u,Ll.STAT_EVENT,D=>{D.stat===po.PROXY?V(vt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===po.NOPROXY&&V(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return typeof window<"u"?window:null}function Ms(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r){return new Qp(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="PersistentStream";class Pd{constructor(t,e,n,s,i,a,u,l){this.Mi=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rd(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ct(e.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new M(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return V(tl,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(V(tl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z_ extends Pd{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Xp(this.serializer,t),n=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Pt(a.readTime):U.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Do(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=Gs(l)?{documents:Hh(i,l)}:{query:Qh(i,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=qh(i,a.resumeToken);const d=Vo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=xn(i,a.snapshotVersion.toTimestamp());const d=Vo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=Zp(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Do(this.serializer),e.removeTarget=t,this.q_(e)}}class $_ extends Pd{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return L(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){L(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Yp(t.writeResults,t.commitTime),n=Pt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Do(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Ws(this.serializer,n))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{}class G_ extends K_{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,Co(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(P.UNKNOWN,i.toString())})}Ho(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(t,Co(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class H_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ct(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="RemoteStore";class Q_{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{Ye(this)&&(V(Je,"Restarting streams for network reachability change."),await async function(l){const d=F(l);d.Ea.add(4),await Yr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ti(d)}(this))})}),this.Ra=new H_(n,s)}}async function Ti(r){if(Ye(r))for(const t of r.da)await t(!0)}async function Yr(r){for(const t of r.da)await t(!1)}function wi(r,t){const e=F(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),va(e)?wa(e):qn(e).O_()&&Ta(e,t))}function kn(r,t){const e=F(r),n=qn(e);e.Ia.delete(t),n.O_()&&Vd(e,t),e.Ia.size===0&&(n.O_()?n.L_():Ye(e)&&e.Ra.set("Unknown"))}function Ta(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qn(r).Y_(t)}function Vd(r,t){r.Va.Ue(t),qn(r).Z_(t)}function wa(r){r.Va=new $p({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),qn(r).start(),r.Ra.ua()}function va(r){return Ye(r)&&!qn(r).x_()&&r.Ia.size>0}function Ye(r){return F(r).Ea.size===0}function Cd(r){r.Va=void 0}async function W_(r){r.Ra.set("Online")}async function J_(r){r.Ia.forEach((t,e)=>{Ta(r,t)})}async function X_(r,t){Cd(r),va(r)?(r.Ra.ha(t),wa(r)):r.Ra.set("Unknown")}async function Y_(r,t,e){if(r.Ra.set("Online"),t instanceof jh&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))}(r,t)}catch(n){V(Je,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ri(r,n)}else if(t instanceof Ns?r.Va.Ze(t):t instanceof Uh?r.Va.st(t):r.Va.tt(t),!e.isEqual(U.min()))try{const n=await yd(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.Va.Tt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const m=i.Ia.get(l);if(!m)return;i.Ia.set(l,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Vd(i,l);const g=new Yt(m.target,l,d,m.sequenceNumber);Ta(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){V(Je,"Failed to raise snapshot:",n),await ri(r,n)}}async function ri(r,t,e){if(!ve(t))throw t;r.Ea.add(1),await Yr(r),r.Ra.set("Offline"),e||(e=()=>yd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(Je,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Ti(r)})}function Dd(r,t){return t().catch(e=>ri(r,e,t))}async function jn(r){const t=F(r),e=Ee(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ue;for(;Z_(t);)try{const s=await F_(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,ty(t,s)}catch(s){await ri(t,s)}xd(t)&&Nd(t)}function Z_(r){return Ye(r)&&r.Ta.length<10}function ty(r,t){r.Ta.push(t);const e=Ee(r);e.O_()&&e.X_&&e.ea(t.mutations)}function xd(r){return Ye(r)&&!Ee(r).x_()&&r.Ta.length>0}function Nd(r){Ee(r).start()}async function ey(r){Ee(r).ra()}async function ny(r){const t=Ee(r);for(const e of r.Ta)t.ea(e.mutations)}async function ry(r,t,e){const n=r.Ta.shift(),s=ca.from(n,t,e);await Dd(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await jn(r)}async function sy(r,t){t&&Ee(r).X_&&await async function(n,s){if(function(a){return jp(a)&&a!==P.ABORTED}(s.code)){const i=n.Ta.shift();Ee(n).B_(),await Dd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await jn(n)}}(r,t),xd(r)&&Nd(r)}async function el(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),V(Je,"RemoteStore received new credentials");const n=Ye(e);e.Ea.add(3),await Yr(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ti(e)}async function Bo(r,t){const e=F(r);t?(e.Ea.delete(2),await Ti(e)):t||(e.Ea.add(2),await Yr(e),e.Ra.set("Unknown"))}function qn(r){return r.ma||(r.ma=function(e,n,s){const i=F(e);return i.sa(),new z_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:W_.bind(null,r),t_:J_.bind(null,r),r_:X_.bind(null,r),H_:Y_.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),va(r)?wa(r):r.Ra.set("Unknown")):(await r.ma.stop(),Cd(r))})),r.ma}function Ee(r){return r.fa||(r.fa=function(e,n,s){const i=F(e);return i.sa(),new $_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:ey.bind(null,r),r_:sy.bind(null,r),ta:ny.bind(null,r),na:ry.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await jn(r)):(await r.fa.stop(),r.Ta.length>0&&(V(Je,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Aa(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(r,t){if(ct("AsyncQueue",`${t}: ${r}`),ve(r))return new M(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{static emptySet(t){return new _n(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=fr(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new _n;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.ga=new rt(k.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Mn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Mn(t,e,_n.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class oy{constructor(){this.queries=rl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=F(e),i=s.queries;s.queries=rl(),i.forEach((a,u)=>{for(const l of u.Sa)l.onError(n)})})(this,new M(P.ABORTED,"Firestore shutting down"))}}function rl(){return new re(r=>Sh(r),mi)}async function kd(r,t){const e=F(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new iy,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Sa(a,`Initialization of query '${dn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&ba(e)}async function Md(r,t){const e=F(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function ay(r,t){const e=F(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Sa)u.Fa(s)&&(n=!0);a.wa=s}}n&&ba(e)}function uy(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function ba(r){r.Ca.forEach(t=>{t.next()})}var Uo,sl;(sl=Uo||(Uo={})).Ma="default",sl.Cache="cache";class Od{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Mn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Mn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Uo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.key=t}}class Ld{constructor(t){this.key=t}}class cy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=$(),this.mutatedKeys=$(),this.eu=Rh(t),this.tu=new _n(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new nl,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,g)=>{const I=s.get(m),R=Wr(this.query,g)?g:null,C=!!I&&this.mutatedKeys.has(I.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;I&&R?I.data.isEqual(R.data)?C!==N&&(n.track({type:3,doc:R}),D=!0):this.su(I,R)||(n.track({type:2,doc:R}),D=!0,(l&&this.eu(R,l)>0||d&&this.eu(R,d)<0)&&(u=!0)):!I&&R?(n.track({type:0,doc:R}),D=!0):I&&!R&&(n.track({type:1,doc:I}),D=!0,(l||d)&&(u=!0)),D&&(R?(a=a.add(R),i=N?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,Cs:u,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,g)=>function(R,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:D})}};return N(R)-N(C)}(m.type,g.type)||this.eu(m.doc,g.doc)),this.ou(n),s=s??!1;const u=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new Mn(this.query,t.tu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=$(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new Ld(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new Fd(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=$();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Mn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zn="SyncEngine";class ly{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hy{constructor(t){this.key=t,this.hu=!1}}class dy{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new re(u=>Sh(u),mi),this.Iu=new Map,this.Eu=new Set,this.du=new rt(k.comparator),this.Au=new Map,this.Ru=new ga,this.Vu={},this.mu=new Map,this.fu=We.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fy(r,t,e=!0){const n=vi(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Bd(n,t,e,!0),s}async function my(r,t){const e=vi(r);await Bd(e,t,!0,!1)}async function Bd(r,t,e,n){const s=await ti(r.localStore,Mt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await Ra(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&wi(r.remoteStore,s),u}async function Ra(r,t,e,n,s){r.pu=(g,I,R)=>async function(N,D,z,j){let B=D.view.ru(z);B.Cs&&(B=await Oo(N.localStore,D.query,!1).then(({documents:E})=>D.view.ru(E,B)));const Q=j&&j.targetChanges.get(D.targetId),nt=j&&j.targetMismatches.get(D.targetId)!=null,W=D.view.applyChanges(B,N.isPrimaryClient,Q,nt);return jo(N,D.targetId,W.au),W.snapshot}(r,g,I,R);const i=await Oo(r.localStore,t,!0),a=new cy(t,i.Qs),u=a.ru(i.documents),l=Xr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);jo(r,e,d.au);const m=new ly(t,e,a);return r.Tu.set(t,m),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function gy(r,t,e){const n=F(r),s=n.Tu.get(t),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(a=>!mi(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Nn(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&kn(n.remoteStore,s.targetId),On(n,s.targetId)}).catch(we)):(On(n,s.targetId),await Nn(n.localStore,s.targetId,!0))}async function py(r,t){const e=F(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),kn(e.remoteStore,n.targetId))}async function _y(r,t,e){const n=Da(r);try{const s=await function(a,u){const l=F(a),d=X.now(),m=u.reduce((R,C)=>R.add(C.key),$());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Nt(),N=$();return l.Ns.getEntries(R,m).next(D=>{C=D,C.forEach((z,j)=>{j.isValidDocument()||(N=N.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,C)).next(D=>{g=D;const z=[];for(const j of u){const B=Bp(j,g.get(j.key).overlayedDocument);B!=null&&z.push(new Ae(j.key,B,ph(B.value.mapValue),kt.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,z,u)}).next(D=>{I=D;const z=D.applyToLocalDocumentSet(g,N);return l.documentOverlayCache.saveOverlays(R,D.batchId,z)})}).then(()=>({batchId:I.batchId,changes:Vh(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new rt(q)),d=d.insert(u,l),a.Vu[a.currentUser.toKey()]=d}(n,s.batchId,e),await Se(n,s.changes),await jn(n.remoteStore)}catch(s){const i=Sa(s,"Failed to persist write");e.reject(i)}}async function Ud(r,t){const e=F(r);try{const n=await M_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?L(a.hu,14607):s.removedDocuments.size>0&&(L(a.hu,42227),a.hu=!1))}),await Se(e,n,t)}catch(n){await we(n)}}function il(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=F(a);l.onlineState=u;let d=!1;l.queries.forEach((m,g)=>{for(const I of g.Sa)I.va(u)&&(d=!0)}),d&&ba(l)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function yy(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let a=new rt(k.comparator);a=a.insert(i,ut.newNoDocument(i,U.min()));const u=$().add(i),l=new Jr(U.min(),new Map,new rt(q),a,u);await Ud(n,l),n.du=n.du.remove(i),n.Au.delete(t),Ca(n)}else await Nn(n.localStore,t,!1).then(()=>On(n,t,e)).catch(we)}async function Iy(r,t){const e=F(r),n=t.batch.batchId;try{const s=await k_(e.localStore,t);Va(e,n,null),Pa(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Se(e,s)}catch(s){await we(s)}}async function Ey(r,t,e){const n=F(r);try{const s=await function(a,u){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(L(g!==null,37113),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,t);Va(n,t,e),Pa(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Se(n,s)}catch(s){await we(s)}}function Pa(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function Va(r,t,e){const n=F(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function On(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||jd(r,n)})}function jd(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(kn(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Ca(r))}function jo(r,t,e){for(const n of e)n instanceof Fd?(r.Ru.addReference(n.key,t),Ty(r,n)):n instanceof Ld?(V(zn,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||jd(r,n.key)):O(19791,{wu:n})}function Ty(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(V(zn,"New document in limbo: "+e),r.Eu.add(n),Ca(r))}function Ca(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new k(Z.fromString(t)),n=r.fu.next();r.Au.set(n,new hy(e)),r.du=r.du.insert(e,n),wi(r.remoteStore,new Yt(Mt(Qr(e.path)),n,"TargetPurposeLimboResolution",Ct.ce))}}async function Se(r,t,e){const n=F(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((u,l)=>{a.push(n.pu(l,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=ya.As(l.targetId,d);i.push(g)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(l,d){const m=F(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>v.forEach(d,I=>v.forEach(I.Es,R=>m.persistence.referenceDelegate.addReference(g,I.targetId,R)).next(()=>v.forEach(I.ds,R=>m.persistence.referenceDelegate.removeReference(g,I.targetId,R)))))}catch(g){if(!ve(g))throw g;V(Ia,"Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const R=m.Ms.get(I),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);m.Ms=m.Ms.insert(I,N)}}}(n.localStore,i))}async function wy(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){V(zn,"User change. New user:",t.toKey());const n=await _d(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(u=>{u.forEach(l=>{l.reject(new M(P.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Se(e,n.Ls)}}function vy(r,t){const e=F(r),n=e.Au.get(t);if(n&&n.hu)return $().add(n.key);{let s=$();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}async function Ay(r,t){const e=F(r),n=await Oo(e.localStore,t.query,!0),s=t.view.cu(n);return e.isPrimaryClient&&jo(e,t.targetId,s.au),s}async function Sy(r,t){const e=F(r);return Ed(e.localStore,t).then(n=>Se(e,n))}async function by(r,t,e,n){const s=F(r),i=await function(u,l){const d=F(u),m=F(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>m.er(g,l).next(I=>I?d.localDocuments.getDocuments(g,I):v.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await jn(s.remoteStore):e==="acknowledged"||e==="rejected"?(Va(s,t,n||null),Pa(s,t),function(u,l){F(F(u).mutationQueue).ir(l)}(s.localStore,t)):O(6720,"Unknown batchState",{Su:e}),await Se(s,i)):V(zn,"Cannot apply mutation batch with id: "+t)}async function Ry(r,t){const e=F(r);if(vi(e),Da(e),t===!0&&e.gu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await ol(e,n.toArray());e.gu=!0,await Bo(e.remoteStore,!0);for(const i of s)wi(e.remoteStore,i)}else if(t===!1&&e.gu!==!1){const n=[];let s=Promise.resolve();e.Iu.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(On(e,a),Nn(e.localStore,a,!0))),kn(e.remoteStore,a)}),await s,await ol(e,n),function(a){const u=F(a);u.Au.forEach((l,d)=>{kn(u.remoteStore,d)}),u.Ru.Jr(),u.Au=new Map,u.du=new rt(k.comparator)}(e),e.gu=!1,await Bo(e.remoteStore,!1)}}async function ol(r,t,e){const n=F(r),s=[],i=[];for(const a of t){let u;const l=n.Iu.get(a);if(l&&l.length!==0){u=await ti(n.localStore,Mt(l[0]));for(const d of l){const m=n.Tu.get(d),g=await Ay(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await Id(n.localStore,a);u=await ti(n.localStore,d),await Ra(n,qd(d),a,!1,u.resumeToken)}s.push(u)}return n.Pu.H_(i),s}function qd(r){return Ah(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Py(r){return function(e){return F(F(e).persistence).Ts()}(F(r).localStore)}async function Vy(r,t,e,n){const s=F(r);if(s.gu)return void V(zn,"Ignoring unexpected query state notification.");const i=s.Iu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Ed(s.localStore,bh(i[0])),u=Jr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",lt.EMPTY_BYTE_STRING);await Se(s,a,u);break}case"rejected":await Nn(s.localStore,t,!0),On(s,t,n);break;default:O(64155,e)}}async function Cy(r,t,e){const n=vi(r);if(n.gu){for(const s of t){if(n.Iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V(zn,"Adding an already active target "+s);continue}const i=await Id(n.localStore,s),a=await ti(n.localStore,i);await Ra(n,qd(i),a.targetId,!1,a.resumeToken),wi(n.remoteStore,a)}for(const s of e)n.Iu.has(s)&&await Nn(n.localStore,s,!1).then(()=>{kn(n.remoteStore,s),On(n,s)}).catch(we)}}function vi(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ud.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yy.bind(null,t),t.Pu.H_=ay.bind(null,t.eventManager),t.Pu.yu=uy.bind(null,t.eventManager),t}function Da(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Iy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ey.bind(null,t),t}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ei(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return pd(this.persistence,new gd,t.initialUser,this.serializer)}Cu(t){return new pa(Ii.mi,this.serializer)}Du(t){return new Sd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class zd extends qr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){L(this.persistence.referenceDelegate instanceof Zs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new cd(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new pa(n=>Zs.mi(n,e),this.serializer)}}class $d extends qr{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await Da(this.xu.syncEngine),await jn(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return pd(this.persistence,new gd,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new cd(n,t.asyncQueue,e)}Mu(t,e){const n=new Ug(e,this.persistence);return new Bg(t.asyncQueue,n)}Cu(t){const e=md(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new _a(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,bd(),Ms(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new Sd}}class Dy extends $d{constructor(t,e){super(t,e,!1),this.xu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.xu.syncEngine;this.sharedClientState instanceof io&&(this.sharedClientState.syncEngine={Co:by.bind(null,e),vo:Vy.bind(null,e),Fo:Cy.bind(null,e),Ts:Py.bind(null,e),Do:Sy.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ji(async n=>{await Ry(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Du(t){const e=bd();if(!io.v(e))throw new M(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=md(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new io(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Fn{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>il(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=wy.bind(null,this.syncEngine),await Bo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new oy}()}createDatastore(t){const e=Ei(t.databaseInfo.databaseId),n=function(i){return new q_(i)}(t.databaseInfo);return function(i,a,u,l){return new G_(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new Q_(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>il(this.syncEngine,e,0),function(){return Zc.v()?new Zc:new L_}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,m){const g=new dy(s,i,a,u,l,d);return m&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=F(s);V(Je,"RemoteStore shutting down."),i.Ea.add(5),await Yr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Fn.provider={build:()=>new Fn};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ct("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="FirestoreClient";class xy{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Go.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{V(Te,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V(Te,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sa(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ao(r,t){r.asyncQueue.verifyOperationInProgress(),V(Te,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await _d(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function al(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ny(r);V(Te,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>el(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>el(t.remoteStore,s)),r._onlineComponents=t}async function Ny(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(Te,"Using user provided OfflineComponentProvider");try{await ao(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;In("Error using user provided cache. Falling back to memory cache: "+e),await ao(r,new qr)}}else V(Te,"Using default OfflineComponentProvider"),await ao(r,new zd(void 0));return r._offlineComponents}async function Gd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(Te,"Using user provided OnlineComponentProvider"),await al(r,r._uninitializedComponentsProvider._online)):(V(Te,"Using default OnlineComponentProvider"),await al(r,new Fn))),r._onlineComponents}function ky(r){return Gd(r).then(t=>t.syncEngine)}async function qo(r){const t=await Gd(r),e=t.eventManager;return e.onListen=fy.bind(null,t.syncEngine),e.onUnlisten=gy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=my.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=py.bind(null,t.syncEngine),e}function My(r,t,e={}){const n=new Zt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new Kd({next:I=>{m.Nu(),a.enqueueAndForget(()=>Md(i,g));const R=I.docs.has(u);!R&&I.fromCache?d.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&l&&l.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Od(Qr(u.path),m,{includeMetadataChanges:!0,qa:!0});return kd(i,g)}(await qo(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="firestore.googleapis.com",cl=!0;class ll{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qd,this.ssl=cl}else this.host=t.host,this.ssl=t.ssl??cl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=sd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ud)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Og("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hd(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xa{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sg;switch(n.type){case"firstParty":return new Vg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ul.get(e);n&&(V("ComponentProvider","Removing Datastore"),ul.delete(e),n.terminate())}(this),Promise.resolve()}}function Oy(r,t,e,n={}){var d;r=pe(r,xa);const s=ii(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},u=`${t}:${e}`;s&&(wl(`https://${u}`),cm("Firestore",!0)),i.host!==Qd&&i.host!==u&&In("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:u,ssl:s,emulatorOptions:n};if(!Rr(l,a)&&(r._setSettings(l),n.mockUserToken)){let m,g;if(typeof n.mockUserToken=="string")m=n.mockUserToken,g=pt.MOCK_USER;else{m=om(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new pt(I)}r._authCredentials=new bg(new ql(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ai(this.firestore,t,this._query)}}class ft{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Kr(e,ft._jsonSchema))return new ft(t,n||null,new k(Z.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:dt("string",ft._jsonSchemaVersion),referencePath:dt("string")};class zr extends Ai{constructor(t,e,n){super(t,e,Qr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new k(t))}withConverter(t){return new zr(this.firestore,t,this._path)}}function Ze(r,t,...e){if(r=Pr(r),arguments.length===1&&(t=Go.newId()),Mg("doc","path",t),r instanceof xa){const n=Z.fromString(t,...e);return tc(n),new ft(r,null,new k(n))}{if(!(r instanceof ft||r instanceof zr))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(t,...e));return tc(n),new ft(r.firestore,r instanceof zr?r.converter:null,new k(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="AsyncQueue";class dl{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rd(this,"async_queue_retry"),this._c=()=>{const n=Ms();n&&V(hl,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ms();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Zt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ve(t))throw t;V(hl,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,ct("INTERNAL UNHANDLED ERROR: ",fl(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Aa.createAndSchedule(this,t,e,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&O(47125,{Pc:fl(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function fl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class $r extends xa{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new dl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dl(t),this._firestoreClient=void 0,await t}}}function gl(r,t,e){e||(e=Fr);const n=Dl(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Rr(i,t))return s;throw new M(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new M(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ud)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&ii(t.host)&&wl(t.host),n.initialize({options:t,instanceIdentifier:e})}function Fy(r,t){const e=typeof r=="object"?r:mg(),n=typeof r=="string"?r:Fr,s=Dl(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=sm("firestore");i&&Oy(s,...i)}return s}function Na(r){if(r._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ly(r),r._firestoreClient}function Ly(r){var n,s,i;const t=r._freezeSettings(),e=function(u,l,d,m){return new mp(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Hd(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new xy(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ft(lt.fromBase64String(t))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ft(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Kr(t,Ft._jsonSchema))return Ft.fromBase64String(t.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:dt("string",Ft._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(t){if(Kr(t,Kt._jsonSchema))return new Kt(t.latitude,t.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:dt("string",Kt._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Kr(t,Gt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Gt(t.vectorValues);throw new M(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:dt("string",Gt._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=/^__.*__$/;class Uy{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new Un(t,this.data,e,this.fieldTransforms)}}function Jd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:r})}}class Ma{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ma({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return si(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Jd(this.Ac)&&By.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class jy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ei(t)}Cc(t,e,n,s=!1){return new Ma({Ac:t,methodName:e,Dc:n,path:ot.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qy(r){const t=r._freezeSettings(),e=Ei(r._databaseId);return new jy(r._databaseId,!!t.ignoreUndefinedProperties,e)}function zy(r,t,e,n,s,i={}){const a=r.Cc(i.merge||i.mergeFields?2:0,t,e,s);tf("Data must be an object, but it was:",a,n);const u=Yd(n,a);let l,d;if(i.merge)l=new Lt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const I=$y(t,g,e);if(!a.contains(I))throw new M(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Gy(m,I)||m.push(I)}l=new Lt(m),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new Uy(new Vt(u),l,d)}function Xd(r,t){if(Zd(r=Pr(r)))return tf("Unsupported field value:",t,r),Yd(r,t);if(r instanceof Wd)return function(n,s){if(!Jd(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=Xd(u,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Pr(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=X.fromDate(n);return{timestampValue:xn(s.serializer,i)}}if(n instanceof X){const i=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xn(s.serializer,i)}}if(n instanceof Kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ft)return{bytesValue:qh(s.serializer,n._byteString)};if(n instanceof ft){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:da(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Gt)return function(a,u){return{mapValue:{fields:{[ea]:{stringValue:na},[bn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return oa(u.serializer,d)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${Ho(n)}`)}(r,t)}function Yd(r,t){const e={};return ah(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xe(r,(n,s)=>{const i=Xd(s,t.mc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function Zd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Kt||r instanceof Ft||r instanceof ft||r instanceof Wd||r instanceof Gt)}function tf(r,t,e){if(!Zd(e)||!$l(e)){const n=Ho(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function $y(r,t,e){if((t=Pr(t))instanceof ka)return t._internalPath;if(typeof t=="string")return ef(r,t);throw si("Field path arguments must be of type string or ",r,!1,void 0,e)}const Ky=new RegExp("[~\\*/\\[\\]]");function ef(r,t,e){if(t.search(Ky)>=0)throw si(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new ka(...t.split("."))._internalPath}catch{throw si(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function si(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new M(P.INVALID_ARGUMENT,u+r+l)}function Gy(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Hy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rf("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Hy extends nf{data(){return super.data()}}function rf(r,t){return typeof t=="string"?ef(r,t):t instanceof ka?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wy{convertValue(t,e="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Xe(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[bn].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>it(a.doubleValue));return new Gt(e)}convertGeoPoint(t){return new Kt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=hi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Or(t));default:return null}}convertTimestamp(t){const e=ee(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Z.fromString(t);L(Yh(n),9688,{name:t});const s=new Ke(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(e)||ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class pr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ze extends nf{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(rf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ze._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ze._jsonSchemaVersion="firestore/documentSnapshot/1.0",ze._jsonSchema={type:dt("string",ze._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Os extends ze{data(t={}){return super.data(t)}}class yn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new pr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Os(this._firestore,this._userDataWriter,n.key,n,new pr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new Os(s._firestore,s._userDataWriter,u.doc.key,u.doc,new pr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new Os(s._firestore,s._userDataWriter,u.doc.key,u.doc,new pr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Xy(u.type),doc:l,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=yn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Go.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Xy(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(r){r=pe(r,ft);const t=pe(r.firestore,$r);return My(Na(t),r._key).then(e=>uf(t,r,e))}yn._jsonSchemaVersion="firestore/querySnapshot/1.0",yn._jsonSchema={type:dt("string",yn._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class of extends Wy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ft(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Oa(r,t,e){r=pe(r,ft);const n=pe(r.firestore,$r),s=Jy(r.converter,t);return Yy(n,[zy(qy(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,kt.none())])}function af(r,...t){var l,d,m;r=Pr(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||ml(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(ml(t[n])){const g=t[n];t[n]=(l=g.next)==null?void 0:l.bind(g),t[n+1]=(d=g.error)==null?void 0:d.bind(g),t[n+2]=(m=g.complete)==null?void 0:m.bind(g)}let i,a,u;if(r instanceof ft)a=pe(r.firestore,$r),u=Qr(r._key.path),i={next:g=>{t[n]&&t[n](uf(a,r,g))},error:t[n+1],complete:t[n+2]};else{const g=pe(r,Ai);a=pe(g.firestore,$r),u=g._query;const I=new of(a);i={next:R=>{t[n]&&t[n](new yn(a,I,g,R))},error:t[n+1],complete:t[n+2]},Qy(r._query)}return function(I,R,C,N){const D=new Kd(N),z=new Od(R,D,C);return I.asyncQueue.enqueueAndForget(async()=>kd(await qo(I),z)),()=>{D.Nu(),I.asyncQueue.enqueueAndForget(async()=>Md(await qo(I),z))}}(Na(a),u,s,i)}function Yy(r,t){return function(n,s){const i=new Zt;return n.asyncQueue.enqueueAndForget(async()=>_y(await ky(n),s,i)),i.promise}(Na(r),t)}function uf(r,t,e){const n=e.docs.get(t._key),s=new of(r);return new ze(r,s,t._key,n,new pr(e.hasPendingWrites,e.fromCache),t.converter)}class Zy{constructor(t){this.kind="memory",this._onlineComponentProvider=Fn.provider,this._offlineComponentProvider=t!=null&&t.garbageCollector?t.garbageCollector._offlineComponentProvider:{build:()=>new zd(void 0)}}toJSON(){return{kind:this.kind}}}class tI{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=iI(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function eI(r){return new Zy(r)}function nI(r){return new tI(r)}class rI{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Fn.provider,this._offlineComponentProvider={build:e=>new $d(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class sI{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Fn.provider,this._offlineComponentProvider={build:e=>new Dy(e,t==null?void 0:t.cacheSizeBytes)}}}function iI(r){return new rI(r==null?void 0:r.forceOwnership)}function oI(){return new sI}(function(t,e=!0){(function(s){Bn=s})(fg),Us(new Vr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new $r(new Rg(n.getProvider("auth-internal")),new Cg(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ke(d.options.projectId,m)}(a,s),a);return i={useFetchStreams:e,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),pn(Ju,Xu,t),pn(Ju,Xu,"esm2020")})();var aI="firebase",uI="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(aI,uI,"app");const cI={apiKey:"AIzaSyBrDfoWcHCJ_-2F92SLrss733zf3Igijc8",authDomain:"tiktokisland-4b1d3.firebaseapp.com",projectId:"tiktokisland-4b1d3",storageBucket:"tiktokisland-4b1d3.firebasestorage.app",messagingSenderId:"474692290005",appId:"1:474692290005:web:c686a830174d50325a695c"},uo=xl(cI);let Ht;try{Ht=gl(uo,{cache:nI({tabManager:oI()})})}catch{try{Ht=gl(uo,{cache:eI()})}catch{Ht=Fy(uo)}}const cf="daily-shoutout";async function fI(){try{const r=Ze(Ht,"shoutouts",cf),t=await sf(r);return t.exists()?t.data():null}catch(r){return console.log("Firebase not available, using fallback:",r),null}}async function mI(r){try{const t=Ze(Ht,"shoutouts",cf);return await Oa(t,r),!0}catch(t){return console.log("Firebase not available for writing:",t),!1}}function gI(){return"AIzaSyBrDfoWcHCJ_-2F92SLrss733zf3Igijc8"!=="demo-key"}const Fa="current",lf="transitions";async function pI(){try{const r=Ze(Ht,"roster",Fa),t=await sf(r);if(t.exists()){const e=t.data();return Array.isArray(e==null?void 0:e.roster)?e.roster:[]}}catch(r){console.log("Firebase roster fetch failed:",r)}return[]}async function _I(r){try{const t=Ze(Ht,"roster",Fa);return await Oa(t,{roster:r}),!0}catch(t){return console.log("Firebase roster write failed:",t),!1}}function yI(r){const t=Ze(Ht,"roster",Fa);return af(t,n=>{try{if(!n.exists()){r([]);return}const s=n.data(),i=Array.isArray(s==null?void 0:s.roster)?s.roster:[];r(i)}catch(s){console.log("Firebase roster snapshot error:",s)}},n=>{console.log("Firebase roster subscribe error:",n)})}async function II(r){try{const t=Ze(Ht,"roster",lf);return await Oa(t,{transitions:r}),!0}catch(t){return console.log("Firebase transitions write failed:",t),!1}}function EI(r){const t=Ze(Ht,"roster",lf);return af(t,n=>{try{if(!n.exists()){r([]);return}const s=n.data(),i=Array.isArray(s==null?void 0:s.transitions)?s.transitions:[];r(i)}catch(s){console.log("Firebase transitions snapshot error:",s)}},n=>console.log("Firebase transitions subscribe error:",n))}export{lI as _,EI as a,mI as b,fI as c,_I as d,II as e,pI as f,Hf as g,hI as h,gI as i,Qf as j,yI as s};
