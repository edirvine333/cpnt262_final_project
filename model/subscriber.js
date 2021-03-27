//  Model describing the properties of the Subscribers database

//  Load Mongoose npm package
const mongoose = require('mongoose')


//  Build model schema
const subSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String
})

//  Define model as a module
module.exports = Subscriber = mongoose.model('Subscriber', subSchema)
