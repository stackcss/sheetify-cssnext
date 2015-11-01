const transform = require('./')
const test = require('tape')
const path = require('path')
const fs = require('fs')

test('basic', compare('basic.css', 'basic-out.css'))
test('import', compare('import.css', 'basic-out.css'))

function compare (inputFile, outputFile) {
  return function compareTest (t) {
    const file = path.join(__dirname, 'fixtures', inputFile)
    const src = fs.readFileSync(file, 'utf8')
    const expected = fs.readFileSync(
      path.join(__dirname, 'fixtures', outputFile)
    , 'utf8')

    t.plan(1)

    transform(file, src, {
      sourcemap: false
    }, function (err, actual) {
      if (err) return t.error(err)

      t.equal(actual, expected, 'output is as expected')
    })
  }
}
