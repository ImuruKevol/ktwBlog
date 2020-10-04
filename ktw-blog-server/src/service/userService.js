const { query } = require('../db');

//todo change to using seqalize
/**
 * C : 
 * R : list
 * U : 
 * D : 
 */

module.exports = {
  async getSalt(userId) {
    const qs = `select salt from user where userId = ?`;
    const result = await query(qs, [userId]);
    if(result.length === 1) {
      return result[0].salt;
    }
    else {
      return null;
    }
  },

  async login(userId, pw) {
    const qs = `select count(*) as cnt from user where userId = ? and password = ?`;
    const result = await query(qs, [userId, pw]);
    if(result[0].cnt === 1) {
      return true;
    }
    else {
      return false;
    }
  },

  async list(userId) {
    const qs = `select category, docId, title, subtitle from post where userId = ?`;
    const result = await query(qs, [userId]);
    return result;
  },
}
