/* 다스는 12자루. 학생 1인달 연필을 1자루씩 나누어 준다고 할 때 
N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램 */

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
