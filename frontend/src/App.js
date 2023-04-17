import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewEventPage from './pages/NewEventPage';
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import HomePage from './pages/HomePage';
import RootLayout from './components/RootLayout';
import EventsPage, {loader as eventsLoader} from './pages/EventsPage';
import EventsNavigation from './components/EventsNavigation';
import ErrorPage from './pages/ErrorPage';
import {action as eventAction} from './components/EventForm'
import NewsletterPage, {action as newsLetterAction} from './components/NewsLetter';

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
          {path: "new", element: <NewEventPage />, action: eventAction},
          {
            path: ":id",
            id: "event-details",
            loader: eventDetailLoader,
            children:[
              {index: true, element: <EventDetailPage />, action: eventAction },
              {path: "edit", element: <EditEventPage />, action: eventAction}
            ]
          },
        ]
      },
      {path: 'newsletter', element: <NewsletterPage />, action: newsLetterAction}
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
