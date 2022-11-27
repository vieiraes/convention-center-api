import mongoose from "mongoose"

export const objeto = {
    stationName: String,
    stationAddress: String,
    isActive: Boolean,
    lecturesRegistered: []
}


const stationsSchema = new mongoose.Schema(objeto)

export const stationsModel = new mongoose.model('Stations', stationsSchema)
