const askSQL = require("../dal/dal");
const hashedPassword = require("../helpers/hmac-helper");


const checkUserCredantials = ({username, password},cb) => askSQL(
    `SELECT id, name, last_name, username, role_id AS role
     FROM users WHERE username = ? AND password = ? LIMIT 1`,
     [username, hashedPassword(password)], cb);

const addUser = ({name, last_name, username, password}, cb) => askSQL(
    "INSERT INTO users (`name`, `last_name`,`username`,`password`,`role_id`) VALUES (? , ?, ?, ?, ?)", 
    [name, last_name, username, hashedPassword(password), 1],cb);

const followVacation = (userId, vacId, cb) => askSQL(
    "INSERT INTO followers (`user_id`, `vacation_id`) VALUES (?,?)", [userId,vacId],cb); 

const unFollowVacation = (userId, vacId, cb) => askSQL(
    "DELETE FROM followers WHERE `user_id` = ? AND `vacation_id` = ?", [userId,vacId],cb); 

    
module.exports = {
    checkUserCredantials,
    addUser,
    followVacation,
    unFollowVacation
}




