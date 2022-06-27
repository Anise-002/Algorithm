const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');
let nums = Array(10).fill(0);
const multiple = (input[0] * input[1] * input[2]).toString().split('');

//1. 숫자 카운트 배열 : 0 ~ 9 의 인덱스를 가진 배열 생성 후 초기값 0 넣어주기
//2. 곱한값 숫자별로 나누기
//3. mutiple 배열 안 숫자값 = nums의 인덱스 값
//4. 출력을 나눠서 해야 하기 때문에 for문 사용해서 따로 출력

for (let i = 0; i < multiple.length; i++) {
    nums[multiple[i]]++;
}

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }

nums.forEach((i) => console.log(i));



