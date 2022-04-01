// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(r,e,t){var c,_,f,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},f=e()?c:_;var p=function(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var v=function(r,e,t,n,a,o,u,i){var l,c,_,f;if(r<=0)return n;for(l=t<0?(1-r)*t:0,c=a<0?(1-r)*a:0,f=0;f<r;f++)void 0!==(_=u.call(i,e[l],f,l,c,e,n))&&(n[c]=o(_)),l+=t,c+=a;return n};p(v,"ndarray",(function(r,e,t,n,a,o,u,i,l,c){var _,f,p,v;if(r<=0)return a;for(_=n,f=u,v=0;v<r;v++)void 0!==(p=l.call(c,e[_],v,_,f,e,a))&&(a[f]=i(p)),_+=t,f+=o;return a}));var b=function(r){return Math.abs(r)},d=v,y=b;var s=v.ndarray,j=b;var g=function(r,e,t,n,a,o,u){return d(r,e,t,n,a,y,o,u)},m=function(r,e,t,n,a,o,u,i,l){return s(r,e,t,n,a,o,u,j,i,l)};p(g,"ndarray",m);var w=g;export{w as default,m as ndarray};
//# sourceMappingURL=mod.js.map
