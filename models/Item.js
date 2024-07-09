const { DataTypes } = require('sequelize')

const modelItem = sequelize =>{
  sequelize.define('Item', {
    cerveza: { type: DataTypes.STRING
    },
    // mesa: { type: DataTypes.INTEGER
    // },
    pinta: { type: DataTypes.INTEGER
    }
  }, {
    timestamps:true,
  })
}

module.exports = modelItem