//Minimize Maximum Pair Sum in Array
const minPairSum = (num) => {
  // nums 배열 순회를 통해서 가장 큰 요소와 작은 요소를 매칭= 더하기
  // 더한 페어들끼리중 max()를 찾아서 리턴
  const sortedArray = num.sort((a, b) => a - b);
  const newArray = [];
  for (let i = 0; i < sortedArray.length / 2; i++) {
    newArray.push(sortedArray[i] + sortedArray[sortedArray.length - (i + 1)]);
  }
  console.log(newArray);
  console.log(Math.max(...newArray));
};

minPairSum([3, 5, 4, 2, 4, 6]); // 8
minPairSum([3, 5, 2, 3]); // 7

// 맨 뒤 인덱스를 연산할 때는 length - 1이 있어야함, pair를 구하는 것이기 때문에 배열 반복은 length / 2
// Math.max()는 배열을 넣을 수 없으니 ... 스프레드 연산자 혹은 .apply