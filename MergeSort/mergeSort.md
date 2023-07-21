# 병합 정렬

## 분할과 정복 

한 문제를 유형이 비슷한 여러문제로 나누어 재귀적으로 해결하고 마지막에 합쳐서 최종적으로 원래의 문제를 해결하는 방법

분할: 문제를 나누어서 비슷한 유형의 여러문제로 나누는 과정

정복: 하위문제를 재귀적으로 해결해 나가는 과종

결합: 하위문제들을 합쳐서 최초의 문제를 해결함

분할과 정복 알고리즘 유형에 해당하는 방법에는 합병정렬과 퀵 정렬이 있다.

## 병합 정렬 구현법

1. 배열을 절반으로 나눈다.
2. 나뉘어진 부분을 재귀적으로 정렬을 실행한다.
3. 마지막으로 나뉘어진 두 부분을 병합해서 정렬을 한다.

```javascript
// 합병 함수
const merge = (arr1, arr2) => {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            mergedArr.push(arr1[i])
            i++
        } else {
            mergedArr.push(arr2[j]);
            j++
        }
    }

    // 배열의 길이가 서로 다른 경우 나머지 요소들 합병
    while (i < arr1.length) {
       mergedArr.push(arr1[i]);
       i++;  
    }

    while (j < arr2.length) {
      mergedArr.push(arr2[j]);
      j++;
    }

    return mergedArr
}

// 합병정렬 함수
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr

    // 분할- 2개로 나눈다
    let mid = Math.floor(arr.length / 2)

    // 정복- 하위문제들에 대한 재귀적 정렬
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    // 결합- 정렬된 하위 배열들을 합친다.
    return merge(left, right);
}

mergeSort([10, 70, 50, 40, 20, 80, 30, 60]);
// [10, 20, 30, 40, 50, 60, 70, 80]

```

mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

mergeSort([10, 70, 50, 40])<br>
mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

[10, 70], [40, 50]<br>
mergeSort([10, 70, 50, 40])<br>
mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

[10, 40, 50, 70]<br>
mergeSort([10, 70, 50, 40])<br>
mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

[20, 80], [30, 60]<br>
mergeSort([20, 80, 30, 60])<br>
mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

[20, 30, 60, 80]<br>
mergeSort([20, 80, 30, 60])<br>
mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

[10, 20, 30, 40, 50, 60, 70, 80]<br>
mergeSort([10, 70, 50, 40, 20, 80, 30, 60])<br>

