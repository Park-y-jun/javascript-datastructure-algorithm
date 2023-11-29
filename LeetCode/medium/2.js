// Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function (l1, l2) {
  // 두 리스트의 합을 추적하는 노드
  let head = new ListNode(0);
  let node = head;
  // 합이 10 이상인 경우를 추적
  let carry = 0;
  
  while(l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;

    let sum = l1Value + l2Value + carry;
    // 연산 후 carry 초기화
    carry = 0;
    // sum 10이상의 경우
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }
    // 포인트 추적시에 node.next에 값을 할당하고 포인터를 할당된 next node로 옮겨줘야 list 탐색이 용이
    node.next = new ListNode(0);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
    // carry가 0이라면 falsy라서 수행 x
    if (carry) {
      node.next = new ListNode(carry);
    }
  }
  return head.next;
};

// l1 = [2,4,3], l2 = [5,6,4]

// 두 리스트를 같이 포인터를 이동해주면서 덧셈을 해줘야함
// 중요 포인트 1: 기록 하는 노드를 만들어서 포인터 덧셈을 node.val에 등록해주고, node.next에 new ListNode(덧셈값) 등록
// 중요 포인트 2: 10이 넘어가면 해당 node.val 은 0이되고 next에 1이 더해져야함 즉 carry 라는 변수를 만들어 1을 추적해줘야함 
// 포인트 추적시에 node.next에 값을 할당하고 포인터를 할당된 next node로 옮겨줘야 list 탐색이 용이
