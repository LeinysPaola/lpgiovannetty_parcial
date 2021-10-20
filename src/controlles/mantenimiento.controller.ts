import { Request, Response } from "express";
import { Mantenimiento, MantenimientoI } from "../models/Mantenimiento";


export class MantenimientoController{
    public async getMantenimientos(req: Request, res: Response){
        try {
            const mantenimientos = await Mantenimiento.findAll()
            if(!mantenimientos){
                res.status(400).json({msg: 'No exite'})
            }
            return res.status(200).json({mantenimientos})
    
        } catch (error){
            res.status(500).json({msg:'No hay conexion'})
        }
        


    }
    public mostrarMantenimientos(){

    }

public async Crearmantenimiento(req: Request, res: Response){
    const body: MantenimientoI = req.body
    try {
        if ((!body.descripcion)) return res.status(400).json({msg:'Se requieren datos'});
        const Man : Mantenimiento | null = await Mantenimiento.findOne ( { where : {descripcion:body.descripcion}
        });
    
        const mantenimiento = await Mantenimiento.create(body);
        res.status(200).json({mantenimiento})
        
     } catch (error){

     }
    }
    public async borrarMantenimiento(req: Request, res: Response){
        try {
            const {id} = req.body; 
            const response = await Mantenimiento.destroy({
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
