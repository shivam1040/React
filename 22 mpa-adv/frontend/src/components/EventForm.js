import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  //this hook can get us the data that was submitted, current state of the active transition  like moving from one route to anpother or from submission, so in the form sense here it measns baascially if the action fucntion is completred
  const navigation=useNavigation()
  const isSubmitting=navigation.state==="submitting"
  //gives use access to the closest a tion data/response, similar to loader
  const data=useActionData()
  function cancelHandler() {
    navigate('..');
  }

  return (
    // <form className={classes.form}>
    //using react-router form, ensures preventdefault on submit is applied automatically. this also gives the request to the action funct defined in eventform.js through action attrib of route defined in app.js not to backend direclty
    //in case you want to trigger action function of a spectific route then just define route in action attrib of this tag
    <Form method={method} className={classes.form}>
      {data && data.errors && <ul>
        {/* js method to iterate through keys of error obj */}
        {Object.values(data.errors).map(e=><li key={e}>{e}</li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title:""}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image:""}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date:""}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description:""}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? "SUBMITTING" : "Save"}</button>
      </div>
    {/* </form> */}
    </Form>
  );
}

export default EventForm
export async function submitAction({request, params}){
  const method=request.method
  //this gives the form data that needs to be sumbimmted
  const data=await request.formData()
  //this titile is basically the name of the title  input field in event form and similarly we can acess other input field as well
  const eventData={
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description")
  }
  let url="http://localhost:8080/events"
  if(method==="PATCH")
    url="http://localhost:8080/events/"+params.eventId

  const response = await fetch(url, {
      method: method,
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
  })
  if(response.status===422)
      return response
  if(!response.ok)
      throw json({message: "Couldn't post"}, {status: 500})
      //this way of response is used to redirect to a page relative to root path after this action is sucessful
  return redirect("/events")
}
