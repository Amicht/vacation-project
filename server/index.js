const express = require('express');
const errorHandler = require('./helpers/errorHandler');
require('dotenv').config();
const cors = require('cors');
const ErrorModel = require('./models/errorModel');
const http = require('http');
const userCtrl = require('./controllers/userCtrl');
const vacationCtrl = require('./controllers/vacationCtrl');
const socketLogic = require('./bl/socket-logic');
const PORT = process.env.PORT;
const app = express();

app.use(cors({origin:'http://localhost:3000'})); // allow react
app.use(express.json());

app.use('/images',express.static('images'));
app.use('/api/user', userCtrl);
app.use('/api/vacation', vacationCtrl);
app.use('*', (req,res,next)=> next(new ErrorModel(404, "route not found")));
app.use(errorHandler);

const server = http.createServer(app);
server.listen(PORT, ()=> console.log(`Listening to http://localhost:${PORT}`));

socketLogic(server);