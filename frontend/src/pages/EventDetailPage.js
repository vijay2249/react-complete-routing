import { useParams } from 'react-router-dom'
import EventItem from '../components/EventItem'
import { useEffect, useState } from 'react'
import useFetchEvents from '../hooks/use-fetchEvents'

export default function EventDetailPage(){
  const [eventData, setEventData] = useState({})
  const {isLoading, error, fetchData} = useFetchEvents()
  const params = useParams()
  const eventId = params.id
  useEffect(()=>{
    const setEventdetails = data =>{
      setEventData(data.event)
    }
    fetchData(
      { url: `http://127.0.0.1:8080/events/${eventId}`},
      setEventdetails
    )
  }, [eventId, fetchData])
  return(
    <>
      <div style={{textAlign: "center"}}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      <EventItem event={eventData}/>
    </>
  )
}