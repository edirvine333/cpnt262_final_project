//  **********  Routing Module for JSON endpoints  ***********  //

//  Load modules
const express = require('express')
const mongoose = require('../../../_connection.js')

//  Load databases
//  Names of databases can be modified
const Dog = require('../../../models/dog.js')
const Subscriber = require('../../../models/subscribers.js')
const Member = require('../../../models/members.js')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

//  Endpoints
//  /api/v0/gallery
router.get('/api/v0/gallery', function (req, res) {
  Dog.find(function (err, dogs){
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(dogs)
  })
})

//  /api/v0/subscribers
router.get('/api/v0/subscribers', function (req, res) {
  Subscriber.find(function (err, subscribers){
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(subscribers)
  })
})

//  /api/v0/members
router.get('/api/v0/members', function (req, res) {
  Member.find(function (err, members){
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(members)
  })
})

//  Define the script as a module
module.exports = router