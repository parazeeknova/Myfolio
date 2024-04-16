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
  const toastEl = document.getElementById('welcomeToast')
  const toast = new bootstrap.Toast(toastEl, {
    delay: 6000,
    autohide: true
  })
  toast.show()
})

document.getElementById('devPhoto').addEventListener('click', (event) => {
  const toastEl = document.getElementById('photoToast')
  const toast = new bootstrap.Toast(toastEl, {
    delay: 6000,
    autohide: true
  })
  toast.show()
})
