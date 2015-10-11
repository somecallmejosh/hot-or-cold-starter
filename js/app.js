
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
      var formFocus = function(){
        // set focus back to the input, for whatever reason.
        $("#userGuess").val("").focus();
      };

    //---------------------------
    // Game Functions
    //---------------------------
    var setInitialState = function(){
      $("#guessList").find("li").remove();
      $("#userGuess").val("");
      $("#feedback").html("Make Your Guess!");
      $("#count").html("0");
      // Not declaring randNumber as a 'var' puts this in Global Scope
      randNumber = randomNumber();
      userGuessCount = 1;
      // probably not a good thing.
    };

    var newGame = function(){
      // New Game on page load
      setInitialState();
      formFocus();
    };

    var randomNumber = function(){
      // Generate a random number between 1 and 100
      var randomNumber = Math.floor(Math.random() * (100 -1) + 1);
      return randomNumber;
    };

    function userGuess(){
      var userGuessValue = parseInt($("#userGuess").val()),
          feedbackContainer = $("#feedback");
      if (userGuessValue > 0 && userGuessValue <= 100) {
        $("<li>" + userGuessValue + "</li>").appendTo("#guessList");
        feedbackContainer.html(accuracyFeedback(userGuessValue) + "<br>" + temperatureFeedback(userGuessValue));
        formFocus();
        $("#count").html(userGuessCount++);
      } else {
        alert("Sorry, that didn't meet the number requirements. Please enter a number between 1 and 100.");
        formFocus();
      }  
    };

    var accuracyFeedback = function(guess){
      if(guess > randNumber){
        return "Too High";
      } else if (guess < randNumber) {
        return "Too Low";
      } else {
        return "That is Correct!";
      }
    };

    var temperatureFeedback = function(guess){
      var absoluteValue = Math.abs(randNumber - guess);
      switch(true) {
        case absoluteValue >= 50:
          return "Ice Cold";
        case absoluteValue >= 40 && absoluteValue < 50:
          return "Cold";
        case absoluteValue >= 30 && absoluteValue < 40:
          return "Warm";
        case absoluteValue >= 20 && absoluteValue < 30:
          return "Hot";
        case absoluteValue >= 10 && absoluteValue < 20:
          return "Very Hot";
        case absoluteValue >= 1 && absoluteValue < 10:
          return "Burning Up"
        default:
          return "On Fire!"
      }
    };
    
    //---------------------------
    // Game Instantiation
    //---------------------------
      newGame();
      $(".new").on("click", function(){
        newGame();
      });
      $("#guessButton").on("click", userGuess);
});


