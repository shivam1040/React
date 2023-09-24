import classes from './Counter.module.css';
// this hook allows us to select a part of the redux store
//dispactch hook returns a fucntion which can be used to pass action to the reducer function of this redux store
//connect is used mostly for class based componenets so that they can use the redux-store
import {useSelector, useDispatch, connect} from "react-redux"
import { Component } from 'react';
import { counterActions } from '../store';

const Counter = () => { 
  // so this hook useSelector extracts counter value out of the redux store and also subscribes to it so any changes in this part of the store will also be reflected here
  // just in case this component is gone then redux will manage the cleanup
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state =>  state.counter.showCounter)
  const dispatch = useDispatch();
  const incrementHandler = () => {
    // dispatch({
    //   type: "INCREMENT"
    // })
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    // dispatch({
    //   type: "INCREMENT",
    //   value: 5
    // })
    //this param 10 gets mapped to payload key of action in the reducer finction
    dispatch(counterActions.inrease(5))
  }
  const decrementHandler = () => {
    // dispatch({
    //   type: "DECREMENT"
    // })
    //way to dispactch action on reducer functions when using reduc-toolkit
    dispatch(counterActions.decrement())
  }
  const toggleHandler = () => {
    // dispatch({
    //   type: "TOGGLE"
    // })
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

//using redux-store for class based componenet
// class Counter extends Component {

//   incrementHandler () {
//     //this fucntion comes from prop function we created below in dispatchtoprop
//     this.props.increment()
//   }

//   decrementHandler () {
//     this.props.decrement()
//   }

//   toggleCounterHandler () {

//   }

//   render() {
//     return (
//     <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     {/* comes from state prop we created below in stateToPRop */}
//     <div className={classes.value}>{this.props.counter}</div>
//     <div>
//       <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//       <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//     </div>
//     <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//   </main>
//     )
//   } 
// }

// //this is similar to what we do in functinal components to access a part of the redux state
// const mapStateToPRops = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProp = dispatch => {
//   return {
//     //increment is a prop which has dispactch function for tyep increment
//     increment: () => dispatch({
//       type: "INCREMENT"
//     }),
//     decrement: () => dispatch({
//       type: "DECREMENT"
//     })
//   }
// }
export default Counter;
//this is how we export the class based componenets which use redux store, we create state extracting and dispactching fucntions and pass it 
// export default connect(mapStateToPRops, mapDispatchToProp)(Counter)
