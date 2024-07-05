const { DataTypes } = require('sequelize')

const modelTable = sequelize =>{
  sequelize.define('table', {
    numero: { type: DataTypes.ENUM(
      'uno',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis'
    )
    }
  }, {
    timestamps:false
  })
}

module.exports = modelTable