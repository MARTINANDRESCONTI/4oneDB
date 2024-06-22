const express = require('express');
const { getAllItems, postItem } = require('../controllers/ItemController.js');

const itemRoutes = express.Router()

itemRoutes.get('/', getAllItems)
// router.get('/:id', getItem)
itemRoutes.post('/', postItem)
// router.put('/:id', updateItem)
// router.delete('/:id', deleteItem)

module.exports = itemRoutes
