import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from 'react-transition-group/Transition'

class App extends Component {
  state = {
    modalIsOpen : false,
    showBlock : false
  }
  showModal = () => {
    this.setState({modalIsOpen : true})
  }
  closeModal = () => {
    this.setState({modalIsOpen :  false})
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(p => ({showBlock: !p.showBlock}))}>Toggle</button>
        <br></br>
        {/* this compoenent comes from react-transisiton animation library */}
        {/* mount unmount to add or remove this from dom after timeout*/}
        {/* in case the timeout is more or less than what is defined in css then animation runs only until timeout */}
        {/* way to defined call back funcs which run during the entering, exitiing etc. events , useful to create back to back animations*/}
        <Transition onEnter={() => console.log("callabck func enter")} onEntered={() => console.log('entered call back')} in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
          {state => <div style={{backgroundColor: "red", width: 100, height: 100, margin : "auto", transition: "opacity 1s ease-out" ,opacity : state === "exiting" ? 0 :1}}></div>}
          {/* <div style={{backgroundColor: "red", width: 100, height: 100, margin : "auto"}}></div> */}
        </Transition>
          <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
        {this.state.modalIsOpen ? <Backdrop show/> : null}
        <button className="Button" onClick={this.showModal} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
