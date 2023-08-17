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

  // 해당 인덱스의 노드 데이터를 반환하는 메서드
  get(index) {
    // 데이터를 추출할 수 있는 인덱스의 범위
    if (index < 0  || index >= this.length) return undefined

    // 리스트에는 정해진 인덱스가 없으므로 노드를 하나씩 카운팅 해야함
    let counter = 0;
    //리스트의 head부터 탐색
    let currentNode = this.head
    // 원하는 index의 위치까지 리스트 탐색
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode
  }

  // 해당 인덱스의 노드 데이터를 업데이트
  set(index, value) {
    // 해당 인덱스의 노드 데이터 추출
    let nodeData = this.get(index);

    if(nodeData) {
      // value 업데이트
      nodeData.value = value;
      //성공 반환값
      return true;
    }
    //실패 반환값
    return false;
  }

  // 해당 인덱스의 노드 데이터 삽입 메서드
   //삽입될 노드 이전 인덱스 노드와 그 다음 노드를 타겟하여서 삽입될 노드와 링크(next)를 연결해준다
  insert(index, value) {
    // 인덱스가 처음, 끝, 범위를 벗어날때
     if (index < 0 || index > this.length) return false;
     if (index === this.length) return !!this.push(value);
     if (index === 0) return !!this.unshift(value);
      // 삽입될 노드 생성, 전-후 노드 타겟
      const newNode = new Node(value);
      const previousNode = this.get(index - 1);
      const nextNode = previousNode.next
      // 링크연결
      previousNode.next = newNode;
      newNode.next = nextNode;

      this.length++;
      return true;
  }
  // 해당 인덱스의 노드데이터 삭제
   // 삭제할 노드의 이전 인덱스 노드와 그 다음 인덱스 노드의 링크를 연결
  remove(index) {
  // 엣지 케이스
    // 인덱스가 범위를 벗어난 경우
    if (index < 0 || index > this.length) return undefined;
    // 리스트의 첫 요소 삭제
    if (index === 0) return this.shift();
    //리스트의 맨끝 요소 삭제
    if (index === this.length - 1) return this.pop();

    const  previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    // 제거될 노드를 제외하고 링크연결
    previousNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }
}

