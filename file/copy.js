import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const copy = async (src, dist) => {
  try {
    await pipeline(
      createReadStream(src),
      createWriteStream(dist),
    );
  } catch (error) {
    console.log('Operation failed');
  }
};

export default copy;