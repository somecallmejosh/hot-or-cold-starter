
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
      // Not declaring randNumber as a 'var' puts this in Global Scope
      randNumber = randomNumber();
      // probably not a good thing.
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

    var userGuess = function(){
      var userGuessCount = 1,
          feedbackContainer = $("#feedback");
      $('#guessButton').unbind().click(function(){
        var userGuessValue = parseInt($('#userGuess').val()),
            feedbackContainer = $("#feedback");
        logThis(userGuessCount);
        if (userGuessValue > 0 && userGuessValue <= 100) {
          $("<li>" + userGuessValue + "</li>").appendTo('#guessList');
          $('#count').html(userGuessCount++);
          formFocus(); 
          feedbackContainer.html(accuracyFeedback(userGuessValue) + "<br>" + temperatureFeedback(userGuessValue));
        } else {
          logThis("Please enter a number between 1 and 100");
          alert("Sorry, that didn't meet the number requirements. Please enter a number between 1 and 100.");
          formFocus();
        }  
      });
    }

    var accuracyFeedback = function(guess){
      if(guess > randNumber){
        return "Too High";
        logThis("Too High");
      } else if (guess < randNumber) {
        return "Too Low";
        logThis("Too Low");
      } else {
        return "That is Correct!";
        logThis("Correct Guess");
      }
    };

    var temperatureFeedback = function(guess){
      var absoluteValue = Math.abs(randNumber - guess);
      if (absoluteValue >= 50) {
        return "Ice Cold";
      } else if (absoluteValue >= 40 && absoluteValue < 50 ){
        return "Cold";
      } else if (absoluteValue >= 30 && absoluteValue < 40) {
        return "Warm";
      } else if (absoluteValue >= 20 && absoluteValue < 30) {
        return "Hot";
      } else if (absoluteValue >= 10 && absoluteValue < 20) {
        return "Very Hot";
      } else if (absoluteValue >=1 && absoluteValue < 10) {
        return "Burning Up!";
      } else {
        return "On Fire!"
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


