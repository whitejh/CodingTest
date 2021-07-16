function solution(s) {
  let answer = ""; 
  for(let x of s){
    if(x.toUpperCase() == x) answer+=x.toLowerCase();
    else answer+=x.toUpperCase();
  }

  return answer;
}

let str = "StuDY";
console.log(solution(str));
