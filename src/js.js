'use strict'
/* global
  localStorage, location
*/

const { $$ } = require('./libs/query.js')
const pageMeta = $$('#meta')

// index.pug: Agree Button
// TODO: 分離 JS
if (pageMeta.dataset.pageId === 'license') {
  if (localStorage.getItem('licenseAgreed')) location.href = '/tutorial.html'

  const agreeBtn = $$('#license-agree-button')
  agreeBtn.addEventListener('click', () => {
    localStorage.setItem('licenseAgreed', true)
    location.reload()
  })
}

// tutorial.pug: Understand Button
if (pageMeta.dataset.pageId === 'tutorial') {
  const usBtn = $$('#tutorial-understand')
  usBtn.addEventListener('click', () => {
    location.href = '/lesson/1.html'
  })
}
