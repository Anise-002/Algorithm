const fs = require('fs');
let file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');
let T = Number(input[0]);
let result = '' ;

for(let i = 1; i <= T; i++){
    let arr = input[i].split(' ').map(i => +i);
    result += (arr[0] + arr[1] +'\n');
}
console.log(result);