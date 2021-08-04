// 프로그래머스 Lv1
// 두 개 뽑아서 더하기

// 1. Set 객체를 이용한 중복제거
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  const arr = Array.from(new Set(answer));
  arr.sort((a, b) => a - b);

  return arr;
}

// var arr = [5, 0, 2, 7];
// console.log(solution(arr));

// 2
function solution(numbers) {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(arr)];

  return answer.sort((a, b) => a - b);
}
