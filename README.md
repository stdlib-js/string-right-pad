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











<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-right-pad-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

## Usage

```text
Usage: rpad [options] [<string>] --len=<length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          Minimum string length.
         --pad str             String used to pad. Default: ' '.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | rpad --len 8 --pad % --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | rpad --len 8 --pad % --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```bash
$ rpad beep --len 10 --pad p
beeppppppp
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | rpad --len 8 --pad %
boop%%%%
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'boop\tbeep' |  rpad --len 8 --pad % --split '\t'
boop%%%%
beep%%%%
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/string-right-pad`][@stdlib/string-right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>
-   <span class="package-name">[`@stdlib/string-left-pad`][@stdlib/string/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="package-name">[`@stdlib/string-pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-right-pad-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-right-pad-cli

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

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string-left-pad

[@stdlib/string/pad]: https://github.com/stdlib-js/string-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
