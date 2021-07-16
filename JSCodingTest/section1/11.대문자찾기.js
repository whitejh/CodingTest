function solution(s) {
  let answer = 0;
  for(let x of s) {
    if(x===x.toUpperCase()) // 문자를 대문자로 변환
      answer++;
    
    //let num=x.charCodeAt();
    //if(num>= 65 && num <= 90) answer++; //아스키 코드 활용
  }
  return answer;
}

let str = "KoreaTimeGood"
console.log(solution(str));