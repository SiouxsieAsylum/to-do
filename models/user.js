const db = require('../db/config');
const User = {};

User.findAllUserTasks = () => {
  return db.oneOrMany(`SELECT * FROM tasks WHERE tasks.user_id = $1`, [id]);
}

User.create = (user) => {
  return db.one(`INSERT INTO users (username, password, firstname) VALUES ($1,$2)`[user.username, user.password, user.firstname]);
}

User.findByUserName = (username) => {
  return db.one(`SELECT * FROM users WHERE username = $1 RETURNING *`,[username])
}

User.findById = (id) => {
  return db.one(`SELECT * FROM users WHERE id = $1 RETURNING *`,[id])
}

User.update = (user, id) => {
  return db.one(`UPDATE users SET username = $1, password = $2, firstname = $3 RETURNING *`[user.username, user.password, user.firstname]);
}

User.delete = (id) => {
  return db.none(`DELETE FROM users WHERE id = $1`,[id])
}

module.exports = User;
