const User = require('../models/user');
const Task = require('../models/task');
const userController = {};

// will eventually be the user
userController.index = (req,res) => {

  .then(user => {
    res.render(`/tasks`, {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
userController.show = (req,res) => {
  User.findAll()
  .then(users => {
    res.render('users/user-index', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
userController.index = (req,res) => {
  User.findAll()
  .then(users => {
    res.render('users/user-index', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
userController.index = (req,res) => {
  User.findAll()
  .then(users => {
    res.render('users/user-index', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
userController.index = (req,res) => {
  User.findAll()
  .then(users => {
    res.render('users/user-index', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
userController.index = (req,res) => {
  User.findAll()
  .then(users => {
    res.render('users/user-index', {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

module.exports = userController;
