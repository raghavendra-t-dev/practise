import { useState } from "react"

const Form =()=>{
    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [formData,setFormData] = useState([])

    const handleSubmit=(e)=>{
        e.preventDefault();
        const obj ={
            firstName:first,
            lastName:last,
            id:Date.now()
        }
        setFormData((prev)=>[...prev,obj])
        setFirst('')
        setLast('')
        console.log("working",formData)
    }


    return(
        <div>
            <h1>From Component</h1>
            <form onSubmit ={handleSubmit}>
            <input id="first" type="text" onChange={(e)=>setFirst(e.target.value)}/>
            <label htmlFor="first">First Name</label>
            <input type="text" onChange={(e)=>setLast(e.target.value)}/>
            <label>Last Name</label>
            <button>Save</button>
            </form>
        </div>
    )

}

export default Form