//impoere o express instanciado no app.js
const express = require("../app.js")

//importar models
const User = require('../models/user.model.js')


const router = express.Router()



module.exports = (app) => {
    return app.use("/auth", router)
}


router.post('/register', async (req, res) => {

    try {
        const user = await User.create(req.body)

        return res.status(201).send({
            user: user
        })
    } catch (err) {

        return res.status(412).send({
            message: `Registration failed`,
            error: { err }
        })


    }
})


