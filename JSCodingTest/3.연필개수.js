/* 다스는 12자루. 학생 1인달 연필을 1자루씩 나누어 준다고 할 때 
N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램 */

function solution(n) {
  let answer = 0;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(25));
console.log(solution(178));

/* Math.ceil() 함수 */
/* 인수보다 크거나 같은 수 중에서 가장 작은 정수를 반환 */
