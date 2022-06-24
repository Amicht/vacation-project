const express = require('express');
const errorHandler = require('./helpers/errorHandler');
const cors = require('cors');
const ErrorModel = require('./models/errorModel');
const userCtrl = require('./controllers/userCtrl');
const vacationCtrl = require('./controllers/vacationCtrl');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

//app.use(cors()) // react
app.use(express.json());

app.use('/images',express.static('images'));
app.use('/api/user', userCtrl);
app.use('/api/vacation', vacationCtrl);
app.use('*', (req,res,next)=> next(new ErrorModel(404, "route not found")));
app.use(errorHandler);

app.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}`))
