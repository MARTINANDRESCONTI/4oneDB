const { Sequelize } = require('sequelize')
const modelItem = require('../models/Item.js')
const modelCustomer = require('../models/customer.js')
const modelBeer = require('../models/beer.js')
const modelTable = require('../models/table.js')

const { 
  DB_HOST, 
  DB_PORT, 
  DB_USER, 
  DB_PASSWORD, 
  DB_DATABASE
} = require('../services/config.js')
 
const db = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`)

// const db = new Sequelize('mysql://364771:Martinalwaysdata1!@mysql-martinandresconti.alwaysdata.net:3306/martinandresconti_all4ones')


modelItem(db);
modelCustomer(db);
modelBeer(db);
modelTable(db);

const { Item, customer, beer, table } = db.models;

customer.hasMany(Item)
Item.belongsTo(customer)
// customer.hasOne(table)
// table.belongsTo(customer)

module.exports = {
  ...db.models,
  db
}