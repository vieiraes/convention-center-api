const mongoose = require('mongoose')
const connectDb = require('../database/databaseConnection.js')
const User = require('../schema/user.schema.js')




async function run() {

    const user = new User({ name: "Bruno", age: 42 })
    await user.save()
    console.log(user)
}
run()
