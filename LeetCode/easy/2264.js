// Largest 3-Same-Digit Number in String

// var largestGoodInteger = function (num) {
//   const newNum = num.split("");
//   const numTable = new Map();
//   let result = "";

//   for (let i = 0; i < num.length; i++) {
//     if (numTable.has(newNum[i])) {
//       let currentValue = numTable.get(newNum[i]);
//       numTable.set(newNum[i], currentValue + 1);
//     } else {
//       numTable.set(newNum[i], 1);
//     }
//   }

//   for (let [key, value] of numTable.entries()) {
//     if(value === 3) {
//       result += key.repeat(value)
//     }
//   } 
//   return result;
// };

// 문자열을 3개씩 돌면서 겹치는거 연속 3개 나오는 것 중에 가장 큰거 
// set 객체
var largestGoodInteger = function (num) {
  let max = '';
  for(let i = 0; i < num.length - 2; i++) {
   let treeSizeStr = num.slice(i, i+3)
   if (new Set(treeSizeStr).size === 1 && treeSizeStr > max) {
    max += treeSizeStr;
   }
  }
  return max;
};