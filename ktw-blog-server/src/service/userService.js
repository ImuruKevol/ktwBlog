const { query } = require('../db');

//todo change to using seqalize
/**
 * C : 
 * R : list
 * U : 
 * D : 
 */

module.exports = {
  async list(userId) {
    const qs = `select category, docId, title, subtitle from post where userId = ?`;
    const result = await query(qs, [userId]);
    return result;
  },
}
