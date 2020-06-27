const api = {
  DOCUMENT: {
    NEW: (userId) => [`document/${userId}/new`, 'post'],
    SAVE: (userId, docId) => [`document/${userId}/${docId}`, 'patch'],
    LOAD: (userId, docId) => [`document/${userId}/${docId}`, 'get'],
    DELETE: (userId, docId) => [`document/${userId}/${docId}`, 'delete'],
  }
}

export default api;
