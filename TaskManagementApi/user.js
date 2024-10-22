const db = require('../config/db');

const User = {
  create: (username, password, callback) => {
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, password], callback);
  },
  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], callback);
  },
};

module.exports = User;
