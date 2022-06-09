const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split(`\r\n`);
let input = fs.readFileSync('./input.txt').toString().split(`\n`);
let a = +input[0];
let b = +input[1];
let num2 =input[1].split('').map((i)=> +i);

console.log(a * num2[2]);
console.log(a * num2[1]);
console.log(a * num2[0]);
console.log(a * b);