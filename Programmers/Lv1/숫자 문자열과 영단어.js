// 프로그래머스 Lv1
// 숫자 문자열과 영단어

// 1. 정규표현식 활용
function solution(s) {
  var answer = 0;
  s = s.replace(/zero/gi, "0");
  s = s.replace(/one/gi, "1");
  s = s.replace(/two/gi, "2");
  s = s.replace(/three/gi, "3");
  s = s.replace(/four/gi, "4");
  s = s.replace(/five/gi, "5");
  s = s.replace(/six/gi, "6");
  s = s.replace(/seven/gi, "7");
  s = s.replace(/eight/gi, "8");
  s = s.replace(/nine/gi, "9");

  answer = parseInt(s); // parseInt() : 문자열을 숫자로 변환하는 함수
  //answer = Number(s); // Number() : 문자열을 숫자로 변환하는 함수
  return answer;
}
console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123

// 정규표현식을 구성하는 중요 3개 플래그 (동시에 여러개 사용 가능)
// i (ignore case) : 대소문자를 구별하지 않고 패턴을 검색
// g (Global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
// m (Multi line) : 문자열의 행이 바뀌더라도 패턴 검색을 계속함


// 2. string 메서드(split) & 배열 메서드(join) 활용
function solution(s) {
  let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
