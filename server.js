///////////////////////////////////////
/////////////DEPENDANCIES/////////////
/////////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const taskRoutes = require("./routes/task-routes");
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

app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
///////////////////////////////////////
/////////////ROUTES///////////////////
/////////////////////////////////////
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/tasks',taskRoutes);

///////////////////////////////////////
/////////////USER INFO ///////////////
/////////////////////////////////////
// adapted from https://stackoverflow.com/questions/37973266/node-101-changing-the-nav-bar-when-a-user-is-logged-in
app.use(function(req,res,next){
  if (req.user){
    req.locals.user = req.user;
  }
  next();
})

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


