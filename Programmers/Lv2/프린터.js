// 프로그래머스 Lv2
// 프린터

function solution(priorities, location) {
  let answer = 0;
  const checkArray = []; // priorities에서 목표 문서를 표시하는 배열 생성

  // 목표 문서의 위치 요소는 true, 나머지는 false로 초기화
  for (let i = 0; i < priorities.length; i++) {
    if (i === location)
      checkArray[i] = true;
    else
      checkArray[i] = false;
  }
  // priorites가 전부 비워질 때까지 실행
  while (priorities.length > 0) {
    const firstPriority = priorities.shift(); // priorites와 checkArray 첫 요소를 가져오기
    const firstCheck = checkArray.shift();
    let check = true; // 해당 요소보다 큰 요소가 있는지 없는지를 판별할 변수

    for (let j = 0; j < priorities.length; j++) {
      if (firstPriority < priorities[j]) {
        priorities.push(firstPriority); // 뒤로 넘기기
        checkArray.push(firstCheck);    // 뒤로 넘기기
        check = false; // 큰 요소가 있으므로 false
        break;
      }
    }
    // check가 true이면 가장 중요한 문서이므로 출력처리
    if (check) {
      answer += 1;
      // 목표로 한 문서인 경우 중단
      if (firstCheck) {
        break;
      }
    }
  }
  return answer;
}

// 목표로 하는 문서의 위치를 판별하기 위해서, 별도의 checkArray 배열을 만든다. 
// 목표로 하는 인덱스는 true로 초기화 하도록 한다.

// 주어진 priorities가 비어질 때까지 while을 반복한다. 
// 이때, priorites와 checkArray의 가장 맨 앞 요소를 shift를 통해서 가져오고 
// 해당 요소보다 큰 요소가 있는 지 없는 지를 판별하는 불린 변수 check를 true로 선언한다.

// for문을 통해서 priorities 의 맨 앞 요소와 다른 요소를 비교한다. 
// 큰 요소가 있는 경우 priorities, checkArray 맨 앞 요소를 push로 다시 원래 배열의 뒤로 넣는다. 
// 그리고 check를 false로 초기화하고 break하여 반복문을 중단한다.

// 만약, 큰 요소가 없는 경우 check가 true이므로 if문을 통해서 몇 번째 문서인지 기록하고
// 가져온 checkArray의 첫 요소가 true이면 break로 완료 처리한다.

// 2
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index, priority: priority
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex(queueEle => queueEle.index === location) + 1;
}