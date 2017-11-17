const path = require('path')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')

module.exports = exports = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  serveStatic(path.join(__dirname, 'public'))
]