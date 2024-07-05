const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// const cookieparser = require('cookie-parser');
// const session = require('express-session');

const { db } = require('./database/db.js');

const itemRoutes = require('./routes/routes.js');
const logRoutes = require('./routes/logroutes.js')

const { PORT } = require('./services/config.js')

// const { redirectLogin, redirectHome } = require('./services/loger.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieparser());

// app.use(session(
//   {
//     name: 'sid',
//     secret:'secret',
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//       maxAge: 1000 * 60 * 60 * 2 // Está en milisegundos --> 2hs
//     }
//   }
// ));

// app.use((req, res, next) => {
//   console.log(req.session);
//   next();
// });

app.use('/items', itemRoutes)
app.use('/log', logRoutes)

app.use('/', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(PORT, () =>{
  console.log(`server runing on port:${PORT}`);
  db.sync({force:true});  
})