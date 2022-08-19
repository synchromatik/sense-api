const mongoose = require('mongoose')
const { Schema } = mongoose

const inputs = new Schema({
  _id: {type: String}, 
  Date: Date,
  Temp: Number,
  TempFromHumidity: Number,
  TempFromPresure: Number, 
  Presure: Number, 
  Humidity: Number, 
  Orientation: Array, 
  Accelerometer: Array,

})

module.exports = mongoose.model("inputs", inputs);



