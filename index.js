(function () {
  let game = new Game(),
    player = new Player(),
    dealer = new Player(),
    running = false,
    blackjack = false,
    insured = 0,
    deal;

  function Player() {
    let hand = [],
      wager = 0,
      cash = 1000,
      bank = 0,
      ele = "",
      score = "";

    this.getElement = function () {
      if (this === player) {
        ele = "#phand";
        score = "#pcard-0 .popover-content";
      } else {
        ele = "#dhand";
        score = "#dhand-0 .popover-content";
      }

      return { ele: ele, score: score };
    };

    this.getHand = function () {
      return hand;
    };

    this.setHand = function (card) {
      hand.push(card);
    };

    this.resetHand = function () {
      hand = [];
    };

    this.getWager = function () {
      wager += parseInt(money, 0);
    };

    this.resetWager = function () {
      wager = 0;
    };

    this.checkWager = function () {
      return wager <= cash ? true : false;
    };

    this.getCash = function () {
      return cash.formatMoney(2, ".", ",");
    };

    this.setCash = function (money) {
      cash += money;
      this.updateBoard();
    };

    this.getBank = function () {
      $("#bank").html("Winnings : $" + bank.formatMoney(2, ".", ","));
      if (bank < 0) {
        $("#bank").html(
          `Winnings : <span>-$${bank
            .formatMoney(2, ".", ",")
            .toString()
            .replace("-", " ")}</span>`
        );
      }
    };

    this.setBank = function (money) {
      bank += money;
      this.updateBoard();
    };

    this.flipcard = function () {
      $(".down").each(function () {
        $(this).removeClass("down").addClass("up");
        renderCard(false, false, false, $(this));
      });
      $("#dcard-0 .popover-content").html(dealer.getScore());
    };
  }

  function Deck() {
    let ranks = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
      ],
      suits = ["&#9824;", "&#9827;", "&#9829;", "&#9670;"],
      deck = [],
      i,
      x,
      card;

    this.getDeck = function () {
      return this.setDeck();
    };

    this.setDeck = fucntion(){
      for(i = 0; i < ranks.length; i++){
        for(x=0; x < suits.length; x++){
          card = new Card({"rank": ranks[i]})

          deck.push({
            "rank": ranks[i],
            "suit": suits[x],
            "value" : card.getValue()
          })
        }
      }

      return deck;
    }
  }

  function Card(card){
    this.getRank = function(){
      return card.rank;
    }

    this.getSuit = function(){
      return card.suit;
    }

    this.getValue = function(){
      let rank = this.getRank(),
          value = 0;

          if(rank === "A"){
            value = 11;
          }
          else if(rank === "K"){
            value = 10;
          }
          else if(rank === "Q"){
            value = 10;
          }
          else if(rank === "J"){
            value = 10;
          }
          else{
            value = parseInt(rank, 0);
          }

          return value;
    }
  }

  function Game() {
    this.newGame = function () {
      let wager = $.trim($("#wager").val());
    };
  }
});
