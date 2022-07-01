const fs = require('fs');
const file = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const result =[];

//1. 24의 나머지 구하기
//2. 서로 다른 값 비교하기
//3. 개수 구하기

input.forEach((i)=> {
   const rem = i % 42;

    if(result.indexOf(rem) === -1){
        result.push(rem);
    }
});

console.log(result.length);



// let newArr = input.map((i)=> i % 24);
// let count = new Set(newArr);
// console.log(count.size);

