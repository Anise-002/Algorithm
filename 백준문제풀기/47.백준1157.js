const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().toUpperCase().split("");

//1. 갯수구하기
//2. 갯수 비교하기
//3. 최대값 출력하기 || 중복된 값 경우

// function getCount(arr) {
//   return arr.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(getCount(input));

let Arr = new Array(26).fill(0);

for (let i = 65; i < 91; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i === input[j].charCodeAt(0)) {
      Arr[i - 65] += 1;
    }
  }
}

let count = 0;
let maxNum = Math.max(...Arr);

Arr.map((elem) => {
  if (elem === maxNum) count++;
});

count === 1
  ? console.log(String.fromCharCode(Arr.indexOf(maxNum) + 65))
  : console.log("?");

//https://onelight-stay.tistory.com/368
//https://gurtn.tistory.com/49
