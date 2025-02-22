const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log('Please provide exactly one number as an argument.');
  process.exit(1); 
}

const num = parseFloat(args[0]);
if (isNaN(num)) {
  console.log('The argument must be a valid number.');
  process.exit(1); 
}

if (num % 2 === 0) {
  console.log('${num} is even.');
} else {
  console.log('${num} is odd.');
}
