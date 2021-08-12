// 프로그래머스 Lv1
// 3진법 뒤집기

// 1
function solution(n) {
  let answer = n.toString(3).split('').reverse().join('');
  return parseInt(answer, 3);
}

// n을 toString(3) 을 이용하여 3진수로 만들어주고 split('')으로 문자열을 분할하여 배열로 만들어줌.
// reverse()를 이용하여 배열을 반대로 정렬하고 그값을 join('')하여 다시 문자열로 합쳐준 후에
// parseInt(answer, 3)을 통해 3진수가 되어있는 값을 본래의 10진법인 값의 정수로 만들어준다.

// parseInt(string, radix) : 전달 받은 문자열을 전달 받은 radix로 분석한 정수를 반환
// 해당 문자열이 3진법을 나타내고 있어, 3진법으로 분석한 정수를 반환
// String.split('').reverse().join('') : 문자열 뒤집기
