const mongoose = require('mongoose');



const schema = mongoose.Schema({
  title: String,
  description: String,
  photo : String,
  location: String,
  starttime: String,
  date: Date
});

const eventModel = mongoose.model("events", schema);

console.log("Event Model created");

module.exports = eventModel;