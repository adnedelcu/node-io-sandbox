# File Management Scripts

This project contains a set of Node.js scripts for managing files, allowing you to create files with custom messages and delete files by name.

## Table of Contents

- [Overview](#overview)
- [File Structure](#file-structure)
- [Usage](#usage)
  - [Creating a File](#creating-a-file)
  - [Deleting a File](#deleting-a-file)
- [Script Descriptions](#script-descriptions)
  - [index.js](#indexjs)
  - [createFileWithMessage.js](#createfilewithmessagejs)
  - [deleteFileByName.js](#deletefilebynamejs)

## Overview

This project provides a simple command-line interface for two main operations:
1. Creating files with custom messages
2. Deleting files by name

The scripts are designed to work together, providing a user-friendly way to manage files through the command line.

## File Structure

The project consists of three main JavaScript files:

- `index.js`: The entry point of the application, handling command-line arguments and calling the appropriate functions.
- `createFileWithMessage.js`: Contains the logic for creating new files with custom messages.
- `deleteFileByName.js`: Contains the logic for deleting files and empty folders.

## Usage

To use these scripts, you'll need Node.js installed on your system. You can run the scripts using the `node` command followed by the appropriate arguments.

### Creating a File

To create a new file with a custom message:

```
node index create <message> [filename]
```

- `<message>`: The content you want to write to the file (required).
- `[filename]`: An optional filename. If not provided, a timestamp-based filename will be used.

Example:
```
node index create "Hello, World!" my-file.txt
```

### Deleting a File

To delete a file:

```
node index delete <filename>
```

- `<filename>`: The name of the file you want to delete (required).

Example:
```
node index delete files/2024-03-01/my-file.txt
```

## Script Descriptions

### index.js

This is the main entry point for the application. It:

- Parses command-line arguments
- Determines which action to perform (create or delete)
- Calls the appropriate function based on the action
- Handles errors and provides usage instructions

### createFileWithMessage.js

This script is responsible for creating new files. It:

- Generates a file path based on the current date and time
- Creates necessary directories if they don't exist
- Writes the provided message to the file
- Appends to the file if it already exists

### deleteFileByName.js

This script handles file deletion. It:

- Checks if the specified file exists
- Deletes the file
- Removes the parent directory if it becomes empty after file deletion

## Error Handling

The scripts include basic error handling:

- They will throw an error if required arguments are missing
- They will inform the user if a specified file doesn't exist during deletion
- They will provide usage instructions if an unrecognized action is specified

Remember to handle these scripts with care, especially the delete functionality, to avoid unintended data loss.
