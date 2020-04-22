const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({

  name: String,
  language: String,
  city: String,
  address: String,
  myGame: String,
  myGameLanguage: String,
  myGamePlayers: Number,
  myGameCategory: String,
  email: String,
  nickname: String,
  password: String,
  avatar: String,
  host: Boolean,
  guest: Boolean,
  aboutMe: String,
  events: String,
  availability: String

});

const User = mongoose.model("user", UserSchema);

module.exports = User;