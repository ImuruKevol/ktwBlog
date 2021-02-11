const LOGIN_ACTION = {
  LOGIN: "login/login",
  LOGOUT: "login/logout",
};

const loginActionCreator = {
  login: (userId) => {
    return {
      type: LOGIN_ACTION.LOGIN,
      userId,
    }
  },

  logout: () => {
    return {
      type: LOGIN_ACTION.LOGOUT,
    }
  },
};

export { LOGIN_ACTION, loginActionCreator };
