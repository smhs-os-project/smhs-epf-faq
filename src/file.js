const epfRequestStep3Img = require('./assets/epf-request-step-3-img.png')
const epfRequestStep4Img = require('./assets/epf-request-step-4-img.png')
const epfRequestStep5Img = require('./assets/epf-request-step-5-img.jpg')
const { $$ } = require('./libs/query.js')
const setupImg = {
  '#epf-request-step-3-img': epfRequestStep3Img.default,
  '#epf-request-step-4-img': epfRequestStep4Img.default,
  '#epf-request-step-5-img': epfRequestStep5Img.default
}

let selector
for (const current in setupImg) {
  if ((selector = $$(current)) == null) continue
  selector.setAttribute('src', '/' + setupImg[current])
}
