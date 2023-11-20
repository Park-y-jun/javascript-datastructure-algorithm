const reductionOperations = function (nums) {
  //1. 가장 큰 값 찾기
  //2. 2. 두번째 큰 값 찾기
  //3. 1번값을 2번 값으로 반복
  //4. 모든 배열 요소가 일치할 때 까지

  let count = 0;
  // 모든 요소가 중복 될 때 까지 반복
  while (new Set(nums).size > 1) {
    // 가장 큰 값 찾기
    const largestValue = Math.max(...nums);
    const largestValueIdx = nums.indexOf(largestValue);

    // 두번째 큰 값 찾기
    // -Infinity: 첫 인덱스가 가장 큰 값인경우 두번째 값을 얻기위해
    let nextLargest = nums.reduce((acc, num) => {
      return num < largestValue && num > acc ? num : acc;
    }, -Infinity);

    nums[largestValueIdx] = nextLargest;
    count++;
  }

  return count;
};

reductionOperations([5, 1, 3, 2]);


// 반복문을 쓸때 어떤 방식을 쓸건지부터 고려 while, for 루프, 고차함수.. 등등
// 가장 큰수보다는 작고 그중에서는 가장 큰것을 계속 체크하면 되는 구나


// 시간 복잡도 개선

// 이 문제의 패턴 배열을 정렬해서 본다면 index의 덧셈만큼의 작업횟수가 발생 요소 중복이 없을때
// 요소 중복 발생시 중복 발생 구간을 건너뛰어서 인덱스 덧셈을 하지 않으면 된다.

const reductionOperationsUpdate = (nums) => {
  // 내림차순으로 정렬하면 가장 큰값이 첫 인덱스로와서 비교가 수월해짐
  nums.sort((a, b) => b - a);
  let operations = 0;
  let prevElement = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 중복요소는 연산 x
    if (nums[i] === prevElement) continue
    if (nums[i] < prevElement) {
      // 문제의 패턴: operations = 인덱스의 합
      operations += i;
    }
      //비교 타겟 변경 내림차순
      prevElement = nums[i];  
  }
  return operations;
};


