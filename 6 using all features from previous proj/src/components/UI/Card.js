import styles from './Card.module.css'

const Card = props => {
    //making use of styles class from AddUser component. The name of attribute can be any
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
}

export default Card