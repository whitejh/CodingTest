// 프로그래머스 Lv1
// 소수 만들기

// 1
function solution(nums) {
  let answer = 0;
  let n = nums.length;
  
  for (let i = 0; i < n-2; i++){
    for (let j = i + 1; j < n-1; j++){
      for (let k = j + 1; k < n; k++){
        const number = nums[i] + nums[j] + nums[k];
        if (isPrime(number))
          answer++;
      }
    }
  }
    return answer;
}

function isPrime(num) {
  if (num < 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // 소수가 아닌 경우
  }
  return true; // 소수인 경우
}

// 2
function solution(nums)
{
  var answer = 0;
  var array = [];
  var len = nums.length;
  for (let i = 0; i < len - 2; i++){
    for (let j = i + 1; j < len - 1; j++){
      for (let k = j + 1; k < len; k++){
        array.push(nums[i] + nums[j] + nums[k]);
      }
    }
  } //reduce함수 이용 
  answer = array.reduce((acc, cur, idx) => acc + primeNumber(cur), 0)
  return answer;
}

//소수 판별 함수 
function primeNumber(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    //소수가 아닐 경우 
    if (n % i == 0) { return 0; }
  } //소수일 경우 
  return 1;
}

