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

      this.length++;
      return this;
    }
    //리스트의 tail값 제거 밑 도출
    pop() {
      if (!this.head) return undefined;

      const popNode = this.tail;
      // 엣지 케이스
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        // tail을 이전 node로 바꿔주고 이전노드와 제거될 popNode의 모든 연결은 끊어준다.
      } else {
        this.tail = popNode.prev;
        this.tail.next = null;
        popNode.prev = null;
      }

      this.length--;
      return popNode;
    }

    //리스트의 head값 제거 밑 도출
    shift() {
      if (!this.head) return undefined;

      const shiftNode = this.head;
      //엣지 케이스
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        // head를 다음 node로 바꾸고 원래의 head와 바뀐 head의 모든 연결 끊기
      } else {
        this.head = shiftNode.next;
        this.head.prev = null;
        shiftNode.next = null;
      }

      this.length--;
      return shiftNode;
    }

    unshift(value) {
      //새로운 노드만들어서 연결만 해주면 되는거 아닌감
      const newNode = new Node(value);

      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }

      this.length++
      return this;
    }
    // 해당 인덱스의 node 반환
    get(index) {
      if (index <= 0 || index >= this.length) return null;

      let currentIndex, currentNode
      // index가 리스트의 절반 길이 보다 작은경우 
      // head 부터 탐색 중앙으로 탐색
      if (index <= this.length/2) {
        currentIndex = 0;
        currentNode = this.head;

        while (currentIndex !== index) {
          currentNode = currentNode.next;
          currentIndex++;
        }
      // index가 리스트의 절반 길이 보다 큰 경우
      // tail 부터 탐색 중앙으로 탐색
      } else {
        currentIndex = this.length - 1;
        currentNode = this.tail;

        while (currentIndex !== index) {
          currentNode = currentNode.prev;
          currentIndex--;
        }
      }

      return currentNode;
    }
    // 해당 인덱스에 노드 데이터 value로 업데이트
    set(index, value) {
      //get을 이용한 탐색
      const nodeData = this.get(index);
      // 데이터 업데이트
      if (nodeData) {
        nodeData.value = value;

        return true

      } else {
        return false
      }
    }
  }