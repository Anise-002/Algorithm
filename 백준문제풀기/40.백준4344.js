const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');

//1. 반 평균을 구한다.
//2. 반 평균을 넘은 학생 수를 구한다.
//3. 학생수 / 전체 학생수의 비율을 구한다.

for(let i = 1; i <= input[0]; i++){
    let sum = 0;
    let score = 0;
    let filterArr = [];

    // 1.반평균 구하기
    let numArr = input[i].split(' ').map((i)=>+i);
    let studentNum = numArr.shift()
    for(let j = 0; j < studentNum; j++){
        sum += numArr[j]; 
    }
    score = sum/studentNum;

    //2. 반 평균을 넘는 학생 수 구하기
    filterArr = numArr.filter((i)=> i > score);

    //3. 학생 비율 구하기
    let rate = (filterArr.length)/ studentNum * 100;
    console.log(rate.toFixed(3) + '%');
}