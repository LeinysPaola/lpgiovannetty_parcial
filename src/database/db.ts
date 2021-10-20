const Sequelize = require('sequelize');

const DB_NAME = 'leinysGiovannetty_parcial';
const DB_USER = 'leinys';
const DB_PASS = 'Colombia100.'; 

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
); 

database.sync ({force:true})
   .then(function(){
       console.log('Creada correctamente')
   })