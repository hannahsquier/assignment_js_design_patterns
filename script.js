

function Card(value) {
  this.value = value;
  this.show = false;
  this.html = 
}



var gameModel = {
  chosenCard: null,

  init: function(numCards) {
    this.turn = 0;
    this.cards = [];
    this.cardsLeft = numCards;
    this.buildDeck(numCards);
  },
// only a single pair for each value
  buildDeck: function(numCards){
    for( var i = 0; i < numCards/2; i++ ){
      this.cards.push(new Card(i));
      this.cards.push(new Card(i));
    }

    this.shuffle();
  },

  isMatch: function() {

  },



  shuffle: function() {
    var currentIndex = this.cards.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards;
  }

}

var gameView = {
  init: function(numCards) {
    this.createCardHtml(numCards);
    $('.card').on("click", gameController.cardHandler);
  },

  createCardHtml: function(numCards) {
    $board = $('#board');

    for (var i = 0; i < numCards; i++) {
      var $card = $('<div class="card"></div>')
              .attr('data-id', i);
      $board.append($card);
    }
  }
}

var gameController = {
  init: function () {

  },
  cardHandler: function(event) {
    if (gameModel.chosenCard) {
      // is it a card that has already been turned over?
      // is match?
    } else {
      // set chosenCard
    }
  }
}

$(document).ready(function {
  gameController.init();
});

//

// Model(game)
// - keep track of score
// - ids of all cards, array of cards
// - turn number
// - unmatched cards?
// - checkmatch?
// - update cards show attribute when matched

// View
// - show blank value when not clicked
// - show the value of card when its clicked
// - show cards that have been
// - events listeners
//  *


// Controller
// - if pair matches, then keep face up ***
// - else put bck to face down ***
// - update the score
// - call game initialize
// - call render
// - call events???
