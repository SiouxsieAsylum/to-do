const express = require('express');
const taskRouter = express.Router();
const taskControllers = require('../controllers/task-controller');
const logger = require('morgan');
const authHelpers = require('../services/auth/auth-helpers');

///////////////////////////////////////
/////////////GET REQUESTS/////////////
/////////////////////////////////////
taskRouter.get('/', authHelpers.loginRequired, (req,res) => {
  res.redirect('/user');
});

taskRouter.get('/new', (req,res) => {
  res.render('tasks/task-new');
})

taskRouter.get('/:id/edit', authHelpers.loginRequired, taskControllers.edit);

taskRouter.get('/:id', authHelpers.loginRequired, taskControllers.show);
///////////////////////////////////////
/////////////POST REQUESTS////////////
/////////////////////////////////////

taskRouter.post('/', authHelpers.loginRequired, taskControllers.create);
// taskRouter.use(logger(post));
///////////////////////////////////////
/////////////PUT REQUESTS/////////////
/////////////////////////////////////
taskRouter.put("/:id", authHelpers.loginRequired, taskControllers.update);
///////////////////////////////////////
/////////////DELETE REQUESTS//////////
/////////////////////////////////////
taskRouter.delete("/", authHelpers.loginRequired, taskControllers.delete);

module.exports = taskRouter;
