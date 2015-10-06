
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    //---------------------------
    // Utility Helpers
    //---------------------------
      var logThis = function(value) {
        // Set a variable that allows console.log debugging to be 
        // toggled on or of in the console.
        var debug = true;
        if (debug) {
          console.log(value);
        }
      };

      var formFocus = function(){
        // set focus back to the input, for whatever reason.
        $('#userGuess').val("").focus();
      }

    //---------------------------
    // Game Functions
    //---------------------------
    var newGame = function(){
      // New Game on page load
      formFocus();
      randomNumber();
      userGuess();
      //accuracyFeedback();
    };

    var randomNumber = function(){
      // Generate a random number between 1 and 100
      var randomNumber = Math.floor(Math.random() * (100 -1) + 1);
      logThis(randomNumber);
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

    var userGuess = function(){
      var userGuessCount = 1;
      $('#guessButton').on("click", function(e){
        e.preventDefault();
        var userGuess = $('#userGuess'),
            userGuessValue = parseInt(userGuess.val());
        logThis(userGuessCount);
        if (userGuessValue > 0 && userGuessValue <= 100) {
          $("<li>" + userGuessValue + "</li>").appendTo('#guessList');
          $('#count').html(userGuessCount++);
          formFocus(); 
          return userGuessValue;
        } else {
          logThis("Please enter a number between 1 and 100");
          alert("Sorry, that didn't meet the number requirements. Please enter a number between 1 and 100.");
          formFocus();
        }  
      });
    }

    var accuracyFeedback = function(){
      // compare user guess to random number
      logThis("random number: " + randomNumber() + " || user guess: " + userGuess());
      // if user number is higher than randomNumber
        // return "Too High"
        // else if user number is lower than randomNumber
          // return "Too Low"
        // else
          // return "Correct Guess"
    };

    //---------------------------
    // Game Instantiation
    //---------------------------
      $('.new').on("click", function(){
        newGame();
      });
      newGame();
});


