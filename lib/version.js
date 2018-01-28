'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  const { version } = JSON.parse(_fs2.default.readFileSync(`${__dirname}/../package.json`, 'utf8'));
  const des = _colors2.default.yellow(`🍺  当前olaf-cli版本: v${version}`);
  let logo = `
 ________  ___       ________  ________ 
|\\   __  \\|\\  \\     |\\   __  \\|\\  _____\\
\\ \\  \\|\\  \\ \\  \\    \\ \\  \\|\\  \\ \\  \\__/ 
 \\ \\  \\\\\\  \\ \\  \\    \\ \\   __  \\ \\   __\\
  \\ \\  \\\\\\  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\_|
   \\ \\_______\\ \\_______\\ \\__\\ \\__\\ \\__\\ 
    \\|_______|\\|_______|\\|__|\\|__|\\|__|\n\n`;
  logo = _colors2.default.rainbow(logo);
  console.log(`${logo}${des}\n`);
};

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }