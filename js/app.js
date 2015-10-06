
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
        var debug = false;
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
    var setInitialState = function(){
      $("#guessList").find("li").remove();
      $("#userGuess").val("");
      $("#feedback").html("Make Your Guess!");
      $('#count').html("0");
      randNumber = randomNumber();
    }

    var newGame = function(){
      // New Game on page load
      setInitialState();
      formFocus();
      userGuess();
    };

    var randomNumber = function(){
      // Generate a random number between 1 and 100
      var randomNumber = Math.floor(Math.random() * (100 -1) + 1);
      logThis("This is the random number: " + randomNumber);
      return randomNumber;
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
          accuracyFeedback(userGuessValue);
        } else {
          logThis("Please enter a number between 1 and 100");
          alert("Sorry, that didn't meet the number requirements. Please enter a number between 1 and 100.");
          formFocus();
        }  
      });
    }

    var accuracyFeedback = function(guess){
      var feedbackContainer = $("#feedback");
      if(guess > randNumber){
        feedbackContainer.html("Too High");
        logThis("Too High");
      } else if (guess < randNumber) {
        feedbackContainer.html("Too Low");
        logThis("Too Low");
      } else {
        feedbackContainer.html("That is Correct!");
        logThis("Correct Guess");
      }
    };

    //---------------------------
    // Game Instantiation
    //---------------------------
      newGame();
      $('.new').on("click", function(){
        newGame();
      });
});


