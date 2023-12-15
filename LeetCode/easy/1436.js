// Destination City
// 나가는 경로가 없는 도착지 = hash 테이블의 value중 key값이 아닌것
var destCity = function (paths) {
  const graph = new Map();
  for (const vertex of paths) {
    graph.set(vertex[0], vertex[1]);
  }
  for (const vertex of paths) {
    const destination = vertex[1];
    if (!graph.has(destination)) {
      return destination;
    }
  }
  return "";
};