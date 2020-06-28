const api = {
  DOCUMENT: {
    NEW: (userId, category) => [`document/${userId}/${category}/new`, 'post'],
    SAVE: (userId, category, docId) => [`document/${userId}/${category}/${docId}`, 'patch'],
    LOAD: (userId, category, docId) => [`document/${userId}/${category}/${docId}`, 'get'],
    DELETE: (userId, category, docId) => [`document/${userId}/${category}/${docId}`, 'delete'],
  }
}

export default api;
