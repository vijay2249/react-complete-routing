import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewEventPage from './pages/NewEventPage';
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetailPage';
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
            index: true, 
            element: <EventsPage />, 
            loader: eventsLoader
          },
          {path: "new", element: <NewEventPage />},
          {
            path: ":id",
            loader: eventDetailLoader,
            children:[
              {index: true, element: <EventDetailPage />},
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
