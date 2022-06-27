const fs = require('fs');
const file = process.platform === 'linux' ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\r\n");


let numberArr = input[1].toString().split(' ').map((i) => +i);
// let minValue = numberArr.sort((a, b) => a - b)[0];
// let maxValue = numberArr.sort((a, b) => b - a)[0];
// console.log(minValue, maxValue);

numberArr.sort((a, b) => a - b);

console.log(numberArr[0], numberArr[input[0] - 1]);


