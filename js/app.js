'use-strict';

// Generate panels (each representing a pixel)
const container = document.getElementById('container');

for (let i = 0; i < 3000; i++) {
  const panel = document.createElement('div');
  panel.classList.add('panel');
  container.appendChild(panel);
}

// Double event listeners for mousedown and mouseenter
// A click-and-hold to draw gesture
const panels = document.querySelectorAll('.panel');

let isMouseDown = false;

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Add event listener for each panel
panels.forEach((panel) => {
  panel.addEventListener("mouseenter", (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = "green";
    }
  });
});

// Reset button event listener
const resetButton = document.getElementById("reset")

resetButton.addEventListener("click", (e) => {
  location.reload();
})