const fs = require('fs');
let input = fs.readFileSync(`../input.txt`).toString().split(` `);
console.log(input);
let arr = input.map((item)=> Number(item));
console.log(arr[0] - arr[1]);
