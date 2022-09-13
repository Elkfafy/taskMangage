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
}
module.exports = Task;