import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom"

function EventsRoute(){
    return <>
        <EventsNavigation></EventsNavigation>
        <Outlet></Outlet>
    </>
}

export default EventsRoute