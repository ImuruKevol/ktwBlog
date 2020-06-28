const { docSvc } = require('../service');

const docCtl = {
  new: async (req, res) => {
    const { userId, category } = req.params;
    const { title,  content } = req.body;
    const result = await docSvc.new(userId, category, title, content);

    if(result) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  },

  save: async (req, res) => {
    const { userId, category, docId } = req.params;
    const { title, content, changedCategory } = req.body;
    let result = null;
    if(changedCategory === undefined) {
      result = await docSvc.save(userId, category, docId, title, content);
    }
    else {
      result = await docSvc.save(userId, category, docId, title, content, changedCategory);
    }

    if(result) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  },

  load: async (req, res) => {
    const { userId, category, docId } = req.params;
    const content = await docSvc.load(userId, category, docId);

    if(content) {
      res.status(200).send(content);
    }
    else {
      res.status(500).send();
    }
  },

  delete: async (req, res) => {
    const { userId, category, docId } = req.params;
    const result = await docSvc.delete(userId, category, docId);

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
