const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');
// let result = [];

// for (let i = 0; i < input.length - 1; i++) {
//     let arrNum = input[i].split(' ').map((i) => +i);
//     result.push(arrNum[0] + arrNum[1]);
// }
// console.log(result.join('\n'));

// for (let i = 0; i < input.length - 1; i++) {
//     let arrNum = input[i].split(' ').map((i) => +i);
//     console.log(arrNum[0] + arrNum[1]);
// }

while (input[0][0] != 0) {
    // const num = input.shift().split(' ');
    console.log(input);
    console.log(input.shift().split(' '));
    console.log(input);
    console.log(+num[0] + +num[1]);
}

