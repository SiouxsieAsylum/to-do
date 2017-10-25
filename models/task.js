const db = require('../db/config');
const Task = {};

Task.create = (task) => {
  return db.one(`INSERT INTO tasks (title, category, description) VALUES ($1,$2)`[task.title, task.category, task.description]);
}

Task.findByCategory = (category) => {
  return db.one(`SELECT * FROM tasks WHERE category = $1 RETURNING *`,[category])
}

Task.findByStatus = (status) => {
  return db.one(`SELECT * FROM tasks WHERE status = $1 RETURNING *`,[status])
}

Task.findById = (id) => {
  return db.one(`SELECT * FROM tasks WHERE id = $1 RETURNING *`,[id])
}

Task.update = (task, id) => {
  return db.one(`UPDATE tasks SET title = $1, category = $2, description = $3 RETURNING *`[task.title, task.category, task.description]);
}

Task.delete = (id) => {
  return db.none(`DELETE FROM tasks WHERE id = $1`,[id])
}

module.exports = Task;
