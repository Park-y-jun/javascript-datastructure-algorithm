//Maximum Product of Two Elements in an Array
// 내림차순 정렬
var maxProduct = function (nums) {
  const descArr = nums.sort((a, b) => b - a)
  const result = (descArr[0] - 1) * (descArr[1] - 1);
  return result
};