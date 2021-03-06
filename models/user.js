const db = require('../db/config');
const User = {};

User.findAllUserTasks = (id) => {
  return db.manyOrNone(`SELECT * FROM tasks WHERE tasks.user_id = $1`, [id]);
}

User.create = (user) => {
  // you can encrypt your user's passwords in here so you can seed with js and all your users will work :D
  return db.one(`INSERT INTO users(username, password, firstname) VALUES ($1,$2,$3) RETURNING *`,[user.username, user.password, user.firstname]);
}

User.findByUserName = (username) => {
  return db.one(`SELECT * FROM users WHERE username = $1`,[username])
}


User.update = (user, id) => {
  return db.one(`UPDATE users SET username = $1, password = $2, firstname = $3 RETURNING *`,[user.username, user.password, user.firstname]);
}

User.delete = (id) => {
  return db.none(`DELETE FROM users WHERE id = $1`,[id])
}

module.exports = User;
