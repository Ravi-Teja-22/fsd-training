import React, { useState } from 'react'

const Objexam = () => {
const [form,setform]=useState({email:"",password:""});
const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
}
const handleSubmit=()=>{
    alert(`hello ${form.email}`);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter email' name='email' value={form.email} onChange={handleChange} />
        <input type="password" placeholder='enter password' name='password' value={form.password} onChange={handleChange} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Objexam
