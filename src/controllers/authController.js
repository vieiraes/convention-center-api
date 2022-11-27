import express from 'express'
import { UserModel } from '../models/user.model.js'
import { connectDb } from '../database/databaseConnection.js'


const router = express.Router()


router.post('/register', async (req, res) => {

    try {
        connectDb()

        const {name, taxId} = req.body

        let objeto = {
            name: name,
            taxId: taxId

        }

        const user = await UserModel.create(objeto)

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


