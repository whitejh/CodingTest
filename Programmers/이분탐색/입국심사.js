// Lv3
// 이분 탐색
// 모든 사람이 심사를 받는데 걸리는 가장 최소의 시간을 구하는 것
// 가장 최대의 시간은 가장 오래 걸리는 심사대에서만 계속 심사를 받을 떄의 시간
// 이를 활용해 1초부터 가장 최대의 시간까지 이분탐색을 하며 가장 최소의 시간에서 n명을 검사할 수 있을 때까지 탐색을 하면 답을 구하는 문제

function solution(n, times) {
  times.sort((a, b) => {
    return a - b;
  });

  let left = 1; // 최소로 걸릴 시간
  let right = times[times.length - 1] * n; // 최대로 걸릴 시간 (최고 오래 걸리는 사람이 n명을 다 검사했을 때의 값)
  let answer = right; // 최대값

  //가장 최소의 시간을 찾을때까지 계속 탐색한다.
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let cnt = 0;

    for (let i = 0; i < times.length; i++) {
      cnt += parseInt(mid / times[i]); // 한 사람당 몇 명을 검사할 수 있는지

      if (cnt >= n) {
        answer = Math.min(answer, mid); // 최솟값
      }
    }
    if (cnt >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
};

// 입력으로 들어오는 n명을 검사하는데 몇 분이 걸리는 지 체크하면 된다.
// 심사관은 한 사람 당 times의 배열의 값만큼 검사시간이 걸린다.

// 처음에 검사시간이 작은 심사관부터 계산하기 위해 오름차순으로 정렬
// 이분 탐색 시작
// times만큼 반복문을 도는데 mid 값을 각각의 시간으로 나눴을 때가 해당 심사관이 검사할 수 있는 사람 수 
// 모든 사람이 심사를 받는데 시간의 최솟값을 구하는 것이기 때문에
// 이 값이 n명을 검사하는 값을 넘으면 그 값과 answer 중 작은 값을 answer에 저장.
// 만약 cnt 값이 n보다 크거나 같으면 시간을 더 줄이기 위해 mid값을 더 낮춰도 된다는 뜻이므로
// right = mid - 1 을 수행
// cnt 값이 n보다 작으면 mid 값을 더 높여야 된다는 뜻이므로 left = mid + 1 을 해준다.
// 그러게 모두 돌아서 마지막 최솟값이 answer이다.
