import React, { useState } from 'react'

const Arrexam = () => {
    const [input,setinput]=useState("");
    const [task,settask]=useState([]);
    const handleChange=(e)=>{
        setinput(e.target.value);
    }
    const handleClick=()=>{
        settask([...task,input]);
    }
  return (
    <div>
      <input type="text" placeholder='enter your task' onChange={handleChange}/>
      <button onClick={handleClick}>add task</button>
      {(task.length>0)?task.map((task)=>(<li>{task}</li>)):<p>no task added</p>}
    </div>
  )
}

export default Arrexam
