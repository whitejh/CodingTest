// 프로그래머스 그래프

function solution(n, results) {
  let boxers = new Array(n).fill(0);
  boxers = boxers.map(a => [[], []]);
  // boxers 배열에 각 선수간 이기고 진 결과를 담는다. 

  for (let i = 0; i < results.length; i++) {
    let result = results[i];
    // console.log(result);
    boxers[result[0] - 1][1].push(result[1]); // 각 선수의 1번째 index에는 각 번호 자신이 이긴 선수들을 추가
    boxers[result[1] - 1][0].push(result[0]); // 각 선수의 0번째 index에는 각 번호 자신이 진 선수를 추가
    // [index 0 : A 번호 자신이 진 선수번호 B, index 1 : A 번호 자신이 이긴 선수번호 B]
  }
  console.log(boxers);

  //  각 선수별 경기 결과가 상호 결과에 주는 영향을 파악 하기
  for (let idx = 0; idx < n; idx++) {
    for (let i = 0; i < results.length; i++) {
      let result = results[i];
      // console.log(result); 
      let r1 = result[0]; // 4
      let r2 = result[1]; // 3

      for (let j = 0; j < boxers.length; j++) {
        let boxer = boxers[j];
        let b1 = boxer[0]; // 지는 리스트
        let b2 = boxer[1]; // 이기는 리스트

        // 이미 모든 선수와의 관계가 결정 되어 있으면 무시 
        if (b1.length + b2.length == n - 1) // 정확하게 순위를 매길 수 있는 경우
          continue;

        // 규칙 : r1 > r2
        // 특정 선수가 r2에는 지는데  r1한테는 지는게 기록 되어 있지 않아도 그 선수는 반드시 r1에게 져야 한다. 왜냐면 r2는 r1에게 지기 때문이다.
        if (b1.includes(r2)) {
          if (!b1.includes(r1)) b1.push(r1);
        }

        // 특정 선수가 r1에게는 이기는데 r2한테 이기는게 기록되어 있지 않아도 그 선수는  반드시 r2에게 이긴다. r1은 r2에게 이기기 때문이다
        if (b2.includes(r1)) {
          if (!b2.includes(r2)) b2.push(r2);
        }
      }
    }
  }
  console.log(boxers);

  let answer = boxers.filter(a => { return a[0].length + a[1].length == n - 1 ? true : false }).length;
  return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])); // 2