const Producto = require("../models/producto");

exports.leerProductoHome = async ( req, res ) => {
    try{
        const producto1 = await Producto.find();
        res.json({ producto1 });
    }catch(error){
        console.log(error);
    }


}


exports.leerProducto = async (req, res) => {
    const {id} = req.params;// recibir id por parametros
    const producto1 = await Producto.find().where("categoriaId").equals(id);
    res.json(producto1);
}
exports.crearProducto = async ( req, res ) => {
   
    try{
        const producto1 = new Producto(req.body);
        producto1.save();
        res.json(producto1);
    }catch(error){
        console.log(error);
    }


}
exports.leerProductoId = async(req, res) =>{
    const {id} = req.params
    try{
        const producto = await Producto.findById(id);
        res.json({producto});
    }catch(error){
        console.log(error);
    }

}
exports.actualizarProducto = async ( req, res ) => {
     const {id} = req.params;
    
    const producto1 = await Producto.findById().where("_id").equals(id);
    
    if(!producto1){
        return res.status(400).json({mensaje: "Producto no encontrado"});
    }
    

    producto1.nombre = req.body.nombre || producto1.nombre;
    producto1.descripcion = req.body.descripcion || producto1.descripcion;
    producto1.stock = req.body.stock || producto1.stock;
    producto1.precio = req.body.precio || producto1.precio;
    producto1.imagen = req.body.imagen || producto1.imagen;
    producto1.save();
    res.json({producto1});
}

exports.borrarProducto = async ( req, res ) => {
    try{
        await Producto.deleteOne({_id: req.params.id});
        res.json({mensaje:"Producto eliminado"});
    }catch(error){
        console.log(error);
    }
}