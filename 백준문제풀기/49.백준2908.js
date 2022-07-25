const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ");
let reverseNum = [];
input.map((elem) => {
  reverseNum.push(elem.split("").reverse().join(""));
});
console.log(Math.max(...reverseNum));

//https://codechacha.com/ko/javascript-reverse-string/
