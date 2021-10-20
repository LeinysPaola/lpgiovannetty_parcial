import { Request, Response } from "express";
import { Equipo, EquipoI } from "../models/Equipo";


export class EquipoController{
    public async getEquipos(req: Request, res: Response){
        try {
            const equipos = await Equipo.findAll()
            if(!equipos){
                res.status(400).json({msg: 'No exite'})
            }
            return res.status(200).json({equipos})
    
        } catch (error){
            res.status(500).json({msg:'No hay conexion'})
        }
        


    }
    public mostrarEquipos(){

    }


public async CrearEquipo(req: Request, res: Response){
    const body: EquipoI = req.body
    try {
        if ((!body.marca)) return res.status(400).json({msg:'Se requieren datos'});
        const Equ : Equipo | null = await Equipo.findOne ( { where : {marca :body.marca}
        });
    
        const equipo = await Equipo.create(body);
        res.status(200).json({equipo})
        
     } catch (error){

     }
    }

    public async borrarEquipo(req: Request, res: Response){
        try {
            const {id} = req.body; 
            const response = await Equipo.destroy({
                where: { id: id}
            })
          .then (function(data){
              const res = {success: true, data: data, message: "borrado"}
              return res; 
          })
          .catch (error =>{
              const res= {success: false, error: error}
              return res; 
          });
          res.json(response);
          
        } catch (e){
            console.log(e);
        }
    }
}