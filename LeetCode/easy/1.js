// Two Sum
// 해시 테이블을 만들어서 주어진 배열 요소 저장
// 배열 순회하면서 target - 요소를 테이블에서 찾아서 반환

var twoSum = function (nums, target) {
  const HStable = new Map()

  for (let i = 0; i < nums.length; i++) {
    const subtract = target - nums[i];

    if (HStable.has(subtract)) {
      return [HStable.get(subtract), i];
    }
    HStable.set(nums[i], i);
  }
};