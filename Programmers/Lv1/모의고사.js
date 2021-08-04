// 프로그래머스 Lv1
// 모의고사

// 1
function solution(answers) {
  var answer = [];
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (supo1[i % supo1.length] === answers[i]) result[0]++;
    if (supo2[i % supo2.length] === answers[i]) result[1]++;
    if (supo3[i % supo3.length] === answers[i]) result[2]++;
  }

  let max = Math.max(result[0], result[1], result[2]);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === max) answer.push(i + 1);
  }
  return answer;
}

// 수포자 1,2,3의 답을 실제 답의 길이만큼 for 반복문 돌면서 확인
// 각각 수포자들의 답이 실제 답과 일치하면, 해당 수포자 인덱스의 result값 1 증가

// result 배열 인자 중에서 가장 큰 수 뽑음
// result 배열 인자 3개 중에서 max와 같은 값이 나오면
// 학생의 번호가 1부터 시작해서 1증가시킨 인덱스 값을 answer 배열에 넣음

// 2. filter() 사용
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
