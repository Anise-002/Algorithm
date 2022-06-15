const fs = require('fs');
let input = fs.readFileSync("./input.txt").toString().split(`\r\n`);
let hour = Number(input[0].split(' ')[0]);
let min = Number(input[0].split(' ')[1]);
let time = Number(input[1]);

// if( min + time >= 60){
//     hour += parseInt((min + time) / 60);
//     min = (min + time) - 60;
// }else{
//     min = min + time;    
// }

// if(hour === 24) hour = 0;
// if(min === 60) min = 0;

// console.log(hour, min);

solution( hour, min, time);

function solution(hour, min, time){
  min += time;
  if(min >= 60){
    hour += Math.floor(min / 60);
    min %= 60;
  }
  if(hour > 23) hour -= 24;

  console.log(hour, min);
}
