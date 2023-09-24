import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import Demo from './components/Demo/Demo'

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  console.log("RUNNING")
  //way to store a fucntion and resuse it using useCallback, now ReactMemo whenever compares currebt toggleParagraphShowHandler and new toggleParaShowHandler, they will always be new
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle)
    //this is a recommended way for doing state updation order, ensures latest state is used rather than the state when component was rendered for last time
      setShowParagraph(prev => !prev)
  }, [allowToggle])
  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      {/* notice the dom using dom tools and you would find the entire dom is not changing, only the part that should, in this case the Demo componenet is changing, so basically the componenent which goes through change gets reevaluated */}
      <Demo show={showParagraph}/>
      {/* now in this case even though the props value is fixed it does not matter if it stays the same it will still get reevaluated if the immediate parent componenet goes through change but notice that reevaluation is not equal to rerendering of DOM */}
      <Demo show={false}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      {/* if we use memo for this it does not make sense since even though toggleParagraphHandler is always same but it keeps getting generated as new whenever App function gets reevaluated, also this is not a primitive value so it is never equal to previous value*/}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
