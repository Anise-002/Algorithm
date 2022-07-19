const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString();

// 입력값의 범위를 가진 for문이 필요함
// 각 값들의 차이가 같은 등차수열일 경우 count ++;
// count를 출력시킨다.
let count = 0;

for (let i = 1; i <= input; i++) {
  let numArr = String(i).split("");
  if (numArr.length < 3) {
    count++;
    continue;
  } else {
    let distance = numArr[0] - numArr[1];
    let distance2 = numArr[1] - numArr[2];

    if (distance === distance2) count++;
  }
}
console.log(count);
//https://hawaiian-pizza-it.tistory.com/16
