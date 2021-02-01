/* 자연수 N이 입력되면 1부터 N까지의 합 출력 */

function solution(a) {
  let answer = 0;

  if (answer > 20) return;
  else {
    for (let i = 0; i <= a; i++) answer += i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));
