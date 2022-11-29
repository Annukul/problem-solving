var isPalindrome = function (x) {
  let num = parseFloat(x.toString().split("").reverse().join(""));

  if (num === x) console.log("Palindrome");
  else console.log("Not a palindrome");
};

// num * Math.sign(num) multiplies the number with the sign of the original number provided. (To keep the - at the first place)

isPalindrome(-121);
