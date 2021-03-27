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
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(dogs)
  })
})

//  /api/v0/subscribers
router.get('/api/v0/subscribers', (req, res) => {
  Subscriber.find({},(err,subscribers) => {
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(subscribers)
  })
})

//  /api/v0/members
router.get('/api/v0/members', (req, res) => {
  Member.find({},(err,members) => {
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
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
        return res.sendFile(__dirname +'/public/500.html')
      }
     console.log(newSub)

    })
})


//  Define the script as a module
module.exports = router