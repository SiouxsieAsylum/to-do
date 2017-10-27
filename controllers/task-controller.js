const Task = require('../models/task');
const taskController = {};

///////////////////////////////////////
/////////////DISPLAY FULL TASK////////
/////////////////////////////////////
taskController.show = (req,res) => {
  Task.findById(req.params.id)
  .then(task => {
    res.render('tasks/task-show', { task,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops', {err,
      auth: (req.user) ? true : false
    });
  })
}
///////////////////////////////////////
///ATTEMPT TO FIND ALL CATEGORIES/////
/////////////////////////////////////

// taskController.findCategories = (req,res) => {
//   Task.findCategories(req.params.categories)
//   .then(categories => {
//     res.render('partials/nav.ejs', {categories});
//     // next();
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   })
// }

///////////////////////////////////////
/////////////FIND TASKS BY CATEGORY///
/////////////////////////////////////
taskController.filterCategory = (req,res) => {
  console.log(req.params.category);
  Task.findByCategory(req.params.category)
  .then(tasks => {
     // console.log(err);
      res.render('auth/oops', {tasks,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

///////////////////////////////////////
/////////////FIND TASKS BY STATUS/////
/////////////////////////////////////
// taskController.filterStatus = (req,res) => {
//   Task.findByStatus(req.params.status)
//   .then(tasks => {
//     res.render('user/user-index', {tasks});
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   })
// }

///////////////////////////////////////
/////////////CHANGE TASK STATUS///////
/////////////////////////////////////
taskController.setStatus = (req,res) => {
  //status = true ? status = false : status = true;
  Task.setStatus({
    status: req.body.status
  }, req.params.id)
  .then(task => {
    res.redirect(`/user`)
  })
   .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops', {err,
      auth: (req.user) ? true : false
    });
  })
}

///////////////////////////////////////
/////////////RENDER EDIT TASKS PAGE///
/////////////////////////////////////
taskController.edit = (req,res) => {
  Task.findById(req.params.id)
  .then(task => {
    res.render('tasks/task-edit', { task,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops', {err,
      auth: (req.user) ? true : false
    });
  })
}

///////////////////////////////////////
/////////////CREATE TASKS/////////////
/////////////////////////////////////
taskController.create = (req,res) => {
  Task.create({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description
  }, req.user.id)
  .then(task => {
    res.render(`tasks/task-show`, { task,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops', {err,
      auth: (req.user) ? true : false
    });
  })
}

///////////////////////////////////////
/////////////UPDATE TASKS/////////////
/////////////////////////////////////
taskController.update = (req,res) => {
  Task.update({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description
  }, req.params.id)
  .then((task) => {
    console.log(task);
    res.render(`tasks/task-show`, { task,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops', {err,
      auth: (req.user) ? true : false
    });
  })
}

///////////////////////////////////////
/////////////DELETE TASKS/////////////
/////////////////////////////////////
taskController.delete = (req,res) => {
  Task.delete(req.params.id)
  .then(() => {
    res.redirect('/user');
  })
  .catch(err => {
   console.log(err);
    res.status(500).render('auth/oops', {err,
      auth: (req.user) ? true : false
    });
  })
}

module.exports = taskController;
