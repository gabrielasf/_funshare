var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../dbmodels/user");
var bcrypt = require('bcrypt');


//login
router.post('/login', function(req, res) { 
  console.log('checking in');
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      
      //check if password matches
      // bcrypt.genSalt(10, function (err, salt) {
      //   if (err) {
      //       return next(err);
      //   } 
      //   console.log("genSalt",err, salt);
      //   bcrypt.hash(req.body.password, salt, function (err, hash) {
      //       if (err) {
      //           return next(err);
      //       }
      //       user.password = hash;
      //       console.log(("hash",err), hash);
      //       //next();
      //   });
      // })

      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token, _id: user._id });
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

module.exports = router;

