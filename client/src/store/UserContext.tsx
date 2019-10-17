import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props: any) => {
  const [isAuth, setAuth] = useState(false);

  const defaultValue = {
    isAuth,
    setAuth,
  };

  return <UserContext.Provider value={defaultValue} {...props} />;
};
