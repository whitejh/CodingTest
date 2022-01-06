// 1
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // 배열을 특정값(1)으로 초기화

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 2
function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        rank++;
      }
    }
    answer.push(rank);
  }

  return answer;
}

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 3
function solution(arr) {
  const answer = [];

  const copy = arr.slice();   // 원본 배열 복사

  arr.sort((a, b) => b - a);  // arr 을 내림차순 정렬

  // 배열을 순회하면서 정렬된 배열중에서 원본 배열이 나온 가장 첫번째 인덱스를 가져온다. (인덱스는 0부터 시작하므로 +1을 해준다)
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr.indexOf(copy[i]) + 1);
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));