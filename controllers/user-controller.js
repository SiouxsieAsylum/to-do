const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Task = require('../models/task');
const userController = {};

///////////////////////////////////////
/////////////DISPLAY USER TASKS///////
/////////////////////////////////////
userController.index = (req,res) => {
  User.findAllUserTasks(req.params.id)
  .then(tasks => {
    res.render(`/user/user-index`, {tasks})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

///////////////////////////////////////
/////////////USER PROFILE/////////////
/////////////////////////////////////
userController.show = (req,res) => {
  User.findById()
  .then(user => {
    res.render('users/user-show', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

///////////////////////////////////////
/////////////EDIT PROFILE VIEW////////
/////////////////////////////////////
userController.edit = (req,res) => {
  User.findByUserName(req.params.username)
  .then(user => {
    res.render('users/user-edit', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

///////////////////////////////////////
/////////////UPDATE USER PROFILE//////
/////////////////////////////////////
userController.update = (req,res) => {
  const salt = bcrypt.generateSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.update({
    username: req.params.username,
    password: hash,
    firstname:req.body.firstname
  }, req.params.id)
  .then(user => {
    req.login(user,(err) =>{
      if (err) return next(err);
      res.redirect('/user/user-show')
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

///////////////////////////////////////
/////////////REGISTER NEW USER////////
/////////////////////////////////////
userController.create = (req,res) => {
  const salt = bcrypt.generateSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.params.username,
    password: hash,
    firstname:req.body.firstname
  })
  .then(user => {
    req.login(user,(err) =>{
      if (err) return next(err);
      res.redirect('/user')
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

///////////////////////////////////////
/////////////DELETE NEW USER//////////
/////////////////////////////////////
userController.destroy = (req,res) => {
  User.delete()
  .then(user => {
    req.logout();
    res.redirect('index');
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

module.exports = userController;
