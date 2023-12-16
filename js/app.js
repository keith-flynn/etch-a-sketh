'use-strict';
const gridSizeInput = document.getElementById("grid-size-input")
const widthDimension = document.querySelector(".width-dimension")
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset")
const container = document.getElementById('container');

let gridSizeValue = 10;

// Generate panels (each representing a pixel)
function generatePanels() {
  container.replaceChildren();
  for (let i = 0; i < gridSizeValue; i++) {
    const panelRow = document.createElement('div');
    //panelRow.classList.add('panel');
    panelRow.classList.add('row');
    container.appendChild(panelRow);
    for (let j = 0; j < gridSizeValue; j++) {
      const panelColumn = document.createElement('div');
      panelColumn.classList.add('panel');
      panelColumn.classList.add('column');
      panelRow.appendChild(panelColumn);
    }
    addPanelListeners();
  }
  generateWidthDisplay();
}

generatePanels();

function changePanels() {
  gridSizeValue = gridSizeInput.value;
  generatePanels();
  addPanelListeners();
}

// Match the input for a [number] X [number] square display
function generateWidthDisplay() {
  widthDimension.innerText = `X ${gridSizeValue}`;
}

// Double event listeners for mousedown and mouseenter
// A click-and-hold to draw gesture
let isMouseDown = false;

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Add event listener for each panel
function addPanelListeners() {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel) => {
    panel.addEventListener("mouseover", (e) => {
      if (isMouseDown) {
        e.target.style.backgroundColor = "green";
      }
    });
  });
}

// Reset button event listener
resetButton.addEventListener("click", (e) => {
  location.reload();
})

// Change grid size event listener
submitButton.addEventListener("click", changePanels);