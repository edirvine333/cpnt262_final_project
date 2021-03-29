//  **********  Routing Module for JSON endpoints  ***********  //

//  Load modules
const express = require('express')
const mongoose = require('../../connection/_connection.js')

//  Load databases
const Dog = require('../../model/dog')
const Subscriber = require('../../model/subscriber')
const Member = require('../../model/member')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

//  Endpoints

//  /api/v0/gallery
router.get('/gallery', (req, res) => {
  Dog.find({},(err, dogs) => {
    if (err) {
      res.status(404)
      res.render('pages/404')
    }
    res.json(dogs)
  })
})

//  script which finds the image called by the request parameter "id" in the URL
router.get('/gallery-item/:id', (req, res) => {
  Dog.find({id: req.params.id}, (err, item) => {
    if (err || !item) {
      res.status(404)
      res.render('pages/404')
    }
    res.render('pages/single-item', {dog: item, pageTitle: 'Single-Image'})    
  })
})

//  /api/v0/subscribers
router.get('/subscribers', (req, res) => {
  Subscriber.find({},(err,subscribers) => {
    if (err) {
      res.status(404)
      res.render('pages/404')
    }
    res.json(subscribers)
  })
})

//  /api/v0/members
router.get('/members', (req, res) => {
  Member.find({},(err,members) => {
    if (err) {
      res.status(404)
      res.render('pages/404')
    }
    res.json(members)
  })
})


// Post request/ save data to database
router.post('/subscriber',(req,res) => {    
    const { firstname, lastname, email } = req.body    
    const newSub = new Subscriber({ firstname, lastname, email})
    newSub.save( (err) => {
      if(err){
        res.status(500)
        res.render('pages/500')
      }
     console.log(newSub)
     res.render('pages/thnx')
    })
})

//  Define the script as a module
module.exports = router