const db = require('../db/config');
const Task = {};

Task.create = (task,userId) => {
  return db.one(`INSERT INTO tasks (title, category, description,user_id) VALUES ($1,$2,$3,$4) RETURNING *`,[task.title, task.category, task.description, userId]);
}

Task.findByCategory = (category) => {
  return db.one(`SELECT * FROM tasks WHERE category = $1`,[category])
}

Task.findByStatus = (status) => {
  return db.one(`SELECT * FROM tasks WHERE status = $1`,[status])
}

Task.findById = (id) => {
  return db.one(`SELECT * FROM tasks WHERE id = $1`,[id])
}

Task.update = (task,id) => {
  return db.one(`UPDATE tasks SET title = $1, category = $2, description = $3 WHERE id = $4 RETURNING *`,[task.title, task.category, task.description, id]);
}

Task.delete = (id) => {
  return db.none(`DELETE FROM tasks WHERE id = $1`,[id])
}

module.exports = Task;
