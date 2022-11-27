import express from 'express'
import { statusModel } from '../models/statusModel.js'

const router = express.Router()

//CREATE
router.post('/', async (req, res) => {

    const { type, active } = req.body

    if (!type) {
        res.status(422).json({ message: "Falta type" })
    } else {

        try {

            const objeto = {
                type: type,
                active: active
            }

            const mountedObject = statusModel.create(objeto)
            res.status(201).send({
                message: "Objeto criado com sucesso",
                object: mountedObject
            })

        } catch (error) {
            res.status(500).json({
                message: { error: error }
            })
        }
    }
})



//GET
router.get('/', async (req, res) => {


    try {



        res.status(200).json({
            message: "ok",
        })

    } catch (error) {
        res.status(500).send({
            message: { error: error }
        })
    }

})

export { router as statusRouter }