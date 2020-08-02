const express = require('express');
const router = express.Router();

router.authSession = function(req, res, next){
    if(req.session.cookie.expires < new Date()){
        req.session.destroy();
    }
    next();
}

module.exports = router;
