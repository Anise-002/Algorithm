const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("");

let stringArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < stringArr.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === stringArr[i]) {
      stringArr[i] = j;
    }
  }
}

for (let k = 0; k < stringArr.length; k++) {
  if (typeof stringArr[k] === "string") stringArr[k] = -1;
}

console.log(stringArr.join(" "));
