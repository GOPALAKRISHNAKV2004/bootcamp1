const fs = require('fs');
const path = require('path');

const command = process.argv[2]; // Command (create/delete)
const filename = process.argv[3]; // Filename

if (!command || !filename) {
    console.log("Usage: node my-tool.js <command> <filename>");
    console.log("Commands:");
    console.log("  create <filename>  - Creates a new file");
    console.log("  delete <filename>  - Deletes a file");
    process.exit(1);
}

const filePath = path.join(__dirname, filename);

if (command === "create") {
    fs.writeFile(filePath, "", (err) => {
        if (err) {
            console.error("Error creating file:", err);
        } else {
            console.log(`File '${filename}' created successfully.`);
        }
    });
} else if (command === "delete") {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
        } else {
            console.log(`File '${filename}' deleted successfully.`);
        }
    });
} else {
    console.log("Invalid command. Use 'create' or 'delete'.");
}
