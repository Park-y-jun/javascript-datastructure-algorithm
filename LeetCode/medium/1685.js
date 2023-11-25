// Sum of Absolute Differences in a Sorted Array

// const getSumAbsoluteDifferences = (nums) => {
//   const result = [];
//   nums.forEach(num => {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += Math.abs(nums[i] - num);
//       // absResult값들의 합 도출
//     }
//     result.push(sum)
//   })
//   console.log(result)
//   return result;
// };

// getSumAbsoluteDifferences([2, 3, 5]);
///getSumAbsoluteDifferences([1, 4, 6, 8, 10]);

// 최적화
// 이중 반복의 구조를 벗어나기 위해서는 미리 반복된 계산을 해놔야함

//절댓값은  기준점으로 부터 공간을 얼마나 적게 OR 넘치게 차지하는지!

// 왼쪽 인덱스부터의 누적된 공간:  기준점의 최대 공간 -  왼쪽 인덱스부터의 누적된 공간
// 오른쪽 인덱스부터의 누적된 공간: 오른쪽 인덱스부터의 누적된 공간 - 기준점의 최대 공간
// 이것을 더한것을 요구

const getSumAbsoluteDifferences = (nums) => {
 const n = nums.length;
 const prefixSums = Array(n).fill(0);
 const suffixSums = Array(n).fill(0);

 let prefixSum = 0;
 let suffixSum = 0;

 for (let i = 0; i < n; i++) {
   prefixSums[i] = prefixSum;
   suffixSums[n - 1 - i] = suffixSum;

   prefixSum += nums[i];
   suffixSum += nums[n - 1 - i];
 }

 const result = nums.map((num, i) => {
  const left = i * num - prefixSums[i]
  const right = suffixSums[i] - num * (n - 1 - i);

  return left + right
 })
 console.log(result)
 return result
  
}

getSumAbsoluteDifferences([2, 3, 5]);