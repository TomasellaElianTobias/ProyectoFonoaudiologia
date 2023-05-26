const { Router } =  require("express")
 const router = Router() 

const Paciente = require('../Model/paciente')

 router.get('/paciente', async (req, res) => {
   const paciente = await Paciente.find()
   res.json( paciente )
})

router.post('/paciente', async (req, res) => {
   const { nombre, edad, Dni, Diagnostico } = req.body
   const paciente = new Paciente({nombre, edad, Dni, Diagnostico })
   const result = await paciente.save() 
   res.json({ msg: "paciente agregado", result });
});

router.delete('/paciente/:id', async (req, res) => {
   const { id } = req.params
   const result = await Paciente.deleteOne({ _id: id })
   res.json({ msg:'Paciente eliminado', result})
})

router.get('/paciente/:id', async (req, res) => {
   const { id } = req.params 
   const paciente = await Paciente.findOne({ _id: id })
   res.json( paciente )
})

router.put('/paciente', async (req, res) => {
   const {id, nombre, edad, Dni, Diagnostico } = req.body
   const result = await Paciente.updateOne({_id:id}, {$set:{nombre, edad, Dni, Diagnostico}})
   res.json({ msg: "Paciente actualizado", result})
})

 module.exports = router