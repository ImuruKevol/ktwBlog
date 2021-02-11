const express = require('express');
const crypto = require('crypto');
const { userSvc } = require("../service");
const router = express.Router();

const encrypt = (value, salt) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(value, salt, process.env.SALT_NUMBER*1, 64, "sha512", (err, hash) => {
            if(err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(hash.toString("base64"));
            }
      });
    })
}
router.encrypt = encrypt;

const makeAccessToken = async (userId, _salt) => {
    const salt = _salt?_salt:await userSvc.getSalt(userId);
    const token = await encrypt(userId + salt, salt);
    return token;
}
router.makeAccessToken = makeAccessToken;

router.verify = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(301).redirect('/api/user/failed');
    }
}

module.exports = router;
