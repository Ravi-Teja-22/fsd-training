import React, { useState } from 'react'
import "../App.css";

const Count = () => {
    const [count, setCount] = useState(0);
    const dec=()=>{
        if(count===0){
            setCount(0);}
            else{setCount(count-1);}
    }
  return (
    <div className=''>
      <h1>count :{count}</h1>
      <div className="but">
      <button id="bt"onClick={()=>{setCount(count+1)}}>plus it</button>
        <button id="bt" onClick={dec}>minus it</button>
        <button id="bt" onClick={()=>{setCount(0)}}>reset it</button>
        </div>

    </div>
  )
}

export default Count
