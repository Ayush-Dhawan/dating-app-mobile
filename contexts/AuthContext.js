import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/async-storage";
import { client } from "../utils/kindeConfig";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  async function getUserInfo(){
    const userData = await client.getUserDetails();
    setUserInfo(userData);
    console.log(userData)
  }

  useEffect(()=>{
    getUserInfo();
  }, [])


  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userInfo }}>
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
