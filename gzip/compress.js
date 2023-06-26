import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';

const compress = async (fileToCompressPath, compressedFilePath) => {
  try {
    await pipeline(
      createReadStream(fileToCompressPath),
      createBrotliCompress(),
      createWriteStream(compressedFilePath),
    );
  } catch (error) {
    console.log('Operation failed');
  }
};
export default compress;