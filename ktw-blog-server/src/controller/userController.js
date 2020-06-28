const { userSvc } = require('../service');

const userCtl = {
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
