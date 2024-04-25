const cursor = document.querySelector('.cursor')
const outline = document.querySelector('.outline')

document.addEventListener('mousemove', function (e) {
  cursor.setAttribute(
    'style',
    'top: ' + (e.pageY - 5) + 'px; left: ' + (e.pageX - 5) + 'px;'
  )
  outline.setAttribute(
    'style',
    'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px;'
  )
})

document.addEventListener('click', function () {
  cursor.classList.add('cursor--clicked')
  outline.classList.add('outline--hidden')
  setTimeout(function () {
    cursor.classList.remove('cursor--clicked')
    outline.classList.remove('outline--hidden')
  }, 400)
})

document.addEventListener('mouseover', function (event) {
  if (event.target.matches('a, button')) {
    cursor.classList.add('cursor--link-hovered')
    outline.classList.add('outline--hidden')
  }
})

document.addEventListener('mouseout', function (event) {
  if (event.target.matches('a, button')) {
    cursor.classList.remove('cursor--link-hovered')
    outline.classList.remove('outline--hidden')
  }
})
