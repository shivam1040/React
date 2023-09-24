import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  //   if (storedUserLoggedInInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  // return (
  //   <React.Fragment>
      
  //     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
  //     <main>
  //       {!isLoggedIn && <Login onLogin={loginHandler} />}
  //       {isLoggedIn && <Home onLogout={logoutHandler} />}
  //     </main>
  //     </AuthContext.Provider>
  //   </React.Fragment>
  // );

  // return (

  //   <AuthContext.Provider
  //     value={{
  //       isLoggedIn: isLoggedIn,
  //       // we can also pass functions like this and use this in navigation component instead of accessing through props
  //       onLogOut: logoutHandler
  //     }}
  //   >
  //     {/* above will give Provider component to all the componenets wrapped by this including all descendants componenet will have access to the context of auth context */}
  //     {/* also providing values which can be consumer by wrapped components */}
  //     <MainHeader onLogout={logoutHandler} />
  //     <main>
  //       {!isLoggedIn && <Login onLogin={loginHandler} />}
  //       {isLoggedIn && <Home onLogout={logoutHandler} />}
  //     </main>
  //   </AuthContext.Provider>
  // )

  //below is an example of moving auth to a sperate component, passing it globally in index.js by making use of React context feature
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
  )
}

export default App;
