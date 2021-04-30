// 1번째 방법
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

let str = 'BANANA';
console.log(solution(str));

// 2번째 방법 : replace() 함수, 'g' modifier 사용
function solution2(s) {
  let answer2 = s;
  answer2 = answer2.replace(/A/g, '#');
  return answer2;
}

let str2 = 'BANANA';
console.log(solution2(str2));
