/* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램 */

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

/*
Number.MAX_SAFE_INTEGER 상수는 js에서 안전한 최대 정수값을 나타낸다
*/
