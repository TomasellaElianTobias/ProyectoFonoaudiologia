const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tomasellatobias:oAimcuCOIoV7ekGc@cluster0.ddeqi4g.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('conectado a la db'))
