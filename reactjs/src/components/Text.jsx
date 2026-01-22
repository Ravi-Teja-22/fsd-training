import React, { useState } from 'react'

const Text = () => {
    const [text,settext]=useState("");
    const [input,setinput]=useState("");
  return (
    <div>
      <input type="text"  id="te"placeholder='enter something' onInput={(e)=>{setinput(e.target.value)}}/>
      <button onClick={()=>{{settext(input)}}}>show1</button>
      {text}
    </div>
  )
}

export default Text
