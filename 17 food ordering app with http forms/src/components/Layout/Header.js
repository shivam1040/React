import {Fragment} from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            {/* passed onShowCart from App.js */}
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        {/* this is how we use css styles class if the name has dash in it */}
        <div className={classes['main-image']}>
            {/* way to include image locally */}
            <img src={mealsImage} alt="Food"/>
        </div>
        </Fragment>
}

export default Header