console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playGame(players, numOfCards) {
  var deck = [];
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 'jack', 'queen', 'king', 'ace'];
  var suits = ['spades', 'clubs', 'diamonds', 'hearts'];

  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push({ rank: ranks[i], suit: suits[j] });
    }
  }

  deck = _.shuffle(deck);

  var thisRound = players;
  while (thisRound.length > 1) {
    var highScore = 0;
    var winner = '';
    var nextRound = [];

    for (i = 0; i < thisRound.length; i++) {
      console.log('Player\'s turn:', thisRound[i].name);
      var score = 0;
      thisRound[i].hand = [];
      for (j = 0; j < numOfCards; j++) {
        var topCard = deck.pop();
        console.log('Card:', topCard.rank, 'of', topCard.suit);
        if (topCard.rank === 'ace') {
          score += 11;
        } else if (typeof (topCard.rank) === 'string') {
          score += 10;
        } else {
          score += topCard.rank;
        }
        thisRound[i].hand.push(topCard);
      }

      console.log('Score:', score);
      if (score > highScore) {
        highScore = score;
        winner = thisRound[i].name;
        nextRound = [];
        nextRound.push(thisRound[i]);
      } else if (score === highScore) {
        nextRound.push(thisRound[i]);
      }
    }

    if (nextRound.length === 1) {
      console.log('The winner is', winner, '!');
      break;
    } else {
      thisRound = nextRound;
      console.log('There is a tie.');
      console.log('The next round will have');
      for (i = 0; i < nextRound.length; i++) {
        console.log(nextRound[i].name);
      }
    }
  }
}

var fourPlayers = [
  { name: 'Naruto' },
  { name: 'Sasuke' },
  { name: 'Sakura' },
  { name: 'Kakashi' }
];

playGame(fourPlayers, 2);

// generate deck as an Array
// shuffle deck
// while a winner is not declared
//   for each relevant player
//     push n cards into each hand from top of deck
//     find their score
//     if their score is the highest
//       assign their name as the winner
//       declare there is a winner
//       remove players from next round
//     else if their score is equal to the highest
//       declare there is no winner
//       add players to the next round
//   if a winner is declared
//     log the winner and break the loop
//   else
//     play again using the same deck with the players in the next round
