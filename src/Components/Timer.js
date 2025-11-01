import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"

const Timer =()=>{
    const[timer,setTimer] = useState(8)
    const [start,setStart] = useState(false)
    const {store,setStore} = useContext(AppContext)

    useEffect(()=>{
        let timer
        if(start){
      timer = setInterval(()=>{
            setTimer((prev)=>prev-1)
        },1000)
        }
   

        return(()=>clearInterval(timer))
    },[start])

    return(
        <div>
            <p>{timer}</p>
            <h1>Work Timer</h1>
            <p>{store.name}</p>
            <button onClick={()=>setStart((prev)=>!prev)}>Start</button>
              <button onClick={()=>setStart(false)}>pause</button>
                <button>Restart</button>
        </div>
    )

}
export default Timer