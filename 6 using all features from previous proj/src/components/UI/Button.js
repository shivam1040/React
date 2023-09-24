import styles from './Button.module.css'

const Button = props =>{
    //use button as type if props.type is undefined
    //props.children access the child content from the props passed from where Button comp. is called. in this case caller is AddUser and child is Add User string
    return <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
}

export default Button