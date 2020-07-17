const { $$ } = require('./libs/query.js')

// views: 自動設定 target='_blank'
document.addEventListener('DOMContentLoaded', () => $$('a.is-blank').forEach(e => e.setAttribute('target', '_blank')))
