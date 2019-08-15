const mongoose = require('mongoose'); //Paquete para MongoDB connector
const Schema = mongoose.Schema; //Instanciamos un esquem
/**
 * Creamos el esquema
 */
const Category = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        require: true
    }
});


const category = mongoose.model('Category', Category);
module.exports = category;