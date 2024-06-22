// mostrar un producto ordenado
// export const getItem = async(req, res) => {
//   try {
//     const item = await ItemModel.findAll({
//       where:{id:req.params.id}
//     })
//     res.json(item)
//   } catch (error) {
//     res.json( {'message': 'error.message'})
//   }
// }

// actualizar un producto
// export const updateItem = async (req, res) => {
//   try {
//     await ItemModel.update(req.body), {
//       where: { id: req.params.id }
//     }
//     res.json({'message': 'You update the item successfully'})
//   } catch (error) {
//     res.json( {'message': 'error.message'})
//   }
// }
// eliminar un producto
// export const deleteItem = async (req, res) => {
//   try {
//     await ItemModel.destroy(req.body), {
//       where: { id: req.params.id}
//     }
//     res.json({'message': 'You delete the item successfully'})
//   } catch (error) {
//     res.json( {'message': 'error.message'})
//   }
// }

const { Item } = require('../database/db.js')

const getAllItems = async(req, res) => {
  try {
    const item = await Item.findAll(
    )
    res.json(item)
  } catch (error) {
    console.log(Item.findAll(), 'estoy');
    res.json( {'message': 'no funca'})
  }
}

// agregar un producto
const postItem = async (req, res) => {
  const {cerveza} = req.body
  try {
    const newCerveza = await Item.create({
      cerveza
  })
    res.json(newCerveza)
  } catch (error) {
    res.json( {'message': 'error.message'})
  }
}

module.exports = {
  getAllItems,
  postItem
}
