///////////////////////////////////////
/////////////DEPENDANCIES/////////////
/////////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const methodOverride= require("method-override");
const userRoutes = require("user-routes");
const authRoutes = require("auth-routes");
const taskRoutes = require("task-routes");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const passport = require("passport");

///////////////////////////////////////
/////////////ENVIRONMENT//////////////
/////////////////////////////////////
const port = process.env.PORT || 3000;
const app = express();
require('dotenv').config();

///////////////////////////////////////
/////////////MIDDLEWARE///////////////
/////////////////////////////////////
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'))
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

///////////////////////////////////////
/////////////ROUTES///////////////////
/////////////////////////////////////
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/task', taskRoutes);

///////////////////////////////////////
/////////////SET VIEWS////////////////
/////////////////////////////////////
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

///////////////////////////////////////
/////////////CLIENT FACING////////////
/////////////////////////////////////
app.get('/', (req,res)=> {
  res.render('index');
})

app.listen(port, () => {
  console.log('time to get stuff done');
})

app.use("*", (req,res) => {
  res.status(404).send('file not found!!')
})


//
// const = require("");
// const = require("");
// const = require("");
// const = require("");
// const = require("");
