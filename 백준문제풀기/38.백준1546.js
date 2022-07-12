const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\r\n');
let score = input[1].split(' ').map((i) => +i);

// 1. 최대값 M 을 구한다.
// 2. 최대값의 인덱스를 구해서 filter를 사용해 나머지 값들에게( 점수 / M * 100)해준다.

function changScore(score){
    const M = Math.max(...score);
    let sum = 0;
    for(let i = 0; i < input[0]; i++){
        sum += score[i] / M * 100;
    }
    console.log(sum /input[0]);
}
changScore(score);

// https://gurtn.tistory.com/53