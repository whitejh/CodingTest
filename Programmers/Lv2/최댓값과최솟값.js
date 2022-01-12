// 프로그래머스 Lv2
// 최댓값과 최솟값

// 1
function solution(s) {
  let answer = '';
  let arr = [];
  let word = s.split(' ');

  for (let i = 0; i < word.length; i++) {
    let a = Number(word[i]);
    arr.push(a);
  }

  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let maxString = String(maxNum);
  let minString = String(minNum);

  answer = minString.concat(' ', maxString);

  return answer;
}

// 2
function solution(s) {
  const arr = s.split(' '); // 문자열의 공백 제거 후 배열에 저장, split 활용

  return Math.min(...arr) + ' ' + Math.max(...arr);
}
