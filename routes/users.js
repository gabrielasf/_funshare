var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Create Schema and Model

const UserSchema = new Schema({

  name: String,
  language: String,
  city: String

});

const User = mongoose.model("user", UserSchema);

const bodyParser = require("body-parser")  
router.use(bodyParser.json());        //to support JSON-encoded body
router.use(bodyParser.urlencoded({    //to support URL-encoded body
  extended : true
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("hello");
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  let user = new User(req.body);
  console.log(user);
  user.save(function(err, user) {
    res.json(user);
  });
})


module.exports = router;
