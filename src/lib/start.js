import execa from 'execa';
import getStream from 'get-stream';

export default function () {
  const stream = execa('npm', ['start']).stdout;
  stream.pipe(process.stdout);
  getStream(stream).then((value) => {
    console.log(value);
  });
}
