Hot Or Cold Game
=================

In this game, the computer will randomly select a number between 1 and 100. The player then tries to guess the number. The player gets feedback for each guess — **hot** if their guess was close, and **cold** if their guess was far off. Once the correct number is guessed, the player will be notified and given the option to start a new game.


## Requirements

- [x] Use the supplied HTML and CSS.
- [x] Write your code in app.js
- [ ] When page loads, Javascript should start a new game.
- [ ] Create a `newGame()` function that does everything necessary to start a new game.
- [ ] Use a named function that, when game starts, generates a random number between one and 100.
- [ ] Try to start a new game without refreshing or reloading the page (By winning?)
- [ ] Use a named function to provide user with feedback for each guess. 
  - [ ] Too low
  - [ ] Too High
  - [ ] Correct Guess
- [ ] Write a function that determines how far away from the number they are.
  - [ ] 40+ away = `ice cold`
  - [ ] 30-39 away = `cold`
  - [ ] 20-29 away = `warm`
  - [ ] 10-19 away = `hot`
  - [ ] 1-9 away = `very hot`
- [ ] Append feedback information in `div#feedback`
- [ ] `div#feedback` is initally set to `Make Your Guess!` on page load
- [ ] Show how many guesses the player has made. Display this in `span#count`
- [ ] Set `span#count` default to 0 on page load.
- [ ] Supply the users with a list of the nubmers they have guess so far. These numbers will be appended as `<li>`'s to `ul#guessList`
- [ ] Validate user inputs by setting input type to number and "required".
- [ ] Validate an input range between 1 and 100.
- [ ] New game button should trigger the function that starts a new game.
