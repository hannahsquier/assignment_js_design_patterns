

function Card(value) {
  this.value = value;
  this.show = false;
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

  checkForMatch: function($card1, $card2) {
    card1 = cards[$card1.data('id')];
    card2 = cards[$card2.data('id')];

    if(card1.value !== card2.value) {
      card1.show = false
      card2.show = false
    } else {
      this.cardsLeft -= 2
    }
    this.chosenCard = null
    this.turn++

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

// kits rules
// 1. click handlers 1 line
// redraw on every click iwth new info

var gameView = {
  // init: function(numCards) {
  //   this.render(gameModel.cards);
  // },

  render: function(cards) {
    var $board = $('#board');
    $board.html("")

    for (var j = 0; j < Math.sqrt(cards.length); j++) {
      var $row = $('<div class="row"></div>')

      for (var i = 0; i < Math.sqrt(cards.length); i++) {
        var $card = $('<div class="card"></div>')
                .attr('data-id', i);

        if(!cards[i].show) {
          $card.on("click", gameController.cardHandler);

        } else {
          $card.text(cards[i].value)
        }

        $row.append($card);
      }

      $board.append($row)
    }


  }
}

var gameController = {
  init: function (numCards) {

    gameView.init(numCards);
  },

  cardHandler: function(event) {
    if (gameModel.chosenCard) {
      // is it a card that has already been turned over?
      // is match?

      setTimeout(gameModel.checkForMatch(event.target, gameModel.chosenCard), 2000)

    } else {
      // set chosenCard
    }
  }
}



$(document).ready(function() {
  $('button').on('click', function(e){
    var gridSize = prompt("What cho grid size?");
    gameController.init(gridSize * gridSize);
  })
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
