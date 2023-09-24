import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from 'next/router'

function MeetupItem(props) {
  const router = useRouter()
  //routing programatically
  function showDetailsHandler(){
    //this pushes a new page to the stack of pages
    router.push('/'+props.id)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
