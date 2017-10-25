const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const methodOverride= require("method-override")
const port = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
