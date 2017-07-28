   var compChoices = "bcdefghijklmnopqrstuvwxyz";
   var wins = 0;
   var losses = 0;
   var triesRemaining = 10;
   var compGuess = null;
   //An empty array to start for userguesses
   var userGuesses = [];

   //This def is icky.  Gotta be abetter way
   var winsEl = document.getElementById('wins');
   var lossesEl = document.getElementById('losses');
   //var userGuessEl = document.getElementById('userGuess');
   var usGuessesEl = document.getElementById('userGuesses');
   var triesRemEl = document.getElementById('triesRemaining');

   var reset = function() {
     triesRemaining = 10;
     userGuesses = [];
     compGuess = compChoices.charAt(Math.floor(Math.random() * compChoices.length));
   };
  
   


   var runGame = function(choice, compGuess) {
     
     if (triesRemaining > 0) {

       if (choice === compGuess) {
         alert("You Won: The Letter was " + compGuess);
         reset();
         return wins++; 
       }

       else {
         return triesRemaining--;
       }
     }

     else {
       alert("Sorry you lost");
       reset();
       return losses++;
     }

   };

   document.onkeyup = function(event) {
     var userGuess = event.key;
     runGame(userGuess, compGuess);
     usGuessesEl.textContent = userGuesses;
     winsEl.textContent = wins;
     lossesEl.textContent = losses;
     triesRemEl.textContent = triesRemaining;
   };