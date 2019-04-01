'use strict';
document.getElementById('start-quiz').addEventListener('click', () => {
  let numberOfQuestions = 7;
  let numberOfCorrectAnswers = 0;

  // <------------------------- GET USERNAME -------------------------> //

  let userName = function greetUser() {
    let input = prompt(
      'Before we start, I need to know who you are. What is your name?'
    );
    alert(`Nice to meet you ${input}!`);
    return input;
  };
  let guestName = userName();
  console.log(userName);
  console.log(guestName);

  function playTheGame() {
    askQuestionOne();
    askQuestionTwo();
    askQuestionThree();
    askQuestionFour();
    askQuestionFive();
    askQuestionSix();
    askQuestionSeven();
    giveSummary();
  }

  // <------------------------- QUESTION 1 -------------------------> //
  function askQuestionOne() {
    let morningPersonAnswer = prompt('Am I a morning person?').toLowerCase();
    if (morningPersonAnswer === 'yes' || morningPersonAnswer === 'y') {
      numberOfCorrectAnswers++;
      alert(
        `Yes! That's correct! My brain works much better in the morning. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    } else if (morningPersonAnswer === 'no' || morningPersonAnswer === 'n') {
      alert(
        `Sorry, that's incorrect. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    }
    console.log(`Question 1: Answer: ${morningPersonAnswer}`);
  }

  // <------------------------- QUESTION 2 -------------------------> //
  function askQuestionTwo() {
    let orangeSodaAnswer = prompt('Do I like orange soda?').toLowerCase();
    if (orangeSodaAnswer === 'no' || orangeSodaAnswer === 'n') {
      numberOfCorrectAnswers++;
      alert(
        `Correct! I actually hate orange-flavored anything...unless it's an actual orange. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    } else if (orangeSodaAnswer === 'yes' || orangeSodaAnswer === 'y') {
      alert(
        `Sorry, you guessed wrong. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    }
    console.log(`Question 2: Answer: ${orangeSodaAnswer}`);
  }

  // <------------------------- QUESTION 3 -------------------------> //
  function askQuestionThree() {
    let cheesyDanceMovieAnswer = prompt(
      'Do I love cheesy dance movies?'
    ).toLowerCase();
    if (cheesyDanceMovieAnswer === 'yes' || cheesyDanceMovieAnswer === 'y') {
      numberOfCorrectAnswers++;
      alert(
        `You guessed it! Top faves include: You Got Served, Honey, and Stomp The Yard. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    } else if (
      cheesyDanceMovieAnswer === 'no' ||
      cheesyDanceMovieAnswer === 'n'
    ) {
      alert(
        `Sorry, that's incorrect. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    }
    console.log(`Question 3: Answer: ${cheesyDanceMovieAnswer}`);
  }

  //   // <------------------------- QUESTION 4 -------------------------> //
  function askQuestionFour() {
    let tallerThanAnswer = prompt('Am I taller than 5\'3"?').toLowerCase();
    if (tallerThanAnswer === 'no' || tallerThanAnswer === 'n') {
      numberOfCorrectAnswers++;
      alert(
        `You're right. I'm actually the shortest in my immediate family. And they remind me of this A LOT. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    } else if (tallerThanAnswer === 'yes' || tallerThanAnswer === 'y') {
      alert(
        `Sorry, you guessed wrong. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    }
    console.log(`Question 4: Answer: ${tallerThanAnswer}`);
  }

  // <------------------------- QUESTION 5 -------------------------> //
  function askQuestionFive() {
    let playsInstrumentAnswer = prompt(
      'Do I play an instrument?'
    ).toLowerCase();
    if (playsInstrumentAnswer === 'yes' || playsInstrumentAnswer === 'y') {
      numberOfCorrectAnswers++;
      alert(
        `Yep! I play guitar, and I also sing. Fun fact: at one point I was part of my family band. Until I moved away. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    } else if (
      playsInstrumentAnswer === 'no' ||
      playsInstrumentAnswer === 'n'
    ) {
      alert(
        `Sorry, that's incorrect. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
      );
    }
    console.log(`Question 5: Answer: ${playsInstrumentAnswer}`);
  }

  // <------------------------- QUESTION 6 -------------------------> //
  function askQuestionSix() {
    let min = 1;
    let max = 10;
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomNumber);
    let guesses = 0;
    let guessesLeft = 4;
    let guessNumberAnswer = 0;
    while (guessNumberAnswer !== randomNumber && guesses < guessesLeft) {
      guessNumberAnswer = prompt(
        `I'm thinking of a number between 1 and 10. Can you guess it? You have ${guessesLeft -
          guesses} guesses left.`
      );
      console.log(`guessed the number: ${guessNumberAnswer}`);
      console.log(guessNumberAnswer === randomNumber && guesses < 4);
      console.log(typeof guessNumberAnswer);
      guesses++;
      if (guessNumberAnswer > randomNumber) {
        alert(`Too high! You have ${guessesLeft - guesses} guesses left.`);
      }
      if (guessNumberAnswer < randomNumber) {
        alert(`Too low! You have ${guessesLeft - guesses} guesses left.`);
      }
      if (
        parseInt(guessNumberAnswer) === randomNumber &&
        guessesLeft >= guesses
      ) {
        numberOfCorrectAnswers++;
        alert(
          `You guessed it! I am thinking of the number ${randomNumber}. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
        );
        break;
      }
      if (
        parseInt(guessNumberAnswer) !== randomNumber &&
        guessesLeft === guesses
      ) {
        alert(
          `Sorry! You're out of guesses! You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
        );
      }
    }
  }

  // <------------------------- QUESTION 7 -------------------------> //
  function askQuestionSeven() {
    const states = ['colorado', 'north carolina'];
    let stateLivedInAnswer = '';
    const availableGuesses = 6;
    let triesUsed = 0;
    while (
      (stateLivedInAnswer !== states[0] || stateLivedInAnswer !== states[1]) &&
      triesUsed < availableGuesses
    ) {
      stateLivedInAnswer = prompt(
        `Can you guess what states I have lived in besides Washington? You have ${availableGuesses -
          triesUsed} guesses left.`
      ).toLowerCase();
      triesUsed++;
      if (
        (stateLivedInAnswer === states[0] ||
          stateLivedInAnswer === states[1]) &&
        triesUsed < 6
      ) {
        numberOfCorrectAnswers++;
        alert(
          `Correct! I have lived in North Carolina and Colorado. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
        );
        break;
      }
      if (
        (stateLivedInAnswer !== states[0] ||
          stateLivedInAnswer !== states[1]) &&
        triesUsed === availableGuesses
      ) {
        alert(
          `Sorry. None of those are correct and you're out of guesses. I've lived in North Carolina and Colorado. You've answered ${numberOfCorrectAnswers} out of ${numberOfQuestions} questions correctly.`
        );
      }
      console.log(`try #${triesUsed} answer: ${stateLivedInAnswer}`);
    }
  }

  function giveSummary() {
    if (numberOfCorrectAnswers < 3) {
      alert(
        `You got ${numberOfCorrectAnswers} out of ${numberOfQuestions} correct, ${guestName}. Better luck next time!`
      );
    } else if (numberOfCorrectAnswers > 3 && numberOfCorrectAnswers <= 5) {
      alert(
        `You got ${numberOfCorrectAnswers} out of ${numberOfQuestions} correct, ${guestName}. Not bad.`
      );
    } else if (numberOfCorrectAnswers > 5) {
      alert(
        `High Score! You got ${numberOfCorrectAnswers} out of ${numberOfQuestions} correct, ${guestName}!`
      );
    }
  }

  playTheGame();
});
