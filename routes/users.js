var express = require("express");
var router = express.Router();
var User = require("../dbmodels/user");
//const opencage = require("opencage-api-client"); //Joana

const bodyParser = require("body-parser");
router.use(bodyParser.json()); //to support JSON-encoded body
router.use(
  bodyParser.urlencoded({
    //to support URL-encoded body
    extended: true,
  })
);

//Joana
/*
function reverseGeocode(lat, lon, key, res) {
  const geostring = lat + ", " + lon;
  console.log(geostring);

  /// Read this -> https://opencagedata.com/tutorials/geocode-in-nodejs ///
  opencage
    .geocode({ q: geostring, language: "en" })
    .then((data) => {
      //console.log(JSON.stringify(data));

      if (data.status.code == 200) {
        if (data.results.length > 0) {
          var place = data.results[0];
          //console.log(place);
          if (key === "address") res.json(place.formatted);
          else if (key === "city") res.json(place.components.city);
          else if (key === "district") res.json(place.components.city_district);
          else if (key === "postcode") res.json(place.components.postcode);
          else console.log("invalid key");
        }
      } else if (data.status.code == 402) {
        console.log("hit free-trial daily limit");
        console.log("become a customer: https://opencagedata.com/pricing");
      } else {
        // other possible response codes:
        // https://opencagedata.com/api#codes
        console.log("error", data.status.message);
      }
    })
    .catch((error) => {
      console.log("error", error.message);
    });
}

//Get address where a given user lives
router.get("/address/:name", function (req, res, next) {
  const options = "location";
  const conditions = { name: req.params.name };
  User.findOne(conditions, options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      reverseGeocode(
        result.location.coordinates[0],
        result.location.coordinates[1],
        "address",
        res
      );
    }
  });
});

//Get city where a given user lives
router.get("/city/:name", function (req, res, next) {
  const options = "location";
  const conditions = { name: req.params.name };
  User.findOne(conditions, options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      reverseGeocode(
        result.location.coordinates[0],
        result.location.coordinates[1],
        "city",
        res
      );
    }
  });
});

//Get district where a given user lives
router.get("/district/:name", function (req, res, next) {
  const options = "location";
  const conditions = { name: req.params.name };
  User.findOne(conditions, options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      reverseGeocode(
        result.location.coordinates[0],
        result.location.coordinates[1],
        "district",
        res
      );
    }
  });
});

//Get postcode where a given user lives
router.get("/postcode/:name", function (req, res, next) {
  const options = "location";
  const conditions = { name: req.params.name };
  User.findOne(conditions, options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      reverseGeocode(
        result.location.coordinates[0],
        result.location.coordinates[1],
        "postcode",
        res
      );
    }
  });
});

//Find all users nearby
router.get("/nearby/:name", function (req, res, next) {
  const dist = 10000; // distance in meters
  const options = "location";
  let conditions = { name: req.params.name };
  User.findOne(conditions, options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      const nearby = {
        location: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [
                result.location.coordinates[0],
                result.location.coordinates[1],
              ],
            },
            $maxDistance: dist,
          },
        },
      };

      // I want to exclude the current user from the list of results
      const notme = { name: { $ne: req.params.name } };

      User.find({ $and: [notme, nearby] }, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.json(result);
        }
      });
    }
  });
});

*/

//get all users
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

//get user by id
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

//get user by category
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

//get user by city
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

//add new user GEOCODE
router.post("/", function (req, res) {
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
});

/*
//add new user
router.post("/", function (req, res) {
    let user = new User(req.body);
  user.save(function (err, user) {
    res.json(user);
    console.log(err);
  });
});

*/

//delete by id
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

//update user by id
router.patch("/:id", function (req, res) {
  let newObj = {};

  if (req.body.name !== undefined) {
    newObj["name"] = req.body.name;
  }
  if (req.body.language !== undefined) {
    newObj["language"] = req.body.language;
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
  if (req.body.myGameLanguage !== undefined) {
    newObj["myGameLanguage"] = req.body.myGameLanguage;
  }
  if (req.body.myGamePlayers !== undefined) {
    newObj["myGamePlayers"] = req.body.myGamePlayers;
  }
  if (req.body.myGameCategory !== undefined) {
    newObj["myGameCategory"] = req.body.myGameCategory;
  }
  if (req.body.email !== undefined) {
    newObj["email"] = req.body.email;
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
  if (req.body.host !== undefined) {
    newObj["host"] = req.body.host;
  }
  if (req.body.guest !== undefined) {
    newObj["guest"] = req.body.guest;
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

  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: newObj,
    },
    { new: true },
    function (err, user) {
      if (err) {
        console.log(err);
        //res.render("../views/users/edit", {employee: req.body});
      }
      res.redirect("/users");
    }
  );
});

module.exports = router;
