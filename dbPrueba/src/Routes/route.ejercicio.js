const { Router } =  require("express")
 const router = Router() 

const Ejercicio = require('../Model/ejercicio')

 router.get('/ejercicio', async (req, res) => {
   const ejercicio = await Ejercicio.find()
   res.json( ejercicio )
})

router.post('/ejercicio', async (req, res) => {
   const {nombreEjercicio, repeticiones, descripcion, video,paciente} = req.body
   const ejercicio = new Ejercicio({nombreEjercicio, repeticiones, descripcion, video,paciente })
   const result = await ejercicio.save() 
   res.json({ msg: "ejercicio agregado", result });
});

router.delete('/ejercicio/:id', async (req, res) => {
   const { id } = req.params
   const result = await Ejercicio.deleteOne({ _id: id })
   res.json({ msg:'Ejercicio eliminado', result})
})

router.get('/ejercicio/:id', async (req, res) => {
   const { id } = req.params 
   const ejercicio = await Ejercicio.findOne({ _id: id })
   res.json( ejercicio )
})

router.put('/ejercicio', async (req, res) => {
   const {id, nombreEjercicio, repeticiones, descripcion, video,paciente } = req.body
   const result = await Ejercicio.updateOne({_id:id}, {$set:{nombreEjercicio, repeticiones, descripcion, video, paciente}})
   res.json({ msg: "Ejercicio actualizado", result})
})

 module.exports = router