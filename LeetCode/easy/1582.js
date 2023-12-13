//Special Positions in a Binary Matrix
//mat = [[1,0,0],[0,0,1],[1,0,0]]
// 행돌면서 합이 1인 것 배열과 그것의 열의 합이 1이면 count + 1
var numSpecial = function (mat) {
  const colCal = (index) => {
   return mat.reduce((acc, cur) => acc + cur[index] ,0)
  }

  let count = 0
  for (let row of mat) {
   if (row.reduce((acc, cur) => acc + cur ,0) === 1) {
    const colIndex = row.indexOf(1);

    if (colCal(colIndex) === 1) count++
   }
  }
  return count;
};

