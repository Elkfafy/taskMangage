//Setup require modules
const express = require('express');
const hbs = require('hbs')
const path = require('path')
const taskRoutes = require('./routes/taskRoutes');
const renderRoutes = require('./routes/renderRoutes');
//Setup Variables
const app = express();
const port = process.env.PORT || 5000;
//Setup paths
const publicPath = path.join(__dirname, "frontend/public")
const layoutsPath = path.join(__dirname, "frontend/layouts")
const viewsPath = path.join(__dirname, "frontend/views")
//Setup engine
app.use(express.urlencoded({extended: true}))
app.use(express.static(publicPath))
app.use(taskRoutes)
app.use(renderRoutes)
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(layoutsPath)
//Setup routes
app.all('*', (req, res) => {
    res.render('err404')
})
//Setup app listening
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})
