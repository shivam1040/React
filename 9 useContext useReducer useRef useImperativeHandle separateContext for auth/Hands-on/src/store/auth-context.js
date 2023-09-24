import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  //doing this the react nd ide will know about existence of some default context items, purely optional
  onLogout: () => {},
  onLogin: (email, password) => {}
});

//here we have moved auth  logic from app to separtate componwnent which can be passed to all the compomenents by wrapping App componennt sinside AuthCOntextProvider, check index.js
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }
    // this props.children takes care of passing the app component to authcontext passed in index.jjs
    return (<AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>)
}

export default AuthContext;