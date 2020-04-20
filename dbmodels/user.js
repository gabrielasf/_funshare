const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({

  name: String,
  language: String,
  city: String

});

const User = mongoose.model("user", UserSchema);

module.exports = User;