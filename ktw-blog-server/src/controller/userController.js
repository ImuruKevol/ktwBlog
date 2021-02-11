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
