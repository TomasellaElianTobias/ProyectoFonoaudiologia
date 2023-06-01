const { Schema, model } = require("mongoose")

const EsquemaPaciente = Schema({
  nombre: String,
  edad: Number,
  Dni: String,
  Diagnostico: String
})

module.exports = model('pacientes',EsquemaPaciente)

