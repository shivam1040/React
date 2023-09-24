import classes from './User.module.css';
import {Component} from 'react'

class User extends Component{

  //this gets executed everytime a compoennt is done rendering, basically at the end
  componentWillUnmount(){
    console.log("destroy")
  }

  //so basically this is what react invokes to find out what jsx to render
  render(){
    //notice how we access props in class based components
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
