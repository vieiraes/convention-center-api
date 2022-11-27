//const express = require('../app.js')
//const mongoose = require('mongoose')
const Status = require('../models/Status.js')
//const app = require('../app.js')

router.post('/', async (req, res) => {

    const { type, active } = req.body

    if (!type) {
        res.status(422).json({ message: "Falta o type" })
    }

    const objeto = {
        type: type,
        active: active,
        created_at: new Date()
    }


    try {

        const objectModel = await Status.create(objeto)
        res.status(201).send({
            message: "Objeto criado com sucesso",
            object: objectModel
        })

    } catch (error) {
        res.status(500).send({
            message: { error: error }
        })

    }
})