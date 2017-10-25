const express = require('express');
const userRouter = express.Router();
const tasks = require('./task-routes');
const userController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helpers');

///////////////////////////////////////
/////////////GET REQUESTS/////////////
/////////////////////////////////////
userRouter.get('/', authHelpers.loginRequired,userController.index);

userRouter.get('/:id/edit', authHelpers.loginRequired, userController.edit);
userRouter.get(':id', authHelpers.loginRequired, userController.show);

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
