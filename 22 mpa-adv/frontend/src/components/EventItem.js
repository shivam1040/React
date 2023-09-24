import classes from './EventItem.module.css';
import {Link, useSubmit} from "react-router-dom"

function EventItem({ event }) {
  //custom submit
  const submit=useSubmit()
  function startDeleteHandler() {
    // ...
    const consent=window.confirm("you sure?")
    
    if(consent)
    //this arguements can be accessed in the action of this route which is action of eventdetail
      submit(null, {method: "DELETE"})
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
