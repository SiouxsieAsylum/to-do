const express = require('express');
const userRouter = express.Router;
const userController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRoutes.get('/', authHelpers.loginRequired, userController.index);



module.exports = userRouter;
