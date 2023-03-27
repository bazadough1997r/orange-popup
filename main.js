const openButton = document.getElementById("open-popup");
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close");

// Open popup when button is clicked
openButton.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup when close button is clicked
closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.style.display = "none";
  }
});

// Close popup when clicked outside of it
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
