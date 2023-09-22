class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temporaryNode = this.first;
      this.first = newNode;
      this.first.next = temporaryNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;

    const temporaryNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temporaryNode.value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const temporaryNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temporaryNode.value;
  }
}