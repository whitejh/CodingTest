function solution(arr) {
  let answer = []; // 빈 배열 선언
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER; // 아주 큰 값을 이렇게 선언
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) min = num;
    }
  }

  // 2. foreach문 사용
  // arr.forEach((num) => {
  //   if (num % 2 !== 0) {
  //     sum += num;
  //     if (num < min) {
  //       min = num;
  //     }
  //   }
  // });

  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
