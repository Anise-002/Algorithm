const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ').map(i => +i);

const [ a , b , c] = input;
const maxnum = Math.max(...input);

function result(a, b, c){
    if(a===b && b === c){
        return 10000 + a * 1000;
    }else if( a === b || b === c || a === c){
        if(a===b || a === c) return 1000 + a * 100;
        if(b === c) return 1000 + b * 100 ;
    }else{
        return 100 * maxnum;
    }
}

console.log(result(a,b,c));
