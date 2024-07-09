const express = require('express');
const { postLogIn, } = require('../controllers/logerController');

const logRoutes = express.Router()

logRoutes.post('/', postLogIn)

module.exports = logRoutes