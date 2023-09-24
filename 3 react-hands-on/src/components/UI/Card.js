import './Card.css'
function Card(props) {
    //this ensures all the classnames are appended and applied
    const classes='card '+props.className
    return <div className={classes}>{props.children}</div>
    //here children is a reserved keyword which basically denotes to all the jsx code/component being passed as prop, refer to items inside card block in expense item
}

export default Card