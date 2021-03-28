//  **********  Routing Module for JSON endpoints  ***********  //

//  Load modules
const express = require('express')
const mongoose = require('../../connection/_connection.js')

//  Load databases
//  Names of databases can be modified
const Dog = require('../../model/Dog')
const Subscriber = require('../../model/Subscriber')
const Member = require('../../model/Member')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

//  Endpoints
//  /api/v0/gallery
router.get('/api/v0/gallery', (req, res) => {
  Dog.find({},(err, dogs) => {
    if (err) {
      res.status(404)
      res.render('pages/404')
    }
    res.json(dogs)
  })
})

router.get('/gallery-item/:id', (req, res) => {

  Dog.find({id: req.params.id}, (err, item) => {

    if (err || !item) {
      res.status(404)
      res.render('pages/404')
    }

<<<<<<< HEAD
    res.render('pages/single-item', {dog: item, pageTitle:'Single-Item'})
=======
    res.render('pages/single-item', {dog: item})
    
>>>>>>> 69dbc7c9b240b45cfb1d00f13da25af429aff41b
  })

})


//  /api/v0/subscribers
router.get('/api/v0/subscribers', (req, res) => {
  Subscriber.find({},(err,subscribers) => {
    if (err) {
      res.status(404)
      res.render('pages/404')
    }
    res.json(subscribers)
  })
})

//  /api/v0/members
router.get('/api/v0/members', (req, res) => {
  Member.find({},(err,members) => {
    if (err) {
      res.status(404)
      res.render('pages/404')
    }
    res.json(members)
  })
})


// Post request/ save data to database
router.post('/api/v0/subscriber',(req,res) => {
    
    const { firstname, lastname, email } = req.body
    
    const newSub = new Subscriber({ firstname, lastname, email})
    newSub.save( (err) => {
      if(err){
        res.status(500)
        res.render('pages/500')
      }
     console.log(newSub)

    })
})


//  Define the script as a module
module.exports = router