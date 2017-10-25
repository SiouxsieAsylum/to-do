const db = require('../db/config');
const User = {};

User.create = (user) => {
  return db.one(`INSERT INTO users (username, password) VALUES ($1,$2)`[user.username, user.password]);
}

User.findByUserName = (username) => {
  return db.one(`SELECT * FROM users WHERE username = $1`,[username])
}

module.exports = User;
