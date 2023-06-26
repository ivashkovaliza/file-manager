import { readdir } from 'node:fs/promises';

const list = async (path) => {
  try {
    const dirContent = await readdir(path, { withFileTypes: true });
    const files = dirContent.filter((item) => item.isFile()).sort();
    const directories = dirContent.filter((item) => item.isDirectory()).sort();
    const tabularData = [...directories, ...files].map((item) => {
      return { Name: item.name, Type: item.isFile() ? 'file' : 'directory' };
    });

    console.table(tabularData);
  } catch (error) {
    console.log('Operation failed');
  }
};

export default list;