const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');
let result = '';

//Case #x: A + B = C"
for (let i = 1; i <= input[0]; i++) {
    const newinput = input[i].split(' ').map((i) => +i);
    result += `Case #${i}: ${newinput[0]} + ${newinput[1]} = ${newinput[0] + newinput[1]}\n`;
}
console.log(result);