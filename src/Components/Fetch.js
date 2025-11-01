import { useEffect, useState } from "react"
import useFetch from "./useFetch"
const FetchData = ()=>{
    const [input,setInput] = useState('')
    const {data ,state,increment} = useFetch("https://dummyjson.com/products")


    console.log(data);

     
    
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={increment}>Increment</button>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.filter((each)=>each.title.toLowerCase().includes(input.toLowerCase())).map((each)=>(
                             <tr >
                            
                                <td>{each.id}</td>
                                <td>{each.title}</td>
                                <td>{each.category}</td>
                        
                             </tr>
                        ))
                    }
                    <td>

                    </td>
                    
                </tbody>
            </table>
        </div>
    )

}

export default FetchData