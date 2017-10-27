const express = require('express');
const userRouter = express.Router();
const tasks = require('./task-routes');
const userController = require('../controllers/user-controller');
// const taskController = require('../controllers/task-controller');
const authHelpers = require('../services/auth/auth-helpers');

///////////////////////////////////////
/////////////GET REQUESTS/////////////
/////////////////////////////////////
userRouter.get('/', authHelpers.loginRequired,userController.index);
userRouter.get('/:id', authHelpers.loginRequired, (req,res) =>{
  req.params.id == req.user.id ? res.redirect('/user'): res.render('auth/oops.ejs')
});


// userRouter.get('/:id/edit', authHelpers.loginRequired, taskController.findCategories, userController.edit);
userRouter.get('/:id/edit', userController.edit);

///////////////////////////////////////
/////////////PUT REQUESTS/////////////
/////////////////////////////////////
userRouter.put("/:id", authHelpers.loginRequired, userController.update)
///////////////////////////////////////
/////////////DELETE REQUESTS//////////
/////////////////////////////////////
userRouter.delete("/", authHelpers.loginRequired, userController.delete)

///////////////////////////////////////
/////////////TACK TASKS ONTO USERS////
/////////////////////////////////////
userRouter.use('/tasks', tasks);

module.exports = userRouter;
