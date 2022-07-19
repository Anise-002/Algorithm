const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("");

console.log(input[0].charCodeAt(0));

//delftstack.com/ko/howto/javascript/javascript-convert-character-code-to-ascii-code/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
