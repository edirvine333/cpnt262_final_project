// Import connection
const mongoose = require('./connection/_connection')

// Import model
const Subcriber = require('./model/Subscriber')

// Import object, this data is use for upload 
const seedSubscribers = require('./seeds/subscribers')

// batch process 
// if you did not create a database and collection on mongodb.com
// <dog> will be your collection
// and your database will be the string you put in the url after @cluster0.mbm0p.mongodb.net/<your-data-base-name>
// will auto generate

// seeding dogs
Subcriber.insertMany(seedSubscribers,(err, cb)=>{

  if(err){ return err }
  
  console.log('Data import completed')
  console.log(cb)
  mongoose.connection.close();
 })


// to execute on command line type 'node import.js'