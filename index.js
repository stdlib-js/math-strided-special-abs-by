// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).absBy=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function B(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function R(r){return"string"==typeof r}function S(r){var e,t,n;if(!R(r))throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=B(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,M=C.__defineGetter__,O=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&O&&O.call(r,e,t.set),r};var P=I;function Y(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function";function $(r){return typeof r.get===W&&typeof r.set===W}var G={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Z(r){var e=G[r];return"function"==typeof e?e:G.default}var X={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function J(r){var e=X[r];return"function"==typeof e?e:X.default}var z={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function q(r){var e=z[r];return"function"==typeof e?e:z.default}var D={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function H(r){var e=D[r];return"function"==typeof e?e:D.default}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr=Object.prototype.toString;var er=Object.prototype.hasOwnProperty;function tr(r,e){return null!=r&&er.call(r,e)}var nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"";var or=Q()?function(r){var e,t,n;if(null==r)return rr.call(r);t=r[ir],e=tr(r,ir);try{r[ir]=void 0}catch(e){return rr.call(r)}return n=rr.call(r),e?r[ir]=t:delete r[ir],n}:function(r){return rr.call(r)};var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};function ur(r){return null!==r&&"object"==typeof r}function fr(r){return ur(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function lr(){return/^\s*function\s*([^(]*)/i}Y(ur,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(S("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ar(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ur));var cr=/^\s*function\s*([^(]*)/i;function sr(r){var e,t,n;if(("Object"===(t=or(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return fr(r)?"Buffer":t}Y(lr,"REGEXP",cr);var yr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},pr="function"==typeof Float64Array;var hr="function"==typeof Float64Array?Float64Array:null;var gr="function"==typeof Float64Array?Float64Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr([1,3.14,-3.14,NaN]),t=e,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===or(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Float32Array;var br=Number.POSITIVE_INFINITY,vr="function"==typeof Float32Array?Float32Array:null;var dr="function"==typeof Float32Array?Float32Array:void 0;var Er=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,5e40]),t=e,r=(wr&&t instanceof Float32Array||"[object Float32Array]"===or(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===br}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")},Ar="function"==typeof Uint32Array;var Tr="function"==typeof Uint32Array?Uint32Array:null;var _r="function"==typeof Uint32Array?Uint32Array:void 0;var xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ar&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")},jr="function"==typeof Int32Array;var kr="function"==typeof Int32Array?Int32Array:null;var Vr="function"==typeof Int32Array?Int32Array:void 0;var Lr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr([1,3.14,-3.14,2147483648]),t=e,r=(jr&&t instanceof Int32Array||"[object Int32Array]"===or(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")},Br="function"==typeof Uint16Array;var Rr="function"==typeof Uint16Array?Uint16Array:null;var Sr="function"==typeof Uint16Array?Uint16Array:void 0;var Ir=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Br&&t instanceof Uint16Array||"[object Uint16Array]"===or(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Cr="function"==typeof Int16Array;var Fr="function"==typeof Int16Array?Int16Array:null;var Mr="function"==typeof Int16Array?Int16Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr([1,3.14,-3.14,32768]),t=e,r=(Cr&&t instanceof Int16Array||"[object Int16Array]"===or(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")},Ur="function"==typeof Uint8Array;var Nr="function"==typeof Uint8Array?Uint8Array:null;var Pr="function"==typeof Uint8Array?Uint8Array:void 0;var Yr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr(e=[1,3.14,-3.14,256,257]),t=e,r=(Ur&&t instanceof Uint8Array||"[object Uint8Array]"===or(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Wr="function"==typeof Uint8ClampedArray;var $r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Gr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Zr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r([-1,0,1,3.14,4.99,255,256]),t=e,r=(Wr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===or(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")},Xr="function"==typeof Int8Array;var Jr="function"==typeof Int8Array?Int8Array:null;var zr="function"==typeof Int8Array?Int8Array:void 0;var qr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr([1,3.14,-3.14,128]),t=e,r=(Xr&&t instanceof Int8Array||"[object Int8Array]"===or(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")};function Dr(r){return"number"==typeof r}var Hr=Number,Kr=Hr.prototype.toString;var Qr=Q();function re(r){return"object"==typeof r&&(r instanceof Hr||(Qr?function(r){try{return Kr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function ee(r){return Dr(r)||re(r)}Y(ee,"isPrimitive",Dr),Y(ee,"isObject",re);var te=Hr.NEGATIVE_INFINITY,ne=Math.floor;function ie(r){return ne(r)===r}function oe(r){return r<br&&r>te&&ie(r)}function ae(r){return Dr(r)&&oe(r)}function ue(r){return re(r)&&oe(r.valueOf())}function fe(r){return ae(r)||ue(r)}function le(r){return ae(r)&&r>=0}function ce(r){return ue(r)&&r.valueOf()>=0}function se(r){return le(r)||ce(r)}Y(fe,"isPrimitive",ae),Y(fe,"isObject",ue),Y(se,"isPrimitive",le),Y(se,"isObject",ce);function ye(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ie(r.length)&&r.length>=0&&r.length<=4294967295}function pe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ie(r.length)&&r.length>=0&&r.length<=9007199254740991}var he="function"==typeof ArrayBuffer;function ge(r){return he&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===or(r)}function me(r){return"object"==typeof r&&null!==r&&!ar(r)}var we=/./;function be(r){return"boolean"==typeof r}var ve=Boolean,de=Boolean.prototype.toString;var Ee=Q();function Ae(r){return"object"==typeof r&&(r instanceof ve||(Ee?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===or(r)))}function Te(r){return be(r)||Ae(r)}function _e(){return new Function("return this;")()}Y(Te,"isPrimitive",be),Y(Te,"isObject",Ae);var xe="object"==typeof self?self:null,je="object"==typeof window?window:null,ke="object"==typeof global?global:null,Ve="object"==typeof globalThis?globalThis:null;var Le=function(r){if(arguments.length){if(!be(r))throw new TypeError(S("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _e()}if(Ve)return Ve;if(xe)return xe;if(je)return je;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Be=Le.document&&Le.document.childNodes,Re=Int8Array;var Se="function"==typeof we||"object"==typeof Re||"function"==typeof Be?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function Ie(r){return"function"===Se(r)}function Ce(r,e){if(!(this instanceof Ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Dr(r))throw new TypeError(S("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Dr(e))throw new TypeError(S("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Ce,"BYTES_PER_ELEMENT",8),Y(Ce.prototype,"BYTES_PER_ELEMENT",8),Y(Ce.prototype,"byteLength",16),Y(Ce.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ce.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Fe="function"==typeof Math.fround?Math.fround:null,Me=new Er(1);var Oe="function"==typeof Fe?Fe:function(r){return Me[0]=r,Me[0]};function Ue(r,e){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Dr(r))throw new TypeError(S("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Dr(e))throw new TypeError(S("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Oe(r)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Oe(e)}),this}function Ne(r){return r instanceof Ce||r instanceof Ue||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Pe(r){return ie(r/2)}function Ye(){return"function"==typeof nr&&"symbol"==typeof nr("foo")&&tr(nr,"iterator")&&"symbol"==typeof nr.iterator}Y(Ue,"BYTES_PER_ELEMENT",4),Y(Ue.prototype,"BYTES_PER_ELEMENT",4),Y(Ue.prototype,"byteLength",8),Y(Ue.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ue.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var We=Ye()?Symbol.iterator:null;function $e(r,e,t){P(r,e,{configurable:!1,enumerable:!1,get:t})}function Ge(r){return r.re}function Ze(r){return r.im}function Xe(r,e){return new Er(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Je(r,e){return new mr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ze(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ye(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ne(n))return new TypeError(S("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ge(n),Ze(n))}return e}function qe(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ye(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ne(o))return new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ge(o),Ze(o))}return n}function De(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ne(n=e[i]))return null;r[o]=Ge(n),r[o+1]=Ze(n),o+=2}return r}var He=2*Er.BYTES_PER_ELEMENT,Ke=Ye();function Qe(r){return r instanceof nt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function rt(r){return r===nt||"Complex128Array"===r.name}function et(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===He}function tt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*He}function nt(){var r,e,t,n;if(e=arguments.length,!(this instanceof nt))return 0===e?new nt:1===e?new nt(arguments[0]):2===e?new nt(arguments[0],arguments[1]):new nt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Er(0);else if(1===e)if(le(arguments[0]))t=new Er(2*arguments[0]);else if(pe(arguments[0]))if((n=(t=arguments[0]).length)&&ar(t)&&Ne(t[0])){if(null===(t=De(new Er(2*n),t))){if(!Pe(n))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Er(arguments[0])}}else{if(et(t))t=Xe(t,0);else if(tt(t))t=Je(t,0);else if(!Pe(n))throw new RangeError(S("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Er(t)}else if(ge(arguments[0])){if(!ie((t=arguments[0]).byteLength/He))throw new RangeError(S("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",He,t.byteLength));t=new Er(t)}else{if(!me(arguments[0]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Ke)throw new TypeError(S("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ie(t[We]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ie((t=t[We]()).next))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ze(t))instanceof Error)throw t;t=new Er(t)}else{if(!ge(t=arguments[0]))throw new TypeError(S("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!le(r=arguments[1]))throw new TypeError(S("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ie(r/He))throw new RangeError(S("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",He,r));if(2===e){if(!ie((n=t.byteLength-r)/He))throw new RangeError(S("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",He,n));t=new Er(t,r)}else{if(!le(n=arguments[2]))throw new TypeError(S("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*He>t.byteLength-r)throw new RangeError(S("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*He));t=new Er(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function it(r){return r.re}function ot(r){return r.im}function at(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ye(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ne(n))return new TypeError(S("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(it(n),ot(n))}return e}function ut(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ye(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ne(o))return new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(it(o),ot(o))}return n}function ft(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ne(n=e[i]))return null;r[o]=it(n),r[o+1]=ot(n),o+=2}return r}Y(nt,"BYTES_PER_ELEMENT",He),Y(nt,"name","Complex64Array"),Y(nt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Ie(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!rt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ie(n=arguments[1]))throw new TypeError(S("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Qe(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ne(c=n.call(e,r.get(s),s)))o[y]=Ge(c),o[y+1]=Ze(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(pe(r)){if(n){for(f=r.length,u=r.get&&r.set?Z("default"):q("default"),s=0;s<f;s++)if(!Ne(u(r,s))){l=!0;break}if(l){if(!Pe(f))throw new RangeError(S("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ne(c=n.call(e,u(r,s),s)))o[y]=Ge(c),o[y+1]=Ze(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(me(r)&&Ke&&Ie(r[We])){if(!Ie((o=r[We]()).next))throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?qe(o,n,e):ze(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(nt,"of",(function(){var r,e;if(!Ie(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!rt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),$e(nt.prototype,"buffer",(function(){return this._buffer.buffer})),$e(nt.prototype,"byteLength",(function(){return this._buffer.byteLength})),$e(nt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(nt.prototype,"BYTES_PER_ELEMENT",nt.BYTES_PER_ELEMENT),Y(nt.prototype,"copyWithin",(function(r,e){if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(nt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ue(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),We&&Y(t,We,(function(){return e.entries()})),t})),Y(nt.prototype,"get",(function(r){var e;if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!le(r))throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ue((e=this._buffer)[r*=2],e[r+1])})),$e(nt.prototype,"length",(function(){return this._length})),Y(nt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!le(t=arguments[1]))throw new TypeError(S("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ne(r)){if(t>=this._length)throw new RangeError(S("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ge(r),void(n[t+1]=Ze(r))}if(Qe(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*He,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Er(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pe(r))throw new TypeError(S("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ne(r[f])){o=!0;break}if(o){if(!Pe(a))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*He,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Er(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ge(u),n[t+1]=Ze(u),t+=2}}));var lt=2*mr.BYTES_PER_ELEMENT,ct=Ye();function st(r){return r instanceof gt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function yt(r){return r===gt||"Complex64Array"===r.name}function pt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===lt/2}function ht(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===lt}function gt(){var r,e,t,n;if(e=arguments.length,!(this instanceof gt))return 0===e?new gt:1===e?new gt(arguments[0]):2===e?new gt(arguments[0],arguments[1]):new gt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new mr(0);else if(1===e)if(le(arguments[0]))t=new mr(2*arguments[0]);else if(pe(arguments[0]))if((n=(t=arguments[0]).length)&&ar(t)&&Ne(t[0])){if(null===(t=ft(new mr(2*n),t))){if(!Pe(n))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(arguments[0])}}else{if(pt(t))t=Xe(t,0);else if(ht(t))t=Je(t,0);else if(!Pe(n))throw new RangeError(S("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(t)}else if(ge(arguments[0])){if(!ie((t=arguments[0]).byteLength/lt))throw new RangeError(S("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",lt,t.byteLength));t=new mr(t)}else{if(!me(arguments[0]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ct)throw new TypeError(S("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ie(t[We]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ie((t=t[We]()).next))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=at(t))instanceof Error)throw t;t=new mr(t)}else{if(!ge(t=arguments[0]))throw new TypeError(S("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!le(r=arguments[1]))throw new TypeError(S("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ie(r/lt))throw new RangeError(S("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",lt,r));if(2===e){if(!ie((n=t.byteLength-r)/lt))throw new RangeError(S("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",lt,n));t=new mr(t,r)}else{if(!le(n=arguments[2]))throw new TypeError(S("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*lt>t.byteLength-r)throw new RangeError(S("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*lt));t=new mr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(gt,"BYTES_PER_ELEMENT",lt),Y(gt,"name","Complex128Array"),Y(gt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Ie(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ie(n=arguments[1]))throw new TypeError(S("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(st(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ne(c=n.call(e,r.get(s),s)))o[y]=it(c),o[y+1]=ot(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(pe(r)){if(n){for(f=r.length,u=r.get&&r.set?Z("default"):q("default"),s=0;s<f;s++)if(!Ne(u(r,s))){l=!0;break}if(l){if(!Pe(f))throw new RangeError(S("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ne(c=n.call(e,u(r,s),s)))o[y]=it(c),o[y+1]=ot(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(me(r)&&ct&&Ie(r[We])){if(!Ie((o=r[We]()).next))throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?ut(o,n,e):at(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(gt,"of",(function(){var r,e;if(!Ie(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),$e(gt.prototype,"buffer",(function(){return this._buffer.buffer})),$e(gt.prototype,"byteLength",(function(){return this._buffer.byteLength})),$e(gt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(gt.prototype,"BYTES_PER_ELEMENT",gt.BYTES_PER_ELEMENT),Y(gt.prototype,"copyWithin",(function(r,e){if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(gt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ce(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),We&&Y(t,We,(function(){return e.entries()})),t})),Y(gt.prototype,"get",(function(r){var e;if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!le(r))throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ce((e=this._buffer)[r*=2],e[r+1])})),$e(gt.prototype,"length",(function(){return this._length})),Y(gt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!le(t=arguments[1]))throw new TypeError(S("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ne(r)){if(t>=this._length)throw new RangeError(S("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=it(r),void(n[t+1]=ot(r))}if(st(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*lt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pe(r))throw new TypeError(S("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ne(r[f])){o=!0;break}if(o){if(!Pe(a))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*lt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=it(u),n[t+1]=ot(u),t+=2}}));var mt=[mr,Er,Lr,xr,Or,Ir,qr,Yr,Zr,nt,gt],wt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],bt=wt.length;function vt(r){var e;if(ar(r))return"generic";if(fr(r))return null;for(e=0;e<bt;e++)if(r instanceof mt[e])return wt[e];return yr[sr(r)]||null}function dt(r,e,t,n,i,o,a,u){var f,l;return $(e)&&(f=Z(vt(e))),$(n)&&(l=J(vt(n))),f||l?function(r,e,t,n,i,o,a,u,f,l){var c,s,y,p;if(r<=0)return i;for(c=t<0?(1-r)*t:0,s=o<0?(1-r)*o:0,p=0;p<r;p++)void 0!==(y=f.call(l,n(e,c),p,[c,s],[e,i]))&&a(i,s,u(y)),c+=t,s+=o;return i}(r,e,t,f=f||q(vt(e)),n,i,l=l||H(vt(n)),o,a,u):function(r,e,t,n,i,o,a,u){var f,l,c,s;if(r<=0)return n;for(f=t<0?(1-r)*t:0,l=i<0?(1-r)*i:0,s=0;s<r;s++)void 0!==(c=a.call(u,e[f],s,[f,l],[e,n]))&&(n[l]=o(c)),f+=t,l+=i;return n}(r,e,t,n,i,o,a,u)}function Et(r,e,t,n,i,o,a,u,f,l){var c,s;return $(e)&&(c=Z(vt(e))),$(i)&&(s=J(vt(i))),c||s?function(r,e,t,n,i,o,a,u,f,l,c,s){var y,p,h,g;if(r<=0)return o;for(y=n,p=u,g=0;g<r;g++)void 0!==(h=c.call(s,i(e,y),g,[y,p],[e,o]))&&f(o,p,l(h)),y+=t,p+=a;return o}(r,e,t,n,c=c||q(vt(e)),i,o,a,s=s||H(vt(i)),u,f,l):function(r,e,t,n,i,o,a,u,f,l){var c,s,y,p;if(r<=0)return i;for(c=n,s=a,p=0;p<r;p++)void 0!==(y=f.call(l,e[c],p,[c,s],[e,i]))&&(i[s]=u(y)),c+=t,s+=o;return i}(r,e,t,n,i,o,a,u,f,l)}function At(r){return Math.abs(r)}function Tt(r,e,t,n,i,o,a){return dt(r,e,t,n,i,At,o,a)}return Y(dt,"ndarray",Et),Y(Tt,"ndarray",(function(r,e,t,n,i,o,a,u,f){return Et(r,e,t,n,i,o,a,At,u,f)})),Tt}));
//# sourceMappingURL=index.js.map
