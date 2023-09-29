//heading title
const textArray = [
  "M A S S I V E T R A U M A",
  "traumassive",
  "trauma",
  "ben",
  "7"
];
let currentIndex = 0;

function changeText() {
  document.getElementById("changing-text").textContent =
    textArray[currentIndex];
  currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 3000);

//navbar trans -> color
const navbar = document.getElementById("nav-trans");
const navbarText = document.getElementsByName("navbar-text");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    navbar.classList.replace("nav-transparent", "nav-color");
    navbarText.forEach((element) =>
      element.classList.replace("text-white-navbar", "text-black-navbar")
    );
  } else if (window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "nav-transparent");
    navbarText.forEach((element) =>
      element.classList.replace("text-black-navbar", "text-white-navbar")
    );
  }
});

const scrollIndicator = document.querySelector(".scroll-indicator");

function update() {
  scrollIndicator.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}

update();
