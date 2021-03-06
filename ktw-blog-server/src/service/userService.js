const { query } = require('../db');
const { createSalt, encrypt } = require("../middle/authentification");

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

  async register(userId, pw) {
    const duplCheckQuery = `select count(*) as cnt from user where userId = ?`;
    const isDupl = await query(duplCheckQuery, [userId]);
    if(isDupl[0].cnt === 1) {
      return false;
    }
    const salt = await createSalt();
    const encryptPW = await encrypt(pw, salt);
    const qs = `insert into user (userId, password, salt) values(?, ?, ?)`;
    const result = await query(qs, [userId, encryptPW, salt]);
    return result;
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

  async logout(userId) {
    const qs = `update user set accessToken = null where userId = ?`;
    const result = await query(qs, [userId]);
    return result[0];
  },

  async checkAccessToken(userId, accessToken) {
    const qs = `select accessToken from user where userId = ?`;
    const result = await query(qs, [userId]);
    if(result.length === 1 && result[0].accessToken === accessToken) {
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
