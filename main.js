//Selector
const cursor = document.querySelector(".cursor");
const navbar = document.querySelector(".navbar");
const a = document.querySelectorAll("#a");

a.style.color = "#b4b4b4";

//Event-listener
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.pageY - 10}px`;
  cursor.style.left = `${e.pageX - 10}px`;
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 200);
});

document.addEventListener("dblclick", () => {
  cursor.classList.add("burst");
  setTimeout(() => {
    cursor.classList.remove("burst");
  }, 200);
});

document.addEventListener("scroll", () => {
  if (window.top.scrollY > 19) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
    navbar.style.transition = ".4s ease";
  }
});

function changeBg() {
  var nav = document.querySelector("#navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 635) {
    nav.classList.remove("navcolor");
  } else {
    nav.classList.add("navcolor");
  }
}

window.addEventListener("scroll", changeBg);
