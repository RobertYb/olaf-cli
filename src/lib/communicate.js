import colors from 'colors';
import qrcode from 'qrcode-terminal';

export default function () {
  const qrStr = colors.yellow('🍺  使用【企业微信】扫描二维码联系作者【一石道长/张文】:');
  // eslint-disable-next-line
  qrcode.generate('https://work.weixin.qq.com/u/vcdec0c73ebdca8da1?v=2.1.2.991', function (qrcode) {
    console.log(`\n${qrStr}\n\n${qrcode}\n`);
  });
}
