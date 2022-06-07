const fs = require('fs');
let input = fs.readFileSync(`../input.txt`).toString().split(' ');
let arr = input.map((item)=>Number(item));

const a = arr[0];
const b = arr[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);