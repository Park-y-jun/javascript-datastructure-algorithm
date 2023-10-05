// 우선순위 큐: 데이터의 priority(우선순위가) 높은 것이 먼저 나오는 큐
// 우선순위 큐 = 힙 은 아니지만 전통적인 방식의 우선순위 큐는 힙과 유사

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
// 우선순위 큐에 노드 삽입
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
// 삽입된 노드에 맞춰서 우선순위를 기준으로 데이터 정렬
    this.bubbleUp()
  }

  bubbleUp() {
    // 삽입된 노드의 인덱스    
    let index = this.values.length - 1;
    const element = this.values[index]

    while(index > 0) {
      // 자식 노드로 부모 인덱스 찾는 공식 (n - 1) / 2 소숫점제거
      let parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      // 우선순위 비교 후  swap
      if (element.priority >= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }

  }

// 우선순위가 가장 높은 최상단의 노드 추출  
  dequeue() {
    const topPriorityNode = this.values[0]
    const end = this.values.pop()

    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return topPriorityNode;
  }
  // 최상단 루트 노드를 자식 노드들과 비교하면서 위치 변경
  sinkDown() {
    // 루트 노드
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      // 부모인덱스의 기준으로 자식인덱스 구하는 공식
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      //swap 유무
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if(leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      // 오른쪽 자식 노드의 경우 SWAP유무와 형제노드 끼리의 값을 비교해야함
      if (rightChildIndex < length) {        
        rightChild = this.values[rightChildIndex];

        if(
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = leftChildIndex;
          }      
        }
      //swap에 따라서 반복문 중지
      if(swap === null) break;  
      //위치변환
      this.values[0] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}