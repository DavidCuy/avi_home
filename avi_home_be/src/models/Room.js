const mongoose = require('mongoose'); //Paquete para MongoDB connector
const Schema = mongoose.Schema; //Instanciamos un esquem
/**
 * Creamos el esquema
 */
const Room = new Schema({
    name: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        require: true
    },
    home: {
        type: Schema.Types.ObjectId,
        ref: 'Home'
    }
});


const room = mongoose.model('Room', Room);
module.exports = room;