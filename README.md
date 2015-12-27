# sheetify-cssnext [![stability][0]][1]
[![build status][4]][5] [![test coverage][6]][7] [![js-standard-style][10]][11]

[cssnext][12] transform for [sheetify][13]. Use tomorrow's CSS syntax, today.

## Installation
```sh
$ npm install sheetify-cssnext
```

## Usage
```js
const sheetify = require('sheetify/stream')
const path = require('path')

const opts = {
  use: [ [ 'sheetify-cssnext', { sourcemap: false } ] ],
  basedir: __dirname
}

sheetify(path.join(__dirname, 'index.css'), opts)
  .pipe(process.stdout)
```

## See Also
- [cssnext][12]
- [sheetify][13]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[4]: https://img.shields.io/travis/sheetify/sheetify-cssnext/master.svg?style=flat-square
[5]: https://travis-ci.org/sheetify/sheetify-cssnext
[6]: https://img.shields.io/codecov/c/github/sheetify/sheetify-cssnext/master.svg?style=flat-square
[7]: https://codecov.io/github/sheetify/sheetify-cssnext
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://github.com/cssnext/cssnext
[13]: https://github.com/sheetify/sheetify
