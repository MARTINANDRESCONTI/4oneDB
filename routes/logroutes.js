const express = require('express');
// const { getLogIn, getSingIn, postLogIn, postSingIn, postLogOut } = require('../controllers/logerController');
const { postLogIn, getLogIn } = require('../controllers/logerController');
// const { redirectLogin, redirectHome } = require('../services/loger.js')


const logRoutes = express.Router()

// logRoutes.get('/:email', getLogIn)
// logRoutes.get('/singin', getSingIn)
logRoutes.post('/', postLogIn)
// logRoutes.post('/singin', postSingIn)
// logRoutes.post('/logout', postLogOut)

module.exports = logRoutes