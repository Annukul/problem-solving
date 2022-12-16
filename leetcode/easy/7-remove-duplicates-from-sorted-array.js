var removeDuplicates = function (nums) {
  //   let done = false;
  //   while (!done) {
  //     done = true;
  for (var i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] === nums[i]) {
      // done = false;
      nums.splice(i, 1);
      i--;
    }
  }
  //   }
  console.log(nums);
  // I was using sort here but it was not working properly with negative numbers
};

removeDuplicates([-3, -1, 0, 0, 0, 3, 3]);

// console.log([-3, -1, 0, 0, 0, 3, 3].sort());
// It returns [-1, -3, 0, 0, 0, 3, 3] which is wrong

//Problem with sort You're getting a lexicographical sort (e.g. convert objects to strings, and sort them in dictionary order), which is the default sort behavior in Javascript:
// https://stackoverflow.com/questions/7000851/how-to-sort-numbers-correctly-with-array-sort
