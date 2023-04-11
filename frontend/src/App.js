import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewEventPage from './pages/NewEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import HomePage from './pages/HomePage';
import RootLayout from './components/RootLayout';
import EventsPage from './pages/EventsPage';
import EventsNavigation from './components/EventsNavigation';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "events",
        element: <EventsNavigation />,
        children: [
          {index: true, element: <EventsPage />},
          {path: "new", element: <NewEventPage />},
          {path: ":id", element: <EventDetailPage />},
          {path: ":id/edit", element: <EditEventPage />}
        ]
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
