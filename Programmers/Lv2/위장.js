// 프로그래머스 lv2
// 해시

// 1
function solution(clothes) {
  let answer = 1; // 해당 종류의 의상을 입지 않은 경우도 계산하기 위해 value의 기본값을 1로 지정
  let obj = {}; // 의상의 종류를 key로, 해당 종류에 포함되는 의상의 개수를 value로 하는 obj 생성

  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]] >= 1) {
      obj[clothes[i][1]] += 1; // 객체에 이미 같은 키값이 있다면 +1을 해준다. 
    }
    else {
      obj[clothes[i][1]] = 1; // 새로운 종류의 옷(키값)이라면 1로 만든다. 
    }
  }

  for (let key in obj)
    answer *= (obj[key] + 1); // 각 옷 종류마다 안입는 경우를 포함하기 때문에 +1씩 한 값들을 곱해줌

  return answer - 1; // 전체 경우의 수에서 모두 안입는 경우 제외 
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])); //5
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])); // 3


// 이 문제에서 각 옷 종류마다 안 입는 경우가 있기에, +1씩 한 값들을 곱해주면 모든 경우의 수가 만들어진다.

// 여기서 answer - 1을 하는 이유는 문제에서 옷을 무조건 하나는 입고 있다고 나오기 때문에, 모든 경우의 수에서 아무것도 입지 않는 경우의 수 1을 빼주는 것이다.


// 2
function solution(clothes) {
  return
  Object.values(clothes.reduce((obj, t) => {
    obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
    return obj;
  }, {})).reduce((a, b) => a * (b + 1), 1) - 1;
} // reduce()의 초기값으로 빈 객체 {}를 설정해줌.

 // 1. clothes.reduce(function, {}) 최초 값을 빈 객체로 생성하여 clothes를 순차적으로 키값(t[1]) 검색

// 2. undefined는 논리연산에서 false이므로 해당 키의 값이 undefined이면 해당 키값에 1을 넣어줌.
// 키의 값이 존재한다면 해당 값에 + 1을 해줌.

// 3. 이렇게 생성된 Key와 Value를 Object.values를 통해 값만 불러오도록 함.

// 4. reduce(function, 1) 최초 값을 1로 설정하고 배열을 순차적으로 돌며 이전 값에(해당 옷 종류의 개수) + 1(옷을 입지 않은 경우)를 곱함.

// 5. 모든 옷을 입지 않은 경우 제외 - 1 후 return.





