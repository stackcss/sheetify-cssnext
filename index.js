const postcss = require('postcss')
const cssnext = require('postcss-cssnext')
const imports = require('postcss-import')
const xtend = require('xtend')

module.exports = transform

function transform (filename, source, options, done) {
  options = xtend(options || {})
  const sourcemap = options.sourcemap
  delete options.sourcemap

  const processor = postcss([
    imports(),
    cssnext(options)
  ])

  const poptions = xtend({
    map: sourcemap === false ? false : { inline: true },
    from: filename,
    messages: {
      browser: true,
      console: false
    }
  }, options || {})

  processor.process(source, poptions).then(function (result) {
    done(null, result.css)
  }, function (err) {
    done(err)
  })
}
