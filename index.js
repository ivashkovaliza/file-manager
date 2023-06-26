import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { homedir } from 'node:os';

import getOSData from './os/os.js';
import calcHash from './hash/hash.js';
import getPath from './getPath.js';
import compress from './gzip/compress.js';
import decompress from './gzip/decompress.js';
import create from './file/create.js';
import remove from './file/remove.js';
import read from './file/read.js';
import rename from './file/rename.js';
import copy from './file/copy.js';
import list from './file/list.js';
import move from './file/move.js';

const index = () => {
  const rl = readline.createInterface({ input, output });
  process.chdir(homedir());

  const args = process.argv.slice(2);
  const usernameArg = args.find(arg => arg.startsWith('--username='));
  const username = usernameArg ? usernameArg.split('=')[1] : 'Anonymous';
  const messageOnClose = `Thank you for using File Manager, ${username}, goodbye!`;
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${process.cwd()}`);

  rl.on('line', async (input) => {
    const args = input.split(' ');
    const command = args[0];
    const arg = args[1];

    try {
      switch (command) {
        case 'up':
          process.chdir(getPath('..'));
          break;
        case 'cd':
          process.chdir(getPath(arg));
          break;
        case 'ls':
          await list(process.cwd());
          break;
        case 'cat':
          await read(getPath(arg), rl);
          break;
        case 'add':
          await create(getPath(arg));
          break;
        case 'rm':
          await remove(getPath(arg));
          break;
        case 'rn':
          await rename(getPath(arg), getPath(args[2]));
          break;
        case 'cp':
          await copy(getPath(arg), getPath(args[2]));
          break;
        case 'mv':
          await move(getPath(arg), args[2]);
          break;
        case 'hash':
          await calcHash(getPath(arg));
          break;
        case 'os':
          getOSData(arg);
          break;
        case 'compress':
          await compress(getPath(arg), getPath(args[2]));
          break;
        case 'decompress':
          await decompress(getPath(arg), getPath(args[2]));
          break;
        case '.exit':
          rl.close();
          process.exit(0);
          break;
        default:
          console.log('Invalid input');
          break;
      }
    } catch (e) {
      console.log('Operation failed');
    } finally {
      console.log(`You are currently in ${process.cwd()}`);
    }
  });

  rl.on('close', () => {
    console.log(messageOnClose);
  });
};

index();