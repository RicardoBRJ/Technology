const  mongoose  = require("mongoose");

const UsuariosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required:true
    },
    fecha:{
        type:Date,
        required:true
      },
    email:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Usuarios',UsuariosSchema);
