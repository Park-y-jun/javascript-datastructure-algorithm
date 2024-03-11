//791. Custom Sort String
//비교 함수 sort(a, b)는 a - b 가 "> 0" 일 때 b가 a 앞으로(오름차순) "< 0"일 때 a가 앞으로 (내림차순)

var customSortString = function (order, s) {
  let characters = s.split("");
  characters.sort((a, b) => {
    let indexA = order.indexOf(a);
    let indexB = order.indexOf(b);

    if (indexA === -1) indexA = s.length + 1;

    if (indexB === -1) indexB = s.length + 1;

    return indexA - indexB;
  });

  return characters.join("");
};


