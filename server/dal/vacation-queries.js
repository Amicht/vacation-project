const askSQL = require("./dal");

const getAdminVacations = (cb) => askSQL(
    `SELECT v.*, COUNT(f.vacation_id) as follow FROM vacations v 
    LEFT JOIN followers f ON f.vacation_id = v.id GROUP BY v.id
    ORDER BY (f.vacation_id = v.id)DESC, from_date ASC`, [], cb);

const getUserVacations = (userId, cb) => askSQL(`SELECT v.*, COUNT(f.vacation_id) as follow FROM vacations v 
    LEFT JOIN followers f ON f.vacation_id = v.id AND f.user_id = ? GROUP BY v.id
    ORDER BY (f.vacation_id = v.id AND f.user_id = ?) DESC, from_date ASC`, [userId, userId], cb);

const getAllVacations = (user, cb) => user.role>1? getAdminVacations(cb): getUserVacations(user.id,cb);

const addVacation = ({description, destination, picture, from_date, to_date, price}, cb) => askSQL(
    "INSERT INTO vacations (`description`, `destination`,`picture`,`from_date`,`to_date`, `price`) VALUES (?, ?, ?, ?, ?, ?)", 
    [description, destination, picture, from_date, to_date, price],cb);

const updateVacation = ({description, destination, picture, from_date, to_date, price, id}, cb) => askSQL(
    "UPDATE vacations SET `description` = ?, `destination` = ?,`picture` = ?,`from_date` = ?,`to_date` = ?, `price` = ? WHERE `id` = ?", 
    [description, destination, picture, from_date, to_date, price, id], cb);

const removeVacation = (id, cb) => askSQL("DELETE FROM vacations WHERE id = ?",[id],cb);

const removeFollowers = (vacId, cb) => askSQL("DELETE FROM followers WHERE vacation_id = ?",
 [vacId],() => removeVacation(vacId, cb))

const deleteVacation = (vacId, cb) => removeFollowers(vacId, cb);


module.exports = {
    getAllVacations,
    addVacation,
    updateVacation,
    deleteVacation
}




