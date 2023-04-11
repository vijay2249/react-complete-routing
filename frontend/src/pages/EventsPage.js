import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"

export default function EventsPage(){
  const [eventsList, setEventsList] = useState([])
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch("http://127.0.0.1:8080/events")
      if(!response.ok) throw new Error("Unable to fetch events at the moment.")
      const data = await response.json()
      setEventsList(data.events)
    }
    try{
      fetchData()
    }catch(err){
      console.warn(err.message)
    }
  }, [])


  return <EventsList events={eventsList}/>
}