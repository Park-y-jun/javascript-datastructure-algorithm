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
        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        // 루트가 존재할 경우 다른 노드들과 비교(루트 부터 시작해서 아래로)
        let current = this.root;
        // 무한 루프로 루트 부터 아래까지 계속 비교
        while(true) {
            if(value === current.value) return undefined
            
            if(value < current.value) {
                //없으면 정착
                if(current.left === null) {
                    current.left = newNode
                    return this; 
                }
                // 있다면 왼쪽이동
                current = current.left

            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                //오른쪽 이동
                current = current.right;
            }
        }
    }
}


    