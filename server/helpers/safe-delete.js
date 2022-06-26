const fs = require('fs');

function safeDelete(fullPath){
    try{
        if(!fullPath || !fs.unlinkSync(fullPath)) return;
        fs.unlinkSync(fullPath);
    }
    catch(err){ }
}

module.exports = safeDelete;