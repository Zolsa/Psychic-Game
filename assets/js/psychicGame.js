  var compChoices = "abcdefghijklmnopqrstuvwxyz";
  var wins = 0;
  var losses = 0;
  var triesRemaining = 9;
  var compGuess = compChoices.charAt(Math.floor(Math.random() * compChoices.length));
  //An empty array to start for userguesses
  var userGuesses = [];

  //This def is icky.  Gotta be abetter way... 
  var winsEl = document.getElementById('wins');
  var lossesEl = document.getElementById('losses');
  var userGuessEl = document.getElementById('userGuess');
  var usGuessesEl = document.getElementById('userGuesses');
  var triesRemEl = document.getElementById('triesRemaining');
  
  var reset = function() {
    triesRemaining = 9;
    userGuesses = [];
    compGuess = compChoices.charAt(Math.floor(Math.random() * compChoices.length));
  };

  var runGame = function(userGuess, compGuess) {
    console.log(compGuess);
    
    while(triesRemaining > 0 && userGuess !== compGuess) {
      userGuesses = userGuesses + " " + userGuess;
      return triesRemaining--;
    }

    if(triesRemaining === 0) {
      alert ("Sorry you lost");
      reset();
      return losses++;
    }

    else {
      alert("You Won: The Letter was " + compGuess);
      reset();
      return wins++; 
    }
  };

  /*Another possible way to run the game with nested if statements... but you said they were bad.

  var runGame = function(userGuess, compGuess) {  
    console.log(compGuess); 
    if (triesRemaining > 0) {

      if (userGuess === compGuess) {
        alert("You Won: The Letter was " + compGuess);
        reset();
        return wins++; 
      }

      else {
        userGuesses = userGuesses + " " + userGuess;
        return triesRemaining--;
      }
    }

    else {
      alert("Sorry you lost");
      reset();
      return losses++;
    }
  };
*/
 
  //When you hit a key, it checks to make sure its a letter first then runs the game and ties in the variables with html elements.  If its not a letter, it alerts you.
  document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    if(event.keyCode <= 90 && event.keyCode >= 65) { 
      runGame(userGuess, compGuess);
      usGuessesEl.textContent = userGuesses;
      winsEl.textContent = wins;
      lossesEl.textContent = losses;
      triesRemEl.textContent = triesRemaining;
    } 
    else {
      alert("Please select a letter");
    }
  };
   