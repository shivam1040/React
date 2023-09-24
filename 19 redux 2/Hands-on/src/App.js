import { Fragment } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth=useSelector(state=>state.auth.isAuth)

  return (
    <Fragment>
      <Header></Header>
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
    <Counter />
    </Fragment>
  );
}

export default App;
