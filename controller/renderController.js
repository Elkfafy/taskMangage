//Setup Require modules
const file = require('./fileController')
//Setup Render Class
class Render {
    static add(req, res) {
        res.render('add', {
            pageTitle: "Add Task",
        })
    }
    static home(req, res) {
        const tasks = file.read('tasks.json')
        res.render('home', {
            pageTitle: "Home Page", 
            tasks
        })
    }
}

module.exports = Render;