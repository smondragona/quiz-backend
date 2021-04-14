const mongoose = require('mongoose');
require('dotenv').config();

const conexionBD = async() => {

try {
    
    await mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    console.log('BD Online')

} catch (error) {
    console.log(error);
    throw new Error('Error al iniciar la base de datos.... ver logs');
}

}


module.exports = {
    conexionBD
}