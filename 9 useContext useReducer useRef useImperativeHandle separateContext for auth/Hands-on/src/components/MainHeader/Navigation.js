import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  const ctx1=useContext(AuthContext)
  // return (
  //   <AuthContext.Consumer>
  //     {(ctx) => {
  //       return (
  //         <nav className={classes.nav}>
  //         <ul>
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <a href="/">Users</a>
  //             </li>
  //           )}
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <a href="/">Admin</a>
  //             </li>
  //           )}
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <button onClick={props.onLogout}>Logout</button>
  //             </li>
  //           )}
  //         </ul>
  //       </nav>
  //       )
  //     }}
  //     {/* above is the way to consume from providided context and then return element according to the consumer property, notice how isLoggedIN is provided in App.js,  */}
  //   {/* <nav className={classes.nav}>
  //     <ul>
  //       {props.isLoggedIn && (
  //         <li>
  //           <a href="/">Users</a>
  //         </li>
  //       )}
  //       {props.isLoggedIn && (
  //         <li>
  //           <a href="/">Admin</a>
  //         </li>
  //       )}
  //       {props.isLoggedIn && (
  //         <li>
  //           <button onClick={props.onLogout}>Logout</button>
  //         </li>
  //       )}
  //     </ul>
  //   </nav> */}
  //   </AuthContext.Consumer>
  // );

  //below makes use of react useContext hook to get rid of bulky code for consuming
  return (
    <nav className={classes.nav}>
    <ul>
      {ctx1.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {ctx1.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
      {ctx1.isLoggedIn && (
        <li>
          {/* ctx1.onLogout, can also call this insted of onLogout on props */}
          {/* <button onClick={props.onLogout}>Logout</button> */}
          <button onClick={ctx1.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>
  )
};

export default Navigation;
