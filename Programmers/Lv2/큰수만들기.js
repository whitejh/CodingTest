// 프로그래머스 lv2
// 그리디 (스택을 이용)

function solution(number, k) {
  const stack = []; // 최종 숫자들이 저장될 스택
  let answer = '';  // 빈 문자열

  for (let i = 0; i < number.length; i++) {
    const element = number[i]; // 현재 인덱스 숫자. 처음에는 일단 push

    while (k > 0 && stack[stack.length - 1] < element) {
      stack.pop();
      k--;
    }

    stack.push(element);
  }

  stack.splice(stack.length - k, k); // pop이 k보다 적게 되었을 경우, splice를 통해 남은 k만큼 지워줌
  answer = stack.join(''); // 가장 큰 숫자를 문자열 형태로 return 
  return answer
}

// join('') : 배열의 모든 요소를 연결해 하나의 문자열로 만듦

// 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 
// 현재인덱스가 이전인덱스보다 크면 pop하고 push로 넣어줌. 제거하는 숫자인 k를 1 감소

// 제거할 숫자를 다 채웠으면 그냥 넣음
// k가 0일 경우, 스택은 그대로
// 하지만 k가 남아있으면, 뒤에서부터 제거 (예 : 1010, 2 -> 11)