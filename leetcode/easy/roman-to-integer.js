// var romanToInt = function (s) {
//   let output = 0;
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I" && s[i + 1] === "V") {
//       output += 4;
//       i++;
//     } else if (s[i] === "I" && s[i + 1] === "X") {
//       output += 9;
//       i++;
//     } else if (s[i] === "X" && s[i + 1] === "L") {
//       output += 40;
//       i++;
//     } else if (s[i] === "X" && s[i + 1] === "C") {
//       output += 90;
//       i++;
//     } else if (s[i] === "C" && s[i + 1] === "D") {
//       output += 400;
//       i++;
//     } else if (s[i] === "C" && s[i + 1] === "M") {
//       output += 900;
//       i++;
//     } else {
//       output += roman[s[i]];
//     }
//   }
//   return output;
// };

// Solution found in solution in leetcode
var romanToInt = function (s) {
  var map = {
    I: 1, //can be in front of "V" or "X"
    V: 5,
    X: 10, //can be in front of "L" or "C"
    L: 50,
    C: 100, //can be in front of "D" or "M"
    D: 500,
    M: 1000,
  };

  var ret = 0;
  for (var i = 0; i < s.length; i++) {
    if (i < s.length - 1 && (s[i] === "I" || s[i] === "X" || s[i] === "C")) {
      if (map[s[i + 1]] > map[s[i]]) {
        ret = ret + (map[s[i + 1]] - map[s[i]]);
        i++;
        continue;
      }
    }

    ret = ret + map[s[i]];
  }

  return ret;
};

console.log(romanToInt("MCMXCIV"));
