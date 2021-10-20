import { Application, Request, Response } from "express";
import { MantenimientoController } from "../controlles/mantenimiento.controller";

export class MantenimientoRoutes{
     public mantenimientoController: MantenimientoController = new MantenimientoController();
     public routes(app: Application): void {
         app.route('/mantenimiento').get(this.mantenimientoController.getMantenimientos);
          app.route('/crearmantenimiento').post(this.mantenimientoController.Crearmantenimiento);
          app.route('/borrarmantenimiento').delete(this.mantenimientoController.borrarMantenimiento)
     }
}