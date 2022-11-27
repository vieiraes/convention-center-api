import express from "express";
import { stationsModel } from "../models/stationsModel.js";

const router = express.Router()


router.post('/', (req, res) => {
    const { stationName, stationAddress } = req.body


    if (!stationName || !stationAddress) {
        res.status(422).json({ message: "Falta o stationName ou stationAddress" })
    } else {
        try {

            const objeto = {
                stationName: stationName,
                stationAddress: stationAddress

            }

            const mountedObject = stationsModel.create(objeto)
            res.status(201).json({
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

// router.get('/', (req, res) => { })

export { router as stationsRouter }