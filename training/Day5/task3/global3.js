const inputString = process.argv[2];

if (!inputString) {
  console.log("Usage: node script.js <string>");
  process.exit(1);
}

const reversedString = inputString.split('').reverse().join('');

console.log(reversedString); 