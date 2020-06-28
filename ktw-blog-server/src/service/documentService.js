const { query } = require('../db');

//todo change to using seqalize
/**
 * C : new
 * R : load
 * U : save
 * D : delete
 */

module.exports = {
  async new(userId, category, title, content) {
    const qs = `insert into post (userId, category, title, content) values(?, ?, ?, ?)`;
    const result = await query(qs, [userId, category, title, content]);
    return result;
  },

  async save(userId, category, docId, title, content, changedCategory = category) {
    const qs = `update post set category = ?, title = ?, content = ? where userId = ? and category = ? and docId = ?`;
    const result = await query(qs, [changedCategory, title, content, userId, category, docId]);
    return result;
  },

  async load(userId, category, docId) {
    const qs = `select title, content from post where userId = ? and docId = ?`;
    const result = await query(qs, [userId, docId]);
    const { title, content } = result[0];
    return {title, content};
  },

  async delete(userId, category, docId) {
    const qs = `delete from post where userId = ? and category = ? and docId = ?`;
    const result = await query(qs, [userId, category, docId]);
    return result;
  }
}
