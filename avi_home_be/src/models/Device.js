const mongoose = require('mongoose'); //Paquete para MongoDB connector
const Schema = mongoose.Schema; //Instanciamos un esquem
/**
 * Creamos el esquema
 */
const Device = new Schema({
    name: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        require: true
    },
    value: {
        type: Number
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
});


const device = mongoose.model('Device', Device);
module.exports = device;