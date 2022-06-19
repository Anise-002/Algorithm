const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('').map(i => +i);
const num = input[0];

function multiply(num){
    for(i = 1; i < 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

multiply(num);