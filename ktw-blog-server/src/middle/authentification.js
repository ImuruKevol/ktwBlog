const express = require('express');
const router = express.Router();

router.authSession = function(req, res, next){
    if(req.session.cookie.expires < new Date()){
        req.session.destroy();
    }
    next();
}


// const loginDB = require('');
// const checkAuth = function(id, pw){
//     // check ~~

//     return true;
// }

module.exports = router;
