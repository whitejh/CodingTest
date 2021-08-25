// 프로그래머스 Lv2
// 짝지어 제거하기

// 스택
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] !== s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }

  if (arr.length === 0) return 1;
  else return 0;
}

// for문으로 하나씩 보면서 어떠한 배열에 push를 하는데 
// 배열에 마지막으로 들어간 문자가 현재 for문에 걸린 값이 같으면 
// 배열에서 pop, 아니라면 push를 하면 된다.