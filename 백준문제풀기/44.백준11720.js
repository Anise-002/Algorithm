const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\r\n");
let num = 0;

const numArr = input[1].split("").map((i) => (num += Number(i)));
// const result = numArr.map((i) => (num += i));
console.log(num);
