import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { useHistory } from "react-router-dom";
function AuthcontextProvider(props) {

  const [token, setToken] = useState(localStorage.getItem("token"));

  const history = useHistory();
  const updateTheToken = (receviedToken) => {
    setToken(receviedToken);
  };
  const isLoggedIn = token !== null ;

  const logoutHandler = () => {
    setToken(null);
    history.replace({pathname: '/auth'});
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    
  
  };
  return (
    <AuthContext.Provider
      value={{ token, updateTheToken, isLoggedIn, logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthcontextProvider;
