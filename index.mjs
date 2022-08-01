// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";function o(o,m,h){var d,l;if(!t(o))throw new TypeError(i("0hX3R",o));if(!e(m))throw new TypeError(i("0hX3k",m));if(arguments.length>2){if(!t(l=h))throw new TypeError(i("0hXB6",l));if(0===l.length)throw new RangeError(i("0hX1g"))}else l=" ";if(m>n)throw new RangeError(i("0hXB7",m));return(d=(m-o.length)/l.length)<=0?o:(d=r(d),o+s(l,d))}export{o as default};
//# sourceMappingURL=index.mjs.map
