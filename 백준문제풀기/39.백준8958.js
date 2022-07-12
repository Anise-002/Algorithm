const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');

for(let i = 1; i<= input[0]; i++){
    let count = 0;
    let newArr = input[i].split('X').map((i)=>{
        for(let j =1; j <= i.length; j++){
            count += j
        }
    });
    
    console.log(count);
}