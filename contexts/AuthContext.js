import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/async-storage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    checkUserAuth();
  }, [])

  const checkUserAuth = async () =>{
    const result = await getData('login');
    if(result !== 'true') setLoggedIn(false);
  }


  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context was used outside the context provider");
  }
  return context;
}

export { useAuthContext, AuthContextProvider };
