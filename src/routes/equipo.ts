import { Application, Request, Response } from "express";
import { EquipoController } from "../controlles/equipo.controller";

export class EquipoRoutes{
     public equipoController: EquipoController = new EquipoController();
     public routes(app: Application): void {
         app.route('/equipo').get(this.equipoController.getEquipos);
         app.route('/crearequipo').post(this.equipoController.CrearEquipo);
         app.route('/borrarequipo').delete(this.equipoController.borrarEquipo)

     }
}