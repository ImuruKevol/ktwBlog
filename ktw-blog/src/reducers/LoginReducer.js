import createDebug from "debug";
import { LOGIN_ACTION } from "../actions/LoginAction";
import { logout } from "../utils/Request";

const debug = createDebug("boost:reducer:login");

const loginReducerHandler = {
  [LOGIN_ACTION.LOGIN]: (state, action) => {
    const { userId } = action;
    debug("login success", userId);
    return {
      ...state,
      userId,
    }
  },

  [LOGIN_ACTION.LOGOUT]: (state) => {
    const { userId } = state;
    debug("logout", userId);
    logout(userId);
    return {
      ...state,
      userId: null,
    }
  },
};

const loginReducer = (state, action) => {
  const handler = loginReducerHandler[action.type];
  if (handler === undefined) {
    return state;
  }

  return handler(state, action);
};

export default loginReducer;
