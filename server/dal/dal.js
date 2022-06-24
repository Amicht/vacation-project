const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vacation"
});

const askSQL = async(query, variables, cb) => {
    return con.query(query, variables, function (err, result) {
        if (err) return cb?cb(null): null;
        cb? cb(result): null;
    });
};

module.exports = askSQL;