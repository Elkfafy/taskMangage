//Setup require modules
const express = require('express')
const task = require('../controller/taskController');
const router = express.Router()
//Setup Routes
router.post('/add', task.add);
router.post('/edit/:id', task.edit);
router.get('/toggle/:id', task.toggle);
router.get('/delete/:id', task.delete);
//Export the router
module.exports = router