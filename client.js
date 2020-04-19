let appComponent = require('./src/app')
let fastClick = require('fastclick')

document.addEventListener('DOMContentLoaded', () => {
  appComponent.renderSync({ name: "Boxie Boi" }).appendTo(document.body)

  fastClick.attach(document.body)
})