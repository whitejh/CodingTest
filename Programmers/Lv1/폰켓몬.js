// 프로그래머스 Lv1
// 폰켓몬

// 1
function solution(nums) {
    let answer = [];
    let max = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(answer.length < max) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;    
}

// 2. Set과 Spread 연산자를 이용하여 중복을 제거
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
// 중복 제거는 Set과 Spread 연산자를 이용하자

// 3
function solution(nums) {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    const pokemonCounts = nums.length;
    return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;

}