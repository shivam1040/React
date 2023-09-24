import React from 'react';
import styled from 'styled-components'

import styles from './Button.module.css'
//using styled components to scope css styles to an elements, this generate unique style classnames bts
const Buttonx = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`

//the issue with importing css files anD APPLYINg the styles has chance of REFERRING to thw same style for multiple components that is because css files are not scoped in react rather all css files are taken as whole, so if there are two style braces with same name then there are chances of misapplying the styles
//to avoid that one can use an external library named styled-componenets which can used to scope the styles to desired elements
const Button = props => {
  return (
    // <button type={props.type} className="button" onClick={props.onClick}>
    // making use of css styled sheets to transform a css to sheets, refer abvove, and then make use of those styles by calling the identifier
      <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

//export default Buttonx;

export default Button
