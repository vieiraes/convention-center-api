var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 3000;


app.listen(port, function () {
    console.log(`Listening on port: ${port}`);
});


//STATUS
// app.get('/status', (req, res) => {
//     return res.status(200).json({
//         mesage: "OK!"
//     })
// })



module.exports = express
require("./routes/authController")(app);