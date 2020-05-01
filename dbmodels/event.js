const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Event Schema and Model

const EventSchema = new Schema({
  gameName: String,
  players: String,
  location: String,
  date: String,
  email: String,
  description: String,
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
