const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];


if (!filePath) {
  console.log("Usage: node script.js <file-path>");
  process.exit(1);
}

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Error reading file:", err.message);
    process.exit(1);
  }

  console.log(`File Path: ${filePath}`);
  console.log(`Size: ${stats.size} bytes`);
  console.log(`Creation Date: ${stats.birthtime}`);
  console.log(`Last Modified Date: ${stats.mtime}`);
});
