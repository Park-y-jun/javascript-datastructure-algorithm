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
    let newNode = new Node(value);
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
}
