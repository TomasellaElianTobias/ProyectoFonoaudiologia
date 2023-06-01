const { Schema, model } = require("mongoose")

const EsquemaEjercicio = Schema({
    nombreEjercicio: String,
    repeticiones: Number,
    descripcion: String,
    video: String,
    paciente: [{ type: Schema.Types.ObjectId, ref: 'EsquemaPaciente' }]
  })

  module.exports = model('ejercicio',EsquemaEjercicio)