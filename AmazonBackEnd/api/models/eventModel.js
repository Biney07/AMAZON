import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: String,
  description: String,
  photo : String,
  location: String,
  starttime: String,
  date: Date
});

const eventModel = mongoose.model("events", schema);

export default eventModel;
