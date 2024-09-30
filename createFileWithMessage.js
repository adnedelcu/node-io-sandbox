import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, sep } from 'path';

export const createFileWithMessage = (message) => {
  const now = new Date();
  const filePath = `files/${now.getFullYear()}-${now.getMonth()}-${now.getDate()}${sep}${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.txt`;
  if (!existsSync(dirname(filePath))) {
    mkdirSync(dirname(filePath), { recursive: true });
    console.log(`Created folder ${dirname(filePath)} because it didn't exist`);
  }
  writeFileSync(filePath, `${message}\n`, { flag: 'a+' });
  console.log(`Added ${message} to file ${filePath}`);
};
