import React from 'react'
import MyParagraph from './MyParagraph'

const Demo = props => {
    return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>
}

// this helps us to reevaluate the component only when the previous value changes
export default React.memo(Demo)