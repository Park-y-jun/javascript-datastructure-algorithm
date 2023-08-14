// 단일 연결 리스트
// 리스트에서 요소는 데이터(값)과 링크(next)만을 가지고 있는 형태
// 단일 연결 리스트에서는 시작과 끝: head와 tail만을 지니고 이씀!
// 단일연결 리스트에서 첫 데이터는 그 자체로 head와 tail의 속성을 지닌다.
// 그 이후 새로운 값이 삽입이 될 때 새 요소는 tail에 링크(next)가 되며 새로 생긴 요소가 tail이 된다!

class Node {
  constructor(value) {
    // 데이터
    this.value = value;
    // 링크
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //리스트의 마지막 요소를 제거하고 그 값을 도출하는 메서드
  pop(){
    if (!this.head) return undefined;

    // 리스트의 마지막 노드까지 탐색을 해서 도달을 해야지만 마지막 노드를 pop할 수가 있기에

    //현재 탐색중인 노드의 위치
    let tempo = this.head;

    // 현재 탐색중인 노드 위치의 이전값
    let pre = tempo;

    //링크가 연결 되어있는 노드의 끝까지 탐색: tempo는 노드 연결에 따라 변경,, pre는 tempo의 이전 노드
    while (tempo.next) {
      pre = tempo;
      tempo = tempo.next;
    }

    // 마지막 이전 노드를 꼬리 노드로 바꾸고, 마지막 노드 제거
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return tempo;
  }

  // 리스트의 헤드를 그 다음 노드로 옮기고 해당 노드의 연결을 제거하고 그 데이터를 도출
  shift() {
    if (!this.head) return undefined

    const currentHead = this.head;
    // 헤드 옮기기
    this.head = currentHead.next
    this.length--;

    if(this.length === 0) {
      this.tail = null
    }
    return currentHead;
  }

  // 리스트의 맨 앞의 새로운 노드를 추가 하고 그것이 head가 됨
  unshift(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      // 새로운 노드와 리스트의 헤드와 링크 연결
      newNode.next = this.head
      //리스트의 head위치 변경
      this.head = newNode
    }

    this.length++;
    return this;
  }
}
