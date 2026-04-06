const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
const activeState = document.querySelector(".active-state");
const submittedState = document.querySelector(".submitted-state");
const ratingGiven = document.querySelector(".rating-given");

let currentRating = null;

document.addEventListener("DOMContentLoaded", () => {
  let selectedIndex = 0;

  // Initialize first rating selected
  function initialize() {
    ratings.forEach((rating, i) => {
      rating.classList.toggle("active-btn", i === 0);
      rating.setAttribute("aria-checked", i === 0 ? "true" : "false");
      rating.setAttribute("tabindex", i === 0 ? "0" : "-1");
      currentRating = ratings[i].dataset.id;
    });
    ratings[selectedIndex].focus();
  }

  initialize();

  function selectRating(index) {
    ratings.forEach((rating, i) => {
      rating.classList.toggle("active-btn", i === index);
      rating.setAttribute("aria-checked", i === index ? "true" : "false");
      rating.setAttribute("tabindex", i === index ? "0" : "-1");
    });
    ratings[index].focus();
    currentRating = ratings[index].dataset.id;
    selectedIndex = index;
  }

  ratings.forEach((rating, index) => {
    // Click selects rating
    rating.addEventListener("click", () => selectRating(index));

    // Keyboard navigation (arrows only!)
    rating.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowRight":
          selectRating((selectedIndex + 1) % ratings.length);
          e.preventDefault();
          break;
        case "ArrowLeft":
          selectRating((selectedIndex - 1 + ratings.length) % ratings.length);
          e.preventDefault();
          break;
        case "ArrowDown":
          // Move focus to Submit button
          submitBtn.focus();
          e.preventDefault();
          break;
      }
    });

    // Handle Submit button keyboard
    submitBtn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        // Move focus back to currently selected rating
        ratings[selectedIndex].focus();
        e.preventDefault();
      }
    });
  });
});

// Handle submit click
submitBtn.addEventListener("click", () => {
  // Hide active state, show submitted state
  activeState.style.display = "none";
  submittedState.style.display = "flex";

  // Insert feedback paragraph
  ratingGiven.textContent = ""; // Clear previous messages
  const p = document.createElement("p");
  p.textContent = `You selected ${currentRating} out of 5. Thank you!`;
  ratingGiven.appendChild(p);
});
