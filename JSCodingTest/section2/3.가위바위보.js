// 1차원 배열 탐색 & 최댓값 활용

// 1
function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    if (arr1[i] === arr2[i]) answer.push('D');
    else if (arr1[i] === 1 && arr2[i] === 2) answer.push('B');
    else if (arr1[i] === 1 && arr2[i] === 3) answer.push('A');
    else if (arr1[i] === 2 && arr2[i] === 3) answer.push('B');

    else if (arr1[i] === 2 && arr2[i] === 1) answer.push('A');
    else if (arr1[i] === 3 && arr2[i] === 1) answer.push('B');
    else if (arr1[i] === 3 && arr2[i] === 2) answer.push('A');
  }

  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

// 2
function solution(A, B) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      console.log(answer = B[i] === 1 ? "D" : B[i] === 2 ? "B" : "A");
    } else if (A[i] === 2) {
      console.log(answer = B[i] === 2 ? "D" : B[i] === 1 ? "A" : "B");
    } else {
      console.log(answer = B[i] === 3 ? "D" : B[i] === 1 ? "B" : "A");
    }
  }
}
let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
solution(A, B);