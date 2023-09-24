import EventForm from "../components/EventForm"
import {useLoaderData, useRouteLoaderData} from "react-router-dom"

function EditEvent(){
    var data=useLoaderData()
    data=useRouteLoaderData("event-detail")
    return <EventForm method="patch" event={data.event}></EventForm>
}

export default EditEvent