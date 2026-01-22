import React, { useState } from 'react'

const Toggle = () => {
    const [Toggle,setToggle]=useState(true);
  return (
    <div>
      <button onClick={()=>{setToggle(!Toggle)}}>{Toggle?"show":"hide"}</button>
    </div>
  )
}

export default Toggle