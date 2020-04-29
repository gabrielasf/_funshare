var express = require("express");
var router = express.Router();
var Event = require("../dbmodels/event");

const bodyParser = require("body-parser");
router.use(bodyParser.json()); //to support JSON-encoded body
router.use(
  bodyParser.urlencoded({
    //to support URL-encoded body
    extended: true,
  })
);

//get all events
router.get("/", function (req, res, next) {
  Event.find({}, function (err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//get event by id
router.get("/:id", function (req, res, next) {
  Event.findOne({ _id: req.params.id }, function (err, result) {
    console.log(result);
    console.log("we connected");
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//add new event
router.post("/", function (req, res) {
  let event = new Event(req.body);
  event.save(function (err, event) {
    res.json(event);
    console.log(err);
  });
});

//delete event by id
router.delete("/:id", function (req, res) {
  Event.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Event deleted!");
    }
  });
});

module.exports = router;
