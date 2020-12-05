const api = {
  USER: {
    LOGIN_SALT: (userId) => [`api/user/${userId}/salt`, "get"],
    LOGIN: () => ["api/user/login", "post"],
    VERIFY: () => ["api/user/verify", "get"],
  },
  CATEGORY: {
    LIST: (userId) => [`api/user/${userId}/list`, "get"],
    //todo spread를 어떻게 뿌려줄지, 리스트 or 리니어 등등, 순서, 그 외 이것저것 설정 추가 예정
    // CONFIG: (userId) => [`user/${userId}/config`, "get"],
  },
  DOCUMENT: {
    NEW: (userId, category) => [`api/document/${userId}/${category}/new`, "post"],
    SAVE: (userId, category, docId) => [`api/document/${userId}/${category}/${docId}`, "patch"],
    LOAD: (userId, category, docId) => [`api/document/${userId}/${category}/${docId}`, "get"],
    DELETE: (userId, category, docId) => [`api/document/${userId}/${category}/${docId}`, "delete"],
  }
}

export default api;
