const mongoose = require('mongoose')


const presenterModel = mongoose.model('Presenter', {
    presenterId: String,
    name: String,
    created_at: String
})


const PresenterSchema = new mongoose.Schema({

    presenterId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }

})

