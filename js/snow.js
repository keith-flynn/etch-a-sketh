// https://webdesign.tutsplus.com/how-to-create-animated-snow-on-a-website-with-css-and-javascript--cms-93562t
const snowContainer = document.getElementById("snow-container");

// Characters that make up the snowflakes
const snowContent = ['&#10052', '&#10053', '&#10054']

// Random numbers for effects
const random = (num) => {
  return Math.floor(Math.random() * num);
}

// Generate random style for each flake
const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
    `;
}

// Add flakes to DOM
const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(2)]
    snowContainer.append(snow);
  }
}

window.addEventListener("load", () => {
  createSnow(30) // Currently set to 30 flakes
});
