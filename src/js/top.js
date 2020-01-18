const { $$ } = require('./libs/query.js')

// includes/top.pug: top button
document.addEventListener('DOMContentLoaded', () => {
  $$('.back-top').forEach(e => e.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }))
})
