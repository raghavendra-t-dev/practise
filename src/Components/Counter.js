import { useEffect, useState } from "react"



const Counter =()=>{
    let signal =["Red","Orange","Green"]
    const [index,setIndex] = useState(0)
    const [time,setTime] = useState(3)
    const [timerCount,setTimer]= useState(time)

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(index+1!==signal.length){
                setIndex((prev)=>prev+1)
            }
            else{
                setIndex(0)
            }
        },3000)

        const watch =setInterval(()=>{
            if(timerCount==0){
                setTimer(time)

            }
            else{
                setTimer((prev)=>prev-1)
            }

        },1000)

         return()=> {
            clearInterval(timer)
            clearInterval(watch)
         }
        

    },[signal,time])


    const [data,setData] = useState(0)
    return(
        <div>
            <h1>Counter App</h1>
            <p>{signal[index]}</p>
            <p>{timerCount}</p>
            <button onClick={()=>setData((prev)=>prev+1)}>Increment</button>
            <button>decrement</button>
            <p>{data}</p>
        </div>
    )
}
export default Counter
























// const Counter =()=>{
//     const [state,setState] = useState(0)
//     const handleInc =()=>{
// setState((prev)=>prev+1)
//     }
//     return(
//         <div>
//             <h1>Counter</h1>
//             <h1>{state}</h1>
//             <button onClick={handleInc}>Increment</button>
//             <button onClick={()=>setState((prev)=>prev-1)}>decrement</button>
//         </div>
//     )
// }
// export default Counter