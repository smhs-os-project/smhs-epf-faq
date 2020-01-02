'use strict'
/* global
  localStorage, location
*/

const { $$ } = require('./libs/query.js')
const pageMeta = $$('#meta')
const hljs = require('highlight.js/lib/highlight.js')
const hljsCpp = require('highlight.js/lib/languages/cpp.js')

// HLJS
hljs.registerLanguage('cpp', hljsCpp) // 註冊語言: cpp

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

// lesson/*.pug
if (pageMeta.dataset.pageId.match(/lesson-.+/)) hljs.initHighlightingOnLoad() // 開啟頁面時自動載入 HLJS
