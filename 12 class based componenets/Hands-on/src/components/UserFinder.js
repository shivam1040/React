import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component{
    //remember that in class based componenent there can be only one context
    static contextType = UsersContext
    constructor(){
        super()
        this.state={
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount(){
        // this method takes care of creating obj only once, in case of avoiding fetching data from server
        //equivalent to useEffecr(() => {}, [someDep]), since useEffect initailly gets rendered no mateter what
        this.setState({
            filteredUsers: this.context.users
        })
    }

    //replacement of useEffect with values in class based componenet
    componentDidUpdate(prevProps, prevState){
        //we do conditional uopdate to avoid infinite calls of this method 'cause everytime chage happens in the USerFinder componenet then this method gets execute
        if(prevState.searchTerm !== this.state.searchTerm)
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
    }

    searchChangeHandler(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return (
            <Fragment>
              <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              </div>
              {/* //way to use common error boundary/class in render blocks which can throw error */}
              <ErrorBoundary>
                <Users users={this.state.filteredUsers} />
              </ErrorBoundary>
            </Fragment>
          )
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;