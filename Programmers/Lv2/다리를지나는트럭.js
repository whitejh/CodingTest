// 프로그래머스 Lv2
// 다리를 지나는 트럭

// 1
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = []; // 다리 만들기 (배열)

  for (let i = 0; i < bridge_length; i++)
    bridge[i] = 0;

  // 트럭을 이동시키기
  // 트럭 배열(truck_weights)이 빌때까지 실행
  while (true) {
    // 다리위의 트럭 이동처리
    bridge.shift();
    bridge.push(0);
    answer += 1;

    let bridgeWeight = bridge.reduce((prev, curr) => prev + curr); // 다리의 현재 무게

    // 다리가 무게를 견딜 수 있는 경우
    if (((bridgeWeight + truck_weights[0]) <= weight)) {
      const truck = truck_weights.shift();// truck_weights 배열에서 첫번째 요소 제거하고 제거한 요소 반환
      bridge[bridge_length - 1] = truck;  // 트럭을 다리에 올리고 
      bridgeWeight += truck;              // 다리위의 무게 더하기
    }

    if (bridgeWeight === 0) break;
  }

  return answer;
}

// 주어진 bridge_length만큼 길이를 가지는 bridge 배열을 만든다.각 요소는 0으로 초기화한다.
// while문을 통해서 다리위의 트럭 이동처리, 트럭을 다리위에 올리기 작업을 한다.
// 다리위의 트럭 이동처리는 bridge의 가장 맨앞 요소를 shift를 사용해서 빼고 가장 뒤에는 push로 0을 넣는다.이 처리는 1초가 지난 것이므로 그만큼 answer에 1초를 더한다.
// 다리위의 트럭이 이동처리되고 난 뒤에는 bridge에 reduce 메소드를 사용해서 다리위의 전체 요소의 합(다리위의 무게)을 구한다.
// 그리고 구한 값을 if문을 통해서 다음 트럭이 다리 위에 올 수 있는지 weight와 비교한다.
// 올라올 수 있으면, truck_weight에 shift 메소드를 사용해서 빼낸 뒤 bridge의 제일 끝 인덱스에 넣고 다리위의 무게에도 더한다.
// 이 이후에, 다리위 무게가 0이면 이동할 트럭이 더이상 없는 것이므로 break한다