import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'
// import { useEffect, useState } from 'react'
// import useFetchEvents from '../hooks/use-fetchEvents'
// import { useParams } from 'react-router-dom'

export default function EventDetailPage(){
  // const [eventData, setEventData] = useState({})
  // const {isLoading, error, fetchData} = useFetchEvents()
  // const params = useParams()
  // const eventId = params.id
  // useEffect(()=>{
  //   const setEventdetails = data =>{
  //     setEventData(data.event)
  //   }
  //   fetchData(
  //     { url: `http://127.0.0.1:8080/events/${eventId}`},
  //     setEventdetails
  //   )
  // }, [eventId, fetchData])
  
  const eventData = useRouteLoaderData('event-details')
  if(eventData.isError){
    return(
      <p>{eventData.message}</p>
    )
  }
  
  return(
    <>
      {/* <div style={{textAlign: "center"}}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      <EventItem event={eventData.event}/>
    </>
  )
}

export async function loader({request, params}){
  const id = params.id
  const response = fetch(`http://localhost:8080/events/${id}`)
    .then(response => response)
    .catch(err => json({
      isError: true,
      message: "Unable to fetch data..."
    }))
  // const response = await fetch(`http://localhost:8080/events/${id}`)
  // await console.log("event details response.body =>", response);
  // // if(!response.ok){ throw json({ message: "Unable to fetch details" }, { status: 500 }) }
  // if(!response.ok) return {isError: true, message: "Unable to fetch data.."}
  return response
}

export async function action({params, request}){
  const id = params.id
  const response = fetch(`http://localhost:8080/events/${id}`,{
    method: request.method
  })
    .then(response => (
      redirect('/events')
    ))
    .catch(err => json({
      isError: true,
      message: "Unable to delete event data..."
    }))
  return response
}