import { useEffect, useState } from "react"


const useFetch=(url)=>{
        const [data,setData] = useState([])
        const [state,setState] = useState(0)
        
        useEffect(()=>{
            const fetchData = async()=>{
                try{
                const data = await fetch(url)
                const response = await data.json()
                setData(response.products)
                }
                catch(err){
                    console.log(err)
                }
    
    
            }
            fetchData()
    
        },[])

        const increment =()=>{
            setState((prev)=>prev+1)

        }

        return {data,increment,state}

}

export default useFetch