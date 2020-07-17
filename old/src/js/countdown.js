const { $$ } = require('./libs/query.js')

// includes/countdown.pug: countdown
// thanks for https://www.w3schools.com/howto/howto_js_countdown.asp
document.addEventListener('DOMContentLoaded', () => {
  const countdownTimer = {
    days: $$('.countdown > span.days > .num')[0],
    hours: $$('.countdown > span.hours > .num')[0],
    minutes: $$('.countdown > span.minutes > .num')[0],
    seconds: $$('.countdown > span.seconds > .num')[0]
  }
  const setTimer = (range, num) => { countdownTimer[range].innerHTML = num }
  const expiredTime = new Date($$('.countdown')[0].dataset.expired).getTime()

  const countdownInterval = setInterval(_ => {
    const now = new Date().getTime()
    const distance = expiredTime - now

    if (distance > 0) {
      setTimer('days', Math.floor(distance / (1000 * 60 * 60 * 24)))
      setTimer('hours', Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setTimer('minutes', Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setTimer('seconds', Math.floor((distance % (1000 * 60)) / 1000))
    } else {
      clearInterval(countdownInterval);
      ['days', 'hours', 'minutes', 'seconds'].forEach(r => setTimer(r, 0))
    }
  }, 1000)
})
