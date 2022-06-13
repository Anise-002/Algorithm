// const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split(`\r\n`).map(i => +i);
// const X = input[0];
// const Y = input[1];

// if(X > 0 && Y >0){
//     console.log(1);
// }else if(X < 0 && Y > 0 ){
//     console.log(2);
// }else if(X < 0 && Y < 0 ){
//     console.log(3);
// }else if(X > 0 && Y < 0 ){
//     console.log(4);
// }

const readline = require('readline');
const fs = require('fs');
const file = './input.txt';
const rl = readline.createInterface({
    input : fs.createReadStream(file),
    output : process.stdout,
    terminal : false
});

let input = [];

rl.on('line', function(line){
    input.push(line);
})
.on('close', function(){
   const X = input[0];
    const Y = input[1];

    if(X > 0 && Y >0){
        console.log(1);
    }else if(X < 0 && Y > 0 ){
        console.log(2);
    }else if(X < 0 && Y < 0 ){
        console.log(3);
    }else if(X > 0 && Y < 0 ){
        console.log(4);
    }
    process.exit();
})