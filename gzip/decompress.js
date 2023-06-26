import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';

const decompress = async (fileToDecompressPath, decompressedFilePath) => {
  try {
    await pipeline(
      createReadStream(fileToDecompressPath),
      createBrotliDecompress(),
      createWriteStream(decompressedFilePath),
    );
  } catch (error) {
    console.log('Operation failed');
  }
};
export default decompress;