const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre:{type: String, required: true, trim: true}, //trim limpia espacios iniciales o finales
    descripcion:{type: String, required: true, trim: true},
    stock:{type: Number, required: true, trim: true},
    precio:{type: Number, required: true, trim: true},
    imagen:{type: String, required: true, trim: true},
    creado:{type: Date, default: Date.now()},
    categoriaId:{type: mongoose.Schema.Types.ObjectId, ref:"Categoria"}
});

//definir el modelo 
module.exports = mongoose.model("Producto", ProductoSchema);