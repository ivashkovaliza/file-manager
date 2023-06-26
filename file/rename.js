import { rename as renameFile } from 'node:fs/promises';

const rename = async (oldPath, newPath) => {
  try {
    await renameFile(oldPath, newPath);
  } catch (error) {
    console.log('Operation failed');
  }
};

export default rename;