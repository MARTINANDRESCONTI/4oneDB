//importacion de la conexión a la DB
// import db from '../database/db.js';
// import { DataTypes } from 'sequelize';

// const ItemModel = db.define('item', {
//   item_id: { type: DataTypes.INTEGER },
//   cliente_id: { type: DataTypes.INTEGER, allowNull: false},
//   cerveza: { type: DataTypes.STRING, allowNull: true},
//   pintas: { type: DataTypes.INTEGER, allowNull: true},
// })


// export default ItemModel

const { DataTypes } = require('sequelize')

// module.exports = sequelize =>{
//   sequelize.define('Item', {
//     cerveza: { type: DataTypes.STRING
//     }
//   }, {
//     timestamps:false
//   })
// }
const modelItem = sequelize =>{
  sequelize.define('Item', {
    cerveza: { type: DataTypes.STRING
    }
  }, {
    timestamps:false
  })
}


module.exports = modelItem