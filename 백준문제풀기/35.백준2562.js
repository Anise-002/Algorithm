const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 1. 입력 받는 값은 배열로 만든다.
// 2. input의 배열을 복사한다.(깊은 복사를 해서 원본 배열이 바뀌지 않도록 한다.)
// 3. sort()를 이용해서 배열을 오름차순으로 정렬한다.
// 4. 출력(원배열에서 최대값의 인덱스를 찾는다.)
let input = fs.readFileSync(file).toString().split('\r\n').map(Number);
let cloneInput = [...input];

cloneInput.sort((a, b) => b - a);
console.log(cloneInput[0]);
console.log(input.indexOf(cloneInput[0]) + 1);