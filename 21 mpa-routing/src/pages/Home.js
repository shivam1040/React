import {Link, useNavigate} from "react-router-dom"

function HomePage(){
    const navigagte = useNavigate()
    //way to route programatically
    const navigateHandler=()=>{
        navigagte("/product")
    }

    return <>
    <h1>Home Page</h1>
    <p>
        {/* recommended way of navigating instead of sending request to server for getting the new page
        doing so 'cause  all the js code for this website has already been loaded so there's no point in getting them from server again */}
        <Link to="/product">Product</Link>
    </p>
    <p>
        <button onClick={navigateHandler}>Navigate</button>
    </p>
    </>
}

export default HomePage
