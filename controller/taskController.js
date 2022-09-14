//Setup require modules
const { builtinModules } = require('module');
const file = require('./fileController');
//Setup Task Class
class Task {
    static add(req, res) {
        const task = {
            id: Date.now(),
            ...req.body
        }
        const tasks = file.read('tasks.json')
        tasks.push(task);
        file.write('tasks.json', tasks)
        res.redirect('/')
    }
    static edit(req, res) {
        console.log('hi from edit')
        const tasks = file.read('tasks.json')
        const index = tasks.findIndex(task => task.id == req.params.id)
        console.log(index);
        tasks[index] = {id: req.params.id, status: tasks[index].status, ...req.body}
        file.write('tasks.json', tasks)
        res.redirect(`/single/${req.params.id}`)
    }
    static toggle(req, res) {
        const tasks = file.read('tasks.json')
        const task = tasks.findIndex(task => task.id == req.params.id)
        const newStatus = !tasks[task].status
        tasks[task] = {...tasks[task], status: newStatus}
        file.write('tasks.json', tasks)
        res.redirect(`/`)
    }
    static delete(req, res) {
        const tasks = file.read('tasks.json')
        const task = tasks.findIndex(task => task.id == req.params.id)
        tasks.splice(task, 1);
        file.write('tasks.json', tasks)
        res.redirect(`/`)
    }
}
module.exports = Task;