import { createReadStream } from 'node:fs';

const read = async (path, rl) => {
  const readStream = createReadStream(path, 'utf-8');

  readStream.on('data', (data) => {
    console.log(data);
  });

  readStream.on('end', () => {
    rl.prompt();
  });

  readStream.on('error', () => {
    console.log('Operation failed');
  });
};

export default read;