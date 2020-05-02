var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var eventsRouter = require("./routes/events");


var session = require('express-session');
var passport = require('passport');
var authRouter = require('./routes/auth');



var app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/funshare", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", function () {
    console.log("Connection ok!");
  })
  .on("error", function (error) {
    console.log("connection error", error);
  });
mongoose.connect("mongodb://localhost/funshare", {useNewUrlParser: true, useUnifiedTopology: true, promiseLibrary: require('bluebird') });
mongoose.Promise = require('bluebird');
mongoose.connection.once("open", function(){
  console.log("Connection ok!");
}).on("error", function(error){
console.log("connection error", error);
});

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
//app.use("/map", mapRouter);
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

//PASSPORT
app.use(express.static("public"));
app.use(session({ secret: 'anything', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
