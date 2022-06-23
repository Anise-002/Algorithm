const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

console.log(input.length);

// for (let i = 0; i < input.length; i++) {
//     const numbers = input[i].split(' ').map(i => +i);
//     console.log(numbers[0] + numbers[1]);
// }


for (let i = 0; i < input.length - 1; i++) {
    let numbers = input[i].split(' ');

    console.log(Number(numbers[0]) + Number(numbers[1]));
}

// let i = 0;

// while (i < input.length) {
//     const numbers = input[i].split(' ').map(i => +i);
//     let result = numbers[0] + numbers[1];
//     console.log(result);
//     i++;
// }