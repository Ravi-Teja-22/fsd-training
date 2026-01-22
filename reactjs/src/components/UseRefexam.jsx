import React, { useState } from 'react'

const UseRefexam = () => {
    const inputref=useState()
    const handleclick=()=>{
        inputref.current.focus();
    }
  return (
    <div>
      <input type="text" ref={inputref}/>
      <button onClick={handleclick}>focus input</button>
    </div>
  )
}

export default UseRefexam
