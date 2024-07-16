import { useState, useMemo, useEffect } from "react";
import { authContext } from "../contexts/authContext";
import { Auth } from "../components/templates/auth/auth";
import localforage from "localforage";

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);

  const value = useMemo(
    () => ({ isAuth, setIsAuth, setOpenWindow, openWindow }),
    [isAuth, openWindow]
  );

  useEffect(() => {
    localforage.getItem("authToken").then((token) => {
      if (token) {
        setOpenWindow(false);
        setIsAuth(token);
      }
    });
  }, []);

  return (
    <authContext.Provider value={value}>
      <Auth isOpen={openWindow} onClose={() => setOpenWindow(false)} />
      {children}
    </authContext.Provider>
  );
}
