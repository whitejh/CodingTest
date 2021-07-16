//중복문자제거할 때 indexOf() 활용
function solution(s) {
  let answer="";

  for(let i=0; i<s.length; i++){
    if(s.indexOf(s[i])===i) answer+=s[i];
  }
  return answer;
}
console.log(solution("ksekkset")); // kset 출력