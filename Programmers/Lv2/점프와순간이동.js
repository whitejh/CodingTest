// 프로그래머스 Lv2
// 점프와 순간이동

function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      ans += 1;
    }
  }

  return ans;
}


// K칸 점프하면 K만큼의 건전지 사용
// 거리가 2배인 곳으로 순간이동하는 데 비용이 없어 최대한 순간이동 시켜주는 게 좋으므로
// 2의 배수라는 것을 처리해주기 위해 % 연산자를 써서 n에서 시작해서 0 까지 가준다.
// 2의 배수가 아닐 때에는 순간이동해서 온게 아니므로 - 1로 짝수로 이동해준다.

// 2
function solution(n) {
  let ans = 0;

  while (n != 0) {
    if (n % 2 == 1) ++ans;
    n = Math.floor(n / 2);
  }

  return ans;
}
