import React from 'react';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const modal = (props) => {
    // const classes = ['Modal', props.show === 'entering' ? 'ModalOpen' : props.show === "exiting" ? "ModalClose" : null ]
    const animationTiming ={
        enter: 400,
        exit: 1000
    }
    //passing json for timeout which respects the json of state timeouts
    // return <Transition in={props.show} mountOnEnter unmountOnExit timeout={animationTiming}>
    //     {state => { 
    //        const classes = ['Modal', state === "entering" ? 'ModalOpen' : state === "exiting" ? "ModalClose" : null] 
    //         return ( 
    //         <div className={classes.join(' ')}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>Dismiss</button>
    //     </div>
    //     )}}
    // </Transition>
    //using css transiiton one can define css styles based on state of animation, prefixed with the class name given here in classNames. Look into modal.css to see how state is mapped to css style
    return <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={animationTiming} classNames={{
        //way to specify css classes for each state
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose"
    }}>
        <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
</CSSTransition>
};

export default modal;