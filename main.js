//Selector
const cursor = document.querySelector(".cursor");

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
