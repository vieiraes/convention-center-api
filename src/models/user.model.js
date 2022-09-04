const mongoose = require('../database/index.js')


const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true

    },
    email: {
        type: String,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false //para ocultar a infomacao no array quando buscarem no BD
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


const User = mongoose.model('User', UserSchema)

module.exports = User