// Insert into a Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 재귀를 이용한 방법
var insertIntoBST1 = (root, val) => {
  if(!root) {
    return new TreeNode(val);
  }
  if ((root.val > val)) {
    root.left = insertIntoBST1(root.left, val);
  } else if (root.val < val) {
    root.light = insertIntoBST1(root.left, val);
  }

  return root
};

//반복 이용
// 현재 탐색 노드와, 이전 탐색 노드 이용

var insertIntoBST2 = (root, val) => {
  const newNode = new TreeNode(val);
  if(!root) return newNode;

  let cur = root;
  let prev = null;

  while(cur) {
    if (cur.val > val) {
      prev = cur;
      cur = cur.left
    } else {
      prev = cur;
      cur = cur.right;
    }
  }
  if(prev.val > val) prev.left = newNode
  else prev.right = newNode

  return root;
}
