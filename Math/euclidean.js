// 유클리드 호재 최대공약수 두 숫자 중에서 큰숫자를 두 숫자를 나눈 나머지로 대체 -> 이 과정을 반복하여 하나가 0이 될 때 나머지가 최대공약수 
//1.최대 공약수 산출 함수 - 두 매개변수 기준
//2. 최대공약수 산출 재귀적 - 여러개의 요소 배열

// 최대공약수 산출 함수를 이용해 최소공배수 산출함수 작성 - 두 매개변수 기준
// 재귀적 산춣 - 여러개의 요소 배열

const gcd = (n1, n2) => {
  while(n1 >= 1 && n2 >= 1) {
    if (n1 < n2) n2 = n2 % n1
    else n1 = n1 % n2
  }
  if (n1 >= 1) return n1
  else return n2
}

// 최대공약수 산출 매개변수가 배열경우
const gcdArr = (arr) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i])
  }

  return result;
}

//최소공배수
// a*b = gcd * lcm // lcm = a*b / gcd

const lcm = (n1, n2) => {
  return (n1 * n2) / gcd(n1, n2);
};

const lcmArr = (arr) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }

  return result;
};