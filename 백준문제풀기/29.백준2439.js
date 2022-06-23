const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString();
// let result = '';

// console.log(input);

// for (let i = 0; i < input; i++) {
//     for (let j = i; j < input - 1; j++) {
//         result += ' ';
//     }
//     for (let k = 0; k <= i; k++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

let num = Number(input);

// new Array(num) 배열을 생성해서 fill 메서드로 공백을 채운다.
// [ ' ', ' ', ' ', ' ', ' ' ]
let star = new Array(num).fill(' ');
console.log(star);

// 인덱스의 마지막 값(여기선 인덱스4)부터 순서대로 star 배열에 넣는다.
for (let i = num - 1; i >= 0; i--) {
    star[i] = "*";
    console.log(star.join(''));
}