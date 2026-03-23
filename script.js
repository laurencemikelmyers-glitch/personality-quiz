// Personality Quiz Script
// This script handles the quiz logic, including answer selection, result calculation, and reset functionality.

const questionBlocks = document.querySelectorAll(".question-block");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const showResultBtn = document.getElementById("show-result");

// Track selection
questionBlocks.forEach(block => {
  const buttons = block.querySelectorAll(".answer-btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
});

// Show result
showResultBtn.addEventListener("click", () => {
  let totalScore = 0;
  const selectedAnswers = document.querySelectorAll(".answer-btn.selected");

  selectedAnswers.forEach(btn => {
    totalScore += Number(btn.dataset.points);
  });

  let result = "";
  if (totalScore <= 5) {
    result = "You are Chill 😎";
  } else if (totalScore <= 10) {
    result = "You are Creative 🎨";
  } else {
    result = "You are a Leader 😤";
  }

  resultText.textContent = result;
  resultContainer.style.display = "block";
});

// Reset quiz
const resetBtn = document.getElementById("reset-btn");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    // Clear all selections
    const selectedButtons = document.querySelectorAll(".answer-btn.selected");
    selectedButtons.forEach(btn => btn.classList.remove("selected"));
    
    // Hide result
    resultContainer.style.display = "none";
  });
}