'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  const qrStr = _colors2.default.yellow('🍺  使用【微信】扫描二维码联系作者【Gavin】:');
  // eslint-disable-next-line
  _qrcodeTerminal2.default.generate('https://u.wechat.com/EJT6UorOv4xp_PGiUOq6Y_E', function (qrcode) {
    console.log(`\n${qrStr}\n\n${qrcode}\n`);
  });
};

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _qrcodeTerminal = require('qrcode-terminal');

var _qrcodeTerminal2 = _interopRequireDefault(_qrcodeTerminal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }