const { Sequelize } = require('sequelize')
const modelItem = require('../models/Item.js')
const { 
  DB_HOST, 
  DB_PORT, 
  DB_USER, 
  DB_PASSWORD, 
  DB_DATABASE
} = require('../routes/config.js')
 
const db = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`)

modelItem(db);

const { Item } = db.models;

module.exports = {
  ...db.models,
  db
}