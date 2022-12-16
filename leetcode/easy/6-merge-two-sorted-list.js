var mergeLists = function (list1, list2) {
  let array = [...list1, ...list2];

  function sortArr(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  }

  return sortArr(array);
};

// mergeTwoLists([1, 2, 4], [1, 3, 4]);

// The above answer is correct but we have to use linked list for the question in leetcode

var mergeTwoLists = function (list1, list2) {
  const head = new ListNode();
  let node = head;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;
  return head.next;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);

// The above anser is from leetcode question discussion
