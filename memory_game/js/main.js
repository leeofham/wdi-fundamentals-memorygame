var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var score = 0;
var scoreDisplay = document.getElementById("score_num")
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]) {
			score ++;
			scoreDisplay.innerHTML = score;
			cardsInPlay = [];
			alert("You have found a match")
		}
		else{
			cardsInPlay = [];
			alert("Sorry, try again");
		};
	};
};

var flipCard = function(){
	var cardId = this.getAttribute("data-id")
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage)

	checkForMatch(cardId)
	
};


var createBoard = function(){
	for(let i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
			cardElement.setAttribute("src", "images/back.png");
			cardElement.setAttribute("data-id", i);
			cardElement.setAttribute("class", "resetCards")
			cardElement.addEventListener('click', flipCard);
			document.getElementById("game-board").appendChild(cardElement);	
		};
};


var reset = function(){
	var restart = document.getElementsByClassName('resetCards');
	console.log(restart)
		for (let i = 0; i < restart.length; i++) {
    	restart[i].setAttribute("src", "images/back.png");
	}
}
			
var reset_button = document.getElementById("reset");
reset_button.addEventListener('click', reset);


createBoard();
       