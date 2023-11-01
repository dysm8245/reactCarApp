import { useState, useEffect } from "react"
import serverCalls from "../api/server.js"

const useGetToken = () => {
    const [token, setToken] = useState(null)

    function handleGetToken(){
        const token = localStorage.getItem("token")
        setToken(token)
        location.reload
    }
    
    useEffect(() =>{
        handleGetToken()
    }, [])

    return{token, getToken:handleGetToken}
}

export default useGetToken