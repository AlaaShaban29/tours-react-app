import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
const ContextData=createContext([])
export function ContextDataProvider({children}) {
    const url = 'https://course-api.com/react-tours-project'
const [tours, setTours] = useState([])
const [loading, setLoading] = useState(true)

async function getTours(){
    setLoading(true)
try{
    let {data}=await axios.get(url)
    setLoading(false)
    setTours(data)

}
catch(error){
    setLoading(false)
console.log(error) 
}
}
    return (
        <>
          <ContextData.Provider value={{getTours,tours,setTours,loading}}>
              
              
              {children}
              
              </ContextData.Provider>  
        </>
    )
}
function useGlobalContext(){
    return useContext(ContextData)
}
export default useGlobalContext
