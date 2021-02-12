const { query } = require('../db');

//todo change to using seqalize
/**
 * C : new
 * R : load
 * U : save
 * D : delete
 */

module.exports = {
  // todo sequence 만들어서 그걸로 하기
  async new(userId, category, title, content) {
    const parsedContent = JSON.parse(content);
    const subtitle = parsedContent.length >= 2 ?
                    `${parsedContent[0].text} ${parsedContent[1].text}`
                    :
                    `${parsedContent[0].text}`;
    const qs = `insert into post (userId, category, docId, title, subtitle, content)
                  values(
                    ?,
                    ?, 
                    (select maxDocId from (select ifnull(max(docId) + 1, 1) maxDocId from post where userId = ? and category = ?) tmp), 
                    ?, 
                    ?, 
                    ?)`;
    const result = await query(qs, [userId, category, userId, category, title, subtitle, content]);
    return result;
  },

  async save(userId, category, docId, title, content, changedCategory = category) {
    const parsedContent = JSON.parse(content);
    const subtitle = parsedContent.length >= 2 ?
                    `${parsedContent[0].text} ${parsedContent[1].text}`
                    :
                    `${parsedContent[0].text}`;
    const qs = `update post set category = ?, title = ?, subtitle = ?, content = ? where userId = ? and category = ? and docId = ?`;
    const result = await query(qs, [changedCategory, title, subtitle, content, userId, category, docId]);
    return result;
  },

  async load(userId, category, docId) {
    const qs = `select title, content from post where userId = ? and category = ? and docId = ?`;
    const result = await query(qs, [userId, category, docId]);
    return result[0];
  },

  async delete(userId, category, docId) {
    const qs = `delete from post where userId = ? and category = ? and docId = ?`;
    const result = await query(qs, [userId, category, docId]);
    return result;
  }
}
