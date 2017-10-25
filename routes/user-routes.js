const express = require('express');
const userRouter = express.Router;
const tasks = require('/task-routes');
const userController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helpers');

///////////////////////////////////////
/////////////TACK TASKS ONTO USERS////
/////////////////////////////////////
userRouter.use('/tasks', tasks);

///////////////////////////////////////
/////////////GET REQUESTS/////////////
/////////////////////////////////////
userRoutes.get('/', authHelpers.loginRequired, userController.index);
userRouter.get('/new' (req,res) => {
  res.render('user/user-new');
 user
userRouter.get('/:id/edit', userController.edit);
userRouter.get(':id', userController.show);
///////////////////////////////////////
/////////////POST REQUESTS////////////
/////////////////////////////////////
userRouter.post("/", userController.create)
///////////////////////////////////////
/////////////PUT REQUESTS/////////////
/////////////////////////////////////
userRouter.put("/:id", userController.update)
///////////////////////////////////////
/////////////DELETE REQUESTS//////////
/////////////////////////////////////
userRouter.delete("/", userController.delete)


module.exports = userRouter;
