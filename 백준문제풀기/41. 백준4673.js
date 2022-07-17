const n = 1000;

function d(n) {
  let num = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return n + result;
}

let selfNumArr = new Array(n + 1).fill(true);

for (let i = 0; i <= n; i++) {
  if (d(i) <= n) {
    selfNumArr[d(i)] = false;
  }
}

for (let j = 0; j < n; j++) {
  if (selfNumArr[j]) {
    console.log(j);
  }
}

// https://itsseo.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-javascript-4673%EB%B2%88-%EC%85%80%ED%94%84%EB%84%98%EB%B2%84
