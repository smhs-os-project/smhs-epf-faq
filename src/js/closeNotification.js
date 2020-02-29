const { $$ } = require('./libs/query.js')

// *: close notification
// usage: button.delete(data-close='#the-element-to-close')
//                                  ~~~~~~~~~~~~~~ selector
document.addEventListener('DOMContentLoaded', () => {
  $$('button.delete').forEach(el => {
    el.addEventListener('click', ev => {
      const close = ev.target.dataset.close
      if (close) {
        document.querySelectorAll(close).forEach(el => {
          el.classList.add('hide')
        })
      }
    })
  })
})
