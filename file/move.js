import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import remove from './remove.js';

const move = async (src, dist) => {
  try {
    await pipeline(
      createReadStream(src),
      createWriteStream(dist),
    );
    await remove(src);
  } catch (error) {
    console.log('Operation failed');
  }
};

export default move;