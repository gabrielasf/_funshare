const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

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
  username: {
    type: String,
    unique: true,
    required: true
  },
  nickname: String,
  password: {
    type: String,
    required: true
},
  avatar: String,
  host: Boolean,
  guest: Boolean,
  aboutMe: String,
  events: String,
  availability: String,

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // Array of arrays of arrays of numbers
      required: true,
    },
  },
});

//check and hash password
UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};


const User = mongoose.model("user", UserSchema);
//const User = mongoose.model("User", UserSchema);

module.exports = User;
