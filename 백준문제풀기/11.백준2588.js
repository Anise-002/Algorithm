const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(`\r\n`);
// let input = fs.readFileSync('./input.txt').toString().split(`\n`);
let a = +input[0];
let b = +input[1];
let num2 =input[1].split('').map((i)=> +i);

console.log(a * num2[2]);
console.log(a * num2[1]);
console.log(a * num2[0]);
console.log(a * b);

//새로운 방법 2 
// const [num1,num2]=fs.readFileSync('./input.txt').toString().trim().split('\r\n');
// console.log([num1,num2]);
// const num=parseInt(num1);
// console.log(num);
// const multipleNum=num2.split('').map(Number);
// console.log(multipleNum);
// let result=multipleNum.reverse().map(x=>x*num);
// console.log(result);
// result.push(num * parseInt(num2));
// console.log(result.join(`\n`));

//reference : https://velog.io/@wiostz98kr/%EB%B0%B1%EC%A4%80-2588%EB%B2%88-%EA%B3%B1%EC%85%88;