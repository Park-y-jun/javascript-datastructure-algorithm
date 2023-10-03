// 모든 왼쪽 '자식'노드는 '부모'노드 보다 작고
// 모든 오른쪽 '자식'노드는 '부모'노드 보다 크다

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new Node(value);

      //루트가 없을 땐 그 값이 루트
      if (this.root === null) {
        this.root = newNode;
        return this;
      }

      // 루트가 존재할 경우 다른 노드들과 비교(루트 부터 시작해서 아래로)
      let current = this.root;
      // 무한 루프로 루트 부터 아래까지 계속 비교
      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          //없으면 정착
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          // 있다면 왼쪽이동
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          //오른쪽 이동
          current = current.right;
        }
      }
    }

    contains(value) {
      // 매개변수 value를 최상위 루트와 비교해서 왼쪽 혹은 오른쪽으로 다음 비교대상을 이동해서 탐색범위를 좁힘
      if (this.root === null) return false;

      let current = this.root;
      const searchComplete = false;

      // current가 null이거나(더이상 탐색할 수 없는 영역까지 갔을 때) 탐색을 성공하여searchComplete가 true이기 전 까지 반복
      while (current && !searchComplete) {
        if (current.value > value) {
          current = current.left;
        } else if (current.value < value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }

    BFS() {
      //루트를 큐[]에 넣고 반복문을 큐[]가 empty일 때 까지 돌려
      // 큐[] 첫 요소는 data[]에 넣어주고 왼쪽, 오른쪽을 찾아서 큐[]에 푸시
      // 다시 남은 큐[]요소들로 반복
      let node = this.root;
      const data = [];
      const queue = [];

      queue.push(node);

      while (queue.length) {
        node = queue.shift();
        data.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      return data;
    }
    //전위 순회
    DFSPreOrder() {
      // 재귀를 이용해서 깊게 탐색
      const data = [];

      const dfsTraversal = (node) => {
        data.push(node.value);

        if (node.left) dfsTraversal(node.left);
        if (node.right) dfsTraversal(node.right);
      };

      dfsTraversal(this.root);
      return data;
    }

    // 후위 순회 루트가 가장 늦게 나오도록
    // data.push()의 코드를 리프(더 이상 자식이 없는) 노드의 위치에 도달했을 때로 바꿔서 data[]의 값을 조절

    DFSPostOrder() {
      const dfsTraversal = (node) => {
        if (node.left) dfsTraversal(node.left);
        if (node.right) dfsTraversal(node.right);

        data.push(node.value);
      };

      dfsTraversal(this.root);
      return data;
    }

    // 중위 순회
    // 한쪽 방향먼저 순회해서 데이터를 가져오고 반대쪽을 가져오는 방식
    
    DFSInOrder() {
      const dfsTraversal = (node) => {

        if (node.left) dfsTraversal(node.left);
        data.push(node.value);
        if (node.right) dfsTraversal(node.right);

      };

      dfsTraversal(this.root);
      return data;
    }
  }
  