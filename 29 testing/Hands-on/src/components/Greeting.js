import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
    const [changed, setChanged] = useState(false)
    const changeTextHandler = () => {
        setChanged(true)
    }

    return <div>
        Hello
        {!changed && <Output>Bye</Output>}
        {changed && <Output>Nice</Output>}
        <button onClick={changeTextHandler}>Change</button>
    </div>
}

export default Greeting