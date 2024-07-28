"use strict";var s=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=s(function(h,a){"use strict";var m=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,n=require("@stdlib/assert-is-string").isPrimitive,t=require("@stdlib/string-format"),o=require("@stdlib/constants-float64-max-safe-integer"),v=require("@stdlib/string-base-right-pad");function l(i,r,g){var e;if(!n(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));if(!m(r))throw new TypeError(t("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(e=g,!n(e))throw new TypeError(t("invalid argument. Third argument must be a string. Value: `%s`.",e));if(e.length===0)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(r>o)throw new RangeError(t("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return v(i,r,e)}a.exports=l});var d=u();module.exports=d;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
