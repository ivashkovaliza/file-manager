import crypto from 'crypto';
import { readFile } from 'node:fs/promises';

const calcHash = async (pathToFile) => {
  try {
    const fileContent = await readFile(pathToFile, 'utf-8');
    console.log(crypto.createHash('sha256').update(fileContent).digest('hex'));
  } catch (error) {
    console.log('Operation failed');
  }
};

export default calcHash;