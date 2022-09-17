var express = require('express');
var connectDb = require('./database/databaseConnection.js')
var cors = require('cors');
const envs = require('./config/config.env.js')
const controller = require('./controllers/user.controller.js')

//const kill = require('kill-port');

//INICIA APLICACAO
const app = express();
app.use(cors());

//forma de ler JSON (atualizado 2022)
app.use(
    express.urlencoded({
        extended:true
    }),
)
app.use(express.json())


//ABRE A PORTA DA API
app.listen(envs.port, function () {
    console.log(`Server initialized on port: ${envs.port}`);
    connectDb()
})


//INICIO DAS ROTAS
app.get('/blogs', async (req, res, next) => {

    const Blogs = await Blog.find()

    res.status(200).send({
        blogs: Blogs
    })
    return next()

})





app.get('/auths', (req, res) => {
    res.status(200).send({
        message: "All authentications"
    })

})


app.post('/auths', (req, res) => {

    const { name, id, password } = req.body
    const objeto = {
        name: name,
        id: id,
        password: password
    }

    res.status(201).send({
        message: "Created sucess",
        body: objeto
    })

})



app.get('/status', (req, res) => {
    return res.status(200).json({
        message: "OK!"
    })
})

module.exports = express