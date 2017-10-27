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
  res.render('tasks/task-new', {
      auth: (req.user) ? true : false
    });
});

taskRouter.get('/:id', authHelpers.loginRequired, taskControllers.show);

taskRouter.get('/:category', authHelpers.loginRequired,taskControllers.filterCategory);

// didn't have time to create functionality
// taskRouter.get('/:status', authHelpers.loginRequired, taskControllers.filterStatus);


taskRouter.get('/:id/edit', authHelpers.loginRequired, taskControllers.edit);


///////////////////////////////////////
/////////////POST REQUESTS////////////
/////////////////////////////////////

taskRouter.post('/', authHelpers.loginRequired, taskControllers.create);
// taskRouter.use(logger(post));
///////////////////////////////////////
/////////////PUT REQUESTS/////////////
/////////////////////////////////////
taskRouter.put("/:id", authHelpers.loginRequired, taskControllers.update);
taskRouter.put("/:id/status", authHelpers.loginRequired, taskControllers.setStatus);

///////////////////////////////////////
/////////////DELETE REQUESTS//////////
/////////////////////////////////////
taskRouter.delete("/:id", authHelpers.loginRequired, taskControllers.delete);

module.exports = taskRouter;
