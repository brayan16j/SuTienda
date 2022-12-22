const Categoria = require("../models/categoria");

// req es lo que podemos leer desde postman
// res es lo que enviamos hacia postman o-- nuestro front
exports.leerCategoriaHome = async(req, res) =>{
    try{
        const categoria = await Categoria.find();
        res.json({categoria});
    }catch(error){
        console.log(error);
    }

}

exports.leerCategoria = async(req, res) =>{
    try{
        const categoria = await Categoria.find({creador: req.usuario.id});
        res.json({categoria});
    }catch(error){
        console.log(error);
    }

}
exports.leerCategoriaId = async(req, res) =>{
    const {id} = req.params
    try{
        const categoria = await Categoria.findById(id);
        res.json({categoria});
    }catch(error){
        console.log(error);
    }

}

exports.crearCategoria = async(req, res) =>{
    const {nombre} = req.body;

    try {
        const categoria = new Categoria(req.body); 

        categoria.creador = req.usuario.id;
        let nameCategoria = await Categoria.findOne({nombre});
        if(nameCategoria){
            return res.status(226).json({mensaje: "Categoria " + nombre + " Ya existe "});
        }
        categoria.save();

        res.json(categoria);
    } catch (error) {
        console.log(error);
    }
};

exports.actualizarCategoria = async(req, res) =>{
    const {id} = req.params;
    
    const categoria = await Categoria.findById(id);
    if(!categoria){
        return res.status(400).json({mensaje: "Categoria no encontrada "});
    }
    
    if(categoria.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({mensaje: "Accion no valida para este usuario "});
    }

    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.imagen = req.body.imagen || categoria.imagen;
    categoria.save();
    res.json({categoria});


}

exports.borrarCategoria = async(req, res) =>{
    try{
        await Categoria.deleteOne({_id: req.params.id});
        res.json({mensaje:"Categoria eliminada"});
    }catch(error){
        console.log(error);
    }

}