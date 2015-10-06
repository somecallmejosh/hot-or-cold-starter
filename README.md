Hot Or Cold Game
=================

In this game, the computer will randomly select a number between 1 and 100. The player then tries to guess the number. The player gets feedback for each guess — **hot** if their guess was close, and **cold** if their guess was far off. Once the correct number is guessed, the player will be notified and given the option to start a new game.

This project can be viewed at [http://somecallmejosh.github.io/hot-or-cold-starter/](http://somecallmejosh.github.io/hot-or-cold-starter/)


## Requirements

- [x] Use the supplied HTML and CSS.
- [x] Write your code in app.js
- [x] When page loads, Javascript should start a new game.
- [x] Create a `newGame()` function that does everything necessary to start a new game.
- [x] Use a named function that, when game starts, generates a random number between one and 100.
- [x] Try to start a new game without refreshing or reloading the page
- [x] Use a named function to provide user with feedback for each guess. 
  - [x] Too low
  - [x] Too High
  - [x] Correct Guess
- [ ] Write a function that determines how far away from the number they are.
  - [ ] 40+ away = `ice cold`
  - [ ] 30-39 away = `cold`
  - [ ] 20-29 away = `warm`
  - [ ] 10-19 away = `hot`
  - [ ] 1-9 away = `very hot`
- [x] Append feedback information in `div#feedback`
- [x] `div#feedback` is initally set to `Make Your Guess!` on page load
- [x] Show how many guesses the player has made. Display this in `span#count`
- [x] Set `span#count` default to 0 on page load.
- [x] Supply the users with a list of the nubmers they have guess so far. These numbers will be appended as `<li>`'s to `ul#guessList`
- [x] Validate user inputs by setting input type to number and "required".
- [x] Validate an input range between 1 and 100.
- [x] New game button should trigger the function that starts a new game.
