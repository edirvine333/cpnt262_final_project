//  Loading builtin modules
const path = require('path')

//  Loading npm modules
const express = require('express')
const dotenv = require('dotenv').config()

//  Loading custom modules
const api = require('./routes/api/v0.js')
const route = require('./routes/index.js')

//  Defining the "app" function
const app = express()


//  *************************************************  MIDDLEWARE  **********************************************************

//  Static page server
app.use(express.static(path.join(__dirname, 'public')))


//  Insert routing
app.use('/', api)
app.use('/', route)


//  Error handling
app.use((req, res) => {
  res.status(404)
  res.send("404 Error File Not Found")
})

//  ************************************************************************************************************************

//  Assigning the .env variable
const port = process.env.PORT || 3000

//  Listening for a request
app.listen(port, () => {
  console.log(`Listening on port:  ${port}`)
})

//  **************************************************  COMMENTS  ***********************************************************
//
//  
//
//
//
//  *************************************************************************************************************************
