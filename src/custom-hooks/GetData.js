import { useState, useEffect } from "react"
import serverCalls from "../api/server.js"

const useGetData = () => {
    const [carData, setData] = useState([])

    async function handleGetData(){
        const data = await serverCalls.get()
        setData(data)
    }
    
    useEffect(() =>{
        handleGetData()
    }, [])

    return{carData, getData:handleGetData}
}

export default useGetData