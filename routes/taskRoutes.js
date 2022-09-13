//Setup require modules
const express = require('express')
const task = require('../controller/taskController');
const router = express.Router()
//Setup Routes
router.post('/add', task.add);
//Export the router
module.exports = router