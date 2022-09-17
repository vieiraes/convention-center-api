const mongoose = require('mongoose')



const userSschema = new mongoose.Schema({

    name: String,
    age: Number


})


module.exports = mongoose.model('User', userSschema)