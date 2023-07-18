# 삽입 정렬
배열에서 앞 인덱스의 요소와 비교를 해서 현재 타겟팅된 배열의 요소의 위치를 삽입해서 정렬하는 방식이다.

[2, 3, 5, 4, 1] 배열이 있다면 

비교를 해야함으로 맨 앞 인덱스의 2가 아닌 3부터 비교를 시작해서 내림차순으로 정렬을 한다면


* 1라운드

  2&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;1<br>
  &nbsp;&nbsp;&nbsp;3

  3과 2를 비교했을 때 3은 제자리 유지

* 2라운드 

  2&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;1<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5

  3과 5를 비교했을 때 5는 제자리 유지

* 3라운드 

  5와 4를 비교했을 때 

  2&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;1 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
  
  4는 3과 5의 사이로 들어가야함

* 4라운드

  2&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1

  1은 5, 4, 3,2,1 과 순차적으로 비교 후에 맨앞으로 가게된다.

# 구현 방법

1. 배열의 두번째 요소 부터 선택하여서 순회를 하게 한다

2. 이전 요소와 비교하여서 정렬이 필요한 경우 서로 교환하게 한다.

3. 정렬 조건에 만족하지 않는다면 이전 요소들과 계속 비교해서 정렬을 일어나게 해야한다.

```javascript
const insertionSort = (arr) => {
  let currentVal;
  // 배열 요소 전체를 순회하기 위한 루프
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j;
    // j는 i와의 비교를 위해 -1의 상태여야함
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    // 모두 비교가 일어난 후에 알맞은 위치에 정렬
    arr[j + 1] = currentVal;
  }
  return arr;
};

insertionSort([6, 51, 36, 48, 5, 100, 27, 15, 88]);
//[(5, 6, 15, 27, 36, 48, 51, 88, 100)];


```



