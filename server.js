//  Loading builtin modules
const path = require('path')

//  Loading npm modules
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

//  Loading custom modules
const api = require('./routes/api/v0.js')
const route = require('./routes/index.js')

//  Defining the "app" function
const app = express()


//  *************************************************  MIDDLEWARE  **********************************************************

app.use(cors())

// body parser/ important to decode post request from url encoded request
app.use(express.urlencoded({extended: false}))

//  Static page server
app.use(express.static(path.join(__dirname, 'public')))

//  Insert routing
app.use('/', route)
app.use('/', api)

//  Error handling
app.use((req, res) => {
  res.status(404)
  res.send("404 Error File Not Found")
})

//  ************************************************************************************************************************

//  Assigning the .env variable
const PORT = process.env.PORT || 3000

//  Listening for a request
app.listen(PORT, () => {
  console.log(`Listening on port:  ${PORT}`)
})


//  **************************************************  COMMENTS  ***********************************************************
//
//  
//
//
//
//  *************************************************************************************************************************
