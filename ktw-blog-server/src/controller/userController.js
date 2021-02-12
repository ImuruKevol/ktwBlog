const { createSalt } = require("../middle/authentification");
const { userSvc } = require('../service');

const userCtl = {
  salt: async (req, res, next) => {
    const { userId } = req.params;
    const salt = await userSvc.getSalt(userId);
    if(salt) {
      return res.status(200).send(salt);
    }
    else {
      return res.status(500).send();
    }
  },

  register: async (req, res) => {
    const { adminID, adminPW, newId, newPw } = req.body;
    const salt = await userSvc.getSalt(adminID);
    if(!salt) return res.status(401).send();

    const encryptPW = await encrypt(adminPW, salt);
    const login = await userSvc.login(adminID, encryptPW);
    if(!login) return res.status(401).send();

    const result = await userSvc.register(newId, newPw);
    if(result) return res.status(201).send();
    return res.status(500).send();
  },

  login: (req, res) => {
    return res.status(200).send(req.session.passport.user);
  },

  failed: (req, res) => {
    req.session.destroy();
    return res.status(401).send();
  },

  logout: async (req, res) => {
    const { userId } = req.params;
    await userSvc.logout(userId);
    req.session.destroy();
    return res.status(200).send();
  },

  list: async (req, res, next) => {
    const { userId } = req.params;
    const list = await userSvc.list(userId);
    if(list) {
      return res.status(200).send(list);
    }
    else {
      return res.status(500).send();
    }
  },
}

module.exports = {
  ...userCtl,
}
