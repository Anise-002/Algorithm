const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString();
result = '';

for (let i = 0; i < input; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '*\n';
}
console.log(result);