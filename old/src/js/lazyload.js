const lazyframe = require('lazyframe')
require('lazysizes') // https://web.dev/codelab-use-lazysizes-to-lazyload-images/

// includes/embedyt.pug: load YouTube videos lazily
lazyframe('.lazyframe', {
  // Substitution automatically when bundling.
  // See README.md for more details.
  apikey: process.env.ytAPIToken
})
