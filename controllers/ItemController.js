const { Item, customer } = require('../database/db.js')

//traer todos los items de la orden
const getAllItems = async(req, res) => {
  const { email } = req.params
  try {
    const cliente = await customer.findAll({ where: { email: email } })
//     const user = customer.findAll({
//   where: {email:req.params.email},
//   include: [
//     { model: modelItem }  ]
// })

    
    const item = await Item.findAll({ where: { customerId: cliente[0].id } })
    // const pt = await cliente.getItems(item);
    // console.log(pt.toJSON());
    console.log(item.map(i=>i.toJSON()));
    console.log(cliente.map(i=>i.toJSON()));
    console.log(cliente[0].id);
     

    res.json(item)
  } catch (error) {
    res.json( {'message': 'error.message'})
  }
}

// mostrar un item por id
const getItem = async(req, res) => {
  try {
    const item = await Item.findAll({
      where:{id:req.params.id}
    })
    res.json(item)
  } catch (error) {
    res.json( {'message': 'error.message'})
  }
}

// agregar un producto a la orden
const postItem = async (req, res) => {
  const {cerveza, 
    // mesa,
    pinta} = req.body

  try {
    const cliente = await customer.findOne({
    where:{email:req.params.email}
    })
    const item = await Item.create({
    cerveza,
    // mesa,
    pinta
    })
    // console.log(item.toJSON())
    // console.log(cliente.toJSON())
    // await cliente.addItem(item)

    await item.setCustomer(cliente)

    res.json(item)
  } catch (error) {
    res.json( {'message': 'error.message'})
  }
}

// editar un producto de la orden
const updateItem = async (req, res) => {
  const {cerveza, 
    // mesa,
    pinta} = req.body
  try {
    await Item.update({ cerveza, 
      // mesa,
      pinta }, {
      where: { id: req.params.id }
    })
    res.json({'message': 'You update the item successfully'})
  } catch (error) {
    res.json( {'message': 'error.message'})
  }
}

// eliminar un item
const deleteItem = async (req, res) => {
  try {
    await Item.destroy({
      where: { id: req.params.id}
    })
    res.json({'message': 'You delete the item successfully'})
  } catch (error) {
    res.json( {'message': 'error.message'})
  }
}

module.exports = {
  getAllItems,
  postItem,
  updateItem,
  getItem,
  deleteItem 
}
