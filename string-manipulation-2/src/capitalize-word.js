/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var capitalized = '';
    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        capitalized += word[i].toUpperCase();
      } else {
        capitalized += word[i].toLowerCase();
      }
    }
    return capitalized;
  }
}
