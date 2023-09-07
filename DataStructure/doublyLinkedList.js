//이중 연결 리스트는 단일 연결리스트와 다르게 노드간의 연결이 앞과 뒤를 표현 할 수 있도록 두개가 되어있다
//리스트에서 데이터를 탐색시에 앞방향, 뒷방향 모두 진행을 할 수 있으므로 단일 연결보다 더욱 용이하다고 할 수 있다.

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null
      this.prev = null
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(value) {
      const newNode = new Node(value);
      // 리스트의 길이가  0일 땐 새로운 노드를 만들어서 head와 tail을 줌
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;

      // 리스트에 노드들이 존재하는 경우 현재 리스트의 tail에 새로운 노드 연결
      } else {
        this.tail.next = newNode;
        // 새로운 노드와 기존 노드 연결
        newNode.prev = this.tail;
        // tail 변경
        this.tail = newNode;
      }

      this.length++
      return this;
  
    }

    pop() {

      if(!this.head) return undefined;

      const popNode = this.tail
      // 엣지 케이스
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        // tail을 이전 node로 바꿔주고 이전노드와 제거될 popNode의 모든 연결은 끊어준다.
      } else {
        this.tail = popNode.prev;
        this.tail.next = null
        popNode.prev = null
      }

      this.length--
      return popNode;
    }
  }