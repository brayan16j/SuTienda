const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
    nombre:{type: String, required: true, trim: true}, //trim limpia espacios iniciales o finales
    email:{type: String, required: true, trim: true, unique: true},
    password:{type: String, required: true, trim: true},
    registro:{type: Date, default: Date.now()},
});

//definir el modelo 
module.exports = mongoose.model("Usuario", UsuariosSchema);