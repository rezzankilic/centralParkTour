import {useState, useEffect, useRef} from 'react'


export const useFetch = (url, _options) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const option = useRef(_options).current

    useEffect( () => {
        console.log(option)
        const controller = new AbortController
        const fetchData = async () => {
            setIsPending(true)

            try {
                const response = await fetch(url, {signal :controller.signal})
                if(!response.ok){
                    throw new Error (response.statusText)
                }
                const json = await response.json()

                console.log(response)
                
                setIsPending(false)
                setData(json)
                setError(null)
            } catch (err) {
                if (error.name === "AbortError"){
                    console.log("the fetch was aborted")
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                    console.log(error.message)
                }
                
            }
            
        }
        fetchData()
        return ()=>{
            controller.abort()

        }

    }, [url], option) 
    return {data, isPending, error}
}

// export default useFetch