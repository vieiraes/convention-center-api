import mongoose from 'mongoose'

const object = {
    type: String,
    active: Boolean
}

const statusSchema = new mongoose.Schema(object, 
    { timestamps: true },
    
    )



export const statusModel = mongoose.model('Status', statusSchema)

