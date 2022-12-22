const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");


exports.crearUsuario = async (req, res)=>{
    //console.log(req.body);
    //res.json({ msg: "desde controller post el primer request"})
    const { password, email } = req.body;

    try{
        // revisar que sea un unico correo 
        let usuario = await Usuario.findOne({ email });

        if (usuario){
            return res.status(400).json({ mensaje: " El usuario ya existe "});
            
        }
        
        //Crear un nuevo usuario
        usuario = new Usuario(req.body);

        // hash
        usuario.password = await bcryptjs.hash(password, 10);

        // Guardar usuario en la BD 
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    }catch(error){
        console.log(error);
    }
};

