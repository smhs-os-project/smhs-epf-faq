const { $$ } = require('./libs/query.js')

// includes/countdown.pug: countdown
// thanks for https://www.w3schools.com/howto/howto_js_countdown.asp
document.addEventListener('DOMContentLoaded', () => {
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
})
