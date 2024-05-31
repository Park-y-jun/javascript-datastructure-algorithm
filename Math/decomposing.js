//1 입력 정수N 루트 , floor 처리

//2 2부터 1번에서 처리된 정수 값까지의 반복문 생성
//  2부터 나누기 시작하는데 나머지가 0이라면 해당 숫자로 다시 계산 -> 나머지가 있다면 다음수로 넘어감
// 반복이 끝난후 정수가 2 이상이라면 result[]에 넣기

const decomposing = (number) => {
  const result = [];

  const sqrN = Math.floor(Math.sqrt(number));

  for (let i = 2; i <= sqrN; i++) {
    while (number % i === 0) {
      result.push(i);
      number /= i;
    }

    if (number >= 2) result.push(number);
  }

  return result
}