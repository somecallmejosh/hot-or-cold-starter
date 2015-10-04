
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // .new will call the newGame() function on click

    var newGame = function(){
      // New Game on page load
    };


    var randomNumber = function(){
      // Generate a random number between 1 and 100
      // return generated number
    };

    var accuracyFeedback = function(){
      // compare user guess to random number
      // if user number is higher than randomNumber
        // return "Too High"
        // else if user number is lower than randomNumber
          // return "Too Low"
        // else
          // return "Correct Guess"
    };

    var temperatureFeedback = function(randomNumber, userGuess){
      // Compare user guess to random number
      // if the absolute value of randomNumber - userGuess is > 0
        // if the absolute value of randomNumber - userGuess > 40 
          // return "Ice Cold"
          // else if the value is >=30 && <40 
            // return "Cold"
          // else if the value is >=20 && <30
            // return "Warm"
          // else if the value is >=10 && <20
            // return "Hot"
          // else
          // return "Very Hot"
    };

    // Not sure if this is necessary
    var numberOfGuesses = function(){
      // How many guesses has the user made?
      // Log each guess in an array
    };

    var userGuess = function(){
      // on submit button click
        // Validate number is number between 1 and 100
        // return the value of the input field
    }

});


