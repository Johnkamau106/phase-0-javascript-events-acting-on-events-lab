// Get the dodger element
const dodger = document.getElementById("dodger");

// Initialize the dodger's left style property if not already set
if (!dodger.style.left) {
  dodger.style.left = "0px";
}

// Function to move the dodger left
function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""));
  
  // Move dodger left if it's not at the left edge
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  // Get the current left position of the dodger
  let left = parseInt(dodger.style.left.replace("px", ""));
  
  // Get the width of the game container (where dodger stops)
  const gameWidth = document.getElementById("game").offsetWidth;
  
  // Ensure the dodger doesn't move off the right side
  if (left < gameWidth - 40) { // 40px is the width of the dodger
    // Move the dodger right by 1px
    dodger.style.left = `${left + 1}px`;
  }
}

// Listen for keydown events
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
