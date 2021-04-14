require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { conexionBD } = require('./database/dbConfig')



//Crear servidor express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Conexion base de datos
conexionBD();

//Ejemplo de llamar json
app.get('/', (req, res) => {
    res.json({
        ok:true,
        msg: 'Ejemplo'
    })
})

//Estableciendo puerto de escucha
app.listen(process.env.PORT, () =>{
    console.log("Servidor corriendo en el puerto " + process.env.PORT)
});






