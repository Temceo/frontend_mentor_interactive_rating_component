// const ratings = document.querySelectorAll(".rating");
// const submitBtn = document.querySelector(".submit");
// let currentRating;

// ratings.forEach((rating) => {
//   rating.addEventListener("click", () => {
//     const id = rating.dataset.id - 1; // get data-id
//     currentRating = rating.dataset.id;
//     ratings.forEach((r) => r.classList.remove("active-btn"));
//     rating.classList.add("active-btn");
//   });
// });

// submitBtn.addEventListener("click", () => {
//   if (currentRating == undefined) {
//     const errorMessage = document.querySelector(".error-message");
//     errorMessage.style.display = "block";
//     // Hide it after 3 seconds
//     setTimeout(() => {
//       errorMessage.style.display = "none";
//     }, 3000);
//     return; // Stop the function execution
//   } else {
//     document.querySelector(".active-state").style.display = "none";
//     document.querySelector(".submitted-state").style.display = "flex";
//     const p = document.createElement("p");
//     p.textContent = `You selected ${currentRating} out of 5`;
//     document.querySelector(".rating-given").appendChild(p);
//   }
// });

const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");
const errorMessage = document.querySelector(".error-message");
const activeState = document.querySelector(".active-state");
const submittedState = document.querySelector(".submitted-state");
const ratingGiven = document.querySelector(".rating-given");

let currentRating = null;

// Handle rating click
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    currentRating = rating.dataset.id;

    // Remove active class from all ratings
    ratings.forEach((r) => r.classList.remove("active-btn"));

    // Add active class to clicked rating
    rating.classList.add("active-btn");
  });
});

// Handle submit click
submitBtn.addEventListener("click", () => {
  if (!currentRating) {
    showError("Please select a rating before submitting!");
    return;
  }

  // Hide active state, show submitted state
  activeState.style.display = "none";
  submittedState.style.display = "flex";

  // Insert feedback paragraph
  ratingGiven.textContent = ""; // Clear previous messages
  const p = document.createElement("p");
  p.textContent = `You selected ${currentRating} out of 5. Thank you!`;
  ratingGiven.appendChild(p);
});

// Utility function to show error messages temporarily
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000);
}
