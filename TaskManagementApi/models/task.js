const db = require('../config/db');

const Task = {
  create: (title, description, userId, callback) => {
    const sql = 'INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)';
    db.query(sql, [title, description, userId], callback);
  },
  findAll: (userId, callback) => {
    const sql = 'SELECT * FROM tasks WHERE user_id = ?';
    db.query(sql, [userId], callback);
  },
  update: (id, title, description, callback) => {
    const sql = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';
    db.query(sql, [title, description, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = Task;
