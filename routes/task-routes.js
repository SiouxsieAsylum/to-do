const express = require('express');
const taskRouter = express.Router;
const taskControllers = require('../controllers/task-controller');

///////////////////////////////////////
/////////////GET REQUESTS/////////////
/////////////////////////////////////
taskRouter.get('/', (req,res) => {
  res.redirect('/user');
});
taskRouter.get('/new' (req,res) => {
  res.render('tasks/tasks-new');
})
taskRouter.get('/:id/edit', taskControllers.edit);
taskRouter.get(':id', taskControllers.show);
///////////////////////////////////////
/////////////POST REQUESTS////////////
/////////////////////////////////////
taskRouter.post("/", taskControllers.create)
///////////////////////////////////////
/////////////PUT REQUESTS/////////////
/////////////////////////////////////
taskRouter.put("/:id", taskControllers.update)
///////////////////////////////////////
/////////////DELETE REQUESTS//////////
/////////////////////////////////////
taskRouter.delete("/", taskControllers.delete)

module.exports = taskRouter;
