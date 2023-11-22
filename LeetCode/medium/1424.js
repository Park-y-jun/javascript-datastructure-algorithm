// Diagonal Traverse II
// 너비 우선 탐색은 인접노드 부터
// 큐로 시작노드[0, 0] 부터 넣어서 인접 노드 탐색 후 push
// 노드는 자신의 자리에서 행으로 1칸 열로 1칸의 범위만을 가짐
const findDiagonalOrder = function (nums) {
  // result 생성
  const result = [];
  // 큐 생성
  const queue = [[0, 0]]

  //모든 큐가 처리 될 때까지
  while (queue.length > 0){
    const [row, col] = queue.shift();
    result.push(nums[row][col])
    // 노드는 자신의 자리에서 행으로 1칸 열로 1칸의 범위만을 가짐
    // 행 +1 부터
    if (col === 0 && row + 1 < nums.length) {
      queue.push([row + 1, 0])
    }
    if (col + 1 < nums[row].length) {
      queue.push([row, col + 1]);
    }
  }
  console.log(result);
  return result
};

findDiagonalOrder([
  [1, 2, 3, 4, 5],
  [6, 7],
  [8],
  [9, 10, 11],
  [12, 13, 14, 15, 16],
]);