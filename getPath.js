import { isAbsolute, join } from 'path';

const getPath = (path) => {
  return isAbsolute(path) ? path : join(process.cwd(), path);
};

export default getPath;