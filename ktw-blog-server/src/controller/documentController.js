const { docSvc } = require('../service');

const docCtl = {
  new: async (req, res) => {
    const { userId } = req.params;
    const { content } = req.body;
    const result = docSvc.new(userId, content);

    if(result) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  },

  save: async (req, res) => {
    const { userId, docId } = req.params;
    const { content } = req.body;
    const result = docSvc.save(userId, docId, content);

    if(result) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  },

  load: async (req, res) => {
    const { userId, docId } = req.params;
    const result = docSvc.load(userId, docId);

    if(result) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  },

  delete: async (req, res) => {
    const { userId, docId } = req.params;
    const result = docSvc.delete(userId, docId);

    if(result) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  },
}

module.exports = {
  ...docCtl,
}
