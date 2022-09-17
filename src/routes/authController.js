//importa o express já instanciado no app.js
const express = require("../app.js")
const router = express.Router()

//importar models
const UserModel = require('../models/user.model.js')


module.exports = (app) => {
    return app.use("/auth", router)
}

router.post('/blog', (req, res) => {
    const blog = blogSchema.create(req.body)
})


router.post('/register', async (req, res) => {

    try {
        const user = await UserModel.create(req.body)

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


