const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 1) {
    navbar.classList.replace("nav-transparent", "nav-color");
  } else if (window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "nav-transparent");
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
