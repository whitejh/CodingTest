// 프로그래머스 Lv2
// 순위 검색 (카카오 블라인드 2021)


function solution(info, query) {
  var answer = [];
  let map = {};

  function combination(infos, score, map, start) {
    let key = infos.join("");  // 키 값으로 쓸거 합쳐주기
    let value = map[key];      // 값 있는지 없는지 확인해주기

    if (value) { // 값이 있으면 push
      map[key].push(score);
    } else { // 값이 없으면 프로퍼티 만들어주기
      map[key] = [score];
    }

    // -를 이용해 조합 만들기
    for (let i = start; i < infos.length; i++) {
      let combiArr = [...infos]; // 전개연산자 ...
      combiArr[i] = '-';

      combination(combiArr, score, map, i + 1);
    }
  }


  // 이분탐색
  function binarySearch(map2, key2, score2) {
    let scoreArr = map2[key2];

    if (scoreArr) {

      var start = 0;
      var end = scoreArr.length;

      while (start < end) {
        var mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= score2) { // 현재 가르키는 값보다 내가 찾는 값이
          end = mid;
        } else if (scoreArr[mid] < score2) {
          start = mid + 1;
        }
      }

      return scoreArr.length - start;
    }
    else return 0

  }



  // 1. -로 가능한 모든 조합 만들기
  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(" ");
    let score = infos.pop();

    combination(infos, score, map, 0);
  }

  // 2. 이분탐색을 위해 정렬
  for (let key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  // 3. 이분탐색 실행
  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, "").split(" ");
    let score = Number(querys.pop());

    answer.push(binarySearch(map, querys.join(""), score));
  }

  return answer;
}