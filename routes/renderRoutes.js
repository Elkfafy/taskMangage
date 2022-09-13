//Setup require modules
const express = require('express')
const render = require('../controller/renderController');
const router = express.Router()
//Setup Routes
router.get('/add', render.add);
router.get('/', render.home);
//Export the router
module.exports = router