import React, { useReducer } from "react";
import propTypes from "prop-types";
import loginReducer from "../reducers/LoginReducer";

const LoginContext = React.createContext();
const LoginDispatchContext = React.createContext();

const LoginStore = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, {
    userId: null,
  });

  return (
    <LoginContext.Provider value={{ state }}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

LoginStore.defaultProps = {
  children: {},
};

LoginStore.propTypes = {
  children: propTypes.array,
};

export { LoginContext, LoginDispatchContext, LoginStore };
