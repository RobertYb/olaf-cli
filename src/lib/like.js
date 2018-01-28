import colors from 'colors';
import qrcode from 'qrcode-terminal';

export default function () {
  const alipayStr = colors.yellow('🎁  使用支付宝支持奥拉夫(olaf):');
  const wechatStr = colors.yellow('🎁  使用微信支持奥拉夫(olaf):');
  qrcode.generate('HTTPS://QR.ALIPAY.COM/FKX08302A1JDEVZ9UCBO35', (alipay) => {
    qrcode.generate('wxp://f2f02b5k9KDp4b4nYwaOUqsTyZwr-eqp_Nda', (wechat) => {
      console.log(`${alipayStr}\n${alipay}\n\n${wechatStr}\n${wechat}\n`);
    });
  });
}
