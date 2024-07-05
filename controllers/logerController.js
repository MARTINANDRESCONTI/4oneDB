const { customer } = require('../database/db.js')



// const getSingIn = async(req, res) => {
// }

// const postLogIn = async(req, res) => {
//   const { nombre, email, password } = req.body; 
//   try {
//     const cliente = await customer.findAll({
//       where:{
//         email:email,
//         password:password
//       }
//     })
//     if(cliente) {
//     req.session.userId = cliente.id;
//     return res.redirect('/items')
//     }
//     res.redirect('/')
//   }
//    catch (error) {
//     res.json( {'message': 'cliente no registrado'})
//   }
// }

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

// const getLogIn = async(req, res) => {
//   try {
//     const cliente = await customer.findAll({
//       where:{email:req.params.email}
//     })
//     res.json(item)
//   } catch (error) {
//     res.json( {'message': 'error.message'})
//   }
// }


// const postSingIn = async(req, res) => {
//   const { nombre, email, password } = req.body; 
//   try {
//     const cliente = await customer.create({
//       nombre, email, password
//   })
//     return res.redirect('/')
//   } catch (error) {
//     res.json( {'message': 'error.message register'})
//   }
// }

// const postLogOut = async(req, res) => {
// }

// module.exports = { 
//   getLogIn, 
//   getSingIn, 
//   postLogIn, 
//   postSingIn, 
//   postLogOut 
// }

module.exports = { 
  postLogIn

}