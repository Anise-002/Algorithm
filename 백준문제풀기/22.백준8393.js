const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(i => +i);
let maxNum = input[0];

let num = 0;
for(let i = 1; i<= maxNum; i++){
    num += i;
}
console.log(num);




