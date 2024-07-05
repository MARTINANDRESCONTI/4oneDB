const { DataTypes } = require('sequelize')

const modelBeer = sequelize =>{
  sequelize.define('beer', {
    cerveza: { type: DataTypes.STRING
    },
    precio: { type: DataTypes.INTEGER
    }
  }, {
    timestamps:false
  })
}

module.exports = modelBeer