import { rm } from 'node:fs/promises';

const remove = async (path) => {
  try {
    await rm(path);
  } catch (error) {
    console.log('Operation failed');
  }
};

export default remove;