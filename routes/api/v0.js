//  **********  Routing Module for JSON endpoints  ***********  //

//  Load modules
const express = require('express')
const mongoose = require('../../connection/_connection.js')

//  Load databases
//  Names of databases can be modified
const Dog = require('../../model/dog.js')
const Subscriber = require('../../model/subscriber.js')
const Member = require('../../model/member.js')

//  Declares "router" and assigns it the express.Router function, which gives us the .get method
const router = express.Router()

//  Endpoints
//  /api/v0/gallery
router.get('/api/v0/gallery', (req, res) => {
  Dog.find((err, dogs) => {
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(dogs)
  })
})

//  /api/v0/subscribers
router.get('/api/v0/subscribers', (req, res) => {
  Subscriber.find((err, subscribers) => {
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(subscribers)
  })
})

//  /api/v0/members
router.get('/api/v0/members', (req, res) => {
  Member.find((err, members) => {
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(members)
  })
})

//  Define the script as a module
module.exports = router