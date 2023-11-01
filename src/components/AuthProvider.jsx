import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
      });
    
      useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
      }, [isLoggedIn]);
    
      const login = () => {
        setIsLoggedIn(true);
      };
    
      const signout = () => {
        setIsLoggedIn(false);
      };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useauth = () =>{
    return useContext(AuthContext)
} 

export default AuthProvider;