// Calculate Money in Leetcode Bank

// n주차별 보너스(/연산의 몫) + 기본 지급 금액 + 일주일 동안의 보너스(% 연산)

var totalMoney = function (n) {
  let result = 0;

  for (let day = 0; day < n; day++) {
    result += Math.floor(day / n) + 1 + (day % n)
  }

  return result;
};