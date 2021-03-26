//  Model describing the properties of the Dogs database

const mongoose = require('mongoose')

// schema //represent the data to be pass to database
const dogSchema = new mongoose.Schema({
  
  id: Number,
  name: String,
  description: String,
  width: Number,
  height: Number,
  img_path: String,
  credit: String,

})

// convension when using model, first Cap letter
// create a dogSchema, 
// compile and export
module.exports = Dog = mongoose.model('Dog', dogSchema)