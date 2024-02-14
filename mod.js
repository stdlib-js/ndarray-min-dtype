// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;function r(r){return e(r)===r}var t=Number.NEGATIVE_INFINITY;var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(e){return"string"==typeof e}var f=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,y=String.prototype.replace,m=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,E=/\.0*e/,_=/(\..*[^0])0*e/;function S(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=y.call(t,_,"$1e"),t=y.call(t,E,"e"),t=y.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=y.call(t,m,"e+0$1"),t=y.call(t,b,"e-0$1"),e.alternate&&(t=y.call(t,d,"$1."),t=y.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):g.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+T(n):T(n)+e}var k=String.fromCharCode,I=isNaN,j=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,i,a,o,l,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",l=1,u=0;u<e.length;u++)if(p(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,I(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),o+=n.arg||"",l+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function R(e){var r,t;if(!P(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return N.apply(null,r)}var C=Object.prototype,$=C.toString,L=C.__defineGetter__,M=C.__defineSetter__,Y=C.__lookupGetter__,G=C.__lookupSetter__;var Z=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Y.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&M&&M.call(e,r,t.set),e};function B(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}function J(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=J();function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"";var Q=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[K],r=D(e,K);try{e[K]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[K]=t:delete e[K],n}:function(e){return z.call(e)},ee=Number,re=ee.prototype.toString;var te=X();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function ie(e){return W(e)||ne(e)}function ae(e,r){if(!(this instanceof ae))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}B(ie,"isPrimitive",W),B(ie,"isObject",ne),B(ae,"BYTES_PER_ELEMENT",8),B(ae.prototype,"BYTES_PER_ELEMENT",8),B(ae.prototype,"byteLength",16),B(ae.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),B(ae.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var oe="function"==typeof Math.fround?Math.fround:null,ce=J();var le=Object.prototype.toString;var ue="function"==typeof Symbol?Symbol:void 0,se="function"==typeof ue?ue.toStringTag:"";var pe=ce&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return le.call(e);t=e[se],r=D(e,se);try{e[se]=void 0}catch(r){return le.call(e)}return n=le.call(e),r?e[se]=t:delete e[se],n}:function(e){return le.call(e)},fe="function"==typeof Float32Array;var ge=Number.POSITIVE_INFINITY,he="function"==typeof Float32Array?Float32Array:null;var ye="function"==typeof Float32Array?Float32Array:void 0;var me=new(function(){var e,r,t;if("function"!=typeof he)return!1;try{r=new he([1,3.14,-3.14,5e40]),t=r,e=(fe&&t instanceof Float32Array||"[object Float32Array]"===pe(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ge}catch(r){e=!1}return e}()?ye:function(){throw new Error("not implemented")})(1);var be="function"==typeof oe?oe:function(e){return me[0]=e,me[0]};function de(e,r){if(!(this instanceof de))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:be(e)}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:be(r)}),this}B(de,"BYTES_PER_ELEMENT",4),B(de.prototype,"BYTES_PER_ELEMENT",4),B(de.prototype,"byteLength",8),B(de.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),B(de.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));function ve(e){return e!=e||e===ge||e===t?"float32":r(e)?e>=-16777215&&e<=16777215?"float32":"float64":e>-1401298464324817e-60&&e<1401298464324817e-60?"float64":"float32"}function we(e){return"number"!=typeof e?function(e){return e instanceof ae||e instanceof de||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}(e)?"float64"===ve(e.re)||"float64"===ve(e.im)?"complex128":"complex64":"generic":e!=e||e===ge||e===t?"float32":r(e)?0===e&&(0===(n=e)&&1/n===t)?"float32":e<0?e>=-128?"int8":e>=-32768?"int16":e>=-2147483648?"int32":"float64":e<=255?"uint8":e<=65535?"uint16":e<=4294967295?"uint32":"float64":e>-1401298464324817e-60&&e<1401298464324817e-60?"float64":"float32";var n}export{we as default};
//# sourceMappingURL=mod.js.map