// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,m,"$1e"),n=f.call(n,y,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),r.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):s.call(n)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var E=String.fromCharCode,j=isNaN,x=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,a,o,l,s,p,f;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,p=0;p<r.length;p++)if(u(n=r[p]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,j(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var N=Object.prototype,$=N.toString,A=N.__defineGetter__,R=N.__defineSetter__,C=N.__lookupGetter__,G=N.__lookupSetter__;var Z=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=U()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[B],e=z(r,B);try{r[B]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[B]=t:delete r[B],n}:function(r){return X.call(r)},H=Number,J=H.prototype.toString;var K=U();function Q(r){return"object"==typeof r&&(r instanceof H||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function rr(r){return L(r)||Q(r)}W(rr,"isPrimitive",L),W(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,tr=H.NEGATIVE_INFINITY,nr=Math.floor;function ir(r){return r<er&&r>tr&&nr(e=r)===e;var e}function ar(r){return L(r)&&ir(r)}function or(r){return Q(r)&&ir(r.valueOf())}function cr(r){return ar(r)||or(r)}function ur(r){return ar(r)&&r>=0}function lr(r){return or(r)&&r.valueOf()>=0}function sr(r){return ur(r)||lr(r)}function pr(r){return"string"==typeof r}W(cr,"isPrimitive",ar),W(cr,"isObject",or),W(sr,"isPrimitive",ur),W(sr,"isObject",lr);var fr=Object.prototype.toString;var gr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof gr?gr.toStringTag:"";var hr=U()?function(r){var e,t,n;if(null==r)return fr.call(r);t=r[dr],e=z(r,dr);try{r[dr]=void 0}catch(e){return fr.call(r)}return n=fr.call(r),e?r[dr]=t:delete r[dr],n}:function(r){return fr.call(r)},vr=String.prototype.valueOf;var br=U();function yr(r){return"object"==typeof r&&(r instanceof String||(br?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object String]"===hr(r)))}function mr(r){return pr(r)||yr(r)}W(mr,"isPrimitive",pr),W(mr,"isObject",yr);var wr=void 0!==String.prototype.repeat;var Sr=String.prototype.repeat;var _r=wr?function(r,e){return Sr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Er=Math.ceil;function jr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Er(n),r+_r(t,n))}function xr(r,e,t){var n;if(!pr(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ur(e))throw new TypeError(P("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!pr(n=t))throw new TypeError(P("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(P("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return jr(r,e,n)}export{xr as default};
//# sourceMappingURL=mod.js.map
