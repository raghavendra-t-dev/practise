// //practise Hooks 
// Todo App → Add, delete, mark items as completed. Bonus: persist in localStorage.
// ● Counter App → Increment, decrement, reset, and 'Increment by N' input field.
// ● Form Handling → Build form with validation (name required, email format, password length).
// Show error messages in real-time.
// ● Conditional Rendering → Show/hide content on button click. Toggle between two components.
// ● List Rendering → Display list of users (static JSON). Add search filter.


import React, { useState } from "react";

const ToDo =()=>{
    const[data,setData] =useState([]);
    const[input,setInput] =useState('')
    const[editId,setEditId] = useState(null)

    const handleSave=()=>{
        if(editId){
           const result = data.map((each)=>each.id===editId? {...each,name:input} :each)
           setData(result);
           setEditId(null)

        }
        else{
        const obj ={
            id:Date.now(),
            name:input
        }
        setData((prev)=>[...prev,obj])

        }

        setInput('')
    }

    const handleEdit=(item)=>{
        setEditId(item.id)
        setInput(item.name)

    }

    const handleDelete =(id)=>{
console.log(id,"result")
       const result =  data.filter((each)=>each.id!==id)
       console.log(result,"result")
       setData(result)
    }

    return(
        <div>
            <h1>ToDo component</h1>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/> 
            <button onClick={handleSave}>save</button>
            {
                data?.map((each)=>(
                    <div key={each.id}>
                        <p>{each.name}</p>
                        <button onClick={()=>handleDelete(each.id)}>Delete</button>
                        <button onClick={()=>handleEdit(each)}>Edit</button>
                        </div>
                ))
            }
        </div>
    )

}

export default ToDo