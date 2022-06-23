const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');
const arr1 = input[0].split(' ').map((i) => +i);
const arr2 = input[1].split(' ').map((i) => +i);

// let result = arr2.filter((i) => { return i < arr1[1] });
// console.log(result);
// console.log(result.join(' '));


let result = "";
for (let i = 0; i < arr1[0]; i++) {
    if (arr2[i] < arr1[1]) {
        result += arr2[i] + ' ';
    }
}
console.log(result);