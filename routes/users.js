var express = require("express");
var router = express.Router();
var User = require("../dbmodels/user");
var passport = require("passport");
require("../config/passport")(passport);

const bodyParser = require("body-parser");
router.use(bodyParser.json()); //to support JSON-encoded body
router.use(
  bodyParser.urlencoded({
    //to support URL-encoded body
    extended: true,
  })
);


//GET all users
router.get("/", function (req, res, next) {
  User.find({}, function (err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//GET user by id
router.get("/:id", function (req, res, next) {
  User.findOne({ _id: req.params.id }, function (err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//GET user by category
router.get("/category/:myGameCategory", function (req, res, next) {
  User.find({ myGameCategory: req.params.myGameCategory }, function (
    err,
    result
  ) {
    //console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//GET user by city
router.get("/city/:city", function (req, res, next) {
  User.find({ city: req.params.city }, function (err, result) {
    //console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//GET user by multiple filters
router.post("/filteredSearch", function (req, res) {
  //console.log("body request", req.body);
  let obj = {};
  if (req.body.cityToFilter !== "") {
    obj["city"] = req.body.cityToFilter;
  }
  if (req.body.gameCategory.length !== 0) {
    obj["myGame.myGameCategory"] = req.body.gameCategory;
  }
  if (req.body.gameLanguage !== "") {
    obj["myGame.myGameLanguage"] = req.body.gameLanguage;
  }

  console.log("to jest obiekt", obj);

  User.find(obj, function (err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//add new user GEOCODE
/*router.post("/", function (req, res) {
  const geoCoord = {
    type: "Point",
    coordinates: [41.390205, 2.154007],
  };

  let user = new User(req.body);
  console.log(user);
  user.location = geoCoord;
  console.log(user);
  user.save(function (err, user) {
    res.json(user);
    console.log(err);
  });
}); */

//ADD new user
router.post("/", function (req, res) {
  let user = new User(req.body);
  user.save(function (err, user) {
    res.json(user);
    console.log(err);
  });
});


//DELETE user by id
router.delete("/:id", function (req, res) {
  User.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("User deleted!");
      res.redirect("/users");
    }
  });
});

//UPDATE user by id, ADD new game, DELETE game
router.patch("/:id", function (req, res) {
  let newObj = {};
  console.log("body of the request", req.body);

  if (req.body.name !== undefined) {
    newObj["name"] = req.body.name;
  }
  if (req.body.address !== undefined) {
    newObj["address"] = req.body.address;
  }
  if (req.body.city !== undefined) {
    newObj["city"] = req.body.city;
  }
  if (req.body.myGame !== undefined) {
    newObj["myGame"] = req.body.myGame;
  }
  if (req.body.email !== undefined) {
    newObj["email"] = req.body.email;
  }
  if (req.body.username !== undefined) {
    //WILL BE THE NEW EMAIL :)/ SIGN: GABI
    newObj["username"] = req.body.username;
  }
  if (req.body.nickname !== undefined) {
    newObj["nickname"] = req.body.nickname;
  }
  if (req.body.password !== undefined) {
    newObj["password"] = req.body.password;
  }
  if (req.body.avatar !== undefined) {
    newObj["avatar"] = req.body.avatar;
  }
  if (req.body.aboutMe !== undefined) {
    newObj["aboutMe"] = req.body.aboutMe;
  }
  if (req.body.events !== undefined) {
    newObj["events"] = req.body.events;
  }
  if (req.body.availability !== undefined) {
    newObj["availability"] = req.body.availability;
  }

  console.log("This is the object", newObj);
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: newObj,
    },
    { new: true },
    function (err, user) {
      console.log("this is our user", user);
      if (err) {
        console.log(err);
        res.json({ error: err });
      } else {
        res.json({ error: null });
      }
    }
  );

  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(" ");
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
});

module.exports = router;
