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

# Minimum Data Type

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the minimum ndarray [data type][@stdlib/ndarray/dtypes] of the closest "kind" necessary for storing a provided scalar value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import minDataType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-min-dtype@deno/mod.js';
```

#### minDataType( value )

Returns the minimum ndarray [data type][@stdlib/ndarray/dtypes] of the closest "kind" necessary for storing a provided scalar value.

```javascript
var dt = minDataType( 3.141592653589793 );
// returns 'float32'

dt = minDataType( -3 );
// returns 'int8'

dt = minDataType( 3 );
// returns 'uint8'

dt = minDataType( '3' );
// returns 'generic'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** provide precision guarantees for non-integer-valued real numbers. In other words, the function returns the smallest possible floating-point (i.e., inexact) [data type][@stdlib/ndarray/dtypes] for storing numbers having decimals.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import roundn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import minDataType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-min-dtype@deno/mod.js';

var dt;
var v;
var i;

// Generate numbers of varying magnitudes and determine the minimum data type for each value...
for ( i = 0; i < 100; i++ ) {
    v = randu() * pow( 2.0, discreteUniform( 0, 40 ) );
    if ( randu() < 0.5 ) {
        v *= -1;
    }
    v = roundn( v, discreteUniform( -1, 0 ) );
    dt = minDataType( v );
    console.log( 'min(%d) => %s', v, dt );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/dtypes`][@stdlib/ndarray/dtypes]</span><span class="delimiter">: </span><span class="description">list of ndarray data types.</span>
-   <span class="package-name">[`@stdlib/ndarray/promotion-rules`][@stdlib/ndarray/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the ndarray data type with the smallest size and closest kind to which ndarray data types can be safely cast.</span>
-   <span class="package-name">[`@stdlib/ndarray/safe-casts`][@stdlib/ndarray/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast.</span>

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-min-dtype.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-min-dtype

[test-image]: https://github.com/stdlib-js/ndarray-min-dtype/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/ndarray-min-dtype/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-min-dtype/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-min-dtype?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-min-dtype.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-min-dtype/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-min-dtype/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-min-dtype/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-min-dtype/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-min-dtype/main/LICENSE

<!-- <related-links> -->

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules/tree/deno

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray-safe-casts/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
