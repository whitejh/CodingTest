// 프로그래머스 Lv1
// 체육복

// 1. filter() 활용
function solution(n, lost, reserve) {
  let arr = new Array(n).fill(0);

  for (let i = 0; i < lost.length; i++) arr[lost[i] - 1] += -1;
  for (let i = 0; i < reserve.length; i++) arr[reserve[i] - 1] += 1;

  for (let i = 0; i < n; i++) {
    if (
      (arr[i] == -1 && arr[i + 1] == 1) ||
      (arr[i] == 1 && arr[i + 1] == -1)
    ) {
      arr[i] = 0;
      arr[i + 1] = 0;
    }
  }
  return arr.filter((item) => item >= 0).length;
}

// 사람수(n) 길이의 배열 arr를 선언
// 체육복을 잃어버린 학생들(lost)은 -1로,
// 여분의 체육복을 갖고 있는 학생들(reserve)은 1로 값을 바꿈
// 배열은 0부터 시작하기 때문에 인덱스에 -1로 처리해주는 것
// 첫 인덱스와 그 다음 인덱스를 둘씩 묶어서 검사
// 한 명은 여분 있음 && 다른 한 명은 잃어버림 상태면 빌려줬다 치고
// 둘다 0으로 바꿈

// arr 중에서 값이 0이상인 item들의 개수를 반환
// 여분을 갖고있거나(1), 빌렸거나 빌려준(0) 경우
