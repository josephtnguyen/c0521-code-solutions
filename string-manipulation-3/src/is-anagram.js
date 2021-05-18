/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstLetters = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstLetters.push(firstString[i]);
    }
  }
  var secondLetters = [];
  for (i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondLetters.push(secondString[i]);
    }
  }

  if (firstLetters.length !== secondLetters.length) {
    return false;
  }

  for (i = 0; i < firstLetters.length; i++) {
    for (var j = 0; j < secondLetters.length; j++) {
      if (firstLetters[i] === secondLetters[j]) {
        secondLetters.splice(j, 1);
        break;
      } else if (j === secondLetters.length - 1) {
        return false;
      }
    }
  }
  return true;
}

// convert strings into arrays of letters with no spaces
// automatically disqualify if the arrays are not the same size
// loop through each letter of first array
//   for each letter, loop through each letter of second array
//     if there is a match
//       remove second letter
//       start on the next letter of the first string
//     if there is no match by the end of the second string
//       return false
// once every letter has been checked with no mismatches, return true
