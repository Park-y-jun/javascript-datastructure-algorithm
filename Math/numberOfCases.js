//전체 경우의 수: 선택지1 * 선택지2 * 선택지3 .....

//nPr = n개중 p갯수 만큼 나열 n! / (n-r)!
//nCr = n개중 r갯수 만큼 선택 n! / r! * (n-r)!

const factorial = (n) => {
  return (n !== 1) ? n * factorial(n - 1) : 1;
}

const nCr = (n, r) => {
return factorial(n) / (factorial(r) * factorial(n - r))
}


// n개의 카드 중에서 합이 100000 나오는 페어의 갯수 찾기
//1 + 99999, 2 + 99998, .... 49999 + 50001을 계산
const calculate10000 = (n, arr) => {
  let count = new Array(100000).fill(0);
  for (let i = 0; i < n; i++) {
    count[arr[i]] += 1;
  }
  let answer = 0;
  for (let i = 1; i < 50000; i++) {
    answer += count[i] * count[100000 - i];
  }
  // 50000 중복 됐으면 count[50000]에 대해 nC2
  answer += (count[50000] * (count[50000] - 1)) / 2;
  return answer;
};

calculate10000(6, [40000, 50000, 20000, 80000, 50000, 30000]);
