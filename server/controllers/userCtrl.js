const express = require('express');
const bl = require('../bl/user-queries');
const { getNewToken } = require('../helpers/jwt-helper');
const userCtrl = express.Router();


userCtrl.post('/login', async(req,res)=>{
    try{
        bl.checkUserCredantials(req.body, (data) => {
            if(!data || data.length === 0)return res.status(401).send("invalid username or password");
            
            const token = getNewToken(data[0]);
            res.json(token);
        });
    }
    catch(err){ next(err)};
});


userCtrl.post('/register', async(req,res)=>{
    try{
        bl.addUser(req.body, data => {
            if(!data) return res.status(400).send("username already exists");
            const token = getNewToken(data);
            res.json(token);
        });
    }
    catch(err){ next(err)};
});


module.exports = userCtrl;
