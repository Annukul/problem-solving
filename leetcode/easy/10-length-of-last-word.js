var lengthOfLastWord = function (s) {
  let splitStr = s.split(" ");
  let lastIndex;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "") {
      splitStr.splice(i, 1);
      i--;
    }
  }
  lastIndex = splitStr.length - 1;
  return splitStr[lastIndex].length;
};

lengthOfLastWord("   fly me   to   the moon  ");

// Submitted with 70ms beats 82.30 % of answers
