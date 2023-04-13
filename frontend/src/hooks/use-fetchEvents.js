import { useCallback, useState } from "react"

const useFetchEvents = () =>{
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchData = useCallback(async (config, doSomething) =>{
    setIsLoading(true)
    setError(null)
    try{
      const response = await fetch(config.url,{
        method: config.method || "GET",
        headers: config.headers || {},
        body: config.body? JSON.stringify(config.body) : null
      })
      if(!response.ok) throw new Error("Failed to fetch event(s) data")
      const data = await response.json()
      doSomething(data)
    }catch(err){
      setError(err.message || "Failed to fetch data.. Try Again")
    }
    setIsLoading(false)
    
  }, [])

  return {isLoading, error, fetchData}
}

export default useFetchEvents