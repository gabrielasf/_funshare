const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({
  name: String,
  city: String,
  address: String,
  myGame: [{
    myGameName: String,  
    myGameLanguage: String,
    myGamePlayers: Number,
    myGameCategory: String
  }],
  email: String,
  nickname: String,
  password: String,
  avatar: String,
  aboutMe: String,
  events: String,
  availability: String,

  /*location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // Array of arrays of arrays of numbers
      required: true,
    },
  }, */
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
