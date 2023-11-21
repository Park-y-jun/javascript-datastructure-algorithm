// Count Nice Pairs in an Array
//1.리버스 함수
//2.배열 순회하여 절댓값 ( 요소 - 리버스 함수(요소)) Math.abs
//3. 배열을 순회하여 요소 마다 중복 몇개인지 카운트 하는 함수
//4.이항계수 함수 nC2
//5. 팩토리얼 연산함수

//[13,10,35,24,76]
// var countNicePairs = function (array) {
//   const MOD = 1e9 + 7;
//   const reversedArr = reverseFunc(array);
//   //2.배열 순회하여 절댓값
//   const absArr = array.map((num, index) => (num - reversedArr[index]));
//   //3. 배열을 순회하여 요소 마다 중복 몇개인지 카운트 하는 함수
//   const countMap = new Map();
//   for (const num of absArr) {
//     if (countMap.has(num)) {
//       countMap.set(num, countMap.get(num) + 1);
//     } else {
//       countMap.set(num, 1);
//     }
//   }
//   console.log(countMap);

//   let result = 0
//   for (const [key, value] of countMap) {
//     if (value >= 2) {
//       result = (result + (nC2(value) % MOD)) % MOD;
//       //result = (result + (value * (value - 1) / 2) % MOD) % MOD;
//     }
//   }
//   console.log(result)
//   return result;
// };


// //1.리버스 함수
// const reverseFunc = (array) => {
//   const stringRev = array.map((num) =>String(num).split('').reverse().join(''));
//   const result = stringRev.map((string) => parseInt(string));
//   console.log(result);
//   return result;
  
// }
// //4.이항계수 함수 nC2
// const nC2 = (n) => {
//   const result = factorial(n) / factorial(2) * factorial(n - 2);
//   return result;
// }

// //5. 팩토리얼 연산함수
// const factorial = (number) => {
//   if (number === 0 || number === 1) return 1; 
//   return number * factorial(number - 1)
// }

//이항계수 편집 
const MOD = 1e9 + 7;

var countNicePairsV2 = function (array) {
  const reversedArr = reverseFunc(array);
  const absArr = array.map((num, index) => num - reversedArr[index]);
  const countMap = new Map();
  for (const num of absArr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    } 
  }

  console.log(countMap);

  let result = 0;
  for (const [key, value] of countMap) {
    if (value >= 2) {
      result = (result + (((value * (value - 1)) / 2) % MOD)) % MOD;
    }
  }
  return result;
};

const reverseFunc = (array) => {
  const stringRev = array.map((num) =>
    String(num).split("").reverse().join("")
  );
  const result = stringRev.map((string) => parseInt(string));
  return result;
};

countNicePairsV2([13, 10, 35, 24, 76, 53]);