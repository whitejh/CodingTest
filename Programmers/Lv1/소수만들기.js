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