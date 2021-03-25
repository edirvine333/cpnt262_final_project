//  ********  Routing Module for HTML Endpoints  **********  //

//  Load modules
const express = require('express')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

//  HTML Endpoints
router.get('/', (req, res) => {
  res.render('pages/index.ejs') 
})

router.get('/subscribe', (req, res) => {
  res.render('pages/subscribe.ejs')
})

router.get('/gallery', (req, res) => {
  res.render('pages/gallery.ejs')
})

router.get('/gallery/:id', (req, res) => {
  Dog.findOne({id: req.params.id}, (err, item) => {
    if (err || !item) {
      res.status(404)
      res.sendFile(__dirname + '/public/404.html')
    }

    res.render('pages/single-item.ejs')
     
  })
})

router.get('/team', (req, res) => {
  res.render('pages/team.ejs')
})

router.get('/admin', (req, res) => {
  res.render('pages/admin.ejs')
})

//  Defines the script as a module
module.exports = router