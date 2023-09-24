import EventForm from "../components/EventForm"
import {json, redirect } from 'react-router-dom';

function NewEvent(){
    return <EventForm method="post"></EventForm>
}

export default NewEvent
