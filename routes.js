const router = require('express').Router()

module.exports = exports = router

router.get('/', (req, res, next) => {
  res.render('home', {
    greet: 'hello there'
  })
})
