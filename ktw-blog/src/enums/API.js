const api = {
  USER: {
    LOGIN_SALT: (userId) => [`user/${userId}/salt`, "get"],
    LOGIN: () => ["user/login", "post"],
  },
  CATEGORY: {
    LIST: (userId) => [`user/${userId}/list`, "get"],
    //todo spread를 어떻게 뿌려줄지, 리스트 or 리니어 등등, 순서, 그 외 이것저것 설정 추가 예정
    // CONFIG: (userId) => [`user/${userId}/config`, "get"],
  },
  DOCUMENT: {
    NEW: (userId, category) => [`document/${userId}/${category}/new`, "post"],
    SAVE: (userId, category, docId) => [`document/${userId}/${category}/${docId}`, "patch"],
    LOAD: (userId, category, docId) => [`document/${userId}/${category}/${docId}`, "get"],
    DELETE: (userId, category, docId) => [`document/${userId}/${category}/${docId}`, "delete"],
  }
}

export default api;
