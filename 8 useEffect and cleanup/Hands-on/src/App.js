import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //issue with this approach is that whenever the state is changed this componenet is function is reloaded again and then again comes to this line which creates an infinite loop
  /*
  if(storedUserLoggedInInformation === "1")
    setIsLoggedIn(true)
  */

  //second arguement [] is array of dependencies, this function runs only after all component reevaluation
  // this runs only when the array dependencies change, so basically in this case it would run only once since it doesnt chnage
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn")
    if(storedUserLoggedInInformation === "1")
      setIsLoggedIn(true)
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
