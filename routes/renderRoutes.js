//Setup require modules
const express = require('express')
const render = require('../controller/renderController');
const router = express.Router()
//Setup Routes
router.get('/add', render.add);
router.get('/', render.home);
router.get('/single/:id', render.single);
router.get('/edit/:id', render.edit);
//Export the router
module.exports = router