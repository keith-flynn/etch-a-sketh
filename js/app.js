'use-strict';

const container = document.getElementById('container');

for (let i = 0; i < 4000; i++) {
  const panel = document.createElement('div');
  panel.classList.add('panel');
  container.appendChild(panel);
}

const panels = document.querySelectorAll('.panel');

let isMouseDown = false;

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

panels.forEach((panel) => {
  panel.addEventListener("mouseenter", (e) => {
    if (isMouseDown) {
      e.target.style.backgroundColor = "green";
    }
  });
});