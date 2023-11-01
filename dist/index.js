"use strict";var s=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=s(function(h,a){
var m=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,n=require('@stdlib/assert-is-string/dist').isPrimitive,t=require('@stdlib/error-tools-fmtprodmsg/dist'),o=require('@stdlib/constants-float64-max-safe-integer/dist'),v=require('@stdlib/string-base-right-pad/dist');function l(i,r,g){var e;if(!n(i))throw new TypeError(t('1PN3F',i));if(!m(r))throw new TypeError(t('1PN3X',r));if(arguments.length>2){if(e=g,!n(e))throw new TypeError(t('1PNAO',e));if(e.length===0)throw new RangeError(t('1PN1X'))}else e=" ";if(r>o)throw new RangeError(t('1PNAP',r));return v(i,r,e)}a.exports=l
});var d=u();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
