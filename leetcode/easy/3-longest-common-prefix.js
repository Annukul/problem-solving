// var solve = (s1, s2) => {
//   for (i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       return s1.slice(0, i);
//     }
//   }
//   return s1;
// };

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";
//   let resultArr;
//   let splitArr = [];
//   for (var i = 0; i < strs.length; i++) {
//     splitArr.push(strs[i].split(""));
//   }

//   for (var j = 0; j < splitArr.length; j++) {
//     while (splitArr[j])
//   }
// };

// Solution using higher order functions
var longestCommonPrefix = function (strs) {
  "use strict";
  if (strs.length === 0) return "";

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// var commonPrefix = function (s1, s2) {
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       return s1.slice(0, i);
//     }
//   }
//   return s1;
// };

// var longestCommonPrefix = function (strs) {
//   var n = strs.length;
//   if (n === 0) {
//     return "";
//   }
//   var sorted = strs.sort(function (a, b) {
//     return a.length - b.length;
//   });
//   var res = sorted[0];
//   for (var i = 1; i < n; i++) {
//     res = commonPrefix(res, strs[i]);
//     if (res === "") {
//       return res;
//     }
//   }
//   return res;
// };
