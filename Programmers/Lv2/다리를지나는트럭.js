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