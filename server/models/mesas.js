const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let mesasSchema = new Schema({
    fecha: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    nombreDeLaReservacion : {
        type: String,
        unique: true,
        required: [true, 'El nombre de la reservacion es necesario']
    },
    HoradeLlegada: {
        type: String,
        required: [true, 'La hora de llegada es obligatoria']
    },
    Comensales: {
        type: String,
        required: [true, 'El número de asientos es obligatorio']
    }
   
});


usuarioSchema.methods.toJSON = function() {

    let mesas = this;
    let mesasObject = mesas.toObject();
    delete mesasObject.fecha;

    return mesasObject;
}


mesasSchema.plugin(uniqueValidator, { message: 'Tu mesa ha sido reservada' });


module.exports = mongoose.model('Usuario', mesasSchema);