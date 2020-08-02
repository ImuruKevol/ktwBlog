const { userSvc } = require('../service');

const userCtl = {
  login: async (req, res) => {
    const { id, pw } = req.body;

    res.status(200).send();
  },

  failed: async(req, res) => {
    res.status(401).send();
  },

  list: async (req, res) => {
    const { userId } = req.params;
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
