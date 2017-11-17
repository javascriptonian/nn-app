const express = require('express')
const middlewares = require('./middlewares')
const routes = require('./routes')

const app = express()

app.use(middlewares)
app.use(routes)

const APP_PORT = process.env.PORT || 3333

app.listen(APP_PORT, () => {
  console.log('Listening on port', APP_PORT)
})