// TODO
var plusOne = function (digits) {
  let integer;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== undefined) integer += `${parseInt(digits[i], 10)}`;
  }
  console.log(integer);
  console.log(integer.split(""));
};

// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i] = (digits[i] + 1) % 10;
//     if (digits[i]) return digits;
//   }
//   digits.unshift(1);
//   console.log(digits);
// };

plusOne([1, 2, 3, 4, 5]);
