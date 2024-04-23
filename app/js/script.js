// Bubble Animation:
function splitTextIntoSpans(target) {
  const elements = document.querySelectorAll(target);
  elements.forEach((element) => {
    element.classList.add("split-text");
    const text = element.innerText;
    const splitText = text
      .split(" ")
      .map(function (word) {
        const char = word
          .split("")
          .map((char) => {
            return `<span class="split-char">${char}</span>`;
          })
          .join("");
        return `<div class="split-word">${char}&nbsp</div>`;
      })
      .join("");

    element.innerHTML = splitText;
  });
}

splitTextIntoSpans(".bubble-text");

document.addEventListener("DOMContentLoaded", (event) => {
  const toastEl = document.getElementById("welcomeToast");
  const toast = new bootstrap.Toast(toastEl, {
    delay: 6000,
    autohide: true,
  });
  toast.show();
});

document.getElementById("devPhoto").addEventListener("click", (event) => {
  const toastEl = document.getElementById("photoToast");
  const toast = new bootstrap.Toast(toastEl, {
    delay: 6000,
    autohide: true,
  });
  toast.show();
});

document.getElementById("devPhotomini").addEventListener("click", (event) => {
  const toastEl = document.getElementById("trollToast");
  const toast = new bootstrap.Toast(toastEl, {
    delay: 6000,
    autohide: true,
  });
  toast.show();
});

const backgrounds = [
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/sppokII.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/Neko.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/space.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/plane.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/rain.gif?raw=true",
];
let currentBackgroundIndex = 0;

document
  .getElementById("changeBackgroundButton")
  .addEventListener("click", (event) => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.querySelector(".bg-custom").style.backgroundImage =
      "url('" + backgrounds[currentBackgroundIndex] + "')";
  });
