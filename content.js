// content.js
const difficultyTags = document.querySelectorAll(
  ".text-difficulty-easy, .text-difficulty-medium, .text-difficulty-hard, .text-olive, .text-yellow, .text-pink"
);

difficultyTags.forEach(tag => {
  tag.style.display = "none";
});
