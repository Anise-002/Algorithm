const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ').map(i => +i);
const a = input[0];
const b = input[1];
if(a>b){
    console.log('>');
}else if(a < b){
    console.log('<');
}else{
    console.log('==');
}