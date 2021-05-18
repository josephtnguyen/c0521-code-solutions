/* exported titleCase */
function titleCase(title) {
  var casedTitle = '';
  var currentWord = '';
  var firstWord = true;
  for (var i = 0; i < title.length; i++) {
    if (title[i] === ':') {
      casedTitle += properCase(currentWord, firstWord);
      casedTitle += ': ';
      firstWord = true;
      currentWord = '';
      i++;
    } else if (title[i] !== ' ') {
      currentWord += title[i];
    } else {
      casedTitle += properCase(currentWord, firstWord) + ' ';
      firstWord = false;
      currentWord = '';
    }
  }
  casedTitle += properCase(currentWord, firstWord);
  return casedTitle;
}

function properCase(word, firstWord) {
  var casedWord = '';
  var minorWords = ['and', 'nor', 'but', 'the', 'for', 'per'];
  var isMinorWord = false;
  if (word.toLowerCase() === 'javascript') {
    casedWord = 'JavaScript';
  } else if (word.toLowerCase() === 'api') {
    casedWord = 'API';
  } else {
    for (var i = 0; i < minorWords.length; i++) {
      if (word.toLowerCase() === minorWords[i]) {
        isMinorWord = true;
        break;
      }
    }
    for (i = 0; i < word.length; i++) {
      if ((i === 0) && (firstWord || (!isMinorWord && (word.length > 2)))) {
        casedWord += word[i].toUpperCase();
      } else if (word[i - 1] === '-') {
        casedWord += word[i].toUpperCase();
      } else {
        casedWord += word[i].toLowerCase();
      }
    }
  }
  return casedWord;
}
