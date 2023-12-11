// 1287. Element Appearing More Than 25% In Sorted Array

// 맵으로  테이블 만들고  1/4 보다 큰 키값 반환

var findSpecialInteger = function (arr) {
  const table = new Map();

  for (const num of arr) {
    if (table.has(num)) {
      table.set(num, table.get(num) + 1);
    } else {
      table.set(num, 1);
    }
  }
  console.log(table);
  for (const [key, value] of table) {
    if (value / arr.length > 25 / 100) return key;
  }
};

