const SocketServer = require('socket.io').Server;
const vacations_bl = require('./vacation-queries');
const user_bl = require('./user-queries');

function socketLogic(httpServer){

    const options = {
        path: '/socket',
        cors: {
            origin: "http://localhost:3000" // allow react 
        }
    }
    
    const mySocketServer = new SocketServer(httpServer,options);
    
    mySocketServer.sockets.on("connection", socket => {
        
        socket.on('get-vacations-from-server', user => {
            try{
                vacations_bl.getAllVacations(user, vacations => {
                    if(user.role === 1){
                        socket.emit('set-vacations-to-client',vacations);
                    }
                    else{
                        socket.emit('set-Admin-vacations-to-client',vacations);
                    }
                })
            }catch(err){};
        });
        socket.on('client-follow',(user,vacationId)=> {
            try{
                user_bl.followVacation(user.id, vacationId, ()=> {
                    //update admin
                    vacations_bl.getAdminVacations(adminVacations => {
                        mySocketServer.sockets.emit('set-Admin-vacations-to-client',adminVacations);
                    })
                })
            }catch(err){};
        });
        socket.on('client-unfollow',(user,vacationId)=> {
            try{
                user_bl.unFollowVacation(user.id, vacationId, ()=> {
                    //update admin
                    vacations_bl.getAdminVacations(adminVacations => {
                        mySocketServer.sockets.emit('set-Admin-vacations-to-client',adminVacations);
                    })
                })
            }catch(err){};
        })
        socket.on('add-vacation', newVacation => {
            vacations_bl.addVacation(newVacation, ()=> {
                mySocketServer.sockets.emit('update-client-vacations');
            })
        })
        socket.on('update-vacation', updatedVacation => {
            vacations_bl.updateVacation(updatedVacation, ()=> {
                mySocketServer.sockets.emit('update-client-vacations');
            })
        })
        socket.on('delete-vacation', vacId => {
            vacations_bl.deleteVacation(vacId, () => {
                mySocketServer.sockets.emit('update-client-vacations');
            })
        });
    })
};

module.exports = socketLogic;