const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vacation"
});
  
const askSQL = async(query, variables, cb) => {
    return con.query(query, variables, function (err, result) {
        if (err) throw new Error(err);
        cb? cb(result): null;
    });
};

const getAllUsers = (cb) => askSQL(`SELECT * FROM users`, [], cb);

const getUserById = (id,cb) => askSQL(`SELECT * FROM users WHERE id = ? `, [id], cb);

const checkUserCredantials = ({username, password},cb) => askSQL(`SELECT id, name, last_name, username 
    FROM users WHERE username = ? AND password = ? `, [username, password], cb);

const checkUsername = async( username,cb) => askSQL(
    `SELECT * FROM users WHERE username = ?  LIMIT 1`, [username],cb);

const insertUser = ({name, last_name, username, password}, cb) => askSQL(
    "INSERT INTO users (`name`, `last_name`,`username`,`password`) VALUES (? , ?, ?, ?)", 
    [name, last_name, username, password],cb);
    
const addUser = ({name, last_name, username, password}, cb) => {
    checkUsername( username, res => {
        if(res.length === 1) return cb(null);
        insertUser({name, last_name, username, password}, 
        res => cb({name,last_name,username, id:res.insertId}));
    });
};

const updateUser = (user, cb) => askSQL(
    "UPDATE users SET `name`= ? ,`last_name`= ? , `username`= ? WHERE id = ?", 
    [user.name, user.last_name, user.username,user.id], cb);

const deleteUser = (id, cb) => askSQL(`DELETE FROM users WHERE id = ?`,[id],cb);


module.exports = {
    getAllUsers,
    getUserById,
    checkUserCredantials,
    addUser,
    updateUser,
    deleteUser
}




