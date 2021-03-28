//  Loading builtin modules
const path = require('path')

//  Loading npm modules
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

//  Loading custom modules
const api = require('./routes/api/v0')
const index = require('./routes/index')

//  Defining the "app" function
const app = express()


//  *************************************************  MIDDLEWARE  **********************************************************
// cors
app.use(cors())

// set view engine
app.set('view engine', 'ejs')

// body parser/ important to decode post request from url encoded request
app.use(express.urlencoded({extended: true}))

//  Static page server
app.use(express.static(path.join(__dirname + '/public')))

//  Insert routing
app.use('/',index)
app.use('/api/v0',api)

//  Error handling
app.use((req, res) => {
  res.status(404)
  res.render("pages/404")
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
