import { createContext, useContext } from "react";

const authContext = createContext({
  isAuth: false,
  setIsAuth: () => {},
  setOpenWindow: () => {},
  openWindow: false,
});

authContext.displayName = "authContext";

const AuthContextConsumer = authContext.Consumer;

export { AuthContextConsumer as AuthConsumer, authContext, useAuthContext };

function useAuthContext() {
  return useContext(authContext);
}
