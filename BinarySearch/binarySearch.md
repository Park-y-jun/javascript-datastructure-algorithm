# 이진 탐색
이진탐색은 <u>정렬된</u> 리스트에서 후보 범위가 하나의 항목으로 좁혀질 때까지 리스트를 반으로 나누는 방법이다.

## 이진탐색 구현 순서

1. 시작점과 끝점을 설정한다.
2. 중간값을 도출해내고 그곳에서 부터 찾고자 하는 자료와 비교를 한다.
3. 찾고자하는 자료가 중간값보다 작은 경우 끝점을 중간값의 바로 이전 항목으로 설정해서 다시 중간값으로 설정하고 다시 비교를 한다
4. 중간값보다 큰 경우 시작점을 중간값의 바로 다음 항목으로 설정해서 다시 중간값으로 설정하고 다시 비교를 한다
5. 3, 4번을 계속 반복하면서 탐색을 실시해서 원하는 자료를 찾는다.

이때 시작점과 끝점에 대한 조건을 걸어주어야 한다. 
탐색과정에서 시작점과 끝점이 서로의 범위를 넘어가서 오류를 발생할 가능성이 있기 때문이다.

추가적으로 리스트에 찾고자하는 자료가 없는 경우에 대한 출력값을 따로 설정해야 한다. 탐색이 끝나지않고 무한히 진행되는것을 막아야하기 때문이다.

```javascript
const binarySearch = (arr, int) => {
  // 시작, 중간, 끝 값 설정
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  // 탐색 시작
  while (arr[middle] !== int && start <= end) {
    if (arr[middle] > int) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    // 바뀐 범위에 따른 중간값 도출 
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === int) {
    return middle;
  }
  // 예외처리
  return -1;
}
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
```