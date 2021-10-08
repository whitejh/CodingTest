function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) { // 세로로 나눌 때 나머지가 없을 경우만
      let weight = sum / height; // 가로 길이

      // 테두리를 제외한 길이를 구해야 하기 때문에 각각 -2 해준 뒤 곱셈
      // 결과가 yellow와 같다면 해당 높이와 길이 반환
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
  return answer;
}

// 카펫의 중앙에는 노란색, 테투리는 갈색으로 칠해져 있다.
// 노란색의 격자 수와 갈색의 결자 수가 주어질 때, 총 카펫의 가로, 세로의 길이 구하기
// 카펫의 세로 길이는 3부터. (위 아래 갈색, 가운데가 노란색이기 때문)  
// 갈색과 노란색의 합을 임의의 높이로 나눌때 나오는 높이와 가로 값을 토대로
// (가로 - 2) * (높이 - 2) = 노란색 격자 수라면, 현재 높이, 가로의 길이를 찾은 것이다.
// -2를 해서 곱한 이유는 양끝의 테투리가 갈색이기 때문에 빼고 계산해준다.

// 테두리를 제외한 길이를 구해야 하기 때문에 각각 -2 해준 뒤 곱셈
// 결과가 yellow와 같다면 해당 가로와 세로 길이 반환

