//  ********  Routing Module for HTML Endpoints  **********  //

//  Load modules
const express = require('express')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

// index
router.get('/',(req,res) => {
  res.render('pages/index')
})

// gallery
router.get('/gallery-list',(req,res) => {
  res.render('pages/gallery-list')
})
//  Defines the script as a module
module.exports = router