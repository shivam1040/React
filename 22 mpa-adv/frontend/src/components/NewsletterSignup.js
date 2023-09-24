import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom"

function NewsletterSignup() {
    //this gives form component, submit function and bunch of other helpers
  const fetcher=useFetcher()
  //acessing the state and data during submission
  const {data, state}=fetcher

  useEffect(()=>{
    if(state==="idle" && data && data.message)
        window.alert(data.message)
  }, [data, state])

  return (
    //this is used to trigger action/loader w/o navigation/transistioning to the action/loader page which is the deafault behaviour
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
