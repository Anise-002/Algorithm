const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("");
let time = 0;

input.forEach((elem, index) => {
  input[index] = parseInt(elem.charCodeAt(0) - 64);
});

for (let i = 0; i < input.length; i++) {
  if (input[i] >= 1 && input[i] <= 3) {
    time += 3;
  } else if (input[i] >= 4 && input[i] <= 6) {
    time += 4;
  } else if (input[i] >= 7 && input[i] <= 9) {
    time += 5;
  } else if (input[i] >= 10 && input[i] <= 12) {
    time += 6;
  } else if (input[i] >= 13 && input[i] <= 15) {
    time += 7;
  } else if (input[i] >= 16 && input[i] <= 19) {
    time += 8;
  } else if (input[i] >= 20 && input[i] <= 22) {
    time += 9;
  } else if (input[i] >= 23 && input[i] <= 26) {
    time += 10;
  }
}

console.log(time);

//https://onelight-stay.tistory.com/523
