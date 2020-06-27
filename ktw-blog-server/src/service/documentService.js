const { query } = require('../db');

//todo change to using seqalize
/**
 * C : new
 * R : load
 * U : save
 * D : delete
 */

//todo method test - result format

module.exports = {
  async new(userId, title, content) {
    const qs = `insert into post (userId, title, content) values(?, ?, ?)`;
    const result = await query(qs, [userId, title, content]);
    return result;
  },

  async save(userId, docId, title, content) {
    const qs = `update post set title = ?, content = ? where userId = ? and docId = ?`;
    const result = await query(qs, [title, content, userId, docId]);
    return result;
  },

  async load(userId, docId) {
    const qs = `select title, content from post where userId = ? and docId = ?`;
    const result = await query(qs, [userId, docId]);
    const { title, content } = result[0];
    return {title, content};
  },

  async delete(userId, docId) {
    const qs = `delete from post where userId = ? and docId = ?`;
    const result = await query(qs, [userId, docId]);
    return result;
  }
}
