const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {readdirSync} = require("fs");
require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./modules/user');

//app
const app = express();
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());


//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
})
.then(()=> console.log("DB CONNECTED"))
.catch(err => console.log('DB CONNECTION ERR! ', err));

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//midleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());


//routes midleware
readdirSync('./routes').map((r) => app.use("/api" ,require('./routes/'+ r)));

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));