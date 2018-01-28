import path from 'path';
import execa from 'execa';

export default function (data) {
  createProject(data).then(() => {
    modify(data.projectName, data.author, data.description);
  });
}

async function createProject(data) {
  const { projectName, type, useScene } = data;
  const completePath = process.cwd();
  if (path.basename(completePath) === projectName) {
    // 上一级目录为当前项目名
  }

  if (path.basename(completePath) !== projectName) {
    if (type === 'react' && useScene === 1) {
      // pc
      await execa.shell(`git clone git@github.com:Gavin1995/olaf-react-next-pc.git ${projectName}`);
      await execa.shell(`rm -rf ${projectName}/.git`);
    }
  }
}

async function modify(projectName, author, description) {
  await execa.shell(`grep olaf-react-next-pc -rl ${projectName} | xargs sed -i "" "s/olaf-react-next-pc/${projectName}/g"`);
  await execa.shell(`grep olaf-template-author -rl ${projectName} | xargs sed -i "" "s/olaf-template-author/${author}/g"`);
  await execa.shell(`grep olaf-template-description -rl ${projectName} | xargs sed -i "" "s/olaf-template-description/${description}/g"`);
}
