function solution(day, arr) {
  let answer = 0;
  for (let num of arr) {
    if (num % 10 == day) answer++;
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];

const result = solution(3, arr);
console.log(result);

//////////////////////////////////////
function solution2(day, arr) {
  let answer2 = 0;
  for (let num of arr) {
    if (num % 10 == day) answer2++;
  }
  return answer2;
}

arr2 = [12, 20, 54, 30, 87, 91, 30];

const result2 = solution(0, arr2);
console.log(result2);
