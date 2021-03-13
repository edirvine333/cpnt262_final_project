//  Loading builtin modules
const path = require('path')

//  Loading npm modules
const express = require('express')
const { response } = require('express')

//  Loading custom modules


//  Defining the "app" function
const app = express()


//  *************************************************  MIDDLEWARE  **********************************************************

//  Static page server
app.use(express.static(path.join(__dirname, 'public')))


//  Insert routing


//  Error handling
app.use(function (req, res) {
  res.status(404)
  res.send("404 Error File Not Found")
})

//  ************************************************************************************************************************

//  Assigning the .env variable
const port = process.env.PORT || 3000

//  Listening for a request
app.listen(port, function () {
  console.log(`Listening on port:  ${port}`)
})

//  **************************************************  COMMENTS  ***********************************************************
//
//  
//
//
//
//  *************************************************************************************************************************
