$('.toast').on('show.bs.toast', function () {
  document.getElementById('toastAudio').play()
})

document.getElementById('scrollToTop').addEventListener('click', function () {
  document.getElementById('whooshAudio').play()
})

$(document).ready(function () {
  $('#scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800)
    return false
  })

  $('a.nav-link').click(function (event) {
    const href = $(this).attr('href')
    if (href.startsWith('#')) {
      event.preventDefault()
      $('html, body').animate(
        {
          scrollTop: $(href).offset().top
        },
        500
      )
    }
  })

  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()
      const hash = this.hash
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash
        }
      )
    }
  })

  $('a:not(.nav-link)').attr('target', '_blank');

  ScrollReveal().reveal('.fade-in', {
    distance: '60px',
    duration: 1000,
    delay: 0,
    opacity: 0,
    interval: 100,
    viewFactor: 0.2,
    reset: true
  })

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const progress = (scrollTop / docHeight) * 100
    document.getElementById('progress-bar').style.height = progress + '%'
  })
})

$('a.nav-link').on('click', function(e) {
  e.preventDefault();
  var url = this.href;
  $('body').addClass('fade-out');
  setTimeout(function() {
      window.location = url;
  }, 500); 
});
