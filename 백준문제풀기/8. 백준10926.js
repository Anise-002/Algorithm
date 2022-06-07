//내가 작성한 코드
// const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString();
// const idArr= ['joonas', 'baekjoon'];

// for(i = 0; i <idArr.length; i++){
//     if(input === idArr[i]){
//         console.log(`${idArr[i]}??!`);
//     }
// }


// 정답코드

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

console.log(`${input}??!`);