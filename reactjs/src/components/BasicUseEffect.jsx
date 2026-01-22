import React, { useEffect } from 'react'

const BasicUseEffect = () => {
    useEffect(()=>{
    console.log("component rendered")});
  return (
    <div>
      check console log
    </div>
  )
}

export default BasicUseEffect
