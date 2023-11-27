// Knight Dialer
// 그래프의 간선에 따른 경우의 수
// 노드의 총알 발사 : 그래프의 특성상 간선으로 연결된 노드끼리의 경우의 수가 정해져있기 때문에 해당 노드에서 올 외부 변수는 해당 노드와 연결된 노드가 외부노드로 부터 연결된 edge의 갯수와 동일

 var knightDialer = function (n) {
   const graph = {
     0: [4, 6],
     1: [6, 8],
     2: [7, 9],
     3: [4, 8],
     4: [3, 9, 0],
     6: [1, 7, 0],
     7: [2, 6],
     8: [1, 3],
     9: [2, 4],
   };

   const MOD = 10 ** 9 + 7;
   let cache = Array(10).fill(1)

   const result = cache.reduce((acc, cur) => acc + cur % MOD, 0)

   for (let i = 2; i <= n; i++) {
    const temp = Array(10).fill(0);
    for (const key in graph) {
      for (const value of graph[key] ) {
        temp[key] = (temp[key] + cache[value]) % MOD;
      }
    }
    cache = temp;
   } 
   return result;
 };

