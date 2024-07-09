const { DataTypes } = require('sequelize')

const modelItem = sequelize =>{
  sequelize.define('Item', {
    cerveza: { type: DataTypes.STRING
    },
    pinta: { type: DataTypes.INTEGER
    }
  }, {
    timestamps:true,
  })
}

module.exports = modelItem