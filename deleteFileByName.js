import { existsSync, readdirSync, rmdirSync, rmSync, unlinkSync } from 'fs';
import { dirname } from 'path';

export const deleteFileByName = (filePath) => {
  if (!existsSync(filePath)) {
    throw new Error(`File ${filePath} does not exist`);
  }
  rmSync(filePath);
  console.log(`Deleted file ${filePath}`);
  if (readdirSync(dirname(filePath)).length == 0) {
    rmdirSync(dirname(filePath));
    console.log(`Deleted also folder ${dirname(filePath)} because it was empty`);
  }
};
