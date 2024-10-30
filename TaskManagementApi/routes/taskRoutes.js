const express = require('express');
const { createTask, getTasks, updateTasks, deleteTasks } = require('../controllers/taskController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createTask);
router.get('/', authenticate, getTasks);
router.post('/update', authenticate, updateTasks);
router.post('/delete',authenticate,deleteTasks);

module.exports = router;
