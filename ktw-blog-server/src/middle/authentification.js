const express = require('express');
const router = express.Router();

// router.checkExpired = function(req, res, next){
//     // console.log(+req.session.cookie.expires < +new Date())
//     if(+req.session.cookie.expires < +new Date()){
//         req.session.destroy();
//     }
//     return next();
// }

router.verify = (req, res, next) => {
    // if(req.isAuthenticated()) {
    //     return next();
    // }
    // res.status(401).send();
    
    if(req.session.passport && req.session.passport.user) {
        // session expires 갱신
        // console.log(req.session.cookie.expires);
        next();
    }
    else {
        res.status(401).send();
    }
}

module.exports = router;
