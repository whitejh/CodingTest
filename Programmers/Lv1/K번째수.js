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

