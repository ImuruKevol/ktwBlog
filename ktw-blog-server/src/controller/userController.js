// const passport = require("passport");
const { userSvc } = require('../service');

const userCtl = {
  salt: async (req, res, next) => {
    const { userId } = req.params;
    const salt = await userSvc.getSalt(userId);
    if(salt) {
      res.status(200).send(salt);
    }
    else {
      res.status(500).send();
    }
  },

  login: async (req, res, next) => {
    const { id, pw } = req.body;
    // console.log(req.session)
    // console.log(req.isAuthenticated())
    const result = await userSvc.login(id, pw);
    if(result) {
      res.status(200).send("success");
    }
    else {
      res.status(401).send();
    }
  },

  failed: async(req, res) => {
    res.status(401).send();
  },

  list: async (req, res, next) => {
    const { userId } = req.params;
    // console.log(req.session)
    // console.log(req.isAuthenticated())
    const list = await userSvc.list(userId);
    if(list) {
      res.status(200).send(list);
    }
    else {
      res.status(500).send();
    }
  },
}

module.exports = {
  ...userCtl,
}
