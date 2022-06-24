const express = require('express');
const dal = require('../dal/vacation-queries');
const {authAdmin, authUser} = require('../middleware/auth-middleware');
const vacationCtrl = express.Router();


vacationCtrl.get('/', authUser, (req,res, err)=> {
    try{
        dal.getAllVacations(req.body.user ,vacations=> res.json({vacations,user: req.body.user}));
    }
    catch(err){ next(err) }
});

vacationCtrl.post('/', authAdmin, (req,res)=>{
    try{
        dal.addVacation(req.body, data => {
            if(!data)return res.status(400).send("bad request");
            res.json(data);
        });
    }
    catch(err){ next(err)};
});

vacationCtrl.put('/:id', authAdmin, (req,res)=>{
    req.body.id = +req.params.id;
    
    try{
        dal.updateVacation(req.body, data => {
            if(data.affectedRows === 0) return res.status(404).send("id not found");
            res.json(data);
        });
    }
    catch(err){ next(err)};
});

vacationCtrl.delete('/:id',authAdmin, (req,res,next)=> {
    const vacation_id = +req.params.id;
    try{
        dal.deleteVacation(vacation_id, () => {
            res.status(204).send();
        });
    }
    catch(err) {next(err)}
});


module.exports = vacationCtrl;
