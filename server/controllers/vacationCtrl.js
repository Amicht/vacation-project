const express = require('express');
const bl = require('../bl/vacation-queries');
const { authUser} = require('../middleware/auth-middleware');
const vacationCtrl = express.Router();


vacationCtrl.get('/', authUser, (req,res, next)=> {
    try{
        if(req.body.user.role===1){
            bl.getAllVacations(req.body.user ,vacations => res.json({vacations,user: req.body.user}));
        }
        if(req.body.user.role===2){
            bl.getAdminVacations(vacations => res.json({vacations,user: req.body.user}));
        }
    }
    catch(err){ next(err) }
});

module.exports = vacationCtrl;
