const { DataTypes } = require('sequelize')

const modelBeer = sequelize =>{
  sequelize.define('beer', {
    cerveza: { type: DataTypes.ENUM(
      'PILSEN',
      'AMERICAN LAGER',
      'KÖLSCH',
      'AMBER',
      'IPA',
      'PALE ALE',
      'STOUT',
      'BOCK',
      'PORTER'
    )
    },
    precio: { type: DataTypes.INTEGER
    }
  }, {
    timestamps:false
  })
}

module.exports = modelBeer