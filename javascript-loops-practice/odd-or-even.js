/* exported oddOrEven */
function oddOrEven(numbers) {
  var parity = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      parity.push('even');
    } else {
      parity.push('odd');
    }
  }
  return parity;
}
