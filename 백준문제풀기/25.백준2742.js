const fs = require('fs');
const file = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(file).toString());
let result = '';

for (let i = +input; i > 0; i--) {
    result += i + `\n`;
}

console.log(result);