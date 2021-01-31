/*100이하의 자연수 a,b,c를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램 작성(정렬 사용 x) */

function solution(a, b, c) {
  let answer;
  if(a<b) answer = a;
  else answer = b;
  if(c<answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));