import exp from 'constants';
import { DataTypes, Model } from 'sequelize';
import { database } from '../database/db';
import { Mantenimiento } from './Mantenimiento';


export class Equipo extends Model{
    public marca! : string;
    public modelo! : string
}


export interface EquipoI{
      marca : string;
      modelo : string

}

Equipo.init (
    {

        marca : {
            type: DataTypes.STRING,
            allowNull: false
        },

        modelo : {
            type : DataTypes.STRING,
            allowNull : false
        },
        
    },

     {
         tableName: "equipos",
         sequelize: database,
         timestamps: true
     }

)
//  Mantenimiento.hasMany(Equipo);
//  Equipo.belongsTo(Mantenimiento);

