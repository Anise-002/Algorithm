const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n').map(Number);
let cloneInput = [...input];

cloneInput.sort((a, b) => b - a);
console.log(cloneInput[0]);
console.log(input.indexOf(cloneInput[0]) + 1);