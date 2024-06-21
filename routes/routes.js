// import express from 'express';
// import { addItem, deleteItem, getAllItems, getItem, updateItem } from '../controllers/ItemController.js';

// const router = express.Router()

// router.get('/', getAllItems)
// router.get('/:id', getItem)
// router.post('/', addItem)
// router.put('/:id', updateItem)
// router.delete('/:id', deleteItem)

// export default router

const express = require('express');
const { getAllItems, postItem } = require('../controllers/ItemController.js');

const itemRoutes = express.Router()

itemRoutes.get('/', getAllItems)
// router.get('/:id', getItem)
itemRoutes.post('/', postItem)
// router.put('/:id', updateItem)
// router.delete('/:id', deleteItem)

module.exports = itemRoutes
