// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home";
import Events, { eventLoader } from "./pages/Events";
import EventDetail, { deleteAction, eventDetailLoader } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoute from "./pages/EventsRoute";
import Error from "./pages/Error";
import { submitAction } from "./components/EventForm";
import NewsletterPage, { signupAction } from "./pages/Newsletter";

// const router=createBrowserRouter([
//   {path: "/", element: <Root></Root>, errorElement: <Error></Error>, children: [
//   {path: "", element: <Home></Home>, index: true},
//   {path: "events", element: <EventsRoute></EventsRoute>, children: [
//     //this loader function is used to execute a method before loading the path
//     //react router ensures the returnned value of this function is available to the element of this path and all the elements belonging in source code of this element
//     {index: true, path: "", element: <Events></Events>, loader: eventLoader},
//     {path:"eventId", id: "event-id",loader: eventDetailLoader, children:[
//        {path: "", index: true, element: <EventDetail></EventDetail>},
//   {path: "edit", element: <EditEvent></EditEvent>}
//     ]},
//     {path: "new", element: <NewEvent></NewEvent>}
//   ]}
//   ]
// }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRoute />,
        children: [
          {
         //this loader function is used to execute a method before loading the path
//react router ensures the returnned value of this function is available to the element of this path and all the elements belonging in source code of this element
            index: true,
            element: <Events />,
            loader: eventLoader,
          },
          {
            path: ':eventId',
            //gives us way to use this loader in child componenents
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteAction
              },
              { path: 'edit', element: <EditEvent />, action: submitAction},
            ],
          },
          { path: 'new', element: <NewEvent />, action: submitAction},
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: signupAction,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
