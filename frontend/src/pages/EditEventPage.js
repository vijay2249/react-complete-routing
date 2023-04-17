import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

export default function EditEventPage(){
  const eventDetails = useRouteLoaderData('event-details')
  return (
   <EventForm method="PATCH" event={eventDetails.event}/> 
  )
}