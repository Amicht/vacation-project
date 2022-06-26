import { io } from 'socket.io-client';


class SocketIoService{
    
    connect(user,cb){
        this.socket = io('/',{
            path: '/socket',
            transports: ["websocket"]
        }); 
        // subscribe to repetetive events
        this.getVacations(user)
        if(user.role < 2){
            this.socket.on('set-vacations-to-client', vacations => cb(vacations));
        }else{
            this.socket.on('set-Admin-vacations-to-client', vacations => cb(vacations));
        }
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
    disconnect(){
        try{
            this.socket.disconnect();
        }catch(err){ }
    }
};

const mySocketIoService = new SocketIoService();

export default mySocketIoService;