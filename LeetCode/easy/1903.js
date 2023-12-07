//Largest Odd Number in String

// 반전된 배열을 순회 하면서 홀수인경우 push, 하고 남은 요소 푸쉬

var largestOddNumber = function (num) {
  const numArray = num
    .split("")
    .map((char) => parseInt(char, 10))
    .reverse();
  let stack = [];
  let isOdd = false;

  for (let i = 0; i < numArray.length; i++) {
    if (isOdd === true) {
      stack.push(numArray[i]);
    }

    if (numArray[i] % 2 !== 0 && !isOdd) {
      stack.push(numArray[i]);
      isOdd = true;
    }
  }

  const result = stack.length === 0 ? "" : stack.reverse().join('')

  return result;
};

// slice를 활용한 개선안

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.slice(0, i+1);
    }
  }

  return "";
};