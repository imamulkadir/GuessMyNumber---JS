'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 25;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No Input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
    //Player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        (document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //     //Player guessed high
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //Player guessed low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
