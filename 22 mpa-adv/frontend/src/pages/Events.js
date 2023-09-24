import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    //way to use the data returned by the function eecuted by loader for this path in app.js
    //react takes care of extracting body from the received response
    const data=useLoaderData()

    //use this when you not want to use defer
//if any other or system runtime error occurs then it goes to the defined erroreleemtn in route spectification or deffault error page
  //   if(data.isError)
  //       return <p>{data.message}</p>

  // return (
  //   <>
  //     <EventsList events={data.events} />
  //   </>
  // );
  return (
    //the actual component which we wanna fallback to while required compoenennt is loading
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
      {/* await compnent waits for promise to fail or resolve which is returened from defer */}
  <Await resolve={data.events}>
    {events=> <EventsList events={events}></EventsList>}
  </Await>
  </Suspense>
  )
}

//ensure that any react specific features should not be used inside loader function as they are not treated as react entitiies but any browser related feature will work
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

export default EventsPage;
//this defer is used to display a componenent while a required componenent is loading like in data fetching
export function eventLoader(){
  return defer({
    //passing the function which loads data
    events: eventLoader1()
  })
}

//use this when you not want to use defer
// export async function eventLoader1(){
//   const response = await fetch('http://localhost:8080/events');
//   //console.log(response.isError)
//     if (!response.ok) {
//       //return {isError: true, message: "Error"}
//       throw new Response(JSON.stringify({msg: "error"}), {status: 500})
//       //one can use this helper function from react-router to help with the function above, it does automatic json parsing
//       //json()
//     } else {
//       const resData = await response.json();
//       return resData.events
//     }
// }