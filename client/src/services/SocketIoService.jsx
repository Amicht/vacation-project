import { io } from 'socket.io-client';


class SocketIoService{
    
    connect(user,cb){
        this.socket = io('/',{
            path: '/socket',
            transports: ["websocket"]
        }); 
        this.user = user;

        // subscribe to repetetive events
        this.getVacations(user)
        if(user.role < 2){
            this.socket.on('set-vacations-to-client', vacations => cb(vacations));
        }else{
            this.socket.on('set-Admin-vacations-to-client', vacations => cb(vacations));
        }
        this.socket.on('update-client-vacations', ()=> 
            this.socket.emit('get-vacations-from-server', user));
    };
    getVacations(user){
        this.socket.emit('get-vacations-from-server', user);
    }
    follow(user, vacationId){
        this.socket.emit("client-follow", user, vacationId);
    }
    unfollow(user, vacationId){
        this.socket.emit("client-unfollow", user, vacationId);
    }
    addVacation(vacation){
        this.socket.emit('add-vacation', vacation);
    }
    updateVacation(updatedVacation){
        this.socket.emit('update-vacation',updatedVacation);
    }
    DeleteVacation(vacId){
        this.socket.emit('delete-vacation', vacId);
    }
    disconnect(){
        try{
            this.socket.disconnect();
        }catch(err){ }
    }
};

const mySocketIoService = new SocketIoService();

export default mySocketIoService;