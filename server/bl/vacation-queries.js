const askSQL = require("../dal/dal");
const uuid = require('uuid').v4;
const fs = require('fs');

const getAdminVacations = (cb) => askSQL(
    `SELECT v.*, COUNT(f.vacation_id) as follow FROM vacations v 
    LEFT JOIN followers f ON f.vacation_id = v.id GROUP BY v.id
    ORDER BY (f.vacation_id = v.id)DESC, from_date ASC`, [], cb);

const getUserVacations = (userId, cb) => askSQL(`SELECT v.*, COUNT(f.vacation_id) as follow FROM vacations v 
    LEFT JOIN followers f ON f.vacation_id = v.id AND f.user_id = ? GROUP BY v.id
    ORDER BY (f.vacation_id = v.id AND f.user_id = ?) DESC, from_date ASC`, [userId, userId], cb);

const getAllVacations = (user, cb) => user.role>1? getAdminVacations(cb): getUserVacations(user.id,cb);

const addVacation = async({description, destination, picture, from_date, to_date, price}, cb) => {
    if(picture){
        const imageName = uuid() + '.jpg';
        fs.writeFile('./images/'+ imageName, picture, data => console.log(data));
        picture = imageName;
    };
    askSQL(
    "INSERT INTO vacations (`description`, `destination`,`picture`,`from_date`,`to_date`, `price`) VALUES (?, ?, ?, ?, ?, ?)", 
    [description, destination, picture, from_date, to_date, price],cb);
}

const updateVacation = ({description, from_date, to_date, price, id}, cb) => askSQL(
    "UPDATE vacations SET `description` = ?, `from_date` = ?,`to_date` = ?, `price` = ? WHERE `id` = ?", 
    [description, from_date, to_date, price, id], cb);


//delete
const removeVacation = (id, cb) => askSQL("DELETE FROM vacations WHERE id = ?",[id],cb);
const removeImage = (vacId,cb) => askSQL("SELECT picture FROM vacations WHERE id = ?", [vacId], data => {
    fs.unlink('./images/'+data[0].picture, () => removeVacation(vacId, cb));
});
const removeFollowers = (vacId, cb) => askSQL("DELETE FROM followers WHERE vacation_id = ?",
 [vacId],() => removeImage(vacId, cb))

const deleteVacation = (vacId, cb) => removeFollowers(vacId, cb);


module.exports = {
    getAdminVacations,
    getAllVacations,
    addVacation,
    updateVacation,
    deleteVacation
}




