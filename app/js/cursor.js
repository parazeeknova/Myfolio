const cursor = document.querySelector(".cursor");
const outline = document.querySelector(".outline");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

document.addEventListener("mousemove", function (e) {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 5) + "px; left: " + (e.pageX - 5) + "px;",
  );
  outline.setAttribute(
    "style",
    "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;",
  );
});

document.addEventListener("click", function () {
  cursor.classList.add("cursor--clicked");
  outline.classList.add("outline--hidden");
  setTimeout(function () {
    cursor.classList.remove("cursor--clicked");
    outline.classList.remove("outline--hidden");
  }, 400);
});

links.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    cursor.classList.add("cursor--link-hovered");
    outline.classList.add("outline--hidden");
  });
  link.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor--link-hovered");
    outline.classList.remove("outline--hidden");
  });
});

buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    cursor.classList.add("cursor--link-hovered");
    outline.classList.add("outline--hidden");
  });
  button.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor--link-hovered");
    outline.classList.remove("outline--hidden");
  });
});
