import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


//defining a model
const BlogPost = new Schema({
  id: String, 
  name: String,
  password: String,
});




const blogSchema = mongoose.model('Blog', {
  id: String, 
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

