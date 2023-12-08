// Construct String from Binary Tree
// 깊이 우선탐색 DFS
// 재귀적 , 최초 root에서 오른쪽을 먼저 탐색해야 왼쪽 깊이를 모두 탐색하고 돌아올 수 있음

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var tree2str = function (root) {
 const dfs = (node) => {
  if(!node) return '';

  if (node.right) {
   return `${node.val}(${dfs(node.left)})(${dfs(node.right)})`;
  }

  if (node.left) {
    return `${node.val}(${dfs(node.left)})`;
  }

  return `${node.val}`;
 }

 return dfs(root);
};