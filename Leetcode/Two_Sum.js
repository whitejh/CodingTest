// 1. Two Sum
/*
  @param {number[]} nums
  @param {number} target
  @return {number[]}
*/

var twoSum = function (nums, target) {
  let len = nums.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target)
        return [i, j];
    }
  }
};

// nums라는 배열에서 임의로 2개 숫자를 더했을 때,
// 합이 target과 일치할 때의 숫자 위치값을 output으로 뽑기