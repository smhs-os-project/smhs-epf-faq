'use strict'

const { $$ } = require('./libs/query.js')

// includes/header.pug: toggle
// thanks for https://bulma.io/documentation/components/navbar/#navbar-menu
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call($$('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = $$('#' + target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

// includes/header.pug: top button
$$('.back-top').forEach(e => e.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}))

// includes/header.pug: countdown
// thanks for https://www.w3schools.com/howto/howto_js_countdown.asp
const countdown = $$('.countdown')
const countdownInterval = setInterval(_ => {
  if (countdown == null) clearInterval(countdownInterval)
  countdown.forEach(e => {
    const expiredTime = new Date(e.dataset.expired).getTime()
    const now = new Date().getTime()
    const distance = expiredTime - now

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      e.innerHTML = `剩餘${days}日${hours}時${minutes}分${seconds}秒`
    } else {
      clearInterval(countdownInterval)
      e.innerHTML = '時間到！'
    }
  })
}, 1000)