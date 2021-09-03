// 프로그래머스 Lv2
// 가장 큰 수

function solution(numbers) {
  let answer = numbers
    .map((num) => String(num))
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

// map() 메서드를 활용하여 
// 그 안에서 String() 메서드로 numbers 배열에 있는 숫자들을 문자열로 바꾼 다음
// 문자열을 연결했을 때 큰 순서대로 Array.sort()를 해준다.
// Array.sort()는 return하는 값이 양수이면 순서를 그대로 유지하고 음수이면 순서를 바꿔준다.
// join('') : 배열을 문자열로 바꿔줌

// 내림차순으로 배열을 정렬했기에 앞자리가 0인경우
// 모든 인자가 0이라는 걸 알 수 있어서 삼항연산자를 이용하여
// 첫번째 인자가 0인 경우 0을 출력하고 아닌경우 answer를 출력하도록 바꿔주었다.

// 모든 number들을 string으로 바꿔주고 문자열을 그대로 연결한 수(b+a) - 바꿔 연결한 수(a+b)가 양수이면
// ex) b(3) + a(30) - a(30) + b(3) => 330 - 303 = 양수
// 3 30 순서를 그대로 유지한다.