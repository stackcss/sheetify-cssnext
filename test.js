const transform = require('./')
const test = require('tape')
const path = require('path')
const fs = require('fs')

test('basic', function (t) {
  t.plan(1)

  const file = path.join(__dirname, 'fixtures/basic.css')
  const src = fs.readFileSync(file, 'utf8')
  const expected = fs.readFileSync(path.join(__dirname, 'fixtures/basic-out.css'), 'utf8')

  transform(file, src, {
    sourcemap: false
  }, function (err, actual) {
    if (err) return t.error(err)

    t.equal(actual.css, expected, 'output is as expected')
  })
})
test('import', function (t) {
  t.plan(2)

  const file = path.join(__dirname, 'fixtures/import.css')
  const src = fs.readFileSync(file, 'utf8')
  const expected = fs.readFileSync(path.join(__dirname, 'fixtures/basic-out.css'), 'utf8')

  transform(file, src, {
    sourcemap: false
  }, function (err, actual) {
    if (err) return t.error(err)

    t.equal(actual.css, expected, 'output is as expected')
    t.deepEqual(actual.files, [
      file,
      path.join(__dirname, 'fixtures/basic.css')
    ], 'lists imported files')
  })
})
