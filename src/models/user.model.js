const mongoose = require('../database')
const bcrypt = require("bcryptjs")

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


const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

/**
 * midleware
 * 
 */

// UserSchema.pre("save", function (next) {
//     const crypt = bcrypt.hash(this.password, 10)
//     this.password = crypt

//     return next()
// })

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel