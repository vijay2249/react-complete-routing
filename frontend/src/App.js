import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewEventPage, {action as newEventAction} from './pages/NewEventPage';
import EventDetailPage, {loader as eventDetailLoader, action as eventDeleteAction} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import HomePage from './pages/HomePage';
import RootLayout from './components/RootLayout';
import EventsPage, {loader as eventsLoader} from './pages/EventsPage';
import EventsNavigation from './components/EventsNavigation';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "events",
        element: <EventsNavigation />,
        children: [
          {
            path: "", 
            loader: eventsLoader,
            element: <EventsPage />, 
          },
          {path: "new", element: <NewEventPage />, action: newEventAction},
          {
            path: ":id",
            id: "event-details",
            loader: eventDetailLoader,
            children:[
              {index: true, element: <EventDetailPage />, action: eventDeleteAction },
              {path: "edit", element: <EditEventPage />}
            ]
          },
        ]
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
