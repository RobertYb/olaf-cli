'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  const alipayStr = _colors2.default.yellow('🎁  使用支付宝支持奥拉夫(olaf):');
  const wechatStr = _colors2.default.yellow('🎁  使用微信支持奥拉夫(olaf):');
  _qrcodeTerminal2.default.generate('HTTPS://QR.ALIPAY.COM/FKX08302A1JDEVZ9UCBO35', alipay => {
    _qrcodeTerminal2.default.generate('wxp://f2f02b5k9KDp4b4nYwaOUqsTyZwr-eqp_Nda', wechat => {
      console.log(`${alipayStr}\n${alipay}\n\n${wechatStr}\n${wechat}\n`);
    });
  });
};

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _qrcodeTerminal = require('qrcode-terminal');

var _qrcodeTerminal2 = _interopRequireDefault(_qrcodeTerminal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }