const express = require("express");
const conectarDB = require("./config/db");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters");
const categoriaRouters = require("./routers/categoriaRouters");
const productoRouters = require("./routers/productoRouters");
const cors = require("cors");

//conectar a la base de datos 
conectarDB();

const app = express();

// habilitar los cors
app.use(cors());

//habilitar express.json = crear estructuras .json
app.use(express.json({extend: true}));
//rutas o router 
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters );
app.use("/api/categoria", categoriaRouters );
app.use("/api/producto", productoRouters );



app.listen(4000, () =>{
    console.log("Servidor Corriendo en el puerto 4000 Proyecto");
});