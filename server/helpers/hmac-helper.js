const {createHmac} = require('crypto');

const hash = "myHashString";
const hashedPassword = password => createHmac('sha256',hash).update(String(password)).digest('hex');

module.exports = hashedPassword;