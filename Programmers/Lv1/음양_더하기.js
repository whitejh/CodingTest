// 프로그래머스 Lv1
// 음양 더하기

// 1
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}
// 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수
