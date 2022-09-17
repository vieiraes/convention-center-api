const mongoose = require('mongoose')


//Cria model
const blogSchema = mongoose.model('Blog', {
  id: String, // String is shorthand fefor {type: String}
  name: String,
  password: String,
});




//adiciona um registro

const novoRegistroBlog = new blogSchema({
  id: "Feeling",
  name: "Name",
  password: "1234",
});


//salva o registro
novoRegistroBlog.save().then(() => {
  console.log('Registered')
})

// module.exports = mongoose.model('Blog', blogSchema)

