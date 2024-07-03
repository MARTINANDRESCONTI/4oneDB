const { DataTypes } = require('sequelize')

const modelItem = sequelize =>{
  sequelize.define('Item', {
    cerveza: { type: DataTypes.STRING
    },
    cantidadPinta: { type: DataTypes.INTEGER
    },
    fechaVendida: { type: DataTypes.DATEONLY
    }
  }, {
    timestamps:false
  })
}

module.exports = modelItem