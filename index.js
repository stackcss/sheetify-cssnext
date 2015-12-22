const cssnext = require('cssnext')
const xtend = require('xtend')

module.exports = transform

function transform (filename, source, options, done) {
  try {
    source = cssnext(source, xtend({
      sourcemap: true,
      from: filename,
      messages: {
        browser: true,
        console: false
      }
    }, options || {}))
  } catch (e) {
    return done(e)
  }

  done(null, source)
}
