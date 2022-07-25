const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ");

// 1. 알파벳배열개수를 가진 배열을 생성한다. fill(false)
// 2. input의 요소들을 하나로 쪼갠다.
// 3. 아스키코드의 숫자를 이용해 알파벳 숫자 배열의 false -> true로 만든다.
// 4. true의 개수를 구해 출력한다.

// let Arr = new Array(26).fill(false);

// for (let i = 0; i < input.length; i++) {
//   let splitArr = input[i].split("");
//   for (let j = 0; j < splitArr.length; j++) {
//     Arr[splitArr[j].charCodeAt(0) - 65] = true;
//   }
// }

// let count = 0;
// const result = Arr.filter((elem) => {
//   if (elem === true) count++;
// });

// console.log(count);

console.log(input);
if (input[0] === "") {
  console.log(0);
} else {
  console.log(input.length);
}
//https://dpsc615.tistory.com/49
