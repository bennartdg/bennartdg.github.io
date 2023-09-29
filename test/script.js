const textArray = [
  "M A S S I V E T R A U M A",
  "trauma",
  "bennart",
  "traumassive",
];
let currentIndex = 0;

function changeText() {
  document.getElementById("changing-text").textContent =
    textArray[currentIndex];
  currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds
