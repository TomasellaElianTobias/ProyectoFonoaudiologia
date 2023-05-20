const { Schema, model } = require("mongoose")

const EsquemaPaciente = Schema({
  nombre: String,
  edad: Number

})

module.exports = model('pacientes',EsquemaPaciente)
