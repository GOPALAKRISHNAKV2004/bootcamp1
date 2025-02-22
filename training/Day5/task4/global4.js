const number = process.argv[2];
if (!number) {
  console.log("Usage: node script.js <number>");
  process.exit(1);
}
const num = parseInt(number, 10);
if (isNaN(num)) {
  console.log("Please provide a valid number.");
  process.exit(1);
}
console.log(`Multiplication table for ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
