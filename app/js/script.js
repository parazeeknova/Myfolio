// Bubble Animation:
function splitTextIntoSpans (target) {
  const elements = document.querySelectorAll(target)
  elements.forEach((element) => {
    element.classList.add('split-text')
    const text = element.innerText
    const splitText = text
      .split(' ')
      .map(function (word) {
        const char = word.split('').map(char => {
          return `<span class="split-char">${char}</span>`
        }).join('')
        return `<div class="split-word">${char}&nbsp</div>`
      }).join('')

    element.innerHTML = splitText
  })
}

splitTextIntoSpans('.bubble-text')

document.addEventListener('DOMContentLoaded', (event) => {
    var toastEl = document.getElementById('welcomeToast');
    var toast = new bootstrap.Toast(toastEl, {
      delay: 6000,
      autohide: true
    });
    toast.show();
});

document.getElementById('devPhoto').addEventListener('click', (event) => {
  var toastEl = document.getElementById('photoToast');
  var toast = new bootstrap.Toast(toastEl, {
    delay: 6000, 
    autohide: true
  });
  toast.show();
});
