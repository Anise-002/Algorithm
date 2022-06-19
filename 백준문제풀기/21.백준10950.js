const fs = require('fs');
const file = process.platform === 'lunux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');

for(let i = 1; i <= input[0]; i++){
    let num = input[i].split(' ').map(i => +i);
    console.log(num[0] + num[1]);
}