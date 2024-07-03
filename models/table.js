const { DataTypes } = require('sequelize')

const modelTable = sequelize =>{
  sequelize.define('table', {
    numero: { type: DataTypes.INTEGER, primaryKey: true
    }
  }, {
    timestamps:false
  })
}

module.exports = modelTable