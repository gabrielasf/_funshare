var express = require('express');
var router = express.Router();
var User = require("../dbmodels/user");


const bodyParser = require("body-parser")  
router.use(bodyParser.json());        //to support JSON-encoded body
router.use(bodyParser.urlencoded({    //to support URL-encoded body
  extended : true
}));



//get all users
router.get('/', function(req, res, next) {
  User.find({}, function(err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//get user by id
router.get('/:id', function(req, res, next) {
  User.findOne({_id: req.params.id}, function(err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//get use by category
router.get('/category/:myGameCategory', function(req, res, next) {
  User.find({"myGameCategory": req.params.myGameCategory}, function(err, result) {
    //console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//get use by city
router.get('/city/:city', function(req, res, next) {
  User.find({"city": req.params.city}, function(err, result) {
    //console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});


//add new user
router.post('/', function(req, res) {
  let user = new User(req.body);
  user.save(function(err, user) {
    res.json(user);
    console.log(err);
  });
})


//delete by id
router.delete('/:id', function(req, res) {
  User.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("User deleted!");
      res.redirect("/users");
    }
  });
});


//update user by id
router.patch('/:id', function(req, res) {
  let newObj = {};

  if (req.body.name !== undefined) {
    newObj["name"] = req.body.name;
  };
  if (req.body.language !== undefined) {
    newObj["language"] = req.body.language;
  };
  if (req.body.address !== undefined) {
    newObj["address"] = req.body.address;
  };
  if (req.body.city !== undefined) {
    newObj["city"] = req.body.city;
  };
  if (req.body.myGame !== undefined) {
    newObj["myGame"] = req.body.myGame;
  };
  if (req.body.myGameLanguage !== undefined) {
    newObj["myGameLanguage"] = req.body.myGameLanguage;
  };
  if (req.body.myGamePlayers !== undefined) {
    newObj["myGamePlayers"] = req.body.myGamePlayers;
  };
  if (req.body.myGameCategory !== undefined) {
    newObj["myGameCategory"] = req.body.myGameCategory;
  };
  if (req.body.email !== undefined) {
    newObj["email"] = req.body.email;
  };
  if (req.body.nickname !== undefined) {
    newObj["nickname"] = req.body.nickname;
  };
  if (req.body.password !== undefined) {
    newObj["password"] = req.body.password;
  };
  if (req.body.avatar !== undefined) {
    newObj["avatar"] = req.body.avatar;
  };
  if (req.body.host !== undefined) {
    newObj["host"] = req.body.host;
  };
  if (req.body.guest !== undefined) {
    newObj["guest"] = req.body.guest;
  };
  if (req.body.aboutMe !== undefined) {
    newObj["aboutMe"] = req.body.aboutMe;
  };
  if (req.body.events !== undefined) {
    newObj["events"] = req.body.events;
  };
  if (req.body.availability !== undefined) {
    newObj["availability"] = req.body.availability;
  };

  User.findByIdAndUpdate(req.params.id, { 
    $set: newObj
    }, { new: true }, function (err, user) {
    if (err) {
      console.log(err);
      //res.render("../views/users/edit", {employee: req.body});
    }
    res.redirect("/users");
  });
});



module.exports = router;
