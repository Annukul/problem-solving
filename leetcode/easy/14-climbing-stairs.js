// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// APPROACH
// First divide the number by 2 then get the remainder, if the remainder is again a divisible of 2 then divide again

var climbStairs = function (n) {
  if (n % 2 === 0) return 2;
  let arr = [];
  while (n / 2 > 1) {
    console.log("ok");
    let res = n / 2;
    arr.push(res);
  }
  console.log(n % 2);

  return arr;
};

console.log(climbStairs(5));
