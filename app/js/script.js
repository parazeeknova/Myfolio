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

function createToast(elementId, delay) {
  const toastEl = document.getElementById(elementId);
  const toast = new bootstrap.Toast(toastEl, {
    delay,
    autohide: true,
  });
  toast.show();
}

document.addEventListener("DOMContentLoaded", (event) => {
  createToast("welcomeToast", 6000);
});

document.getElementById("devPhoto").addEventListener("click", (event) => {
  createToast("photoToast", 6000);
});

document.getElementById("whatsNew").addEventListener("click", (event) => {
  createToast("whatsNewToast", 12000);
});

document.getElementById("pedro").addEventListener("click", function () {
  const video = document.getElementById("myVideo");
  video.style.display = "block";
  video.play();
});

const video = document.getElementById("myVideo");

video.addEventListener("pause", function () {
  video.style.display = "none";
});

const backgrounds = [
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/sppokII.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/Neko.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/space.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/redswan.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/tired.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/vrain.gif?raw=true",
  "https://github.com/parazeeknova/Myfolio/blob/main/resources/background/neir.gif?raw=true",
];
let currentBackgroundIndex = 0;

document
  .getElementById("changeBackgroundButton")
  .addEventListener("click", (event) => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.querySelector(".bg-custom").style.backgroundImage =
      "url('" + backgrounds[currentBackgroundIndex] + "')";
  });
