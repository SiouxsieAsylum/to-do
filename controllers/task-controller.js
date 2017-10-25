const Task = require('../models/task');
const taskController = {};

///////////////////////////////////////
/////////////DISPLAY FULL TASK////////
/////////////////////////////////////
taskController.show = (req,res) => {
  Task.findById(req.params.id)
  .then(task => {
    res.render('tasks/task-show', {task});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

// figure out how to get these to work

///////////////////////////////////////
/////////////FIND TASKS BY CATEGORY///
/////////////////////////////////////
taskController.filterCategory = (req,res) => {
  Task.findByCategory(req.params.category)
  .then(tasks => {
    res.render('/user', {task});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

// figure out how to get these to work

///////////////////////////////////////
/////////////FIND TASKS BY STATUS/////
/////////////////////////////////////
taskController.filterStatus = (req,res) => {
  Task.findByStatus(req.params.status)
  .then(tasks => {
    res.render('/user', {task});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

///////////////////////////////////////
/////////////RENDER EDIT TASKS PAGE///
/////////////////////////////////////
taskController.edit = (req,res) => {
  Task.findById(req.param.id)
  .then(task => {
    res.render('tasks/task-edit', {task});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

///////////////////////////////////////
/////////////CREATE TASKS/////////////
/////////////////////////////////////
taskController.create = (req,res) => {
  Task.create({
    title: req.body.title,
    category: req.body.category,
    user_id: req.body.user_id;
  })
  .then(task => {
    res.redirect(`tasks/${task.id}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

///////////////////////////////////////
/////////////UPDATE TASKS/////////////
/////////////////////////////////////
taskController.update = (req,res) => {
  Task.update({
    title: req.body.title,
    category: req.body.category,
    user_id: req.body.user_id;
  }, req.params.id)
  .then((tasks) => {
    res.redirect(`tasks/${task.id}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

///////////////////////////////////////
/////////////DELETE TASKS/////////////
/////////////////////////////////////
taskController.delete = (req,res) => {
  Task.delete(req.params.id)
  .then(() => {
    res.redirect('/tasks');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

module.exports = taskController;
