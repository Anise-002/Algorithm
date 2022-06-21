const fs = require('fs');
const file = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString();
let result = '';

for (let i = 1; i <= input; i++) {
    result += i + `\n`;
}

console.log(result);