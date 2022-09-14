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
    static single(req, res) {
        const tasks = file.read('tasks.json');
        const task = tasks.find(task => task.id == req.params.id)
        res.render('single', {
            pageTitle: "Single Task", 
            task
        })
    }
    static edit(req, res) {
        const tasks = file.read('tasks.json')
        const task = tasks.find(task => task.id == req.params.id)
        res.render('edit', {
            pageTitle: task.name,
            task
        })
    }
}

module.exports = Render;