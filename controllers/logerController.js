const { customer } = require('../database/db.js')

const postLogIn = async(req, res) => {
  const { nombre, email } = req.body; 
  try {
    const cliente = await customer.create({
      nombre, email
  })
    return res.send(cliente)
  } catch (error) {
    res.json( {'message': 'error.message register'})
  }
}

module.exports = { 
  postLogIn
}