// 프로그래머스 Lv2
// 기능개발

// 1
function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }

    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}
console.log(solution([93, 30, 55]));
console.log(solution([95, 90, 99, 99, 80, 99]));
