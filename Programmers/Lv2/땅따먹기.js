// 프로그래머스 Lv2
// 땅따먹기

// 1
function solution(land) {
  var answer = [];

  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  answer = land[land.length - 1]; // answer = [land[2][0], land[2][1], land[2][2], land[2][3]]

  return Math.max(...answer);
}

// 1. answer에 빈 배열을 생성
// 2. land의 행(land.length)만큼 반복문을 돈다.
// 3. i=1로 설정하여 i(두 번째)행부터 i - 1(위의)행의 본인 열(땅)을 제외한 나머지 열의 최댓값을 본인 열(땅)에 더하여 누적한다.
// 4. answer에 누적된 값들이 있는 마지막 행의 배열을 할당한다.
// 5. 마지막으로 누적된 값들의 최댓값을 반환한다.

// land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]]
// answer = [16,15,13,13]
// https://onlydev.tistory.com/71

// 2
function solution(land) {
  let answer = 0;

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === 0) {
        continue;
      } else {
        let arr = land[i - 1].slice();
        arr[j] = 0;
        land[i][j] += Math.max.apply(null, arr);
        answer = Math.max(land[i][j], answer);
      }
    }
  }

  return answer;
}