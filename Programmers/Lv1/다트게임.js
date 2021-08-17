// 프로그래머스 Lv1
// 다트게임

// 1
function solution(dartResult) {
  let num = 0;
  let answer = [];
  let sum = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        num = 10; // 10인 경우
        i++;
      }
      else {
        num = dartResult[i];
      }
    }
    else if (dartResult[i] === 'S') {
      answer.push(num);
    }
    else if (dartResult[i] === 'D') {
      answer.push(Math.pow(num, 2));
    }
    else if (dartResult[i] === 'T') {
      answer.push(Math.pow(num, 3));
    }
    else if (dartResult[i] == '#') {
      answer[answer.length - 1] *= -1;
    }
    else if (dartResult[i] == '*') {
      answer[answer.length - 1] *= 2; // 해당 점수
      answer[answer.length - 2] *= 2; // 바로 전에 얻은 점수
    }
  }

  for (let j = 0; j < answer.length; j++) {
    sum += Number(answer[j]);
  }
  return sum;
}

console.log(solution("1S2D*3T")); // 37

// 거듭제곱
// 1. Math.pow(number, 2);
// 2. number **= 2; (** : Exponentiation assignment)