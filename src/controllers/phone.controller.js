const v4 = require('uuid').v4
const { getConnection } = require('../server/db')

const getAll = async (__, res) => {
    const phones = await getConnection().get("phones").value()
    res.json({phones, count:phones?.length})
}

const count = async(__, res) => {
    const phones = await getConnection().get("phones").value()
    res.json({ count: phones?.length })
}

const findByID = async (req, res) => {
    const id = req.params.id

    const phone = await getConnection().get('phones').find({ id }).value()

    if(!phone) return res.status(404).json({error: "Equipo no encontrado"})

    res.status(200).json(phone)
}

const create = async (req,res) => {
    const { model, description } = req.body

    const newPhone = {
        id: v4(),
        model,
        description,
    }

const db = await getConnection()
await db.get('phones').push
(newPhone).write()

res.status(201).json(newPhone.id)
}

const update = async(req, res)  => {
    const id = req.params.id
    const {model, description} = req.body
  
    const db = await getConnection()
    
    const phone = await db.get('phones').find({id}).value();
  
    if(!phone) return res.status(404).json({message: 'La phonera no fue encontrada'})
  
    await db.get('phones').find({id}).assign({model, description}).write()
  
    res.status(200).json({id})
  
  }
  
  const remove = async(req, res) => {
    const id = req.params.id
    console.log(id)
    const db = await getConnection()
  
    const phone = await db.get('phones').find({id}).value();
  
    if(!phone) return res.status(404).json({ message: "La tarea fue encontrada"})
  
    await db.get('phones').remove({id}).write()
  
    res.status(202).json({id})
  
  
  }
  

module.exports = {getAll, create, count, findByID, update, remove}
