//중복문자제거하고 문자열 출력

function solution(s) {
  let answer="";

  for(let i=0; i<s.length; i++){
    if(s.indexOf(s[i])===i) answer+=s[i];
  }
  return answer;
}
console.log(solution("ksekkset")); // kset 출력

// 중복문자 개수 찾기

function solution(s) {
  let answer = 0;
  let pos = s.indexOf('k');
  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }
  return answer;
}
console.log(solution("ksekkset")); // 3 출력 (k 문자개수 = 3)


