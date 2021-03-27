//  Model describing the properties of the Members database

//  Load Mongoose npm package
const mongoose = require('mongoose')

//  Build model schema
const memberSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
})

//  Define model as a module
module.exports = Member = mongoose.model('Member', memberSchema)