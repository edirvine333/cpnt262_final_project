const mongoose = require('mongoose')
require('dotenv').config()

// Connect to database
mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });
  
  module.exports = mongoose

  //  **************************  COMMENT  ******************************
  //
  //  Source code supplied in class by Tony Grimes
  //
  //  *******************************************************************