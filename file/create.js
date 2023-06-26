import { writeFile } from 'node:fs/promises';

const create = async (path) => {
  try {
    await writeFile(path, '');
  } catch (error) {
    console.log('Operation failed');
  }
};

export default create;