function solution(n, costs) {
  let answer = 0;
  const isVisited = new Array(n).fill(false); // 섬에 방문했는지 여부
  const isBridge = new Array(costs.length).fill(false); // 다리를 건설했는지 여부

  //비용이 작은 간선을 순서로 정렬 (오름차순)
  costs.sort((a, b) => {
    return a[2] - b[2];
  });

  let num = 0; // 간선

  //처음에 가장 작은 간선을 무조건 넣는다. (이유 : 비용이 가장 작으므로)
  isVisited[costs[0][0]] = true;
  isVisited[costs[0][1]] = true;
  isBridge[0] = true;
  answer += costs[0][2]; // 두 섬을 연결하는 다리를 건설할 때 드는 비용
  num += 1;

  //간선의 개수가 노드의 개수 - 1을 만족할때까지 순회
  while (num < n - 1) {
    for (let i = 1; i < costs.length; i++) {
      const [start, end, cost] = costs[i]; // *

      //다리가 건설되어 있지 않고 한쪽 노드만 방문한 경우를 찾는다.
      if (!isBridge[i] && ((!isVisited[start] && isVisited[end]) || (isVisited[start] && !isVisited[end]))) {
        num++;
        answer += cost;
        isVisited[start] = true;
        isVisited[end] = true;
        isBridge[i] = true;
        break;
      }
      // console.log(isVisited);
    }
  }
  return answer;
}