// TODO
var searchInsert = function (nums, target) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      index = i;
      break;
    } else {
      nums.push(target);
      const sorted = nums.sort();
      index = sorted.findIndex((element) => element === target);
    }
  }
  console.log(index);
};

searchInsert([1, 3, 5, 6], 2);

// This answer exceeded time limit
