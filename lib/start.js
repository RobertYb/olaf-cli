'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  const stream = (0, _execa2.default)('npm', ['start']).stdout;
  stream.pipe(process.stdout);
  (0, _getStream2.default)(stream).then(value => {
    console.log(value);
  });
};

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

var _getStream = require('get-stream');

var _getStream2 = _interopRequireDefault(_getStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }