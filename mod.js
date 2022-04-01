// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,g;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,g="set"in t,f&&(l||g))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),g&&u&&u.call(r,e,t.set),r},l=n,g=f,v=t()?l:g;var p=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=p;var h=function(r){return"number"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return d&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},P=Object.prototype.hasOwnProperty;var j=function(r,e){return null!=r&&P.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=j,O=_,V=w;var x=E,S=function(r){var e,t,n;if(null==r)return V.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[O]=t:delete r[O],n},k=b()?S:x,I=Number,A=I.prototype.toString;var R=k,F=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},M=b();var C=function(r){return"object"==typeof r&&(r instanceof F||(M?$(r):"[object Number]"===R(r)))},N=h,B=C;var G=m,L=function(r){return N(r)||B(r)},Z=C;G(L,"isPrimitive",h),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=I.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=m,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var sr=ur,fr=sr.isPrimitive;var lr=function(r){return fr(r)&&r>=0},gr=sr.isObject;var vr=function(r){return gr(r)&&r.valueOf()>=0},pr=lr,mr=vr;var hr=m,dr=function(r){return pr(r)||mr(r)},br=vr;hr(dr,"isPrimitive",lr),hr(dr,"isObject",br);var wr=dr;var yr=function(r){return"string"==typeof r},Er=String.prototype.valueOf;var Pr=k,jr=function(r){try{return Er.call(r),!0}catch(r){return!1}},_r=b();var Tr=function(r){return"object"==typeof r&&(r instanceof String||(_r?jr(r):"[object String]"===Pr(r)))},Or=yr,Vr=Tr;var xr=m,Sr=function(r){return Or(r)||Vr(r)},kr=Tr;xr(Sr,"isPrimitive",yr),xr(Sr,"isObject",kr);var Ir=Sr,Ar=wr.isPrimitive,Rr=Ir.isPrimitive;var Fr=function(r,e){var t,n;if(!Rr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ar(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},$r=Math.ceil,Mr=Y;var Cr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Mr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Nr=function(r){return r!=r},Br=W.isPrimitive,Gr=Nr;var Lr=function(r){return Br(r)&&Gr(r)},Zr=W.isObject,Wr=Nr;var Xr=function(r){return Zr(r)&&Wr(r.valueOf())},zr=Lr,Ur=Xr;var Yr=m,Dr=function(r){return zr(r)||Ur(r)},qr=Xr;Yr(Dr,"isPrimitive",Lr),Yr(Dr,"isObject",qr);var Hr=Cr,Jr=sr.isPrimitive,Kr=Ir.isPrimitive,Qr=Dr.isPrimitive;var re=function(r,e,t){var n,i,a;if(!Hr(r)&&!Kr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Jr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Kr(r)){if(!Kr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Qr(e)){for(a=i;a<n;a++)if(Qr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},ee=Ir.isPrimitive;var te=function(r){if(!ee(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ne=Ir.isPrimitive;var ie=function(r){if(!ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ae=te,oe=ie,ue=Ir.isPrimitive;var ce=function(r){return ue(r)&&r===oe(r)&&r!==ae(r)},se=X,fe=z;var le=function(r){return r==r&&r>fe&&r<se},ge=sr.isPrimitive,ve=Ir.isPrimitive;var pe=Fr,me=function(r,e,t){var n,i;if(!ve(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ve(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ge(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var he=function(r,e,t){var n=!1,i=e-r.length;return i<0||(me(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+pe("0",i):pe("0",i)+r,n&&(r="-"+r)),r},de=ce,be=ie,we=te,ye=le,Ee=W.isPrimitive,Pe=he;var je=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ye(n)){if(!Ee(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Pe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Pe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=de(r.specifier)?be(t):we(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},_e=Ir.isPrimitive,Te=/[-\/\\^$*+?.()|[\]{}]/g;var Oe=function(r){var e,t;if(!_e(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Te,"\\$&"):(e=(e=r.substring(1,t)).replace(Te,"\\$&"),r=r[0]+e+r.substring(t))},Ve=/./;var xe=function(r){return"boolean"==typeof r},Se=Boolean.prototype.toString;var ke=k,Ie=function(r){try{return Se.call(r),!0}catch(r){return!1}},Ae=b();var Re=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ae?Ie(r):"[object Boolean]"===ke(r)))},Fe=xe,$e=Re;var Me=m,Ce=function(r){return Fe(r)||$e(r)},Ne=Re;Me(Ce,"isPrimitive",xe),Me(Ce,"isObject",Ne);var Be="object"==typeof self?self:null,Ge="object"==typeof window?window:null,Le=Ce.isPrimitive,Ze=function(){return new Function("return this;")()},We=Be,Xe=Ge,ze=r(Object.freeze({__proto__:null}));var Ue=function(r){if(arguments.length){if(!Le(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ze()}if(We)return We;if(Xe)return Xe;if(ze)return ze;throw new Error("unexpected error. Unable to resolve global object.")},Ye=Ue(),De=Ye.document&&Ye.document.childNodes,qe=Int8Array,He=Ve,Je=De,Ke=qe;var Qe=function(){return"function"==typeof He||"object"==typeof Ke||"function"==typeof Je};var rt=function(){return/^\s*function\s*([^(]*)/i},et=rt;m(et,"REGEXP",rt());var tt=et,nt=k;var it=Array.isArray?Array.isArray:function(r){return"[object Array]"===nt(r)};var at=function(r){return null!==r&&"object"==typeof r};m(at,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!it(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(at));var ot=at;var ut=k,ct=tt.REGEXP,st=function(r){return ot(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ft=function(r){var e,t,n;if(("Object"===(t=ut(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ct.exec(n.toString()))return e[1]}return st(r)?"Buffer":t},lt=ft;var gt=ft;var vt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?lt(r).toLowerCase():e},pt=function(r){return gt(r).toLowerCase()},mt=Qe()?pt:vt;var ht=function(r){return"function"===mt(r)},dt=RegExp.prototype.exec;var bt=k,wt=function(r){try{return dt.call(r),!0}catch(r){return!1}},yt=b();var Et=Oe,Pt=ht,jt=Ir.isPrimitive,_t=function(r){return"object"==typeof r&&(r instanceof RegExp||(yt?wt(r):"[object RegExp]"===bt(r)))};var Tt=ce,Ot=ie,Vt=te,xt=function(r,e,t){if(!jt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(jt(e))e=Et(e),e=new RegExp(e,"g");else if(!_t(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!jt(t)&&!Pt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},St=le,kt=W.isPrimitive,It=function(r){return Math.abs(r)},At=/e\+(\d)$/,Rt=/e-(\d)$/,Ft=/^(\d+)$/,$t=/^(\d+)e/,Mt=/\.0$/,Ct=/\.0*e/,Nt=/(\..*[^0])0*e/;var Bt=function(r){var e,t,n=parseFloat(r.arg);if(!St(n)){if(!kt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":It(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=xt(t,Nt,"$1e"),t=xt(t,Ct,"e"),t=xt(t,Mt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=xt(t,At,"e+0$1"),t=xt(t,Rt,"e-0$1"),r.alternate&&(t=xt(t,Ft,"$1."),t=xt(t,$t,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Tt(r.specifier)?Ot(t):Vt(t)},Gt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Lt=Fr;var Zt=Ir.isPrimitive,Wt=re,Xt=Nr,zt=je,Ut=Bt,Yt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Gt.exec(r);a;)(t=r.slice(e,Gt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Gt.lastIndex,a=Gt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Dt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Lt(" ",n):Lt(" ",n)+r},qt=he,Ht=String.fromCharCode;var Jt=wr.isPrimitive,Kt=Ir.isPrimitive,Qt=Fr,rn=$r,en=function(r){var e,t,n,i,a,o,u,c,s;if(!Zt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Yt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Zt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Wt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Xt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Xt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=zt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Xt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Xt(a)?String(n.arg):Ht(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Ut(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=qt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Dt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var tn=function(r,e,t){var n,i;if(!Kt(r))throw new TypeError(en("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Jt(e))throw new TypeError(en("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Kt(i=t))throw new TypeError(en("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(e>9007199254740991)throw new RangeError(en("invalid argument. Output string length exceeds maximum allowed string length. Value: `%s`.",e));return(n=(e-r.length)/i.length)<=0?r:(n=rn(n),r+Qt(i,n))};export{tn as default};
//# sourceMappingURL=mod.js.map
