'use strict';

var fest = require('fest');
exports.name = 'fest';
exports.outputFormat = 'html';

exports.compileFile = function (file, options) {
  options = options || {};
  var compiled = fest.compile(file, options);
  return new Function ('return ' + compiled)();
}
