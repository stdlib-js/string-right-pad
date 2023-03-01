<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Right Pad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Right pad a string.



<section class="usage">

## Usage

```javascript
import rpad from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs';
```

#### rpad( str, len\[, pad] )

Right pads a `string` such that the padded `string` has a `length` of **at least** `len`.

```javascript
var str = rpad( 'a', 5 );
// returns 'a    '
```

By default, an input `string` is padded with `spaces`. To pad with a different character or sequence of characters, provide a `pad` string.

```javascript
var str = rpad( 'beep', 10, 'p' );
// returns 'beeppppppp'

str = rpad( 'beep', 12, 'boop' );
// returns 'beepboopboop'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An output `string` is **not** guaranteed to have a length of **exactly** `len`, but to have a `length` of **at least** `len`. To generate a padded `string` having a `length` equal to `len`

    ```javascript
    var str = rpad( 'beep', 10, 'boop' );
    // returns 'beepboopboop' => length 12

    str = str.substring( 0, 10 );
    // returns 'beepboopbo' => length 10
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import rpad from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs';

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    n = round( randu()*10.0 ) + str.length;
    console.log( rpad( str, n, 'p' ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-left-pad`][@stdlib/string/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="package-name">[`@stdlib/string-pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-right-pad.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-right-pad

[test-image]: https://github.com/stdlib-js/string-right-pad/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-right-pad/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-right-pad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-right-pad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-right-pad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-right-pad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-right-pad#cli
[cli-url]: https://github.com/stdlib-js/string-right-pad/tree/cli
[@stdlib/string-right-pad]: https://github.com/stdlib-js/string-right-pad/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-right-pad/tree/deno
[umd-url]: https://github.com/stdlib-js/string-right-pad/tree/umd
[esm-url]: https://github.com/stdlib-js/string-right-pad/tree/esm
[branches-url]: https://github.com/stdlib-js/string-right-pad/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-right-pad/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string-left-pad/tree/esm

[@stdlib/string/pad]: https://github.com/stdlib-js/string-pad/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
