const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let registroSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellido: {
        type: String,
        unique: true,
        required: [true, 'El apellido necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatoria']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
});


registroSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


registroSchema.plugin(uniqueValidator, { message: '{PATH} Usuario registrado con éxito' });


module.exports = mongoose.model('Usuario', registroSchema);