function solution(s) {
  let answer = "";

  if (s.length % 2 === 0) { // 짝수 
    answer += s.substr(s.length / 2 - 1, 2);
  } else { // 홀수 
    answer += s.substr(s.length / 2, 1);
  }

  return answer;
}

let str = "study";
console.log(solution(str));
