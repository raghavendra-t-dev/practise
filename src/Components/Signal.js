import { useEffect, useState } from "react"

 const Signal =()=>{
    const list= ["Red","Orange","Green"]
    const [index,setIndex] = useState(0);


    useEffect(()=>{
        const timer = setInterval(()=>{
        if(index!==list.length-1){
            setIndex(prev=>prev+1)
        }
        else{
            setIndex(0)

        }

        },2000)

        return(()=>clearInterval(timer))


    },[])

    return (
        <div>
            <h1>{list[index]}</h1>
            <h1>Signal</h1>
        </div>
    )

 }

 export default Signal