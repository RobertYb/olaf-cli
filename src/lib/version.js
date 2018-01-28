import colors from 'colors';
import fs from 'fs';
// import qrcode from 'qrcode-terminal';

export default function () {
  // const version = colors.yellow('🍺  当前olaf-cli版本: v 0.0.1，使用【企业微信】扫描二维码联系作者:');
  const { version } = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`, 'utf8'));
  const des = colors.yellow(`🍺  当前olaf-cli版本: v${version}`);
  let logo = `
 ________  ___       ________  ________ 
|\\   __  \\|\\  \\     |\\   __  \\|\\  _____\\
\\ \\  \\|\\  \\ \\  \\    \\ \\  \\|\\  \\ \\  \\__/ 
 \\ \\  \\\\\\  \\ \\  \\    \\ \\   __  \\ \\   __\\
  \\ \\  \\\\\\  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\_|
   \\ \\_______\\ \\_______\\ \\__\\ \\__\\ \\__\\ 
    \\|_______|\\|_______|\\|__|\\|__|\\|__|\n\n`;
  logo = colors.rainbow(logo);
  console.log(`${logo}${des}\n`);
  // qrcode.generate('https://work.weixin.qq.com/u/vcdec0c73ebdca8da1?v=2.1.2.991', function (qrcode) {
  //   console.log(`${logo}${version}\n\n${qrcode}\n`);
  // });
}
