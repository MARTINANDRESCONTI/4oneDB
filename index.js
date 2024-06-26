const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { db } = require('./database/db.js');

const itemRoutes = require('./routes/routes.js');

const { PORT } = require('./routes/config.js')

const app = express()

app.use( cors() )
app.use(express.json())
app.use(morgan('dev'))
app.use('/items', itemRoutes)

app.get('/', (req, res)=>{
  res.send('All 4ONEs. Beer House')
})

app.listen(PORT, () =>{
  console.log(`server runing on port:${PORT}`);
  db.sync({force:true});
})