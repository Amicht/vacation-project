const jwt = require('jsonwebtoken');

const secretKey = "project-3";

function getNewToken(user){
    const payload = { user };
    const token = jwt.sign(payload,secretKey);
    return token;
};

function verifyToken(authHeader, minRole){
    return new Promise(resolve => {
        if(!authHeader){
            resolve(false);
            return;
        }
        const token = authHeader.split(" ")[1];
        if(!token){
            resolve(false);
            return;
        }

        jwt.verify(token, secretKey, (err,payload)=> { // payload = { user }
            if(err){
                resolve(false);
                return;
            }
            if(payload.user.role < minRole){
                resolve(false);
                return;
            }
            resolve(payload);
        });
    })
};

function getUserFromToken(authHeader){

    const token = authHeader.split(" ")[1];
    const payload = jwt.decode(token);
    return payload.user;
}

module.exports = {
    getNewToken,
    verifyToken,
    getUserFromToken
};