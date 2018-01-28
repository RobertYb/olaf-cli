import colors from 'colors';
import qrcode from 'qrcode-terminal';

export default function () {
  const qrStr = colors.yellow('🍺  使用【微信】扫描二维码联系作者【Gavin】:');
  // eslint-disable-next-line
  qrcode.generate('https://u.wechat.com/EJT6UorOv4xp_PGiUOq6Y_E', function (qrcode) {
    console.log(`\n${qrStr}\n\n${qrcode}\n`);
  });
}
