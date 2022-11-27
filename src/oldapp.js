var express = require("express")
var connectDb = require("./database/databaseConnection.cjs")
var cors = require("cors")
const envs = require("./config/config.env.js").default
const statusRoutes = require("./routes/status.js")
const startServer = require("./server/server.js")


startServer()

// const app = express();
// app.use(cors());

// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )
// app.use(express.json())


// //ABRE A PORTA DA API E CONECTA NO DB
// app.listen(envs.port, function () {
//     console.log(`Server initialized on port: ${envs.port}`);
//     connectDb()
// })



module.exports = app

//INICIO DAS ROTAS
// app.use("/status", statusRoutes)