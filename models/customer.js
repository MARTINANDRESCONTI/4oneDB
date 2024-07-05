const { DataTypes } = require('sequelize')

const modelCustomer = sequelize =>{
  sequelize.define('customer', {
    nombre: { type: DataTypes.STRING
    },
    email: { type: DataTypes.STRING, unique: true  
    }
    // ,
    // password: { type: DataTypes.STRING    
    // }
  }, {
    timestamps:false
  })
}

module.exports = modelCustomer