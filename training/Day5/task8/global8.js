const fs = require('fs');
const path = require('path');

function traverseDirectory(directory) {
    console.log(`Directory: ${directory}`);
    
    fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error(`Error reading directory ${directory}:`, err);
            return;
        }
        
        entries.forEach(entry => {
            const fullPath = path.join(directory, entry.name);
            if (entry.isDirectory()) {
                console.log(`  Subdirectory: ${entry.name}`);
                traverseDirectory(fullPath);
            } else {
                console.log(`  File: ${entry.name}`);
            }
        });
    });
}

const directory = process.argv[2] || '.';
traverseDirectory(directory);
