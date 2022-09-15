import { Handler } from "express"
import * as Phone from "../model/Phone";


export const getAll:Handler = async (__, res) => {
    const { phones, count } = await Phone.all();
    res.json({ phones, count });
};

export const count:Handler = async(__, res) => {
    const phones = await Phone.count()
    res.json({ count })
};

export const findByID:Handler = async (req, res) => {
    const id = req.params.id

    const phone = await Phone.findByID(id);

    if(!phone) return res.status(404).json({error: "Equipo no encontrado"})

    res.status(200).json(phone)
};

export const create: Handler = async (req,res) => {
    const { model, description } = req.body

    const id = await Phone.create(model, description);

    res.status(201).json(id);

};

export const update:Handler = async(req, res)  => {
    const id = req.params.id
    const {model, description} = req.body
    
    const idPhone = await Phone.update(id, model,description);

    if (!idPhone) return res.status(404).json({message: "El Equipo no fue encontrado"});
    
    res.status(200).json({ id:idPhone });
  };
  

export const remove:Handler = async(req, res) => {
    const id = req.params.id;

    const idPhone = await Phone.remove(id);

    if (!idPhone) return res.status(404).json({message:"El equipo no existe"})
  
    res.status(202).json(idPhone)
  };
  

