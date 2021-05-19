console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playGame(players, numOfCards) {
  var deck = makeShuffledDeck();
  var thisRound = players.slice();

  playRound(thisRound);

  function makeShuffledDeck() {
    var deck = [];
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 'jack', 'queen', 'king', 'ace'];
    var suits = ['spades', 'clubs', 'diamonds', 'hearts'];

    for (var i = 0; i < ranks.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        deck.push({ rank: ranks[i], suit: suits[j] });
      }
    }
    return _.shuffle(deck);
  }

  function playRound(players) {
    var highScore = 0;
    var winner = '';
    var nextRound = [];

    for (var i = 0; i < players.length; i++) {
      console.log('Player\'s turn:', players[i].name);

      var score = dealPlayerHand(players[i]);

      console.log('Score:', score);

      highScore = checkForNewHighScore(score, highScore);
    }

    if (nextRound.length === 1) {
      console.log('The winner is', winner, '!');

    } else {
      logTie();
      playRound(nextRound);
    }

    function dealPlayerHand(player) {
      var totalScore = 0;
      players[i].hand = [];
      for (var j = 0; j < numOfCards; j++) {
        var topCard = deck.pop();
        console.log('Card:', topCard.rank, 'of', topCard.suit);
        if (topCard.rank === 'ace') {
          totalScore += 11;
        } else if (typeof (topCard.rank) === 'string') {
          totalScore += 10;
        } else {
          totalScore += topCard.rank;
        }
        player.hand.push(topCard);
      }
      return totalScore;
    }

    function checkForNewHighScore(score, highScore) {
      if (score > highScore) {
        winner = players[i].name;
        nextRound = [];
        nextRound.push(players[i]);
        return score;
      } else if (score === highScore) {
        nextRound.push(players[i]);
        return score;
      }
    }

    function logTie() {
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
