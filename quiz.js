function checkAnswer () {
  const correctAnswer = '4';
  const selectedOption = document.querySelector('input[name="quiz"]: checked');

  if (!selectedOption) return;
  const userAnswer = selectedOption.value;
  const feedback = document.getElementById('feedback');
  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Correct! Well done.';
  } else {
    feedback.textContent = "That's incorrect. Try again!"
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-answer").addEventListener("click", checkAnswer);
})