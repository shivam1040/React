import {json, useLoaderData, useRouteLoaderData, redirect, defer, Await} from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList"
import { Suspense } from "react"

function EventDetail(){
    var data=useLoaderData()
    //using this here since react gets data from last route defined which is closest to this, in our case that is not the case, hence getting it from parent loader by means of id
    data=useRouteLoaderData("event-detail")
    //use this when not using defer
    // return<>
    //     <EventItem event={data.event}></EventItem>
    // </>
    return <>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
        <Await resolve={data.event}>
            {e => <EventItem event={e}></EventItem>}
        </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
        <Await resolve={data.events}>
            {e=> <EventsList events={e}></EventsList>}
        </Await>
        </Suspense>
    </>
}

async function loadEvent(id){
    const response=await fetch("http://localhost:8080/events/"+id)
    if(!response.ok)
        throw json({message: "Couldn't fetch"}, {status:500})
    const resData=await response.json()
    return resData.event
}
async function eventLoader1(){
    const response = await fetch('http://localhost:8080/events');
    //console.log(response.isError)
      if (!response.ok) {
        //return {isError: true, message: "Error"}
        throw new Response(JSON.stringify({msg: "error"}), {status: 500})
        //one can use this helper function from react-router to help with the function above, it does automatic json parsing
        //json()
      } else {
        const resData = await response.json();
        return resData.events
      }
  }

export default EventDetail
export async function eventDetailLoader({request, params}){

    return defer({
        //this await ensures that this data is loaded first
        event: await loadEvent(params.eventId),
        events: eventLoader1()
    })
}
//use this if you don't wanna use defer
//this request, params is destructiing of request and url param whenever this loade is callled
// export async function eventDetailLoader({request, params}){
//     const response=await fetch("http://localhost:8080/events/"+params.eventId)
//     if(!response.ok)
//         throw json({message: "Couldn't fetch"}, {status:500})
//     return response
// }
export async function deleteAction({request, params}){
    const response = await fetch("http://localhost:8080/events/"+params.eventId, {
        method: request.method
    })

    if(!response.ok)
    throw json({message: "Couldn't deletet"}, {status:500})
    return redirect("/events")   
}