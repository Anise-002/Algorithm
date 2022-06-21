const fs = require('fs');
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(`\r\n`);

let result = "";

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(" ").map((i) => +i);
    result += `Case #${i}: ${numbers[0] + numbers[1]}\n`;
}

console.log(result);