import { arch, cpus, EOL, homedir, userInfo } from 'node:os';

const getOSData = (data) => {
  if (data === '--EOL') {
    console.log(JSON.stringify(EOL));
  }
  if (data === '--cpus') {
    const cpusData = cpus();
    console.log(`Overall amount: ${cpusData.length}${EOL}`, cpusData.map((item) => {
      return { model: item.model, speed: item.speed };
    }));
  }
  if (data === '--homedir') {
    console.log(homedir());
  }
  if (data === '--username') {
    console.log(userInfo().username);
  }
  if (data === '--architecture') {
    console.log(arch());
  }
};

export default getOSData;