const express = require('express');
const dal = require('../dal/user-queries');
const {authUser} = require('../middleware/auth-middleware');
const { getNewToken } = require('../helpers/jwt-helper');
const userCtrl = express.Router();


userCtrl.post('/login', async(req,res)=>{
    try{
        dal.checkUserCredantials(req.body, data => {
            if(data.length === 0)return res.status(401).send("invalid username or password");
            const token = getNewToken(data[0]);
            res.json(token);
        });
    }
    catch(err){ next(err)};
});


userCtrl.post('/register', async(req,res)=>{
    req.body.role= 1;
    try{
        dal.addUser(req.body, data => {
            console.log(data);
            if(!data) return res.status(400).send("username already exists");
            const token = getNewToken(data);
            res.json(token);
        });
    }
    catch(err){ next(err)};
});

userCtrl.post('/:vacId', authUser, (req,res,next)=> {
    const vacation_id = req.params.vacId;
    const user_id = req.body.user.id;
    console.log(vacation_id,user_id);
    try{
        dal.followVacation(user_id,vacation_id, data => {
            if(!data) return res.status(400).send("user already follows");
            res.json(data);
        });
    }
    catch(err) {next(err)}
});

userCtrl.delete('/:vacId', authUser, (req,res,next)=> {
    const vacation_id = req.params.vacId;
    const user_id = req.body.user.id;
    try{
        dal.unFollowVacation(user_id,vacation_id, () => {
            res.status(204).send();
        });
    }
    catch(err) {next(err)}
});



module.exports = userCtrl;
