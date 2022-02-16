import { createContext, useContext, useEffect, useState } from 'react';


export const AuthContext = createContext();
export const AuthContextAction = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthContextProvider = ({ children }) => {

  const [state, setState] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
    setState(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [state]);

  return (
    <AuthContext.Provider value={state}>
      <AuthContextAction.Provider value={setState}>
        {children}
      </AuthContextAction.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;


export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthContextAction);
