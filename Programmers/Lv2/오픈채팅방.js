// 프로그래머스 Lv2
// 오픈채팅방

function solution(record) {
  let answer = [];

  //1. 먼저 배열을 하나 생성해 2차원 배열로 split을 한다.
  let newArr = record.map((str) => str.split(" ")); // 문자열을 잘라 단어들을 배열로 저장

  //2. 그 후 기록의 마지막 닉네임을 아이디와 매칭시킨다.
  //2.1 여기서 Enter와 Change 가 length가 3임을 이용하면 더 쉽게 접근할 수 있다.
  let nickNameSet = {};
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === 3) {
      nickNameSet[newArr[i][1]] = newArr[i][2];
    }
  }

  //3. 그후 닉네임을 통해 출력
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === "Enter") {
      answer.push(nickNameSet[newArr[i][1]] + "님이 들어왔습니다.");
    } else if (newArr[i][0] === "Leave") {
      answer.push(nickNameSet[newArr[i][1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}

// map 메서드
// 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.