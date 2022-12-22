const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env"});

const conectarDB = async () =>{
    try {
        const connection = await mongoose.connect(
            process.env.DB,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB conectado en : ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDB;