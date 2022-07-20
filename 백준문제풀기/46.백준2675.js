const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\r\n");

for (let i = 1; i <= input[0]; i++) {
  let result = "";
  let arr = input[i].split(" ");
  let word = arr[1].split("");
  for (let j = 0; j < arr[1].length; j++) {
    result += word[j].repeat(arr[0]);
  }
  console.log(result);
}

//https://curryyou.tistory.com/199
