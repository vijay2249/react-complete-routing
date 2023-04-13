import { useEffect, useState } from "react"
import EventsList from "../components/EventsList"
import useFetchEvents from "../hooks/use-fetchEvents";

export default function EventsPage(){
  const [eventsList, setEventsList] = useState([])
  const {isLoading, error, fetchData} = useFetchEvents()
  
  useEffect(()=>{
    const getEventsDetails = data =>{
      setEventsList(data.events)
    }
    fetchData({
      url: "http://127.0.0.1:8080/events",
    },getEventsDetails)
  }, [fetchData])


  return (
    <>
      <div style={{textAlign: "center"}}>
        {isLoading && <p>Loading</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && <EventsList events={eventsList}/> }
    </>
  )
}


// -------------- OLD CONTENT
// import { useEffect, useState } from "react"
// import EventsList from "../components/EventsList"
// import useFetchEvents from "../hooks/use-fetchEvents";

// export default function EventsPage(){
//   const [isLoading, setIsLoading] = useState(false);
//   const [eventsList, setEventsList] = useState([])
//   const [error, setError] = useState(null)
  
//   useEffect(()=>{
//     const fetchData = async ()=>{
//       setIsLoading(true)
//       const response = await fetch("http://127.0.0.1:8080/events")
//       if(!response.ok) throw new Error("Unable to fetch events at the moment.")
//       const data = await response.json()
//       setEventsList(data.events)
//       setIsLoading(false)
//     }
//     try{
//       fetchData()
//     }catch(err){
//       setError(err.message || "Something went wrong. :(")
//       console.warn(err.message)
//     }
//   }, [])


//   return (
//     <>
//       <div style={{textAlign: "center"}}>
//         {isLoading && <p>Loading</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && <EventsList events={eventsList}/> }
//     </>
//   )
// }