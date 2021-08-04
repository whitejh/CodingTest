// 프로그래머스 Lv1
// 서울에서 김서방 찾기

// 1. findIndex() 활용
// https://hianna.tistory.com/405
function solution(seoul) {
  var answer = "김서방은 " + seoul.findIndex(findKim) + "에 있다";
  return answer;
}

function findKim(element) {
  if (element === "Kim") return true;
}

// 2. indexOf() 활용
function solution(seoul) {
  var answer = "";

  answer = "김서방은 " + seoul.indexOf("Kim") + "에 있다";
  return answer;
}
