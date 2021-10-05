const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const p3button = document.querySelector('#p3Button');
const p4button = document.querySelector('#p4Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto-input');

let p1Score = 20;
let p2Score = 20;
let winningScore = 0;
let isGameOver = false;

p1button.addEventListener('click', function() {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-danger');
      p2Display.classList.add('has-text-success');
      p1button.disabled = true;
      p2button.disabled = true;

    }
    p1Display.textContent = p1Score;
  }
});

p2button.addEventListener('click', function() {
  if (!isGameOver) {
    p1Score--;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-danger');
      p2Display.classList.add('has-text-success');
      p1button.disabled = true;
      p2button.disabled = true;
      p3Button.disabled = true;
      p4Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p3button.addEventListener('click', function() {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-danger');
      p1Display.classList.add('has-text-success');
      p1button.disabled = true;
      p2button.disabled = true;
      p3Button.disabled = true;
      p4Button.disabled = true;

    }
    p2Display.textContent = p2Score;
  }
});

p4button.addEventListener('click', function() {
  if (!isGameOver) {
    p2Score--;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('has-text-danger');
      p1Display.classList.add('has-text-success');
      p1button.disabled = true;
      p2button.disabled = true;
      p3Button.disabled = true;
      p4Button.disabled = true;

    }
    p2Display.textContent = p2Score;
  }
});









// winningScoreSelect.addEventListener('change', function() {
//   winningScore = parseInt(this.value);
//   reset();
// });

resetButton.addEventListener('click', reset)



function reset() {
  isGameOver = false;
  p1Score = 20;
  p2Score = 20;
  p1Display.textContent = 20;
  p2Display.textContent = 20;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  p1button.disabled = false;
  p2button.disabled = false;
  p3Button.disabled = false;
  p4Button.disabled = false;


}
