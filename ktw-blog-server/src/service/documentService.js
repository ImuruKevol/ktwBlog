const { query } = require('../db');

//todo change to using seqalize
/**
 * C : new
 * R : load
 * U : save
 * D : delete
 */

//todo method test - result format

//todo create post table
/**
 * id - auto
 * userId
 * docId - function
 * content
 * createby - auto
 * updateby - auto
 */

module.exports = {
  async new(userId, content) {
    const qs = `insert into post (userId, content) values(?, ?)`;
    const result = await query(qs, [userId, content]);
    return result;
  },

  async save(userId, docId, content) {
    const qs = `update post set content = ? where userId = ? and docId = ?`;
    const result = await query(qs, [content, userId, docId]);
    return result;
  },

  async load(userId, docId) {
    const qs = `select content from post where userId = ? and docId = ?`;
    const result = await query(qs, [userId, docId]);
    const { content } = result[0];
    return content;
  },

  async delete(userId, docId) {
    const qs = `delete from post where userId = ? and docId = ?`;
    const result = await query(qs, [userId, docId]);
    return result;
  }
}
