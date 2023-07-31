# 퀵 정렬
* 리스트에서 임의의 하나의 원소를 고른다. 이것을 피벗(pivot)이라고 지칭함
* 피벗을 기준으로 피벗보다 작은 요소를 왼쪽, 피벗보다 큰요소를 오른쪽으로 보낸다.
* 나뉘어진 리스트를 각각 재귀적으로 호출하여서 정렬해나간다.

합병 정렬과 다른 점은 중요한 정렬들은 모두 분할시에 일어난다!

```javascript
// 1. 정렬을 위해 배열 요소들의 자리를 바꿔주는 함수
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// 2. 배열의 첫번째 요소를 피벗으로 지정해서 정렬을 해주는 함수
const pivot = (arr, start = 0, end = arr.length - 1) => {

  let pivot = arr[start]
  let swapPoint = start

// 2-1. 배열을 순회하면서 피벗보다 작은 값이 있다면 왼쪽으로 옮긴다
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapPoint++
      swap(arr, swapPoint, i)
    }
  }

// 2-2.피벗의 왼쪽 요소는 피벗을 기준으로 왼쪽에 있어야 함으로 피벗을 왼쪽 집합의 가장 끝으로 보낸다   
  swap(arr, start, swapPoint)
  return swapPoint;
}

// 3. 피벗을 기준으로 분할된 리스트를 재귀적으로 호출하여 정렬하는 함수
const quickSort = (arr, left = 0, right = arr.length -1) => {
// 3-1. 배열을 더 이상 나눌 수 없는 부분까지 나누는 조건
  if (left < right) { 
    let pivotIndex = pivot(arr, left, right);
    // 피벗 보다 작은 왼쪽 집합
    quickSort(arr, left, pivotIndex - 1);

    // 피벗 보다 큰 오른쪽 집합
    quickSort(arr, pivotIndex + 1, right);
  }
   return arr;
}
quickSort([4, 7, 3, 5, 2, 8, 1, 6])
// [1, 2, 3, 4, 5, 6, 7, 8]
```

|호출 단계|매개변수|반환값|
|------|---|---|
|1|quickSort([4, 7, 3, 5, 2, 8, 1, 6])|[1, 3, 2, 4, 7, 8, 5, 6]|
|2|quickSort([1, 3, 2])|[1, 3, 2, 4, 7, 8, 5, 6]|
|3|quickSort([1])|[1, 3, 2, 4, 7, 8, 5, 6]|
|4|quickSort([3, 2])|[1, 2, 3, 4, 7, 8, 5, 6]|
|5|quickSort([2])|[1, 2, 3, 4, 7, 8, 5, 6]|
|6|quickSort([7, 8, 5, 6])|[1, 2, 3, 4, 6, 5, 7, 8]|
|7|quickSort([6, 5])|[1, 2, 3, 4, 5, 6, 7, 8]|
|8|quickSort([5])|[1, 2, 3, 4, 5, 6, 7, 8]|
|9|quickSort([8])|[1, 2, 3, 4, 5, 6, 7, 8]|








