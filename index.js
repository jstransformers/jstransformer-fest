'use strict'

const fest = require('fest')

exports.name = 'fest'
exports.outputFormat = 'html'

exports.compileFile = function (file, options) {
  options = options || {}
  const compiled = fest.compile(file, options)
  // eslint-disable-next-line no-new-func
  return new Function('return ' + compiled)()
}
