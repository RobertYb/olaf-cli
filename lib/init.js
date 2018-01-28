'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  createProject(data).then(() => {
    modify(data.projectName, data.author, data.description);
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createProject(data) {
  const { projectName, type, useScene } = data;
  const completePath = process.cwd();
  if (_path2.default.basename(completePath) === projectName) {
    // 上一级目录为当前项目名
  }

  if (_path2.default.basename(completePath) !== projectName) {
    if (type === 'react' && useScene === 1) {
      // pc
      await _execa2.default.shell(`git clone git@github.com:Gavin1995/olaf-react-next-pc.git ${projectName}`);
      await _execa2.default.shell(`rm -rf ${projectName}/.git`);
    }
  }
}

async function modify(projectName, author, description) {
  await _execa2.default.shell(`grep olaf-react-next-pc -rl ${projectName} | xargs sed -i "" "s/olaf-react-next-pc/${projectName}/g"`);
  await _execa2.default.shell(`grep olaf-template-author -rl ${projectName} | xargs sed -i "" "s/olaf-template-author/${author}/g"`);
  await _execa2.default.shell(`grep olaf-template-description -rl ${projectName} | xargs sed -i "" "s/olaf-template-description/${description}/g"`);
}