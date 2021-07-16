/* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램 */

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
const result = solution(arr);
console.log(result);

/*
Number.MAX_SAFE_INTEGER 상수는 js에서 안전한 최대 정수값을 나타낸다
*/

// 내장 함수 사용 (최솟값)
function solution2(arr) {
  let answer = Math.min(...arr); // 배열을 넘길 때 ... 연산자 사용
  //let answer = Math.min.apply(null, arr);
  return answer;
}

let arr2 = [5, 3, 7, 11, 2, 15, 17];
const result2 = solution2(arr2);
console.log(result2);

/* Math.min(), Math.max() 최소 최대 구하는 내장함수 */
