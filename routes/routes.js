const express = require('express');
const { getAllItems, postItem, updateItem, getItem, deleteItem } = require('../controllers/ItemController.js');
const { redirectLogin, redirectHome } = require('../services/loger.js')

const itemRoutes = express.Router()

itemRoutes.get('/:email', getAllItems)
itemRoutes.get('/:id', getItem)
itemRoutes.post('/:email', postItem)
itemRoutes.put('/:id', updateItem)
itemRoutes.delete('/:id', deleteItem)

module.exports = itemRoutes
