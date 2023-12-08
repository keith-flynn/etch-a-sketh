'use-strict';

// Generate panels (each representing a pixel)
const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
  const panelRow = document.createElement('div');
  //panelRow.classList.add('panel');
  panelRow.classList.add('row');
  container.appendChild(panelRow);
  for (let j = 0; j < 16; j++) {
    const panelColumn = document.createElement('div');
    panelColumn.classList.add('panel');
    panelColumn.classList.add('column');
    panelRow.appendChild(panelColumn);
  }
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
  panel.addEventListener("mouseover", (e) => {
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