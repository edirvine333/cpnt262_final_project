//  Model describing the properties of the Members database

//  Load Mongoose npm package
const mongoose = require('mongoose')

//  Build model schema
const memSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
  github: String
})

//  Define model as a module
module.exports = mongoose.model('Member', memSchema)