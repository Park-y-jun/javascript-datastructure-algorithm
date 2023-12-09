//Binary Tree Inorder Traversal
// 중위 순회 = left -> stack node push -> right의 순서임

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var inorderTraversal = function (root) {
  let stack = [];
  const inorderRec = (node) => {
    if (!node) return;
    if (node.left) inorderRec(node.left);
    stack.push(node.val);
    if (node.right) inorderRec(node.right);
  };

  inorderRec(root);
  return stack;
};