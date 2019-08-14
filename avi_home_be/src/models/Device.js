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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});


const device = mongoose.model('Device', Device);
module.exports = device;