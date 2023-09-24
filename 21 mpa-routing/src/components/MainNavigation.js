import {Link, NavLink} from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation(){
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                {/* <li><Link to="/">Home</Link></li> */}

                {/* NavLink className attrib takes function and gives properties to check if the link is active */}
                {/* end attrib ensures that this link is only active when we are on this page or current active path ends with this url 'cause by default Navlink checks if current page url starts with path given in to*/}
                <li><NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink></li>

                {/* <li><Link to="/product">Product</Link></li> */}
                <li><NavLink to="/product" className={({isActive}) => isActive ? classes.active : undefined}>Product</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation