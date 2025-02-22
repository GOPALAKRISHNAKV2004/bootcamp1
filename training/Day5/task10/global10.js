const fs = require("fs").promises;

// Function to read a file
function readFile(filePath) {
  return fs.readFile(filePath, "utf8");
}

// Function to process content (convert to uppercase)
function processContent(content) {
  return content.toUpperCase();
}

// Function to write processed content to a new file
function writeFile(newFilePath, content) {
  return fs.writeFile(newFilePath, content, "utf8");
}

// File paths
const inputFile = "input.txt";
const outputFile = "output.txt";

// Promise Chain Execution
readFile(inputFile)
  .then((data) => {
    console.log("📖 File read successfully!");
    const processedData = processContent(data);
    return writeFile(outputFile, processedData);
  })
  .then(() => {
    console.log(`✅ Processed content written to ${outputFile}`);
  })
  .catch((error) => {
    console.error("❌ Error:", error.message);
  });
