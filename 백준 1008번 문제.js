const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().split(' ');
let arr = input.map((item) => Number(item));
console.log(arr[0]/arr[1]);
