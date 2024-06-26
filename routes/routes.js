const express = require('express');
const { getAllItems, postItem, updateItem, getItem, deleteItem } = require('../controllers/ItemController.js');

const itemRoutes = express.Router()

itemRoutes.get('/', getAllItems)
itemRoutes.get('/:id', getItem)
itemRoutes.post('/', postItem)
itemRoutes.put('/:id', updateItem)
itemRoutes.delete('/:id', deleteItem)

module.exports = itemRoutes
