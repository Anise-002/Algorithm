const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ').map(i=>+i);
// let H = input[0];
// if(H === 0) H = 24;
// let M = input[1];
// let MinTime = H * 60 + M - 45;

// let resultH = parseInt(MinTime/60);
// let resultM = MinTime%60;

// console.log(resultH,resultM);

let H = input[0] * 60;
let M = input[1];
let MinTime = (H + M - 45);

if(input[0] === 0){
    H = 24 * 60;
    MinTime = (H + M - 45);
}
console.log(parseInt(MinTime/60), MinTime%60);






// let H = input[0];
// let M = input[1];

// if(M - 45 < 0){
//     M = 60 + (M -45);
//     H -= 1;
//     if(H < 0){
//         H = 23;
//     }
// }else{
//     M -= 45;
// }

// console.log(H, M);

//const fs = require('fs');
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(file).toString().split('\n');