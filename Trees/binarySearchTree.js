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
  
      contains(value) {
          // 매개변수 value를 최상위 루트와 비교해서 왼쪽 혹은 오른쪽으로 다음 비교대상을 이동해서 탐색범위를 좁힘
          if(this.root === null) return false;
  
          let current = this.root;
         const searchComplete = false;
  
          // current가 null이거나(더이상 탐색할 수 없는 영역까지 갔을 때) 탐색을 성공하여searchComplete가 true이기 전 까지 반복
          while(current && !searchComplete) {
              if(current.value > value) {
                  current = current.left
              } else if (current.value < value) {
                  current = current.right
              } else {
                  return true;
              }
              
      }
      return false
    }
  }
  