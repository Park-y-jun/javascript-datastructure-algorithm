//힙은 이진탐색트리을 기본으로 하는 자료구조 
//최대힙: 부모노드의 키값이 자식노드의 키 값보다 항상 큰 트리구조
//최소힙: 부모노드의 키값이 자식노드의 키 값보다 항상 작은 트리구조
class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  // 힙 정렬에서 삽입은 항상 삽입되는 element와 부모 노드의 데이터를 비교해서 위치를 바꾸는 정렬을 해야한다.
  insert(element) {
    this.value.push(element);
    this.bubbleUp()
  }
  // insert()된 요소와 부모노드를 비교해서 정렬 해주는 메서드
  bubbleUp() {
    // 삽입된 요소의 인덱스
    let index = this.value.length - 1
    const element = this.value[index];

    while (index > 0) {
      // 자식 노드가 부모 노드의 위치를 찾는 공식
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];
      // 부모가 자식보다 큰 경우 반복문 중지
      if (element <= parent) break;
      
      // 삽입될 요소가 부모 노드보다 큰 경우
      //swap
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.value[0];
    const end = this.value.pop();
    if(this.value.length > 0) {
      // 루트제거 후 맨 밑값이 최상단으로
      this.value[0] = end;
      // heap 구조에 맞게 재정렬
      this.sinkDown();
    }
    
    return max;
  }

  sinkDown() {
    // 재정렬 될 대상(루트 값)
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      // 부모인덱스의 기준으로 자식인덱스 구하는 공식
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}