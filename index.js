import { createFileWithMessage } from "./createFileWithMessage.js";
import { deleteFileByName } from "./deleteFileByName.js";

const action = process.argv[2];

switch (action) {
  case 'create':
    if (!process.argv[3]?.length) {
      throw new Error('Message cannot be empty');
    }
    createFileWithMessage(process.argv[3], process.argv[4]);

    break;

  case 'delete':
    if (!process.argv[3]?.length) {
      throw new Error('File path cannot be empty');
    }
    deleteFileByName(process.argv[3]);

    break;

  default:
    console.error(`Action '${action}' was not recognized. Available actions: 'create' and 'delete'\n`);
    console.log('Usage:');
    console.log('\tnode index create <message> [filename]');
    console.log('\tnode index delete <filename>');

    break;
}
