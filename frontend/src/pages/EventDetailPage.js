import { useParams } from 'react-router-dom'
import EventItem from '../components/EventItem'
import { useEffect, useState } from 'react'

export default function EventDetailPage(){
  const [eventData, setEventData] = useState({})
  const params = useParams()
  const eventId = params.id
  useEffect(()=>{
    const getEventDetails = async (eventId) =>{
      const response = await fetch(`http://127.0.0.1:8080/events/${eventId}`)
      if(!response.ok) throw new Error("Unable to fetch details about event")
      const data = await response.json()
      const new_eventData = await data.event
      setEventData(new_eventData)
    }
    try{getEventDetails(eventId)}
    catch(err) {console.warn(err.message)}
  }, [eventId])
  return(
    <EventItem event={eventData}/>
  )
}