import express from 'express'
import { Person } from './PersonModel.js'


const router = express.Router()


router.post('/', async (req, res) => {
    const { age, name, string } = req.body

    if (!age || !name || !string) {
        res.status(422).json({ message: 'Falta o age, name ou string' })

    } else {
        try {


            const objeto = {
                age: age,
                name: name,
                string: string
            }
            const mountedObject = await Person.create(objeto)

            res.status(201).send({
                message: 'Objeto criado com sucesso',
                object: mountedObject
            })

        } catch (error) {
            res.status(500).json({
                message: { error: error }
            })
        }
    }
})

export { router as PersonRouter }