import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();
export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token')) // on load check localStorage for token
  
  useEffect(() => {
    if(!isAuthenticated || !token) return;  //Authentication Token check?! no token - do nothing (Toni)
  }, [isAuthenticated, token]);

  const loginAction = async (data) => {
    try {
      const response = await fetch("http://localhost:4001/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      //console.log(res);
      if (response.ok) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem("token", res.token);
        setIsAuthenticated(true);
        console.log("success");
        return;
      } else {
        localStorage.removeItem("token");
        alert(res.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
