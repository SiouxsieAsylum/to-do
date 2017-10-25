const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Task = require('../models/task');
const userController = {};

// will eventually be the user
userController.index = (req,res) => {
  User.findAll()
  .then(user => {
    res.render(`/tasks`, {user})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
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
