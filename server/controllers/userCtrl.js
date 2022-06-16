const express = require('express');
const dal = require('../dal/dal-users');
const ErrorModel = require('../models/errorModel');
const userCtrl = express.Router();

userCtrl.get('/', (req,res)=>{
    try{
        dal.getAllUsers(data => res.json(data));
    }
    catch(err){ next(err)};
});

userCtrl.get('/:id', (req,res, next)=> {
    dal.getUserById(req.params.id, user => {
        if(user.length === 0) return next(new ErrorModel(400, 'user does not exists'));
        res.json(user[0]);
    });
});



module.exports = userCtrl;
