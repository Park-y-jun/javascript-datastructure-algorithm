// 여러가지 노드가 있고 , 그 노드들 사이의 여러 연결이 되어 있는 형태
// vertex = 노드 , edge = 연결
// edge에 방향을 도입하냐 안하냐로 그래프의 종류를 나눌 수 있고
// edge에 가중치를 도입하냐 안하냐로 그래프의 종류가 나뉨

//인접 행렬 vs 인접 리스트
//인접행렬은 구현이 쉽고 노드끼리의 연결 상태를 파악하는 것이 시간복잡도가 O(1) 상수이다.
//하지만 특정 노드에 연결된 노드를 파악하려면 모든 노드를 탐색해봐야 하기 때문에 O(V * V)의 노드의 수만큼의 시간이걸림, 만약 노드의 갯수가 1000개 이상인데 실제 연결된 edge가 10개 미만이라면 효율성이 떨어지는 상황

// 인접리스트
//adj[i]의 리스트 형태로 표현하면서 i는 그래프의 노드(vertex)이다. 각 노드들의 연결상태만을 저장하는 방식이다. 때문에 edge의 갯수만큼의 메모리를 가진다는 장점이 있다.
// 또한 노드의 연결된 다른 노드를 탐색할때 실제 연결상태만 확인하면 됨으로 O(E)의 edge의 갯수만큼의 시간 복잡도를 가지고 있다.
//하지만 노드끼리의 연결상태를 알고자 한다면 행렬과 달리 노드의 연결을 모두 돌아야함으로 많은 시간이 걸릴 것이다 O(V + E)

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // 노드 추가
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // 연결 추가
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //노드 사이의 연결제거 filter이용
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  //특정 노드를 제거할려면: 단순히 노드 제거 뿐만아니라 그 노드와 연결된 모든 edge들 또한 제거해줘야함
  removeVertex(vertex) {
    // 해당 노드에 연결된 edge 숫자만큼 라운드가 돌아야함(매개변수 vertex에 요소 크기만큼)
    while (this.adjacencyList[vertex].length) {
      // 노드에 연결된 edge를 하나씩 추출
      const connectedVertex = this.adjacencyList[vertex].pop();
      // edge 제거
      this.removeEdge(vertex, connectedVertex);
    }
    //타겟 노드 객체 삭제
    delete this.adjacencyList[vertex]
  }

  // 그래프 깊이 우선 탐색: 시작 노드의 인접 노드중 하나로 가고 또 인접 노드의 하나로 계속 꼐속 , 이때 이미 갔던 인접노드를 체크를 해두고 있어야함
  depthFirstSearch1(start) {
    //탐색 경로
    const result = [];
    //탐색된 노드 체크 
    const visited = {};
    const adjacencyList = this.adjacencyList;

    const dfs = (vertex) => {
      if (!vertex) return null;

      //탐색된 노드 체크
      visited[vertex] = true;
      //탐색 노드 체크
      result.push(vertex);
      // 노드에 연결된 인접 노드들 중 가지 않은 곳(visited:true가 아닌 곳)을 재귀적으로 탐색
      adjacencyList[vertex].forEach((neighborVertex) => {
        if (!visited[neighborVertex]) {
          return dfs(neighborVertex);
        }
      });
    };
    // 깊이우선 탐색 시작
    dfs(start)

    return result;
  }

}