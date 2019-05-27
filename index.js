const postcss = require('postcss')
const cssnext = require('postcss-cssnext')
const imports = require('postcss-import')
const xtend = require('xtend')

// Patch CSSNext features map to ensure Node v4 support
const features = require('postcss-cssnext/lib/features').default
features.calc = function calc (options) {
  return require('postcss-calc')(options)
}

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
    // Collect imported files for watchify
    const files = [filename]
    result.messages.forEach(function (msg) {
      if (msg.type === 'dependency') {
        files.push(msg.file)
      }
    })

    done(null, {
      css: result.css,
      files: files
    })
  }, function (err) {
    done(err)
  })
}
