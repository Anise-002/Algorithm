const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(' ').map((i) => +i);

let count = 0;
let sum;
let num = input;

while (true) {
    sum = parseInt(num % 10 + num / 10);
    num = (num % 10) * 10 + sum % 10;
    count++;

    if (num == input) break;
}

console.log(count);




















// let sumArr = [];
// let a;
// let b;

// let numbers = input.map((i) => i < 10 ? `0${i}` : i);
// numbers = numbers.toString().split('');
// let sum = Number(numbers[0]) + Number(numbers[1]);
// sumArr.push(sum);
// console.log(sumArr);


// if (input != sum) {
//     while (input !== sum) {
//         let newNumArr = sumArr.map((i) => i < 10 ? `0${i}` : i);
//         let i = newNumArr.toString().split('');
//         a = numbers[1];
//         b = i[1];
//         sum = a + b;
//         sumArr = [sum]
//         count++;
//     }
// } else {
//     count++;
// }

// console.log(count);
