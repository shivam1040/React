import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component{

  constructor(){
    super()
    //way to use state in class based components, and in such componrents state is slways obj unlike funtion based component where it can be boolean number etc.
    //now in this method, react merges state but in function based state is overrideen
    this.state = {
      showUsers: true
    }
  }

  componentDidUpdate(){
    if(this.props.users.length === 0)
      throw new Error("Ille")
  }

  // way to thow error, this can be also handled with try/catch
  // throw new Error("")

  toggleUsersHandler(){
    //way to set/update state
    // this.setState({
    //   showUsers: false
    // })
    this.setState(curState => {
      return {showUsers: !curState.showUsers}
    })
  }

  render(){

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* now this bind is used to attach the current this to the method so whereever it is called it is pointing to this of the current surrounding class
        also it helps to attach the this used here to this being used in toggleUsersHandler */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
