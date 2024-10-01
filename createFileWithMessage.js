import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join, sep } from 'path';

export const createFileWithMessage = (message, filename = null) => {
  const now = new Date();
  const filePath = join(
    'files',
    `${now.getFullYear()}-${now.getMonth().toString().padStart(2, 0)}-${now.getDate().toString().padStart(2, 0)}`,
    filename || `${now.getHours().toString().padStart(2, 0)}-${now.getMinutes().toString().padStart(2, 0)}-${now.getSeconds().toString().padStart(2, 0)}.txt`
  );
  if (!existsSync(dirname(filePath))) {
    mkdirSync(dirname(filePath), { recursive: true });
    console.log(`Created folder ${dirname(filePath)} because it didn't exist`);
  }
  writeFileSync(filePath, `${message}\n`, { flag: 'a+' });
  console.log(`Added ${message} to file ${filePath}`);
};
