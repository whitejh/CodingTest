// 프로그래머스 Lv1
// 약수의 개수와 덧셈

// 1
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt += 1;
    }
    if (cnt % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}

console.log(solution(13, 17)); // 43 출력 
console.log(solution(24, 27)); // 52 출력

// 2
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
// 제곱근이 정수면 약수의 개수가 홀수