/*
 * Create a list that holds all of your cards
 */
let arrayOfCards = [' fa-diamond', 'fa-paper-plane-o',' fa-bolt',' fa-cube',' fa-anchor',' fa-leaf',' fa-bicycle',' fa-bomb',' fa-diamond', 'fa-paper-plane-o',' fa-bolt',' fa-cube',' fa-anchor',' fa-leaf',' fa-bicycle',' fa-bomb'];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let deck = document.querySelector('.deck');
let card = document.querySelectorAll('.card');
let matchedCard = document.getElementsByClassName('.match');
let openedCard = [];
let matchedCards = [];
let moves = 0;
let counter = document.querySelector('.moves');
const restart = document.querySelector('.restart');

arrayOfCards = shuffle(arrayOfCards);



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(arrayOfCards) {
    let currentIndex = arrayOfCards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arrayOfCards[currentIndex];
        arrayOfCards[currentIndex] = arrayOfCards[randomIndex];
        arrayOfCards[randomIndex] = temporaryValue;
    }

    return arrayOfCards;
}
   for (let i = 0; i<card.length ; i++) {
       card[i].innerHTML =`<i class="fa ${arrayOfCards[i]}"></i>`;
    }

deck.addEventListener('click', function (e) {

        if (openedCard.length === 1){
          e.target.classList.add('open', 'show');
          openedCard.push(e.target);

          if(openedCard[0].innerHTML === openedCard[1].innerHTML){
             openedCard[0].classList.add('match');
             openedCard[1].classList.add('match');
             matchedCards.push(openedCard[0]);
             matchedCards.push(openedCard[1]);
             openedCard=[];
             movesCounter();

               if (matchedCards.length >= 16){
                 swal(
                    'WOHOOO!',
                    'All Cards Matched',
                    'success'
                  )
                }

            } else{
                openedCard[0].classList.remove('open', 'show');
                openedCard[1].classList.remove('open', 'show');
                openedCard=[];
                movesCounter();
               }
        }else {
            e.target.classList.add('open', 'show');
            openedCard.push(e.target);
            }
        

});

function movesCounter(){  
    moves++;    
    counter.innerHTML = moves;
}

restart.addEventListener('click', function() {
    for(i = 0; i <card.length; i++){
    card[i].classList.remove("open", "show", "match");
    moves = 0;
    counter.innerHTML = moves;
    arrayOfCards = shuffle(arrayOfCards);
    openedCard = [];
    matchedcards= [];
    }
});



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
