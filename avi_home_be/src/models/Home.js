const mongoose = require('mongoose'); //Paquete para MongoDB connector
const Schema = mongoose.Schema; //Instanciamos un esquem
/**
 * Creamos el esquema
 */
const Home = new Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UsersAvi'
    }
});


const home = mongoose.model('Home', Home);
module.exports = home;