class UserModel{
    id;
    name;
    last_name;
    username;
    password;
    role;
    constructor(user){
        this.id = user.id;
        this.name = user.name;
        this.last_name = user.last_name;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
    }
}