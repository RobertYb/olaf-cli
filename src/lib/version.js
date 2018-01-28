import colors from 'colors';
import fs from 'fs';

export default function () {
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
}
